export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ');
}

export function formatCurrency(value: number, currency = '¥') {
  return `${currency}${Math.max(0, value).toLocaleString('zh-CN', {
    maximumFractionDigits: 0,
  })}`;
}

export async function copyText(text: string) {
  if (!navigator.clipboard) return false;
  await navigator.clipboard.writeText(text);
  return true;
}

export const copyToClipboard = copyText;

export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

export function getDifficultyLabel(level: string): string {
  switch (level) {
    case 'easy': return '入门';
    case 'medium': return '进阶';
    case 'hard': return '高级';
    default: return '入门';
  }
}

export function getDifficultyColor(level: string): string {
  switch (level) {
    case 'easy': return 'text-green-400 bg-green-400/10';
    case 'medium': return 'text-yellow-400 bg-yellow-400/10';
    case 'hard': return 'text-red-400 bg-red-400/10';
    default: return 'text-green-400 bg-green-400/10';
  }
}

export function getRiskColor(risk: string) {
  switch (risk) {
    case '低风险': return '#30d158';
    case '中风险': return '#ff9f0a';
    case '高风险': return '#ff375f';
    default: return '#a1a1a6';
  }
}

export function getRiskBg(risk: string) {
  switch (risk) {
    case '低风险': return 'rgba(48, 209, 88, 0.12)';
    case '中风险': return 'rgba(255, 159, 10, 0.12)';
    case '高风险': return 'rgba(255, 55, 95, 0.12)';
    default: return 'rgba(161, 161, 166, 0.12)';
  }
}

export const lastCheckedHint = '价格和平台政策可能变化，以官方最新信息为准。';
