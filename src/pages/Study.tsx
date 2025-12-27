import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ChevronRight, Sparkles, Trophy, Search, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { CategoryCard } from '@/components/CategoryCard';
import { QuestionCard } from '@/components/QuestionCard';
import { useApp } from '@/contexts/AppContext';
import { questions, categories, Question } from '@/data/questions/index';
import { shuffleArray } from '@/lib/utils';
import { useAds } from '@/contexts/AdContext';

type ViewMode = 'categories' | 'questions' | 'search';

export default function Study() {
  const navigate = useNavigate();
  const { recordAnswer, settings, t, progress } = useApp();
  const { triggerInterstitial } = useAds();
  const [viewMode, setViewMode] = useState<ViewMode>('categories');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [studyQueue, setStudyQueue] = useState<Question[]>([]);
  const [isReviewMode, setIsReviewMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Filter questions based on search query
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const query = searchQuery.toLowerCase().trim();
    return questions.filter(q => {
      const textDe = q.text_de.toLowerCase();
      const textEn = q.text_en.toLowerCase();
      const id = q.id.toLowerCase();
      return textDe.includes(query) || textEn.includes(query) || id === query;
    });
  }, [searchQuery]);

  const currentQuestion = studyQueue[currentQuestionIndex];

  const getQuestionsForCategory = (categoryId: string) => {
    return questions.filter(q => q.category === categoryId).length;
  };

  const calculateMastery = (categoryId: string) => {
    const catQuestions = questions.filter(q => q.category === categoryId);
    const mastered = catQuestions.filter(q => progress.questionsAnswered[q.id]).length;
    return mastered;
  };

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
    
    // Smart Learning Logic:
    // 1. Filter questions for this category
    const catQuestions = questions.filter(q => q.category === categoryId);
    
    // 2. Separate into mastered (correctly answered) and unmastered (wrong or unseen)
    const unmastered = catQuestions.filter(q => {
      const isAnswered = q.id in progress.questionsAnswered;
      const isCorrect = progress.questionsAnswered[q.id];
      return !isAnswered || !isCorrect;
    });

    // 3. Determine pool: Prioritize unmastered. If all mastered, review all.
    let queue: Question[] = [];
    if (unmastered.length > 0) {
      queue = shuffleArray(unmastered);
      setIsReviewMode(false);
    } else {
      // All mastered! Review mode with full category shuffle
      queue = shuffleArray(catQuestions);
      setIsReviewMode(true);
    }

    setStudyQueue(queue);
    setCurrentQuestionIndex(0);
    setViewMode('questions');
  };

  const handleAnswer = (isCorrect: boolean) => {
    if (currentQuestion) {
      recordAnswer(currentQuestion.id, currentQuestion.category, isCorrect);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < studyQueue.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  const handleBack = async () => {
    if (viewMode === 'questions') {
      // Trigger session break ad
      await triggerInterstitial();
      
      setViewMode('categories');
      setSelectedCategory(null);
      setCurrentQuestionIndex(0);
      setStudyQueue([]);
    } else if (viewMode === 'search') {
      setViewMode('categories');
      setSearchQuery('');
    }
  };

  const handleSearchResultClick = (question: Question) => {
    setStudyQueue([question]);
    setCurrentQuestionIndex(0);
    setViewMode('questions');
    setIsReviewMode(false);
  };

  const progressValue = studyQueue.length > 0 
    ? ((currentQuestionIndex + 1) / studyQueue.length) * 100 
    : 0;

  if (viewMode === 'questions' && currentQuestion) {
    const categoryInfo = categories.find(c => c.id === selectedCategory);
    
    return (
      <div className="min-h-screen pb-24 safe-area-top">
        {/* Header */}
        <div className="sticky top-0 z-10 glass border-b border-border/50 px-4 py-4">
          <div className="flex items-center gap-3 mb-3">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={handleBack}
              className="rounded-xl hover:bg-primary/10"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div className="flex-1">
              <h1 className="font-display font-bold text-lg flex items-center gap-2">
                {categoryInfo?.[settings.language === 'de' ? 'name_de' : 'name_en']}
                {isReviewMode && (
                  <span className="text-xs bg-accent/10 text-accent px-2 py-0.5 rounded-full border border-accent/20">
                    Review
                  </span>
                )}
              </h1>
              <p className="text-sm text-muted-foreground font-medium">
                {t('Frage', 'Question')} {currentQuestionIndex + 1} / {studyQueue.length}
              </p>
            </div>
          </div>
          
          {/* Progress bar with gradient */}
          <div className="relative h-2.5 bg-muted rounded-full overflow-hidden">
            <div 
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary to-primary-glow rounded-full transition-all duration-500"
              style={{ width: `${progressValue}%` }}
            />
          </div>
        </div>

        {/* Question */}
        <div className="p-5">
          <QuestionCard
            key={currentQuestion.id}
            question={currentQuestion}
            showFeedback={true}
            onAnswer={handleAnswer}
          />

          {/* Next Button */}
          <div className="mt-6">
            {currentQuestionIndex < studyQueue.length - 1 ? (
              <Button 
                className="w-full h-14 text-base font-display font-bold rounded-xl shadow-button animate-pop gap-2"
                onClick={handleNext}
              >
                {t('Nächste Frage', 'Next Question')}
                <ChevronRight className="h-5 w-5" />
              </Button>
            ) : (
              <Button 
                className="w-full h-14 text-base font-display font-bold rounded-xl shadow-button animate-pop gap-2"
                onClick={handleBack}
              >
                <Sparkles className="h-5 w-5" />
                {t('Kategorie beenden', 'Finish Category')}
              </Button>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Search view
  if (viewMode === 'search') {
    return (
      <div className="min-h-screen pb-24 safe-area-top">
        {/* Header */}
        <div className="sticky top-0 z-10 glass border-b border-border/50 px-4 py-4">
          <div className="flex items-center gap-3">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={handleBack}
              className="rounded-xl hover:bg-primary/10"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                autoFocus
                placeholder={t('Frage suchen...', 'Search questions...')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-10 h-11 rounded-xl border-border/50 bg-background/50"
              />
              {searchQuery && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 rounded-lg"
                >
                  <X className="h-4 w-4" />
                </Button>
              )}
            </div>
          </div>
        </div>

        {/* Search Results */}
        <div className="p-5 space-y-3">
          {searchQuery.trim() === '' ? (
            <p className="text-center text-muted-foreground py-8">
              {t('Gib einen Suchbegriff ein', 'Enter a search term')}
            </p>
          ) : searchResults.length === 0 ? (
            <p className="text-center text-muted-foreground py-8">
              {t('Keine Fragen gefunden', 'No questions found')}
            </p>
          ) : (
            <>
              <p className="text-sm text-muted-foreground mb-4">
                {searchResults.length} {t('Fragen gefunden', 'questions found')}
              </p>
              {searchResults.slice(0, 20).map(question => {
                const isAnswered = question.id in progress.questionsAnswered;
                const isCorrect = progress.questionsAnswered[question.id];
                const categoryInfo = categories.find(c => c.id === question.category);
                
                return (
                  <button
                    key={question.id}
                    onClick={() => handleSearchResultClick(question)}
                    className="w-full text-left p-4 rounded-xl border border-border/50 bg-card hover:bg-card/80 transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-xs font-bold text-muted-foreground bg-muted px-2 py-1 rounded-md shrink-0">
                        #{question.id}
                      </span>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium leading-relaxed line-clamp-2">
                          {settings.language === 'de' ? question.text_de : question.text_en}
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <span className="text-xs text-muted-foreground">
                            {categoryInfo?.[settings.language === 'de' ? 'name_de' : 'name_en']}
                          </span>
                          {isAnswered && (
                            <span className={`text-xs px-2 py-0.5 rounded-full ${isCorrect ? 'bg-green-500/10 text-green-600' : 'bg-red-500/10 text-red-600'}`}>
                              {isCorrect ? '✓' : '✗'}
                            </span>
                          )}
                        </div>
                      </div>
                      <ChevronRight className="h-4 w-4 text-muted-foreground shrink-0 mt-1" />
                    </div>
                  </button>
                );
              })}
              {searchResults.length > 20 && (
                <p className="text-center text-sm text-muted-foreground py-2">
                  {t('Zeige 20 von', 'Showing 20 of')} {searchResults.length} {t('Ergebnissen', 'results')}
                </p>
              )}
            </>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-24 safe-area-top relative overflow-hidden">
      {/* Background decoration - pointer-events-none to prevent blocking clicks */}
      <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-politics/10 blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -left-40 w-60 h-60 rounded-full bg-history/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-48 h-48 rounded-full bg-society/10 blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="relative px-5 pt-8 pb-6">
        <h1 className="text-3xl font-display font-extrabold tracking-tight mb-2">
          {t('Übungsmodus', 'Study Mode')}
        </h1>
        <p className="text-muted-foreground font-medium">
          {t('Wähle eine Kategorie zum Üben', 'Choose a category to practice')}
        </p>
      </div>

      {/* Search Bar */}
      <div className="relative px-5 mb-4">
        <button
          onClick={() => setViewMode('search')}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl border border-border/50 bg-card/50 hover:bg-card transition-colors"
        >
          <Search className="h-4 w-4 text-muted-foreground" />
          <span className="text-muted-foreground text-sm">
            {t('Frage suchen...', 'Search questions...')}
          </span>
        </button>
      </div>

      {/* Categories with stagger animation */}
      <div className="relative px-5 space-y-4 stagger-children">
        {categories.map(category => {
          const total = getQuestionsForCategory(category.id);
          const mastered = calculateMastery(category.id);
          const progressPercent = Math.round((mastered / total) * 100);
          
          return (
            <div key={category.id} className="relative group">
              <CategoryCard
                id={category.id}
                name_de={category.name_de}
                name_en={category.name_en}
                icon={category.icon}
                totalQuestions={total}
                onClick={() => handleCategorySelect(category.id)}
              />
              {/* Mastery Badge */}
              {mastered > 0 && (
                <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm px-2 py-1 rounded-lg text-xs font-bold shadow-sm border border-border flex items-center gap-1">
                  <Trophy className="w-3 h-3 text-accent" />
                  {progressPercent}%
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
