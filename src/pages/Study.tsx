import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CategoryCard } from '@/components/CategoryCard';
import { QuestionCard } from '@/components/QuestionCard';
import { Progress } from '@/components/ui/progress';
import { useApp } from '@/contexts/AppContext';
import { questions, categories } from '@/data/questions';

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
    return (
      <div className="min-h-screen pb-24 safe-area-top">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-background/95 backdrop-blur-sm border-b border-border px-4 py-3">
          <div className="flex items-center gap-3 mb-2">
            <Button variant="ghost" size="icon" onClick={handleBack}>
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div className="flex-1">
              <h1 className="font-semibold">
                {categories.find(c => c.id === selectedCategory)?.[settings.language === 'de' ? 'name_de' : 'name_en']}
              </h1>
              <p className="text-sm text-muted-foreground">
                {t('Frage', 'Question')} {currentQuestionIndex + 1} / {categoryQuestions.length}
              </p>
            </div>
          </div>
          <Progress value={progressValue} className="h-2" />
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
            {currentQuestionIndex < categoryQuestions.length - 1 ? (
              <Button 
                className="w-full h-12 text-base font-semibold"
                onClick={handleNext}
              >
                {t('Nächste Frage', 'Next Question')}
                <ChevronRight className="h-5 w-5 ml-1" />
              </Button>
            ) : (
              <Button 
                className="w-full h-12 text-base font-semibold"
                onClick={handleBack}
              >
                {t('Kategorie beenden', 'Finish Category')}
              </Button>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-24 safe-area-top">
      {/* Header */}
      <div className="px-5 pt-6 pb-4">
        <h1 className="text-2xl font-bold mb-1">
          {t('Übungsmodus', 'Study Mode')}
        </h1>
        <p className="text-muted-foreground">
          {t('Wähle eine Kategorie zum Üben', 'Choose a category to practice')}
        </p>
      </div>

      {/* Categories */}
      <div className="px-5 space-y-3">
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
