import React from 'react';
import { LessonConfig, LessonProgress, ProgressMap } from '../types';

interface ReportScreenProps {
  lessons: LessonConfig[];
  progress: ProgressMap;
  onBack: () => void;
}

function formatTime(ts: number): string {
  if (!ts) return '';
  const d = new Date(ts);
  const pad = (n: number) => n.toString().padStart(2, '0');
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
}

function renderStars(n: number): string {
  return '⭐'.repeat(n) + '☆'.repeat(Math.max(0, 3 - n));
}

export const ReportScreen: React.FC<ReportScreenProps> = ({ lessons, progress, onBack }) => {
  const entries = (Object.values(progress) as LessonProgress[]).sort((a, b) => b.lastStudiedAt - a.lastStudiedAt);
  const totalAttempts = entries.reduce((sum, p) => sum + p.attempts, 0);
  const totalCorrect = entries.reduce((sum, p) => sum + p.lastCorrect, 0);
  const totalQuestions = entries.reduce((sum, p) => sum + p.lastTotal, 0);
  const totalStars = entries.reduce((sum, p) => sum + p.bestStars, 0);
  const accuracy = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0;

  const lessonsById = new Map<string, LessonConfig>(lessons.map((l) => [l.id, l]));

  return (
    <div className="min-h-screen bg-brand-cream p-4 flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <button onClick={onBack} className="text-2xl hover:scale-110 transition-transform" aria-label="Home">
          🏠
        </button>
        <h1 className="text-2xl font-black text-brand-blue">学习报告</h1>
        <span className="w-8" />
      </div>

      <div className="grid grid-cols-3 gap-3 max-w-md mx-auto w-full mb-6">
        <div className="bg-white rounded-2xl shadow p-3 text-center">
          <div className="text-2xl font-black text-brand-orange">{entries.length}</div>
          <div className="text-xs text-gray-500 font-bold mt-1">已学课程</div>
        </div>
        <div className="bg-white rounded-2xl shadow p-3 text-center">
          <div className="text-2xl font-black text-brand-blue">{totalAttempts}</div>
          <div className="text-xs text-gray-500 font-bold mt-1">练习次数</div>
        </div>
        <div className="bg-white rounded-2xl shadow p-3 text-center">
          <div className="text-2xl font-black text-brand-green">{totalStars}⭐</div>
          <div className="text-xs text-gray-500 font-bold mt-1">累计星星</div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow p-4 max-w-md mx-auto w-full mb-6 text-center">
        <div className="text-sm text-gray-500 font-bold">最近正确率</div>
        <div className="text-3xl font-black text-brand-green mt-1">{accuracy}%</div>
        <div className="text-xs text-gray-400 mt-1">
          {totalCorrect} / {totalQuestions}
        </div>
      </div>

      <div className="flex-1 max-w-md mx-auto w-full overflow-y-auto pb-6">
        <h2 className="text-sm font-bold text-gray-500 uppercase mb-2">课程明细</h2>
        {entries.length === 0 && (
          <div className="bg-white rounded-2xl shadow p-6 text-center text-gray-400 font-bold">
            还没有学习记录，快去挑战一节课吧！
          </div>
        )}
        <ul className="space-y-2">
          {entries.map((p) => {
            const lesson = lessonsById.get(p.lessonId);
            return (
              <li key={p.lessonId} className="bg-white rounded-2xl shadow p-3 flex items-center gap-3">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl font-black ${lesson?.color ?? 'bg-gray-100'}`}>
                  {lesson?.icon ?? '📘'}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-bold text-gray-700 truncate">{lesson?.topic ?? p.lessonId}</div>
                  <div className="text-xs text-gray-400">
                    {formatTime(p.lastStudiedAt)} · 练习 {p.attempts} 次
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm">{renderStars(p.bestStars)}</div>
                  <div className="text-xs text-gray-400">
                    {p.lastCorrect}/{p.lastTotal}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
