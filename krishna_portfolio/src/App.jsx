import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, MapPin, Briefcase, GraduationCap, BookOpen, Code, Award, ChevronRight, ChevronDown } from "lucide-react";
import { useState } from "react";

const ResumeWebsite = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('https://krishnakky.com/blog/wp-json/contact/v1/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({ type: 'success', message: result.message });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus({ type: 'error', message: result.message || 'Something went wrong' });
      }
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };
  const workExperience = [
    {
      title: "Senior Software Engineer",
      company: "AirAsia India",
      period: "10/2022 - Current",
      achievements: [
        "Architected and scaled microservices for AirAsia Move platform processing 1.5K+ requests per second (5.4M+ hourly, 1.3B+ daily), serving millions of travelers across flight bookings, hotels, and travel services",
        "Refactored legacy services applying SOLID design principles and modern architectural patterns, improving code maintainability and system performance",
        "Developed multiple new microservices to fulfill critical business requirements including price-slash features, fare-summary for post-booking ancillaries, and flight change functionality",
        "Optimized system performance by eliminating memory leaks using JVisualVM and Apache JMeter profiling tools",
        "Migrated infrastructure to Google Cloud Platform by transferring image assets from external providers to in-house GCP buckets"
      ]
    },
    {
      title: "Senior Java Developer",
      company: "Kotak Securities",
      period: "10/2020 - 09/2022",
      achievements: [
        "Led development team of 4+ developers for 6+ months, driving successful delivery of enterprise HRMS platform serving thousands of Kotak Securities employees",
        "Architected comprehensive security framework developing and testing Security Service modules to enable robust authentication and authorization",
        "Designed and implemented RESTful API ecosystem based on complex business requirements for HR operations and employee management",
        "Developed full-stack solutions by creating Angular components and integrating them seamlessly with backend microservices"
      ]
    },
    {
      title: "Product Engineer",
      company: "BottomLine Technologies",
      period: "12/2019 - 09/2020",
      achievements: [
        "Developed innovative API comparison utility framework to display differences between multiple API versions",
        "Built data streaming solutions by creating Python scripts for Kafka server integration",
        "Designed and implemented RESTful APIs based on specific business requirements for the BankSight platform"
      ]
    },
    {
      title: "Java API Developer",
      company: "Oracle India(OFSS)",
      period: "01/2017 - 11/2019",
      achievements: [
        "Engineered OpenBanking-compliant APIs for major financial institutions including Arbuthnot Banking Group and First Bank of Nigeria",
        "Developed RESTful APIs based on PSD2 specifications for Bank of Volleta, implementing secure resource access using OAuth2",
        "Implemented enterprise-grade security solutions using Spring Security framework with OAuth2 and JWT tokens"
      ]
    },
    {
      title: "CoFounder & Product Developer",
      company: "Multi-vendor eCommerce Startup",
      period: "02/2014 - 05/2017",
      achievements: [
        "Co-founded and architected multi-vendor eCommerce platform from concept to acquisition, serving 80+ vendors while pursuing Master's degree",
        "Built and scaled distributed systems architecture handling multiple vendor integrations, payment gateways, and real-time inventory management",
        "Developed full-stack eCommerce solution using Java backend services with Spring Framework"
      ]
    }
  ];

  const keyAchievements = [
    "Co-founded and successfully exited multi-vendor eCommerce platform: serving 80+ vendors while pursuing Master's degree",
    "Led cross-functional teams of 4+ developers for 6+ months at Kotak Securities, driving successful product delivery",
    "Architected and scaled high-traffic microservices for AirAsia Move (OTA platform): Processing 1.5K+ requests per second",
    "Designed and implemented enterprise microservices solutions for leading financial institutions including Kotak Securities, Bottomline Technologies, and Oracle Financial Services",
    "Engineered APIs compliant with OpenBanking standards for major financial institutions, ensuring regulatory compliance and security",
    "Optimized application performance by implementing GraalVM and eliminating memory leaks"
  ];

  const technicalSkills = [
    "Java", "Spring Framework", "Microservices", "AWS", "GCP", "Docker", "Kubernetes", 
    "CI/CD", "REST API", "OpenBanking", "Agile SCRUM", "Python", "TensorFlow", "JMeter",
    "JVisualVM", "GraalVM", "Angular", "Kafka", "OAuth2", "JWT", "SQL", "NoSQL"
  ];

  const education = [
    {
      degree: "M.Tech: Software Engineering",
      institution: "Maharishi University Of Information Technology",
      year: "06/2017",
      location: "Lucknow"
    },
    {
      degree: "B.Tech: Computer Science & Engineering",
      institution: "Dr. A.I.T.H",
      year: "05/2015",
      location: "Kanpur"
    }
  ];

  const certifications = [
    "Oracle Certified Professional: Oracle Certified Java Programmer (Java 8)",
    "University of Alberta: Software architecture and design"
  ];

  return (
    <div className="font-sans bg-gray-50 text-gray-800">
      {/* Navigation */}
      <nav className="fixed w-full bg-white shadow-md z-50">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="text-xl font-bold text-indigo-700">KKY</div>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-600 hover:text-indigo-600 transition-colors">About</a>
            <a href="#experience" className="text-gray-600 hover:text-indigo-600 transition-colors">Experience</a>
            <a href="#achievements" className="text-gray-600 hover:text-indigo-600 transition-colors">Achievements</a>
            <a href="#skills" className="text-gray-600 hover:text-indigo-600 transition-colors">Skills</a>
            <a href="#education" className="text-gray-600 hover:text-indigo-600 transition-colors">Education</a>
          </div>
          <a href="#contact" className="hidden md:block bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-indigo-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Krishna Kumar Yadav</h1>
            <h2 className="text-2xl md:text-3xl text-indigo-700 font-medium mb-6">Senior Software Engineer & Technology Leader</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
              7.9+ years of experience in developing distributed applications and microservices, with expertise in building scalable systems for fintech and travel domains
            </p>
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <div className="flex items-center">
                <Phone className="text-indigo-600 mr-2" size={20} />
                <span>+91 9889897374</span>
              </div>
              <div className="flex items-center">
                <Mail className="text-indigo-600 mr-2" size={20} />
                <span>krishnakky121@gmail.com</span>
              </div>
              <div className="flex items-center">
                <Linkedin className="text-indigo-600 mr-2" size={20} />
                <a href="https://www.linkedin.com/in/krishnakky999/" className="hover:text-indigo-700 transition-colors">linkedin.com/in/krishnakky999</a>
              </div>
            </div>
            <a href="#about" className="inline-flex items-center bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors">
              Learn More
              <ChevronDown className="ml-2" size={20} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="md:col-span-1"
            >
              <div className="bg-indigo-100 rounded-xl p-6 sticky top-24">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Briefcase className="text-indigo-600 mr-2" size={24} />
                  Professional Summary
                </h3>
                <p className="text-gray-600">
                  Over 7.9 years of experience in developing distributed applications and microservices, including founding and scaling a multi-vendor eCommerce platform serving 80+ vendors, which was successfully acquired. Proficient in distributed systems, Agile SCRUM methodology, and hands-on with Spring Framework and microservices architecture.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="md:col-span-2"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Professional Profile</h2>
              
              <div className="mb-10">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Award className="text-indigo-600 mr-2" size={24} />
                  Key Expertise
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-5 rounded-lg border border-gray-100">
                    <h4 className="font-medium text-gray-900 mb-2">Distributed Systems</h4>
                    <p className="text-gray-600">Architected and scaled high-traffic microservices processing 1.5K+ requests per second, handling billions of transactions daily for AirAsia Move platform.</p>
                  </div>
                  <div className="bg-gray-50 p-5 rounded-lg border border-gray-100">
                    <h4 className="font-medium text-gray-900 mb-2">Financial Technology</h4>
                    <p className="text-gray-600">Engineered OpenBanking-compliant APIs for major financial institutions, ensuring regulatory compliance and security standards specific to banking industry.</p>
                  </div>
                  <div className="bg-gray-50 p-5 rounded-lg border border-gray-100">
                    <h4 className="font-medium text-gray-900 mb-2">Cloud Infrastructure</h4>
                    <p className="text-gray-600">Expertise in AWS, GCP, Docker, and Kubernetes with successful migration of infrastructure to Google Cloud Platform, improving performance and reducing costs.</p>
                  </div>
                  <div className="bg-gray-50 p-5 rounded-lg border border-gray-100">
                    <h4 className="font-medium text-gray-900 mb-2">AI & Machine Learning</h4>
                    <p className="text-gray-600">Developing an AI-powered trading system with end-to-end ML pipeline, ensemble models, and risk management framework using Python, TensorFlow, and GCP.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Achievements */}
      <section id="achievements" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Achievements</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">Notable accomplishments throughout my professional journey</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {keyAchievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border-l-4 border-indigo-500"
              >
                <p className="text-gray-700">{achievement}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Experience */}
      <section id="experience" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Professional Experience</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">7.9+ years of progressive experience in software engineering and leadership roles</p>
          </motion.div>

          <div className="relative">
            {/* Timeline line for desktop */}
            <div className="hidden md:block absolute left-0 top-0 h-full w-0.5 bg-indigo-200" style={{ left: '24px' }}></div>
            
            {workExperience.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mb-10 md:pl-16 relative"
              >
                {/* Timeline dot for desktop */}
                <div className="hidden md:block absolute w-4 h-4 rounded-full bg-indigo-600 border-4 border-white" style={{ left: '20px', top: '12px' }}></div>
                
                <div className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow border border-gray-100">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
                      <p className="text-indigo-600 font-medium">{job.company}</p>
                    </div>
                    <span className="text-gray-500 mt-1 md:mt-0">{job.period}</span>
                  </div>
                  
                  <ul className="space-y-2">
                    {job.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start">
                        <ChevronRight className="text-indigo-600 mt-1 mr-2 flex-shrink-0" size={16} />
                        <span className="text-gray-700">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Trading Project */}
      <section className="py-16 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="md:flex">
              <div className="md:w-1/2 p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">AI-Powered Trading System</h2>
                <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium mb-4">In Development, 2024-Present</span>
                <p className="text-gray-600 mb-6">
                  Architecting and developing a comprehensive end-to-end machine learning system for automated stock market prediction and algorithmic trading with real-time execution capabilities.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-1">8-Layer Architecture</h3>
                    <p className="text-gray-600 text-sm">Microservices architecture for scalability and maintainability</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-1">Ensemble Models</h3>
                    <p className="text-gray-600 text-sm">Combining Random Forest, XGBoost, LSTM, and SVM algorithms</p>
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Technical Highlights</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <ChevronRight className="text-indigo-600 mt-1 mr-2 flex-shrink-0" size={16} />
                    <span className="text-gray-700">Designed sophisticated data ingestion pipeline processing raw market data through automated cleaning</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="text-indigo-600 mt-1 mr-2 flex-shrink-0" size={16} />
                    <span className="text-gray-700">Built comprehensive feature engineering system generating technical indicators and custom market signals</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="text-indigo-600 mt-1 mr-2 flex-shrink-0" size={16} />
                    <span className="text-gray-700">Developed multi-strategy trading framework implementing Mean Reversion, Momentum, and Volatility-based strategies</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="text-indigo-600 mt-1 mr-2 flex-shrink-0" size={16} />
                    <span className="text-gray-700">Architected robust risk management system featuring intelligent position sizing algorithms and dynamic stop-loss mechanisms</span>
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2 bg-indigo-600 p-8 flex items-center justify-center">
                <div className="text-white max-w-md">
                  <h3 className="text-xl font-bold mb-4">Technical Architecture</h3>
                  <p className="mb-4">8-layer microservices architecture including:</p>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      <span>Data Ingestion & Feature Processing</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      <span>Model Training & Strategy Implementation</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      <span>Risk Management & Execution Layer</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      <span>Performance Monitoring & Deployment Pipeline</span>
                    </div>
                  </div>
                  <div className="mt-8 bg-indigo-700 rounded-lg p-4">
                    <h4 className="font-bold mb-2 flex items-center">
                      <Code className="mr-2" size={20} />
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-indigo-800 px-3 py-1 rounded-full text-sm">Python</span>
                      <span className="bg-indigo-800 px-3 py-1 rounded-full text-sm">TensorFlow</span>
                      <span className="bg-indigo-800 px-3 py-1 rounded-full text-sm">GCP</span>
                      <span className="bg-indigo-800 px-3 py-1 rounded-full text-sm">Kubernetes</span>
                      <span className="bg-indigo-800 px-3 py-1 rounded-full text-sm">Docker</span>
                      <span className="bg-indigo-800 px-3 py-1 rounded-full text-sm">Apache Kafka</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Technical Skills</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">Comprehensive expertise across multiple technology domains</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <Code className="text-indigo-600 mr-2" size={24} />
                Core Competencies
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {technicalSkills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="bg-gray-50 text-gray-700 px-4 py-2 rounded-lg hover:bg-indigo-50 hover:text-indigo-700 transition-colors cursor-default"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <BookOpen className="text-indigo-600 mr-2" size={24} />
                Education & Certifications
              </h3>
              
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="mb-6 last:mb-0"
                >
                  <div className="flex">
                    <GraduationCap className="text-indigo-600 mt-1 mr-3 flex-shrink-0" size={20} />
                    <div>
                      <h4 className="font-bold text-gray-900">{edu.degree}</h4>
                      <p className="text-gray-600">{edu.institution}</p>
                      <p className="text-gray-500 text-sm mt-1">{edu.year} • {edu.location}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
              
              <div className="mt-6">
                <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                  <Award className="text-indigo-600 mr-2" size={18} />
                  Certifications
                </h4>
                <ul className="space-y-2">
                  {certifications.map((cert, index) => (
                    <li key={index} className="flex items-start">
                      <ChevronRight className="text-indigo-600 mt-1 mr-2 flex-shrink-0" size={16} />
                      <span className="text-gray-700">{cert}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">I'm currently open to new opportunities and would love to hear from you</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-800 p-6 rounded-xl">
              <div className="flex items-center mb-6">
                <MapPin className="text-indigo-400 mr-3" size={24} />
                <div>
                  <h3 className="font-bold text-lg">Location</h3>
                  <p className="text-gray-300">Based in India, available for remote opportunities worldwide</p>
                </div>
              </div>
              
              <div className="flex items-center mb-6">
                <Mail className="text-indigo-400 mr-3" size={24} />
                <div>
                  <h3 className="font-bold text-lg">Email</h3>
                  <p className="text-gray-300">krishnakky121@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Linkedin className="text-indigo-400 mr-3" size={24} />
                <div>
                  <h3 className="font-bold text-lg">LinkedIn</h3>
                  <a href="https://www.linkedin.com/in/krishnakky999/" className="text-gray-300 hover:text-indigo-400 transition-colors">linkedin.com/in/krishnakky999</a>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-xl">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Name</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Message</label>
                  <textarea 
                    rows="4"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="How can I help you?"
                  ></textarea>
                </div>
                
                {submitStatus && (
                  <div className={`p-3 rounded-lg ${
                    submitStatus.type === 'success' 
                      ? 'bg-green-600 text-white' 
                      : 'bg-red-600 text-white'
                  }`}>
                    {submitStatus.message}
                  </div>
                )}
                
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full font-medium py-2 px-4 rounded-lg transition-colors ${
                    isSubmitting 
                      ? 'bg-gray-600 cursor-not-allowed' 
                      : 'bg-indigo-600 hover:bg-indigo-700'
                  } text-white`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-950 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Krishna Kumar Yadav. All rights reserved.
          </p>
          <p className="text-gray-500 mt-2 text-sm">
            Designed with precision for technical excellence
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ResumeWebsite;