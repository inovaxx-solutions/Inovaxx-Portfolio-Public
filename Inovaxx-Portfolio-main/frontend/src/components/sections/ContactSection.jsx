import React, { useState } from "react";
import { contactInfo, submitContactForm } from "../../data/mockData";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { useToast } from "../../hooks/use-toast";
import { 
  Mail, MapPin, Phone, Send, Linkedin, Github, 
  Twitter, Instagram, MessageSquare, Sparkles 
} from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
        duration: 3000,
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await submitContactForm(formData);
      
      if (response.success) {
        toast({
          title: "Message Sent!",
          description: response.message,
          duration: 5000,
        });
        
        // Reset form
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: ""
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
        duration: 3000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 via-white to-red-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-red-100/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-64 h-64 bg-red-200/30 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Let's <span className="text-red-600">Connect</span>
            <Sparkles className="inline-block ml-2 w-10 h-10 text-red-500 animate-pulse" />
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your ideas into reality? Get in touch with us today 
            and let's discuss how we can help your business grow.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-2xl border-2 border-gray-200 hover:border-red-300 transition-all duration-300 transform hover:scale-105">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                <MessageSquare className="w-6 h-6 text-red-600" />
                Send us a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      className="border-red-200 focus:border-red-500 focus:ring-red-500 transition-all duration-300"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      className="border-red-200 focus:border-red-500 focus:ring-red-500 transition-all duration-300"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-sm font-medium text-gray-700">
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What's this about?"
                    className="border-red-200 focus:border-red-500 focus:ring-red-500 transition-all duration-300"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-medium text-gray-700">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your project or how we can help you..."
                    rows={6}
                    className="border-red-200 focus:border-red-500 focus:ring-red-500 resize-none transition-all duration-300"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-3 px-6 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Quick Contact */}
            <Card className="shadow-xl border-2 border-gray-200 hover:border-red-300 transition-all duration-300 transform hover:scale-105">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                  <Mail className="w-6 h-6 text-red-600 animate-pulse" />
                  Quick Contact
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-red-50/50 rounded-lg hover:bg-red-100/50 transition-colors duration-300 group">
                  <div className="p-2 bg-red-600 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Email us at</p>
                    <a 
                      href={`mailto:${contactInfo.email}`}
                      className="text-red-600 font-semibold hover:text-red-700 transition-colors duration-200"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-red-50/50 rounded-lg hover:bg-red-100/50 transition-colors duration-300 group">
                  <div className="p-2 bg-red-600 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Located in</p>
                    <p className="text-gray-900 font-semibold">{contactInfo.location}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-red-50/50 rounded-lg hover:bg-red-100/50 transition-colors duration-300 group">
                  <div className="p-2 bg-red-600 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Call us at</p>
                    <p className="text-gray-900 font-semibold">{contactInfo.phone}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="shadow-xl border-2 border-gray-200 hover:border-red-300 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Follow Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Linkedin, name: "LinkedIn", color: "hover:bg-blue-600", url: contactInfo.social.linkedin },
                    { icon: Github, name: "GitHub", color: "hover:bg-gray-800", url: contactInfo.social.github },
                    { icon: Twitter, name: "Twitter", color: "hover:bg-blue-400", url: contactInfo.social.twitter },
                    { icon: Instagram, name: "Instagram", color: "hover:bg-pink-600", url: contactInfo.social.instagram }
                  ].map(({ icon: Icon, name, color, url }) => (
                    <Button
                      key={name}
                      variant="outline"
                      onClick={() => window.open(url, '_blank')}
                      className={`p-4 border-red-200 text-gray-700 ${color} hover:text-white transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 group`}
                    >
                      <Icon className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                      {name}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Business Hours */}
            <Card className="shadow-xl border-2 border-gray-200 hover:border-red-300 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900">
                  Business Hours
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between items-center py-1">
                  <span className="text-gray-600">Monday - Friday</span>
                  <span className="font-semibold text-red-600">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-gray-600">Saturday</span>
                  <span className="font-semibold text-red-600">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-gray-600">Sunday</span>
                  <span className="font-semibold text-gray-400">Closed</span>
                </div>
                <p className="text-xs text-gray-500 mt-3">
                  *All times are in Pakistan Standard Time (PST)
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;