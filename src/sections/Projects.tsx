import { Heading } from "../components/ui/Heading";
import { Button } from "../components/ui/Button";
import { useI18n } from "../lib/i18n";

export function Projects() {
	const { t } = useI18n();
	return (
		<section id="projects" className="container py-20">
			<Heading level={2} className="mb-6">
				{t("projects_title")}
			</Heading>
			<div className="grid md:grid-cols-2 gap-6">
				<div className="space-y-2">
					<h3 className="text-xl font-semibold">{t("projects_item1_title")}</h3>
					<p className="text-muted">{t("projects_item1_desc")}</p>
				</div>
				<div className="space-y-2">
					<h3 className="text-xl font-semibold">{t("projects_item2_title")}</h3>
					<p className="text-muted">{t("projects_item2_desc")}</p>
					<Button>{t("projects_invite")}</Button>
				</div>
			</div>
		</section>
	);
}
