import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

export default function SocialLinks() {
  const socialLinks = [
    {
      icon: <FiGithub className="w-5 h-5" />,
      label: 'GitHub',
      username: 'github',
      url: 'https://github.com'
    },
    {
      icon: <FiLinkedin className="w-5 h-5" />,
      label: 'LinkedIn',
      username: 'linkedin',
      url: 'https://linkedin.com'
    },
    {
      icon: <FiTwitter className="w-5 h-5" />,
      label: 'Twitter',
      username: 'twitter',
      url: 'https://twitter.com'
    }
  ];

  return (
    <div className="grid grid-cols-3 gap-4">
      {socialLinks.map((link) => (
        <a
          key={link.label}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-3 p-4 rounded-lg bg-[#212226] hover:bg-[#2a2b30] transition-colors"
        >
          <span className="text-gray-400">{link.icon}</span>
          <div>
            <div className="text-sm text-white">{link.label}</div>
            <div className="text-xs text-gray-400">@{link.username}</div>
          </div>
        </a>
      ))}
    </div>
  );
}
