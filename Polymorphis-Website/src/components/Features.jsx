import { Users, Zap, Shield, Headphones, Award, Rocket, CheckCircle } from 'lucide-react';
import { Card, CardContent } from './ui/card';

export default function Features() {
  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Fast Delivery',
      description: 'Quick turnaround times with agile development approach that ensures rapid deployment.',
      benefits: [
        'Agile development methodology',
        'Quick project turnaround',
        'Regular milestone updates',
        'Flexible timeline adjustments'
      ]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Personal Support',
      description: 'Direct access to our small, dedicated team with personalized attention to your project.',
      benefits: [
        'Direct team communication',
        'Dedicated project manager',
        'Regular progress calls',
        'Flexible meeting schedules'
      ]
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Startup-Friendly Pricing',
      description: 'Affordable pricing models designed specifically for startups and small businesses.',
      benefits: [
        'Transparent pricing structure',
        'Flexible payment plans',
        'No hidden costs',
        'Value-driven solutions'
      ]
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Modern Tech Stack',
      description: 'Latest technologies and frameworks to ensure your project stays current and scalable.',
      benefits: [
        'Latest technology trends',
        'Scalable architecture',
        'Future-proof solutions',
        'Performance optimization'
      ]
    }
  ];

  return (
    <div className="min-h-screen py-16">
      {/* Header Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500">POLYMORPHISM</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the unique advantages and features that make us the preferred 
              IT partner for businesses seeking reliable, innovative solutions.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <CardContent className="p-8 space-y-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    
                    <div className="space-y-3">
                      <h4 className="font-medium text-gray-900">Key Benefits:</h4>
                      <ul className="space-y-2">
                        {feature.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="text-sm text-gray-600 flex items-center">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {benefit}
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

      {/* Process Excellence */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Approach to Excellence</h2>
            <p className="text-lg text-gray-600">
              How we ensure every project meets the highest standards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Users className="w-6 h-6" />,
                title: 'Client-Centric',
                description: 'Every decision is made with your business goals and user experience in mind.'
              },
              {
                icon: <Zap className="w-6 h-6" />,
                title: 'Rapid Delivery',
                description: 'Agile methodologies ensure fast delivery without compromising quality.'
              },
              {
                icon: <Shield className="w-6 h-6" />,
                title: 'Secure by Design',
                description: 'Security considerations are built into every phase of development.'
              },
              {
                icon: <Headphones className="w-6 h-6" />,
                title: 'Ongoing Support',
                description: 'Continuous support and maintenance to ensure long-term success.'
              }
            ].map((approach, index) => (
              <Card key={index} className="border-0 shadow-lg text-center">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 mx-auto bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center text-white">
                    {approach.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{approach.title}</h3>
                  <p className="text-gray-600 text-sm">{approach.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
