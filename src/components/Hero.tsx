import { ArrowDown, Github, Linkedin, Mail, Phone } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 space-y-6">
            <div className="inline-block">
              <span className="bg-cyan-500/10 text-cyan-400 px-4 py-2 rounded-full text-sm font-medium border border-cyan-500/20">
                Open to Work
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Paras Verma
              </span>
            </h1>

            <h2 className="text-2xl md:text-3xl text-gray-300 font-medium">
              Building Scalable Backend Systems & Modern Full Stack Applications
            </h2>

            <p className="text-lg text-gray-400 leading-relaxed">
              Java Full Stack Developer specializing in building scalable, secure, and
              high-performance web applications using Java, Spring Boot, and modern frontend
              technologies.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg font-medium transition-all transform hover:scale-105 flex items-center gap-2"
              >
                View Projects
                <ArrowDown size={20} />
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-medium transition-all border border-slate-700"
              >
                Contact Me
              </button>
            </div>

            <div className="flex gap-4 pt-6">
              <a
                href="https://github.com/ParasVerma08122"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/paras-verma-819881228/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:parasverma08122@gmail.com"
                className="p-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
              >
                <Mail size={24} />
              </a>
              <a
                href="tel:+918218404990"
                className="p-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
              >
                <Phone size={24} />
              </a>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-cyan-500/30 shadow-2xl">
                <img
                  src="/IMG_20231105_161440.png"
                  alt="Paras Verma"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
