type SocialIconProps = { name: string };

/** Local SVG icons: no external fonts or icon scripts required. */
export default function SocialIcon({ name }: SocialIconProps) {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" focusable="false">
      {name === "LinkedIn" && <>
        <rect x="3" y="3" width="18" height="18" rx="2" fill="currentColor" />
        <circle cx="7.4" cy="7.5" r="1.3" fill="var(--icon-cutout)" />
        <path d="M6.2 10h2.4v8H6.2zm4.1 0h2.3v1.1c.5-.8 1.3-1.3 2.5-1.3 2.3 0 2.9 1.4 2.9 3.6V18h-2.4v-4.1c0-1.1-.2-2-1.4-2s-1.5.9-1.5 2V18h-2.4z" fill="var(--icon-cutout)" />
      </>}
      {name === "Instagram" && <g fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4.2" />
        <circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none" />
      </g>}
      {name === "YouTube" && <>
        <path d="M21.5 7.2a3 3 0 0 0-2.1-2.1C17.5 4.6 12 4.6 12 4.6s-5.5 0-7.4.5a3 3 0 0 0-2.1 2.1C2 9.1 2 12 2 12s0 2.9.5 4.8a3 3 0 0 0 2.1 2.1c1.9.5 7.4.5 7.4.5s5.5 0 7.4-.5a3 3 0 0 0 2.1-2.1C22 14.9 22 12 22 12s0-2.9-.5-4.8Z" fill="currentColor" />
        <path d="m10 8.5 6 3.5-6 3.5z" fill="var(--icon-cutout)" />
      </>}
      {name === "WhatsApp" && <>
        <path d="M20.5 11.6a8.6 8.6 0 0 1-12.8 7.5L3 20.5l1.4-4.6A8.6 8.6 0 1 1 20.5 11.6Z" fill="none" stroke="currentColor" strokeWidth="1.7" />
        <path d="M8.2 6.9c-.4 0-1.2.7-1.2 1.8 0 2.6 3.9 6.5 6.8 7 .9.2 2.2-.5 2.3-1.2l.1-.9-2.5-1.2-.9 1c-1.5-.6-2.8-1.8-3.4-3.3l.9-1-1.1-2.2Z" fill="currentColor" />
      </>}
    </svg>
  );
}
