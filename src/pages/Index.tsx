import { Link } from "react-router-dom";
import { Play, ExternalLink, Users, Trophy, Zap, Github, Linkedin, Twitter } from "lucide-react";
import Navigation from "../components/Navigation";
import FloatingOrbs from "../components/FloatingOrbs";
import GameCard from "../components/GameCard";
import heroImage from "../assets/hero-bg.jpg";
import gamePuzzle from "../assets/game-puzzle.jpg";
import gamePlatformer from "../assets/game-platformer.jpg";
import gameRacing from "../assets/game-racing.jpg";

const Index = () => {
  const featuredGames = [
    {
      title: "Crystal Quest",
      description: "A match-3 puzzle adventure with stunning visuals and addictive gameplay.",
      image: gamePuzzle,
      technologies: ["Phaser", "HTML5", "JavaScript"],
      genre: "Puzzle",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Neon Runner",
      description: "Fast-paced platformer with retro-futuristic aesthetics and smooth controls.",
      image: gamePlatformer,
      technologies: ["Pixi.js", "Canvas", "TypeScript"],
      genre: "Platformer",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Turbo Racers",
      description: "High-speed racing game with multiplayer support and customizable vehicles.",
      image: gameRacing,
      technologies: ["Three.js", "WebGL", "Socket.io"],
      genre: "Racing",
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  const stats = [
    { icon: Trophy, label: "Games Created", value: "15+" },
    { icon: Users, label: "Monthly Players", value: "3M+" },
    { icon: Zap, label: "Total Plays", value: "50M+" },
  ];

  return (
    <div className="min-h-screen hero-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <FloatingOrbs />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Hi, I'm <span className="text-gradient">Shalini</span> 🎮
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl mb-4 text-foreground/90 font-medium">
              I build HTML5 games that bring
            </p>
            <p className="text-xl md:text-2xl lg:text-3xl mb-8 text-gradient font-bold">
              joy to millions of players
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/games" className="btn-game inline-flex items-center justify-center space-x-2 text-lg px-8 py-4">
              <Play className="h-5 w-5" />
              <span>Play My Games</span>
            </Link>
            <Link to="/contact" className="btn-game-secondary inline-flex items-center justify-center space-x-2 text-lg px-8 py-4">
              <ExternalLink className="h-5 w-5" />
              <span>Contact Me</span>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-primary to-secondary mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gradient mb-2">{stat.value}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Games Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Featured Games</h2>
            <p className="text-xl text-muted-foreground">Check out some of my latest creations</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredGames.map((game, index) => (
              <GameCard key={index} {...game} />
            ))}
          </div>

          <div className="text-center">
            <Link to="/games" className="btn-game-accent inline-flex items-center space-x-2 text-lg px-8 py-4">
              <span>View All Games</span>
              <ExternalLink className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <p className="text-muted-foreground text-center md:text-left">
                Built with 💜 + 🎮 by <span className="text-gradient font-semibold">Shalini</span>
              </p>
              <p className="text-sm text-muted-foreground/70 text-center md:text-left mt-1">
                © 2024 Shalini. All rights reserved.
              </p>
            </div>
            
            <div className="flex space-x-4">
              <a href="#" className="p-3 rounded-lg bg-muted/50 hover:bg-primary/20 text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="p-3 rounded-lg bg-muted/50 hover:bg-primary/20 text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="p-3 rounded-lg bg-muted/50 hover:bg-primary/20 text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
