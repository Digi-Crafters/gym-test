"use client";
import Link from 'next/link';
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaDumbbell,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaPlay,
  FaStar,
  FaArrowRight,
  FaBars,
  FaTimes,
  FaCheckCircle,
  FaFire,
  FaBolt,
  FaHeart,
  FaTrophy,
  FaUsers,
  FaClock,
  FaRunning,
  FaWeight,
  FaCrown,
  FaShieldAlt,
  FaGem,
  FaAward,
  FaLeaf,
  FaMagic,
} from "react-icons/fa";

const GradientGymLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [showWhatsappModal, setShowWhatsappModal] = useState(false);

  // Wave animation variants
  const waveVariants = {
    animate: {
      d: [
        "M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,165.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
        "M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,80C672,64,768,64,864,80C960,96,1056,128,1152,133.3C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
        "M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,165.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
      ],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const workoutPlans = [
    {
      name: "Starter Pack",
      price: "₹1,999",
      duration: "per month",
      features: [
        "Gym Access",
        "Basic Equipment",
        "Locker Facility",
        "Group Sessions",
      ],
      popular: false,
      icon: FaHeart,
      planIcons: [FaRunning, FaWeight, FaLeaf],
    },
    {
      name: "Power Elite",
      price: "₹3,999",
      duration: "per month",
      features: [
        "Personal Trainer",
        "Nutrition Guidance",
        "Premium Equipment",
        "Spa Access",
        "24/7 Access",
      ],
      popular: true,
      icon: FaBolt,
      planIcons: [FaTrophy, FaShieldAlt, FaGem],
    },
    {
      name: "Champion",
      price: "₹5,999",
      duration: "per month",
      features: [
        "Dedicated Coach",
        "Custom Programs",
        "Recovery Sessions",
        "VIP Lounge",
        "Supplement Plan",
      ],
      popular: false,
      icon: FaTrophy,
      planIcons: [FaCrown, FaAward, FaMagic],
    },
  ];

  const testimonials = [
    {
      name: "Kavita Rao",
      location: "Chennai",
      text: "IronCore's trainers helped me achieve my dream physique. The atmosphere is incredible and motivating!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    },
    {
      name: "Amit Gupta",
      location: "Pune",
      text: "Best investment I've made for my health. The facilities are world-class and results speak for themselves.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    },
    {
      name: "Shreya Jain",
      location: "Hyderabad",
      text: "From strength training to wellness programs, IronCore has everything. Highly recommended!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
    },
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
                IronCore
              </span>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {["Home", "Programs", "Trainers", "Pricing", "Contact"].map(
                (item, index) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-300 hover:text-white transition-colors duration-300 font-medium relative group"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-white to-gray-400 group-hover:w-full transition-all duration-300"></span>
                  </motion.a>
                )
              )}
                <motion.button
                  className="bg-gradient-to-r from-white to-gray-300 text-black px-6 py-2 rounded-full font-semibold hover:shadow-lg hover:shadow-white/25 transition-all duration-300"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  onClick={() => {
                    setIsMenuOpen(false);
                    setShowWhatsappModal(true);
                  }}
                >
                  Join Now
                </motion.button>
                {/* WhatsApp Modal */}
                <AnimatePresence>
                {showWhatsappModal && (
                  <motion.div
                  className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  >
                  <motion.div
                    className="bg-white rounded-2xl p-8 max-w-sm w-full text-center shadow-xl"
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0.9 }}
                  >
                    <h3 className="text-2xl font-bold mb-4 text-black">Contact on WhatsApp</h3>
                    <p className="text-gray-700 mb-6">To join, please contact us on WhatsApp!</p>
                    <a
                    href="https://wa.me/911002243210"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-green-600 transition"
                    >
                    Open WhatsApp
                    </a>
                    <button
                    className="mt-6 text-gray-500 hover:text-black font-medium"
                    onClick={() => setShowWhatsappModal(false)}
                    >
                    Close
                    </button>
                  </motion.div>
                  </motion.div>
                )}
                </AnimatePresence>
              </div>
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white text-2xl"
              >
                {isMenuOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden bg-gradient-to-b from-black to-gray-900 backdrop-blur-xl"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-4 py-4 space-y-4">
                {["Home", "Programs", "Trainers", "Pricing", "Contact"].map(
                  (item) => (
                    <a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      className="block text-gray-300 hover:text-white transition-colors duration-300 font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item}
                    </a>
                  )
                )}
                <button className="w-full bg-gradient-to-r from-white to-gray-300 text-black px-6 py-2 rounded-full font-semibold mt-4">
                  Join Now
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Spacer */}
      <div className="h-22"></div>

      {/* Hero Section with Animated Waves */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Animated Wave Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
          <svg
            className="absolute bottom-0 w-full h-64"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <motion.path
            //@ts-expect-error
              variants={waveVariants}
              animate="animate"
              fill="url(#wave-gradient)"
              fillOpacity="0.3"
            />
            <defs>
              <linearGradient
                id="wave-gradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="50%" stopColor="#d1d5db" />
                <stop offset="100%" stopColor="#6b7280" />
              </linearGradient>
            </defs>
          </svg>
          <svg
            className="absolute bottom-0 w-full h-48"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <motion.path
            // @ts-expect-error
              variants={waveVariants}
              animate="animate"
              fill="url(#wave-gradient-2)"
              fillOpacity="0.2"
              transition={{ delay: 1 }}
            />
            <defs>
              <linearGradient
                id="wave-gradient-2"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#f3f4f6" />
                <stop offset="50%" stopColor="#e5e7eb" />
                <stop offset="100%" stopColor="#9ca3af" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Floating Gym Elements */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-20 left-10 text-white/10 text-6xl"
            animate={{
              rotate: 360,
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <FaDumbbell />
          </motion.div>
          <motion.div
            className="absolute top-1/3 right-20 text-white/5 text-8xl"
            animate={{
              rotate: -360,
              y: [-20, 20, -20],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <FaFire />
          </motion.div>
          <motion.div
            className="absolute bottom-1/3 left-1/4 text-white/10 text-7xl"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <FaBolt />
          </motion.div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="text-3xl md:text-7xl font-black mb-6 leading-none"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
              FORGE YOUR
            </span>
            <br />
            <span className="bg-gradient-to-r from-gray-400 via-gray-300 to-gray-500 bg-clip-text text-transparent">
              STRENGTH
            </span>
          </motion.h1>

          <motion.p
            className="text-l md:text-xl text-gray-300 mb-8 max-w-4xl mx-auto font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Experience the ultimate fitness revolution with cutting-edge
            equipment, expert guidance, and a community that pushes your limits
            every single day.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <button
              className="group bg-gradient-to-r from-white to-gray-300 text-black px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-white/30 transition-all duration-300 transform hover:scale-105 flex items-center gap-3"
              onClick={() => {
                const pricingSection = document.getElementById("pricing");
                if (pricingSection) {
                  pricingSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              BEGIN TRANSFORMATION
              <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
          </motion.div>

          {/* Enhanced Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {[
              { number: "10K+", label: "MEMBERS TRANSFORMED", icon: FaUsers },
              { number: "100+", label: "ELITE TRAINERS", icon: FaTrophy },
              { number: "8", label: "YEARS EXCELLENCE", icon: FaClock },
              { number: "24/7", label: "ALWAYS OPEN", icon: FaFire },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center group"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-gradient-to-r from-white/10 to-gray-300/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 group-hover:border-white/40 transition-all duration-300">
                  <stat.icon className="text-3xl mb-3 mx-auto bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent" />
                  <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 font-bold text-sm tracking-wide">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Programs Section with Geometric Patterns */}
      <section id="programs" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800"></div>

        {/* Geometric Pattern Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 border border-white/20 rounded-full transform -translate-x-48 -translate-y-48"></div>
          <div className="absolute top-1/2 right-0 w-80 h-80 border border-white/20 rounded-full transform translate-x-40"></div>
          <div className="absolute bottom-0 left-1/3 w-64 h-64 border border-white/20 rounded-full transform translate-y-32"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-black mb-4">
              ELITE{" "}
              <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                PROGRAMS
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
              Scientifically designed programs that deliver real results for
              every fitness level
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "STRENGTH MASTERY",
                description:
                  "Master the art of strength with progressive overload training and compound movements",
                image:
                  "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=500&h=400&fit=crop",
                features: [
                  "Powerlifting Focus",
                  "Progressive Overload",
                  "Form Perfection",
                ],
                gradient: "from-white/90 to-gray-300/90",
              },
              {
                title: "CARDIO INFERNO",
                description:
                  "High-intensity cardiovascular training that burns fat and builds endurance",
                image:
                  "https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?w=500&h=400&fit=crop",
                features: [
                  "HIIT Training",
                  "Fat Burning",
                  "Endurance Building",
                ],
                gradient: "from-gray-200/90 to-white/90",
              },
              {
                title: "MIND & BODY",
                description:
                  "Holistic wellness combining yoga, meditation, and flexibility training",
                image:
                  "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&h=400&fit=crop",
                features: ["Yoga Flow", "Mindfulness", "Flexibility"],
                gradient: "from-gray-300/90 to-gray-100/90",
              },
              {
                title: "FUNCTIONAL POWER",
                description:
                  "Real-world strength training with functional movement patterns",
                image:
                  "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=500&h=400&fit=crop",
                features: [
                  "Functional Movement",
                  "Core Stability",
                  "Athletic Performance",
                ],
                gradient: "from-white/90 to-gray-200/90",
              },
              {
                title: "PERSONAL ELITE",
                description:
                  "One-on-one coaching with customized programming for maximum results",
                image:
                  "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=400&fit=crop", // Fixed image URL
                features: [
                  "1-on-1 Coaching",
                  "Custom Programs",
                  "Nutrition Planning",
                ],
                gradient: "from-gray-100/90 to-white/90",
              },
              {
                title: "GROUP DYNAMICS",
                description:
                  "High-energy group classes that combine fitness with social motivation",
                image:
                  "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=500&h=400&fit=crop",
                features: [
                  "Team Energy",
                  "Social Motivation",
                  "Varied Workouts",
                ],
                gradient: "from-gray-200/90 to-gray-300/90",
              },
            ].map((program, index) => (
              <motion.div
                key={index}
                className="group relative bg-gradient-to-b from-white/5 to-gray-300/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden hover:border-white/30 transition-all duration-500"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://via.placeholder.com/500x400/333/fff?text=Image+Not+Found";
                    }}
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${program.gradient} opacity-0 group-hover:opacity-80 transition-opacity duration-500`}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-black mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    {program.title}
                  </h3>
                  <p className="text-gray-300 mb-4 font-light">
                    {program.description}
                  </p>
                  <ul className="space-y-2">
                    {program.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-3 text-sm text-gray-400"
                      >
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-white to-gray-400 rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trainers Section */}
      <section id="trainers" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>

        {/* Diagonal Stripes Background */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,0.1) 35px, rgba(255,255,255,0.1) 70px)`,
            }}
          ></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-black mb-4">
              MASTER{" "}
              <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                TRAINERS
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
              Train with legends who have transformed thousands of lives across
              India
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "RAJESH WARRIOR",
                specialty: "Strength & Power",
                experience: "12+ Years",
                image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&h=600&fit=crop",
                certifications: ["Master Trainer", "Sports Nutrition"],
                achievements: "500+ Transformations",
              },
              {
                name: "ANJALI FLEX",
                specialty: "Yoga & Wellness",
                experience: "15+ Years",
                image:
                  "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=600&fit=crop",
                certifications: ["Yoga Master", "Meditation Expert"],
                achievements: "Wellness Guru Award",
              },
              {
                name: "KARAN BEAST",
                specialty: "CrossFit & Conditioning",
                experience: "10+ Years",
                image:
                  "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&h=600&fit=crop",
                certifications: ["CrossFit Level 4", "Conditioning Coach"],
                achievements: "Champion Trainer 2023",
              },
            ].map((trainer, index) => (
              <motion.div
                key={index}
                className="group relative bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden hover:border-white/30 transition-all duration-500"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -15, scale: 1.03 }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://via.placeholder.com/400x600/333/fff?text=Image+Not+Found";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-black text-white mb-1">
                      {trainer.name}
                    </h3>
                    <p className="text-gray-300 font-bold">
                      {trainer.specialty}
                    </p>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 font-medium">
                      Experience
                    </span>
                    <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent font-bold">
                      {trainer.experience}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <div className="text-gray-400 font-medium mb-2">
                      Certifications
                    </div>
                    {trainer.certifications.map((cert, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 text-sm text-gray-300"
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-white to-gray-400 rounded-full"></div>
                        {cert}
                      </div>
                    ))}
                  </div>

                  <div className="pt-2 border-t border-white/10">
                    <div className="text-xs text-gray-500 mb-1">
                      Achievement
                    </div>
                    <div className="text-sm font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                      {trainer.achievements}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section with Hexagonal Background */}
      <section id="pricing" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800"></div>

        {/* Hexagonal Pattern Background */}
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
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-black mb-4">
              CHOOSE YOUR{" "}
              <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                POWER
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
              Investment packages designed to unlock your ultimate potential
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {workoutPlans.map((plan, index) => (
              <motion.div
                key={index}
                className={`group relative bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm border rounded-3xl p-8 transition-all duration-500 ${
                  plan.popular
                    ? "border-white/30 scale-105 bg-gradient-to-b from-white/10 to-gray-300/5"
                    : "border-white/10 hover:border-white/25"
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: plan.popular ? 1.08 : 1.03 }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <span className="bg-gradient-to-r from-white to-gray-300 text-black px-6 py-2 rounded-full text-sm font-black">
                      MOST POPULAR
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <div>
                    <plan.icon className="text-2xl bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent" />
                  </div>
                  <h3 className="text-2xl font-black bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-2">
                    {plan.name}
                  </h3>
                  
                  {/* Plan Icons Row */}
                  <div className="flex justify-center gap-4 mb-4">
                    {plan.planIcons.map((Icon, idx) => (
                      <div key={idx} className=" p-3 rounded-xl">
                        <Icon className="text-xl bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent" />
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-baseline justify-center gap-2 mb-2">
                    <span className="text-4xl font-black bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent">
                      {plan.price}
                    </span>
                    <span className="text-gray-400 font-medium">
                      {plan.duration}
                    </span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-gradient-to-r from-white/20 to-gray-300/20 flex items-center justify-center">
                        <FaCheckCircle className="text-xs bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent" />
                      </div>
                      <span className="text-gray-300 font-medium">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-4 rounded-2xl font-black transition-all duration-300 ${
                    plan.popular
                      ? "bg-gradient-to-r from-white to-gray-300 text-black hover:shadow-2xl hover:shadow-white/20"
                      : "border-2 border-white/30 text-white hover:bg-gradient-to-r hover:from-white hover:to-gray-300 hover:text-black"
                  }`}
                >
                  SELECT PLAN
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>

        {/* Grid Pattern Background */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
            }}
          ></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-black mb-4">
              SUCCESS{" "}
              <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                LEGENDS
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
              Real transformations from warriors who conquered their limits
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="group bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-white/25 transition-all duration-500"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-2xl mr-4 object-cover border-2 border-white/20 group-hover:border-white/40 transition-colors duration-300"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://via.placeholder.com/150x150/333/fff?text=Image+Not+Found";
                    }}
                  />
                  <div>
                    <h4 className="font-black text-white text-lg">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-400 font-medium">
                      {testimonial.location}
                    </p>
                  </div>
                </div>

                <div className="flex mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-white mr-1" />
                  ))}
                </div>

                <p className="text-gray-300 italic font-light text-lg leading-relaxed">
                  "{testimonial.text}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section with Circuit Board Pattern */}
      <section id="contact" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800"></div>

        {/* Circuit Board Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-opacity='0.1'%3E%3Cpolygon fill='%23ffffff' points='50 0 60 40 100 50 60 60 50 100 40 60 0 50 40 40'/%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-black mb-4">
              BEGIN YOUR{" "}
              <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                LEGEND
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
              Ready to forge your destiny? Connect with us and start your
              transformation today
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-6 group">
                <div className="bg-gradient-to-r from-white/20 to-gray-300/20 backdrop-blur-sm p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <FaPhone className="text-2xl text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-black bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-1">
                    CALL US
                  </h3>
                  <p className="text-gray-300 font-medium">+91 1002243210</p>
                </div>
              </div>


              <div className="flex items-center gap-6 group">
                <div className="bg-gradient-to-r from-white/20 to-gray-300/20 backdrop-blur-sm p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <FaEnvelope className="text-2xl text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-black bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-1">
                    EMAIL US
                  </h3>
                  <p className="text-gray-300 font-medium">info@fitforge.in</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="bg-gradient-to-r from-white/20 to-gray-300/20 backdrop-blur-sm p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <FaMapMarkerAlt className="text-2xl text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-black bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-1">
                    VISIT US
                  </h3>
                  <p className="text-gray-300 font-medium">
                    456 Power Street, Delhi, India 110001
                  </p>
                </div>
              </div>

              {/* <div className="flex gap-4 pt-6">
                {[
                  { Icon: FaFacebook, label: "Facebook" },
                  { Icon: FaInstagram, label: "Instagram" },
                  { Icon: FaTwitter, label: "Twitter" }
                ].map(({ Icon, label }, index) => (
                  <motion.button
                    key={index}
                    className="bg-gradient-to-r from-white/10 to-gray-300/10 backdrop-blur-sm hover:from-white/20 hover:to-gray-300/20 p-4 rounded-2xl transition-all duration-300 border border-white/10 hover:border-white/30 flex items-center justify-center"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={label}
                  >
                    <Icon className="text-xl bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent" />
                  </motion.button>
                ))}
              </div> */}
            </motion.div>

            <motion.form
              className="bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm border border-white/10 rounded-3xl p-8 space-y-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 mb-2 font-bold text-sm tracking-wide">
                    FIRST NAME
                  </label>
                  <input
                    type="text"
                    className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-white/50 focus:outline-none focus:bg-white/10 transition-all duration-300"
                    placeholder="Enter first name"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2 font-bold text-sm tracking-wide">
                    LAST NAME
                  </label>
                  <input
                    type="text"
                    className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-white/50 focus:outline-none focus:bg-white/10 transition-all duration-300"
                    placeholder="Enter last name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-300 mb-2 font-bold text-sm tracking-wide">
                  EMAIL
                </label>
                <input
                  type="email"
                  className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-white/50 focus:outline-none focus:bg-white/10 transition-all duration-300"
                  placeholder="Enter email address"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2 font-bold text-sm tracking-wide">
                  PHONE
                </label>
                <input
                  type="tel"
                  className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-white/50 focus:outline-none focus:bg-white/10 transition-all duration-300"
                  placeholder="Enter phone number"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2 font-bold text-sm tracking-wide">
                  FITNESS GOAL
                </label>
                <select className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white focus:border-white/50 focus:outline-none focus:bg-white/10 transition-all duration-300">
                  <option value="" className="bg-black">
                    Select your goal
                  </option>
                  <option value="strength" className="bg-black">
                    Build Strength
                  </option>
                  <option value="weight-loss" className="bg-black">
                    Lose Weight
                  </option>
                  <option value="muscle-gain" className="bg-black">
                    Gain Muscle
                  </option>
                  <option value="endurance" className="bg-black">
                    Improve Endurance
                  </option>
                  <option value="wellness" className="bg-black">
                    Overall Wellness
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-gray-300 mb-2 font-bold text-sm tracking-wide">
                  MESSAGE
                </label>
                <textarea
                  rows={4}
                  className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-white/50 focus:outline-none focus:bg-white/10 transition-all duration-300 resize-none"
                  placeholder="Tell us about your fitness goals..."
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-white to-gray-300 text-black py-4 rounded-xl font-black text-lg hover:shadow-2xl hover:shadow-white/20 transition-all duration-300 flex items-center justify-center gap-3"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                START TRANSFORMATION <FaArrowRight />
              </motion.button>
            </motion.form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-black to-gray-900 border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-gradient-to-r from-white to-gray-300 p-3 rounded-2xl">
                  <FaDumbbell className="text-2xl text-black" />
                </div>
                <span className="text-3xl font-black bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                  IronCore
                </span>
              </div>
              <p className="text-gray-300 mb-6 max-w-md font-light leading-relaxed">
                Forge your legend at India's most elite fitness destination.
                Where ordinary people become extraordinary warriors through
                relentless dedication and world-class training.
              </p>
           <div className="flex gap-4">
  {[
    { Icon: FaFacebook, label: "Facebook" },
    { Icon: FaInstagram, label: "Instagram" },
    { Icon: FaTwitter, label: "Twitter" }
  ].map(({ Icon, label }, index) => (
    <motion.button
      key={index}
      className="bg-gradient-to-r from-white/10 to-gray-300/10 backdrop-blur-sm hover:from-white/20 hover:to-gray-300/20 p-3 rounded-2xl transition-all duration-300 border border-white/10 hover:border-white/30 flex items-center justify-center"
      whileHover={{ scale: 1.1, rotate: 5 }}
      aria-label={label}
    >
      <Icon className="text-xl text-white" />
    </motion.button>
  ))}
</div>
            </div>

            <div>
              <h3 className="text-xl font-black mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                QUICK LINKS
              </h3>
              <ul className="space-y-3">
                {["Home", "Programs", "Trainers", "Pricing", "Contact"].map(
                  (link) => (
                    <li key={link}>
                      <a
                        href={`#${link.toLowerCase()}`}
                        className="text-gray-300 hover:text-white transition-colors duration-300 font-medium"
                      >
                        {link}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-black mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                PROGRAMS
              </h3>
              <ul className="space-y-3">
                {[
                  "Strength Mastery",
                  "Cardio Inferno",
                  "Mind & Body",
                  "Personal Elite",
                  "Group Dynamics",
                ].map((program) => (
                  <li key={program}>
                    <span className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer font-medium">
                      {program}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 mb-4 md:mb-0 font-medium">
                © 2025 IronCore India. All rights reserved.
              </p>
              <div className="flex gap-6 text-sm">
                <Link
                  href="/terms"
                  className="text-gray-400 hover:text-white transition-colors duration-300 font-medium"
                >
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Video Modal */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveVideo(null)}
          >
            <motion.div
              className="relative bg-gradient-to-b from-gray-900 to-black border border-white/20 rounded-3xl overflow-hidden max-w-4xl w-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute top-4 right-4 z-10 bg-white/10 backdrop-blur-sm hover:bg-white/20 p-3 rounded-2xl transition-colors duration-300 border border-white/20"
              >
                <FaTimes className="text-white" />
              </button>
              <div className="aspect-video bg-gradient-to-br from-white/5 to-gray-300/5 flex items-center justify-center">
                <div className="text-center">
                  <FaPlay className="text-6xl bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4 mx-auto" />
                  <h3 className="text-3xl font-black bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-2">
                    TRANSFORMATION STORIES
                  </h3>
                  <p className="text-gray-300 font-light">
                    Witness the power of IronCore
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll to Top Button */}
      <motion.button
        className="fixed bottom-8 right-8 bg-gradient-to-r from-white to-gray-300 text-black p-4 rounded-2xl shadow-2xl hover:shadow-white/20 transition-all duration-300 z-40 border border-white/20"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <FaArrowRight className="transform -rotate-90 text-xl" />
      </motion.button>
    </div>
  );
};

export default GradientGymLanding;