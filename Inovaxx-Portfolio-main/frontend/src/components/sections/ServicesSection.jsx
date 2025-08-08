import React, { useState } from "react";
import { services, orderService } from "../../data/mockData";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { useToast } from "../../hooks/use-toast";
import { 
  Code, Link, Brain, Smartphone, Cloud, Palette, 
  ArrowRight, CheckCircle, Mail 
} from "lucide-react";

const iconMap = {
  Code,
  Link,
  Brain,
  Smartphone,
  Cloud,
  Palette
};

const ServicesSection = () => {
  const [hoveredService, setHoveredService] = useState(null);
  const [orderingService, setOrderingService] = useState(null);
  const { toast } = useToast();

  const handleOrderService = async (serviceId, serviceTitle) => {
    setOrderingService(serviceId);
    
    try {
      const response = await orderService(serviceId, serviceTitle);
      
      if (response.success) {
        toast({
          title: "Service Order Submitted!",
          description: response.message,
          duration: 5000,
        });
        
        // Also simulate opening email client
        const emailSubject = `Service Inquiry: ${serviceTitle}`;
        const emailBody = `Hi Inovaxx Solutions,\n\nI'm interested in your ${serviceTitle} service. Please get in touch with me to discuss my requirements.\n\nBest regards`;
        const mailtoUrl = `mailto:inovaxxsolutions@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
        window.open(mailtoUrl, '_blank');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
        duration: 3000,
      });
    } finally {
      setOrderingService(null);
    }
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 via-white to-red-50/30">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-red-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive digital solutions to help your business thrive 
            in the modern technological landscape.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon];
            const isHovered = hoveredService === service.id;
            
            return (
              <Card
                key={service.id}
                className="group relative overflow-hidden bg-white border-2 border-gray-200 hover:border-red-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-500 cursor-pointer"
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
                style={{
                  animationDelay: `${index * 150}ms`,
                  transform: `perspective(1000px) ${isHovered ? 'rotateY(-5deg) rotateX(5deg) translateZ(20px)' : 'rotateY(0deg) rotateX(0deg) translateZ(0px)'}`,
                  transformStyle: 'preserve-3d'
                }}
              >
                {/* Gradient Background */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`p-3 bg-gradient-to-br ${service.color} rounded-lg shadow-lg transform group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors duration-300">
                      {service.title}
                    </CardTitle>
                  </div>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Features List */}
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div 
                        key={featureIndex}
                        className="flex items-center gap-2 transform translate-x-0 group-hover:translate-x-2 transition-transform duration-300"
                        style={{ transitionDelay: `${featureIndex * 50}ms` }}
                      >
                        <CheckCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Order Button */}
                  <Button
                    onClick={() => handleOrderService(service.id, service.title)}
                    disabled={orderingService === service.id}
                    className={`w-full bg-gradient-to-r ${service.color} hover:shadow-xl text-white font-semibold py-3 px-6 transform hover:scale-105 transition-all duration-300 group-hover:animate-pulse`}
                  >
                    {orderingService === service.id ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Processing...
                      </>
                    ) : (
                      <>
                        <Mail className="w-4 h-4 mr-2" />
                        Order This Service
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                      </>
                    )}
                  </Button>
                </CardContent>

                {/* 3D Depth Effect */}
                <div 
                  className={`absolute inset-0 pointer-events-none transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                  style={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(239, 68, 68, 0.05) 100%)',
                    transform: 'translateZ(5px)',
                    borderRadius: 'inherit'
                  }}
                />
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-red-500/10 to-red-600/10 rounded-2xl border border-red-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Let's discuss how we can help transform your ideas into reality with our expert development services.
          </p>
          <Button
            size="lg"
            onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}
            className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            Get Free Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;