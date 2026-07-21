import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaGraduationCap,
} from "react-icons/fa";

import { socials } from "../../data/socials";

const iconMap = {
  github: FaGithub,
  linkedin: FaLinkedin,
  mail: FaEnvelope,
  scholar: FaGraduationCap,
};

export default function SocialIcons() {
  return (
    <div className="flex items-center gap-4">
      {socials.map((s) => {
        const Icon = iconMap[s.icon];

        return (
          <a
            key={s.label}
            href={s.href}
            target={s.icon === "mail" ? undefined : "_blank"}
            rel={s.icon === "mail" ? undefined : "noopener noreferrer"}
            aria-label={s.label}
            className="text-text-muted transition-colors hover:text-signal"
          >
            <Icon size={20} />
          </a>
        );
      })}
    </div>
  );
}
