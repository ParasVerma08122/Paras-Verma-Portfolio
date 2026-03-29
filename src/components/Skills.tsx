import { Code2, LayoutGrid as Layout, Server, Database } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Backend Development',
      icon: Server,
      skills: ['Java', 'Spring Boot', 'Node.js', 'Express.js'],
      color: 'cyan',
    },
    {
      title: 'Frontend Development',
      icon: Layout,
      skills: ['HTML', 'CSS', 'JavaScript', 'React.js'],
      color: 'blue',
    },
    {
      title: 'DevOps & Deployment',
      icon: Code2,
      skills: ['Docker', 'CI/CD', 'AWS', 'Azure'],
      color: 'cyan',
    },
    {
      title: 'Databases',
      icon: Database,
      skills: ['MySQL', 'MongoDB', 'PostgreSQL'],
      color: 'blue',
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-cyan-400">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable web applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="group bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-all hover:transform hover:scale-105"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-cyan-500/10 rounded-lg group-hover:bg-cyan-500/20 transition-colors">
                    <Icon className="text-cyan-400" size={32} />
                  </div>
                  <h3 className="text-2xl font-semibold">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-4 py-2 bg-slate-900 text-gray-300 rounded-lg border border-slate-700 hover:border-cyan-500/50 hover:text-cyan-400 transition-all text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: 'Projects Completed', value: '10+' },
            { label: 'Technologies', value: '12+' },
            { label: 'Code Quality', value: '85%+' },
            { label: 'Uptime', value: '99%' },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-sm p-6 rounded-xl border border-cyan-500/30 text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
