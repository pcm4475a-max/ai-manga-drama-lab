// @ts-nocheck
import { motion } from 'framer-motion';
import { ShieldAlert, AlertTriangle, FileText, ExternalLink } from 'lucide-react';
import { commercialRisks } from '../data/commercialRisks';
import { cn } from '../lib/utils';

const severityConfig: Record<number, { label: string; bg: string; text: string; border: string }> = {
  0: { label: '高危', bg: 'bg-red-500/10', text: 'text-red-400', border: 'border-red-500/30' },
  1: { label: '高危', bg: 'bg-red-500/10', text: 'text-red-400', border: 'border-red-500/30' },
  2: { label: '高危', bg: 'bg-red-500/10', text: 'text-red-400', border: 'border-red-500/30' },
  3: { label: '高危', bg: 'bg-red-500/10', text: 'text-red-400', border: 'border-red-500/30' },
  4: { label: '中危', bg: 'bg-orange-500/10', text: 'text-orange-400', border: 'border-orange-500/30' },
  5: { label: '中危', bg: 'bg-orange-500/10', text: 'text-orange-400', border: 'border-orange-500/30' },
  6: { label: '中危', bg: 'bg-orange-500/10', text: 'text-orange-400', border: 'border-orange-500/30' },
  7: { label: '中危', bg: 'bg-orange-500/10', text: 'text-orange-400', border: 'border-orange-500/30' },
  8: { label: '提醒', bg: 'bg-amber-500/10', text: 'text-amber-400', border: 'border-amber-500/30' },
  9: { label: '提醒', bg: 'bg-amber-500/10', text: 'text-amber-400', border: 'border-amber-500/30' },
};

const preventionChecklists: Record<number, string[]> = {
  0: ['确认原创性，不改编受版权保护的作品', '如用他人IP，获取正式授权', '保留创作过程记录证明原创'],
  1: ['阅读目标平台的最新创作者规则', '及时打上AI内容标识', '避免搬运、重复和低质内容判定'],
  2: ['阅读每个AI工具的商用条款', '确认使用的套餐等级允许商用', '保留购买凭证和授权证明'],
  3: ['不使用真人肖像、网红、明星形象', '不克隆他人声音用于商用', '使用合成角色和合成声音'],
  4: ['使用明确标注可商用的BGM和音效', '避免使用流行歌曲、影视原声', '优先使用CC0或已购素材'],
  5: ['签订正式合同，明确版权归属', '明确收益分配比例和支付方式', '明确授权范围、期限和区域'],
  6: ['投流前先小样本测试ROI', '设定每日/每周投放上限', '亏损时立即暂停，分析原因'],
  7: ['如实说明收益的不确定性', '强调路径、变量和前提条件', '不夸大、不承诺具体收入数字'],
  8: ['定期检查工具定价变化', '关注平台政策更新', '更新本资料中的时效性信息'],
  9: ['了解平台内容审核标准', '避免暴力、低俗、擦边内容', '避免封建迷信和虚假宣传'],
};

export default function CommercialRisks() {
  return (
    <section id="risks" className="relative mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28">
      <motion.div className="mx-auto mb-12 max-w-4xl text-center" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.55 }}>
        <p className="mb-3 text-sm font-semibold text-red-400">商业化风险</p>
        <h2 className="text-balance text-3xl font-semibold text-white md:text-5xl">商业化风险与合规</h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 muted md:text-lg">严肃对待版权、平台规则和合同风险。这不是吓唬你，是保护你。</p>
      </motion.div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {commercialRisks.map((risk, index) => {
          const sev = severityConfig[index] ?? severityConfig[9];
          const checklist = preventionChecklists[index] ?? ['注意相关法律法规和平台规则'];
          return (
            <motion.div key={risk.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.4, delay: index * 0.04 }} className={cn('surface rounded-2xl border-l-4 overflow-hidden transition-all duration-300 hover:border-white/15', sev.border)}>
              <div className="p-5 sm:p-6">
                <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <ShieldAlert size={16} className={sev.text} />
                    <h3 className="text-base font-semibold text-white">{risk.title}</h3>
                  </div>
                  <span className={cn('inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[0.65rem] font-bold border', sev.bg, sev.text, sev.border)}>
                    <AlertTriangle size={10} />{sev.label}
                  </span>
                </div>

                <p className="mb-4 text-sm leading-relaxed text-white/70">{risk.detail}</p>

                {/* Prevention checklist */}
                <div className={cn('rounded-xl p-4', sev.bg)}>
                  <p className={cn('mb-2 text-xs font-semibold', sev.text)}>预防措施</p>
                  <ul className="space-y-1.5">
                    {checklist.map((item, ci) => (
                      <li key={ci} className="flex items-start gap-2 text-xs text-white/60">
                        <span className={cn('mt-1 h-1.5 w-1.5 shrink-0 rounded-full', sev.text.replace('text-', 'bg-'))} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Legal Disclaimer */}
      <motion.div className="mx-auto mt-12 max-w-3xl" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.5, delay: 0.3 }}>
        <div className="flex items-start gap-3 rounded-2xl border border-red-500/20 bg-red-500/5 p-5">
          <FileText size={18} className="mt-0.5 shrink-0 text-red-400" />
          <div>
            <p className="mb-1 text-sm font-semibold text-red-400">法律免责声明</p>
            <p className="text-xs leading-relaxed text-red-300/70">
              本页面内容仅为信息参考，不构成法律建议。AI创作涉及的版权、商业使用、平台规则等问题可能因地区、时间、具体场景而异。
              在进行任何商业行为前，请咨询专业法律人士，并仔细阅读各工具和平台的最新条款。
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

