import { motion } from 'framer-motion';
import { ArrowRight, Calculator, Compass, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden pt-28">
      <div className="hero-grid absolute inset-x-0 top-0 h-[620px] opacity-50" />
      <div className="absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-blue-500/14 via-purple-500/8 to-transparent blur-2xl" />
      <div className="mx-auto max-w-7xl px-4 pb-20 pt-16 md:px-6 md:pb-28 md:pt-24">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="mx-auto max-w-5xl text-center">
          <p className="mb-5 inline-flex items-center rounded-full border border-white/12 bg-white/8 px-4 py-2 text-sm text-blue-200 backdrop-blur light:border-black/10 light:bg-white/70 light:text-blue-700">
            AI Animated Drama Learning Hub
          </p>
          <h1 className="text-balance text-5xl font-semibold tracking-normal text-white light:text-neutral-950 md:text-7xl lg:text-8xl">
            AI 漫剧制作，从混乱工具到完整流程。
          </h1>
          <p className="mx-auto mt-7 max-w-3xl text-lg leading-9 muted md:text-xl">
            系统学习剧本、角色、分镜、Prompt、图像生成、视频生成、配音、剪辑、发布、复盘与商业化。不是工具清单，而是一套可执行的 AI 漫剧生产方法。
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="#workflow" className="inline-flex min-h-12 items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-blue-100">
              <Compass size={18} /> 开始学习完整流程
            </a>
            <a href="#tools" className="inline-flex min-h-12 items-center gap-2 rounded-full border border-white/14 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10 light:border-black/10 light:text-black">
              <Calculator size={18} /> 查看工具与成本
            </a>
            <a href="#monetization" className="inline-flex min-h-12 items-center gap-2 rounded-full border border-white/14 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10 light:border-black/10 light:text-black">
              <Play size={18} /> 了解盈利模式
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="glass mx-auto mt-16 grid max-w-5xl gap-4 rounded-[32px] p-5 md:grid-cols-2 md:p-8"
        >
          <div className="rounded-[24px] bg-black/35 p-6 light:bg-white/60">
            <h2 className="text-2xl font-semibold text-white light:text-neutral-950">AI漫剧不是“输入一句话生成大片”。</h2>
            <p className="mt-4 leading-8 muted">
              真正的流程是：先有故事，再有角色，再有分镜，再有图像，再有视频，最后靠剪辑把它变成作品。
            </p>
          </div>
          <div className="rounded-[24px] bg-black/35 p-6 light:bg-white/60">
            <h2 className="text-2xl font-semibold text-white light:text-neutral-950">商业化不是播放量神话。</h2>
            <p className="mt-4 leading-8 muted">
              这里不承诺你靠AI漫剧赚钱，只帮你看清钱从哪里来、成本花在哪里、风险藏在哪里，以及新手应该先练什么。
            </p>
          </div>
        </motion.div>
        <div className="mx-auto mt-10 h-px max-w-5xl bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>
    </section>
  );
}
