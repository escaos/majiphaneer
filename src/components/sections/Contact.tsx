import { Heading } from "../ui/Heading";
import { Button } from "../ui/Button";

export function Contact() {
	return (
		<section id="contact" className="container py-20" data-animate>
			<Heading level={2} className="mb-6">
				Contact
			</Heading>
			<form className="grid md:grid-cols-2 gap-4 max-w-2xl">
				<input
					className="rounded-[var(--radius-md)] bg-zinc-900 border border-zinc-800 px-3 py-2"
					placeholder="Name"
				/>
				<input
					className="rounded-[var(--radius-md)] bg-zinc-900 border border-zinc-800 px-3 py-2"
					placeholder="Email"
					type="email"
				/>
				<textarea
					className="md:col-span-2 rounded-[var(--radius-md)] bg-zinc-900 border border-zinc-800 px-3 py-2 min-h-32"
					placeholder="Message"
				/>
				<div>
					<Button type="submit">Send</Button>
				</div>
			</form>
		</section>
	);
}
