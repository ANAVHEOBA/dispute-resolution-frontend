import React from 'react';
import { motion } from 'framer-motion';
import { IconFileDescription, IconCloudUpload, IconScale, IconCheckbox } from '@tabler/icons-react';

const HowItWorks = () => {
  const steps = [
    {
      step: '01',
      title: 'Create Case',
      description: 'Submit your dispute details and required documentation securely',
      icon: <IconFileDescription className="w-8 h-8" />,
      color: 'from-blue-500 to-purple-500'
    },
    {
      step: '02',
      title: 'Submit Evidence',
      description: 'Upload supporting evidence securely to the blockchain',
      icon: <IconCloudUpload className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500'
    },
    {
      step: '03',
      title: 'Arbitration',
      description: 'Expert arbitrators review and evaluate your case',
      icon: <IconScale className="w-8 h-8" />,
      color: 'from-pink-500 to-red-500'
    },
    {
      step: '04',
      title: 'Resolution',
      description: 'Receive a fair and transparent resolution',
      icon: <IconCheckbox className="w-8 h-8" />,
      color: 'from-red-500 to-orange-500'
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-50/50 to-white/50" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            How It Works
          </h2>
          <p className="text-xl text-gray-600">
            Our streamlined process makes dispute resolution simple and efficient
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-200 via-purple-400 to-purple-200 transform -translate-y-1/2" />

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-4 relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative group"
              >
                {/* Step Card */}
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  {/* Step Number */}
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white font-bold shadow-lg`}>
                      {step.step}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-xl mb-6 flex items-center justify-center bg-gradient-to-r ${step.color} text-white transform group-hover:scale-110 transition-transform duration-300`}>
                    {step.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Decorative Elements */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600 to-purple-900 opacity-0 group-hover:opacity-[0.02] transition-opacity duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <button className="inline-flex items-center px-6 py-3 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition-colors duration-200">
            Start Your Case
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
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;