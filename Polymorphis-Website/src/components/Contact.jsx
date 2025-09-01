import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import GoogleMap from './Map';

export default function Contact() {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_1lwfmjn',
        'template_2pumce9',
        formRef.current,
        { publicKey: '4R4i1hnzldugIHfP4' }
      )
      .then(
        () => {
          setIsSubmitted(true);
          setTimeout(() => {
            setIsSubmitted(false);
            setFormData({ from_name: '', from_email: '', message: '' });
          }, 3000);
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Our Location',
      details: [
        'Office No. 303, 313, A Wing, Laxmi Horizon',
        'HDFC Bank, Mumbai-Bangaluru Highway',
        'Punawale, Pune - 411033',
      ],
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone Numbers',
      details: ['+91 9156486909', '020 47211265', 'Mon-Fri: 9AM-6PM'],
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email Address',
      details: ['info@configserverllp.com'],
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Business Hours',
      details: [
        'Monday - Friday: 9:00 AM - 6:00 PM',
        'Saturday-Sunday: Closed',
      ],
    },
  ];

  return (
    <div className="min-h-screen py-16">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Get in{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500">
                Touch
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to transform your business with innovative IT solutions?
              Let's discuss your project and explore how we can help you succeed.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="text-center space-y-2">
                    <h2 className="text-2xl font-bold text-gray-900">
                      Send us a Message
                    </h2>
                    <p className="text-gray-600">
                      Fill out the form below and we'll get back to you within
                      24 hours
                    </p>
                  </div>

                  {isSubmitted ? (
                    <div className="text-center space-y-4 py-8">
                      <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-8 h-8 text-green-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        Thank you for reaching out!
                      </h3>
                      <p className="text-gray-600">
                        We’ll get back to you as soon as possible.
                      </p>
                    </div>
                  ) : (
                    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="from_name">Full Name *</Label>
                        <Input
                          id="from_name"
                          name="from_name"
                          type="text"
                          required
                          value={formData.from_name}
                          onChange={handleInputChange}
                          placeholder="Your full name"
                          className="border-gray-300 focus:border-blue-500"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="from_email">Email Address *</Label>
                        <Input
                          id="from_email"
                          name="from_email"
                          type="email"
                          required
                          value={formData.from_email}
                          onChange={handleInputChange}
                          placeholder="your@email.com"
                          className="border-gray-300 focus:border-blue-500"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          required
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Tell us about your project requirements..."
                          rows={5}
                          className="border-gray-300 focus:border-blue-500"
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3"
                        size="lg"
                      >
                        <Send className="w-5 h-5 mr-2" /> Send Message
                      </Button>
                    </form>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  Contact Information
                </h2>
                <p className="text-gray-600">
                  Get in touch with us through any of the following channels.
                  We're here to help you with all your IT needs.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6">
                {contactInfo.map((info, index) => (
                  <Card
                    key={index}
                    className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                          {info.icon}
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-lg font-semibold text-gray-900">
                            {info.title}
                          </h3>
                          <div className="space-y-1">
                            {info.details.map((detail, detailIndex) => (
                              <p key={detailIndex} className="text-gray-600">
                                {detail}
                              </p>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Find Us
            </h2>
            <p className="text-lg text-gray-600">
              Visit our office in Pune, Maharashtra
            </p>
          </div>
          <div className="rounded-2xl shadow-lg overflow-hidden h-[500px]">
            <GoogleMap />
          </div>
        </div>
      </section>
    </div>
  );
}
