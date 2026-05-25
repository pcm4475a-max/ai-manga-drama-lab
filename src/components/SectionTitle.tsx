import { motion } from 'framer-motion'

interface Props {
  label?: string
  eyebrow?: string
  title: string
  subtitle?: string
  description?: string
  note?: string
  centered?: boolean
}

export default function SectionTitle({ label, eyebrow, title, subtitle, description, note, centered = true }: Props) {
  const labelText = label || eyebrow
  const descText = subtitle || description

  return (
    <motion.div
      className={`mb-14 ${centered ? 'text-center' : 'text-left'}`}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {labelText && <span className="tag mb-4">{labelText}</span>}

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-balance leading-[1.15]">
        {title}
      </h2>

      {descText && (
        <p className="mt-4 text-base sm:text-lg muted max-w-2xl text-balance leading-relaxed"
          style={centered ? { marginLeft: 'auto', marginRight: 'auto' } : undefined}>
          {descText}
        </p>
      )}

      {note && (
        <p className="mt-3 text-xs sm:text-sm muted opacity-70 text-balance"
          style={centered ? { marginLeft: 'auto', marginRight: 'auto', maxWidth: '36rem' } : undefined}>
          {note}
        </p>
      )}
    </motion.div>
  )
}
