import { motion } from 'framer-motion';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import Section from '@/components/Section';
import SectionHeading from '@/components/SectionHeading';
import { profile } from '@/data/portfolio';
import { fadeInUp } from '@/lib/animations';

const contactCards = [
  { icon: FiPhone, label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
  {
  icon: FiMail,
  label: 'Email',
  value: profile.email,
  href: 'mailto:IT.Systemadmin91@gmail.com',
},
  { icon: FaLinkedin, label: 'LinkedIn', value: 'Connect on LinkedIn', href: profile.linkedin },
  { icon: FaGithub, label: 'GitHub', value: 'View repositories', href: profile.github },
];

export default function Contact() {
  return (
    <Section id="contact">
      <SectionHeading
        eyebrow="Get In Touch"
        title="Let's work together"
        description="Have a role or project in mind? Reach out — I usually respond within a day."
      />

      <div className="mx-auto flex max-w-2xl flex-col gap-4">
        {contactCards.map((c) => (
          <motion.a
            key={c.label}
            variants={fadeInUp}
            href={c.href}
            target={c.href.startsWith('http') ? '_blank' : undefined}
            rel="noreferrer"
            className="group glass-card flex items-center gap-4 p-5 transition-transform hover:-translate-y-1"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500/15 to-accent-400/15 text-xl text-primary-600 transition-colors group-hover:from-primary-500 group-hover:to-accent-400 group-hover:text-white dark:text-accent-400">
              <c.icon />
            </span>
            <div className="min-w-0">
              <p className="text-xs font-medium uppercase tracking-wider text-slate-400">{c.label}</p>
              <p className="truncate text-sm font-semibold text-slate-700 dark:text-slate-200">{c.value}</p>
            </div>
          </motion.a>
        ))}

        <motion.div variants={fadeInUp} className="glass-card flex items-center gap-3 p-5">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500/15 to-accent-400/15 text-primary-600 dark:text-accent-400">
            <FiMapPin className="h-5 w-5" />
          </span>
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-slate-400">Location</p>
            <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">{profile.location}</p>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
