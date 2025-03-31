import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/SoftwareAsCode.css"; // Import CSS file for styling

const SoftwareAsCodePage = () => {
  return (
    <div className="container-fluid bg-dark text-light">
      {/* Hero Section with Background Image */}
      <div className="hero-section d-flex align-items-center justify-content-center text-center">
        <div className="overlay"></div> {/* Dark Overlay for better contrast */}
        <div className="hero-content">
          <h1 className="fw-bold display-4">Software as Code</h1>
          <p className="lead mt-3">
            Automate, streamline, and optimize your software infrastructure using **code-based** principles.
          </p>
          <a href="#introduction" className="btn btn-light btn-lg fw-bold mt-3">Learn More</a>
        </div>
      </div>

      {/* Introduction Section */}
      <div id="introduction" className="container text-center py-5">
        <h2 className="fw-bold text-uppercase text-primary">What is Software as Code?</h2>
        <p className="lead mt-3">
          <strong>Software as Code (SaC)</strong> automates software configurations, deployments, and environments through code,
          ensuring **scalability, security, and efficiency** while reducing human errors.
        </p>
      </div>

      {/* Introduction Section */}
      <div id="introduction" className="container text-center py-5">
        <h2 className="fw-bold text-uppercase text-primary">What is Software as Code?</h2>
        <p className="lead mt-3">
          <strong>Software as Code (SaC)</strong> automates software configurations, deployments, and environments through code,
          ensuring **scalability, security, and efficiency** while reducing human errors.
        </p>
      </div>

      {/* Technologies & Tools */}
      <div className="container my-5">
        <h2 className="text-center text-uppercase fw-bold text-primary">Technologies & Tools</h2>
        <div className="row mt-4">
          {["Terraform", "Ansible", "Docker", "Kubernetes", "Jenkins", "GitLab CI/CD"].map((tool, index) => (
            <div key={index} className="col-md-4 mb-3">
              <div className="card bg-primary text-light text-center p-3 shadow-lg">
                <h4 className="fw-bold">{tool}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Use Cases */}
      <div className="container my-5">
        <h2 className="text-center text-uppercase fw-bold text-primary">Use Cases</h2>
        <div className="row mt-4">
          {[
            { title: "Automated Deployments", desc: "Streamline software release processes with automation." },
            { title: "Infrastructure as Code (IaC)", desc: "Define and manage infrastructure using code." },
            { title: "Configuration Management", desc: "Maintain consistency across multiple environments." },
            { title: "Continuous Integration & Delivery", desc: "Enhance DevOps efficiency with automated testing and deployment." }
          ].map((useCase, index) => (
            <div key={index} className="col-md-6 mb-4">
              <div className="card bg-light text-dark p-3 shadow">
                <h5 className="fw-bold">{useCase.title}</h5>
                <p>{useCase.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Implementation Steps */}
      <div className="container my-5">
        <h2 className="text-center text-uppercase fw-bold text-primary">Implementation Steps</h2>
        <ul className="list-group list-group-flush text-light">
          {[
            "Define requirements and objectives",
            "Choose the right tools (Terraform, Ansible, Docker, etc.)",
            "Write infrastructure and configuration code",
            "Test and validate the setup",
            "Deploy and monitor changes",
            "Iterate and improve continuously"
          ].map((step, index) => (
            <li key={index} className="list-group-item bg-dark text-light">
              <strong>Step {index + 1}:</strong> {step}
            </li>
          ))}
        </ul>
      </div>

      {/* Key Benefits */}
      <div className="container my-5">
        <h2 className="text-center text-uppercase fw-bold text-primary">Key Benefits</h2>
        <div className="row mt-4">
          {[
            { icon: "⚡", title: "Automation", text: "Streamlines software deployment and updates." },
            { icon: "✅", title: "Consistency", text: "Ensures uniform configurations across environments." },
            { icon: "📜", title: "Version Control", text: "Tracks changes and rollbacks efficiently." },
            { icon: "🔐", title: "Security", text: "Enforces policies through automation." },
            { icon: "🚀", title: "Faster Deployment", text: "Speeds up the software lifecycle." },
          ].map((benefit, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card bg-primary text-light text-center p-4 shadow-lg">
                <h3 className="fw-bold">{benefit.icon} {benefit.title}</h3>
                <p className="mt-2">{benefit.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Success Stories */}
      <div className="container my-5">
        <h2 className="text-center text-uppercase fw-bold text-primary">Success Stories</h2>
        <div className="row mt-4">
          {[
            { company: "Netflix", result: "Uses IaC to manage thousands of cloud instances efficiently." },
            { company: "Spotify", result: "Automated deployments reduced downtime by 80%." },
            { company: "Airbnb", result: "CI/CD pipelines speed up feature releases." },
          ].map((story, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card bg-light text-dark p-3 shadow">
                <h5 className="fw-bold">{story.company}</h5>
                <p>{story.result}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container my-5">
        <h2 className="text-center text-uppercase fw-bold text-primary">Frequently Asked Questions</h2>
        <div className="accordion mt-4" id="faqAccordion">
          {[
            { question: "What is Software as Code?", answer: "SaC defines software environments, configurations, and infrastructure using code to automate development, deployment, and maintenance." },
            { question: "What are the benefits of SaC?", answer: "It improves automation, security, and consistency while reducing manual errors and speeding up software delivery." },
            { question: "How does it improve DevOps efficiency?", answer: "By automating software configurations and deployments, SaC enhances collaboration, reduces operational overhead, and accelerates development cycles." },
          ].map((faq, index) => (
            <div key={index} className="accordion-item bg-dark border-0">
              <h2 className="accordion-header" id={`heading${index}`}>
                <button
                  className="accordion-button bg-primary text-light fw-bold"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${index}`}
                  aria-expanded="false"
                >
                  {faq.question}
                </button>
              </h2>
              <div id={`collapse${index}`} className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div className="accordion-body bg-light text-dark">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SoftwareAsCodePage;
