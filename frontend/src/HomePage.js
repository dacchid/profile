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
  TrendingUp,
  Download,
  ExternalLink,
  Target,
  Briefcase
} from 'lucide-react';
import { executiveProfile } from './mock';
import ContactForm from './ContactForm';

const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    setIsVisible(true);
    
    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, observerOptions);

    // Observe all sections for animations
    const sections = document.querySelectorAll('.animate-on-scroll');
    sections.forEach(section => observer.observe(section));

    const handleScroll = () => {
      const sections = ['hero', 'about', 'experience', 'skills', 'leadership', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
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

  // Generate particles for background effect
  const generateParticles = () => {
    return Array.from({ length: 60 }, (_, i) => (
      <div
        key={i}
        className="particle"
        style={{
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 20}s`,
          animationDuration: `${20 + Math.random() * 15}s`
        }}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Navigation Header */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-slate-200 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="font-bold text-xl" style={{color: 'var(--navy-primary)'}}>DC</div>
            <div className="hidden md:flex space-x-8">
              {['About', 'Experience', 'Skills', 'Leadership', 'Certifications', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                    activeSection === item.toLowerCase() ? 'text-blue-600' : 'text-slate-600'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Professional Photo */}
      <section id="hero" className="relative pt-24 pb-20 px-6 min-h-screen flex items-center overflow-hidden">
        {/* Animated Digital Background */}
        <div className="hero-background">
          <div className="digital-particles">
            {generateParticles()}
          </div>
        </div>
        
        {/* Dark Overlay for Text Legibility */}
        <div className="hero-overlay"></div>
        
        {/* Content */}
        <div className="max-w-7xl mx-auto relative z-10">
          <div className={`text-center transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            {/* Professional Photo */}
            <div className="mb-8 fade-in-up">
              <img 
                src={executiveProfile.profilePhoto} 
                alt="Dattatraya Chidrawar"
                className="profile-photo mx-auto"
              />
            </div>
            
            <div className="mb-8">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight fade-in-up" style={{animationDelay: '0.2s'}}>
                {executiveProfile.name}
              </h1>
              <p className="text-2xl md:text-3xl text-slate-200 font-light mb-6 fade-in-up" style={{animationDelay: '0.4s'}}>
                {executiveProfile.title}
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-8 fade-in-up" style={{animationDelay: '0.6s'}}></div>
              <p className="text-lg md:text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed fade-in-up" style={{animationDelay: '0.8s'}}>
                {executiveProfile.tagline}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center fade-in-up" style={{animationDelay: '1s'}}>
              <Button 
                size="lg" 
                className="cta-primary"
                onClick={() => scrollToSection('contact')}
              >
                Let's Connect
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
              <div className="flex space-x-4">
                <Button variant="outline" size="lg" className="cta-secondary">
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </Button>
                <Button variant="outline" size="lg" className="cta-secondary">
                  <Download className="w-5 h-5 mr-2" />
                  Resume
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white animate-on-scroll">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12" style={{color: 'var(--navy-primary)'}}>About Me</h2>
          <div className="executive-card">
            <div className="executive-card-content">
              <p className="text-lg leading-relaxed text-center" style={{color: 'var(--text-light)'}}>
                {executiveProfile.about}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section with Enhanced Cards */}
      <section id="experience" className="py-20 px-6 animate-on-scroll" style={{backgroundColor: 'var(--slate-light)'}}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16" style={{color: 'var(--navy-primary)'}}>Leadership Experience</h2>
          <div className="space-y-8">
            {executiveProfile.experience.map((role, index) => (
              <div key={role.id} className="experience-card animate-on-scroll" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="executive-card-content">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <img 
                        src={role.logo} 
                        alt={role.company}
                        className="company-logo"
                      />
                      <div>
                        <h3 className="text-2xl font-bold mb-2" style={{color: 'var(--navy-primary)'}}>{role.title}</h3>
                        <div className="flex items-center mb-2" style={{color: 'var(--tech-blue)'}}>
                          <Building className="w-5 h-5 mr-2" />
                          <span className="text-lg font-medium">{role.company}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center" style={{color: 'var(--text-light)'}}>
                      <Calendar className="w-5 h-5 mr-2" />
                      <span className="font-medium">{role.period}</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {role.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-start">
                        <TrendingUp className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" style={{color: 'var(--tech-blue)'}} />
                        <p style={{color: 'var(--text-light)'}}>{highlight}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section with Professional Icons */}
      <section id="skills" className="py-20 px-6 bg-white animate-on-scroll">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16" style={{color: 'var(--navy-primary)'}}>Core Competencies</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(executiveProfile.competencies).map(([category, data], index) => (
              <div key={category} className="executive-card animate-on-scroll" style={{animationDelay: `${index * 0.15}s`}}>
                <div className="executive-card-header">
                  <div className="flex items-center text-xl font-bold" style={{color: 'var(--navy-primary)'}}>
                    {competencyIcons[category]}
                    <span className="ml-3">{category}</span>
                  </div>
                </div>
                <div className="executive-card-content">
                  <div className="flex flex-wrap gap-3">
                    {data.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="skill-badge">
                        <img src={skill.icon} alt={skill.name} />
                        <span>{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section with Carousel */}
      <section id="leadership" className="py-20 px-6 animate-on-scroll" style={{backgroundColor: 'var(--slate-light)'}}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16" style={{color: 'var(--navy-primary)'}}>Leadership Excellence</h2>
          <div className="leadership-carousel">
            {executiveProfile.leadership.map((item, index) => (
              <div key={index} className="leadership-card animate-on-scroll" style={{animationDelay: `${index * 0.1}s`}}>
                <img src={item.icon} alt={item.title} className="leadership-icon" />
                <h3 className="text-xl font-bold mb-3" style={{color: 'var(--navy-primary)'}}>{item.title}</h3>
                <p style={{color: 'var(--text-light)'}}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section with Logos */}
      <section id="certifications" className="py-20 px-6 bg-white animate-on-scroll">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16" style={{color: 'var(--navy-primary)'}}>Certifications & Education</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {executiveProfile.certifications.map((cert, index) => (
              <div key={index} className="certification-badge animate-on-scroll" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="executive-card-content">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <img src={cert.logo} alt={cert.issuer} className="cert-logo" />
                      <div>
                        <h3 className="font-bold" style={{color: 'var(--navy-primary)'}}>{cert.name}</h3>
                        <p style={{color: 'var(--text-light)'}}>{cert.issuer}</p>
                        {cert.code && <p className="text-sm font-medium" style={{color: 'var(--tech-blue)'}}>{cert.code}</p>}
                      </div>
                    </div>
                    <span className="text-sm font-medium" style={{color: 'var(--text-light)'}}>{cert.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 animate-on-scroll" style={{backgroundColor: 'var(--navy-primary)'}}>
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