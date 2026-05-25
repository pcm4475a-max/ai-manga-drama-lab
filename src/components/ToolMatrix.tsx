import { Search } from 'lucide-react';
import { useMemo, useState } from 'react';
import SectionTitle from './SectionTitle';
import { toolCategories, tools } from '../data/tools';

export default function ToolMatrix() {
  const [category, setCategory] = useState('全部');
  const [query, setQuery] = useState('');
  const filtered = useMemo(() => {
    const value = query.trim().toLowerCase();
    return tools.filter((tool) => {
      const matchCategory = category === '全部' || tool.category === category;
      const haystack = `${tool.name} ${tool.useCase} ${tool.bestFor}`.toLowerCase();
      return matchCategory && (!value || haystack.includes(value));
    });
  }, [category, query]);

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 md:px-6">
      <SectionTitle eyebrow="Tool Matrix" title="工具矩阵：看用途，也看成本和不确定性。" description="所有价格、会员权益、平台规则都可能变化。每张卡都保留 lastChecked 或“需实时确认”。" />
      <div className="glass mb-6 rounded-[28px] p-4">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-2">
            {toolCategories.map((item) => (
              <button key={item} type="button" onClick={() => setCategory(item)} className={`rounded-full px-4 py-2 text-sm transition ${category === item ? 'bg-white text-black' : 'bg-white/8 text-white hover:bg-white/14 light:text-neutral-950'}`}>
                {item}
              </button>
            ))}
          </div>
          <label className="relative block md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/45 light:text-black/45" size={17} />
            <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="搜索工具、用途、人群" className="w-full rounded-full border border-white/10 bg-white/8 py-2 pl-10 pr-4 text-sm text-white placeholder:text-white/45 light:border-black/10 light:bg-white light:text-black" aria-label="搜索工具" />
          </label>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((tool) => (
          <article key={tool.name} className="surface rounded-[24px] p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-sm text-blue-300">{tool.category} · {tool.beginnerLevel}</p>
                <h3 className="mt-2 text-xl font-semibold text-white light:text-neutral-950">{tool.name}</h3>
              </div>
              <span className="rounded-full bg-white/8 px-3 py-1 text-xs muted">{tool.lastChecked}</span>
            </div>
            <p className="mt-4 leading-7 muted">{tool.useCase}</p>
            <div className="mt-4 space-y-3 text-sm">
              <p><span className="font-semibold text-white light:text-neutral-950">价格：</span><span className="muted">{tool.pricing}</span></p>
              <p><span className="font-semibold text-white light:text-neutral-950">适合：</span><span className="muted">{tool.bestFor}</span></p>
              <p><span className="font-semibold text-white light:text-neutral-950">短板：</span><span className="muted">{tool.weaknesses}</span></p>
            </div>
            <a href={tool.officialUrl} target="_blank" rel="noreferrer" className="mt-5 inline-flex text-sm font-semibold text-blue-300 hover:text-blue-200">官方信息源</a>
          </article>
        ))}
      </div>
    </section>
  );
}
