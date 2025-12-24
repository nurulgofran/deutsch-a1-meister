import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ChevronRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CategoryCard } from '@/components/CategoryCard';
import { QuestionCard } from '@/components/QuestionCard';
import { useApp } from '@/contexts/AppContext';
import { questions, categories } from '@/data/questions';
import { cn } from '@/lib/utils';

type ViewMode = 'categories' | 'questions';

export default function Study() {
  const navigate = useNavigate();
  const { recordAnswer, settings, t } = useApp();
  const [viewMode, setViewMode] = useState<ViewMode>('categories');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const categoryQuestions = selectedCategory
    ? questions.filter(q => q.category === selectedCategory)
    : [];

  const currentQuestion = categoryQuestions[currentQuestionIndex];

  const getQuestionsForCategory = (categoryId: string) => {
    return questions.filter(q => q.category === categoryId).length;
  };

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setCurrentQuestionIndex(0);
    setViewMode('questions');
  };

  const handleAnswer = (isCorrect: boolean) => {
    if (currentQuestion) {
      recordAnswer(currentQuestion.id, currentQuestion.category, isCorrect);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < categoryQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  const handleBack = () => {
    if (viewMode === 'questions') {
      setViewMode('categories');
      setSelectedCategory(null);
      setCurrentQuestionIndex(0);
    }
  };

  const progressValue = categoryQuestions.length > 0 
    ? ((currentQuestionIndex + 1) / categoryQuestions.length) * 100 
    : 0;

  if (viewMode === 'questions' && currentQuestion) {
    const categoryInfo = categories.find(c => c.id === selectedCategory);
    
    return (
      <div className="min-h-screen pb-28 safe-area-top">
        {/* Header with chunky progress */}
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
              <h1 className="font-display font-bold text-lg">
                {categoryInfo?.[settings.language === 'de' ? 'name_de' : 'name_en']}
              </h1>
              <p className="text-sm text-muted-foreground font-medium">
                {t('Frage', 'Question')} {currentQuestionIndex + 1} / {categoryQuestions.length}
              </p>
            </div>
          </div>
          
          {/* Chunky progress bar with orange gradient */}
          <div className="progress-chunky">
            <div 
              className="progress-chunky-fill"
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

          {/* Next Button - 3D Bubbly */}
          <div className="mt-6">
            {currentQuestionIndex < categoryQuestions.length - 1 ? (
              <Button 
                className={cn(
                  "w-full h-14 text-base font-display font-bold rounded-xl",
                  "btn-3d bg-primary hover:bg-primary"
                )}
                onClick={handleNext}
              >
                {t('Nächste Frage', 'Next Question')}
                <ChevronRight className="h-5 w-5 ml-1" />
              </Button>
            ) : (
              <Button 
                className={cn(
                  "w-full h-14 text-base font-display font-bold rounded-xl",
                  "btn-3d bg-primary hover:bg-primary"
                )}
                onClick={handleBack}
              >
                <Sparkles className="h-5 w-5 mr-2" />
                {t('Kategorie beenden', 'Finish Category')}
              </Button>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-28 safe-area-top">
      {/* Header */}
      <div className="px-5 pt-8 pb-5">
        <h1 className="text-3xl font-display font-bold tracking-tight mb-2">
          {t('Übungsmodus', 'Study Mode')}
        </h1>
        <p className="text-muted-foreground font-medium">
          {t('Wähle eine Kategorie zum Üben', 'Choose a category to practice')}
        </p>
      </div>

      {/* Categories with stagger animation */}
      <div className="px-5 space-y-4 stagger-children">
        {categories.map(category => (
          <CategoryCard
            key={category.id}
            id={category.id}
            name_de={category.name_de}
            name_en={category.name_en}
            icon={category.icon}
            totalQuestions={getQuestionsForCategory(category.id)}
            onClick={() => handleCategorySelect(category.id)}
          />
        ))}
      </div>
    </div>
  );
}
