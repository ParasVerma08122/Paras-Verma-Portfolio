import { useState } from 'react';
import {
  Github,
  ExternalLink,
  Server,
  Shield,
  Mail,
  TestTube,
  Users,
  TrendingUp,
  ShoppingCart,
  Sliders,
  Zap,
  Sparkles,
  LayoutDashboard
} from 'lucide-react';

const Projects = () => {
  const [activeTab, setActiveTab] = useState<'aquapure' | 'blog'>('aquapure');

  const projects: Record<'aquapure' | 'blog', {
    title: string;
    description: string;
    githubUrl: string;
    liveUrl?: string;
    highlights: { icon: any; value: string; label: string }[];
    features: { icon: any; title: string; description: string }[];
    technologies: string[];
  }> = {
    aquapure: {
      title: 'AquaPure Custom Water Bottles',
      description: 'An advanced, full-stack B2C & B2B e-commerce platform for ordering, personalizing, and wholesale customization of pure water bottles. Features a real-time product customization engine, comprehensive order management dashboard for administrators, and robust automated email workflows.',
      githubUrl: 'https://github.com/ParasVerma08122/AquaPure',
      liveUrl: 'https://aquapurest.in',
      highlights: [
        {
          icon: ShoppingCart,
          value: '100+',
          label: 'Orders Processed',
        },
        {
          icon: Sliders,
          value: '50+',
          label: 'Customization Options',
        },
        {
          icon: Zap,
          value: '< 1.5s',
          label: 'Avg Page Load',
        },
        {
          icon: Shield,
          value: 'JWT',
          label: 'Secure Token Auth',
        },
      ],
      features: [
        {
          icon: Sparkles,
          title: 'Interactive Bottle Customizer',
          description: 'Real-time custom color selection, custom text inputs, and placement placement on bottle mockups.',
        },
        {
          icon: ShoppingCart,
          title: 'Complete E-Commerce Flow',
          description: 'User registration/login, cart management, and seamless order checkout processing.',
        },
        {
          icon: LayoutDashboard,
          title: 'Enterprise Admin Dashboard',
          description: 'Full management of products, custom orders, wholesale inquiries, inventory, and analytics.',
        },
        {
          icon: Mail,
          title: 'Automated Status Emails',
          description: 'Automatic transactional emails triggered upon new registrations and order status changes.',
        },
      ],
      technologies: [
        'React.js',
        'TypeScript',
        'TailwindCSS',
        'React Router',
        'Context API',
        'Java',
        'Spring Boot',
        'Spring Security',
        'JWT',
        'MySQL',
        'Spring Data JPA',
        'Cloudinary API',
        'Vercel',
      ],
    },
    blog: {
      title: 'Blog Management System',
      description: 'A robust and scalable blog platform built with Spring Boot, featuring secure authentication, efficient API development, and comprehensive testing. Designed to handle high traffic with optimal performance.',
      githubUrl: 'https://github.com/ParasVerma08122',
      highlights: [
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
      ],
      features: [
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
      ],
      technologies: [
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
      ],
    },
  };

  const activeProject = projects[activeTab];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of technical excellence, full-stack systems, and problem-solving
          </p>
        </div>

        {/* Dynamic Project Tabs Selector */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab('aquapure')}
            className={`w-full sm:w-auto px-8 py-3.5 rounded-xl font-semibold transition-all duration-300 border flex items-center justify-center gap-2 ${
              activeTab === 'aquapure'
                ? 'bg-cyan-500 text-slate-950 border-cyan-400 shadow-lg shadow-cyan-500/25 scale-[1.02]'
                : 'bg-slate-900/60 text-gray-400 border-slate-800 hover:text-gray-200 hover:border-slate-700 hover:bg-slate-900'
            }`}
          >
            <ShoppingCart size={18} />
            AquaPure (aquapurest.in)
          </button>
          <button
            onClick={() => setActiveTab('blog')}
            className={`w-full sm:w-auto px-8 py-3.5 rounded-xl font-semibold transition-all duration-300 border flex items-center justify-center gap-2 ${
              activeTab === 'blog'
                ? 'bg-cyan-500 text-slate-950 border-cyan-400 shadow-lg shadow-cyan-500/25 scale-[1.02]'
                : 'bg-slate-900/60 text-gray-400 border-slate-800 hover:text-gray-200 hover:border-slate-700 hover:bg-slate-900'
            }`}
          >
            <Server size={18} />
            Blog Management System
          </button>
        </div>

        {/* Selected Project Showcase Container */}
        <div className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm rounded-2xl border border-slate-800 overflow-hidden transition-all duration-500">
          <div className="p-8 md:p-12">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                  {activeProject.title}
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed max-w-4xl font-normal">
                  {activeProject.description}
                </p>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {activeProject.highlights.map((highlight, index) => {
                const Icon = highlight.icon;
                return (
                  <div
                    key={index}
                    className="bg-slate-900/40 p-6 rounded-xl border border-slate-800/80 text-center hover:border-slate-700 transition-all duration-300"
                  >
                    <Icon className="text-cyan-400 mx-auto mb-3" size={32} />
                    <div className="text-2xl font-bold text-cyan-400 mb-1">{highlight.value}</div>
                    <div className="text-gray-400 text-sm font-medium">{highlight.label}</div>
                  </div>
                );
              })}
            </div>

            {/* Features list */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {activeProject.features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="flex items-start gap-4 bg-slate-900/20 p-6 rounded-xl border border-slate-800 hover:border-slate-700 transition-all duration-300"
                  >
                    <div className="p-3 bg-cyan-500/10 rounded-lg flex-shrink-0">
                      <Icon className="text-cyan-400" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-lg text-gray-200">{feature.title}</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Tech Stack */}
            <div className="mb-8">
              <h4 className="text-xl font-semibold mb-4 text-cyan-400">Tech Stack</h4>
              <div className="flex flex-wrap gap-2.5">
                {activeProject.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-slate-900/80 text-gray-300 rounded-lg border border-slate-800 hover:border-cyan-500/40 hover:text-cyan-400 transition-all duration-300 text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Call to action buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href={activeProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-semibold rounded-lg transition-all duration-300 flex items-center gap-2 shadow-md hover:shadow-lg shadow-cyan-500/10"
              >
                <Github size={20} />
                View on GitHub
              </a>
              {activeProject.liveUrl ? (
                <a
                  href={activeProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg transition-all duration-300 flex items-center gap-2 border border-slate-700 hover:border-slate-600 shadow-md"
                >
                  <ExternalLink size={20} />
                  Live Demo
                </a>
              ) : (
                <button
                  disabled
                  className="px-6 py-3 bg-slate-900 text-gray-500 border border-slate-800 rounded-lg font-medium flex items-center gap-2 cursor-not-allowed"
                >
                  <ExternalLink size={20} />
                  Live Demo Coming Soon
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
