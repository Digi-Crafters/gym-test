
"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaDumbbell } from "react-icons/fa";

const TermsAndServices = () => {
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
            Terms & <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Please read these terms and services carefully before using FitForge gym, website, or app. By accessing our services, you agree to comply with these terms.
          </p>
        </motion.div>

        <div className="space-y-10">
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-900/70 rounded-2xl p-8 shadow-lg"
          >
            <h2 className="text-2xl font-bold text-orange-500 mb-4">Membership & Access</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Membership is personal and non-transferable.</li>
              <li>Members must present valid ID or membership card upon entry.</li>
              <li>Access to certain areas or services may require additional fees.</li>
            </ul>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gray-900/70 rounded-2xl p-8 shadow-lg"
          >
            <h2 className="text-2xl font-bold text-orange-500 mb-4">Code of Conduct</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Respect staff, trainers, and fellow members at all times.</li>
              <li>Proper gym attire and hygiene are required.</li>
              <li>Use equipment responsibly and return it after use.</li>
              <li>No harassment, discrimination, or abusive behavior will be tolerated.</li>
            </ul>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gray-900/70 rounded-2xl p-8 shadow-lg"
          >
            <h2 className="text-2xl font-bold text-orange-500 mb-4">Payments & Refunds</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>All payments must be made in advance for membership and services.</li>
              <li>Refunds are subject to our refund policy and may require valid reason and documentation.</li>
              <li>FitForge reserves the right to change pricing and membership plans at any time.</li>
            </ul>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-gray-900/70 rounded-2xl p-8 shadow-lg"
          >
            <h2 className="text-2xl font-bold text-orange-500 mb-4">Health & Safety</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Members are responsible for their own health and safety.</li>
              <li>Consult a physician before starting any fitness program.</li>
              <li>Report any injuries or unsafe conditions to staff immediately.</li>
            </ul>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-gray-900/70 rounded-2xl p-8 shadow-lg"
          >
            <h2 className="text-2xl font-bold text-orange-500 mb-4">Limitation of Liability</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>FitForge is not liable for personal injury, loss, or damage to property while using our facilities.</li>
              <li>Members use gym equipment and participate in activities at their own risk.</li>
            </ul>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="bg-gray-900/70 rounded-2xl p-8 shadow-lg"
          >
            <h2 className="text-2xl font-bold text-orange-500 mb-4">Changes to Terms</h2>
            <p className="text-gray-300">
              FitForge may update these terms and services at any time. Changes will be posted on this page with the latest revision date.
            </p>
            <p className="text-gray-400 mt-2">Last updated: September 2, 2025</p>
          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default TermsAndServices;