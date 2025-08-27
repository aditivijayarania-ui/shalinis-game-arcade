const FloatingOrbs = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="floating-orb w-20 h-20 bg-primary/30 -top-10 -left-10" style={{ animationDelay: '0s' }} />
      <div className="floating-orb w-16 h-16 bg-secondary/30 top-1/4 right-1/4" style={{ animationDelay: '2s' }} />
      <div className="floating-orb w-12 h-12 bg-accent/30 bottom-1/4 left-1/3" style={{ animationDelay: '4s' }} />
      <div className="floating-orb w-24 h-24 bg-primary/20 bottom-0 right-0" style={{ animationDelay: '1s' }} />
      <div className="floating-orb w-14 h-14 bg-secondary/25 top-1/2 left-1/4" style={{ animationDelay: '3s' }} />
      <div className="floating-orb w-18 h-18 bg-accent/20 top-10 right-10" style={{ animationDelay: '5s' }} />
    </div>
  );
};

export default FloatingOrbs;