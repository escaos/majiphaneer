import { useState } from 'preact/hooks';

interface Props {
  email: string;
  labels: {
    name: string;
    message: string;
    send: string;
  };
}

// No backend: the form composes a prefilled mailto: draft in the visitor's
// own mail client. Rendered only when a public contact email exists.
export default function ContactForm({ email, labels }: Props) {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const submit = (event: Event) => {
    event.preventDefault();
    const subject = encodeURIComponent(name ? `Mensaje de ${name}` : 'Mensaje');
    const body = encodeURIComponent(message);
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  return (
    <form onSubmit={submit} class="grid gap-4">
      <label class="grid gap-1 text-sm text-muted">
        {labels.name}
        <input
          type="text"
          name="name"
          value={name}
          onInput={(e) => setName((e.target as HTMLInputElement).value)}
          class="rounded-md border border-border bg-bg px-3 py-2 text-base text-ink"
        />
      </label>
      <label class="grid gap-1 text-sm text-muted">
        {labels.message}
        <textarea
          name="message"
          rows={5}
          value={message}
          onInput={(e) => setMessage((e.target as HTMLTextAreaElement).value)}
          required
          class="rounded-md border border-border bg-bg px-3 py-2 text-base text-ink"
        />
      </label>
      <button
        type="submit"
        class="justify-self-start rounded-full bg-secondary px-6 py-2.5 text-sm font-medium text-bg transition-opacity hover:opacity-90"
      >
        {labels.send}
      </button>
    </form>
  );
}
