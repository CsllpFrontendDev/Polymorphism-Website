import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Linkedin, Twitter, Github, Mail, MapPin, Calendar } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const teamMembers = [
  {
    id: 1,
    name: 'Alex Johnson',
    position: 'CEO & Founder',
    image: 'https://images.unsplash.com/photo-1683770997177-0603bd44d070?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwbWVtYmVycyUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NTU4NDQ2ODR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    bio: 'Visionary leader with 15+ years in tech. Alex founded TechCorp with a mission to democratize technology for businesses of all sizes.',
    expertise: ['Strategic Planning', 'Business Development', 'Team Leadership'],
    location: 'San Francisco, CA',
    joinDate: 'January 2014',
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'alex@techcorp.com',
    },
  },
  {
    id: 2,
    name: 'Sarah Chen',
    position: 'CTO',
    image: 'https://images.unsplash.com/photo-1689218744786-9546da7b6873?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NTU4NDQ2ODR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    bio: 'Tech innovator and full-stack developer. Sarah leads our engineering team and ensures we stay ahead of technology trends.',
    expertise: ['Software Architecture', 'Cloud Computing', 'AI/ML'],
    location: 'Seattle, WA',
    joinDate: 'March 2015',
    social: {
      linkedin: '#',
      github: '#',
      email: 'sarah@techcorp.com',
    },
  },
  {
    id: 3,
    name: 'Marcus Rodriguez',
    position: 'Lead Developer',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdHxlbnwxfHx8fDE3NTU3Njk3Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    bio: 'Passionate about clean code and modern frameworks. Marcus specializes in building scalable web applications and mentoring junior developers.',
    expertise: ['React/Next.js', 'Node.js', 'DevOps'],
    location: 'Austin, TX',
    joinDate: 'July 2017',
    social: {
      linkedin: '#',
      github: '#',
      twitter: '#',
      email: 'marcus@techcorp.com',
    },
  },
  {
    id: 4,
    name: 'Emily Wang',
    position: 'Lead Designer',
    image: 'https://images.unsplash.com/photo-1688587571105-c770775b2b42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMGhlYWRzaG90fGVufDF8fHx8MTc1NTg0NDY4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    bio: 'Creative problem solver with an eye for detail. Emily creates user experiences that are both beautiful and functional.',
    expertise: ['UI/UX Design', 'Design Systems', 'User Research'],
    location: 'New York, NY',
    joinDate: 'September 2018',
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'emily@techcorp.com',
    },
  },
  {
    id: 5,
    name: 'David Park',
    position: 'Project Manager',
    image: 'https://images.unsplash.com/photo-1575299833801-85ce40813bac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW5hZ2VyJTIwcHJvZmVzc2lvbmFsJTIwcGhvdG98ZW58MXx8fHwxNzU1ODQ0Njg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    bio: 'Experienced project manager who ensures smooth delivery and client satisfaction. David excels at coordinating complex projects.',
    expertise: ['Agile/Scrum', 'Client Relations', 'Process Optimization'],
    location: 'Denver, CO',
    joinDate: 'November 2019',
    social: {
      linkedin: '#',
      email: 'david@techcorp.com',
    },
  },
  {
    id: 6,
    name: 'Lisa Thompson',
    position: 'Marketing Director',
    image: 'https://images.unsplash.com/photo-1655249493799-9cee4fe983bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGhlYWRzaG90fGVufDF8fHx8MTc1NTgxMjIwM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    bio: 'Marketing strategist with a data-driven approach. Lisa builds brand awareness and drives growth through innovative campaigns.',
    expertise: ['Digital Marketing', 'Brand Strategy', 'Content Creation'],
    location: 'Los Angeles, CA',
    joinDate: 'February 2020',
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'lisa@techcorp.com',
    },
  },
];

export default function Team() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  const handleCardHover = (id: number | null) => {
    setFlippedCard(id);
  };

  return (
    <section id="team" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet Our{' '}
            <span className="bg-gradient-to-r from-[#2D6BE1] to-[#5AB6F8] bg-clip-text text-transparent">
              Expert Team
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Behind every great project is a great team. Meet the talented individuals
            who make TechCorp's success possible.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group perspective-1000"
              onMouseEnter={() => handleCardHover(member.id)}
              onMouseLeave={() => handleCardHover(null)}
            >
              <div
                className={`relative w-full h-96 transition-transform duration-700 transform-style-preserve-3d ${
                  flippedCard === member.id ? 'rotate-y-180' : ''
                }`}
              >
                {/* Front Side */}
                <div className="absolute inset-0 w-full h-full backface-hidden">
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 h-full overflow-hidden">
                    <div className="relative h-64 overflow-hidden">
                      <ImageWithFallback
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                      
                      {/* Social Icons - Front */}
                      <div className="absolute bottom-4 left-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {member.social.linkedin && (
                          <motion.a
                            whileHover={{ scale: 1.1 }}
                            href={member.social.linkedin}
                            className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-colors duration-300"
                          >
                            <Linkedin className="w-4 h-4" />
                          </motion.a>
                        )}
                        {member.social.twitter && (
                          <motion.a
                            whileHover={{ scale: 1.1 }}
                            href={member.social.twitter}
                            className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-blue-400 transition-colors duration-300"
                          >
                            <Twitter className="w-4 h-4" />
                          </motion.a>
                        )}
                        {member.social.github && (
                          <motion.a
                            whileHover={{ scale: 1.1 }}
                            href={member.social.github}
                            className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition-colors duration-300"
                          >
                            <Github className="w-4 h-4" />
                          </motion.a>
                        )}
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#2D6BE1] transition-colors duration-300">
                        {member.name}
                      </h3>
                      <p className="text-[#2D6BE1] font-medium mb-4">{member.position}</p>
                      <div className="flex flex-wrap gap-2">
                        {member.expertise.slice(0, 2).map((skill) => (
                          <span
                            key={skill}
                            className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                        {member.expertise.length > 2 && (
                          <span className="text-xs text-gray-500">
                            +{member.expertise.length - 2} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
                  <div className="bg-gradient-to-br from-[#2D6BE1] to-[#5AB6F8] rounded-2xl shadow-lg h-full p-6 text-white">
                    <div className="flex flex-col h-full">
                      <div className="flex-grow">
                        <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                        <p className="text-blue-100 mb-4">{member.position}</p>
                        <p className="text-sm text-blue-50 leading-relaxed mb-6">
                          {member.bio}
                        </p>

                        {/* Expertise */}
                        <div className="mb-6">
                          <h4 className="text-sm font-semibold mb-2 text-blue-100">Expertise:</h4>
                          <div className="flex flex-wrap gap-2">
                            {member.expertise.map((skill) => (
                              <span
                                key={skill}
                                className="text-xs bg-white/20 px-2 py-1 rounded-full"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Contact Info */}
                      <div className="space-y-2 text-sm text-blue-100">
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2" />
                          {member.location}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2" />
                          Joined {member.joinDate}
                        </div>
                        <div className="flex items-center">
                          <Mail className="w-4 h-4 mr-2" />
                          <a
                            href={`mailto:${member.social.email}`}
                            className="hover:text-white transition-colors duration-300"
                          >
                            {member.social.email}
                          </a>
                        </div>
                      </div>

                      {/* Social Links - Back */}
                      <div className="flex space-x-3 mt-4 pt-4 border-t border-white/20">
                        {member.social.linkedin && (
                          <motion.a
                            whileHover={{ scale: 1.1 }}
                            href={member.social.linkedin}
                            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-300"
                          >
                            <Linkedin className="w-5 h-5" />
                          </motion.a>
                        )}
                        {member.social.twitter && (
                          <motion.a
                            whileHover={{ scale: 1.1 }}
                            href={member.social.twitter}
                            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-300"
                          >
                            <Twitter className="w-5 h-5" />
                          </motion.a>
                        )}
                        {member.social.github && (
                          <motion.a
                            whileHover={{ scale: 1.1 }}
                            href={member.social.github}
                            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-300"
                          >
                            <Github className="w-5 h-5" />
                          </motion.a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Join Team CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Want to Join Our Team?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals who share our passion for
              innovation and excellence. Check out our current openings.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.querySelector('#careers');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-gradient-to-r from-[#2D6BE1] to-[#5AB6F8] hover:from-[#1e4ba3] hover:to-[#3a9ae6] text-white px-8 py-4 rounded-full transition-all duration-300 hover:shadow-lg"
            >
              View Open Positions
            </motion.button>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
}