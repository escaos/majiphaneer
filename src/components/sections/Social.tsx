import { Heading } from "../ui/Heading";
import { useI18n } from "../../lib/i18n";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const socials = [
	{ name: "Instagram", href: "#", Icon: Instagram },
	{ name: "Twitter", href: "#", Icon: Twitter },
	{ name: "YouTube", href: "#", Icon: Youtube },
	{ name: "Facebook", href: "#", Icon: Facebook },
];

export function Social() {
	const { t } = useI18n();
	return (
		<section id="social" className="container py-20" data-animate>
			<Heading level={2} className="mb-6">
				{t("social_networks")}
			</Heading>
			<div className="flex gap-4">
				{socials.map(({ name, href, Icon }) => (
					<a
						key={name}
						href={href}
						aria-label={name}
						className="p-3 rounded-[var(--radius-md)] border border-zinc-800 hover:bg-foreground/10 transition-colors"
					>
						<Icon className="w-5 h-5" />
					</a>
				))}
			</div>
		</section>
	);
}
