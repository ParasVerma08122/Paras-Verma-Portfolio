import { Globe, Server, Database, Gauge } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: 'Full Stack Web Development',
      description: 'End-to-end website development with seamless frontend and backend integration, creating modern, responsive applications.',
      features: [
        'Responsive UI/UX Design',
        'Frontend Development (React)',
        'Backend API Integration',
        'Database Design & Implementation',
      ],
    },
    {
      icon: Server,
      title: 'Backend Development',
      description: 'Robust backend systems built with Spring Boot, featuring secure authentication and scalable architecture.',
      features: [
        'REST API Development',
        'Spring Boot Applications',
        'JWT Authentication',
        'Spring Security Integration',
      ],
    },
    {
      icon: Database,
      title: 'Database Design & Integration',
      description: 'Efficient database architecture and integration with support for multiple database technologies.',
      features: [
        'MySQL Database Design',
        'MongoDB Integration',
        'PostgreSQL Management',
        'Data Optimization',
      ],
    },
    {
      icon: Gauge,
      title: 'Performance Optimization',
      description: 'Building scalable systems that can handle high traffic and concurrent users with optimal performance.',
      features: [
        'High Availability (99% Uptime)',
        'Concurrent User Handling',
        'Code Optimization',
        'System Scalability',
      ],
    },
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-cyan-400">Services</span>
          </h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive development services to bring your ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-all hover:transform hover:scale-105"
              >
                <div className="p-4 bg-cyan-500/10 rounded-lg w-fit mb-6 group-hover:bg-cyan-500/20 transition-colors">
                  <Icon className="text-cyan-400" size={40} />
                </div>

                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>

                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3 text-gray-300">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
