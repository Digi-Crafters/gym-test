// app/terms/page.tsx
"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaDumbbell,
  FaArrowLeft,
  FaFileContract,
  FaIdCard,
  FaUsers,
  FaCreditCard,
  FaHeartbeat,
  FaShieldAlt,
  FaExclamationTriangle,
} from "react-icons/fa";
import Link from "next/link";

const TermsAndServices = () => {
  const [activeSection, setActiveSection] = useState("membership");

  const sections = [
    {
      id: "membership",
      title: "Membership & Access",
      icon: FaIdCard,
      content: `
        Membership is personal and non-transferable.
        Members must present valid ID or membership card upon entry.
        Access to certain areas or services may require additional fees.
      `
    },
    {
      id: "conduct",
      title: "Code of Conduct",
      icon: FaUsers,
      content: `
        Respect staff, trainers, and fellow members at all times.
        Proper gym attire and hygiene are required.
        Use equipment responsibly and return it after use.
        No harassment, discrimination, or abusive behavior will be tolerated.
      `
    },
    {
      id: "payments",
      title: "Payments & Refunds",
      icon: FaCreditCard,
      content: `
        All payments must be made in advance for membership and services.
        Refunds are subject to our refund policy and may require valid reason and documentation.
        FitForge reserves the right to change pricing and membership plans at any time.
      `
    },
    {
      id: "safety",
      title: "Health & Safety",
      icon: FaHeartbeat,
      content: `
        Members are responsible for their own health and safety.
        Consult a physician before starting any fitness program.
        Report any injuries or unsafe conditions to staff immediately.
      `
    },
    {
      id: "liability",
      title: "Limitation of Liability",
      icon: FaShieldAlt,
      content: `
        FitForge is not liable for personal injury, loss, or damage to property while using our facilities.
        Members use gym equipment and participate in activities at their own risk.
      `
    },
    {
      id: "changes",
      title: "Changes to Terms",
      icon: FaExclamationTriangle,
      content: `
        FitForge may update these terms and services at any time. Changes will be posted on this page with the latest revision date.
      `
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-gradient-to-r from-black via-gray-900 to-black backdrop-blur-xl border-b border-gray-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div
              className="flex items-center space-x-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-gradient-to-r from-white to-gray-300 p-2 rounded-full">
                <FaDumbbell className="text-xl text-black" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                FitForge
              </span>
            </motion.div>

            <Link 
              href="/"
              className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300"
            >
              <FaArrowLeft className="text-sm" />
              Back to Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Spacer */}
      <div className="h-22"></div>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800"></div>
        
        {/* Pattern Background */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-gradient-to-r from-white/20 to-gray-300/20 backdrop-blur-sm w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-6">
              <FaFileContract className="text-4xl text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-4">
              TERMS &{" "}
              <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                SERVICES
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
              Please read these terms and services carefully before using FitForge gym, website, or app.
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto font-light mt-4">
              By accessing our services, you agree to comply with these terms.
            </p>
            <div className="mt-8 bg-gradient-to-r from-white/5 to-gray-300/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 inline-block">
              <p className="text-gray-300 font-medium">
                Last updated: September 2, 2025
              </p>
            </div>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Navigation */}
            <div className="lg:w-1/4">
              <div className="bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm border border-white/10 rounded-3xl p-6 sticky top-28">
                <h3 className="text-xl font-black mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  SECTIONS
                </h3>
                <ul className="space-y-3">
                  {sections.map((section) => (
                    <li key={section.id}>
                      <button
                        onClick={() => setActiveSection(section.id)}
                        className={`w-full text-left py-3 px-4 rounded-xl transition-all duration-300 ${
                          activeSection === section.id
                            ? "bg-gradient-to-r from-white to-gray-300 text-black font-bold"
                            : "text-gray-300 hover:text-white hover:bg-white/5"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <section.icon className={`text-lg ${activeSection === section.id ? 'text-black' : 'text-white'}`} />
                          <span>{section.title}</span>
                        </div>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Content */}
            <div className="lg:w-3/4">
              <div className="bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm border border-white/10 rounded-3xl p-8 min-h-[600px]">
                <AnimatePresence mode="wait">
                  {sections.map((section) => (
                    activeSection === section.id && (
                      <motion.div
                        key={section.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-6"
                      >
                        <div className="flex items-center gap-4 mb-6">
                          <div className="bg-gradient-to-r from-white/20 to-gray-300/20 backdrop-blur-sm p-3 rounded-2xl">
                            <section.icon className="text-2xl text-white" />
                          </div>
                          <h2 className="text-3xl font-black bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                            {section.title}
                          </h2>
                        </div>

                        <div className="prose prose-invert max-w-none">
                          {section.content.split('\n').map((paragraph, index) => (
                            paragraph.trim() && (
                              <motion.p 
                                key={index}
                                className="text-gray-300 text-lg leading-relaxed mb-4 flex items-start"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: index * 0.1 }}
                              >
                                <span className="w-2 h-2 bg-gradient-to-r from-white to-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                {paragraph.trim()}
                              </motion.p>
                            )
                          ))}
                        </div>
                      </motion.div>
                    )
                  ))}
                </AnimatePresence>
              </div>

              {/* Agreement Section */}
              <motion.div 
                className="bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm border border-white/10 rounded-3xl p-8 mt-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h3 className="text-2xl font-black mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  AGREEMENT
                </h3>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                  By using our facilities, website, or mobile application, you acknowledge that you have read, understood, and agree to be bound by these Terms and Services.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="bg-gradient-to-r from-white to-gray-300 text-black px-8 py-3 rounded-xl font-bold hover:shadow-2xl hover:shadow-white/20 transition-all duration-300"
                  >
                    CONTACT FOR QUESTIONS
                  </Link>
                  <Link
                    href="/membership"
                    className="border-2 border-white/30 text-white px-8 py-3 rounded-xl font-bold hover:bg-gradient-to-r hover:from-white hover:to-gray-300 hover:text-black transition-all duration-300"
                  >
                    VIEW MEMBERSHIP OPTIONS
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-black to-gray-900 border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-gradient-to-r from-white to-gray-300 p-3 rounded-2xl">
                  <FaDumbbell className="text-2xl text-black" />
                </div>
                <span className="text-3xl font-black bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                  FitForge
                </span>
              </div>
              <p className="text-gray-300 mb-6 max-w-md font-light leading-relaxed">
                Forge your legend at India's most elite fitness destination. Where ordinary people become extraordinary warriors.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-black mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                LEGAL
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/terms" className="text-gray-300 hover:text-white transition-colors duration-300 font-medium">
                    Terms & Services
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors duration-300 font-medium">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/cookies" className="text-gray-300 hover:text-white transition-colors duration-300 font-medium">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 mb-4 md:mb-0 font-medium">
                © 2025 FitForge India. All rights reserved.
              </p>
              <p className="text-gray-400 font-medium">
                Last updated: September 2, 2025
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TermsAndServices;