import { Heading } from "../components/ui/Heading";
import { useI18n } from "../lib/i18n";

export function Blog() {
  const { t } = useI18n();
  return (
    <section id="blog" className="container py-20">
      <Heading level={2} className="mb-6">{t("blog_title")}</Heading>
      <p className="text-muted max-w-3xl">{t("blog_intro")}</p>
    </section>
  );
}


