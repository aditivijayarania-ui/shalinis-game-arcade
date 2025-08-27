import Navigation from "../components/Navigation";
import FloatingOrbs from "../components/FloatingOrbs";
import { Code, Palette, Zap, Heart, Calendar, Trophy, Users, Gamepad } from "lucide-react";

const About = () => {
  const skills = [
    { name: "Phaser.js", level: 95 },
    { name: "Pixi.js", level: 90 },
    { name: "HTML5 Canvas", level: 88 },
    { name: "JavaScript", level: 92 },
    { name: "TypeScript", level: 85 },
    { name: "Three.js", level: 80 },
    { name: "Construct 3", level: 75 },
    { name: "Game Design", level: 90 },
  ];

  const timeline = [
    {
      year: "2024",
      title: "Senior HTML5 Game Developer",
      description: "Leading game development projects, mentoring junior developers"
    },
    {
      year: "2023",
      title: "Reached 3M Monthly Players",
      description: "Portfolio games achieved massive reach across gaming platforms"
    },
    {
      year: "2022",
      title: "Freelance Game Developer",
      description: "Started building games for various clients and publishing platforms"
    },
    {
      year: "2021",
      title: "First Viral Game",
      description: "\"Neon Runner\" reached 1M+ plays within first month"
    },
    {
      year: "2020",
      title: "Started Game Development Journey",
      description: "Discovered passion for HTML5 games and web technologies"
    }
  ];

  const funFacts = [
    { icon: Gamepad, fact: "Favorite game genre", value: "Puzzle Platformers" },
    { icon: Code, fact: "Lines of code written", value: "500K+" },
    { icon: Heart, fact: "Coffee cups per day", value: "4-6" },
    { icon: Zap, fact: "Fastest game completion", value: "48 hours" },
  ];

  return (
    <div className="min-h-screen hero-background">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <section className="relative text-center mb-20 overflow-hidden">
            <FloatingOrbs />
            <div className="relative z-10">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">About Me</h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Passionate HTML5 game developer with a love for creating engaging, 
                accessible games that bring joy to players worldwide.
              </p>
            </div>
          </section>

          {/* Story Section */}
          <section className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gradient">My Journey</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Hi there! I'm Shalini, and I've been crafting HTML5 games for the past 4 years. 
                    What started as a curiosity about web technologies quickly turned into a passion 
                    for creating interactive experiences that anyone can enjoy.
                  </p>
                  <p>
                    I specialize in building lightweight, cross-platform browser games that work 
                    seamlessly across devices. From puzzle games to action-packed platformers, 
                    I love exploring different genres and pushing the boundaries of what's possible 
                    in the browser.
                  </p>
                  <p>
                    When I'm not coding, you'll find me playing indie games, sketching game concepts, 
                    or experimenting with new game mechanics. I believe that great games come from 
                    understanding what makes players tick and creating experiences that feel both 
                    familiar and surprising.
                  </p>
                </div>
              </div>
              
              <div className="game-card p-8">
                <h3 className="text-2xl font-bold mb-6 text-center text-gradient">Fun Facts</h3>
                <div className="grid grid-cols-2 gap-6">
                  {funFacts.map((fact, index) => (
                    <div key={index} className="text-center">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary mb-3">
                        <fact.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="text-lg font-bold text-foreground">{fact.value}</div>
                      <div className="text-sm text-muted-foreground">{fact.fact}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-12 text-center text-gradient">Skills & Technologies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skills.map((skill, index) => (
                <div key={index} className="game-card p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-semibold text-foreground">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                    <div 
                      className="h-full rounded-full bg-gradient-to-r from-primary to-secondary transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Timeline Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-12 text-center text-gradient">Career Timeline</h2>
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="flex items-start space-x-6 group">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold text-lg">{item.year}</span>
                    </div>
                  </div>
                  <div className="game-card p-6 flex-1">
                    <h3 className="text-xl font-bold mb-2 text-foreground">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="game-card p-12 max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-gradient">Let's Create Something Amazing</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm always excited to work on new projects and collaborate with fellow creators. 
                Whether you need a custom game, want to discuss game development, or just want to chat 
                about the latest in HTML5 gaming, I'd love to hear from you!
              </p>
              <a href="/contact" className="btn-game inline-flex items-center space-x-2 text-lg">
                <span>Get In Touch</span>
                <Heart className="h-5 w-5" />
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;