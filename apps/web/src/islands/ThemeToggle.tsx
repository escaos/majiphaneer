import { useState } from 'preact/hooks';
import { ICONS } from '../lib/icons.ts';
import { THEME_KEY } from '../lib/theme.ts';

interface Props {
  label: string;
  tone?: 'default' | 'light';
}

// The inline head script has already stamped data-theme before hydration;
// this island only flips it and persists the explicit choice.
export default function ThemeToggle({ label, tone = 'default' }: Props) {
  const [theme, setTheme] = useState<string>(() =>
    typeof window === 'undefined' ? 'light' : document.documentElement.dataset.theme || 'light',
  );

  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem(THEME_KEY, next);
    } catch {
      // Storage unavailable (private mode); the toggle still works this visit.
    }
    setTheme(next);
  };

  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      onClick={toggle}
      class={
        tone === 'light'
          ? 'inline-flex h-9 w-9 items-center justify-center rounded-full text-[#ebeae5]/85 transition-colors hover:bg-[#ebeae5]/15 hover:text-[#ebeae5]'
          : 'inline-flex h-9 w-9 items-center justify-center rounded-full text-muted transition-colors hover:bg-alt hover:text-ink'
      }
    >
      <svg
        viewBox="0 0 24 24"
        width="18"
        height="18"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
        dangerouslySetInnerHTML={{ __html: theme === 'dark' ? ICONS.sun : ICONS.moon }}
      />
    </button>
  );
}
