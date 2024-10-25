import React from 'react';
import { Globe, Map, Heart, Clock, Wallet, Star, Youtube, Instagram } from 'lucide-react';

const AboutUs = () => {
  const features = [
    {
      icon: <Map className="w-12 h-12 text-indigo-600" />,
      title: "Personalized Itineraries",
      description: "Every journey is unique. We craft custom travel experiences that match your interests, style, and pace."
    },
    {
      icon: <Wallet className="w-12 h-12 text-indigo-600" />,
      title: "Budget-Friendly Planning",
      description: "We work within your budget to maximize experiences without compromising on quality."
    },
    {
      icon: <Clock className="w-12 h-12 text-indigo-600" />,
      title: "Time-Saving Expertise",
      description: "Skip hours of research. Our experts handle all the planning details for you."
    }
  ];

  const testimonials = [
    {
      text: "They created the perfect Italian getaway for us. Every detail was considered!",
      author: "Sarah M.",
      location: "Rome, Italy"
    },
    {
      text: "The local experiences they recommended were absolutely incredible.",
      author: "James P.",
      location: "Tokyo, Japan"
    }
  ];

  const socialLinks = [
    {
      icon: <Youtube className="w-6 h-6 text-red-600" />,
      name: "YouTube",
      description: "Watch our travel vlogs and guides",
      link: "https://youtube.com/yourchannel", // Replace with your YouTube URL
    },
    {
      icon: <Instagram className="w-6 h-6 text-pink-600" />,
      name: "Instagram",
      description: "Follow our travel journey",
      link: "https://instagram.com/yourprofile", // Replace with your Instagram URL
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-indigo-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              Your Personal Travel Curator
            </h1>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              We transform your travel dreams into perfectly planned realities, creating memorable experiences tailored just for you.
            </p>
          </div>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Globe className="w-16 h-16 text-indigo-600 mx-auto" />
            <h2 className="mt-6 text-3xl font-bold text-gray-900">Our Mission</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              To craft extraordinary travel experiences that reflect your unique story, connecting you with authentic local cultures and unforgettable moments.
            </p>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Social Media Links Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Connect With Us
          </h2>
          <div className="flex justify-center gap-8">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                {social.icon}
                <div className="text-left">
                  <p className="font-semibold text-gray-900">{social.name}</p>
                  <p className="text-sm text-gray-600">{social.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            What Our Travelers Say
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-6 bg-white rounded-lg">
                <Star className="w-8 h-8 text-yellow-400 mb-4" />
                <p className="text-gray-600 italic">"{testimonial.text}"</p>
                <p className="mt-4 font-semibold text-gray-900">{testimonial.author}</p>
                <p className="text-sm text-gray-500">{testimonial.location}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 bg-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Let us help you create your perfect travel experience.
          </p>
          <button 
            onClick={() => window.location.href = '/create-trip'}
            className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors"
          >
            Plan Your Trip
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;