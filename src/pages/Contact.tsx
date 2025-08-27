import { useState } from "react";
import Navigation from "../components/Navigation";
import FloatingOrbs from "../components/FloatingOrbs";
import { Mail, Github, Linkedin, Twitter, MessageCircle, Send, MapPin, Clock } from "lucide-react";
import { useToast } from "../hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend
    toast({
      title: "Message sent! 🎉",
      description: "Thanks for reaching out! I'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "#",
      description: "Check out my code and projects"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "#",
      description: "Connect with me professionally"
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "#",
      description: "Follow me for game dev updates"
    },
    {
      icon: MessageCircle,
      label: "Discord",
      href: "#",
      description: "Chat with me about game development"
    }
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "hello@shalini.dev",
      description: "Preferred method for business inquiries"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Available Worldwide",
      description: "Remote work and collaboration"
    },
    {
      icon: Clock,
      label: "Response Time",
      value: "Within 24 hours",
      description: "I reply to all messages promptly"
    }
  ];

  return (
    <div className="min-h-screen hero-background">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <section className="relative text-center mb-16 overflow-hidden">
            <FloatingOrbs />
            <div className="relative z-10">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">Let's Create Together</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Ready to build the next viral game? Have a project in mind? Or just want to chat about 
                game development? I'd love to hear from you!
              </p>
            </div>
          </section>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="game-card p-8">
              <h2 className="text-2xl font-bold mb-6 text-gradient">Send Me a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors text-foreground"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors text-foreground"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors text-foreground"
                    placeholder="Game Development Project"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors text-foreground resize-none"
                    placeholder="Tell me about your project or idea..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="btn-game w-full flex items-center justify-center space-x-2 text-lg py-4"
                >
                  <Send className="h-5 w-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>

            {/* Contact Info & Social */}
            <div className="space-y-8">
              {/* Contact Information */}
              <div className="game-card p-8">
                <h2 className="text-2xl font-bold mb-6 text-gradient">Get In Touch</h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                          <info.icon className="h-6 w-6 text-white" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{info.label}</h3>
                        <p className="text-primary font-medium mb-1">{info.value}</p>
                        <p className="text-sm text-muted-foreground">{info.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="game-card p-8">
                <h2 className="text-2xl font-bold mb-6 text-gradient">Connect With Me</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-4 rounded-lg bg-muted/50 hover:bg-primary/10 hover:border-primary/30 border border-border/50 transition-all duration-300 group"
                    >
                      <div className="flex-shrink-0">
                        <social.icon className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                      <div>
                        <div className="font-medium text-foreground group-hover:text-primary transition-colors">
                          {social.label}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {social.description}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability Status */}
              <div className="game-card p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-green-400 to-green-600 mb-4">
                  <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
                </div>
                <h3 className="text-xl font-bold text-gradient mb-2">Available for Projects</h3>
                <p className="text-muted-foreground">
                  I'm currently accepting new projects and collaborations. Let's build something amazing together!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;