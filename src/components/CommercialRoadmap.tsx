import { motion } from 'framer-motion'
import { ArrowRight, Target, TrendingUp, Zap, Star } from 'lucide-react'
import SectionTitle from './SectionTitle'

const stages = [
  {
    phase: '阶段1：学习期',
    timeframe: '0-30天',
    goals: '不赚钱，做出第一条完整作品',
    tasks: ['熟悉全流程', '建立工具认知', '记录成本和废片率'],
    income: '¥0',
    color: 'blue' as const,
    bg: 'bg-blue-500/10 border-blue-500/20',
    text: 'text-blue-400',
  },
  {
    phase: '阶段2：作品验证期',
    timeframe: '30-90天',
    goals: '连续发布10-30条内容，测试题材',
    tasks: ['测试封面标题', '测试前3秒钩子', '找到数据更好的方向', '整理案例集'],
    income: '¥0-2,000/月',
    color: 'green' as const,
    bg: 'bg-green-500/10 border-green-500/20',
    text: 'text-green-400',
  },
  {
    phase: '阶段3：小额变现期',
    timeframe: '3-6个月',
    goals: '尝试多种变现方式，建立收入流',
    tasks: ['接单制作', '商单合作', '模板售卖', '课程助教', '小型账号合作', '平台活动投稿'],
    income: '¥2,000-10,000/月',
    color: 'purple' as const,
    bg: 'bg-purple-500/10 border-purple-500/20',
    text: 'text-purple-400',
  },
  {
    phase: '阶段4：规模化期',
    timeframe: '6-12个月',
    goals: '扩大生产规模，建立商业模型',
    tasks: ['剧集化更新', '平台分账合作', 'IP改编', '多账号矩阵', '商业定制', '团队化生产', '海外多语言版本'],
    income: '¥10,000+/月（不稳定）',
    color: 'orange' as const,
    bg: 'bg-orange-500/10 border-orange-500/20',
    text: 'text-orange-400',
  },
]

const iconMap: Record<string, any> = {
  blue: Target,
  green: TrendingUp,
  purple: Zap,
  orange: Star,
}

export default function CommercialRoadmap() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-20 md:px-6">
      <SectionTitle
        eyebrow="路线图"
        title="从新手到变现的四个阶段。"
        description="不是所有人都能进入阶段4。进入阶段4的关键不是会不会用工具，而是内容生产稳定性、成本控制、版权能力和发行能力。"
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {stages.map((stage, i) => {
          const Icon = iconMap[stage.color]
          return (
            <motion.article
              key={stage.phase}
              className={`surface rounded-[24px] p-6 relative overflow-hidden`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="absolute top-0 right-0 text-8xl font-bold opacity-5 select-none">0{i + 1}</div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <span className={`w-10 h-10 rounded-xl ${stage.bg} flex items-center justify-center`}>
                    <Icon size={20} className={stage.text} />
                  </span>
                  <span className={`text-xs font-semibold ${stage.text}`}>{stage.timeframe}</span>
                </div>

                <h3 className="text-lg font-semibold mb-2">{stage.phase}</h3>
                <p className="text-sm text-white/70 mb-4">{stage.goals}</p>

                <ul className="space-y-1.5 mb-4">
                  {stage.tasks.map((task) => (
                    <li key={task} className="text-xs text-white/50 flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-white/30" />
                      {task}
                    </li>
                  ))}
                </ul>

                <div className={`rounded-xl p-3 ${stage.bg}`}>
                  <p className="text-xs text-white/50">收入预期</p>
                  <p className={`text-lg font-bold ${stage.text}`}>{stage.income}</p>
                </div>
              </div>

              {i < stages.length - 1 && (
                <div className="hidden xl:block absolute -right-2 top-1/2 -translate-y-1/2 z-20">
                  <ArrowRight size={16} className="text-white/20" />
                </div>
              )}
            </motion.article>
          )
        })}
      </div>

      <motion.div
        className="mt-8 p-5 rounded-2xl border border-orange-500/20 bg-orange-500/5 text-center"
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
      >
        <p className="text-sm text-orange-200 leading-relaxed">
          以上时间线和收入预期仅为参考，不代表个人实际结果。商业化成功取决于内容质量、市场需求、个人能力、平台规则等多重因素。
        </p>
      </motion.div>
    </section>
  )
}
