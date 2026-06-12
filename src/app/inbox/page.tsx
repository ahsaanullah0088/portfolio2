'use client';

import { useEffect, useState, type FormEvent } from 'react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Mail, ArrowUpRight } from '@/components/ui/Icons';

type Message = { name: string; email: string; message: string; at: string };

export default function InboxPage() {
  const [key, setKey] = useState('');
  const [messages, setMessages] = useState<Message[] | null>(null);
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle');
  const [error, setError] = useState('');

  async function load(secret: string) {
    setStatus('loading');
    setError('');
    try {
      const res = await fetch(`/api/contact/messages?key=${encodeURIComponent(secret)}`);
      const json = await res.json();
      if (!res.ok || !json.ok) throw new Error(json.error || 'Wrong password.');
      setMessages(json.messages);
      sessionStorage.setItem('inbox_key', secret);
      setStatus('idle');
    } catch (err) {
      setStatus('error');
      setError(err instanceof Error ? err.message : 'Something went wrong.');
      setMessages(null);
    }
  }

  // Restore session if already unlocked this tab.
  useEffect(() => {
    const saved = sessionStorage.getItem('inbox_key');
    if (saved) {
      setKey(saved);
      load(saved);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (key.trim()) load(key.trim());
  }

  function lock() {
    sessionStorage.removeItem('inbox_key');
    setMessages(null);
    setKey('');
  }

  return (
    <Container className="min-h-screen py-28">
      <div className="mx-auto max-w-2xl">
        <div className="mb-8 flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-2xl border border-brand-500/20 bg-brand-500/10 text-brand-300">
            <Mail className="h-5 w-5" />
          </span>
          <div>
            <h1 className="font-display text-2xl font-semibold">Contact Inbox</h1>
            <p className="text-sm text-muted">Messages submitted through your portfolio.</p>
          </div>
        </div>

        {messages === null ? (
          <form
            onSubmit={onSubmit}
            className="rounded-3xl border border-[rgb(var(--border)/0.1)] bg-[rgb(var(--surface)/0.03)] p-6"
          >
            <label htmlFor="key" className="mb-1.5 block text-xs font-medium text-muted">
              Inbox password
            </label>
            <input
              id="key"
              type="password"
              value={key}
              onChange={(e) => setKey(e.target.value)}
              placeholder="Enter INBOX_SECRET"
              autoFocus
              className="w-full rounded-xl border border-[rgb(var(--border)/0.1)] bg-[rgb(var(--surface)/0.03)] px-4 py-3 text-sm text-[rgb(var(--text))] placeholder:text-muted/60 focus:border-brand-500/50 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
            />
            {status === 'error' && <p className="mt-2 text-sm text-rose-400">{error}</p>}
            <Button type="submit" className="mt-4 w-full" disabled={status === 'loading'}>
              {status === 'loading' ? 'Unlocking…' : 'Unlock inbox'}
            </Button>
          </form>
        ) : (
          <>
            <div className="mb-4 flex items-center justify-between">
              <p className="text-sm text-muted">
                {messages.length} message{messages.length === 1 ? '' : 's'}
              </p>
              <button onClick={lock} className="text-sm font-medium text-brand-300 hover:text-brand-200">
                Lock
              </button>
            </div>

            {messages.length === 0 ? (
              <div className="rounded-3xl border border-dashed border-[rgb(var(--border)/0.14)] p-10 text-center text-sm text-muted">
                No messages yet.
              </div>
            ) : (
              <ul className="space-y-3">
                {messages.map((m, i) => (
                  <li
                    key={i}
                    className="rounded-2xl border border-[rgb(var(--border)/0.1)] bg-[rgb(var(--surface)/0.03)] p-5"
                  >
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <span className="font-semibold">{m.name}</span>
                      <span className="text-xs text-muted">
                        {new Date(m.at).toLocaleString()}
                      </span>
                    </div>
                    <a
                      href={`mailto:${m.email}?subject=Re: your message`}
                      className="inline-flex items-center gap-1 text-sm text-brand-300 hover:text-brand-200"
                    >
                      {m.email}
                      <ArrowUpRight className="h-3 w-3" />
                    </a>
                    <p className="mt-2 whitespace-pre-wrap text-sm leading-relaxed text-muted">
                      {m.message}
                    </p>
                  </li>
                ))}
              </ul>
            )}
          </>
        )}
      </div>
    </Container>
  );
}
