"use client";
import React, { useState } from "react";
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
} from "react-icons/fa";

const GymLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const workoutPlans = [
    {
      name: "Strength Training",
      price: "₹2,999",
      duration: "per month",
      features: [
        "Personal Trainer",
        "Equipment Access",
        "Nutrition Plan",
        "Progress Tracking",
      ],
      popular: false,
    },
    {
      name: "Premium Fitness",
      price: "₹4,499",
      duration: "per month",
      features: [
        "Personal Trainer",
        "Group Classes",
        "Nutrition Consultation",
        "Spa Access",
        "Progress Tracking",
      ],
      popular: true,
    },
    {
      name: "Elite Performance",
      price: "₹6,999",
      duration: "per month",
      features: [
        "Dedicated Trainer",
        "Custom Meal Plans",
        "Recovery Sessions",
        "24/7 Access",
        "Premium Supplements",
      ],
      popular: false,
    },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Mumbai",
      text: "FitForge transformed my fitness journey completely! Lost 15kg in 6 months with their amazing trainers.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    },
    {
      name: "Rahul Verma",
      location: "Delhi",
      text: "Best gym in the city! The equipment is top-notch and the community is incredibly supportive.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    },
    {
      name: "Anita Patel",
      location: "Bangalore",
      text: "The yoga and strength training combo here is perfect. Highly recommend for busy professionals!",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    },
  ];

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

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {["Home", "Programs", "Trainers", "Pricing", "Contact"].map(
                (item, index) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-300 hover:text-orange-500 transition-colors duration-300 font-medium"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    {item}
                  </motion.a>
                )
              )}
              <motion.button
                className="bg-gradient-to-r from-orange-500 to-red-500 px-6 py-2 rounded-full font-semibold hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Join Now
              </motion.button>
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
              className="md:hidden bg-black/95 backdrop-blur-lg"
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
                      className="block text-gray-300 hover:text-orange-500 transition-colors duration-300 font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item}
                    </a>
                  )
                )}
                <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 px-6 py-2 rounded-full font-semibold mt-4">
                  Join Now
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Spacer */}
      <div className="h-18"></div>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-20"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent">
              Transform
            </span>
            <br />
            Your Body
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Join India's most advanced fitness center and unlock your potential
            with world-class equipment, expert trainers, and a supportive
            community.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <button className="bg-gradient-to-r from-orange-500 to-red-500 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-orange-500/30 transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
              Start Your Journey <FaArrowRight />
            </button>
            {/* <button
              className="border-2 border-orange-500 px-8 py-4 rounded-full font-semibold text-lg hover:bg-orange-500 hover:text-black transition-all duration-300 flex items-center gap-2"
              onClick={() => setActiveVideo("hero")}
            >
              <FaPlay /> Watch Our Story
            </button> */}
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {[
              { number: "5000+", label: "Happy Members" },
              { number: "50+", label: "Expert Trainers" },
              { number: "15+", label: "Years Experience" },
              { number: "24/7", label: "Gym Access" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Floating Elements */}
        {/* <motion.div
          className="absolute top-20 left-10 w-20 h-20 border-2 border-orange-500/30 rounded-full"
          animate={{ rotate: 360, scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-16 h-16 border-2 border-red-500/30 rounded-full"
          animate={{ rotate: -360, scale: [1, 0.8, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        /> */}
      </section>

      {/* Programs Section */}
      <section
        id="programs"
        className="py-20 bg-gradient-to-br from-gray-900 to-black"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              Our{" "}
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                Programs
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the perfect program tailored to your fitness goals and
              lifestyle
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Strength Training",
                description:
                  "Build muscle and increase power with our comprehensive strength programs",
                image:
                  "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400&h=300&fit=crop",
                features: [
                  "Olympic Lifting",
                  "Powerlifting",
                  "Functional Training",
                ],
              },
              {
                title: "Cardio & HIIT",
                description:
                  "Burn fat and improve cardiovascular health with high-intensity workouts",
                image:
                  "https://images.unsplash.com/photo-1571019613914-85e3dbf2b74a?w=400&h=300&fit=crop",
                features: ["HIIT Classes", "Running Programs", "Cycling"],
              },
              {
                title: "Yoga & Flexibility",
                description:
                  "Enhance flexibility, balance, and mental wellness through yoga",
                image:
                  "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop",
                features: ["Hatha Yoga", "Vinyasa Flow", "Meditation"],
              },
              {
                title: "CrossFit Training",
                description:
                  "Challenge yourself with varied, high-intensity functional movements",
                image:
                  "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&h=300&fit=crop",
                features: [
                  "WOD Classes",
                  "Olympic Lifting",
                  "Metabolic Training",
                ],
              },
              {
                title: "Personal Training",
                description:
                  "Get one-on-one attention with customized workout plans",
                image:
                  "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=300&fit=crop",
                features: [
                  "Custom Programs",
                  "Nutrition Guidance",
                  "Progress Tracking",
                ],
              },
              {
                title: "Group Classes",
                description:
                  "Stay motivated with energetic group fitness classes",
                image:
                  "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=300&fit=crop",
                features: ["Zumba", "Aerobics", "Dance Fitness"],
              },
            ].map((program, index) => (
              <motion.div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden group hover:bg-gray-800/70 transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-orange-500">
                    {program.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{program.description}</p>
                  <ul className="space-y-2">
                    {program.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-sm text-gray-400"
                      >
                        <FaCheckCircle className="text-orange-500" />
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
      <section id="trainers" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              Expert{" "}
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                Trainers
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Train with certified professionals who are dedicated to your
              success
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Arjun Singh",
                specialty: "Strength & Conditioning",
                experience: "8+ Years",
                image:
                  "https://images.unsplash.com/photo-1571019613914-85e3dbf2b74a?w=400&h=500&fit=crop",
                certifications: ["ACSM Certified", "Nutrition Specialist"],
              },
              {
                name: "Priya Mehta",
                specialty: "Yoga & Wellness",
                experience: "10+ Years",
                image:
                  "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=500&fit=crop",
                certifications: ["RYT 500", "Wellness Coach"],
              },
              {
                name: "Vikram Kumar",
                specialty: "CrossFit & HIIT",
                experience: "6+ Years",
                image:
                  "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&h=500&fit=crop",
                certifications: ["CrossFit L2", "HIIT Specialist"],
              },
            ].map((trainer, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-2xl overflow-hidden group hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {trainer.name}
                    </h3>
                    <p className="text-orange-500 font-semibold">
                      {trainer.specialty}
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-300">Experience</span>
                    <span className="text-orange-500 font-semibold">
                      {trainer.experience}
                    </span>
                  </div>
                  <div className="space-y-2">
                    {trainer.certifications.map((cert, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-sm text-gray-400"
                      >
                        <FaCheckCircle className="text-orange-500" />
                        {cert}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section
        id="pricing"
        className="py-20 bg-gradient-to-br from-gray-900 to-black"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              Choose Your{" "}
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                Plan
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible membership options designed to fit your lifestyle and
              budget
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {workoutPlans.map((plan, index) => (
              <motion.div
                key={index}
                className={`relative bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-2xl p-8 ${
                  plan.popular ? "ring-2 ring-orange-500 scale-105" : ""
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-orange-500 to-red-500 px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-4xl font-bold text-orange-500">
                      {plan.price}
                    </span>
                    <span className="text-gray-400">{plan.duration}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <FaCheckCircle className="text-orange-500" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 rounded-full font-semibold transition-all duration-300 ${
                    plan.popular
                      ? "bg-gradient-to-r from-orange-500 to-red-500 text-white hover:shadow-lg hover:shadow-orange-500/30"
                      : "border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black"
                  }`}
                >
                  Choose Plan
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              Success{" "}
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                Stories
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real transformations from our amazing community members
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-2xl p-6 hover:bg-gray-800/70 transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-400 text-sm">
                      {testimonial.location}
                    </p>
                  </div>
                </div>

                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-orange-500" />
                  ))}
                </div>

                <p className="text-gray-300 italic">"{testimonial.text}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-gradient-to-br from-gray-900 to-black"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              Start Your{" "}
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                Journey
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to transform your life? Get in touch with us today!
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
              <div className="flex items-center gap-4">
                <div className="bg-gradient-to-r from-orange-500 to-red-500 p-3 rounded-full">
                  <FaPhone className="text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Call Us</h3>
                  <p className="text-gray-300">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-gradient-to-r from-orange-500 to-red-500 p-3 rounded-full">
                  <FaEnvelope className="text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Email Us</h3>
                  <p className="text-gray-300">info@fitforge.in</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-gradient-to-r from-orange-500 to-red-500 p-3 rounded-full">
                  <FaMapMarkerAlt className="text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Visit Us</h3>
                  <p className="text-gray-300">
                    123 Fitness Street, Mumbai, Maharashtra 400001
                  </p>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                {[FaFacebook, FaInstagram, FaTwitter].map((Icon, index) => (
                  <motion.button
                    key={index}
                    className="bg-gray-800 hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500 p-3 rounded-full transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="text-xl" />
                  </motion.button>
                ))}
              </div>
            </motion.div>

            <motion.form
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 space-y-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 mb-2 font-medium">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none transition-colors duration-300"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2 font-medium">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none transition-colors duration-300"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-300 mb-2 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none transition-colors duration-300"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2 font-medium">
                  Phone
                </label>
                <input
                  type="tel"
                  className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none transition-colors duration-300"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2 font-medium">
                  Fitness Goals
                </label>
                <select className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-orange-500 focus:outline-none transition-colors duration-300">
                  <option value="">Select your goal</option>
                  <option value="weight-loss">Weight Loss</option>
                  <option value="muscle-gain">Muscle Gain</option>
                  <option value="fitness">General Fitness</option>
                  <option value="strength">Strength Training</option>
                  <option value="endurance">Endurance</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-300 mb-2 font-medium">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Tell us about your fitness journey or any questions you have..."
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-red-500 py-4 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-orange-500/30 transition-all duration-300 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Started Today <FaArrowRight />
              </motion.button>
            </motion.form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <FaDumbbell className="text-3xl text-orange-500" />
                <span className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                  FitForge
                </span>
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                Transform your body and mind at India's premier fitness
                destination. Join thousands who have already started their
                journey to a healthier, stronger life.
              </p>
              <div className="flex gap-4">
                {[FaFacebook, FaInstagram, FaTwitter].map((Icon, index) => (
                  <motion.button
                    key={index}
                    className="bg-gray-800 hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500 p-3 rounded-full transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Icon className="text-xl" />
                  </motion.button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-orange-500">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {["Home", "Programs", "Trainers", "Pricing", "Contact"].map(
                  (link) => (
                    <li key={link}>
                      <a
                        href={`#${link.toLowerCase()}`}
                        className="text-gray-300 hover:text-orange-500 transition-colors duration-300"
                      >
                        {link}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-orange-500">
                Programs
              </h3>
              <ul className="space-y-3">
                {[
                  "Strength Training",
                  "Cardio & HIIT",
                  "Yoga & Flexibility",
                  "Personal Training",
                  "Group Classes",
                ].map((program) => (
                  <li key={program}>
                    <span className="text-gray-300 hover:text-orange-500 transition-colors duration-300 cursor-pointer">
                      {program}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 mb-4 md:mb-0">
                © 2024 FitForge India. All rights reserved.
              </p>
              <div className="flex gap-6 text-sm">
                <a
                  href="#"
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
                >
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Video Modal */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveVideo(null)}
          >
            <motion.div
              className="relative bg-gray-900 rounded-2xl overflow-hidden max-w-4xl w-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 p-2 rounded-full transition-colors duration-300"
              >
                <FaTimes className="text-white" />
              </button>
              <div className="aspect-video bg-gradient-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center">
                <div className="text-center">
                  <FaPlay className="text-6xl text-orange-500 mb-4 mx-auto" />
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Our Fitness Journey
                  </h3>
                  <p className="text-gray-300">
                    Experience the transformation at FitForge
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll to Top Button */}
      <motion.button
        className="fixed bottom-8 right-8 bg-gradient-to-r from-orange-500 to-red-500 p-3 rounded-full shadow-lg hover:shadow-orange-500/30 transition-all duration-300 z-40"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <FaArrowRight className="transform -rotate-90" />
      </motion.button>
    </div>
  );
};

export default GymLanding;
