import { useState } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, XCircle, CheckCircle2, Lightbulb, ChevronDown, ChevronUp } from 'lucide-react';
import { mistakes } from '../data/mistakes';

export default function CommonMistakes() {
  const [expandedIds, setExpandedIds] = useState<Set<number>>(new Set());
  const toggleExpand = (id: number) => setExpandedIds((prev) => { const n = new Set(prev); n.has(id) ? n.delete(id) : n.add(id); return n; });

  return (
    <section id="mistakes" className="relative mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28">
      <motion.div className="mx-auto mb-12 max-w-4xl text-center" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.55 }}>
        <p className="mb-3 text-sm font-semibold text-orange-400">新手常见坑位</p><h2 className="text-balance text-3xl font-semibold text-white md:text-5xl">避开这些坑，少走弯路</h2><p className="mx-auto mt-5 max-w-2xl text-base leading-8 muted md:text-lg">每个创作者都会遇到这些问题。提前了解不是让你不犯错，而是让你更快识别并改正。</p>
      </motion.div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {mistakes.map((item, index) => {
          const id = index + 1; const isExpanded = expandedIds.has(id); const isEven = index % 2 === 0;
          return (
            <motion.div key={id} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.4, delay: index * 0.03 }} whileHover={{ x: 2 }}
              className={`surface rounded-2xl border border-white/5 border-l-4 ${isEven ? 'border-l-red-500/40' : 'border-l-orange-500/40'} overflow-hidden transition-all duration-300 hover:border-white/10`}>
              <button onClick={() => toggleExpand(id)} className="flex w-full items-start gap-4 p-5 text-left sm:p-6">
                <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-sm font-bold ${isEven ? 'bg-red-500/15 text-red-400' : 'bg-orange-500/15 text-orange-400'}`}>{String(id).padStart(2, '0')}</div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-3"><div className="flex min-w-0 items-start gap-2"><XCircle size={15} className="mt-0.5 shrink-0 text-red-400" /><p className="text-sm font-semibold text-orange-400 leading-snug">{item.title}</p></div><span className="shrink-0 text-white/30">{isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}</span></div>
                  {isExpanded && (<motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden"><div className="mt-4"><div className="flex items-start gap-2.5"><AlertTriangle size={14} className="mt-0.5 shrink-0 text-orange-400" /><div><p className="mb-1 text-xs font-medium text-orange-400">为什么错</p><p className="text-sm leading-relaxed muted">{item.why}</p></div></div></div><div className="mt-4"><div className="flex items-start gap-2.5"><CheckCircle2 size={14} className="mt-0.5 shrink-0 text-emerald-400" /><div><p className="mb-1 text-xs font-medium text-emerald-400">正确做法</p><p className="text-sm leading-relaxed text-emerald-300/80">{item.fix}</p></div></div></div></motion.div>)}
                </div>
              </button>
            </motion.div>
          );})}
      </div>
      <motion.div className="mx-auto mt-12 max-w-2xl text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.5, delay: 0.4 }}>
        <div className="surface rounded-2xl border border-white/10 p-5"><div className="flex items-center justify-center gap-2.5"><Lightbulb size={16} className="text-yellow-400" /><p className="text-sm muted">犯错是学习的一部分。关键不是不犯错，而是犯过错后能识别并改正。</p></div></div>
      </motion.div>
    </section>
  );
}
