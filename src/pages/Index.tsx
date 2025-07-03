import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { 
  Github, 
  Linkedin, 
  Sun, 
  Moon, 
  ArrowDown, 
  ArrowUp,
  Mail,
  MapPin,
  GraduationCap,
  Calendar,
  Download
} from 'lucide-react';
import { useScrollAnimations, useActiveSection } from '@/components/ScrollAnimations';
import { ParticleBackground } from '@/components/ParticleBackground';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const [isDark, setIsDark] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const { toast } = useToast();
  const navigate = useNavigate();

  // Initialize scroll animations and active section tracking
  useScrollAnimations();
  useActiveSection();

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.email || !contactForm.message) {
      toast({
        title: "Please fill all fields",
        description: "Name, email, and message are required.",
        variant: "destructive"
      });
      return;
    }
    
    const subject = encodeURIComponent("Message from Portfolio");
    const body = encodeURIComponent(`Name: ${contactForm.name}\nEmail: ${contactForm.email}\nMessage: ${contactForm.message}`);
    const mailtoLink = `mailto:talarimanoj2005@gmail.com?subject=${subject}&body=${body}`;
    
    window.location.href = mailtoLink;
    
    toast({
      title: "Opening Mail Client",
      description: "Your default mail client will open with the pre-filled message.",
    });
    
    setContactForm({ name: '', email: '', message: '' });
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('talarimanoj2005@gmail.com');
    toast({
      title: "Email Copied!",
      description: "talarimanoj2005@gmail.com copied to clipboard",
    });
  };

  const downloadResume = () => {
    window.open('https://drive.google.com/uc?export=download&id=1zFB4hOwx6ZhXKorwV9_hLZB0or0iWWL_', '_blank');
  };

  const skills = {
    Frontend: ['HTML', 'CSS', 'JavaScript'],
    Backend: ['Python', 'Java'],
    Database: ['MySQL'],
    Tools: ['VS Code', 'Git', 'GitHub', 'Eclipse']
  };

  const projects = [
    {
      title: "Online Food Delivery Website",
      description: "Full-featured food delivery platform with cart system, UPI payments, table reservations, and donation system.",
      tech: ["HTML", "CSS", "JavaScript", "Python", "MySQL"],
      features: ["Cart System", "UPI Payments", "Table Reservations", "Donation System"],
      githubLink: "https://github.com/Manoj9346/FOOD_FLEX",
      liveLink: "https://food-flex.vercel.app/"
    },
    {
      title: "Online Learning Platform",
      description: "Interactive web-based learning platform with clean navigation and student-friendly design.",
      tech: ["HTML", "CSS", "JavaScript", "Python"],
      features: ["Interactive Interface", "Clean Navigation", "Student-friendly Design"],
      githubLink: "https://github.com/Manoj9346/Learners_Acadamy",
      liveLink: "https://learners-acadamy.vercel.app/"
    }
  ];

  const internships = [
    {
      title: "Web Development Intern",
      company: "Eduskills",
      duration: "45 days (Virtual)",
      description: "Worked on frontend and backend using HTML, CSS, JS, Python, MySQL. Built and managed mini web projects.",
      skills: ["Frontend Development", "Backend Development", "Database Management"]
    },
    {
      title: "Employability & Job-Ready Skills Intern",
      company: "Eduskills", 
      duration: "45 days (Virtual)",
      description: "Trained in resume building, interview skills, communication. Gained teamwork & professional readiness.",
      skills: ["Resume Building", "Interview Skills", "Communication", "Teamwork"]
    }
  ];

  const certifications = [
    "Virtual Internship in Web Development – Eduskills",
    "Employability Skills Internship – Eduskills", 
    "Python Course – CodeTantra"
  ];

  const blogPosts = [
    {
      id: "food-delivery-app",
      title: "How I Built My Food Delivery App",
      date: "2024-06-15",
      summary: "A detailed walkthrough of building a full-stack food delivery platform with HTML, CSS, JavaScript, Python, and MySQL."
    },
    {
      id: "fullstack-learning",
      title: "Learning Full-Stack Development in 2024",
      date: "2024-06-10", 
      summary: "My journey and insights on mastering both frontend and backend technologies as a computer science student."
    },
    {
      id: "building-projects",
      title: "Building Projects to Get Hired Faster",
      date: "2024-06-05",
      summary: "Essential tips and strategies for creating impressive projects that stand out to recruiters and hiring managers."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Enhanced Navigation */}
      <nav className="fixed top-0 w-full nav-blur z-50 transition-all duration-300">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-primary text-glow">MKT</div>
          <div className="hidden md:flex space-x-6">
            {['about', 'skills', 'projects', 'blog', 'internships', 'contact'].map((section) => (
              <button
                key={section}
                data-section={section}
                onClick={() => scrollToSection(section)}
                className="capitalize hover:text-primary transition-all duration-300 relative"
              >
                {section}
              </button>
            ))}
          </div>
          <Button 
            onClick={toggleTheme} 
            variant="outline" 
            size="sm"
            className="glow-button"
          >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
        </div>
      </nav>

      {/* Enhanced Hero Section */}
      <section className="min-h-screen flex items-center justify-center gradient-bg relative overflow-hidden">
        <ParticleBackground />
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="animate-fade-in">
            <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-primary/20 flex items-center justify-center text-4xl font-bold text-white border-4 border-primary profile-glow">
              MKT
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white text-glow">
              Manoj Kumar Talari
            </h1>
            <p className="text-xl md:text-2xl mb-2 text-white/90">
              Full-Stack Web Developer (Fresher)
            </p>
            <p className="text-lg mb-8 text-white/80 max-w-2xl mx-auto">
              Crafting clean code with creative passion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => scrollToSection('projects')}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white glow-button"
              >
                See My Projects
              </Button>
              <Button 
                onClick={() => scrollToSection('contact')}
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-accent glow-button pulse-glow"
              >
                Contact Me
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-white" />
        </div>
      </section>

      {/* Enhanced About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="animate-on-scroll">
            <h2 className="text-4xl font-bold text-center mb-12 text-primary section-title">About Me</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-on-scroll">
                <p className="text-lg mb-6 leading-relaxed">
                  Final-year BTech student specializing in full-stack development with expertise in HTML, CSS, JavaScript, Python, and MySQL. Passionate about building scalable web applications. Seeking an opportunity to apply my technical skills in a dynamic work environment.
                </p>
                <Button 
                  onClick={downloadResume}
                  className="bg-primary hover:bg-primary/90 text-white glow-button"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download Resume
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: MapPin, title: "Location", detail: "Andhra Pradesh, India" },
                  { icon: GraduationCap, title: "College", detail: "QIS College of Engineering" },
                  { icon: Calendar, title: "Graduation", detail: "2026" },
                  { icon: Mail, title: "Email", detail: "talarimanoj2005@gmail.com" }
                ].map((item, index) => (
                  <Card key={index} className="text-center skill-card animate-on-scroll">
                    <CardContent className="p-4">
                      <item.icon className="h-8 w-8 mx-auto mb-2 text-primary" />
                      <p className="font-semibold">{item.title}</p>
                      <p className="text-sm text-muted-foreground">{item.detail}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Skills Section */}
      <section id="skills" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="animate-on-scroll">
            <h2 className="text-4xl font-bold text-center mb-12 text-primary section-title">Skills</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {Object.entries(skills).map(([category, skillList], index) => (
                <Card key={category} className="skill-card animate-on-scroll" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardHeader>
                    <CardTitle className="text-xl text-center">{category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {skillList.map((skill) => (
                        <Badge key={skill} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <div className="animate-on-scroll">
            <h2 className="text-4xl font-bold text-center mb-12 text-primary section-title">Projects</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <Card key={index} className="project-card animate-on-scroll" style={{ animationDelay: `${index * 200}ms` }}>
                  <CardHeader>
                    <CardTitle 
                      className="text-xl cursor-pointer hover:text-primary transition-colors"
                      onClick={() => window.open(project.githubLink, '_blank')}
                    >
                      {project.title}
                    </CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <p className="font-semibold mb-2">Tech Stack:</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <Badge key={tech} variant="outline">{tech}</Badge>
                        ))}
                      </div>
                    </div>
                    <div className="mb-4">
                      <p className="font-semibold mb-2">Features:</p>
                      <ul className="list-disc list-inside text-sm space-y-1">
                        {project.features.map((feature, idx) => (
                          <li key={idx}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex gap-2">
                      <Button 
                        size="sm" 
                        className="bg-primary hover:bg-primary/90 text-white glow-button"
                        onClick={() => window.open(project.githubLink, '_blank')}
                      >
                        <Github className="h-4 w-4 mr-2" />
                        GitHub
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="glow-button"
                        onClick={() => window.open(project.liveLink, '_blank')}
                      >
                        Live Demo
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Blog Section */}
      <section id="blog" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="animate-on-scroll">
            <h2 className="text-4xl font-bold text-center mb-12 text-primary section-title">Blog</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {blogPosts.map((post, index) => (
                <Card key={index} className="skill-card animate-on-scroll" style={{ animationDelay: `${index * 150}ms` }}>
                  <CardHeader>
                    <CardTitle className="text-lg">{post.title}</CardTitle>
                    <CardDescription>{post.date}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm mb-4">{post.summary}</p>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="w-full glow-button"
                      onClick={() => navigate(`/blog/${post.id}`)}
                    >
                      Read More
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Internships Section */}
      <section id="internships" className="py-20">
        <div className="container mx-auto px-4">
          <div className="animate-on-scroll">
            <h2 className="text-4xl font-bold text-center mb-12 text-primary section-title">Internships</h2>
            <div className="space-y-8">
              {internships.map((internship, index) => (
                <Card key={index} className="project-card animate-on-scroll" style={{ animationDelay: `${index * 250}ms` }}>
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                      <div>
                        <CardTitle className="text-xl">{internship.title}</CardTitle>
                        <CardDescription className="text-lg font-semibold text-primary">
                          {internship.company}
                        </CardDescription>
                      </div>
                      <Badge variant="secondary" className="mt-2 md:mt-0">
                        {internship.duration}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">{internship.description}</p>
                    <div>
                      <p className="font-semibold mb-2">Skills Developed:</p>
                      <div className="flex flex-wrap gap-2">
                        {internship.skills.map((skill) => (
                          <Badge key={skill} variant="outline">{skill}</Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Certifications Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="animate-on-scroll">
            <h2 className="text-4xl font-bold text-center mb-12 text-primary section-title">Certifications & Achievements</h2>
            <div className="max-w-3xl mx-auto">
              <Card className="skill-card">
                <CardContent className="p-8">
                  <ul className="space-y-4">
                    {certifications.map((cert, index) => (
                      <li key={index} className="flex items-start animate-on-scroll" style={{ animationDelay: `${index * 100}ms` }}>
                        <div className="w-2 h-2 bg-primary rounded-full mt-3 mr-4 flex-shrink-0"></div>
                        <span className="text-lg">{cert}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="animate-on-scroll">
            <h2 className="text-4xl font-bold text-center mb-12 text-primary section-title">Contact Me</h2>
            <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              <div className="animate-on-scroll">
                <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 mr-3 text-primary" />
                    <span>talarimanoj2005@gmail.com</span>
                    <Button 
                      onClick={copyEmail}
                      variant="ghost" 
                      size="sm" 
                      className="ml-2 glow-button"
                    >
                      Copy
                    </Button>
                  </div>
                  <div className="flex items-center">
                    <span className="h-5 w-5 mr-3 text-primary">📞</span>
                    <span>9346178518</span>
                  </div>
                  <div className="flex space-x-4 mt-6">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="glow-button"
                      onClick={() => window.open('https://github.com/Manoj9346', '_blank')}
                    >
                      <Github className="h-4 w-4 mr-2" />
                      GitHub
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="glow-button"
                      onClick={() => window.open('https://www.linkedin.com/in/talari-manoj-kumar-53b057291', '_blank')}
                    >
                      <Linkedin className="h-4 w-4 mr-2" />
                      LinkedIn
                    </Button>
                  </div>
                </div>
              </div>
              <div className="animate-on-scroll">
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <Input 
                    placeholder="Your Name" 
                    required 
                    value={contactForm.name}
                    onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                    className="transition-all duration-300 focus:shadow-lg" 
                  />
                  <Input 
                    type="email" 
                    placeholder="Your Email" 
                    required 
                    value={contactForm.email}
                    onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                    className="transition-all duration-300 focus:shadow-lg" 
                  />
                  <Textarea 
                    placeholder="Your Message" 
                    rows={5} 
                    required 
                    value={contactForm.message}
                    onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                    className="transition-all duration-300 focus:shadow-lg" 
                  />
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white glow-button">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="py-8 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4">Made with ❤️ by Manoj Kumar Talari</p>
          <div className="flex justify-center space-x-4">
            <Button 
              variant="ghost" 
              size="sm"
              className="glow-button"
              onClick={() => window.open('https://github.com/Manoj9346', '_blank')}
            >
              <Github className="h-4 w-4" />
            </Button>
            <Button 
              variant="ghost" 
              size="sm"
              className="glow-button"
              onClick={() => window.open('https://www.linkedin.com/in/talari-manoj-kumar-53b057291', '_blank')}
            >
              <Linkedin className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </footer>

      {/* Enhanced Scroll to Top Button */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 rounded-full w-12 h-12 bg-primary hover:bg-primary/90 text-white glow-button"
          size="sm"
        >
          <ArrowUp className="h-4 w-4" />
        </Button>
      )}
    </div>
  );
};

export default Index;
