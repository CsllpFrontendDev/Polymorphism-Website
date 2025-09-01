import { ArrowRight, CheckCircle, Code, Shield, Zap } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

export default function Home({ setCurrentPage }) {
  const services = [
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Web Development',
      description: 'Custom web applications and websites'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Cybersecurity',
      description: 'Protect your digital assets'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-green-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Launch Your Startup with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500">
                Modern Tech Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              POLYMORPHISM is a young, dynamic startup from Nanded, helping other startups 
              and small businesses grow with affordable, cutting-edge technology solutions.
            </p>
          </div>
          
          <div className="flex justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg"
              onClick={() => setCurrentPage && setCurrentPage('services')}
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>

          <div className="flex justify-center flex-wrap gap-6 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span>Fast Delivery</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span>Startup-Friendly Pricing</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span>Personal Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Brief About Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Why Choose POLYMORPHISM?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We're a dynamic startup from Nanded, dedicated to delivering innovative 
              IT solutions that drive business growth and digital transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Innovation First',
                description: 'We leverage cutting-edge technologies to solve complex business challenges.',
                icon: '🚀'
              },
              {
                title: 'Local Expertise',
                description: 'Based in Nanded, we understand local business needs and global standards.',
                icon: '🏆'
              },
              {
                title: 'Startup Agility',
                description: 'Fast decision-making and flexible approaches to meet your evolving needs.',
                icon: '⚡'
              }
            ].map((item, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our Core Services
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive IT solutions tailored for your business success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center text-white">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg"
              onClick={() => setCurrentPage && setCurrentPage('services')}
            >
              View All Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
