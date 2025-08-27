import { useState } from "react";
import Navigation from "../components/Navigation";
import FloatingOrbs from "../components/FloatingOrbs";
import GameCard from "../components/GameCard";
import { Filter } from "lucide-react";
import gamePuzzle from "../assets/game-puzzle.jpg";
import gamePlatformer from "../assets/game-platformer.jpg";
import gameRacing from "../assets/game-racing.jpg";

const Games = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Puzzle", "Platformer", "Racing", "Arcade", "Casual"];

  const games = [
    {
      title: "Crystal Quest",
      description: "A match-3 puzzle adventure with stunning visuals and addictive gameplay. Features 100+ levels and special power-ups.",
      image: gamePuzzle,
      technologies: ["Phaser", "HTML5", "JavaScript", "LocalStorage"],
      genre: "Puzzle",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Neon Runner",
      description: "Fast-paced platformer with retro-futuristic aesthetics and smooth controls. Jump, dash, and collect coins!",
      image: gamePlatformer,
      technologies: ["Pixi.js", "Canvas", "TypeScript", "WebAudio"],
      genre: "Platformer",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Turbo Racers",
      description: "High-speed racing game with multiplayer support and customizable vehicles. Compete with players worldwide!",
      image: gameRacing,
      technologies: ["Three.js", "WebGL", "Socket.io", "Node.js"],
      genre: "Racing",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Bubble Pop Mania",
      description: "Relaxing bubble-popping game with smooth physics and satisfying sound effects. Perfect for stress relief!",
      image: gamePuzzle,
      technologies: ["Phaser", "Matter.js", "HTML5", "CSS3"],
      genre: "Casual",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Space Defender",
      description: "Classic arcade-style shooter with modern twists. Defend Earth from alien invasion with various weapons!",
      image: gamePlatformer,
      technologies: ["Canvas", "JavaScript", "WebGL", "Howler.js"],
      genre: "Arcade",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Word Wizard",
      description: "Challenging word puzzle game that tests your vocabulary. Create words from letter tiles to score points!",
      image: gameRacing,
      technologies: ["React", "Canvas", "TypeScript", "API"],
      genre: "Puzzle",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Pixel Adventure",
      description: "Retro-style adventure platformer with pixel art graphics. Explore dungeons and defeat monsters!",
      image: gamePlatformer,
      technologies: ["Phaser", "Tiled", "JavaScript", "JSON"],
      genre: "Platformer",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Memory Master",
      description: "Brain training game that challenges your memory skills. Remember patterns and improve your cognitive abilities!",
      image: gamePuzzle,
      technologies: ["HTML5", "CSS3", "JavaScript", "LocalStorage"],
      genre: "Casual",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Desert Rally",
      description: "Off-road racing adventure across challenging desert terrains. Upgrade your vehicle and conquer the dunes!",
      image: gameRacing,
      technologies: ["Three.js", "Cannon.js", "TypeScript", "WebGL"],
      genre: "Racing",
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  const filteredGames = activeFilter === "All" 
    ? games 
    : games.filter(game => game.genre === activeFilter);

  return (
    <div className="min-h-screen hero-background">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <section className="relative text-center mb-16 overflow-hidden">
            <FloatingOrbs />
            <div className="relative z-10">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">My Games</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Explore my collection of HTML5 games - from puzzle adventures to racing thrills, 
                each crafted with passion and attention to detail.
              </p>
            </div>
          </section>

          {/* Filter Buttons */}
          <section className="mb-12">
            <div className="flex flex-wrap justify-center gap-3">
              <div className="flex items-center space-x-2 mb-4 md:mb-0">
                <Filter className="h-5 w-5 text-muted-foreground" />
                <span className="text-muted-foreground font-medium">Filter by genre:</span>
              </div>
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    activeFilter === filter
                      ? "btn-game text-sm"
                      : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </section>

          {/* Games Grid */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredGames.map((game, index) => (
                <div 
                  key={index} 
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <GameCard {...game} />
                </div>
              ))}
            </div>
            
            {filteredGames.length === 0 && (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🎮</div>
                <h3 className="text-2xl font-bold mb-2 text-muted-foreground">No games found</h3>
                <p className="text-muted-foreground">Try selecting a different genre filter.</p>
              </div>
            )}
          </section>

          {/* Reviews Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-12 text-center text-gradient">What Players Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="game-card p-6">
                <div className="flex items-center mb-4">
                  <div className="flex space-x-1 mr-3">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-accent text-lg">⭐</span>
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">Crystal Quest</span>
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "Absolutely addictive! I've been playing Crystal Quest for weeks and still discovering new strategies. The graphics are stunning and gameplay is so smooth."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white font-bold">
                    M
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Maya Chen</div>
                    <div className="text-sm text-muted-foreground">Casual Gamer</div>
                  </div>
                </div>
              </div>

              <div className="game-card p-6">
                <div className="flex items-center mb-4">
                  <div className="flex space-x-1 mr-3">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-accent text-lg">⭐</span>
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">Neon Runner</span>
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "Best platformer I've played in a browser! The controls are super responsive and the neon aesthetic is just perfect. Can't wait for the sequel!"
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-secondary to-accent flex items-center justify-center text-white font-bold">
                    A
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Alex Rodriguez</div>
                    <div className="text-sm text-muted-foreground">Gaming Streamer</div>
                  </div>
                </div>
              </div>

              <div className="game-card p-6">
                <div className="flex items-center mb-4">
                  <div className="flex space-x-1 mr-3">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-accent text-lg">⭐</span>
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">Turbo Racers</span>
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "The multiplayer experience is incredible! Playing with friends online feels so smooth. Shalini really knows how to create engaging games."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-accent to-primary flex items-center justify-center text-white font-bold">
                    J
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Jordan Kim</div>
                    <div className="text-sm text-muted-foreground">Competitive Player</div>
                  </div>
                </div>
              </div>

              <div className="game-card p-6">
                <div className="flex items-center mb-4">
                  <div className="flex space-x-1 mr-3">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-accent text-lg">⭐</span>
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">Client Project</span>
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "Shalini delivered exactly what we needed for our marketing campaign. The game was engaging, branded perfectly, and ready on time. Highly recommended!"
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white font-bold">
                    S
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Sarah Thompson</div>
                    <div className="text-sm text-muted-foreground">Marketing Director</div>
                  </div>
                </div>
              </div>

              <div className="game-card p-6">
                <div className="flex items-center mb-4">
                  <div className="flex space-x-1 mr-3">
                    {[...Array(4)].map((_, i) => (
                      <span key={i} className="text-accent text-lg">⭐</span>
                    ))}
                    <span className="text-muted-foreground text-lg">⭐</span>
                  </div>
                  <span className="text-sm text-muted-foreground">Bubble Pop Mania</span>
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "Perfect stress-relief game! The physics feel so satisfying and the sound effects are oddly therapeutic. Play it during my lunch breaks every day."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-secondary to-primary flex items-center justify-center text-white font-bold">
                    R
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Rachel Green</div>
                    <div className="text-sm text-muted-foreground">Office Worker</div>
                  </div>
                </div>
              </div>

              <div className="game-card p-6">
                <div className="flex items-center mb-4">
                  <div className="flex space-x-1 mr-3">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-accent text-lg">⭐</span>
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">Overall Experience</span>
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "As a fellow developer, I'm impressed by the code quality and optimization. Shalini's games run smoothly even on older devices. Great work!"
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-accent to-secondary flex items-center justify-center text-white font-bold">
                    D
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">David Lee</div>
                    <div className="text-sm text-muted-foreground">Game Developer</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <div className="game-card p-8 max-w-md mx-auto">
                <h3 className="text-2xl font-bold mb-4 text-gradient">Overall Rating</h3>
                <div className="flex justify-center items-center space-x-2 mb-2">
                  <span className="text-4xl font-bold text-primary">4.8</span>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-accent text-2xl">⭐</span>
                    ))}
                  </div>
                </div>
                <p className="text-muted-foreground">Based on 2,500+ player reviews</p>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="mb-16">
            <div className="game-card p-8 text-center">
              <h2 className="text-3xl font-bold mb-8 text-gradient">Game Development Stats</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">15+</div>
                  <div className="text-muted-foreground">Games Created</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-secondary mb-2">3M+</div>
                  <div className="text-muted-foreground">Monthly Players</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent mb-2">50M+</div>
                  <div className="text-muted-foreground">Total Plays</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">4.8★</div>
                  <div className="text-muted-foreground">Average Rating</div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="game-card p-12 max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-gradient">Want a Custom Game?</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm available for custom game development projects. Whether you need a promotional game, 
                educational content, or a unique gaming experience for your platform, let's bring your vision to life!
              </p>
              <a href="/contact" className="btn-game text-lg px-8 py-4">
                Start Your Project
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Games;