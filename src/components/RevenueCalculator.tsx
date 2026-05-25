// @ts-nocheck
import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Calculator, DollarSign, TrendingUp, TrendingDown, AlertTriangle, BarChart3, Info, Star, CheckSquare, Square, Lightbulb } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { cn, formatCurrency } from '../lib/utils';

interface RevenueMode { key: string; label: string; description: string; beginnerFriendly: boolean; }

const revenueModes: RevenueMode[] = [
  { key: 'shangdan', label: '商单', description: '品牌合作、植入推广', beginnerFriendly: true },
  { key: 'jiedan', label: '接单', description: '为客户定制制作AI漫剧', beginnerFriendly: true },
  { key: 'course', label: '课程', description: '教学课程、付费内容', beginnerFriendly: false },
  { key: 'template', label: '模板', description: '出售Prompt/分镜模板', beginnerFriendly: true },
  { key: 'play', label: '播放激励', description: '平台创作激励、播放分成', beginnerFriendly: true },
  { key: 'share', label: '分账', description: '平台短剧分账合作', beginnerFriendly: false },
  { key: 'cps', label: '带货', description: '商品推广、CPS分佣', beginnerFriendly: false },
];

const COLORS = ['#2997ff', '#5e5ce6', '#bf5af2', '#30d158', '#ff9f0a', '#ff375f', '#ff453a'];

export default function RevenueCalculator() {
  const [monthlyEps, setMonthlyEps] = useState(10);
  const [monthlyToolCost, setMonthlyToolCost] = useState(500);
  const [promotionBudget, setPromotionBudget] = useState(500);
  const [enabledModes, setEnabledModes] = useState<Set<string>>(new Set(['shangdan', 'jiedan']));
  const [modeInputs, setModeInputs] = useState<Record<string, { price: number; quantity: number }>>({
    shangdan: { price: 2000, quantity: 2 }, jiedan: { price: 1500, quantity: 3 },
    course: { price: 300, quantity: 10 }, template: { price: 50, quantity: 20 },
    play: { price: 5, quantity: 100 }, share: { price: 1000, quantity: 1 }, cps: { price: 30, quantity: 50 },
  });

  const toggleMode = (key: string) => setEnabledModes((prev) => { const next = new Set(prev); if (next.has(key)) next.delete(key); else next.add(key); return next; });
  const updateModeInput = (key: string, field: 'price' | 'quantity', value: number) => setModeInputs((prev) => ({ ...prev, [key]: { ...prev[key], [field]: Math.max(0, value) } }));

  const results = useMemo(() => {
    let totalRevenue = 0; const modeBreakdown: Array<{ name: string; value: number }> = [];
    revenueModes.forEach((mode) => { if (enabledModes.has(mode.key)) { const revenue = modeInputs[mode.key].price * modeInputs[mode.key].quantity; totalRevenue += revenue; modeBreakdown.push({ name: mode.label, value: Math.round(revenue) }); } });
    const totalCost = monthlyToolCost + promotionBudget; const netProfit = totalRevenue - totalCost;
    const breakEven = totalRevenue > 0 ? totalCost / (totalRevenue / monthlyEps) : Infinity;
    let riskLevel = '低风险'; if (totalRevenue === 0) riskLevel = '高风险'; else if (netProfit < 0) riskLevel = '中风险';
    let mostSensitive = { name: '商单价格', suggestion: '优先稳定此项收入' }; let maxImpact = 0;
    revenueModes.forEach((mode) => { if (enabledModes.has(mode.key)) { const inp = modeInputs[mode.key]; const impact = inp.price * 0.3 + inp.quantity * 0.2; if (impact > maxImpact) { maxImpact = impact; mostSensitive = { name: mode.label + '收入', suggestion: '优先稳定此项收入来源' }; } } });
    let beginnerRec = '建议先从接单和模板起步，积累案例后再尝试课程和分账模式。';
    const b = revenueModes.filter((m) => enabledModes.has(m.key) && m.beginnerFriendly).length;
    const nb = revenueModes.filter((m) => enabledModes.has(m.key) && !m.beginnerFriendly).length;
    if (nb > b) beginnerRec = '选中的模式中非新手友好居多，建议新手先聚焦1-2个低难度模式验证可行性。';
    if (enabledModes.size === 0) beginnerRec = '请至少选择一种收入模式开始模拟。';
    return { totalRevenue, totalCost, netProfit, breakEven, riskLevel, mostSensitive, beginnerRec, modeBreakdown };
  }, [monthlyEps, monthlyToolCost, promotionBudget, enabledModes, modeInputs]);

  const riskStyles: Record<string, { bg: string; border: string; text: string; dot: string }> = {
    '低风险': { bg: 'from-green-500/20 to-green-500/5', border: 'border-green-500/30', text: 'text-green-400', dot: 'bg-green-400' },
    '中风险': { bg: 'from-yellow-500/20 to-yellow-500/5', border: 'border-yellow-500/30', text: 'text-yellow-400', dot: 'bg-yellow-400' },
    '高风险': { bg: 'from-red-500/20 to-red-500/5', border: 'border-red-500/30', text: 'text-red-400', dot: 'bg-red-400' },
  };
  const rs = riskStyles[results.riskLevel] ?? riskStyles['低风险'];

  return (
    <section id="revenue-calc" className="relative mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28">
      <motion.div className="mx-auto mb-12 max-w-4xl text-center" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.55 }}>
        <p className="mb-3 text-sm font-semibold text-purple-400">收入模拟器</p><h2 className="text-balance text-3xl font-semibold text-white md:text-5xl">收入估算模拟</h2><p className="mx-auto mt-5 max-w-2xl text-base leading-8 muted md:text-lg">选择收入模式并调整参数，了解不同组合的盈利可能性。</p>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.55, delay: 0.1 }} className="glass rounded-[32px] p-5 md:p-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <p className="flex items-center gap-2 text-sm font-semibold text-white/70"><Calculator size={16} />基础参数</p>
            <div className="space-y-4">
              <div><label className="mb-2 flex items-center justify-between text-sm text-white/70"><span>每月产出集数</span><span className="font-mono text-blue-400">{monthlyEps} 集</span></label><input type="range" min="1" max="60" value={monthlyEps} onChange={(e) => setMonthlyEps(Number(e.target.value))} className="w-full accent-blue-500" /></div>
              <div><label className="mb-2 flex items-center gap-2 text-sm text-white/70">月度工具成本 (¥)</label><input type="number" min="0" value={monthlyToolCost} onChange={(e) => setMonthlyToolCost(Math.max(0, Number(e.target.value)))} className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white focus:border-blue-400/50 focus:outline-none" /></div>
              <div><label className="mb-2 flex items-center gap-2 text-sm text-white/70">推广预算 (¥)</label><input type="number" min="0" value={promotionBudget} onChange={(e) => setPromotionBudget(Math.max(0, Number(e.target.value)))} className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white focus:border-blue-400/50 focus:outline-none" /></div>
            </div>
            <div><p className="mb-3 flex items-center gap-2 text-sm font-semibold text-white/70"><DollarSign size={16} />收入模式</p><div className="space-y-3">
              {revenueModes.map((mode) => { const isEnabled = enabledModes.has(mode.key); return (
                <div key={mode.key} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <button onClick={() => toggleMode(mode.key)} className="mb-3 flex w-full items-center gap-2 text-left">{isEnabled ? <CheckSquare size={18} className="shrink-0 text-blue-400" /> : <Square size={18} className="shrink-0 text-white/30" />}<span className={cn('text-sm font-semibold', isEnabled ? 'text-white' : 'text-white/40')}>{mode.label}</span>{mode.beginnerFriendly && <span className="inline-flex items-center gap-1 rounded-full bg-green-500/10 px-2 py-0.5 text-[0.6rem] text-green-400"><Star size={9} />新手</span>}<span className="ml-auto text-[11px] muted">{mode.description}</span></button>
                  {isEnabled && (<div className="grid grid-cols-2 gap-3"><div><label className="mb-1 block text-[11px] text-white/40">单价 (¥)</label><input type="number" min="0" value={modeInputs[mode.key].price} onChange={(e) => updateModeInput(mode.key, 'price', Number(e.target.value))} className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white focus:border-blue-400/50 focus:outline-none" /></div><div><label className="mb-1 block text-[11px] text-white/40">数量/月</label><input type="number" min="0" value={modeInputs[mode.key].quantity} onChange={(e) => updateModeInput(mode.key, 'quantity', Number(e.target.value))} className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white focus:border-blue-400/50 focus:outline-none" /></div></div>)}
                </div>
              );})}
            </div></div>
          </div>
          <div className="space-y-5"><p className="flex items-center gap-2 text-sm font-semibold text-white/70"><BarChart3 size={16} />计算结果</p>
            <div className="grid grid-cols-2 gap-3">
              <RC label="总收入" value={formatCurrency(results.totalRevenue)} icon={TrendingUp} color="text-green-400" />
              <RC label="总成本" value={formatCurrency(results.totalCost)} icon={TrendingDown} color="text-red-400" />
              <RC label="净利润" value={formatCurrency(results.netProfit)} icon={DollarSign} color={results.netProfit >= 0 ? 'text-green-400' : 'text-red-400'} />
              <RC label="盈亏平衡" value={results.breakEven === Infinity ? '--' : `${Math.ceil(results.breakEven)} 集`} icon={Calculator} color="text-blue-400" />
            </div>
            <div className={cn('rounded-2xl bg-gradient-to-br p-5 border', rs.bg, rs.border)}><div className="flex items-center justify-between"><div className="flex items-center gap-2"><AlertTriangle size={18} className={rs.text} /><span className={cn('text-sm font-semibold', rs.text)}>经营风险等级</span></div><span className={cn('inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-sm font-bold bg-white/10', rs.text)}><span className={cn('h-2 w-2 rounded-full', rs.dot)} />{results.riskLevel}</span></div><p className="mt-2 text-sm text-white/60">{results.riskLevel === '低风险' ? '收入覆盖成本，经营模型健康。' : results.riskLevel === '中风险' ? '当前处于亏损状态，需优化收入结构或降低成本。' : '无收入来源或严重亏损，请重新评估商业模式。'}</p></div>
            <div className="surface rounded-2xl p-5"><p className="mb-2 flex items-center gap-1.5 text-sm font-semibold text-orange-400"><Info size={14} />最敏感变量</p><p className="text-sm leading-relaxed text-white"><span className="font-semibold">{results.mostSensitive.name}</span><span className="muted"> -- {results.mostSensitive.suggestion}。</span></p></div>
            <div className="surface rounded-2xl p-5"><p className="mb-2 flex items-center gap-1.5 text-sm font-semibold text-blue-400"><Lightbulb size={14} />新手建议</p><p className="text-sm leading-relaxed text-white/80">{results.beginnerRec}</p></div>
            {results.modeBreakdown.length > 0 ? (<div className="rounded-2xl border border-white/10 bg-black/30 p-5"><p className="mb-4 flex items-center gap-2 text-sm font-semibold text-white/70"><BarChart3 size={14} />收入结构</p><ResponsiveContainer width="100%" height={200}><PieChart><Pie data={results.modeBreakdown} cx="50%" cy="50%" innerRadius={45} outerRadius={80} paddingAngle={3} dataKey="value">{results.modeBreakdown.map((_, i) => (<Cell key={`c-${i}`} fill={COLORS[i % COLORS.length]} />))}</Pie><Tooltip contentStyle={{ background: 'rgba(0,0,0,0.9)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', color: '#fff', fontSize: '13px' }} formatter={(value: number) => [formatCurrency(value), '收入']} /></PieChart></ResponsiveContainer><div className="mt-4 flex flex-wrap gap-3">{results.modeBreakdown.map((item, i) => (<div key={item.name} className="flex items-center gap-1.5 text-xs"><span className="h-2.5 w-2.5 rounded-full" style={{ background: COLORS[i % COLORS.length] }} /><span className="text-white/70">{item.name}</span></div>))}</div></div>) : (<div className="flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-black/20 p-8 text-center"><BarChart3 size={32} className="mb-3 text-white/15" /><p className="text-sm muted">请至少选择一种收入模式</p></div>)}
          </div>
        </div>
        <div className="mt-8 flex items-start gap-3 rounded-2xl border border-orange-500/20 bg-orange-500/5 p-4"><AlertTriangle size={16} className="mt-0.5 shrink-0 text-orange-400" /><p className="text-xs leading-relaxed text-orange-300/80"><strong>此计算器仅做经营假设模拟，不代表真实收入。</strong>实际收入受内容质量、市场需求、平台政策、竞争环境等多重因素影响。</p></div>
      </motion.div>
    </section>
  );
}

function RC({ label, value, icon: Icon, color }: { label: string; value: string; icon: React.ComponentType<{ size?: number }>; color?: string }) {
  return (<div className="surface rounded-2xl p-4"><p className="mb-1 flex items-center gap-1.5 text-[11px] uppercase tracking-wider muted"><Icon size={12} />{label}</p><p className={cn('text-lg font-semibold font-mono', color ?? 'text-white')}>{value}</p></div>);
}

