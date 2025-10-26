import { Heading } from "../ui/Heading";
import { Button } from "../ui/Button";
import { useI18n } from "../../lib/i18n";

export function Contact() {
  const { t } = useI18n();
	return (
		<section id="contact" className="container py-20" data-animate>
			<Heading level={2} className="mb-6">{t("contact")}</Heading>
			<form className="grid md:grid-cols-2 gap-4 max-w-2xl">
				<input
					className="rounded-[var(--radius-md)] bg-white text-black placeholder:text-black/60 border border-foreground/20 px-3 py-2"
					placeholder={t("name")}
				/>
				<input
					className="rounded-[var(--radius-md)] bg-white text-black placeholder:text-black/60 border border-foreground/20 px-3 py-2"
					placeholder={t("email")}
					type="email"
				/>
				<textarea
					className="md:col-span-2 rounded-[var(--radius-md)] bg-white text-black placeholder:text-black/60 border border-foreground/20 px-3 py-2 min-h-32"
					placeholder={t("message")}
				/>
				<div>
					<Button type="submit">{t("send")}</Button>
				</div>
			</form>
		</section>
	);
}
