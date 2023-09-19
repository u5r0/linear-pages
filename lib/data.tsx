import { AboutIcon, BlogIcon, CareersIcon } from "@/components/icons";

export const FooterLinks = [
  {
    title: 'Product',
    links: [
      { href: '/features', label: 'Features' },
      { href: '/integrations', label: 'Integrations' },
      { href: '/pricing', label: 'Pricing' },
      { href: '/changelog', label: 'Changelog' },
      { href: '/docs', label: 'Docs' },
      { href: '/method', label: 'Linear Method' },
      { href: '/download', label: 'Download' },
    ],
  },
  {
    title: 'Company',
    links: [
      { href: '/about', label: 'About us' },
      { href: '/blog', label: 'Blog' },
      { href: '/careers', label: 'Careers' },
      { href: '/customers', label: 'Customers' },
      { href: '/brand', label: 'Brand' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { href: '/community', label: 'Community' },
      { href: '/contact', label: 'Contact' },
      { href: '/dpa', label: 'DPA' },
      { href: '/privacy', label: 'Privacy Policy' },
      { href: '/terms', label: 'Terms of service' },
      { href: '/vulnerability', label: 'Report a vulnerability' },
    ],
  },
  {
    title: 'Developers',
    links: [
      { href: '/api', label: 'API' },
      { href: '/status', label: 'Status' },
      { href: '/github', label: 'GitHub' },
    ],
  },
];

export const Shortcuts = [
  { text: 'Opens command line', keys: '⌘k' },
  { text: 'Assign issue to me', keys: 'i' },
  { text: 'Assign issue to', keys: 'a' },
  { text: 'Change issue status', keys: 's' },
  { text: 'Set issue priority', keys: 'p' },
  { text: 'Add issue labels', keys: 'l' },
  { text: 'Set due date', keys: '⇧d' },
  { text: 'Set parent issue', keys: '⇧⌘p' },
  { text: 'Add sub-issue', keys: '⇧⌘o' },
  { text: 'Create new issue', keys: 'c' },
  { text: 'Create new issue from template', keys: '⌥c' },
  { text: 'Move to project', keys: '⇧p' },
];

export const NavLinks = [
  { href: '/features', label: 'Features' },
  { href: '/method', label: 'Method' },
  { href: '/customers', label: 'Customers', className: 'sm:hidden lg:block' },
  { href: '/changelog', label: 'Changelog', className: 'sm:hidden lg:block' },
  { href: '/integrations', label: 'Integrations', className: 'sm:hidden lg:block' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/contact', label: 'Contact' },

  { label: 'Company' },
  { href: '/about', label: 'About', className: 'sm:hidden', icon: <AboutIcon /> },
  { href: '/blog', label: 'Blog', className: 'sm:hidden', icon: <BlogIcon /> },
  { href: '/careers', label: 'Careers', className: 'sm:hidden', icon: <CareersIcon /> },
];