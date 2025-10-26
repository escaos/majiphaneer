import { Heading } from "../components/ui/Heading";
import { useI18n } from "../lib/i18n";

export function About() {
	const { t } = useI18n();
	return (
		<section id="about" className="container py-20">
			<Heading level={2} className="mb-6">
				{t("about")}
			</Heading>
			<div className="max-w-3xl space-y-4 text-muted">
				<p>{t("about_h1_l1")}</p>
				<p>{t("about_h1_l2")}</p>
				<p>{t("about_p1")}</p>
				<p>{t("about_p2")}</p>
				<p>{t("about_p3")}</p>
				<p>{t("about_p4")}</p>
			</div>
		</section>
	);
}
