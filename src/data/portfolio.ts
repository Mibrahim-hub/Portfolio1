import type { IconType } from 'react-icons';
import {
  FaWindows,
  FaMicrosoft,
  FaNetworkWired,
  FaShieldAlt,
  FaCloud,
  FaExchangeAlt,
} from 'react-icons/fa';
import {
  SiVmware,
  SiCisco,
} from 'react-icons/si';
import {
  TbCloudComputing,
  TbFirewallFlame,
} from 'react-icons/tb';
import { FiServer, FiSettings, FiGitBranch, FiTerminal, FiMonitor, FiActivity } from 'react-icons/fi';

export const profile = {
  name: 'Mohamed Ibrahim',

  roles: [
    'IT Administrator',
    'System Administrator',
    'IT Support Specialist'
  ],

  subtitle:
    'Helping businesses build secure, reliable and scalable IT infrastructure.',

  summary:
    '5+ years of experience in IT Support, Windows Server, Active Directory, Office 365, VMware, Azure, Networking, FortiGate Firewall, Cisco, and IT Infrastructure.',

email: '[IT.Systemadmin91@gmail.com](mailto\:IT.Systemadmin91@gmail.com)',
  
  phone: '0538377925',

  linkedin:
    'https://www.linkedin.com/in/mohamed-ibrahim-09aab01b2/',

  github:
    'https://github.com/Mibrahim-hub',

  location: 'Saudi Arabia, Abha',

  cvPath: `${import.meta.env.BASE_URL}Mohamed-Ibrahim-CV.pdf`,
};
export const stats = [
  { label: 'Years Experience', value: 5, suffix: '+' },
  { label: 'Systems Managed', value: 120, suffix: '+' },
  { label: 'Tickets Resolved', value: 2000, suffix: '+' },
  { label: 'Uptime Maintained', value: 99, suffix: '%' },
];

export const aboutHighlights = [
  { icon: FaWindows, label: 'Windows Server' },
  { icon: FaMicrosoft, label: 'Active Directory' },
  { icon: FaCloud, label: 'Office 365' },
  { icon: SiVmware, label: 'VMware' },
  { icon: TbCloudComputing, label: 'Microsoft Azure' },
  { icon: SiCisco, label: 'Cisco Networking' },
  { icon: FaShieldAlt, label: 'FortiGate Firewall' },
  { icon: FaNetworkWired, label: 'IT Infrastructure' },
];

export type ExperienceItem = {
  role: string;
  period: string;
  company: string;
  description: string;
  tags: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: 'IT Support',
    period: 'March 2025 — Present',
    company: 'Full Screen For Accounting and Warehouse Management Co',
    description:
      'Deliver effective technical support to end-users, resolving hardware and software issues promptly. Maintain system integrity and security through regular system checks, updates, and backups. Configure and troubleshoot network issues to ensure reliable and secure connectivity. Manage incidents using ITSM tools and escalate critical issues when necessary.',
    tags: [
      'IT Support',
      'Hardware & Software',
      'Networking',
      'ITSM',
      'System Security',
    ],
  },

  {
    role: 'IT Administrator',
    period: '2023 — 2024',
    company: 'Vodafone Egypt',
    description:
      'Managed company IT networks, servers, and security systems. Installed and configured hardware and software, managed network servers, designed and installed computer systems including routers, switches, LAN, WAN, and intranet systems, and performed system upgrades, hardware installations, and data backups.',
    tags: [
      'IT Administration',
      'Servers',
      'Networking',
      'LAN/WAN',
      'Security',
      'Backup',
    ],
  },

  {
    role: 'Technical Support Specialist',
    period: '2021 — 2023',
    company: 'Xceed Company',
    description:
      'Configured operating systems and utilized remote desktop connections for immediate support. Diagnosed and resolved software and hardware problems for diverse customer bases. Applied security patches and upgrades to desktops and laptops to maintain system health.',
    tags: [
      'Technical Support',
      'Windows',
      'Remote Desktop',
      'Hardware',
      'Software',
      'Security Patches',
    ],
  },

  {
    role: 'Technical Support (Senior)',
    period: '2019 — 2021',
    company: 'B-Connect For Pharmacies',
    description:
      'Identified hardware and software solutions and troubleshot technical issues. Followed up with clients to ensure total problem resolution.',
    tags: [
      'Technical Support',
      'Hardware',
      'Software',
      'Troubleshooting',
      'Customer Support',
    ],
  },
];
export type Skill = {
  name: string;
  icon: IconType;
  category: 'Systems' | 'Cloud & Virtualization' | 'Networking' | 'Security' | 'Practices';
};

export const skills: Skill[] = [
  { name: 'Windows Server', icon: FaWindows, category: 'Systems' },
  { name: 'Active Directory', icon: FaMicrosoft, category: 'Systems' },
  { name: 'Group Policy', icon: FiSettings, category: 'Systems' },
  { name: 'DNS', icon: FiServer, category: 'Systems' },
  { name: 'DHCP', icon: FiServer, category: 'Systems' },
  { name: 'Exchange', icon: FaExchangeAlt, category: 'Systems' },
  { name: 'Office 365', icon: FaCloud, category: 'Cloud & Virtualization' },
  { name: 'VMware', icon: SiVmware, category: 'Cloud & Virtualization' },
  { name: 'Microsoft Azure', icon: TbCloudComputing, category: 'Cloud & Virtualization' },
  { name: 'Cisco CCNA', icon: SiCisco, category: 'Networking' },
  { name: 'LAN/WAN', icon: FaNetworkWired, category: 'Networking' },
  { name: 'TCP/IP', icon: FiGitBranch, category: 'Networking' },
  { name: 'FortiGate Firewall', icon: TbFirewallFlame, category: 'Security' },
  { name: 'ITIL', icon: FiActivity, category: 'Practices' },
  { name: 'Remote Desktop', icon: FiMonitor, category: 'Practices' },
  { name: 'Troubleshooting', icon: FiTerminal, category: 'Practices' },
];

export const skillCategories = [
  'Systems',
  'Cloud & Virtualization',
  'Networking',
  'Security',
  'Practices',
] as const;

export type Project = {
  title: string;
  description: string;
  tags: string[];
  icon: IconType;
  accent: string;
};

export const projects: Project[] = [
  {
    title: 'FortiGate Firewall Project',
    description:
      'Built firewall policies using VMware. Designed segmented network zones, NAT rules, and security profiles to simulate an enterprise perimeter defense in a virtualized environment.',
    tags: ['FortiGate', 'VMware', 'Firewall Policies', 'Network Security'],
    icon: TbFirewallFlame,
    accent: 'from-blue-500 to-cyan-400',
  },
  {
    title: 'CCNA Network Project',
    description:
      'Built an enterprise network using Packet Tracer and GNS3. Configured routing, switching, VLANs, inter-VLAN routing, and WAN connectivity across multiple sites.',
    tags: ['Cisco', 'Packet Tracer', 'GNS3', 'Routing & Switching'],
    icon: SiCisco,
    accent: 'from-cyan-500 to-blue-500',
  },
];

export type Certification = {
  name: string;
  issuer: string;
  status: 'Certified' | 'In Progress';
  icon: IconType;
};

export const certifications: Certification[] = [
  { name: 'CCNA', issuer: 'Cisco', status: 'Certified', icon: SiCisco },
  { name: 'NSE 4', issuer: 'Fortinet', status: 'Certified', icon: TbFirewallFlame },
  { name: 'CompTIA A+', issuer: 'CompTIA', status: 'Certified', icon: FiServer },
  { name: 'MCSA', issuer: 'Microsoft', status: 'Certified', icon: FaWindows },
  { name: 'ICDL', issuer: 'ECDL Foundation', status: 'Certified', icon: FiMonitor },
  { name: 'AZ-104', issuer: 'Microsoft', status: 'In Progress', icon: TbCloudComputing },
];

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];
