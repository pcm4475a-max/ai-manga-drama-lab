import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Monitor, ExternalLink, CheckCircle, AlertTriangle, Grid3X3, List } from 'lucide-react';
import { platforms } from '../data/platforms';

export default function PlatformMonetization() {
  const [viewMode, setViewMode] = useState<'detail' | 'grid'>('detail');
  const [selectedPlatform, setSelectedPlatform] = useState(platforms[0]?.platform ?? '抖音');

  const currentPlatform = platforms.find((p) => p.platform === selectedPlatform) ?? platforms[0];

  return (
    <section id="platforms" className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28">
      {/* Header */}
      <motion.div
        className="mx-auto mb-12 max-w-4xl text-center"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.55 }}
      >
        <p className="mb-3 text-sm font-semibold text-blue-400">平台商业化</p>
        <h2 className="text-balance text-3xl font-semibold text-white md:text-5xl">
          哪个平台更适合你的 AI 漫剧？
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 muted md:text-lg">
          不同平台的用户、内容偏好、变现方式和准入门槛完全不同。
        </p>
      </motion.div>

      {/* View mode toggle */}
      <motion.div
        className="mb-8 flex items-center justify-between"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <div className="flex items-center gap-1 rounded-2xl bg-white/5 p-1">
          <button
            type="button"
            onClick={() => setViewMode('detail')}
            className={`flex items-center gap-1.5 rounded-xl px-4 py-2 text-sm font-medium transition ${
              viewMode === 'detail'
                ? 'bg-white text-black shadow-lg shadow-white/10'
                : 'text-white/50 hover:text-white/80'
            }`}
          >
            <List size={15} />
            详细对比
          </button>
          <button
            type="button"
            onClick={() => setViewMode('grid')}
            className={`flex items-center gap-1.5 rounded-xl px-4 py-2 text-sm font-medium transition ${
              viewMode === 'grid'
                ? 'bg-white text-black shadow-lg shadow-white/10'
                : 'text-white/50 hover:text-white/80'
            }`}
          >
            <Grid3X3 size={15} />
            全部浏览
          </button>
        </div>
        <p className="text-xs muted">
          共 <span className="font-semibold text-white">{platforms.length}</span> 个平台
        </p>
      </motion.div>

      <AnimatePresence mode="wait">
        {viewMode === 'detail' ? (
          <motion.div
            key="detail"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
          >
            <DetailView
              selected={selectedPlatform}
              onSelect={setSelectedPlatform}
              current={currentPlatform}
            />
          </motion.div>
        ) : (
          <motion.div
            key="grid"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
          >
            <GridView
              onSelect={(p) => {
                setSelectedPlatform(p);
                setViewMode('detail');
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Detail View                                                         */
/* ------------------------------------------------------------------ */

function DetailView({
  selected,
  onSelect,
  current,
}: {
  selected: string;
  onSelect: (p: string) => void;
  current: (typeof platforms)[number];
}) {
  return (
    <div className="space-y-6">
      {/* Platform tabs */}
      <div className="glass rounded-2xl p-2">
        <div className="flex flex-wrap gap-1.5">
          {platforms.map((p) => (
            <button
              key={p.platform}
              type="button"
              onClick={() => onSelect(p.platform)}
              className={`shrink-0 rounded-xl px-4 py-2 text-sm font-medium transition ${
                selected === p.platform
                  ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/25'
                  : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white'
              }`}
            >
              {p.platform}
            </button>
          ))}
        </div>
      </div>

      {/* Main detail card */}
      <div className="glass rounded-[32px] p-5 md:p-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          {/* Left column: platform info */}
          <div className="space-y-6">
            {/* Header with name and verify badge */}
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/10">
                  <Monitor size={20} className="text-blue-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{current.platform}</h3>
                  {current.needManualVerify && (
                    <span className="mt-1.5 inline-flex items-center gap-1 rounded-full border border-orange-500/30 bg-orange-500/10 px-2.5 py-0.5 text-[0.65rem] font-semibold text-orange-400">
                      <AlertTriangle size={10} />
                      需实时确认
                    </span>
                  )}
                </div>
              </div>
              <span className="text-xs muted">核验时间：{current.lastChecked}</span>
            </div>

            {/* Suitable content */}
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-white/40">
                适合内容
              </p>
              <p className="text-sm leading-relaxed text-white/80">
                {current.suitableContent}
              </p>
            </div>

            {/* Monetization methods as tags */}
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-white/40">
                变现方式
              </p>
              <div className="flex flex-wrap gap-2">
                {current.monetizationMethods.map((method) => (
                  <span
                    key={method}
                    className="inline-flex items-center rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1.5 text-xs font-medium text-purple-300"
                  >
                    {method}
                  </span>
                ))}
              </div>
            </div>

            {/* Requirements as checkmarks */}
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-white/40">
                准入要求
              </p>
              <ul className="space-y-2.5">
                {current.requirements.map((req) => (
                  <li
                    key={req}
                    className="flex items-start gap-2.5 text-sm text-white/70"
                  >
                    <CheckCircle
                      size={15}
                      className="mt-0.5 shrink-0 text-green-400"
                    />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Beginner advice highlighted box */}
            <div className="rounded-2xl border border-blue-500/20 bg-blue-500/5 p-5">
              <p className="mb-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-blue-400">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
                新手建议
              </p>
              <p className="text-sm leading-relaxed text-blue-200">
                {current.beginnerAdvice}
              </p>
            </div>
          </div>

          {/* Right column: advantages, disadvantages, links, warning */}
          <div className="space-y-5">
            {/* Advantages & Disadvantages two columns */}
            <div className="grid grid-cols-2 gap-4">
              <div className="surface rounded-2xl p-5">
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-green-400">
                  优势
                </p>
                <ul className="space-y-2">
                  {current.advantages.map((adv) => (
                    <li
                      key={adv}
                      className="flex items-start gap-2 text-sm text-white/70"
                    >
                      <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-green-400" />
                      {adv}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="surface rounded-2xl p-5">
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-orange-400">
                  劣势
                </p>
                <ul className="space-y-2">
                  {current.disadvantages.map((dis) => (
                    <li
                      key={dis}
                      className="flex items-start gap-2 text-sm text-white/70"
                    >
                      <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-orange-400" />
                      {dis}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Official links */}
            {current.officialLinks.length > 0 && (
              <div className="surface rounded-2xl p-5">
                <p className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white/50">
                  <ExternalLink size={13} />
                  官方链接
                </p>
                <div className="space-y-2">
                  {current.officialLinks.map((link) => (
                    <a
                      key={link}
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 break-all text-sm text-blue-400 transition hover:text-blue-300"
                    >
                      <ExternalLink size={13} className="shrink-0" />
                      <span>{link}</span>
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* Last checked warning */}
            <div className="flex items-start gap-3 rounded-2xl border border-orange-500/20 bg-orange-500/5 p-4">
              <AlertTriangle
                size={16}
                className="mt-0.5 shrink-0 text-orange-400"
              />
              <div>
                <p className="text-sm font-semibold text-orange-300">
                  信息时效：{current.lastChecked}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-orange-300/70">
                  {current.needManualVerify
                    ? '平台规则和变现政策频繁变化，请以官方后台最新公告为准，本页信息仅供参考。'
                    : '已按公开官方文档核验，但平台政策仍可能随时变更。'}
                </p>
              </div>
            </div>

            {/* Additional note */}
            <div className="surface rounded-2xl p-5">
              <div className="flex items-center gap-2">
                <Monitor size={14} className="text-white/40" />
                <p className="text-xs font-semibold uppercase tracking-wider text-white/40">
                  平台定位
                </p>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-white/60">
                选择平台取决于你的内容类型、目标受众和变现目标。建议先在1-2个平台验证内容可行性，再考虑多平台分发。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Grid View                                                           */
/* ------------------------------------------------------------------ */

function GridView({
  onSelect,
}: {
  onSelect: (p: string) => void;
}) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {platforms.map((p, index) => (
        <motion.button
          key={p.platform}
          type="button"
          onClick={() => onSelect(p.platform)}
          className="surface group rounded-[24px] p-5 text-left transition hover:border-white/20 hover:bg-white/[0.08]"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: index * 0.04 }}
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex items-start justify-between gap-2">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 transition group-hover:bg-blue-500/20">
                <Monitor size={17} className="text-blue-400" />
              </div>
              <h4 className="text-base font-semibold text-white">
                {p.platform}
              </h4>
            </div>
            {p.needManualVerify && (
              <AlertTriangle
                size={13}
                className="shrink-0 text-orange-400"
              />
            )}
          </div>
          <p className="mt-3 line-clamp-3 text-xs leading-relaxed text-white/50">
            {p.suitableContent}
          </p>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {p.monetizationMethods.slice(0, 3).map((m) => (
              <span
                key={m}
                className="inline-flex rounded-full bg-blue-500/10 px-2 py-0.5 text-[0.65rem] text-blue-300"
              >
                {m}
              </span>
            ))}
            {p.monetizationMethods.length > 3 && (
              <span className="inline-flex rounded-full bg-white/10 px-2 py-0.5 text-[0.65rem] text-white/40">
                +{p.monetizationMethods.length - 3}
              </span>
            )}
          </div>
          <p className="mt-3 text-[0.65rem] text-orange-400/60">
            {p.lastChecked}
          </p>
        </motion.button>
      ))}
    </div>
  );
}
