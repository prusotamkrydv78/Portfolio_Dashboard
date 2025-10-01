import { FiGithub, FiTwitter, FiLinkedin, FiGlobe } from 'react-icons/fi';

export default function SocialLinks() {
  const links = [
    { icon: <FiGithub />, name: 'GitHub', url: 'https://github.com', username: '@johndoe' },
    { icon: <FiTwitter />, name: 'Twitter', url: 'https://twitter.com', username: '@johndoe' },
    { icon: <FiLinkedin />, name: 'LinkedIn', url: 'https://linkedin.com', username: '@johndoe' },
    { icon: <FiGlobe />, name: 'Website', url: 'https://website.com', username: 'website.com' },
  ];

  return (
    <div className="space-y-3">
      {links.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors group"
        >
          <span className="p-2 rounded-lg bg-purple-500/10 text-purple-400 group-hover:scale-110 transition-transform">
            {link.icon}
          </span>
          <div className="ml-3">
            <p className="text-white text-sm font-medium">{link.name}</p>
            <p className="text-gray-400 text-xs">{link.username}</p>
          </div>
        </a>
      ))}
    </div>
  );
}
