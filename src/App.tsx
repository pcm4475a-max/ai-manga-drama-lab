import { useMemo, useState } from 'react';
import { workflowSteps } from './data/workflow';
import { tools, toolCategories } from './data/tools';
import { monetizationModels } from './data/monetization';
import { platforms } from './data/platforms';
import { glossaryTerms } from './data/glossary';
import { sources } from './data/sources';
import { commercialRisks } from './data/commercialRisks';
import { mistakes } from './data/mistakes';

const nav = [
  ['流程', 'workflow'], ['工具', 'tools'], ['成本', 'cost'], ['盈利', 'money'],
  ['平台', 'platforms'], ['百科', 'glossary'], ['风险', 'risks'], ['来源', 'sources'],
];

export default function App() {
  const [dark, setDark] = useState(true);
  const [category, setCategory] = useState('全部');
  const [query, setQuery] = useState('');
  const [duration, setDuration] = useState(60);
  const [shot, setShot] = useState(5);
  const [waste, setWaste] = useState(0.4);
  const [unitCost, setUnitCost] = useState(3);
  const [openTerm, setOpenTerm] = useState('AI漫剧');
  const [activePlatform, setActivePlatform] = useState(platforms[0]?.platform ?? '抖音');

  const filteredTools = useMemo(() => tools.filter((tool: any) => {
    const text = `${tool.name} ${tool.category} ${tool.useCase} ${tool.bestFor}`.toLowerCase();
    return (category === '全部' || tool.category === category) && text.includes(query.toLowerCase());
  }), [category, query]);

  const shots = Math.ceil(duration / shot);
  const generations = Math.ceil(shots / (1 - waste));
  const videoCost = generations * unitCost;
  const platform = platforms.find((item) => item.platform === activePlatform) ?? platforms[0];

  return (
    <div className={dark ? 'min-h-screen bg-[#050505] text-white' : 'light min-h-screen bg-[#f5f5f7] text-neutral-950'}>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl light:border-black/10 light:bg-white/80">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
          <a href="#top" className="font-semibold">AI Manga Drama Lab</a>
          <nav className="hidden gap-1 md:flex">
            {nav.map(([label, id]) => <a key={id} href={`#${id}`} className="rounded-full px-3 py-2 text-sm muted hover:bg-white/10 light:hover:bg-black/5">{label}</a>)}
          </nav>
          <button onClick={() => setDark(!dark)} className="rounded-full border border-white/15 px-3 py-2 text-sm">{dark ? '浅色' : '深色'}</button>
        </div>
      </header>

      <main id="top">
        <section className="relative overflow-hidden px-4 pb-20 pt-32 md:px-6 md:pt-40">
          <div className="hero-grid absolute inset-x-0 top-0 h-[520px] opacity-40" />
          <div className="mx-auto max-w-6xl text-center">
            <p className="mb-5 text-sm font-semibold text-blue-300">AI Animated Drama Learning Hub</p>
            <h1 className="text-balance text-5xl font-semibold md:text-7xl">AI 漫剧制作，从混乱工具到完整流程。</h1>
            <p className="mx-auto mt-7 max-w-3xl text-lg leading-9 muted">系统学习剧本、角色、分镜、Prompt、图像生成、视频生成、配音、剪辑、发布、复盘与商业化。不是工具清单，而是一套可执行的 AI 漫剧生产方法。</p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <a className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-black" href="#workflow">开始学习完整流程</a>
              <a className="rounded-full border border-white/15 px-5 py-3 text-sm font-semibold" href="#tools">查看工具与成本</a>
              <a className="rounded-full border border-white/15 px-5 py-3 text-sm font-semibold" href="#money">了解盈利模式</a>
            </div>
          </div>
        </section>

        <SimpleSection id="workflow" eyebrow="15-Step Workflow" title="从剧本到成片的15步流程。" desc="先有故事，再有角色，再有分镜，再有图像，再有视频，最后靠剪辑把它变成作品。">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {workflowSteps.map((step: any) => <Card key={step.step}><p className="text-sm text-blue-300">Step {step.step}</p><h3 className="mt-2 text-xl font-semibold">{step.title}</h3><p className="mt-3 text-sm leading-7 muted">{step.whatItIs}</p><p className="mt-3 text-sm leading-7 muted">产出：{step.output?.join(' / ')}</p></Card>)}
          </div>
        </SimpleSection>

        <SimpleSection id="tools" eyebrow="Tool Matrix" title="工具矩阵：用途、价格和 lastChecked。" desc="价格和平台政策可能变化，以官方最新信息为准。">
          <div className="glass mb-5 rounded-[24px] p-4">
            <div className="flex flex-wrap gap-2">{toolCategories.map((item) => <button key={item} onClick={() => setCategory(item)} className={`rounded-full px-4 py-2 text-sm ${category === item ? 'bg-white text-black' : 'bg-white/10'}`}>{item}</button>)}</div>
            <input value={query} onChange={(e) => setQuery(e.target.value)} className="mt-4 w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3" placeholder="搜索工具" />
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">{filteredTools.map((tool: any) => <Card key={tool.name}><div className="flex justify-between gap-3"><h3 className="text-xl font-semibold">{tool.name}</h3><span className="text-xs muted">{tool.lastChecked}</span></div><p className="mt-3 text-sm leading-7 muted">{tool.useCase}</p><p className="mt-3 text-sm leading-7 muted">价格：{tool.pricing}</p></Card>)}</div>
        </SimpleSection>

        <SimpleSection id="cost" eyebrow="Cost Calculator" title="新手成本计算器。" desc="成本计算器只是估算，不代表真实成本。AI视频最大成本是废片率、重生成次数和时间成本。">
          <div className="glass grid gap-5 rounded-[28px] p-5 md:grid-cols-2">
            <div className="grid gap-4">
              <Control label="每集时长(秒)" value={duration} setValue={setDuration} />
              <Control label="单镜头时长(秒)" value={shot} setValue={setShot} />
              <Control label="废片率(0.2-0.8)" value={waste} setValue={setWaste} step="0.1" />
              <Control label="单条视频成本" value={unitCost} setValue={setUnitCost} />
            </div>
            <div className="rounded-[24px] bg-white/8 p-6 light:bg-black/5"><p className="text-sm muted">预计镜头</p><p className="text-4xl font-semibold">{shots} 个</p><p className="mt-5 text-sm muted">实际生成次数</p><p className="text-4xl font-semibold">{generations} 次</p><p className="mt-5 text-sm muted">单集视频成本估算</p><p className="text-4xl font-semibold">¥{videoCost.toFixed(0)}</p></div>
          </div>
        </SimpleSection>

        <SimpleSection id="money" eyebrow="Monetization" title="AI 漫剧的商业化，不是播放量神话。" desc="新手更现实的早期变现通常是接单、案例、模板、教程和垂直账号。">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">{monetizationModels.map((m: any) => <Card key={m.id}><p className="text-sm text-blue-300">难度 {m.difficulty} · 风险 {m.riskLevel}</p><h3 className="mt-2 text-xl font-semibold">{m.title}</h3><p className="mt-3 text-sm leading-7 muted">{m.simpleExplanation}</p></Card>)}</div>
        </SimpleSection>

        <SimpleSection id="platforms" eyebrow="Platforms" title="平台商业化对比。" desc="平台政策、分账和准入门槛变化快，必须查官方最新说明。">
          <div className="mb-5 flex flex-wrap gap-2">{platforms.map((p) => <button className={`rounded-full px-4 py-2 text-sm ${activePlatform === p.platform ? 'bg-white text-black' : 'bg-white/10'}`} key={p.platform} onClick={() => setActivePlatform(p.platform)}>{p.platform}</button>)}</div>
          <Card><h3 className="text-2xl font-semibold">{platform.platform}</h3><p className="mt-4 leading-8 muted">{platform.suitableContent}</p><p className="mt-4 leading-8 muted">变现方式：{platform.monetizationMethods.join(' / ')}</p><p className="mt-4 text-sm text-orange-300">lastChecked：{platform.lastChecked}</p></Card>
        </SimpleSection>

        <SimpleSection id="glossary" eyebrow="Glossary" title="术语百科。" desc="把黑话翻译成人话。">
          <div className="grid gap-3 md:grid-cols-2">{glossaryTerms.map((g) => <Card key={g.term}><button className="w-full text-left text-lg font-semibold" onClick={() => setOpenTerm(openTerm === g.term ? '' : g.term)}>{g.term}</button>{openTerm === g.term && <p className="mt-3 leading-7 muted">{g.definition}</p>}</Card>)}</div>
        </SimpleSection>

        <SimpleSection id="risks" eyebrow="Risks" title="版权与商用风险。" desc="能生成，不等于能商用。不要鼓励侵权改编、未经授权克隆声音或仿冒真人形象。">
          <div className="grid gap-4 md:grid-cols-2">{commercialRisks.map((r: any) => <Card key={r.title ?? r.risk}><h3 className="text-xl font-semibold">{r.title ?? r.risk}</h3><p className="mt-3 leading-7 muted">{r.detail ?? r.description}</p></Card>)}</div>
        </SimpleSection>

        <SimpleSection id="mistakes" eyebrow="Mistakes" title="新手常见坑位。" desc="先避开这些坑，再谈效率。">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">{mistakes.slice(0, 18).map((m: any, i) => <Card key={i}><p className="text-sm text-red-300">坑位 {i + 1}</p><h3 className="mt-2 font-semibold">{m.title ?? m.mistake}</h3><p className="mt-3 text-sm leading-7 muted">{m.fix ?? m.correctApproach}</p></Card>)}</div>
        </SimpleSection>

        <SimpleSection id="sources" eyebrow="Sources" title="资料来源与更新机制。" desc="资料更新时间：2026-05-25。不确定内容标注“需实时确认”。">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">{sources.map((s: any) => <Card key={s.title}><h3 className="font-semibold">{s.title}</h3><p className="mt-2 text-sm muted">{s.publisher} · {s.lastChecked}</p><a className="mt-3 inline-block text-sm text-blue-300" href={s.url} target="_blank">打开来源</a></Card>)}</div>
        </SimpleSection>
      </main>
      <footer className="border-t border-white/10 px-4 py-10 text-center muted">本项目用于 AI 漫剧学习和流程研究，不承诺收益。价格和平台政策以官方最新信息为准。</footer>
    </div>
  );
}

function SimpleSection({ id, eyebrow, title, desc, children }: any) {
  return <section id={id} className="mx-auto max-w-7xl px-4 py-16 md:px-6"><div className="mx-auto mb-10 max-w-3xl text-center"><p className="mb-3 text-sm font-semibold text-blue-300">{eyebrow}</p><h2 className="text-3xl font-semibold md:text-5xl">{title}</h2><p className="mt-5 leading-8 muted">{desc}</p></div>{children}</section>;
}
function Card({ children }: any) { return <article className="surface rounded-[24px] p-5">{children}</article>; }
function Control({ label, value, setValue, step = '1' }: any) { return <label><span className="mb-2 block text-sm font-semibold">{label}</span><input type="number" step={step} value={value} onChange={(e) => setValue(Number(e.target.value))} className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3" /></label>; }

