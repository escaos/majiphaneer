export function Footer() {
	return (
		<footer className="border-t border-zinc-800/60 py-8 mt-16">
			<div className="container flex items-center justify-between text-sm text-muted">
				<p>© {new Date().getFullYear()} Maji. All rights reserved.</p>
				<a href="#hero" className="hover:text-foreground">
					Back to top
				</a>
			</div>
		</footer>
	);
}
