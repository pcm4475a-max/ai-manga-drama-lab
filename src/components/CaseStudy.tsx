// @ts-nocheck
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Film, Camera, AlertTriangle, DollarSign, User, Lightbulb, Eye, BookOpen } from 'lucide-react';
import { caseStudy } from '../data/caseStudy';
import { copyToClipboard } from '../lib/utils';

export default function CaseStudy() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = async (text: string, id: string) => {
    const ok = await copyToClipboard(text);
    if (ok) {
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  return (
    <section id="case" className="relative mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28">
      <motion.div
        className="mx-auto mb-12 max-w-4xl text-center"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.55 }}
      >
        <p className="mb-3 text-sm font-semibold text-green-400">案例研究</p>
        <h2 className="text-balance text-3xl font-semibold text-white md:text-5xl">{caseStudy.title}</h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 muted md:text-lg">
          完整拆解一部AI漫剧从设定到成品的每个环节。
        </p>
      </motion.div>

      {/* Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="glass mb-6 rounded-[32px] p-6 md:p-8"
      >
        <div className="mb-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { label: '时长', value: caseStudy.duration },
            { label: '平台', value: caseStudy.platform },
            { label: '风格', value: caseStudy.style },
            { label: '情绪线', value: caseStudy.emotion },
          ].map((item) => (
            <div key={item.label} className="surface rounded-2xl p-4">
              <p className="mb-1 text-[11px] uppercase tracking-wider muted">{item.label}</p>
              <p className="text-lg font-semibold text-white">{item.value}</p>
            </div>
          ))}
        </div>

        <div className="mb-6">
          <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-white/70">
            <BookOpen size={14} /> 剧情概要
          </h3>
          <p className="text-sm leading-relaxed text-white/80">{caseStudy.synopsis}</p>
        </div>

        <div className="mb-6">
          <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-white/70">
            <User size={14} /> 角色设定
          </h3>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {caseStudy.characters.map((char, i) => (
              <div key={i} className="surface rounded-2xl p-4">
                <p className="text-sm leading-relaxed text-white/80">{char}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Shots Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-6"
      >
        <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-white">
          <Camera size={18} /> 分镜拆解 ({caseStudy.shots.length} 个镜头)
        </h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          {caseStudy.shots.map((shot, i) => (
            <motion.div
              key={shot.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
              className="surface flex flex-col rounded-2xl p-4"
            >
              <div className="mb-2 flex items-center justify-between">
                <span className="tag text-xs">{shot.id}</span>
                <button
                  onClick={() => handleCopy(shot.prompt, `shot-${i}`)}
                  className="copy-btn"
                >
                  <Copy size={12} />
                  {copiedId === `shot-${i}` ? '已复制' : '复制Prompt'}
                </button>
              </div>
              <p className="mb-2 text-xs font-semibold text-blue-400">{shot.camera}</p>
              <p className="mb-2 text-xs leading-relaxed text-white/70">{shot.description}</p>
              <p className="mb-2 flex-1 text-[11px] leading-relaxed muted line-clamp-3">{shot.prompt}</p>
              <p className="mt-auto text-[11px] italic text-purple-400/80">{shot.voice}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Editing & Titles */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="glass mb-6 rounded-[32px] p-6 md:p-8"
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-white/70">
              <Film size={14} /> 剪辑节奏
            </h3>
            <ul className="space-y-2">
              {caseStudy.editing.map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-white/80">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-white/70">
              <Eye size={14} /> 标题与封面文案
            </h3>
            <div className="mb-4">
              <p className="mb-1 text-[11px] text-white/40">备选标题</p>
              {caseStudy.titles.map((t, i) => (
                <p key={i} className="mb-1 text-sm text-white/80">&ldquo;{t}&rdquo;</p>
              ))}
            </div>
            <div>
              <p className="mb-1 text-[11px] text-white/40">封面文案</p>
              <div className="flex flex-wrap gap-2">
                {caseStudy.coverCopies.map((c, i) => (
                  <span key={i} className="tag text-xs">{c}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Cost & Risks */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="glass mb-6 rounded-[32px] p-6 md:p-8"
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-white/70">
              <DollarSign size={14} /> 成本估算
            </h3>
            <p className="text-sm leading-relaxed text-white/80">{caseStudy.costEstimate}</p>
          </div>
          <div>
            <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-white/70">
              <AlertTriangle size={14} /> 废片风险点
            </h3>
            <ul className="space-y-1.5">
              {caseStudy.failurePoints.map((fp, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-orange-300/80">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-400" />
                  {fp}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Commercial Judgment */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <div className="surface rounded-2xl border border-blue-500/15 p-6">
          <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-blue-400">
            <Lightbulb size={14} /> 商业判断
          </h3>
          <p className="text-sm leading-relaxed text-white/80">{caseStudy.commercialJudgment}</p>
        </div>
      </motion.div>
    </section>
  );
}

