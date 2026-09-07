/**
 * Thin line icons drawn to a shared 24px grid and a single 1.25 stroke weight,
 * so the benefit cards read as one set rather than four borrowed glyphs.
 */
const paths = {
  // Rising market line inside a frame
  chart: (
    <>
      <path d="M3 3v18h18" />
      <path d="M7 15l3.5-4 3 2.5L20 7" />
      <path d="M20 7h-3.5M20 7v3.5" />
    </>
  ),
  // Target with a plotted approach
  strategy: (
    <>
      <circle cx="14.5" cy="9.5" r="6.5" />
      <circle cx="14.5" cy="9.5" r="2.5" />
      <path d="M3 21l6.2-6.2" />
      <path d="M3 21v-3.5M3 21h3.5" />
    </>
  ),
  // Shield with a check
  shield: (
    <>
      <path d="M12 3l7 3v6c0 4.2-2.9 7.6-7 9-4.1-1.4-7-4.8-7-9V6l7-3z" />
      <path d="M9 12l2.2 2.2L15.5 10" />
    </>
  ),
  // Group of people
  community: (
    <>
      <circle cx="9" cy="9" r="3" />
      <path d="M3.5 19.5c.6-3 2.8-4.8 5.5-4.8s4.9 1.8 5.5 4.8" />
      <path d="M16 6.4a3 3 0 0 1 0 5.2" />
      <path d="M17.5 14.9c2 .6 3.4 2.2 3.9 4.6" />
    </>
  ),
};

export default function Icon({ name, size = 24 }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {paths[name]}
    </svg>
  );
}
