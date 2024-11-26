import React from 'react';
import { IconShieldLock, IconScale, IconBolt, IconClipboardCheck } from '@tabler/icons-react';

const Features = () => {
  const features = [
    {
      title: 'Secure Dispute Resolution',
      description: 'Blockchain-powered security ensures transparent and tamper-proof dispute handling',
      icon: <IconShieldLock className="w-8 h-8" />,
      color: 'from-blue-500 to-purple-500'
    },
    {
      title: 'Expert Arbitrators',
      description: 'Access to verified and experienced arbitrators worldwide',
      icon: <IconScale className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Fast Resolution',
      description: 'Quick and efficient dispute resolution process with smart contracts',
      icon: <IconBolt className="w-8 h-8" />,
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Fair & Transparent',
      description: 'Every step is recorded on the blockchain for complete transparency',
      icon: <IconClipboardCheck className="w-8 h-8" />,
      color: 'from-green-500 to-teal-500'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Why Choose Our Platform
          </h2>
          <p className="text-xl text-gray-600">
            Experience the future of dispute resolution with our blockchain-powered platform
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative group"
            >
              {/* Feature Card */}
              <div className="h-full bg-white rounded-2xl p-8 shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                {/* Icon Container */}
                <div className={`w-16 h-16 rounded-xl mb-6 flex items-center justify-center bg-gradient-to-r ${feature.color} text-white`}>
                  {feature.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600 to-purple-900 opacity-0 group-hover:opacity-[0.02] transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <a 
            href="#learn-more" 
            className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium"
          >
            Learn more about our features
            <svg 
              className="w-5 h-5 ml-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9 5l7 7-7 7" 
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;