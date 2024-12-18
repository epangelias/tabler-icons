/*
category: Map
tags:
  - localization
  - maps
  - navigation
  - pin
  - target
version: '1.22'
unicode: ecef
*/
const CurrentLocation = () => (
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
    <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
    <path d="M12 12m-8 0a8 8 0 1 0 16 0a8 8 0 1 0 -16 0" />
    <path d="M12 2l0 2" />
    <path d="M12 20l0 2" />
    <path d="M20 12l2 0" />
    <path d="M2 12l2 0" />
  </svg>
);

export default CurrentLocation;
