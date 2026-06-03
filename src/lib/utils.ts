/**
 * cn — tiny classNames joiner (no clsx/tailwind-merge dependency to keep the
 * bundle lean). Filters falsy values and flattens arrays.
 */
export function cn(
  ...inputs: Array<string | false | null | undefined | Record<string, boolean>>
): string {
  const out: string[] = [];
  for (const input of inputs) {
    if (!input) continue;
    if (typeof input === 'string') {
      out.push(input);
    } else {
      for (const [key, value] of Object.entries(input)) {
        if (value) out.push(key);
      }
    }
  }
  return out.join(' ');
}
