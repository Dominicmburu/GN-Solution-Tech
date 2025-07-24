// servicesData.js - Complete structured data for all service pages

const servicesData = [
  {
    id: 1,
    title: "Infrastructure as Code",
    slug: "infrastructure-as-code",
    subtitle: "Automate and manage your infrastructure with code-driven approaches",
    bannerImage: "/assets/images/services/iac-banner.jpg",
    mainImage: "/assets/images/services/iac-main.jpg",
    shortDescription: "Infrastructure as Code (IaC) is a modern approach to provisioning and managing IT infrastructure using machine-readable configuration files, rather than through manual processes. It allows system administrators and DevOps teams to define infrastructure using code, enabling repeatable, reliable, and automated deployments.",
    
    overview: `
      <p>Infrastructure as Code (IaC) transforms how organizations manage their IT environments by treating infrastructure configurations as software code. This approach brings the discipline and efficiency of software development to infrastructure management, enabling:</p>
      
      <ul>
        <li><strong>Declarative Definitions:</strong> Define the desired end state of resources and let the IaC engine handle the provisioning steps.</li>
        <li><strong>Idempotency:</strong> Applying the same configuration multiple times yields the same infrastructure state, preventing configuration drift.</li>
        <li><strong>Version Control:</strong> Store all infrastructure definitions in source control, enabling collaboration, history tracking, and rollback.</li>
      </ul>
      
      <p>By adopting IaC, you eliminate manual configurations, reduce human error, and gain consistency across environments from development to production.</p>
    `,
    
    keyFeatures: [
      {
        title: "Code-Driven Infrastructure",
        description: "Use industry-standard tools to define infrastructure resources programmatically.",
        icon: "FaCode"
      },
      {
        title: "Multi-Cloud & Hybrid Support",
        description: "Deploy infrastructure on AWS, Azure, Google Cloud, or on-premises with consistent automation.",
        icon: "FaCloud"
      },
      {
        title: "Modular Templates",
        description: "Use customizable and scalable code modules for common services like load balancers and firewalls.",
        icon: "FaCogs"
      },
      {
        title: "CI/CD Integration",
        description: "Seamlessly integrate with your CI/CD pipelines for automated infrastructure testing and delivery.",
        icon: "FaSyncAlt"
      },
      {
        title: "Drift Detection",
        description: "Automatically detect and remediate configuration drift and enforce compliance policies.",
        icon: "FaSearch"
      },
      {
        title: "Role-Based Access",
        description: "Track changes and manage who can apply, modify, or destroy infrastructure using granular access control.",
        icon: "FaKey"
      }
    ],
    
    implementationProcess: [
      {
        title: "Assessment & Planning",
        description: "Evaluate current infrastructure and design the IaC approach.",
        icon: "FaSearch"
      },
      {
        title: "Template Development",
        description: "Create modular, reusable infrastructure code templates.",
        icon: "FaCode"
      },
      {
        title: "Testing & Validation",
        description: "Test infrastructure deployments in isolated environments.",
        icon: "FaTools"
      },
      {
        title: "Implementation",
        description: "Gradual rollout with careful validation at each stage.",
        icon: "FaRocket"
      },
      {
        title: "Maintenance & Optimization",
        description: "Ongoing refinement of infrastructure code and processes.",
        icon: "FaSyncAlt"
      }
    ],
    
    extendedFeatures: [
      {
        title: "Infrastructure Automation",
        description: `
          <p>Move beyond manual, error-prone provisioning with automated infrastructure deployment across your entire environment. Using tools like Terraform, Ansible, or CloudFormation, we codify your infrastructure needs with:</p>
          <ul>
            <li>Repeatable, consistent provisioning processes</li>
            <li>Self-documenting infrastructure definitions</li>
            <li>Reduced human error and configuration drift</li>
            <li>Faster environment creation from development to production</li>
          </ul>
        `,
        icon: "FaRocket"
      },
      {
        title: "Version-Controlled Infrastructure",
        description: `
          <p>Apply software development best practices to infrastructure management with Git-based version control:</p>
          <ul>
            <li>Track all infrastructure changes with complete history</li>
            <li>Enable collaboration through pull requests and code reviews</li>
            <li>Roll back to previous configurations when issues arise</li>
            <li>Branch-based development for testing new infrastructure designs</li>
          </ul>
        `,
        icon: "FaCode"
      },
      {
        title: "Compliance & Security by Design",
        description: `
          <p>Embed security and compliance into your infrastructure from the beginning:</p>
          <ul>
            <li>Automated policy checks before deployment</li>
            <li>Consistent security configurations across environments</li>
            <li>Compliance reports generated directly from code</li>
            <li>Integration with security scanning tools</li>
          </ul>
        `,
        icon: "FaShieldAlt"
      },
      {
        title: "Multi-Cloud Orchestration",
        description: `
          <p>Manage resources across multiple cloud providers with a unified approach:</p>
          <ul>
            <li>Abstract provider-specific details behind common interfaces</li>
            <li>Deploy identical workloads to different cloud providers</li>
            <li>Implement multi-cloud high availability and disaster recovery</li>
            <li>Optimize costs by leveraging each provider's strengths</li>
          </ul>
        `,
        icon: "FaCloud"
      }
    ],
    
    technologies: [
      {
        name: "Terraform",
        description: "HashiCorp's infrastructure as code tool for multi-cloud provisioning.",
        icon: "FaServer"
      },
      {
        name: "Ansible",
        description: "Agent-less configuration management and deployment tool.",
        icon: "FaCogs"
      },
      {
        name: "AWS CloudFormation",
        description: "Template-based infrastructure management for AWS.",
        icon: "FaCloud"
      },
      {
        name: "Azure Resource Manager",
        description: "Infrastructure management service for Azure deployments.",
        icon: "FaNetworkWired"
      }
    ],
    
    architecture: {
      title: "IaC Architecture",
      image: "/assets/images/services/iac-architecture.jpg",
      description: "Comprehensive infrastructure automation from code to cloud resources",
      stack: [
        {
          title: "Version Control Layer",
          description: "Git repositories for infrastructure code management.",
          icon: "FaCode"
        },
        {
          title: "CI/CD Pipeline",
          description: "Automated testing and deployment of infrastructure changes.",
          icon: "FaSyncAlt"
        },
        {
          title: "IaC Engine Layer",
          description: "Terraform, Ansible, CloudFormation execution environment.",
          icon: "FaCogs"
        },
        {
          title: "Multi-Cloud Resources",
          description: "Provisioned infrastructure across cloud providers.",
          icon: "FaCloud"
        }
      ]
    },
    
    benefits: [
      {
        title: "Speed & Efficiency",
        description: "Provision infrastructure in minutes instead of hours or days.",
        icon: "FaRocket"
      },
      {
        title: "Consistency",
        description: "Eliminate human error by automating standard environments with code.",
        icon: "FaCogs"
      },
      {
        title: "Scalability",
        description: "Easily replicate infrastructure across multiple environments and regions.",
        icon: "FaChartLine"
      },
      {
        title: "Cost Optimization",
        description: "Decommission unused resources automatically and track infrastructure costs.",
        icon: "FaChartLine"
      },
      {
        title: "Auditability",
        description: "Track changes, roll back to previous states, and maintain a full audit trail.",
        icon: "FaFileAlt"
      },
      {
        title: "Disaster Recovery",
        description: "Rebuild entire environments from code in case of a failure or outage.",
        icon: "FaSyncAlt"
      }
    ],
    
    testimonials: [
      {
        company: "Global Finance Group",
        result: "Reduced infrastructure provisioning time from 3 weeks to 2 hours while ensuring 100% compliance with security requirements for all deployments.",
        icon: "FaChartLine",
        color: "linear-gradient(135deg, #301934, rgb(112, 5, 131))",
        link: "/case-studies/finance-iac"
      },
      {
        company: "E-commerce Platform",
        result: "Achieved 99.99% uptime with automated scaling and reduced infrastructure costs by 35% through efficient resource utilization.",
        icon: "FaRocket",
        color: "linear-gradient(135deg, #f08b0a, rgba(110, 71, 20, 0.7)",
        link: "/case-studies/ecommerce-iac"
      },
      {
        company: "Healthcare Provider",
        result: "Successfully implemented HIPAA-compliant multi-region infrastructure with automated disaster recovery and 15-minute recovery time objective.",
        icon: "FaShieldAlt",
        color: "linear-gradient(135deg, #000000, rgb(165, 162, 162))",
        link: "/case-studies/healthcare-iac"
      }
    ],
    
    solutions: [
      {
        title: "IaC Framework Development",
        description: "Custom-built infrastructure automation frameworks using Terraform, Ansible, or a hybrid approach.",
        icon: "FaCode"
      },
      {
        title: "Multi-Cloud Deployments",
        description: "Unified IaC strategies across AWS, Azure, GCP, and on-premises environments.",
        icon: "FaCloud"
      },
      {
        title: "CI/CD Pipeline Integration",
        description: "Automate your full software delivery lifecycle, including infrastructure updates.",
        icon: "FaSyncAlt"
      },
      {
        title: "Policy as Code",
        description: "Enforce security, compliance, and governance through tools like OPA (Open Policy Agent).",
        icon: "FaShieldAlt"
      },
      {
        title: "Modular Templates",
        description: "Pre-built modules for common services to ensure quick, reliable deployments.",
        icon: "FaServer"
      },
      {
        title: "IaC as a Service",
        description: "Fully managed IaC delivery and support, enabling you to focus on your core business.",
        icon: "FaHeadset"
      }
    ],
    
    whyChooseUs: [
      {
        title: "Expertise Across Technologies",
        description: "Our team has hands-on experience with leading tools like Terraform, Ansible, and Pulumi, and across platforms including AWS, Azure, GCP, and VMware.",
        icon: "FaTools"
      },
      {
        title: "Customized Solutions",
        description: "We don't believe in one-size-fits-all. We tailor IaC strategies to your environment, whether you're starting fresh or transitioning from manual configurations.",
        icon: "FaCogs"
      },
      {
        title: "Security and Compliance First",
        description: "We integrate DevSecOps practices, ensuring your infrastructure is compliant, auditable, and protected by policy-as-code.",
        icon: "FaShieldAlt"
      },
      {
        title: "End-to-End Delivery",
        description: "From architecture design to code development, deployment, and ongoing support—we handle it all.",
        icon: "FaRocket"
      }
    ],
    
    faqs: [
      {
        question: "What's the difference between traditional infrastructure management and IaC?",
        answer: "Traditional infrastructure is manually configured, which is time-consuming and error-prone. IaC automates this using scripts or configuration files, making deployments faster, more consistent, and scalable."
      },
      {
        question: "Can IaC work with both cloud and on-prem environments?",
        answer: "Yes. Our IaC solutions support hybrid and multi-cloud environments, allowing you to manage everything from a single source of truth."
      },
      {
        question: "Do I need to know how to code to use your IaC service?",
        answer: "Not at all. We design and manage everything for you. However, we provide training and documentation if your team wishes to take over or collaborate."
      },
      {
        question: "Is Infrastructure as Code secure?",
        answer: "Yes. IaC allows for security policies to be codified and enforced automatically. We implement role-based access control, encryption, and secure secret management as part of our deployments."
      },
      {
        question: "What if I already have some infrastructure deployed manually?",
        answer: "We offer infrastructure state import and refactoring services to bring your existing environments under IaC management without disrupting operations."
      }
    ],
    
    cta: {
      title: "Ready to transform your infrastructure management?",
      description: "Get in touch for a free consultation and discover how Infrastructure as Code can automate and streamline your IT operations.",
      buttonText: "Request a Consultation"
    }
  },
  
  {
    id: 2,
    title: "Network as Code",
    slug: "network-as-code",
    subtitle: "Transform your network management with programmable, automated, and scalable network infrastructure",
    bannerImage: "/assets/images/services/nac-banner.jpg",
    mainImage: "/assets/images/services/nac-main.jpg",
    shortDescription: "Network as Code (NaC) represents the evolution of network management into a programmable, automated, and scalable discipline. Rather than manual, device-by-device configuration, NaC brings DevOps principles to networking—enabling teams to deploy, test, and scale network changes faster, with confidence and consistency.",
    
    overview: `
      <p>Network as Code (NaC) transforms networks from static, device-by-device management into dynamic, code-driven environments. This accelerates service delivery, improves consistency, and enhances visibility and control across your infrastructure.</p>
      
      <p>Whether it's managing WAN, LAN, security policies, or cloud connectivity — NaC brings agility, reliability, and automation to your networking operations.</p>
      
      <p>At GN Solutions, our Network as Code approach brings DevOps-style agility, automation, and intelligence to networking — whether in the cloud, hybrid, or on-prem environments.</p>
    `,
    
    keyFeatures: [
      {
        title: "Infrastructure as Code for Networking",
        description: "Use code to define routers, switches, firewalls, and policies.",
        icon: "FaNetworkWired"
      },
      {
        title: "Vendor-Agnostic Automation",
        description: "Support for multi-vendor environments including Cisco, Juniper, Arista, and more.",
        icon: "FaCogs"
      },
      {
        title: "CI/CD Integration",
        description: "Seamlessly integrate network changes into your DevOps pipelines.",
        icon: "FaSyncAlt"
      },
      {
        title: "Version Control & Auditability",
        description: "Full change tracking using Git and other VCS tools.",
        icon: "FaFileAlt"
      },
      {
        title: "Automated Validation",
        description: "Perform pre-deployment checks, compliance enforcement, and rollback strategies.",
        icon: "FaSearch"
      },
      {
        title: "Event-Driven Automation",
        description: "Respond automatically to incidents using real-time telemetry and triggers.",
        icon: "FaRocket"
      }
    ],
    
    implementationProcess: [
      {
        title: "Discovery & Assessment",
        description: "Document existing network topology and identify automation opportunities.",
        icon: "FaSearch"
      },
      {
        title: "NaC Framework Design",
        description: "Design automation architecture and toolchain selection.",
        icon: "FaNetworkWired"
      },
      {
        title: "Code Development",
        description: "Develop network templates, validation tests, and CI/CD pipelines.",
        icon: "FaCode"
      },
      {
        title: "Testing & Validation",
        description: "Test in simulated environments before production deployment.",
        icon: "FaTools"
      },
      {
        title: "Phased Deployment",
        description: "Gradual rollout with monitoring and performance validation.",
        icon: "FaRocket"
      }
    ],
    
    extendedFeatures: [
      {
        title: "Automated Network Provisioning",
        description: `
          <p>Eliminate manual CLI configurations with network automation:</p>
          <ul>
            <li>Consistent device configuration across your entire network</li>
            <li>Reduced human error and configuration drift</li>
            <li>Faster deployment of new services and policies</li>
            <li>Self-service portals for standardized network changes</li>
          </ul>
        `,
        icon: "FaNetworkWired"
      },
      {
        title: "Network CI/CD Pipelines",
        description: `
          <p>Apply DevOps practices to network changes:</p>
          <ul>
            <li>Pre-deployment validation of network changes</li>
            <li>Automated testing in virtual network environments</li>
            <li>Controlled rollout with monitoring and rollback capabilities</li>
            <li>Complete audit trail of all network deployments</li>
          </ul>
        `,
        icon: "FaSyncAlt"
      },
      {
        title: "Multi-Vendor Network Automation",
        description: `
          <p>Unify management across diverse network equipment:</p>
          <ul>
            <li>Vendor-neutral templates for common configurations</li>
            <li>Support for Cisco, Juniper, Arista, Fortinet, and more</li>
            <li>Abstraction layers that simplify multi-vendor environments</li>
            <li>Consistent policies regardless of underlying hardware</li>
          </ul>
        `,
        icon: "FaCogs"
      },
      {
        title: "Network Digital Twin",
        description: `
          <p>Test changes safely before production deployment:</p>
          <ul>
            <li>Virtual replica of your production network</li>
            <li>Test impact of changes without affecting production</li>
            <li>Simulation-based validation of configuration updates</li>
            <li>What-if analysis for capacity planning and optimization</li>
          </ul>
        `,
        icon: "FaDiagnoses"
      }
    ],
    
    technologies: [
      {
        name: "Ansible Network",
        description: "Network automation platform for multi-vendor environments.",
        icon: "FaNetworkWired"
      },
      {
        name: "Cisco NSO",
        description: "Network orchestration platform for service automation.",
        icon: "FaCogs"
      },
      {
        name: "Terraform",
        description: "Infrastructure as code for network resources.",
        icon: "FaCode"
      },
      {
        name: "Python/Nornir",
        description: "Automation framework for network operations.",
        icon: "FaLaptopCode"
      }
    ],
    
    architecture: {
      title: "Network as Code Architecture",
      image: "/assets/images/services/nac-architecture.jpg",
      description: "End-to-end network automation from code repositories to network devices",
      stack: [
        {
          title: "Network Security",
          description: "Firewalls, IDS/IPS, and VPN services.",
          icon: "FaShieldAlt"
        },
        {
          title: "Wireless Networking",
          description: "WLAN and access points configuration.",
          icon: "FaRocket"
        },
        {
          title: "Core Networking",
          description: "Routers, switches, and SD-WAN.",
          icon: "FaNetworkWired"
        },
        {
          title: "Monitoring Tools",
          description: "Real-time analytics and dashboards.",
          icon: "FaChartLine"
        }
      ]
    },
    
    benefits: [
      {
        title: "Faster Time to Delivery",
        description: "Implement network changes in hours, not days.",
        icon: "FaRocket"
      },
      {
        title: "Operational Consistency",
        description: "Eliminate configuration drift and manual errors.",
        icon: "FaCogs"
      },
      {
        title: "Enhanced Uptime",
        description: "Proactive validations and test-driven deployments reduce downtime.",
        icon: "FaChartLine"
      },
      {
        title: "Full Visibility",
        description: "Gain control over every change, with traceability and reporting.",
        icon: "FaSearch"
      },
      {
        title: "Reduced Costs",
        description: "Save on operational overhead and rework through automation.",
        icon: "FaChartLine"
      },
      {
        title: "Empowered Teams",
        description: "Shift engineers from repetitive tasks to high-value strategic work.",
        icon: "FaRocket"
      }
    ],
    
    testimonials: [
      {
        company: "Retail Chain",
        result: "Reduced network change implementation time by 85% while eliminating configuration errors that previously caused 3-4 outages per quarter.",
        icon: "FaNetworkWired",
        color: "linear-gradient(135deg, #301934, rgb(112, 5, 131))",
        link: "/case-studies/retail-nac"
      },
      {
        company: "Financial Services",
        result: "Achieved 100% compliance with regulatory requirements through automated validation and deployment of network security policies.",
        icon: "FaShieldAlt",
        color: "linear-gradient(135deg, #f08b0a, rgba(110, 71, 20, 0.7)",
        link: "/case-studies/financial-nac"
      },
      {
        company: "Global Manufacturing",
        result: "Successfully unified management of 2,500+ network devices across 35 locations, reducing operational costs by 40%.",
        icon: "FaChartLine",
        color: "linear-gradient(135deg, #000000, rgb(165, 162, 162))",
        link: "/case-studies/manufacturing-nac"
      }
    ],
    
    solutions: [
      {
        title: "NaC Framework Design",
        description: "Custom architecture for integrating NaC into your existing environment—toolchain selection, workflows, and policies.",
        icon: "FaNetworkWired"
      },
      {
        title: "Automated Provisioning",
        description: "Use tools like Ansible, Terraform, or Nornir to automate switch, router, firewall, and SD-WAN configuration.",
        icon: "FaCogs"
      },
      {
        title: "CI/CD for Networking",
        description: "Implement pipelines to test and deploy network changes using Jenkins, GitLab CI, or GitHub Actions.",
        icon: "FaSyncAlt"
      },
      {
        title: "Digital Twin & Simulation",
        description: "Build EVE-NG or container-based test environments to validate changes before production.",
        icon: "FaDiagnoses"
      },
      {
        title: "Event-Driven Automation",
        description: "Integrate with Kafka, Fluentd, or Prometheus to enable real-time monitoring and reactive workflows.",
        icon: "FaRocket"
      },
      {
        title: "Configuration Drift Detection",
        description: "Real-time detection and correction of unauthorized changes to maintain network consistency.",
        icon: "FaSearch"
      }
    ],
    
    whyChooseUs: [
      {
        title: "Deep Network Expertise",
        description: "Our team brings specialized knowledge across networking technologies, automation frameworks, and DevOps practices.",
        icon: "FaTools"
      },
      {
        title: "Vendor-Neutral Approach",
        description: "We design solutions that work with your existing infrastructure, regardless of vendor, providing flexibility and avoiding lock-in.",
        icon: "FaNetworkWired"
      },
      {
        title: "Security-First Design",
        description: "Security is integrated throughout our NaC implementations, ensuring compliance, auditing capabilities, and robust access controls.",
        icon: "FaShieldAlt"
      },
      {
        title: "Proven Methodology",
        description: "Our phased implementation approach minimizes risk and ensures successful adoption of network automation in your organization.",
        icon: "FaRocket"
      }
    ],
    
    faqs: [
      {
        question: "Is Network as Code suitable for small and medium businesses?",
        answer: "Yes. NaC can be scaled to fit the needs of SMBs, offering cost-effective automation and enhanced reliability without enterprise-level complexity."
      },
      {
        question: "What kind of networks can be automated with NaC?",
        answer: "LAN, WAN, SD-WAN, data center networks, firewalls, VPNs, and even cloud-native networking — all can be managed with NaC."
      },
      {
        question: "What platform tools do you use to implement NaC?",
        answer: "We use a combination of open-source and commercial tools, such as Ansible, Terraform, Python, NETCONF/RESTCONF, Jenkins, GitHub, Kafka, cloud-native SDKs, and more — across vendors like Cisco, Juniper, Arista, Palo Alto, etc."
      },
      {
        question: "How long does a typical NaC implementation take?",
        answer: "From weeks to a few months depending on scope. We follow a phased rollout — starting with pilot automation and scaling gradually."
      },
      {
        question: "Will you help train our internal team?",
        answer: "Yes. We provide complete enablement: workshops, documentation, playbooks, and hands-on training for your teams."
      },
      {
        question: "What's the difference between Network as Code and traditional network automation?",
        answer: "Traditional automation may use scripts or tools to push changes, but NaC introduces version control, testing, modular code, and repeatable deployments — just like in software development."
      }
    ],
    
    cta: {
      title: "Ready to modernize your network operations?",
      description: "Contact us today to discuss how Network as Code can bring agility, reliability, and efficiency to your network infrastructure.",
      buttonText: "Schedule a Network Assessment"
    }
  },
  
  {
    id: 3,
    title: "Platform as Code",
    slug: "platform-as-code",
    subtitle: "Define, provision, and manage entire technology platforms using code",
    bannerImage: "/assets/images/services/paac-banner.jpg",
    mainImage: "/assets/images/services/paac-main.jpg",
    shortDescription: "Platform as Code (PaaC) as a Service enables organizations to define, provision, and manage entire technology platforms using code. Unlike Infrastructure as Code (IaC), PaaC extends to include the entire application platform stack—services, runtime environments, network configurations, security policies, monitoring, CI/CD pipelines, and more.",
    
    overview: `
      <p>At GN Solutions, our PaaC as a Service offering abstracts the complexity of building and operating cloud-native platforms, empowering businesses to accelerate innovation, ensure consistency, and reduce operational overhead.</p>
      
      <p>PaaC brings the principles of infrastructure as code to the entire application platform, enabling you to define, version, and automate your complete technology stack—from infrastructure to applications and everything in between.</p>
      
      <p>By codifying your entire platform, you gain unprecedented agility, consistency, and governance across all environments, from development to production.</p>
    `,
    
    keyFeatures: [
      {
        title: "Declarative Platform Definitions",
        description: "Define full-stack platform configurations using YAML, JSON, or HCL code.",
        icon: "FaCode"
      },
      {
        title: "Multi-Cloud Support",
        description: "Deploy across AWS, Azure, GCP, or on-premise environments with unified code templates.",
        icon: "FaCloud"
      },
      {
        title: "Automated Provisioning",
        description: "Auto-provision infrastructure, services, and applications with full lifecycle management.",
        icon: "FaRocket"
      },
      {
        title: "Security and Compliance as Code",
        description: "Embed governance, access controls, and compliance checks directly into platform code.",
        icon: "FaShieldAlt"
      },
      {
        title: "Built-In CI/CD Integration",
        description: "Integrated with Jenkins, GitHub Actions, GitLab CI, or ArgoCD for continuous delivery.",
        icon: "FaSyncAlt"
      },
      {
        title: "Observability as Code",
        description: "Deploy monitoring, logging, and alerting configurations automatically.",
        icon: "FaChartLine"
      }
    ],
    
    implementationProcess: [
      {
        title: "Discovery & Assessment",
        description: "Analyze current platforms and define target state architecture.",
        icon: "FaSearch"
      },
      {
        title: "Blueprint Design",
        description: "Create platform templates and automation workflows.",
        icon: "FaCode"
      },
      {
        title: "MVP Implementation",
        description: "Build initial platform modules with core functionality.",
        icon: "FaServer"
      },
      {
        title: "Integration & Testing",
        description: "Connect with CI/CD pipelines and validate platform deployments.",
        icon: "FaSyncAlt"
      },
      {
        title: "Scaling & Optimization",
        description: "Extend platform capabilities and refine automation.",
        icon: "FaRocket"
      }
    ],
    
    extendedFeatures: [
      {
        title: "Full-Stack Platform Automation",
        description: `
          <p>Automate your entire technology stack with comprehensive platform templates:</p>
          <ul>
            <li>Infrastructure components (compute, storage, networking)</li>
            <li>Middleware and services (databases, message queues, caches)</li>
            <li>Application runtime environments (containers, serverless functions)</li>
            <li>Security configurations and compliance policies</li>
            <li>Monitoring, logging, and alerting systems</li>
          </ul>
        `,
        icon: "FaServer"
      },
      {
        title: "Developer Self-Service",
        description: `
          <p>Empower developers with self-service platform capabilities:</p>
          <ul>
            <li>Pre-approved, compliant environment templates</li>
            <li>On-demand provisioning of development resources</li>
            <li>Built-in guardrails for security and cost management</li>
            <li>Automated delivery pipelines for code deployment</li>
          </ul>
        `,
        icon: "FaRocket"
      },
      {
        title: "Multi-Environment Consistency",
        description: `
          <p>Ensure identical configurations across all environments:</p>
          <ul>
            <li>Eliminate "works on my machine" problems</li>
            <li>Reduce environment-specific bugs and issues</li>
            <li>Streamline promotions from development to production</li>
            <li>Simplified disaster recovery with reproducible environments</li>
          </ul>
        `,
        icon: "FaSyncAlt"
      },
      // {
      //   title: "Platform Governance",
      //   description: `
      //     <p>Enforce standards and compliance through code:</p>
      //     <ul>
      //       <li>Centralized policy management across all platform components</li>
      //     </ul>
      //   `,
      //   icon: "FaShieldAlt"
      // }
    ],
  },
]

export default servicesData;