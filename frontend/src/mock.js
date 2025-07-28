// Mock data for Datta Chidrawar's executive portfolio

export const executiveProfile = {
  name: "Datta Chidrawar",
  title: "Transformational Technology Leader | Data, Cloud & AI Professional | VP/CTO Track",
  tagline: "Driving cloud-first innovation, real-time data platforms, and scalable transformation in regulated industries",
  email: "dattatraya.chidrawar@mail.analytics.hbs.edu",
  linkedin: "https://www.linkedin.com/in/dattachidrawar/",
  phone: "+1 (732) 692-7906",
  profilePhoto: "/images/HeadShot.jpeg",
  about: `Transformational technology leader with 15+ years of success driving cloud architecture, real-time analytics, and enterprise modernization across financial and regulated sectors. Proven track record in aligning executive vision with scalable digital execution, leading global teams, and optimizing multi-million-dollar portfolios. Harvard-trained and Azure-certified with deep expertise in data platforms, CI/CD, and API strategy. Currently positioned for senior technology leadership roles with CTO trajectory.`,

  experience: [
    {
      id: 1,
      title: "Technical Advisor – Enterprise & Cloud Architecture",
      company: "University Bank – Midwest Loan Services",
      period: "2025 – Present",
      logo: "/images/icons/ub.jpeg",
      highlights: [
        "Defined and executed a cloud-first enterprise data architecture using Azure Data Lake and Databricks, implementing a Medallion framework (Bronze/Silver/Gold) to enhance data reliability and accessibility, and modernizing legacy systems to deliver $300K+ in annual savings.",
        "Architected and deployed a real-time document management platform (100M+ records) and microservices-based integrations with ICE/Black Knight, reducing reporting time by 60%, IT ticket volume by 40%, and achieving zero audit findings.",
        "Led platform standardization and automated infrastructure provisioning (ARM, Bicep), decommissioning 50% of legacy workloads, and ensuring SOC 2, encryption, and data retention compliance across all cloud-native solutions."
      ]
    },
    {
      id: 2,
      title: "Data Engineering Leader",
      company: "Holman",
      period: "2013 – 2024",
      logo: "/images/icons/holman.jpeg",
      highlights: [
        "Directed a $2M IoT telematics program ingesting 300M+ daily records across 300K vehicles, enabling predictive maintenance and optimizing fleet performance with real-time analytics.",
        "Led a 20-member engineering team, achieving an 88% long-term retention rate through strategic mentorship and professional growth initiatives.",
        "Architected and implemented an Azure-based lakehouse with real-time Oracle integration, accelerating data processing by 40% and delivering advanced operational insights.",
        "Consolidated HR and payroll systems across six subsidiaries through a $5M Workday deployment, integrating 17 connectors and reducing administrative overhead by 25%.",
        "Executed a 3-year enterprise architecture roadmap, streamlining systems to reduce operational expenditures by 20% and aligning infrastructure with evolving business objectives.",
        "Migrated legacy platforms to Azure cloud, achieving a 25% cost reduction and improving API availability by 50% through scalable, high-performance architecture.",
        "Engineered a robust CI/CD pipeline using TeamCity and Octopus Deploy, reducing deployment times by 90% and unifying release processes across 400+ projects.",
        "Developed a reusable RESTful API boilerplate framework adopted by four departments, cutting API delivery times to under four hours.",
        "Automated health screening and access control at 40+ locations through real-time Workday-BRIVO integration, saving $2M annually and eliminating employee entry delays.",
        "Led a 3-month NA–UK system integration using a service-oriented architecture, enabling seamless onboarding of 50K vehicles on day one and securing 200K+ from key clients."
      ]
    },
    {
      id: 3,
      title: "Architect – Corporate Systems",
      company: "ARI",
      period: "2006 – 2013",
      logo: "/images/icons/ari.jpeg",
      highlights: [
        "Revamped the vehicle ordering portal using modular architecture and optimized UX design, increasing annual order volume by 30% and accelerating delivery cycles.",
        "Engineered dynamic dashboards with JavaScript in collaboration with UX teams, enhancing user engagement and interaction by 60%.",
        "Rebuilt customer-facing portals using HTML5, CSS3, jQuery, and ASP.NET APIs, improving customer satisfaction scores and reducing server load through efficient service architecture.",
        "Elevated platform accessibility and performance by enforcing WCAG standards and optimizing stored procedures and indexes, boosting query speeds and compliance across web applications."
      ]
    }
  ],

  education: [
    { school: "Harvard University", location: "Cambridge, MA", degree: "Harvard Business Analytics Program (HBAP)", year: "2020" },
    { school: "Rutgers University – School of Business", location: "Camden, NJ", degree: "Master of Business Administration", year: "2016" },
    { school: "BAMU University", location: "Aurangabad, MH, India", degree: "Bachelor of Engineering", year: "1998" }
  ],

  certifications: [
    { name: "Harvard Business Analytics Program (HBAP)", issuer: "Harvard University", year: "2020", logo: "/images/icons/harvard.png" },
    { name: "AZ-305 Azure Solutions Architect Expert", issuer: "Microsoft", year: "2025", logo: "/images/icons/azuresolutionsarchitect.svg" },
    { name: "AZ-104 Microsoft Azure Administrator", issuer: "Microsoft", year: "2025", logo: "/images/icons/azureadminassociate.svg" },
    { name: "DP-900 Azure Data Fundamentals", issuer: "Microsoft", year: "2021", logo: "/images/icons/microsoftazure.svg" },
    { name: "AZ-900 Azure Fundamentals", issuer: "Microsoft", year: "2021", logo: "/images/icons/microsoftazure.svg" },
    { name: "Lean Six Sigma Green Belt", issuer: "", year: "2016", logo: "/images/icons/asq.png" },
    { name: "Team Software Process (TSP) & Personal Software Process (PSP)", issuer: "", year: "", logo: "/images/icons/agile.svg" },
    { name: "Microsoft Certified Professional", issuer: "Microsoft", year: "2012", logo: "/images/icons/microsoftazure.svg" }
  ],

  competencies: {
    "Executive Leadership & Strategy": {
      icon: "/images/icons/globalteambuilding.png",
      skills: [
        { name: "Visionary Technology Leadership", icon: "/images/icons/leadership_architecture.svg" },
        { name: "Digital & Business Transformation", icon: "/images/icons/digitaltransformation.png" },
        { name: "Enterprise Architecture & Roadmapping", icon: "/images/icons/technologyroadmapping.png" },
        { name: "Innovation Management", icon: "/images/icons/leadership_cloudsync.svg" },
        { name: "Cross-Functional Team Leadership", icon: "/images/icons/globalteambuilding.png" },
        { name: "Stakeholder & Board Engagement", icon: "/images/icons/executivestakeholdermanagement.png" },
        { name: "Vendor & Partner Strategy", icon: "/images/icons/vendormanagement.png" },
        { name: "Change & Risk Management", icon: "/images/icons/riskmanagement.png" }
      ]
    },
    "Cloud, Data & Analytics Platforms": {
      icon: "/images/icons/microsoftazure.svg",
      skills: [
        { name: "Cloud Modernization (Azure, AWS)", icon: "/images/icons/microsoftazure.svg" },
        { name: "Data Lake, Synapse & Databricks", icon: "/images/icons/azuresynapse.png" },
        { name: "Real-Time Data Engineering & IoT", icon: "/images/icons/apachekafka.svg" },
        { name: "Business Intelligence (Power BI, Tableau)", icon: "/images/icons/powerbi.svg" },
        { name: "Data Governance & Compliance", icon: "/images/icons/soc2compliance.png" },
        { name: "Oracle, SQL Server, MySQL, NoSQL", icon: "/images/icons/sqlserver.png" }
      ]
    },
    "Engineering, DevOps & Integration": {
      icon: "/images/icons/docker.svg",
      skills: [
        { name: "Microservices & Event-Driven Architecture", icon: "/images/icons/microservices.svg" },
        { name: "API Strategy (REST, GraphQL, gRPC)", icon: "/images/icons/postman.svg" },
        { name: "CI/CD & DevOps Automation", icon: "/images/icons/azuredevops.svg" },
        { name: "Infrastructure as Code (ARM, Bicep, YAML)", icon: "/images/icons/cicd.svg" },
        { name: "Containerization (Docker, Kubernetes, ACA)", icon: "/images/icons/docker.svg" },
        { name: "Messaging (Kafka, RabbitMQ, Service Bus)", icon: "/images/icons/apachekafka.svg" }
      ]
    },
    "Security, Compliance & Operations": {
      icon: "/images/icons/soc2compliance.png",
      skills: [
        { name: "SOC 2, SOX, Regulatory Compliance", icon: "/images/icons/soc2compliance.png" },
        { name: "Data Security & Privacy (Encryption, OAuth, SAML)", icon: "/images/icons/datasecurityprivacy.png" },
        { name: "Risk & Change Management", icon: "/images/icons/riskmanagement.png" },
        { name: "Monitoring & Observability (App Insights, Prometheus, Grafana)", icon: "/images/icons/leadership_compliance.svg" },
        { name: "Business Continuity & Disaster Recovery", icon: "/images/icons/leadership_compliance.svg" }
      ]
    },
    "AI, ML & Advanced Analytics": {
      icon: "/images/icons/leadership_cloudsync.svg",
      skills: [
        { name: "AI Strategy & Executive Leadership", icon: "/images/icons/leadership_cloudsync.svg" },
        { name: "Applied Machine Learning & Predictive Analytics", icon: "/images/icons/analytics.png" },
        { name: "Generative AI (LLMs, GPT, Copilots)", icon: "/images/icons/genai.png" },
        { name: "Data Science & Advanced Analytics", icon: "/images/icons/powerbi.svg" },
        { name: "AI/ML Platform Integration (Azure AI, Databricks ML, AWS Sagemaker)", icon: "/images/icons/microsoftazure.svg" },
        { name: "Responsible AI, Ethics & Governance", icon: "/images/icons/soc2compliance.png" }
      ]
    }
  },

  leadership: [
    {
      title: "Digital Transformation & Cloud Modernization",
      description: "Drove enterprise-wide digital transformation and cloud modernization, delivering $300K+ in annual savings, decommissioning 50% of legacy systems, and accelerating data-driven decision making.",
      icon: "/images/icons/leadership_cloudsync.svg"
    },
    {
      title: "High-Performance Team Leadership",
      description: "Built, mentored, and led global engineering teams (20+ members), achieving 88%+ retention, fostering a culture of innovation, and driving leadership succession across multi-year programs.",
      icon: "/images/icons/leadership_team.svg"
    },
    {
      title: "Strategic Architecture & Business Alignment",
      description: "Developed and executed multi-year enterprise architecture roadmaps, aligning technology with business strategy, reducing operational costs by 20%, and enabling scalable, secure platforms for regulated industries.",
      icon: "/images/icons/leadership_architecture.svg"
    },
    {
      title: "Compliance, Security & Risk Management",
      description: "Championed SOC 2, data privacy, and risk management initiatives, ensuring regulatory compliance, zero audit findings, and robust security posture across cloud and data platforms.",
      icon: "/images/icons/leadership_compliance.svg"
    }
  ],

  portfolio: [
    {
      title: "Cloud-Native Data Lakehouse Architecture",
      image: "/images/icons/datalakehouse-arch.png",
      description: "Designed and implemented a scalable Azure-based data lakehouse using Data Lake, Synapse, and Databricks. Enabled real-time analytics, governed data zones (Bronze/Silver/Gold), and seamless integration with enterprise systems.",
      highlights: [
        "Medallion architecture for reliability and compliance",
        "Real-time ingestion and analytics (Databricks, Synapse)",
        "Automated provisioning with Bicep/ARM",
        "SOC 2, encryption, and retention compliance"
      ]
    },
    {
      title: "Microservices Integration Platform",
      image: "/images/portfolio/microservices-arch.svg",
      description: "Architected a microservices platform for real-time document management and third-party integrations (ICE/Black Knight). Reduced IT tickets by 40% and achieved zero audit findings.",
      highlights: [
        "Event-driven microservices (Azure Service Bus, Functions)",
        "API-first design and secure partner integration",
        "Automated CI/CD and infrastructure as code",
        "Legacy system modernization and cost savings"
      ]
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