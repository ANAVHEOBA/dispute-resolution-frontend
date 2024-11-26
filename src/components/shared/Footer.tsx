import React from 'react';
import { Link } from 'react-router-dom';
import { 
  IconBrandTwitter, 
  IconBrandGithub, 
  IconBrandDiscord,
  IconMail,
  IconBrandLinkedin
} from '@tabler/icons-react';

const Footer = () => {
  const navigation = {
    product: [
      { name: 'Features', href: '/features' },
      { name: 'How it Works', href: '/how-it-works' },
      { name: 'Pricing', href: '/pricing' },
      { name: 'FAQ', href: '/faq' },
    ],
    company: [
      { name: 'About', href: '/about' },
      { name: 'Blog', href: '/blog' },
      { name: 'Careers', href: '/careers' },
      { name: 'Contact', href: '/contact' },
    ],
    legal: [
      { name: 'Terms', href: '/terms' },
      { name: 'Privacy', href: '/privacy' },
      { name: 'Cookies', href: '/cookies' },
      { name: 'Licenses', href: '/licenses' },
    ],
    social: [
      {
        name: 'Twitter',
        href: 'https://twitter.com',
        icon: <IconBrandTwitter className="w-5 h-5" />,
      },
      {
        name: 'GitHub',
        href: 'https://github.com',
        icon: <IconBrandGithub className="w-5 h-5" />,
      },
      {
        name: 'Discord',
        href: 'https://discord.com',
        icon: <IconBrandDiscord className="w-5 h-5" />,
      },
      {
        name: 'LinkedIn',
        href: 'https://linkedin.com',
        icon: <IconBrandLinkedin className="w-5 h-5" />,
      },
    ],
  };

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Brand Section */}
          <div className="space-y-8 xl:col-span-1">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg flex items-center justify-center">
                <span className="text-white text-xl font-bold">D</span>
              </div>
              <span className="text-2xl font-bold text-gray-900">DisputeRes</span>
            </Link>
            <p className="text-gray-500 text-base leading-relaxed max-w-xs">
              Revolutionizing dispute resolution through blockchain technology and expert arbitration.
            </p>
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-purple-600 transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">{item.name}</span>
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Product
                </h3>
                <ul className="mt-4 space-y-4">
                  {navigation.product.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.href}
                        className="text-base text-gray-500 hover:text-purple-600 transition-colors duration-200"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Company
                </h3>
                <ul className="mt-4 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.href}
                        className="text-base text-gray-500 hover:text-purple-600 transition-colors duration-200"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-1 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Legal
                </h3>
                <ul className="mt-4 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.href}
                        className="text-base text-gray-500 hover:text-purple-600 transition-colors duration-200"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-base text-gray-400">
              © {new Date().getFullYear()} DisputeRes. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <a 
                href="mailto:contact@disputes.com"
                className="inline-flex items-center text-gray-400 hover:text-purple-600 transition-colors duration-200"
              >
                <IconMail className="w-5 h-5 mr-2" />
                contact@disputes.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;