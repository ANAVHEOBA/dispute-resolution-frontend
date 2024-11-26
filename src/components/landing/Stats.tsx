import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';

const Stats = () => {
  const stats = [
    { 
      id: 1, 
      name: 'Total Cases', 
      value: 1000,
      suffix: '+',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    { 
      id: 2, 
      name: 'Resolved Cases', 
      value: 950,
      suffix: '+',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    { 
      id: 3, 
      name: 'Active Arbitrators', 
      value: 100,
      suffix: '+',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    { 
      id: 4, 
      name: 'Success Rate', 
      value: 95,
      suffix: '%',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    },
  ];

  return (
    <section className="relative py-20 overflow-hidden bg-white">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-50/50 to-white" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="relative group">
                {/* Card */}
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl mb-6 flex items-center justify-center bg-gradient-to-r from-purple-500 to-purple-600 text-white transform group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>

                  {/* Value */}
                  <div className="flex items-baseline justify-center">
                    <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-purple-900 bg-clip-text text-transparent">
                      <CountUp
                        end={stat.value}
                        duration={2.5}
                        separator=","
                        suffix={stat.suffix}
                      />
                    </div>
                  </div>

                  {/* Name */}
                  <div className="mt-2 text-center">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {stat.name}
                    </h3>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600 to-purple-900 opacity-0 group-hover:opacity-[0.02] transition-opacity duration-300" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Optional: Additional Context */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join thousands of users who trust our platform for secure and efficient dispute resolution
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;