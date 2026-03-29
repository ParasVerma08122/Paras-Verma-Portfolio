import { Github, ExternalLink, Server, Shield, Mail, TestTube, Users, TrendingUp } from 'lucide-react';

const Projects = () => {
  const projectHighlights = [
    {
      icon: Server,
      value: '500+',
      label: 'Daily Posts Handled',
    },
    {
      icon: Users,
      value: '1,000',
      label: 'Concurrent Users',
    },
    {
      icon: TrendingUp,
      value: '99%',
      label: 'Uptime',
    },
    {
      icon: TestTube,
      value: '85%',
      label: 'Test Coverage',
    },
  ];

  const technologies = [
    'Java',
    'Spring Boot',
    'Spring Security',
    'JWT',
    'MySQL',
    'Spring Data JPA',
    'Swagger UI',
    'JUnit',
    'Mockito',
    'Spring Mail',
  ];

  const features = [
    {
      icon: Shield,
      title: 'Secure Authentication',
      description: 'Role-based authentication using Spring Security and JWT tokens',
    },
    {
      icon: Server,
      title: 'Scalable Architecture',
      description: 'Built to handle 500+ daily posts with 99% uptime',
    },
    {
      icon: Mail,
      title: 'Email Integration',
      description: 'Automated email notifications boosting user engagement by 40%',
    },
    {
      icon: TestTube,
      title: 'Comprehensive Testing',
      description: '85% unit test coverage using JUnit and Mockito',
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-cyan-400">Project</span>
          </h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of technical excellence and problem-solving
          </p>
        </div>

        <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-700 overflow-hidden">
          <div className="p-8 md:p-12">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold mb-4">Blog Management System</h3>
                <p className="text-gray-400 text-lg max-w-3xl">
                  A robust and scalable blog platform built with Spring Boot, featuring secure
                  authentication, efficient API development, and comprehensive testing. Designed to
                  handle high traffic with optimal performance.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {projectHighlights.map((highlight, index) => {
                const Icon = highlight.icon;
                return (
                  <div
                    key={index}
                    className="bg-slate-900/50 p-6 rounded-xl border border-slate-700 text-center"
                  >
                    <Icon className="text-cyan-400 mx-auto mb-3" size={32} />
                    <div className="text-2xl font-bold text-cyan-400 mb-1">{highlight.value}</div>
                    <div className="text-gray-400 text-sm">{highlight.label}</div>
                  </div>
                );
              })}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="flex items-start gap-4 bg-slate-900/30 p-6 rounded-xl border border-slate-700"
                  >
                    <div className="p-3 bg-cyan-500/10 rounded-lg flex-shrink-0">
                      <Icon className="text-cyan-400" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-lg">{feature.title}</h4>
                      <p className="text-gray-400 text-sm">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mb-8">
              <h4 className="text-xl font-semibold mb-4 text-cyan-400">Tech Stack</h4>
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-slate-900 text-gray-300 rounded-lg border border-slate-700 hover:border-cyan-500/50 hover:text-cyan-400 transition-all text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/ParasVerma08122"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg font-medium transition-all flex items-center gap-2"
              >
                <Github size={20} />
                View on GitHub
              </a>
              <button className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-medium transition-all flex items-center gap-2">
                <ExternalLink size={20} />
                Live Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
