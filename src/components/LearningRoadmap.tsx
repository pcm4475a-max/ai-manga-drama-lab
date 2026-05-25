import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Copy, Calendar, Clock, Target, ArrowRight, CheckCheck } from 'lucide-react';
import { roadmaps } from '../data/roadmaps';
import { cn, copyToClipboard } from '../lib/utils';

type ViewDays = '30' | '90';

export default function LearningRoadmap() {
  const [view, setView] = useState<ViewDays>('30');
  const [copied, setCopied] = useState(false);

  const thirty = roadmaps.thirty.map(([label, desc]) => ({ label, desc }));
  const ninety = roadmaps.ninety.map(([label, desc]) => ({ label, desc }));

  const handleCopy = async () => {
    const data = view === '30' ? thirty : ninety;
    const text = data.map((d) => `${d.label}: ${d.desc}`).join('\n');
    const ok = await copyToClipboard(text);
    if (ok) { setCopied(true); setTimeout(() => setCopied(false), 2000); }
  };

  return (
    <section id="roadmap" className="relative mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28">
      <motion.div className="mx-auto mb-12 max-w-4xl text-center" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.55 }}>
        <p className="mb-3 text-sm font-semibold text-blue-400">学习路线</p>
        <h2 className="text-balance text-3xl font-semibold text-white md:text-5xl">学习路线图</h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 muted md:text-lg">系统化的学习计划，从零基础到完成第一条AI漫剧。</p>
      </motion.div>

      {/* Toggle */}
      <motion.div className="mb-10 flex items-center justify-center gap-2" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
        <button onClick={() => setView('30')} className={cn('rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-200', view === '30' ? 'bg-white text-black' : 'bg-white/5 text-white/60 hover:bg-white/10')}>30天入门</button>
        <button onClick={() => setView('90')} className={cn('rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-200', view === '90' ? 'bg-white text-black' : 'bg-white/5 text-white/60 hover:bg-white/10')}>90天进阶</button>
          <button onClick={handleCopy} className="copy-btn ml-4">
          <Copy size={12} />{copied ? '已复制' : '复制计划'}
        </button>
      </motion.div>

      <AnimatePresence mode="wait">
        {view === '30' && (
          <motion.div key="30" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.35 }} className="relative">
            <div className="timeline-line hidden md:block" style={{ left: '50%', transform: 'translateX(-50%)' }} />
            <div className="space-y-6">
              {thirty.map((item, index) => {
                const isLeft = index % 2 === 0;
                return (
                  <motion.div key={item.label} initial={{ opacity: 0, x: isLeft ? -20 : 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.4, delay: index * 0.05 }} className={cn('flex justify-center', isLeft ? 'md:justify-start' : 'md:justify-end')}>
                    <div className={cn('surface w-full rounded-2xl p-5 md:w-[46%]')}>
                      <div className="mb-3 flex items-center gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-500/15 text-sm font-bold text-blue-400">{index + 1}</div>
                        <div>
                          <p className="text-sm font-semibold text-blue-400">{item.label}</p>
                        </div>
                      </div>
                      <p className="text-sm leading-relaxed text-white/80">{item.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}

        {view === '90' && (
          <motion.div key="90" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.35 }}>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {ninety.map((item, index) => {
                const colors = [
                  { bg: 'from-blue-500/10 to-blue-500/5', border: 'border-blue-500/20', accent: 'text-blue-400', badge: 'bg-blue-500/15 text-blue-400' },
                  { bg: 'from-purple-500/10 to-purple-500/5', border: 'border-purple-500/20', accent: 'text-purple-400', badge: 'bg-purple-500/15 text-purple-400' },
                  { bg: 'from-green-500/10 to-green-500/5', border: 'border-green-500/20', accent: 'text-green-400', badge: 'bg-green-500/15 text-green-400' },
                ];
                const c = colors[index];
                const weekBreakdowns = [
                  ['第1周: 理解流程、看案例、确定题材', '第2周: 学习剧本、角色设定、分镜', '第3周: 学习Prompt、做角色图和场景图', '第4周: 学习视频生成、测试工具'],
                  ['第5周: 专攻角色一致性和风格统一', '第6周: 优化分镜稳定性和废片率', '第7周: 配音、BGM、音效完善', '第8周: 剪辑、字幕、完整成片'],
                  ['第9周: 建立角色资产库和风格模板', '第10周: 系列化内容规划和成本模型', '第11周: 发布节奏优化和数据复盘', '第12周: 商业化探索和案例集整理'],
                ];
                return (
                  <motion.div key={item.label} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.45, delay: index * 0.1 }} className={cn('bg-gradient-to-br rounded-2xl border p-6', c.bg, c.border)}>
                    <div className="mb-4">
                      <span className={cn('inline-flex rounded-full px-3 py-1 text-xs font-bold', c.badge)}>{item.label}</span>
                    </div>
                    <p className="mb-4 text-sm leading-relaxed text-white/80">{item.desc}</p>

                    {weekBreakdowns[index] && (
                      <div className="space-y-2.5">
                        <p className="flex items-center gap-1.5 text-xs font-semibold text-white/50"><Calendar size={12} />周计划</p>
                        {weekBreakdowns[index].map((week, wi) => (
                          <div key={wi} className="flex items-start gap-2 rounded-lg bg-white/5 px-3 py-2">
                            <Target size={12} className={cn('mt-0.5 shrink-0', c.accent)} />
                            <p className="text-xs leading-relaxed text-white/70">{week}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Disclaimer */}
      <motion.div className="mx-auto mt-12 max-w-2xl text-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.3 }}>
        <p className="text-xs muted opacity-60 leading-relaxed">以上时间线仅为参考，实际进度取决于个人投入时间和学习效率。</p>
      </motion.div>
    </section>
  );
}
