import * as React from "react";
import { Button } from "../ui/Button";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { getLocale, setLocale, t, useI18n } from "../../lib/i18n";

const sections = [
  { id: "hero", labelKey: "home" as const },
  { id: "music", labelKey: "music" as const },
  { id: "books", labelKey: "books" as const },
  { id: "contact", labelKey: "contact" as const },
  { id: "social", labelKey: "social" as const },
];

export function Header() {
  const [open, setOpen] = React.useState(false);
  const { locale } = useI18n();

  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  function onNavClick(id: string) {
    setOpen(false);
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-foreground/10 backdrop-blur bg-background/70">
      <div className="container h-14 flex items-center justify-between">
        <button
          type="button"
          className="font-bold flex items-center gap-2"
          onClick={() => onNavClick("hero")}
        >
          <span className="text-xl">✽</span>
          <span>MAJI</span>
        </button>
        <nav className="hidden md:flex gap-6 text-sm">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              onClick={(e) => {
                e.preventDefault();
                onNavClick(s.id);
              }}
              className="text-muted hover:text-foreground transition-colors"
            >
              {t(s.labelKey)}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="text-xs px-2 py-1 rounded-md border border-foreground/20 hover:bg-foreground/10"
            onClick={() => setLocale(getLocale() === "es" ? "en" : "es")}
            aria-label="Toggle language"
          >
            {locale === "es" ? "ES" : "EN"}
          </button>
          <Button
            size="sm"
            variant="secondary"
            className="hidden md:inline-flex"
            onClick={() => onNavClick("contact")}
          >
            {t("contact")}
          </Button>
          <button
            type="button"
            className="md:hidden p-2 rounded-md hover:bg-foreground/10"
            aria-label="Menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(true)}
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 bg-background h-screen w-screen flex items-center justify-center py-16">
            <motion.div
              id="mobile-menu"
              className="bg-background flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <button
                type="button"
                className="absolute top-4 right-4 p-2 rounded-md hover:bg-foreground/10"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
              >
                <X className="w-6 h-6" />
              </button>

              <motion.ul
                className="flex flex-col items-center gap-10"
                initial="closed"
                animate="open"
                exit="closed"
                variants={{
                  open: {
                    transition: { staggerChildren: 0.06, delayChildren: 0.04 },
                  },
                  closed: {
                    transition: { staggerChildren: 0.04, staggerDirection: -1 },
                  },
                }}
              >
                {sections.slice(0, 3).map((s) => (
                  <motion.li
                    key={s.id}
                    variants={{
                      closed: { opacity: 0, y: 10 },
                      open: { opacity: 1, y: 0 },
                    }}
                  >
                    <button
                      type="button"
                      className="text-2xl text-muted hover:text-foreground transition-colors"
                      onClick={() => onNavClick(s.id)}
                    >
                      {t(s.labelKey)}
                    </button>
                  </motion.li>
                ))}
                {sections.slice(3).map((s) => (
                  <motion.li
                    key={s.id}
                    variants={{
                      closed: { opacity: 0, y: 10 },
                      open: { opacity: 1, y: 0 },
                    }}
                  >
                    <button
                      type="button"
                      className="text-2xl text-muted hover:text-foreground transition-colors"
                      onClick={() => onNavClick(s.id)}
                    >
                      {t(s.labelKey)}
                    </button>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </header>
  );
}
