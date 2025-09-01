import { Code, Cloud, Shield, Smartphone } from 'lucide-react';
import { Card, CardContent } from './ui/card';

export default function Services() {
  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Web Development',
      description: 'Custom web applications, responsive websites, and e-commerce platforms built with modern technologies.',
      features: ['React/Vue.js Frontend', 'Node.js Backend', 'Responsive Design', 'SEO Optimization'],
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Mobile App Development',
      description: 'Cross-platform mobile applications for iOS and Android using React Native and Flutter.',
      features: ['React Native/Flutter', 'Cross-platform', 'Native Performance', 'App Store Deployment'],
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure setup, migration services, and cloud-native application development.',
      features: ['AWS/Google Cloud', 'DevOps Setup', 'Auto-scaling', 'Cost Optimization'],
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Digital Marketing',
      description: 'SEO optimization, social media marketing, and digital advertising to boost your online presence.',
      features: ['SEO Optimization', 'Social Media Marketing', 'Google Ads', 'Analytics & Reporting'],
    }
  ];

  return (
    <div className="min-h-screen py-16">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500">Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive IT solutions designed to accelerate your business growth 
              and digital transformation journey.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <CardContent className="p-6 space-y-4 h-full flex flex-col">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  
                  <div className="flex-grow space-y-3">
                    <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                    
                    <div className="space-y-2">
                      <h4 className="font-medium text-gray-900 text-sm">Key Features:</h4>
                      <ul className="space-y-1">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-sm text-gray-600 flex items-center">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Process</h2>
            <p className="text-lg text-gray-600">
              How we deliver exceptional results for every project
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery',
                description: 'We understand your business needs, goals, and challenges through detailed consultation.'
              },
              {
                step: '02',
                title: 'Planning',
                description: 'We create a comprehensive project plan with timelines, milestones, and deliverables.'
              },
              {
                step: '03',
                title: 'Development',
                description: 'Our expert team builds your solution using agile methodologies and best practices.'
              },
              {
                step: '04',
                title: 'Delivery',
                description: 'We deploy, test, and hand over the final product with full documentation and support.'
              }
            ].map((process, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
