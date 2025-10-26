import * as React from "react";
import { Button } from "../ui/Button";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const sections = [
	{ id: "hero", label: "Home" },
	{ id: "music", label: "Music" },
	{ id: "books", label: "Books" },
	{ id: "contact", label: "Contact" },
	{ id: "social", label: "Social" },
];

export function Header() {
	const [open, setOpen] = React.useState(false);

	React.useEffect(() => {
		const onKey = (e: KeyboardEvent) => {
			if (e.key === "Escape") setOpen(false);
		};
		document.addEventListener("keydown", onKey);
		document.body.style.overflow = open ? "hidden" : "";
		return () => {
			document.removeEventListener("keydown", onKey);
			document.body.style.overflow = "";
		};
	}, [open]);

	function onNavClick(id: string) {
		setOpen(false);
		const el = document.getElementById(id);
		el?.scrollIntoView({ behavior: "smooth", block: "start" });
	}

	return (
		<header className="sticky top-0 z-50 w-full border-b border-foreground/10 backdrop-blur bg-background/70">
			<div className="container h-14 flex items-center justify-between">
				<button
					type="button"
					className="font-bold flex items-center gap-2"
					onClick={() => onNavClick("hero")}
				>
					<span className="text-xl">✽</span>
					<span>MAJI</span>
				</button>
				<nav className="hidden md:flex gap-6 text-sm">
					{sections.map((s) => (
						<a
							key={s.id}
							href={`#${s.id}`}
							onClick={(e) => {
								e.preventDefault();
								onNavClick(s.id);
							}}
							className="text-muted hover:text-foreground transition-colors"
						>
							{s.label}
						</a>
					))}
				</nav>
				<div className="flex items-center gap-2">
					<Button
						size="sm"
						variant="secondary"
						className="hidden md:inline-flex"
						onClick={() => onNavClick("contact")}
					>
						Contact
					</Button>
					<button
						type="button"
						className="md:hidden p-2 rounded-md hover:bg-foreground/10"
						aria-label="Menu"
						aria-expanded={open}
						aria-controls="mobile-menu"
						onClick={() => setOpen(true)}
					>
						<Menu className="w-5 h-5" />
					</button>
				</div>
			</div>

			<AnimatePresence>
				{open && (
					<div className="fixed inset-0 bg-background h-screen w-screen flex items-center justify-center py-16">
						<motion.div
							id="mobile-menu"
							className="bg-background flex items-center justify-center"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
						>
							<button
								type="button"
								className="absolute top-4 right-4 p-2 rounded-md hover:bg-foreground/10"
								aria-label="Close menu"
								onClick={() => setOpen(false)}
							>
								<X className="w-6 h-6" />
							</button>

							<motion.ul
								className="flex flex-col items-center gap-10"
								initial="closed"
								animate="open"
								exit="closed"
								variants={{
									open: {
										transition: { staggerChildren: 0.06, delayChildren: 0.04 },
									},
									closed: {
										transition: { staggerChildren: 0.04, staggerDirection: -1 },
									},
								}}
							>
								{sections.slice(0, 3).map((s) => (
									<motion.li
										key={s.id}
										variants={{
											closed: { opacity: 0, y: 10 },
											open: { opacity: 1, y: 0 },
										}}
									>
										<button
											type="button"
											className="text-2xl text-muted hover:text-foreground transition-colors"
											onClick={() => onNavClick(s.id)}
										>
											{s.label}
										</button>
									</motion.li>
								))}
								{sections.slice(3).map((s) => (
									<motion.li
										key={s.id}
										variants={{
											closed: { opacity: 0, y: 10 },
											open: { opacity: 1, y: 0 },
										}}
									>
										<button
											type="button"
											className="text-2xl text-muted hover:text-foreground transition-colors"
											onClick={() => onNavClick(s.id)}
										>
											{s.label}
										</button>
									</motion.li>
								))}
							</motion.ul>
						</motion.div>
					</div>
				)}
			</AnimatePresence>
		</header>
	);
}
