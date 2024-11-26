import React from 'react';
import { motion } from 'framer-motion';
import WalletConnect from '../shared/WalletConnect';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900 to-transparent" />
      </div>

      {/* Animated Circles */}
      <div className="absolute top-0 left-0 right-0 h-96 overflow-hidden">
        <motion.div
          className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-purple-500 mix-blend-multiply filter blur-3xl opacity-50"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-indigo-500 mix-blend-multiply filter blur-3xl opacity-50"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-48">
        <div className="text-center">
          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              <span className="block mb-2">Decentralized Dispute</span>
              <span className="block bg-gradient-to-r from-purple-200 to-indigo-200 text-transparent bg-clip-text">
                Resolution Platform
              </span>
            </h1>
          </motion.div>
          
          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-purple-100 leading-relaxed"
          >
            Experience the future of dispute resolution with blockchain technology 
            and expert arbitrators. Secure, transparent, and efficient.
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <WalletConnect />
            <button className="group relative px-8 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white hover:bg-white/20 transition-all duration-200">
              Learn More
              <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500 to-indigo-500 opacity-0 group-hover:opacity-20 transition-opacity duration-200" />
            </button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 flex justify-center items-center space-x-8 text-purple-200/60"
          >
            <div className="flex items-center">
              <span className="text-2xl font-bold">1000+</span>
              <span className="ml-2 text-sm">Cases Resolved</span>
            </div>
            <div className="h-4 w-px bg-purple-200/20" />
            <div className="flex items-center">
              <span className="text-2xl font-bold">50+</span>
              <span className="ml-2 text-sm">Expert Arbitrators</span>
            </div>
            <div className="h-4 w-px bg-purple-200/20" />
            <div className="flex items-center">
              <span className="text-2xl font-bold">95%</span>
              <span className="ml-2 text-sm">Success Rate</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-200 to-transparent opacity-20" />
    </section>
  );
};

export default Hero;