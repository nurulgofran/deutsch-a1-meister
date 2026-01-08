import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, GraduationCap, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { XPDisplay } from '@/components/XPDisplay';
import { StreakDisplay } from '@/components/StreakDisplay';
import { LearningPath } from '@/components/LearningPath';
import { useApp } from '@/contexts/AppContext';
import { LessonId, lessons, isLessonUnlocked } from '@/data';
import { useAds } from '@/contexts/AdContext';

export default function Dashboard() {
  const navigate = useNavigate();
  const { t, progress, isLessonCompleted } = useApp();
  const { isPro } = useAds();
  const [showPath, setShowPath] = useState(false);

  // Find the next lesson to continue
  const getNextLesson = (): LessonId | null => {
    for (const lesson of lessons) {
      if (isLessonUnlocked(lesson.id, progress.xp, isPro) && !isLessonCompleted(lesson.id)) {
        return lesson.id;
      }
    }
    return lessons[0].id; // Fallback to first lesson
  };

  const handleSelectLesson = (lessonId: LessonId) => {
    navigate(`/learn/${lessonId}`);
  };

  const handleContinueLearning = () => {
    const nextLesson = getNextLesson();
    if (nextLesson) {
      navigate(`/learn/${nextLesson}`);
    }
  };

  const completedLessons = lessons.filter(l => isLessonCompleted(l.id)).length;

  return (
    <div className="min-h-screen pb-24 safe-area-top">
      {/* Header */}
      <div className="px-5 pt-6 pb-4">
        <h1 className="text-2xl font-bold mb-1">
          {t('dashboard.welcome')} 👋
        </h1>
        <p className="text-muted-foreground">
          {t('app.tagline')}
        </p>
      </div>

      <div className="px-5 space-y-4">
        {/* XP & Level Display */}
        <XPDisplay />

        {/* Streak Display */}
        <StreakDisplay />

        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-3">
          <Card>
            <CardContent className="p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/15 flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">{progress.wordsLearned.length}</p>
                <p className="text-xs text-muted-foreground">Words Learned</p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-purple-500/15 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">{completedLessons}/{lessons.length}</p>
                <p className="text-xs text-muted-foreground">Lessons Done</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Continue Learning Button */}
        <Button 
          className="w-full h-14 text-lg font-bold shadow-lg shadow-primary/20"
          onClick={handleContinueLearning}
        >
          <Play className="w-5 h-5 mr-2" />
          {t('dashboard.continuelearning')}
        </Button>

        {/* Learning Path Section */}
        <div className="pt-4">
          <LearningPath onSelectLesson={handleSelectLesson} />
        </div>
      </div>
    </div>
  );
}
