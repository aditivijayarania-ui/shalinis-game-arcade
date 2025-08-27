import Navigation from "../components/Navigation";
import FloatingOrbs from "../components/FloatingOrbs";
import { Calendar, Clock, Tag, ArrowRight, Bookmark } from "lucide-react";

const Blog = () => {
  const posts = [
    {
      title: "Building Cross-Platform HTML5 Games: A Complete Guide",
      excerpt: "Learn how to create games that work seamlessly across all devices and browsers. From responsive design to performance optimization.",
      date: "2024-03-15",
      readTime: "8 min read",
      tags: ["HTML5", "Cross-Platform", "Tutorial"],
      featured: true
    },
    {
      title: "Phaser vs Pixi.js: Choosing the Right Framework",
      excerpt: "An in-depth comparison of two popular HTML5 game frameworks. Discover which one fits your project needs best.",
      date: "2024-03-10",
      readTime: "6 min read",
      tags: ["Phaser", "Pixi.js", "Comparison"]
    },
    {
      title: "Game Performance Optimization: 10 Essential Tips",
      excerpt: "Practical techniques to make your HTML5 games run smoothly on any device. From texture atlasing to efficient rendering.",
      date: "2024-03-05",
      readTime: "10 min read",
      tags: ["Performance", "Optimization", "Best Practices"]
    },
    {
      title: "Creating Engaging Game UI/UX",
      excerpt: "Design principles for game interfaces that players love. Learn about visual hierarchy, feedback systems, and accessibility.",
      date: "2024-02-28",
      readTime: "7 min read",
      tags: ["UI/UX", "Design", "Player Experience"]
    },
    {
      title: "Monetizing HTML5 Games: Strategies That Work",
      excerpt: "Explore different monetization models for browser games. From ads integration to premium features and everything in between.",
      date: "2024-02-20",
      readTime: "9 min read",
      tags: ["Monetization", "Business", "Strategy"]
    },
    {
      title: "Game Audio in the Browser: A Developer's Guide",
      excerpt: "Everything you need to know about implementing sound in HTML5 games. From Web Audio API to adaptive music systems.",
      date: "2024-02-15",
      readTime: "12 min read",
      tags: ["Audio", "Web Audio API", "Sound Design"]
    }
  ];

  const categories = ["All", "Tutorial", "Best Practices", "Game Design", "Technical", "Business"];

  return (
    <div className="min-h-screen hero-background">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <section className="relative text-center mb-16 overflow-hidden">
            <FloatingOrbs />
            <div className="relative z-10">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">Game Dev Blog</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Insights, tutorials, and behind-the-scenes stories from my game development journey. 
                Learn about HTML5 game development, best practices, and industry trends.
              </p>
            </div>
          </section>

          {/* Featured Post */}
          {posts.filter(post => post.featured).map((post, index) => (
            <section key={index} className="mb-16">
              <div className="game-card p-8 lg:p-12">
                <div className="flex items-center space-x-2 mb-4">
                  <span className="px-3 py-1 text-sm font-medium rounded-full bg-primary/20 text-primary border border-primary/30">
                    Featured
                  </span>
                  <Bookmark className="h-4 w-4 text-primary" />
                </div>
                
                <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gradient hover:text-primary transition-colors cursor-pointer">
                  {post.title}
                </h2>
                
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex flex-wrap items-center gap-6 mb-6">
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm">{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm">{post.readTime}</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-3 py-1 text-sm font-medium rounded-full bg-accent/20 text-accent border border-accent/30"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  
                  <button className="btn-game-secondary inline-flex items-center space-x-2">
                    <span>Read More</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </section>
          ))}

          {/* Categories Filter */}
          <section className="mb-12">
            <div className="flex flex-wrap justify-center gap-3">
              <div className="flex items-center space-x-2 mb-4 md:mb-0">
                <Tag className="h-5 w-5 text-muted-foreground" />
                <span className="text-muted-foreground font-medium">Categories:</span>
              </div>
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 rounded-lg font-medium transition-all duration-300 bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"
                >
                  {category}
                </button>
              ))}
            </div>
          </section>

          {/* Blog Posts Grid */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.filter(post => !post.featured).map((post, index) => (
                <article key={index} className="game-card group cursor-pointer">
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center space-x-4 mb-4 text-xs text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex}
                          className="px-2 py-1 text-xs font-medium rounded-md bg-muted/80 text-muted-foreground border border-border/50"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-primary text-sm font-medium group-hover:underline">
                        Read Article
                      </span>
                      <ArrowRight className="h-4 w-4 text-primary transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Newsletter Signup */}
          <section className="text-center">
            <div className="game-card p-12 max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-gradient">Stay Updated</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Get the latest game development insights, tutorials, and behind-the-scenes content 
                delivered straight to your inbox. No spam, just valuable content for game developers.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors text-foreground"
                />
                <button className="btn-game whitespace-nowrap px-6 py-3">
                  Subscribe
                </button>
              </div>
              
              <p className="text-xs text-muted-foreground mt-4">
                Join 2,500+ game developers who read my weekly insights
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Blog;