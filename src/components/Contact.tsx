import { useState } from 'react';
import { Mail, Phone, Linkedin, Github, MapPin, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'parasverma08122@gmail.com',
      href: 'mailto:parasverma08122@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91-8218404990',
      href: 'tel:+918218404990',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'paras-verma',
      href: 'https://www.linkedin.com/in/paras-verma-819881228/',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'ParasVerma08122',
      href: 'https://github.com/ParasVerma08122',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'India',
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-cyan-400">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Open to opportunities and always excited to collaborate on interesting projects
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-sm p-8 rounded-xl border border-cyan-500/30">
              <h3 className="text-2xl font-semibold mb-6 text-cyan-400">
                Open to Work
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                I'm actively seeking opportunities to contribute to impactful projects. Whether
                you're looking for a Java Full Stack Developer, I'd love to
                hear from you!
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div
                    key={index}
                    className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-all group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-cyan-500/10 rounded-lg group-hover:bg-cyan-500/20 transition-colors">
                        <Icon className="text-cyan-400" size={24} />
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">{info.label}</p>
                        {info.href ? (
                          <a
                            href={info.href}
                            target={info.href.startsWith('http') ? '_blank' : undefined}
                            rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="text-gray-200 font-medium hover:text-cyan-400 transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-gray-200 font-medium">{info.value}</p>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-12">
                <CheckCircle className="text-green-400 mb-4" size={64} />
                <p className="text-xl text-gray-300 text-center">
                  Thank you for your message!
                </p>
                <p className="text-gray-400 text-center mt-2">
                  I'll get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-500 text-gray-100 transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-500 text-gray-100 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-500 text-gray-100 transition-colors resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg font-medium transition-all flex items-center justify-center gap-2 group"
                >
                  Send Message
                  <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-slate-800/50 backdrop-blur-sm px-8 py-4 rounded-xl border border-slate-700">
            <p className="text-gray-400">
              Built with React, TypeScript & Tailwind CSS
            </p>
            <p className="text-gray-500 text-sm mt-2">
              © 2024 Paras Verma. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
