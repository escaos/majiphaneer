import * as React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Button } from "../ui/Button";
import { Heading } from "../ui/Heading";

export function Hero() {
	const imageRef = React.useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: imageRef,
		offset: ["start 85%", "end 15%"],
	});
	const scaleRaw = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
	const scale = useSpring(scaleRaw, { stiffness: 500, damping: 24, mass: 0.4 });
	// Rotate a shadow around the circle as the user scrolls down
	const angleRaw = useTransform(scrollYProgress, [0, 1], [0, 720]);
	const rotate = useSpring(angleRaw, {
		stiffness: 120,
		damping: 22,
		mass: 0.5,
	});
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
					className="mx-auto size-80 md:size-128 rounded-full overflow-hidden border-2 border-foreground/20"
					style={{ clipPath: "circle(50% at 50% 50%)" }}
				>
					{/* spinning shadow along the border */}
					<motion.div className="pointer-events-none absolute inset-0" style={{ rotate }}>
						<span
							className="absolute left-1/2 top-0 h-6 w-6 -translate-x-1/2 rounded-full"
							style={{
								background: "radial-gradient(circle, rgba(0,0,0,0.35), rgba(0,0,0,0) 70%)",
								filter: "blur(6px)",
								mixBlendMode: "multiply",
							}}
						/>
					</motion.div>
					<motion.img
						src="/maji-phaneer-web-photo.jpg"
						alt="Maji Phaneer"
						className="h-full w-full object-cover object-top"
						loading="eager"
						decoding="async"
						style={{ scale }}
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
