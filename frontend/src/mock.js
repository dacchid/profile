// Mock data for Dattatraya Chidrawar's executive portfolio

export const executiveProfile = {
  name: "Dattatraya Chidrawar",
  title: "CTO-Track | Cloud & Data Executive",
  tagline: "Driving Cloud-First Transformation, Real-Time Data Platforms, and Scalable Innovation.",
  email: "dattatraya.c@email.com",
  linkedin: "https://linkedin.com/in/dattatraya-chidrawar",
  phone: "+1 (555) 123-4567",
  
  about: "Senior technology executive with 15+ years of experience leading cloud architecture, data engineering, and digital transformation initiatives. Harvard Business Analytics Program graduate and Rutgers MBA with proven expertise in building scalable, secure platforms for highly regulated environments. Specializes in Azure cloud solutions, real-time analytics, and enterprise integration while driving cross-functional teams toward strategic business outcomes.",

  experience: [
    {
      id: 1,
      title: "Technical Advisor",
      company: "University Bank / Midwest Loan Services",
      period: "2023 - Present",
      highlights: [
        "Leading cloud-first digital transformation strategy for regulated financial services",
        "Architecting secure, compliant data platforms handling $2B+ in loan processing",
        "Driving SOC 2 compliance initiatives and data governance frameworks"
      ]
    },
    {
      id: 2,
      title: "Data Engineering Leader",
      company: "Holman",
      period: "2021 - 2023",
      highlights: [
        "Built and scaled real-time analytics platform processing 300M+ daily records",
        "Led cross-functional teams across 3 global regions in microservices architecture",
        "Delivered $2M IoT program integrating fleet management and predictive maintenance"
      ]
    },
    {
      id: 3,
      title: "Senior Cloud Architect",
      company: "ARI (American Residential Investment)",
      period: "2019 - 2021",
      highlights: [
        "Designed enterprise Azure infrastructure supporting 50,000+ users",
        "Implemented CI/CD pipelines reducing deployment time by 75%",
        "Established vendor strategy and technology roadmap for digital transformation"
      ]
    }
  ],

  competencies: {
    "Cloud & Data Platforms": [
      "Microsoft Azure",
      "Azure Databricks",
      "Azure Synapse",
      "Azure Data Factory",
      "Power BI",
      "Apache Kafka"
    ],
    "Engineering & Integration": [
      "Microservices Architecture",
      "CI/CD Pipelines",
      "REST APIs",
      "Docker & Kubernetes",
      "DevOps Practices",
      "Agile Methodologies"
    ],
    "Leadership & Strategy": [
      "Global Team Building",
      "Cross-Functional Alignment",
      "Vendor Management",
      "Digital Transformation",
      "Technology Roadmapping",
      "Executive Stakeholder Management"
    ],
    "Governance & Compliance": [
      "SOC 2 Compliance",
      "Data Security & Privacy",
      "KPI/OKR Alignment",
      "Risk Management",
      "Regulatory Compliance",
      "Enterprise Architecture"
    ]
  },

  certifications: [
    {
      name: "Harvard Business Analytics Program",
      issuer: "Harvard Business School",
      type: "education",
      year: "2022"
    },
    {
      name: "MBA in Technology Management",
      issuer: "Rutgers Business School",
      type: "education",
      year: "2018"
    },
    {
      name: "Azure Solutions Architect Expert",
      issuer: "Microsoft",
      code: "AZ-305",
      type: "certification",
      year: "2023"
    },
    {
      name: "Azure Administrator Associate",
      issuer: "Microsoft",
      code: "AZ-104",
      type: "certification",
      year: "2022"
    },
    {
      name: "Lean Six Sigma Black Belt",
      issuer: "ASQ",
      type: "certification",
      year: "2020"
    }
  ]
};

// Mock form submission handler
export const submitContactForm = async (formData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Contact form submitted:', formData);
      resolve({ success: true, message: 'Thank you for your message. I will get back to you soon!' });
    }, 1000);
  });
};