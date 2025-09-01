import { Target, Eye } from 'lucide-react';
import { Card, CardContent } from './ui/card';

export default function About() {
  return (
    <div className="min-h-screen py-16">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500">POLYMORPHISM</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A fresh IT startup from Nanded, focused on helping other startups and small businesses 
              grow through affordable, innovative technology solutions.
            </p>
          </div>

          {/* Company Introduction */}
          <div className="space-y-6 mb-20">
            <h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Founded in Nanded, POLYMORPHISM emerged from a vision to bridge the gap 
              between traditional businesses and cutting-edge technology. As a startup, 
              we bring fresh perspectives, agile methodologies, and innovative solutions 
              to every project.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our name "POLYMORPHISM" reflects our core philosophy - the ability to 
              adapt and transform according to each client's unique needs, just like 
              the programming concept that allows different implementations of the same interface.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Based in the heart of Maharashtra, we serve clients locally and globally, 
              combining regional insights with international standards to deliver 
              world-class IT solutions.
            </p>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 space-y-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To empower businesses with innovative IT solutions that drive growth, 
                  efficiency, and digital transformation. We strive to be the trusted 
                  technology partner that helps our clients achieve their goals through 
                  cutting-edge solutions and exceptional service.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 space-y-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  To become the leading IT services provider in the region, known for 
                  innovation, quality, and customer satisfaction. We envision a future 
                  where technology seamlessly integrates with business processes to 
                  create sustainable competitive advantages.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
