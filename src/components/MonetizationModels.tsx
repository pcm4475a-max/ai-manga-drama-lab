import { useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import SectionTitle from './SectionTitle';
import { monetizationModels } from '../data/monetization';

export default function MonetizationModels() {
  const [difficulty, setDifficulty] = useState('全部');
  const [risk, setRisk] = useState('全部');
  const [beginner, setBeginner] = useState('全部');
  const filtered = useMemo(() => monetizationModels.filter((item) => (
    (difficulty === '全部' || item.difficulty === difficulty)
    && (risk === '全部' || item.riskLevel === risk)
    && (beginner === '全部' || String(item.beginnerFriendly) === beginner)
  )), [difficulty, risk, beginner]);

  return (
    <section id="monetization" className="mx-auto max-w-7xl px-4 py-20 md:px-6">
      <SectionTitle eyebrow="Monetization" title="AI 漫剧的商业化，不是播放量神话。" description="从平台分账、广告植入、接单制作、IP改编、课程模板到海外发行，把每一种盈利路径拆成条件、成本、难度和风险。" />
      <div className="glass mb-6 flex flex-col gap-3 rounded-[28px] p-4 md:flex-row">
        <Filter label="难度" value={difficulty} onChange={setDifficulty} options={['全部', 'easy', 'medium', 'hard']} />
        <Filter label="风险" value={risk} onChange={setRisk} options={['全部', 'low', 'medium', 'high']} />
        <Filter label="新手友好" value={beginner} onChange={setBeginner} options={['全部', 'true', 'false']} />
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((item) => (
          <article key={item.id} className="surface rounded-[24px] p-5">
            <div className="flex flex-wrap gap-2 text-xs">
              <Badge>难度 {item.difficulty}</Badge>
              <Badge>风险 {item.riskLevel}</Badge>
              <Badge>{item.beginnerFriendly ? '新手可试' : '不建议新手起步'}</Badge>
            </div>
            <h3 className="mt-4 text-xl font-semibold text-white light:text-neutral-950">{item.title}</h3>
            <p className="mt-3 leading-7 muted">{item.simpleExplanation}</p>
            <Info title="适合" text={item.suitableFor.join(' / ')} />
            <Info title="前提" text={item.prerequisites.join(' / ')} />
            <Info title="收入来源" text={item.revenueSources.join(' / ')} />
            <p className="mt-4 rounded-2xl bg-white/6 p-4 text-sm leading-7 muted light:bg-black/5">{item.notes ?? '请按官方最新政策和实际成本核验。'}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Filter({ label, value, onChange, options }: { label: string; value: string; onChange: (v: string) => void; options: string[] }) {
  return (
    <label className="flex-1">
      <span className="mb-2 block text-sm font-semibold text-white light:text-neutral-950">{label}</span>
      <select value={value} onChange={(event) => onChange(event.target.value)} className="w-full rounded-2xl border border-white/10 bg-white/8 px-4 py-3 text-white light:border-black/10 light:bg-white light:text-black">
        {options.map((item) => <option key={item}>{item}</option>)}
      </select>
    </label>
  );
}

function Badge({ children }: { children: ReactNode }) {
  return <span className="rounded-full bg-white/8 px-3 py-1 text-blue-100 light:bg-black/5 light:text-blue-700">{children}</span>;
}

function Info({ title, text }: { title: string; text: string }) {
  return <p className="mt-3 text-sm leading-7"><span className="font-semibold text-white light:text-neutral-950">{title}：</span><span className="muted">{text}</span></p>;
}
