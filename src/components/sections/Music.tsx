import { motion } from "framer-motion";
import { Card, CardDescription, CardTitle } from "../ui/Card";
import { Heading } from "../ui/Heading";
import { useI18n } from "../../lib/i18n";

const tracks = [
	{ title: "Aurora", desc: "Ambient electronica, 2025", link: "#" },
	{ title: "Echoes", desc: "Downtempo, 2024", link: "#" },
	{ title: "Waves", desc: "Chillwave, 2023", link: "#" },
];

export function Music() {
  const { t } = useI18n();
	return (
		<section id="music" className="container py-20" data-animate>
			<Heading level={2} className="mb-8">{t("music")}</Heading>
			<div className="grid md:grid-cols-3 gap-6">
				{tracks.map((t, idx) => (
					<motion.a
						href={t.link}
						key={t.title}
						initial={{ opacity: 0, y: 12 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.4, delay: idx * 0.05 }}
					>
						<Card className="h-full">
							<CardTitle className="mb-2">{t.title}</CardTitle>
							<CardDescription>{t.desc}</CardDescription>
						</Card>
					</motion.a>
				))}
			</div>
		</section>
	);
}
