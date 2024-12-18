/*
tags:
  - arrows
  - directional
  - navigate
  - wayfinding
  - pointing
  - route
  - orientation
  - arrow-sign
  - guidance
  - direction
version: '2.41'
unicode: fd36
*/
const DirectionArrows = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
    <path d="M8 11l-1 1l1 1" />
    <path d="M11 8l1 -1l1 1" />
    <path d="M16 11l1 1l-1 1" />
    <path d="M11 16l1 1l1 -1" />
  </svg>
);

export default DirectionArrows;
