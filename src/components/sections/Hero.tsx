import * as React from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { Heading } from "../ui/Heading";

export function Hero() {
	const imageRef = React.useRef<HTMLDivElement>(null);
	return (
		<section
			id="hero"
			className="container py-4 md:py-16 flex flex-col items-center justify-center w-full"
			data-animate
		>
			<Heading
				level={1}
				display
				className="uppercase tracking-tight mb-6 w-full text-center text-3xl"
			>
				MAJI PHANEER
			</Heading>
			<div className="grid md:grid-cols-2 gap-10 items-start">
				<motion.div
					ref={imageRef}
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true, amount: 0.4 }}
					className="relative mx-auto size-80 md:size-128 rounded-full overflow-hidden border-2 border-foreground/20"
					style={{ clipPath: "circle(50% at 50% 50%)" }}
				>
					<img
						src="/maji-phaneer-web-photo.jpg"
						alt="Maji Phaneer"
						className="h-full w-full object-cover object-top"
						loading="eager"
						decoding="async"
					/>
				</motion.div>
				<div className="flex flex-col items-center justify-center px-4 text-center">
					<p className="text-muted max-w-prose mb-6 text-lg">
						Experience the unique blend of pop, hip‑hop, and electronic music with a bold, modern
						aesthetic.
					</p>
					<div className="flex gap-3">
						<Button
							onClick={() =>
								document.getElementById("music")?.scrollIntoView({ behavior: "smooth" })
							}
						>
							Listen now
						</Button>
						<Button
							variant="secondary"
							onClick={() =>
								document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
							}
						>
							Contact
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}
