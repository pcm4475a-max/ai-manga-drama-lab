import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Calculator, TrendingUp, TrendingDown, AlertTriangle, DollarSign, Sliders, BarChart3, Film, Clock, Percent, Video, Mic, Scissors, Users, Hash, Zap } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { cn, formatCurrency } from '../lib/utils';

const episodeLengthOptions = [
  { value: '30', label: '30秒', secs: 30 }, { value: '60', label: '1分钟', secs: 60 },
  { value: '180', label: '3分钟', secs: 180 }, { value: '300', label: '5分钟', secs: 300 },
];
const shotLengthOptions = [
  { value: '3', label: '3秒', secs: 3 }, { value: '5', label: '5秒', secs: 5 },
  { value: '10', label: '10秒', secs: 10 }, { value: '15', label: '15秒', secs: 15 },
];
const voiceTiers = [
  { value: 'free', label: '免费方案 (¥0/月)', cost: 0 }, { value: 'basic', label: '基础方案 (¥30/月)', cost: 30 },
  { value: 'standard', label: '标准方案 (¥150/月)', cost: 150 }, { value: 'pro', label: '专业方案 (¥500/月)', cost: 500 },
  { value: 'studio', label: '工作室方案 (¥1500/月)', cost: 1500 },
];

export default function CostCalculator() {
  const [episodeLength, setEpisodeLength] = useState('60');
  const [shotLength, setShotLength] = useState('5');
  const [wasteRate, setWasteRate] = useState(50);
  const [costPerGen, setCostPerGen] = useState(2);
  const [voiceTier, setVoiceTier] = useState('standard');
  const [editingMonthly, setEditingMonthly] = useState(100);
  const [epsPerMonth, setEpsPerMonth] = useState(10);
  const [laborMonthly, setLaborMonthly] = useState(3000);

  const results = useMemo(() => {
    const totalSecs = episodeLengthOptions.find((o) => o.value === episodeLength)?.secs ?? 60;
    const shotSecs = shotLengthOptions.find((o) => o.value === shotLength)?.secs ?? 5;
    const shotCount = Math.ceil(totalSecs / shotSecs);
    const actualGens = Math.ceil(shotCount / Math.max(0.01, 1 - wasteRate / 100));
    const voiceMonthlyCost = voiceTiers.find((t) => t.value === voiceTier)?.cost ?? 0;
    const voiceCostPerEp = epsPerMonth > 0 ? voiceMonthlyCost / epsPerMonth : 0;
    const videoCostPerEp = actualGens * costPerGen;
    const fixedPerEp = epsPerMonth > 0 ? (editingMonthly + laborMonthly) / epsPerMonth : 0;
    const totalPerEp = videoCostPerEp + voiceCostPerEp + fixedPerEp;
    const monthlyTotal = totalPerEp * epsPerMonth;
    let riskLevel = '低风险'; if (monthlyTotal > 5000) riskLevel = '高风险'; else if (monthlyTotal > 1500) riskLevel = '中风险';
    const sens = [
      { name: '废片率', impact: shotCount * costPerGen * (wasteRate / 100) * 2.5 },
      { name: '每次生成成本', impact: actualGens * 0.5 },
      { name: '镜头时长', impact: totalSecs > 0 ? (totalSecs / Math.max(1, shotSecs + 1)) * costPerGen * 2 : 0 },
      { name: '月产量', impact: epsPerMonth > 0 ? (editingMonthly + laborMonthly) / (epsPerMonth * 0.6) : 999 },
    ];
    const mostSensitive = [...sens].sort((a, b) => b.impact - a.impact)[0];
    return { shotCount, actualGens, voiceCostPerEp, videoCostPerEp, totalPerEp, monthlyTotal, riskLevel, mostSensitive };
  }, [episodeLength, shotLength, wasteRate, costPerGen, voiceTier, editingMonthly, epsPerMonth, laborMonthly]);

  const chartData = [
    { name: '视频生成', value: Math.round(results.videoCostPerEp * epsPerMonth) },
    { name: '配音', value: voiceTiers.find((t) => t.value === voiceTier)?.cost ?? 0 },
    { name: '剪辑工具', value: editingMonthly }, { name: '人力', value: laborMonthly },
  ].filter((d) => d.value > 0);

  const riskStyles: Record<string, { bg: string; border: string; text: string; dot: string }> = {
    '低风险': { bg: 'from-green-500/20 to-green-500/5', border: 'border-green-500/30', text: 'text-green-400', dot: 'bg-green-400' },
    '中风险': { bg: 'from-yellow-500/20 to-yellow-500/5', border: 'border-yellow-500/30', text: 'text-yellow-400', dot: 'bg-yellow-400' },
    '高风险': { bg: 'from-red-500/20 to-red-500/5', border: 'border-red-500/30', text: 'text-red-400', dot: 'bg-red-400' },
  };
  const rs = riskStyles[results.riskLevel] ?? riskStyles['低风险'];

  return (
    <section id="cost" className="relative mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28">
      <motion.div className="mx-auto mb-12 max-w-4xl text-center" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.55 }}>
        <p className="mb-3 text-sm font-semibold text-blue-400">成本估算器</p><h2 className="text-balance text-3xl font-semibold text-white md:text-5xl">AI 漫剧制作成本模拟</h2><p className="mx-auto mt-5 max-w-2xl text-base leading-8 muted md:text-lg">调整参数，理解每一项成本从哪里来。废片率是核心变量。</p>
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.55, delay: 0.1 }} className="glass rounded-[32px] p-5 md:p-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-5">
            <p className="flex items-center gap-2 text-sm font-semibold text-white/70"><Sliders size={16} />参数调整</p>
            <InputGroup icon={Film} label="单集时长"><select value={episodeLength} onChange={(e) => setEpisodeLength(e.target.value)} className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white focus:border-blue-400/50 focus:outline-none">{episodeLengthOptions.map((opt) => (<option key={opt.value} value={opt.value} className="bg-neutral-900 text-white">{opt.label}</option>))}</select></InputGroup>
            <InputGroup icon={Clock} label="平均镜头时长"><select value={shotLength} onChange={(e) => setShotLength(e.target.value)} className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white focus:border-blue-400/50 focus:outline-none">{shotLengthOptions.map((opt) => (<option key={opt.value} value={opt.value} className="bg-neutral-900 text-white">{opt.label}</option>))}</select></InputGroup>
            <div><label className="mb-2 flex items-center justify-between text-sm text-white/70"><span className="flex items-center gap-2"><Percent size={14} />废片率</span><span className="font-mono text-yellow-400">{wasteRate}%</span></label><input type="range" min="10" max="90" value={wasteRate} onChange={(e) => setWasteRate(Number(e.target.value))} className="w-full accent-blue-500" /><div className="mt-1 flex justify-between text-[11px] muted"><span>10% 理想</span><span>50% 典型</span><span>90% 极差</span></div></div>
            <InputGroup icon={Video} label="每次视频生成成本 (¥)"><input type="number" min="0" max="50" value={costPerGen} onChange={(e) => setCostPerGen(Math.max(0, Number(e.target.value)))} className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white focus:border-blue-400/50 focus:outline-none" /><p className="mt-1 text-[11px] muted">可灵 / 即梦 / Runway 每次生成折算成本</p></InputGroup>
            <InputGroup icon={Mic} label="配音方案"><select value={voiceTier} onChange={(e) => setVoiceTier(e.target.value)} className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white focus:border-blue-400/50 focus:outline-none">{voiceTiers.map((t) => (<option key={t.value} value={t.value} className="bg-neutral-900 text-white">{t.label}</option>))}</select></InputGroup>
            <InputGroup icon={Scissors} label="剪辑工具月费 (¥)"><input type="number" min="0" max="10000" value={editingMonthly} onChange={(e) => setEditingMonthly(Math.max(0, Number(e.target.value)))} className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white focus:border-blue-400/50 focus:outline-none" /></InputGroup>
            <div><label className="mb-2 flex items-center justify-between text-sm text-white/70"><span className="flex items-center gap-2"><Hash size={14} />每月产出集数</span><span className="font-mono text-blue-400">{epsPerMonth} 集</span></label><input type="range" min="1" max="30" value={epsPerMonth} onChange={(e) => setEpsPerMonth(Number(e.target.value))} className="w-full accent-blue-500" /></div>
            <InputGroup icon={Users} label="人力月成本 (¥)"><input type="number" min="0" max="100000" value={laborMonthly} onChange={(e) => setLaborMonthly(Math.max(0, Number(e.target.value)))} className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white focus:border-blue-400/50 focus:outline-none" /><p className="mt-1 text-[11px] muted">自己的时间成本折算或外包费用</p></InputGroup>
          </div>
          <div className="space-y-5">
            <p className="flex items-center gap-2 text-sm font-semibold text-white/70"><Calculator size={16} />计算结果</p>
            <div className="grid grid-cols-2 gap-3">
              <MC icon={Hash} label="每集镜头数" value={`${results.shotCount} 个`} /><MC icon={Zap} label="需生成次数" value={`${results.actualGens} 次`} />
              <MC icon={Video} label="视频成本/集" value={formatCurrency(results.videoCostPerEp)} /><MC icon={Mic} label="配音成本/集" value={formatCurrency(results.voiceCostPerEp)} />
              <MC icon={DollarSign} label="单集总成本" value={formatCurrency(results.totalPerEp)} /><MC icon={Calculator} label="月度总成本" value={formatCurrency(results.monthlyTotal)} color="text-yellow-400" />
            </div>
            <div className={cn('rounded-2xl bg-gradient-to-br p-5 border', rs.bg, rs.border)}><div className="flex items-center justify-between"><div className="flex items-center gap-2">{results.riskLevel === '高风险' ? <TrendingUp size={18} className={rs.text} /> : <TrendingDown size={18} className={rs.text} />}<span className={cn('text-sm font-semibold', rs.text)}>成本风险等级</span></div><span className={cn('inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-sm font-bold bg-white/10', rs.text)}><span className={cn('h-2 w-2 rounded-full', rs.dot)} />{results.riskLevel}</span></div><p className="mt-2 text-sm text-white/60">{results.riskLevel === '低风险' ? '月度成本可控，适合新手试水。' : results.riskLevel === '中风险' ? '成本需注意优化，优先控制废片率。' : '成本较高，建议重新评估制作方案。'}</p></div>
            <div className="surface rounded-2xl p-5"><p className="mb-2 flex items-center gap-1.5 text-sm font-semibold text-orange-400"><AlertTriangle size={14} />最敏感变量</p><p className="text-sm leading-relaxed text-white"><span className="font-semibold">{results.mostSensitive.name}</span><span className="muted"> -- 改变此参数对总成本影响最大。</span></p></div>
            <div className="rounded-2xl border border-white/10 bg-black/30 p-5"><p className="mb-4 flex items-center gap-2 text-sm font-semibold text-white/70"><BarChart3 size={14} />月度成本构成</p><ResponsiveContainer width="100%" height={180}><BarChart data={chartData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}><XAxis dataKey="name" tick={{ fill: '#a1a1a6', fontSize: 11 }} axisLine={false} tickLine={false} /><YAxis tick={{ fill: '#a1a1a6', fontSize: 11 }} axisLine={false} tickLine={false} /><Tooltip contentStyle={{ background: 'rgba(0,0,0,0.9)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', color: '#fff', fontSize: '13px' }} formatter={(value: number) => [formatCurrency(value), '金额']} /><Bar dataKey="value" fill="#2997ff" radius={[6, 6, 0, 0]} maxBarSize={48} /></BarChart></ResponsiveContainer></div>
            <div className="flex items-start gap-3 rounded-2xl border border-orange-500/20 bg-orange-500/5 p-4"><AlertTriangle size={16} className="mt-0.5 shrink-0 text-orange-400" /><p className="text-xs leading-relaxed text-orange-300/80">以上为估算模型，仅供参考。实际成本受工具定价、生成成功率、平台政策等影响。</p></div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function InputGroup({ icon: Icon, label, children }: { icon: React.ComponentType<{ size?: number }>; label: string; children: React.ReactNode }) {
  return (<div><label className="mb-2 flex items-center gap-2 text-sm text-white/70"><Icon size={14} />{label}</label>{children}</div>);
}
function MC({ icon: Icon, label, value, color }: { icon: React.ComponentType<{ size?: number }>; label: string; value: string; color?: string }) {
  return (<div className="surface rounded-2xl p-4"><p className="mb-1 flex items-center gap-1.5 text-[11px] uppercase tracking-wider muted"><Icon size={12} />{label}</p><p className={cn('text-lg font-semibold font-mono', color ?? 'text-white')}>{value}</p></div>);
}
