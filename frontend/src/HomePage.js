import React, { useState, useEffect, useRef } from 'react';
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
  ChevronLeft,
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

const SectionDivider = () => (
  <svg className="section-divider" viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill="#f1f5f9" d="M0,80 C480,0 960,160 1440,80 L1440,0 L0,0 Z" />
  </svg>
);

const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [portfolioIndex, setPortfolioIndex] = useState(0);
  const portfolioRef = useRef(null);
  const totalPortfolio = executiveProfile.portfolio.length;

  useEffect(() => {
    setIsVisible(true);
    
    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, observerOptions);

    // Observe all sections for animations
    const sections = document.querySelectorAll('.animate-on-scroll');
    sections.forEach(section => observer.observe(section));

    const handleScroll = () => {
      const sections = ['hero', 'about', 'experience', 'skills', 'leadership', 'certifications', 'education', 'contact'];
      const scrollPosition = window.scrollY + 100;
      let currentSection = 'hero';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop) {
          currentSection = section;
        }
      }
      setActiveSection(currentSection);
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

  const handlePortfolioNav = (dir) => {
    setPortfolioIndex((prev) => {
      let next = prev + dir;
      if (next < 0) next = 0;
      if (next > totalPortfolio - 1) next = totalPortfolio - 1;
      return next;
    });
  };

  useEffect(() => {
    if (portfolioRef.current) {
      portfolioRef.current.scrollTo({
        left: portfolioRef.current.offsetWidth * portfolioIndex,
        behavior: 'smooth',
      });
    }
  }, [portfolioIndex]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white relative">
      <div className="brand-banner" />
      {/* Navigation Header */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 shadow-sm border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 py-3 flex justify-between items-center">
          {/* Simple Monogram Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('hero')} tabIndex={0} role="button" aria-label="Go to main page" onKeyPress={e => { if (e.key === 'Enter' || e.key === ' ') scrollToSection('hero'); }}>
            <span className="rounded-full bg-navy-900 text-white font-bold text-lg w-10 h-10 flex items-center justify-center shadow-sm">DC</span>
            <span className="hidden sm:inline text-lg font-semibold text-navy-900 tracking-tight">Datta Chidrawar</span>
          </div>
          {/* Minimal Navigation Links */}
          <div className="flex space-x-6">
            {['About', 'Experience', 'Skills', 'Leadership', 'Portfolio', 'Certifications', 'Education', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`relative text-base font-medium px-1 py-0.5 text-slate-700 hover:text-navy-900 transition-colors duration-150 ${activeSection === item.toLowerCase() ? 'font-bold text-navy-900' : ''}`}
                style={{ background: 'none', border: 'none' }}
              >
                {item}
                {activeSection === item.toLowerCase() && (
                  <span className="absolute left-0 right-0 -bottom-1 h-0.5 bg-navy-900 rounded-full" style={{opacity: 0.7}} />
                )}
              </button>
            ))}
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
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="cta-secondary text-white border-white hover:bg-tech-blue-700 hover:text-white"
                  style={{borderWidth: 2, color: '#fff', borderColor: '#fff', background: 'rgba(255,255,255,0.08)'}}
                  as="a"
                  href="https://www.linkedin.com/in/dattachidrawar/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="cta-secondary text-white border-white hover:bg-tech-blue-700 hover:text-white"
                  style={{borderWidth: 2, color: '#fff', borderColor: '#fff', background: 'rgba(255,255,255,0.08)'}}
                  as="a"
                  href="/resume.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Resume
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <SectionDivider />
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
      <SectionDivider />
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
      <SectionDivider />
      {/* Skills Section with Professional Icons */}
      <section id="skills" className="py-20 px-6 bg-white animate-on-scroll">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16" style={{color: 'var(--navy-primary)'}}>Core Competencies</h2>
          <div className="competencies-modern-grid">
            {Object.entries(executiveProfile.competencies).map(([category, data], index) => (
              <div key={category} className="competency-modern-card animate-on-scroll" style={{animationDelay: `${index * 0.12}s`}}>
                <div className="competency-modern-header">
                  <div className="competency-modern-icon">{competencyIcons[category]}</div>
                  <span className="competency-modern-title">{category}</span>
                </div>
                <div className="competency-modern-content">
                  <div className="competency-skills-flex">
                    {data.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="competency-skill-pill">
                        <img src={skill.icon} alt={skill.name} />
                        <span>{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="competency-accent-bar" />
              </div>
            ))}
          </div>
        </div>
      </section>
      <SectionDivider />
      {/* Leadership Section with Responsive Grid */}
      <section id="leadership" className="py-20 px-6 animate-on-scroll" style={{backgroundColor: 'var(--slate-light)'}}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16" style={{color: 'var(--navy-primary)'}}>Leadership Excellence</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {executiveProfile.leadership.map((item, index) => (
              <div key={index} className="leadership-card animate-on-scroll flex flex-col items-center text-center p-8 rounded-2xl shadow-lg bg-white" style={{animationDelay: `${index * 0.1}s`}}>
                <img src={item.icon} alt={item.title} className="leadership-icon mb-4" style={{width: 56, height: 56}} />
                <h3 className="text-xl font-bold mb-3" style={{color: 'var(--navy-primary)'}}>{item.title}</h3>
                <p style={{color: 'var(--text-light)'}}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <SectionDivider />
      {/* Certifications Section with Logos */}
      <section id="certifications" className="py-20 px-6 bg-white animate-on-scroll">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16" style={{color: 'var(--navy-primary)'}}>Certifications</h2>
          <div className="space-y-6">
            {executiveProfile.certifications.map((cert, index) => (
              <div key={index} className="education-card animate-on-scroll" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="education-info">
                  <img src={cert.logo} alt={cert.issuer} className="education-icon" />
                  <div className="education-details">
                    <h3>{cert.name}</h3>
                    <p>{cert.issuer}</p>
                    {cert.code && <p className="text-sm font-medium" style={{color: 'var(--tech-blue)'}}>{cert.code}</p>}
                  </div>
                </div>
                <span className="education-year">{cert.year}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <SectionDivider />
      {/* Education Section */}
      <section id="education" className="py-16 px-6 bg-white animate-on-scroll">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10" style={{color: 'var(--navy-primary)'}}>Education</h2>
          <div>
            {executiveProfile.education.map((edu, idx) => (
              <div key={idx} className="education-card animate-on-scroll" style={{animationDelay: `${idx * 0.1}s`}}>
                <div className="education-info">
                  <GraduationCap className="education-icon" />
                  <div className="education-details">
                    <h3>{edu.degree}</h3>
                    <p>{edu.school}</p>
                    <p style={{fontSize: '0.95rem'}}>{edu.location}</p>
                  </div>
                </div>
                <span className="education-year">{edu.year}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <SectionDivider />
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
      <SectionDivider />
      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-6 bg-white animate-on-scroll">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12" style={{color: 'var(--navy-primary)'}}>Portfolio: Architecture Showcase</h2>
          <div className="portfolio-carousel-wrapper">
            <button
              className="portfolio-arrow left"
              onClick={() => handlePortfolioNav(-1)}
              disabled={portfolioIndex === 0}
              aria-label="Previous project"
            >
              {/* Modern crisp left arrow SVG */}
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="14" cy="14" r="14" fill="none" />
                <path d="M17.5 21L11 14L17.5 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div className="portfolio-carousel-single">
              {executiveProfile.portfolio.length > 0 && (
                <div className="portfolio-card animate-on-scroll portfolio-card-2col">
                  <div className="portfolio-card-imgcol">
                    <img src={executiveProfile.portfolio[portfolioIndex].image} alt={executiveProfile.portfolio[portfolioIndex].title} />
                  </div>
                  <div className="portfolio-card-contentcol">
                    <h3>{executiveProfile.portfolio[portfolioIndex].title}</h3>
                    <p>{executiveProfile.portfolio[portfolioIndex].description}</p>
                    <ul>
                      {executiveProfile.portfolio[portfolioIndex].highlights.map((h, i) => (
                        <li key={i}>{h}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
            <button
              className="portfolio-arrow right"
              onClick={() => handlePortfolioNav(1)}
              disabled={portfolioIndex === totalPortfolio - 1}
              aria-label="Next project"
            >
              {/* Modern crisp right arrow SVG */}
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="14" cy="14" r="14" fill="none" />
                <path d="M11 7L17.5 14L11 21" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center space-x-6 mb-6">
            <Button variant="outline" size="sm" className="border-slate-600 text-slate-300 hover:text-white" as="a" href="https://www.linkedin.com/in/dattachidrawar/" target="_blank" rel="noopener noreferrer">
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