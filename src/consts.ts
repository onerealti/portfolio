// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'Murtaza Ahmed - Backend & Infrastructure Consultant';
export const SITE_DESCRIPTION =
  'Backend systems, distributed infrastructure, and platform engineering. I help teams build systems that scale.';

export const SITE_URL = 'https://murtaza.dev';

// Navigation links
export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/case-studies/', label: 'Case Studies' },
  { href: '/contact/', label: 'Contact' },
] as const;

// Contact info
export const CONTACT = {
  email: 'hello@murtaza.dev',
  github: 'https://github.com/murtaza',
  linkedin: 'https://linkedin.com/in/murtazaahmed',
} as const;

// Homepage metrics
export const METRICS = [
  { value: '99.9%', label: 'Uptime SLA delivered' },
  { value: '120ms', label: 'p99 API latency' },
  { value: '500K+', label: 'Requests/day handled' },
  { value: '35%', label: 'Infra cost reduction' },
] as const;
