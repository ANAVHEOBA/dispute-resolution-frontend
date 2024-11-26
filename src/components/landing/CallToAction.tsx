import React from 'react';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-purple-900 opacity-90" />
      
      {/* Background pattern (optional) */}
      <div className="absolute inset-0 bg-grid-white/[0.05]" />

      {/* Main content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-3xl mx-auto">
          {/* Main text content */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Transform Your Dispute Resolution Process
            </h2>
            <p className="text-lg text-purple-100 mb-8">
              Join thousands of users who trust our platform for fair and transparent dispute resolution.
            </p>
          </div>

          {/* Action cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* Create Case Card */}
            <div className="bg-white/[0.03] backdrop-blur-lg rounded-xl p-8 border border-white/10 hover:border-purple-400 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-3">
                Create a Case
              </h3>
              <p className="text-purple-100 mb-6">
                Start your dispute resolution process with our secure and efficient platform.
              </p>
              <Link 
                to="/create-case"
                className="inline-flex items-center justify-center w-full px-6 py-3 text-base font-medium text-purple-900 bg-white rounded-lg hover:bg-purple-50 transition-colors duration-200"
              >
                Get Started
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
              </Link>
            </div>

            {/* Become Arbitrator Card */}
            <div className="bg-white/[0.03] backdrop-blur-lg rounded-xl p-8 border border-white/10 hover:border-purple-400 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-3">
                Become an Arbitrator
              </h3>
              <p className="text-purple-100 mb-6">
                Join our network of expert arbitrators and help resolve disputes fairly.
              </p>
              <Link 
                to="/arbitrator-signup"
                className="inline-flex items-center justify-center w-full px-6 py-3 text-base font-medium text-white border-2 border-white rounded-lg hover:bg-white/10 transition-colors duration-200"
              >
                Apply Now
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
              </Link>
            </div>
          </div>

          {/* Bottom section */}
          <div className="text-center">
            <p className="text-purple-100 mb-4">
              Have questions about our platform?
            </p>
            <div className="flex justify-center space-x-4">
              <Link 
                to="/faq"
                className="text-white hover:text-purple-200 transition-colors duration-200"
              >
                View FAQ
              </Link>
              <span className="text-purple-400">•</span>
              <Link 
                to="/contact"
                className="text-white hover:text-purple-200 transition-colors duration-200"
              >
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Optional decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-20" />
    </section>
  );
};

export default CallToAction;