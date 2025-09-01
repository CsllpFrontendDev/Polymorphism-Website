import { motion } from 'motion/react'
import { useInView } from 'motion/react'
import { useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'
import { ImageWithFallback } from './figma/ImageWithFallback'
import { Button } from './ui/button'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    position: 'CEO, TechStart Inc.',
    company: 'TechStart Inc.',
    image: 'https://images.unsplash.com/photo-1655249493799-9cee4fe983bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGhlYWRzaG90fGVufDF8fHx8MTc1NTgxMjIwM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    quote: 'TechCorp transformed our entire digital infrastructure. Their expertise and dedication resulted in a 300% increase in our online sales. The team is professional, responsive, and truly understands business needs.',
    rating: 5,
    project: 'E-commerce Platform Development',
  },
  {
    id: 2,
    name: 'Michael Chen',
    position: 'CTO, Innovation Labs',
    company: 'Innovation Labs',
    image: 'https://images.unsplash.com/photo-1708195886023-3ecb00ac7a49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHBlcnNvbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc1NTg0NDYzNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    quote: 'Working with TechCorp was a game-changer for our mobile app development. They delivered a cutting-edge solution that exceeded our expectations. The user engagement increased by 250% within the first month.',
    rating: 5,
    project: 'Mobile App Development',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    position: 'Marketing Director, GrowthCo',
    company: 'GrowthCo',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGVjdXRpdmUlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NTU3NTgwNTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    quote: 'The analytics dashboard TechCorp built for us provides incredible insights into our business. Real-time data visualization has helped us make better decisions and optimize our marketing strategies effectively.',
    rating: 5,
    project: 'Analytics Dashboard',
  },
  {
    id: 4,
    name: 'David Thompson',
    position: 'Founder, StartupX',
    company: 'StartupX',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdHxlbnwxfHx8fDE3NTU3Njk3Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    quote: 'TechCorp helped us build our MVP from scratch. Their technical expertise and business understanding made the development process smooth. We launched 2 months ahead of schedule and secured our Series A funding.',
    rating: 5,
    project: 'MVP Development',
  },
  {
    id: 5,
    name: 'Lisa Wang',
    position: 'Operations Manager, RetailPlus',
    company: 'RetailPlus',
    image: 'https://images.unsplash.com/photo-1655249493799-9cee4fe983bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGhlYWRzaG90fGVufDF8fHx8MTc1NTgxMjIwM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    quote: 'The cloud migration project was executed flawlessly. TechCorp not only reduced our infrastructure costs by 40% but also improved our system performance significantly. Outstanding service and support throughout.',
    rating: 5,
    project: 'Cloud Migration',
  },
]

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex(prev => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex(prev => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToTestimonial = (index) => {
    setCurrentIndex(index)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our{' '}
            <span className="bg-gradient-to-r from-[#2D6BE1] to-[#5AB6F8] bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what industry leaders have to say
            about their experience working with TechCorp.
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#2D6BE1]/5 to-[#5AB6F8]/5 rounded-full blur-3xl -translate-y-32 translate-x-32" />
            
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="absolute top-8 left-8 w-16 h-16 bg-gradient-to-r from-[#2D6BE1] to-[#5AB6F8] rounded-full flex items-center justify-center"
            >
              <Quote className="w-8 h-8 text-white" />
            </motion.div>

            <div className="relative z-10 pt-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex items-center mb-6"
              >
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
                <span className="ml-3 text-gray-600">
                  {currentTestimonial.rating}.0 out of 5
                </span>
              </motion.div>

              <motion.blockquote
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-8 italic"
              >
                "{currentTestimonial.quote}"
              </motion.blockquote>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex items-center"
              >
                <div className="relative">
                  <ImageWithFallback
                    src={currentTestimonial.image}
                    alt={currentTestimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
                  />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-gray-900">
                    {currentTestimonial.name}
                  </h4>
                  <p className="text-gray-600">{currentTestimonial.position}</p>
                  <p className="text-sm text-[#2D6BE1] font-medium">
                    {currentTestimonial.company}
                  </p>
                </div>
                <div className="ml-auto hidden md:block">
                  <div className="text-right">
                    <p className="text-sm text-gray-500 mb-1">Project:</p>
                    <p className="text-sm font-medium text-gray-700">
                      {currentTestimonial.project}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <div className="flex items-center justify-between mt-8">
            <Button
              variant="outline"
              size="lg"
              onClick={prevTestimonial}
              className="p-4 rounded-full hover:bg-gray-100 transition-colors duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>

            <div className="flex space-x-3">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-gradient-to-r from-[#2D6BE1] to-[#5AB6F8] w-8'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="lg"
              onClick={nextTestimonial}
              className="p-4 rounded-full hover:bg-gray-100 transition-colors duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 text-center"
          >
            <p className="text-gray-500 mb-8">Trusted by industry leaders worldwide</p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center opacity-50">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="text-center hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                  onClick={() => goToTestimonial(index)}
                >
                  <div className="text-xl font-bold text-gray-400 hover:text-[#2D6BE1] transition-colors duration-300">
                    {testimonial.company}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
