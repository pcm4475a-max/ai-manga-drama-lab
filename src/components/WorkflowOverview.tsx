import { Copy } from 'lucide-react';
import SectionTitle from './SectionTitle';
import WorkflowStepCard from './WorkflowStepCard';
import { workflowSteps, workflowTemplate } from '../data/workflow';
import { copyText } from '../lib/utils';

export default function WorkflowOverview() {
  return (
    <section id="workflow" className="mx-auto max-w-7xl px-4 py-20 md:px-6">
      <SectionTitle eyebrow="15-Step Workflow" title="从剧本到成片，先搭流程，再开工具。" description="AI漫剧真正难的不是某个按钮，而是让故事、角色、镜头、声音、剪辑和商业判断形成闭环。" />
      <div className="glass mb-10 rounded-[28px] p-5">
        <div className="grid gap-3 md:grid-cols-5">
          {workflowSteps.map((step) => (
            <a key={step.step} href={`#step-${step.step}`} className="rounded-2xl bg-white/6 p-4 text-sm transition hover:bg-white/12 light:bg-black/5">
              <span className="text-blue-300">Step {step.step}</span>
              <p className="mt-2 font-semibold text-white light:text-neutral-950">{step.title}</p>
            </a>
          ))}
        </div>
        <button type="button" onClick={() => copyText(workflowTemplate)} className="mt-5 inline-flex items-center gap-2 rounded-full bg-blue-500 px-4 py-2 text-sm font-semibold text-white" aria-label="复制分镜模板">
          <Copy size={16} /> 复制分镜模板
        </button>
      </div>
      <div className="grid gap-5">
        {workflowSteps.map((step) => (
          <div id={`step-${step.step}`} key={step.step}>
            <WorkflowStepCard step={step} />
          </div>
        ))}
      </div>
    </section>
  );
}
