import { ExternalLink, Github, Play } from "lucide-react";

interface GameCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  genre: string;
  liveUrl?: string;
  githubUrl?: string;
}

const GameCard = ({ title, description, image, technologies, genre, liveUrl, githubUrl }: GameCardProps) => {
  return (
    <div className="game-card group">
      {/* Game Screenshot */}
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Play button overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="btn-game flex items-center space-x-2">
            <Play className="h-4 w-4" />
            <span>Play Game</span>
          </button>
        </div>
      </div>

      {/* Game Info */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="px-3 py-1 text-xs font-medium rounded-full bg-accent/20 text-accent border border-accent/30">
            {genre}
          </span>
          <div className="flex space-x-2">
            {liveUrl && (
              <a 
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-muted/50 hover:bg-primary/20 text-muted-foreground hover:text-primary transition-colors"
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
            {githubUrl && (
              <a 
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-muted/50 hover:bg-primary/20 text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>

        <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
          {description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span 
              key={index}
              className="px-2 py-1 text-xs font-medium rounded-md bg-muted/80 text-muted-foreground border border-border/50"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameCard;