// @ts-nocheck
import { motion } from 'framer-motion';
import { Wrench, CheckCircle, XCircle, DollarSign, Star, Zap } from 'lucide-react';
import { toolStacks } from '../data/toolStacks';
import { cn, formatCurrency } from '../lib/utils';

const stackColors: Record<number, { bg: string; border: string; accent: string; badge: string; icon: string }> = {
  0: { bg: 'from-green-500/10 to-green-500/5', border: 'border-green-500/25', accent: 'text-green-400', badge: 'bg-green-500/15 text-green-400', icon: 'text-green-400' },
  1: { bg: 'from-blue-500/10 to-blue-500/5', border: 'border-blue-500/25', accent: 'text-blue-400', badge: 'bg-blue-500/15 text-blue-400', icon: 'text-blue-400' },
  2: { bg: 'from-purple-500/10 to-purple-500/5', border: 'border-purple-500/25', accent: 'text-purple-400', badge: 'bg-purple-500/15 text-purple-400', icon: 'text-purple-400' },
  3: { bg: 'from-orange-500/10 to-orange-500/5', border: 'border-orange-500/25', accent: 'text-orange-400', badge: 'bg-orange-500/15 text-orange-400', icon: 'text-orange-400' },
  4: { bg: 'from-pink-500/10 to-pink-500/5', border: 'border-pink-500/25', accent: 'text-pink-400', badge: 'bg-pink-500/15 text-pink-400', icon: 'text-pink-400' },
};

const estimatedCosts: Record<number, number> = {
  0: 150, 1: 1500, 2: 2000, 3: 5000, 4: 2500,
};

const difficultyLevels: Record<number, { label: string; color: string }> = {
  0: { label: '入门', color: 'text-green-400 bg-green-400/10' },
  1: { label: '进阶', color: 'text-blue-400 bg-blue-400/10' },
  2: { label: '高级', color: 'text-purple-400 bg-purple-400/10' },
  3: { label: '专业', color: 'text-orange-400 bg-orange-400/10' },
  4: { label: '进阶', color: 'text-blue-400 bg-blue-400/10' },
};

const prosData: Record<number, string[]> = {
  0: ['月费低，起步快', '国内工具上手简单', '适合快速验证想法'],
  1: ['画面质量高', '音质出色', '适合作品集展示'],
  2: ['完全可控', '角色一致性最好', '适合长期系列化'],
  3: ['生产效率最高', '适合团队协作', '质量接近专业水平'],
  4: ['覆盖海外市场', '多语言能力强', '全球分发潜力'],
};

const consData: Record<number, string[]> = {
  0: ['可控性有限', '质量天花板低', '免费额度限制多'],
  1: ['月费较高', 'Midjourney需Discord', '学习成本中等'],
  2: ['学习曲线陡峭', '需要好的显卡', '搭建和调试耗时'],
  3: ['月费最高', '需要团队管理', '版权流程复杂'],
  4: ['语言本地化难', '平台规则复杂', '税务合规要求'],
};

export default function ToolStacks() {
  return (
    <section id="tool-stacks" className="relative mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28">
      <motion.div className="mx-auto mb-12 max-w-4xl text-center" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.55 }}>
        <p className="mb-3 text-sm font-semibold text-blue-400">工具方案</p>
        <h2 className="text-balance text-3xl font-semibold text-white md:text-5xl">工具组合方案</h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 muted md:text-lg">根据你的目标和预算，选择最适合的工具组合。从入门到专业。</p>
      </motion.div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
  {toolStacks.map((stack, index) => {
          const c = stackColors[index] ?? stackColors[0];
          const cost = estimatedCosts[index] ?? 200;
          const diff = difficultyLevels[index] ?? { label: '入门', color: 'text-green-400 bg-green-400/10' };
          const pros = prosData[index] ?? ['易于上手'];
          const cons = consData[index] ?? ['部分功能受限'];

          return (
            <motion.div key={stack.name} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.45, delay: index * 0.08 }} className={cn('bg-gradient-to-br rounded-2xl border p-6 overflow-hidden', c.bg, c.border)}>
              <div className="mb-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5">
                    <Wrench size={18} className={c.icon} />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{stack.name}</h3>
                </div>
                <span className={cn('inline-flex items-center rounded-full px-2.5 py-0.5 text-[0.65rem] font-bold', diff.color)}>{diff.label}</span>
              </div>

              <p className="mb-4 text-xs leading-relaxed text-white/60"><span className="font-semibold text-white/80">最适合：</span>{stack.bestFor}</p>

              {/* Tools */}
              <div className="mb-4">
                <p className="mb-2 flex items-center gap-1.5 text-xs font-semibold text-white/50"><Zap size={12} />工具列表</p>
                <div className="flex flex-wrap gap-1.5">
                  {stack.tools.map((tool) => (
                    <span key={tool} className={cn('rounded-full px-2.5 py-1 text-[0.65rem] font-medium border', c.accent, 'border-current/20 bg-current/5')}>{tool}</span>
                  ))}
                </div>
              </div>

              {/* Pros/Cons */}
              <div className="mb-4 grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-green-500/15 bg-green-500/5 p-3">
                  <p className="mb-1.5 flex items-center gap-1 text-[0.6rem] font-semibold text-green-400"><CheckCircle size={10} />优势</p>
                  <ul className="space-y-1">{pros.map((p) => (<li key={p} className="flex items-start gap-1 text-[0.6rem] leading-relaxed text-white/60"><span className="mt-0.5 shrink-0 text-green-400">+</span>{p}</li>))}</ul>
                </div>
                <div className="rounded-xl border border-red-500/15 bg-red-500/5 p-3">
                  <p className="mb-1.5 flex items-center gap-1 text-[0.6rem] font-semibold text-red-400"><XCircle size={10} />短板</p>
                  <ul className="space-y-1">{cons.map((c) => (<li key={c} className="flex items-start gap-1 text-[0.6rem] leading-relaxed text-white/60"><span className="mt-0.5 shrink-0 text-red-400">-</span>{c}</li>))}</ul>
                </div>
              </div>

              {/* Cost & Warning */}
              <div className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-3">
                <div className="flex items-center gap-1.5">
                  <DollarSign size={13} className={c.accent} />
                  <span className="text-sm font-semibold text-white">~{formatCurrency(cost)}/月</span>
                </div>
                <span className="text-[0.6rem] italic text-orange-400/70">{stack.warning}</span>
              </div>
            </motion.div>
          );
        })}
        </div>

      <motion.div className="mx-auto mt-10 max-w-lg text-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.2 }}>
        <p className="text-xs muted">价格仅供参考，以各工具官方网站最新定价为准。建议从低成本方案开始，逐步升级。</p>
      </motion.div>
    </section>
  );
}

