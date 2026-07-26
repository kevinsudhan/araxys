type ClassValue = string | number | false | null | undefined;

/** Minimal class joiner. Keeps the bundle free of a clsx dependency. */
export function cn(...values: ClassValue[]): string {
  let out = "";
  for (const value of values) {
    if (!value && value !== 0) continue;
    out = out ? `${out} ${value}` : String(value);
  }
  return out;
}
