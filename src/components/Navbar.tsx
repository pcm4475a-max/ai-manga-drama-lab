import { Menu, Moon, Sun, X } from 'lucide-react';
import { useState } from 'react';

const navItems = [
  ['流程', 'workflow'],
  ['工具', 'tools'],
  ['成本', 'cost'],
  ['盈利', 'monetization'],
  ['路线', 'roadmap'],
  ['案例', 'case'],
  ['风险', 'risks'],
  ['来源', 'sources'],
];

type Props = {
  dark: boolean;
  onToggleTheme: () => void;
};

export default function Navbar({ dark, onToggleTheme }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/55 backdrop-blur-2xl light:border-black/10 light:bg-white/72">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6" aria-label="主导航">
        <a href="#top" className="font-semibold tracking-normal text-white light:text-neutral-950">
          AI Manga Drama Lab
        </a>
        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map(([label, id]) => (
            <a key={id} href={`#${id}`} className="rounded-full px-3 py-2 text-sm muted transition hover:bg-white/10 hover:text-white light:hover:bg-black/5 light:hover:text-black">
              {label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onToggleTheme}
            className="rounded-full border border-white/10 p-2 text-white transition hover:bg-white/10 light:border-black/10 light:text-neutral-950 light:hover:bg-black/5"
            aria-label={dark ? '切换到浅色模式' : '切换到深色模式'}
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="rounded-full border border-white/10 p-2 text-white transition hover:bg-white/10 light:border-black/10 light:text-neutral-950 lg:hidden"
            aria-label="打开移动端菜单"
          >
            {open ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </nav>
      {open ? (
        <div className="border-t border-white/10 bg-black/90 px-4 py-4 light:border-black/10 light:bg-white/95 lg:hidden">
          <div className="grid grid-cols-2 gap-2">
            {navItems.map(([label, id]) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-sm text-white transition hover:bg-white/10 light:text-neutral-950 light:hover:bg-black/5"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
