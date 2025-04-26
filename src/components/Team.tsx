import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Instagram } from 'lucide-react';

interface TeamMember {
  name: string;
  title: string;
  image: string;
  description: string;
  social: {
    linkedin?: string;
    twitter?: string;
    instagram?: string;
  };
}

const TeamCard: React.FC<TeamMember> = ({ name, title, image, description, social }) => {
  const [isFlipped, setIsFlipped] = React.useState(false);

  return (
    <motion.div
      className="relative w-full h-[400px] cursor-pointer perspective-1000"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      onHoverStart={() => setIsFlipped(true)}
      onHoverEnd={() => setIsFlipped(false)}
    >
      <motion.div
        className="w-full h-full relative preserve-3d transition-transform duration-500"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
      >
        {/* Front of card */}
        <div className="absolute inset-0 backface-hidden">
          <div className="h-full bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="h-[75%] overflow-hidden">
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover object-center transform transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-medium text-neutral-800">{name}</h3>
              <p className="text-neutral-600 font-light">{title}</p>
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div className="absolute inset-0 backface-hidden rotate-y-180">
          <div className="h-full bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-medium text-neutral-800 mb-2">{name}</h3>
              <p className="text-neutral-600 font-light mb-4">{title}</p>
              <p className="text-neutral-700">{description}</p>
            </div>
            <div className="flex justify-center space-x-4">
              {social.linkedin && (
                <a
                  href={social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-600 hover:text-primary-600 transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              )}
              {social.twitter && (
                <a
                  href={social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-600 hover:text-primary-600 transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                </a>
              )}
              {social.instagram && (
                <a
                  href={social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-600 hover:text-primary-600 transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Team: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      name: "Dr. Sarah Chen",
      title: "Sports Recovery Specialist",
      image: "https://images.pexels.com/photos/5207089/pexels-photo-5207089.jpeg",
      description: "With over 10 years of experience in sports medicine and rehabilitation, Dr. Chen specializes in helping athletes recover and perform at their peak.",
      social: {
        linkedin: "#",
        twitter: "#",
        instagram: "#"
      }
    },
    {
      name: "Michael Rodriguez",
      title: "Deep Tissue Expert",
      image: "https://images.pexels.com/photos/5490276/pexels-photo-5490276.jpeg",
      description: "Michael combines traditional techniques with modern approaches to provide effective deep tissue therapy and pain relief.",
      social: {
        linkedin: "#",
        instagram: "#"
      }
    },
    {
      name: "Emma Thompson",
      title: "Rehabilitation Specialist",
      image: "https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg",
      description: "Emma's expertise in rehabilitation therapy helps clients recover from injuries and chronic conditions with personalized care plans.",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Dr. James Wilson",
      title: "Pain Management Specialist",
      image: "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg",
      description: "Dr. Wilson brings innovative approaches to chronic pain management, combining traditional methods with cutting-edge techniques.",
      social: {
        linkedin: "#",
        twitter: "#",
        instagram: "#"
      }
    },
    {
      name: "Lisa Chang",
      title: "Movement Specialist",
      image: "https://images.pexels.com/photos/5723967/pexels-photo-5723967.jpeg",
      description: "Lisa specializes in functional movement patterns and rehabilitation, helping clients restore natural mobility and prevent future injuries.",
      social: {
        linkedin: "#",
        instagram: "#"
      }
    },
    {
      name: "David Martinez",
      title: "Athletic Recovery Expert",
      image: "https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg",
      description: "David's background in professional sports therapy enables him to develop specialized recovery programs for athletes of all levels.",
      social: {
        linkedin: "#",
        twitter: "#",
        instagram: "#"
      }
    }
  ];

  return (
    <section id="team" className="py-20 md:py-32 bg-neutral-50">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">Meet Your Recovery Specialists</h2>
          <p className="section-subtitle mx-auto">
            Professional care, personalized for you
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamCard key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;