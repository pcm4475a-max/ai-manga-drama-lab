import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, BookOpen, ChevronDown, ChevronUp, Tag, Link as LinkIcon } from 'lucide-react';
import { cn } from '../lib/utils';
import { glossaryTerms } from '../data/glossary';

const categoryMap: Record<string, string> = {
  'AI漫剧': '基础概念', '脚本': '创作流程', '剧本': '创作流程', '分镜': '创作流程',
  'Storyboard': '创作流程', 'Shot': '创作流程', 'Scene': '创作流程', 'Keyframe': '创作流程',
  'Prompt': 'AI提示词', '正向Prompt': 'AI提示词', '反向Prompt': 'AI提示词', 'Seed': 'AI提示词', 'Denoise': 'AI提示词',
  'LoRA': 'AI技术', 'Checkpoint': 'AI技术', 'ControlNet': 'AI技术', 'IP-Adapter': 'AI技术', 'Reference Image': 'AI技术',
  'Image to Video / I2V': '视频生成', 'Text to Video / T2V': '视频生成', 'Camera Movement': '视频生成',
  'Upscale': '视频生成', 'Interpolation': '视频生成', 'Dubbing': '后期制作', 'SFX': '后期制作', 'BGM': '后期制作', 'Lip Sync': '后期制作',
  'Batch': '制作效率', '废片率': '制作效率', 'ROI': '商业化', 'IAA': '商业化', 'IAP': '商业化', 'CPS': '商业化', '商单': '商业化', 'IP授权': '商业化',
};
const relatedMap: Record<string, string[]> = {
  'AI漫剧': ['脚本', '剧本', '分镜', '废片率'], '脚本': ['剧本', '分镜', 'Storyboard'], '剧本': ['脚本', '分镜', 'Shot', 'Scene'],
  '分镜': ['Storyboard', 'Keyframe', 'Shot', 'Camera Movement'], 'Prompt': ['正向Prompt', '反向Prompt', 'Seed', 'Denoise'],
  '正向Prompt': ['反向Prompt', 'Prompt', 'Denoise'], '反向Prompt': ['正向Prompt', 'Prompt'], 'Seed': ['Prompt', 'Denoise'],
  'LoRA': ['Checkpoint', 'ControlNet', 'IP-Adapter'], 'Checkpoint': ['LoRA', 'ControlNet'],
  'ControlNet': ['LoRA', 'IP-Adapter', 'Reference Image'], 'IP-Adapter': ['ControlNet', 'Reference Image', 'LoRA'],
  'Reference Image': ['IP-Adapter', 'ControlNet'], 'Image to Video / I2V': ['Text to Video / T2V', 'Keyframe', 'Camera Movement'],
  'Text to Video / T2V': ['Image to Video / I2V', 'Keyframe'], 'Keyframe': ['Storyboard', '分镜', 'Image to Video / I2V'],
  'Camera Movement': ['Shot', 'Keyframe', 'Image to Video / I2V'], 'Shot': ['Scene', 'Camera Movement', '分镜'],
  'Scene': ['Shot', '分镜'], 'Storyboard': ['分镜', 'Keyframe'], 'Dubbing': ['SFX', 'BGM', 'Lip Sync'],
  'SFX': ['Dubbing', 'BGM'], 'BGM': ['Dubbing', 'SFX'], 'Lip Sync': ['Dubbing'],
  'Upscale': ['Interpolation', 'Batch'], 'Interpolation': ['Upscale', 'Batch'], 'Denoise': ['Prompt', 'Seed'],
  'Batch': ['废片率', 'Upscale'], '废片率': ['Batch', 'ROI'], 'ROI': ['废片率', 'CPS', 'IAA', 'IAP'],
  'IAA': ['IAP', 'CPS', 'ROI'], 'IAP': ['IAA', 'CPS', 'ROI'], 'CPS': ['ROI', 'IAA', 'IAP'], '商单': ['IP授权', 'ROI'], 'IP授权': ['商单', 'ROI'],
};
interface EnrichedTerm { term: string; explanation: string; category: string; relatedTerms: string[]; }
const enrichedTerms: EnrichedTerm[] = glossaryTerms.map((t) => ({ ...t, category: categoryMap[t.term] || '其他', relatedTerms: relatedMap[t.term] || [] }));
const allCategories = ['全部', ...Array.from(new Set(enrichedTerms.map((t) => t.category))).sort()];

export default function Glossary() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('全部');
  const [expandedTerms, setExpandedTerms] = useState<Set<string>>(new Set());
  const filteredTerms = useMemo(() => {
    const q = search.toLowerCase();
    return enrichedTerms.filter((t) => { const m = !q || t.term.toLowerCase().includes(q) || t.explanation.toLowerCase().includes(q); return m && (activeCategory === '全部' || t.category === activeCategory); });
  }, [search, activeCategory]);
  const toggleExpand = (term: string) => setExpandedTerms((prev) => { const n = new Set(prev); n.has(term) ? n.delete(term) : n.add(term); return n; });
  const handleRelatedClick = (relatedTerm: string) => { setSearch(''); setActiveCategory('全部'); setExpandedTerms((prev) => { const n = new Set(prev); n.add(relatedTerm); return n; }); };

  return (
    <section id="glossary" className="relative mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28">
      <motion.div className="mx-auto mb-12 max-w-4xl text-center" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.55 }}>
        <p className="mb-3 text-sm font-semibold text-blue-400">术语百科</p><h2 className="text-balance text-3xl font-semibold text-white md:text-5xl">AI漫剧核心术语</h2><p className="mx-auto mt-5 max-w-2xl text-base leading-8 muted md:text-lg">理解这些术语，才能看懂教程、工具文档和行业讨论。</p>
      </motion.div>
      <motion.div className="mx-auto mb-8 max-w-md" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.1 }}>
        <div className="relative"><Search size={16} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30" /><input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="搜索术语..." className="w-full rounded-xl border border-white/10 bg-white/5 py-3 pl-10 pr-4 text-sm text-white placeholder:text-white/25 focus:border-white/20 focus:bg-white/8 focus:outline-none transition-all duration-200" /></div>
      </motion.div>
      <motion.div className="mb-10 flex flex-wrap items-center justify-center gap-2" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.2 }}>
        {allCategories.map((cat) => (<button key={cat} onClick={() => setActiveCategory(cat)} className={cn('rounded-full px-4 py-1.5 text-xs font-medium border transition-all duration-200', activeCategory === cat ? 'bg-white/15 text-white border-white/20' : 'bg-white/5 text-white/50 border-white/5 hover:text-white hover:bg-white/10 hover:border-white/10')}>{cat}</button>))}
      </motion.div>
      <motion.div layout className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {filteredTerms.map((t) => {
            const isExpanded = expandedTerms.has(t.term);
            return (
              <motion.div key={t.term} layout initial={{ opacity: 0, y: 20, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.35 }} className="surface overflow-hidden rounded-2xl border border-white/5 transition-all duration-300 hover:border-white/10">
                <button onClick={() => toggleExpand(t.term)} className="w-full p-5 text-left">
                  <div className="flex items-start justify-between gap-3"><div className="min-w-0 flex-1"><div className="mb-2 flex flex-wrap items-center gap-2.5"><h3 className="text-base font-semibold text-white">{t.term}</h3><span className="tag px-2 py-0.5 text-[0.6rem]">{t.category}</span></div><p className="text-sm leading-relaxed muted">{t.explanation}</p>
                    {isExpanded && t.relatedTerms.length > 0 && (<motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.25 }} className="overflow-hidden"><div className="mt-4 border-t border-white/5 pt-3"><div className="mb-2 flex items-center gap-1.5"><LinkIcon size={11} className="text-white/30" /><span className="text-[0.65rem] font-medium text-white/40">相关术语</span></div><div className="flex flex-wrap gap-1.5">{t.relatedTerms.map((related) => (<button key={related} onClick={(e) => { e.stopPropagation(); handleRelatedClick(related); }} className="inline-flex items-center gap-1 rounded-md border border-white/5 bg-white/5 px-2 py-0.5 text-[0.65rem] text-white/60 transition-all duration-150 hover:border-white/15 hover:bg-white/10 hover:text-white"><Tag size={9} />{related}</button>))}</div></div></motion.div>)}
                  </div><span className="mt-0.5 shrink-0 text-white/20">{isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}</span></div>
                </button>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
      {filteredTerms.length === 0 && (<motion.div className="py-16 text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}><BookOpen size={32} className="mx-auto mb-4 text-white/15" /><p className="text-sm muted">没有找到匹配的术语</p><p className="mt-1 text-xs opacity-60 muted">尝试修改搜索关键词或切换分类</p></motion.div>)}
    </section>
  );
}
