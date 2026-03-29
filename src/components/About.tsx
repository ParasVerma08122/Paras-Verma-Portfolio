import { GraduationCap, Briefcase, Target } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-cyan-400">Me</span>
          </h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-cyan-500/10 rounded-lg">
                  <Target className="text-cyan-400" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-cyan-400">Who I Am</h3>
                  <p className="text-gray-300 leading-relaxed">
                    A passionate Java Backend Developer with full stack capabilities, dedicated to
                    building scalable and secure systems. I specialize in creating high-performance
                    web applications that can handle real-world challenges and deliver exceptional
                    user experiences.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-cyan-500/10 rounded-lg">
                  <GraduationCap className="text-cyan-400" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-cyan-400">Education</h3>
                  <div className="space-y-2">
                    <p className="text-gray-300 font-medium">Bachelor of Technology (B.Tech)</p>
                    <p className="text-gray-400">Meerut Institute of Engineering and Technology</p>
                    <p className="text-cyan-400 text-sm">Graduated 2024</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-cyan-500/10 rounded-lg">
                  <Briefcase className="text-cyan-400" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-cyan-400">Experience</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-gray-300 font-medium">Project Intern</p>
                      <p className="text-cyan-400">MPragati, IIT Delhi</p>
                      <p className="text-gray-400 text-sm mb-3">3 months</p>
                      <ul className="space-y-2 text-gray-300 text-sm">
                        <li className="flex items-start gap-2">
                          <span className="text-cyan-400 mt-1">•</span>
                          <span>
                            Gained hands-on experience working on real-world projects in a
                            professional environment
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-cyan-400 mt-1">•</span>
                          <span>
                            Collaborated with experienced developers and learned industry best
                            practices
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-cyan-400 mt-1">•</span>
                          <span>
                            Enhanced technical skills through practical application and mentorship
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-sm p-8 rounded-xl border border-cyan-500/30">
              <h3 className="text-xl font-semibold mb-3 text-cyan-400">Career Objective</h3>
              <p className="text-gray-300 leading-relaxed">
                Actively seeking opportunities to contribute to impactful projects where I can
                leverage my expertise in Java, Spring Boot, and full stack development to build
                innovative solutions. I'm passionate about writing clean, maintainable code and
                continuously learning new technologies to stay at the forefront of software
                development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
