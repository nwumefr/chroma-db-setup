/** RMHC-style logo: house with heart (simplified for branding alignment with rmhcphilly.org) */
export default function RMHCLogo({ className = '', ariaHidden = false }) {
  return (
    <svg
      className={className}
      width="40"
      height="36"
      viewBox="0 0 40 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden={ariaHidden}
    >
      {/* House shape */}
      <path
        d="M20 2L2 18h4v16h28V18h4L20 2z"
        fill="currentColor"
      />
      {/* Heart inside (centered in lower part of house) */}
      <path
        d="M20 26.5c-1.5-1.4-4-1.4-5.5 0-1.5 1.5-1.5 4 0 5.5 1.5 1.5 5.5 1.5 5.5 0 1.5-1.5 1.5-4 0-5.5-1.5-1.4-4-1.4-5.5 0z"
        fill="var(--rmhc-yellow, #ffc72c)"
      />
    </svg>
  );
}
