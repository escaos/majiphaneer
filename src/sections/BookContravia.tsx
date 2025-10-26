import { Heading } from "../components/ui/Heading";
import { Button } from "../components/ui/Button";
import { useI18n } from "../lib/i18n";

export function BookContravia() {
  const { t } = useI18n();
  return (
    <section id="book" className="container py-20">
      <Heading level={2} className="mb-6">{t("book_quote")}</Heading>
      <div className="max-w-3xl space-y-4 text-muted">
        <p>{t("book_p1")}</p>
        <p>{t("book_p2")}</p>
        <p>{t("book_p3")}</p>
        <blockquote className="border-l-2 border-foreground/20 pl-4 italic">{t("book_testimonial")}</blockquote>
        <div className="flex gap-3">
          <Button>{t("book_discover")}</Button>
          <Button variant="secondary">{t("book_buy")}</Button>
        </div>
      </div>
    </section>
  );
}


