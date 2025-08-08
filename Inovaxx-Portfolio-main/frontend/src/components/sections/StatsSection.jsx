import React from "react";
import { TrendingUp, Users, Award, Clock } from "lucide-react";

const StatsSection = () => {
  const stats = [
    {
      number: "50+",
      label: "Projects Completed",
      description: "Successfully delivered projects across various industries",
      icon: TrendingUp,
      color: "text-red-600"
    },
    {
      number: "25+",
      label: "Happy Clients",
      description: "Satisfied clients who trust our expertise and quality",
      icon: Users,
      color: "text-red-600"
    },
    {
      number: "100%",
      label: "Client Satisfaction",
      description: "Committed to delivering excellence in every project",
      icon: Award,
      color: "text-red-600"
    },
    {
      number: "24/7",
      label: "Support Available",
      description: "Round-the-clock support for all your technical needs",
      icon: Clock,
      color: "text-red-600"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-red-50/50 via-white to-red-100/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-red-100/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-red-200/40 rounded-full blur-2xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-red-600">Achievement</span> in Numbers
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            These numbers reflect our commitment to excellence and the trust our clients place in us
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 cursor-pointer border border-gray-100 hover:border-red-200"
                style={{
                  animationDelay: `${index * 200}ms`
                }}
              >
                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-gradient-to-br from-red-500 to-red-600 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Number */}
                <div className="text-center mb-2">
                  <div className={`text-4xl md:text-5xl font-bold ${stat.color} group-hover:scale-110 transition-transform duration-300`}>
                    {stat.number}
                  </div>
                </div>

                {/* Label */}
                <div className="text-center mb-3">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-red-600 transition-colors duration-300">
                    {stat.label}
                  </h3>
                </div>

                {/* Description */}
                <div className="text-center">
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {stat.description}
                  </p>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-red-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 text-lg">
            Ready to be our next success story?{" "}
            <button
              onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}
              className="text-red-600 hover:text-red-700 font-semibold underline decoration-2 underline-offset-4 hover:decoration-red-600 transition-colors duration-300"
            >
              Get in touch
            </button>
          </p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;