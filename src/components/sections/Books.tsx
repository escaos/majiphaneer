import { motion } from "framer-motion";
import { Card, CardDescription, CardTitle } from "../ui/Card";
import { Heading } from "../ui/Heading";
import { useI18n } from "../../lib/i18n";

const books = [
    { title: "Midnight Notes", desc: "Poetry collection", link: "#" },
    { title: "Silent Rooms", desc: "Short stories", link: "#" },
    { title: "Field Recordings", desc: "Essays", link: "#" },
];

export function Books() {
  const { t } = useI18n();
	return (
		<section id="books" className="container py-20" data-animate>
			<Heading level={2} className="mb-8">{t("books")}</Heading>
			<div className="grid md:grid-cols-3 gap-6">
				{books.map((b, idx) => (
					<motion.a
						href={b.link}
						key={b.title}
						initial={{ opacity: 0, y: 12 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.4, delay: idx * 0.05 }}
					>
						<Card className="h-full">
							<CardTitle className="mb-2">{b.title}</CardTitle>
							<CardDescription>{b.desc}</CardDescription>
						</Card>
					</motion.a>
				))}
			</div>
		</section>
	);
}
