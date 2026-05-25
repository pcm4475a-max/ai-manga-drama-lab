import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Calendar, Shield, Tag, Info, Filter } from 'lucide-react';
import { sources, Source } from '../data/sources';
import { cn } from '../lib/utils';

const reliabilityLabels: Record<string, { label: string; bg: string; text: string; dot: string }> = {
  'high': { label: '高可靠', bg: 'bg-green-500/10', text: 'text-green-400', dot: 'bg-green-400' },
  'medium': { label: '中等', bg: 'bg-yellow-500/10', text: 'text-yellow-400', dot: 'bg-yellow-400' },
  'low': { label: '低可靠', bg: 'bg-red-500/10', text: 'text-red-400', dot: 'bg-red-400' },
};

const typeLabels: Record<string, { label: string; bg: string; text: string }> = {
  'official': { label: '官方', bg: 'bg-blue-500/10', text: 'text-blue-400' },
  'media': { label: '媒体', bg: 'bg-purple-500/10', text: 'text-purple-400' },
  'research': { label: '研究', bg: 'bg-green-500/10', text: 'text-green-400' },
  'community': { label: '社区', bg: 'bg-orange-500/10', text: 'text-orange-400' },
};

const sectionLabels: Record<string, string> = {
  'tools': '工具', 'platforms': '平台', 'monetization': '盈利', 'risks': '风险', 'general': '综合',
};

export default function SourcesPanel() {
  const [reliabilityFilter, setReliabilityFilter] = useState('全部');
  const [typeFilter, setTypeFilter] = useState('全部');

  const filtered = useMemo(() => {
    return sources.filter((s) => {
      const matchReliability = reliabilityFilter === '全部' || s.reliabilityLevel === reliabilityFilter;
      const matchType = typeFilter === '全部' || s.type === typeFilter;
      return matchReliability && matchType;
    });
  }, [reliabilityFilter, typeFilter]);

  return (
    <section id="sources" className="relative mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28">
      <motion.div className="mx-auto mb-12 max-w-4xl text-center" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.55 }}>
        <p className="mb-3 text-sm font-semibold text-blue-400">信息来源</p>
        <h2 className="text-balance text-3xl font-semibold text-white md:text-5xl">参考来源</h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 muted md:text-lg">所有信息的原始出处，方便验证和进一步研究。</p>
      </motion.div>

      {/* Filters */}
      <motion.div className="glass mb-8 rounded-2xl p-5 sm:p-6" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.5 }}>
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="text-xs font-medium muted uppercase tracking-wider"><Shield size={14} className="inline mr-1" />可靠度</span>
          {['全部', 'high', 'medium', 'low'].map((level) => (
            <button key={level} onClick={() => setReliabilityFilter(level)} className={cn('px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-200', reliabilityFilter === level ? 'bg-white/15 text-white' : 'bg-white/5 text-white/50 hover:bg-white/10 hover:text-white/80')}>
              {level === '全部' ? '全部' : reliabilityLabels[level]?.label ?? level}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-xs font-medium muted uppercase tracking-wider"><Tag size={14} className="inline mr-1" />类型</span>
          {['全部', 'official', 'media', 'research', 'community'].map((type) => (
            <button key={type} onClick={() => setTypeFilter(type)} className={cn('px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-200', typeFilter === type ? 'bg-white/15 text-white' : 'bg-white/5 text-white/50 hover:bg-white/10 hover:text-white/80')}>
              {type === '全部' ? '全部' : typeLabels[type]?.label ?? type}
            </button>
          ))}
        </div>
        <div className="mt-4 text-xs text-white/40">
          <Filter size={12} className="inline mr-1" />{filtered.length} / {sources.length} 条结果
        </div>
      </motion.div>

      {/* Source Cards */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((source, index) => {
            const rel = reliabilityLabels[source.reliabilityLevel] ?? reliabilityLabels['medium'];
            const typeInfo = typeLabels[source.type] ?? typeLabels['official'];
            const sectionLabel = sectionLabels[source.relatedSection] ?? source.relatedSection;

            return (
              <motion.div key={source.title} layout initial={{ opacity: 0, y: 20, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.35, delay: index * 0.03 }} className="surface overflow-hidden rounded-2xl border border-white/5 transition-all duration-300 hover:border-white/10">
                <div className="p-5">
                  {/* Title (linked) */}
                  <a href={source.url} target="_blank" rel="noopener noreferrer" className="mb-2 flex items-start gap-2 text-sm font-semibold text-white hover:text-blue-400 transition-colors">
                    {source.title}
                    <ExternalLink size={12} className="mt-0.5 shrink-0 text-white/30" />
                  </a>

                  {/* Publisher + Type badge */}
                  <div className="mb-3 flex flex-wrap items-center gap-2">
                    <span className="text-xs text-white/50">{source.publisher}</span>
                    <span className={cn('inline-flex items-center rounded-full px-2 py-0.5 text-[0.6rem] font-medium', typeInfo.bg, typeInfo.text)}>{typeInfo.label}</span>
                    <span className="text-[0.6rem] text-white/30">{sectionLabel}</span>
                  </div>

                  {/* lastChecked + reliability */}
                  <div className="mb-3 flex flex-wrap items-center gap-3 text-[11px]">
                    <span className="flex items-center gap-1 muted"><Calendar size={10} />{source.lastChecked}</span>
                    <span className={cn('inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[0.6rem] font-medium', rel.bg, rel.text)}><span className={cn('h-1.5 w-1.5 rounded-full', rel.dot)} />{rel.label}</span>
                  </div>

                  {/* Notes */}
                  <p className="text-[11px] leading-relaxed text-white/40">
                    <Info size={10} className="inline mr-1" />{source.notes}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Empty State */}
      {filtered.length === 0 && (
        <motion.div className="py-16 text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
          <Filter size={32} className="mx-auto mb-4 text-white/15" />
          <p className="text-sm muted">没有匹配的来源</p>
          <p className="mt-1 text-xs opacity-60 muted">尝试调整筛选条件</p>
        </motion.div>
      )}

      {/* Footer note */}
      <motion.div className="mx-auto mt-12 max-w-2xl text-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.3 }}>
        <p className="text-xs muted opacity-60 leading-relaxed">来源链接可能变化，如无法访问请尝试直接搜索工具或平台名称。价格和条款以官方最新发布为准。</p>
      </motion.div>
    </section>
  );
}
