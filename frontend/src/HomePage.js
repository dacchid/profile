import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card';
import { Button } from './components/ui/button';
import { Badge } from './components/ui/badge';
import { Separator } from './components/ui/separator';
import { 
  Cloud, 
  Database, 
  Users, 
  Shield, 
  Award, 
  GraduationCap, 
  Mail, 
  Linkedin, 
  Phone,
  ChevronRight,
  Building,
  Calendar,
  TrendingUp
} from 'lucide-react';
import { executiveProfile } from './mock';
import ContactForm from './ContactForm';

const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      const sections = ['hero', 'about', 'experience', 'competencies', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const competencyIcons = {
    "Cloud & Data Platforms": <Cloud className="w-6 h-6" />,
    "Engineering & Integration": <Database className="w-6 h-6" />,
    "Leadership & Strategy": <Users className="w-6 h-6" />,
    "Governance & Compliance": <Shield className="w-6 h-6" />
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Navigation Header */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-slate-200 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="font-bold text-xl text-navy-900">DC</div>
            <div className="hidden md:flex space-x-8">
              {['About', 'Experience', 'Skills', 'Certifications', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors hover:text-navy-600 ${
                    activeSection === item.toLowerCase() ? 'text-navy-600' : 'text-slate-600'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-24 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <div className="mb-8">
              <h1 className="text-5xl md:text-7xl font-bold text-navy-900 mb-4 tracking-tight">
                {executiveProfile.name}
              </h1>
              <p className="text-2xl md:text-3xl text-slate-600 font-light mb-6">
                {executiveProfile.title}
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-tech-blue-400 to-tech-blue-600 mx-auto mb-8"></div>
              <p className="text-lg md:text-xl text-slate-700 max-w-4xl mx-auto leading-relaxed">
                {executiveProfile.tagline}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-navy-600 hover:bg-navy-700 text-white px-8 py-3 text-lg font-medium"
                onClick={() => scrollToSection('contact')}
              >
                Let's Connect
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
              <div className="flex space-x-4">
                <Button variant="outline" size="lg" className="border-slate-300 hover:border-navy-400">
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </Button>
                <Button variant="outline" size="lg" className="border-slate-300 hover:border-navy-400">
                  <Mail className="w-5 h-5 mr-2" />
                  Email
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-navy-900 text-center mb-12">About Me</h2>
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <p className="text-lg text-slate-700 leading-relaxed text-center">
                {executiveProfile.about}
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-navy-900 text-center mb-16">Leadership Experience</h2>
          <div className="space-y-8">
            {executiveProfile.experience.map((role, index) => (
              <Card key={role.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-navy-900 mb-2">{role.title}</h3>
                      <div className="flex items-center text-tech-blue-600 mb-2">
                        <Building className="w-5 h-5 mr-2" />
                        <span className="text-lg font-medium">{role.company}</span>
                      </div>
                    </div>
                    <div className="flex items-center text-slate-600">
                      <Calendar className="w-5 h-5 mr-2" />
                      <span className="font-medium">{role.period}</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {role.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-start">
                        <TrendingUp className="w-5 h-5 text-tech-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                        <p className="text-slate-700">{highlight}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Competencies Section */}
      <section id="competencies" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-navy-900 text-center mb-16">Core Competencies</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(executiveProfile.competencies).map(([category, skills]) => (
              <Card key={category} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center text-xl font-bold text-navy-900">
                    {competencyIcons[category]}
                    <span className="ml-3">{category}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, index) => (
                      <Badge 
                        key={index} 
                        variant="secondary" 
                        className="bg-tech-blue-50 text-tech-blue-700 hover:bg-tech-blue-100 px-3 py-1"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-navy-900 text-center mb-16">Certifications & Education</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {executiveProfile.certifications.map((cert, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      {cert.type === 'education' ? 
                        <GraduationCap className="w-6 h-6 text-tech-blue-600 mr-3" /> :
                        <Award className="w-6 h-6 text-tech-blue-600 mr-3" />
                      }
                      <div>
                        <h3 className="font-bold text-navy-900">{cert.name}</h3>
                        <p className="text-slate-600">{cert.issuer}</p>
                        {cert.code && <p className="text-sm text-tech-blue-600 font-medium">{cert.code}</p>}
                      </div>
                    </div>
                    <span className="text-sm text-slate-500 font-medium">{cert.year}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-navy-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-4">Let's Connect</h2>
          <p className="text-xl text-slate-300 text-center mb-12">
            Ready to discuss how I can drive your organization's digital transformation?
          </p>
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center space-x-6 mb-6">
            <Button variant="outline" size="sm" className="border-slate-600 text-slate-300 hover:text-white">
              <Linkedin className="w-4 h-4 mr-2" />
              LinkedIn
            </Button>
            <Button variant="outline" size="sm" className="border-slate-600 text-slate-300 hover:text-white">
              <Mail className="w-4 h-4 mr-2" />
              Email
            </Button>
            <Button variant="outline" size="sm" className="border-slate-600 text-slate-300 hover:text-white">
              <Phone className="w-4 h-4 mr-2" />
              Call
            </Button>
          </div>
          <Separator className="my-6 bg-slate-700" />
          <p className="text-slate-400">
            © 2025 {executiveProfile.name}. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;