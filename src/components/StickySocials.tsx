import { Github, Linkedin, MessageCircle, Instagram } from 'lucide-react';

const socials = [
  {
    name: 'LinkedIn',
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/rizvank',
    color: 'hover:bg-[#0077B5]',
  },
  {
    name: 'GitHub',
    icon: Github,
    href: 'https://github.com/MRizvank',
    color: 'hover:bg-[#333]',
  },
  {
    name: 'WhatsApp',
    icon: MessageCircle,
    href: 'https://wa.me/916282694500',
    color: 'hover:bg-[#25D366]',
  },
  {
    name: 'Instagram',
    icon: Instagram,
    href: 'https://www.instagram.com/mr_kni_ght/',
    color: 'hover:bg-gradient-to-tr hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#F77737]',
  },
];

export function StickySocials() {
  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-3">
      {socials.map((social) => (
        <a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`group relative w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center transition-all duration-300 hover:scale-110 hover:border-transparent hover:text-white ${social.color}`}
          aria-label={social.name}
        >
          <social.icon className="w-5 h-5" />
          <span className="absolute left-12 px-2 py-1 rounded bg-card border border-border text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            {social.name}
          </span>
        </a>
      ))}
    </div>
  );
}
