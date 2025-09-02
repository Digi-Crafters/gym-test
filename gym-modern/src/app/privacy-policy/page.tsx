
"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaDumbbell } from "react-icons/fa";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-black/90 backdrop-blur-lg border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div
              className="flex items-center space-x-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <FaDumbbell className="text-3xl text-orange-500" />
              <span className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                FitForge
              </span>
            </motion.div>
            <div className="hidden md:flex items-center space-x-8">
              {["Home", "Programs", "Trainers", "Pricing", "Contact"].map(
                (item, index) => (
                  <motion.a
                    key={item}
                    href={`/#${item.toLowerCase()}`}
                    className="text-gray-300 hover:text-orange-500 transition-colors duration-300 font-medium"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    {item}
                  </motion.a>
                )
              )}
              <motion.a
                href="/privacy-policy"
                className="text-gray-300 hover:text-orange-500 transition-colors duration-300 font-medium"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Privacy Policy
              </motion.a>
              <motion.a
                href="/terms-and-services"
                className="text-gray-300 hover:text-orange-500 transition-colors duration-300 font-medium"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                Terms & Services
              </motion.a>
              <motion.button
                className="bg-gradient-to-r from-orange-500 to-red-500 px-6 py-2 rounded-full font-semibold hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Join Now
              </motion.button>
            </div>
          </div>
        </div>
      </nav>
      {/* Spacer */}
      <div className="h-18"></div>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-12 text-center"
        >
          <div className="flex justify-center items-center gap-2 mb-4">
            <FaDumbbell className="text-3xl text-orange-500" />
            <span className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              FitForge
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Privacy <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Policy</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Your privacy is important to us. This policy explains how FitForge collects, uses, and protects your personal information as you pursue your fitness journey with us.
          </p>
        </motion.div>

        <div className="space-y-10">
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-900/70 rounded-2xl p-8 shadow-lg"
          >
            <h2 className="text-2xl font-bold text-orange-500 mb-4">Information We Collect</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Personal details (name, email, phone, address) provided during registration or contact.</li>
              <li>Fitness goals, progress, and preferences shared with trainers or through our app.</li>
              <li>Payment and billing information for membership and services.</li>
              <li>Usage data from our website, app, and gym facilities.</li>
            </ul>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gray-900/70 rounded-2xl p-8 shadow-lg"
          >
            <h2 className="text-2xl font-bold text-orange-500 mb-4">How We Use Your Information</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>To provide personalized fitness programs and services.</li>
              <li>To communicate updates, offers, and important notifications.</li>
              <li>To improve our gym facilities, website, and app experience.</li>
              <li>To process payments and manage memberships securely.</li>
            </ul>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gray-900/70 rounded-2xl p-8 shadow-lg"
          >
            <h2 className="text-2xl font-bold text-orange-500 mb-4">Data Protection & Security</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>We use industry-standard security measures to protect your data.</li>
              <li>Your information is stored securely and only accessible to authorized staff.</li>
              <li>We do not sell or share your personal data with third parties except as required by law.</li>
            </ul>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-gray-900/70 rounded-2xl p-8 shadow-lg"
          >
            <h2 className="text-2xl font-bold text-orange-500 mb-4">Your Rights</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>You can request access, correction, or deletion of your personal data at any time.</li>
              <li>Contact us at <span className="text-orange-400">info@fitforge.in</span> for privacy-related queries.</li>
            </ul>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-gray-900/70 rounded-2xl p-8 shadow-lg"
          >
            <h2 className="text-2xl font-bold text-orange-500 mb-4">Policy Updates</h2>
            <p className="text-gray-300">
              We may update this privacy policy from time to time. Changes will be posted on this page with the latest revision date.
            </p>
            <p className="text-gray-400 mt-2">Last updated: September 2, 2025</p>
          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
