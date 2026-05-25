import { motion } from 'framer-motion';

type Step = {
  step: number;
  title: string;
  whatItIs: string;
  whyItMatters: string;
  tools: string[];
  output: string[];
  beginnerTips: string[];
  commonMistakes: string[];
};

export default function WorkflowStepCard({ step }: { step: Step }) {
  return (
    <motion.article initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="surface rounded-[24px] p-5">
      <div className="flex items-start gap-4">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-sm font-semibold text-black">{step.step}</span>
        <div>
          <h3 className="text-xl font-semibold text-white light:text-neutral-950">{step.title}</h3>
          <p className="mt-2 leading-7 muted">{step.whatItIs}</p>
        </div>
      </div>
      <div className="mt-5 grid gap-3 text-sm md:grid-cols-2">
        <Info title="为什么重要" items={[step.whyItMatters]} />
        <Info title="产出" items={step.output} />
        <Info title="工具" items={step.tools} />
        <Info title="新手提醒" items={step.beginnerTips} />
      </div>
      <div className="mt-4 rounded-2xl border border-red-400/20 bg-red-500/8 p-4 text-sm text-red-100 light:text-red-700">
        <strong>常见坑：</strong>{step.commonMistakes.join('；')}
      </div>
    </motion.article>
  );
}

function Info({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-2xl bg-white/5 p-4 light:bg-black/5">
      <p className="mb-2 font-semibold text-white light:text-neutral-950">{title}</p>
      <p className="leading-7 muted">{items.join(' / ')}</p>
    </div>
  );
}
