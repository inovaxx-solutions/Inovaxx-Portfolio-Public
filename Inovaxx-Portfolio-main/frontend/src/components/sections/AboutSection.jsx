import React, { useState } from "react";
import { teamMembers } from "../../data/mockData";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Linkedin, Github, Twitter, Mail, MapPin } from "lucide-react";

const AboutSection = () => {
  const [hoveredMember, setHoveredMember] = useState(null);

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-50/30 via-transparent to-red-100/20"></div>
      <div className="absolute top-20 right-20 w-64 h-64 bg-red-100/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-red-200/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet Our <span className="text-red-600">Team</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            We're a passionate team of innovators, developers, and problem-solvers 
            dedicated to bringing your digital vision to life.
          </p>
          
          {/* Company Info */}
          <div className="flex items-center justify-center gap-6 text-gray-600">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-red-600" />
              <span>Based in Karachi, Pakistan</span>
            </div>
          </div>
        </div>

        {/* Team Members */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <Card
              key={member.id}
              className="group relative overflow-hidden bg-white border-2 border-gray-200 hover:border-red-300 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
              onMouseEnter={() => setHoveredMember(member.id)}
              onMouseLeave={() => setHoveredMember(null)}
              style={{
                animationDelay: `${index * 200}ms`,
                transform: `perspective(1000px) ${
                  hoveredMember === member.id 
                    ? 'rotateY(5deg) rotateX(-5deg) translateZ(20px)' 
                    : 'rotateY(0deg) rotateX(0deg) translateZ(0px)'
                }`,
                transformStyle: 'preserve-3d'
              }}
            >
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-red-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <CardHeader className="text-center pb-4">
                {/* Profile Image */}
                <div className="relative mx-auto mb-4">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white shadow-xl group-hover:shadow-2xl transform group-hover:scale-110 transition-all duration-500">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  
                  {/* Floating Ring Effect */}
                  <div className="absolute inset-0 w-32 h-32 mx-auto rounded-full border-2 border-red-400/30 group-hover:border-red-500/50 group-hover:animate-pulse transition-all duration-300"></div>
                </div>

                {/* Name and Position */}
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-red-600 font-medium mb-3">{member.position}</p>
                
                {/* Bio */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {member.bio}
                </p>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Skills */}
                <div className="flex flex-wrap gap-2 justify-center">
                  {member.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="outline"
                      className="text-xs border-red-200 text-red-700 hover:bg-red-50 transform hover:scale-105 transition-all duration-200"
                      style={{ 
                        animationDelay: `${skillIndex * 100}ms`,
                        transform: hoveredMember === member.id ? 'translateY(-2px)' : 'translateY(0px)'
                      }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>

                {/* Social Links */}
                <div className="flex justify-center gap-3 pt-4">
                  {[
                    { icon: Linkedin, key: 'linkedin', color: 'hover:text-blue-600' },
                    { icon: Github, key: 'github', color: 'hover:text-gray-900' },
                    { icon: Twitter, key: 'twitter', color: 'hover:text-blue-400' }
                  ].map(({ icon: Icon, key, color }) => (
                    <Button
                      key={key}
                      size="icon"
                      variant="outline"
                      className={`w-8 h-8 border-red-200 text-gray-600 ${color} hover:scale-110 hover:shadow-lg transform transition-all duration-300`}
                      onClick={() => window.open(member.social[key], '_blank')}
                    >
                      <Icon className="w-4 h-4" />
                    </Button>
                  ))}
                </div>
              </CardContent>

              {/* 3D Depth Effect */}
              <div 
                className={`absolute inset-0 pointer-events-none transition-opacity duration-500 ${
                  hoveredMember === member.id ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(239, 68, 68, 0.05) 100%)',
                  transform: 'translateZ(5px)',
                  borderRadius: 'inherit'
                }}
              />
            </Card>
          ))}
        </div>

        {/* Company Values */}
        <div className="bg-gradient-to-r from-red-500/10 to-red-600/10 rounded-2xl p-8 border border-red-200">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Why Choose <span className="text-red-600">Inovaxx Solutions?</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Innovation First",
                description: "We leverage cutting-edge technologies to deliver solutions that set you apart from the competition.",
                icon: "🚀"
              },
              {
                title: "Quality Assured",
                description: "Our rigorous development process ensures every project meets the highest standards of quality and performance.",
                icon: "⭐"
              },
              {
                title: "Client-Focused",
                description: "Your success is our priority. We work closely with you to understand and exceed your expectations.",
                icon: "🎯"
              }
            ].map((value, index) => (
              <div
                key={index}
                className="text-center group cursor-pointer transform hover:scale-105 transition-all duration-300"
              >
                <div className="text-4xl mb-3 group-hover:animate-bounce">{value.icon}</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-red-600 transition-colors duration-300">
                  {value.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;