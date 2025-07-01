
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

const Index = () => {
  const [isDark, setIsDark] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
      
      // Animate elements on scroll
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          el.classList.add('visible');
        }
      });
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
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('talarimanoj2005@gmail.com');
    toast({
      title: "Email Copied!",
      description: "talarimanoj2005@gmail.com copied to clipboard",
    });
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
      features: ["Cart System", "UPI Payments", "Table Reservations", "Donation System"]
    },
    {
      title: "Online Learning Platform",
      description: "Interactive web-based learning platform with clean navigation and student-friendly design.",
      tech: ["HTML", "CSS", "JavaScript", "Python"],
      features: ["Interactive Interface", "Clean Navigation", "Student-Friendly Design"]
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
      title: "Getting Started with Full-Stack Development",
      date: "2024-06-15",
      summary: "A beginner's guide to understanding the fundamentals of full-stack web development and the technologies involved."
    },
    {
      title: "Building Responsive Web Applications",
      date: "2024-06-10", 
      summary: "Best practices for creating responsive designs that work seamlessly across all devices and screen sizes."
    },
    {
      title: "Database Design Principles",
      date: "2024-06-05",
      summary: "Essential principles and patterns for designing efficient and scalable database schemas for web applications."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-primary">MKT</div>
          <div className="hidden md:flex space-x-6">
            {['about', 'skills', 'projects', 'blog', 'internships', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="capitalize hover:text-primary transition-colors"
              >
                {section}
              </button>
            ))}
          </div>
          <Button onClick={toggleTheme} variant="outline" size="sm">
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center gradient-bg relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="animate-fade-in">
            <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-primary/20 flex items-center justify-center text-4xl font-bold text-white border-4 border-primary">
              MKT
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white">
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
                className="bg-primary hover:bg-primary/90 text-white"
              >
                See My Projects
              </Button>
              <Button 
                onClick={() => scrollToSection('contact')}
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-accent"
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

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="animate-on-scroll">
            <h2 className="text-4xl font-bold text-center mb-12 text-primary">About Me</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg mb-6 leading-relaxed">
                  Final-year BTech student specializing in full-stack development with expertise in HTML, CSS, JavaScript, Python, and MySQL. Passionate about building scalable web applications. Seeking an opportunity to apply my technical skills in a dynamic work environment.
                </p>
                <Button className="bg-primary hover:bg-primary/90 text-white">
                  <Download className="h-4 w-4 mr-2" />
                  Download Resume
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Card className="text-center">
                  <CardContent className="p-4">
                    <MapPin className="h-8 w-8 mx-auto mb-2 text-primary" />
                    <p className="font-semibold">Location</p>
                    <p className="text-sm text-muted-foreground">Andhra Pradesh, India</p>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="p-4">
                    <GraduationCap className="h-8 w-8 mx-auto mb-2 text-primary" />
                    <p className="font-semibold">College</p>
                    <p className="text-sm text-muted-foreground">QIS College of Engineering</p>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="p-4">
                    <Calendar className="h-8 w-8 mx-auto mb-2 text-primary" />
                    <p className="font-semibold">Graduation</p>
                    <p className="text-sm text-muted-foreground">2026</p>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="p-4">
                    <Mail className="h-8 w-8 mx-auto mb-2 text-primary" />
                    <p className="font-semibold">Email</p>
                    <p className="text-sm text-muted-foreground">talarimanoj2005@gmail.com</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="animate-on-scroll">
            <h2 className="text-4xl font-bold text-center mb-12 text-primary">Skills</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {Object.entries(skills).map(([category, skillList]) => (
                <Card key={category} className="skill-card">
                  <CardHeader>
                    <CardTitle className="text-xl text-center">{category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {skillList.map((skill) => (
                        <Badge key={skill} variant="secondary" className="bg-primary/10 text-primary">
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

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <div className="animate-on-scroll">
            <h2 className="text-4xl font-bold text-center mb-12 text-primary">Projects</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <Card key={index} className="project-card">
                  <CardHeader>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
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
                      <Button size="sm" className="bg-primary hover:bg-primary/90 text-white">
                        <Github className="h-4 w-4 mr-2" />
                        GitHub
                      </Button>
                      <Button size="sm" variant="outline">
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

      {/* Blog Section */}
      <section id="blog" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="animate-on-scroll">
            <h2 className="text-4xl font-bold text-center mb-12 text-primary">Blog</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {blogPosts.map((post, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">{post.title}</CardTitle>
                    <CardDescription>{post.date}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm mb-4">{post.summary}</p>
                    <Button size="sm" variant="outline" className="w-full">
                      Read More
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Internships Section */}
      <section id="internships" className="py-20">
        <div className="container mx-auto px-4">
          <div className="animate-on-scroll">
            <h2 className="text-4xl font-bold text-center mb-12 text-primary">Internships</h2>
            <div className="space-y-8">
              {internships.map((internship, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
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

      {/* Certifications Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="animate-on-scroll">
            <h2 className="text-4xl font-bold text-center mb-12 text-primary">Certifications & Achievements</h2>
            <div className="max-w-3xl mx-auto">
              <Card>
                <CardContent className="p-8">
                  <ul className="space-y-4">
                    {certifications.map((cert, index) => (
                      <li key={index} className="flex items-start">
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

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="animate-on-scroll">
            <h2 className="text-4xl font-bold text-center mb-12 text-primary">Contact Me</h2>
            <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 mr-3 text-primary" />
                    <span>talarimanoj2005@gmail.com</span>
                    <Button 
                      onClick={copyEmail}
                      variant="ghost" 
                      size="sm" 
                      className="ml-2"
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
                      onClick={() => window.open('https://github.com/Manoj9346', '_blank')}
                    >
                      <Github className="h-4 w-4 mr-2" />
                      GitHub
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => window.open('https://linkedin.com/in/talarimanojkumar-53b057291', '_blank')}
                    >
                      <Linkedin className="h-4 w-4 mr-2" />
                      LinkedIn
                    </Button>
                  </div>
                </div>
              </div>
              <div>
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <Input placeholder="Your Name" required />
                  <Input type="email" placeholder="Your Email" required />
                  <Textarea placeholder="Your Message" rows={5} required />
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4">Made with ❤️ by Manoj Kumar Talari</p>
          <div className="flex justify-center space-x-4">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => window.open('https://github.com/Manoj9346', '_blank')}
            >
              <Github className="h-4 w-4" />
            </Button>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => window.open('https://linkedin.com/in/talarimanojkumar-53b057291', '_blank')}
            >
              <Linkedin className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 rounded-full w-12 h-12 bg-primary hover:bg-primary/90 text-white"
          size="sm"
        >
          <ArrowUp className="h-4 w-4" />
        </Button>
      )}
    </div>
  );
};

export default Index;
