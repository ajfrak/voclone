
import { useEffect } from 'react';

const Index = () => {
  useEffect(() => {
    // Redirect to the main HTML page
    window.location.href = '/';
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Redirecting to Focus Promotional Gifts...</h1>
        <p className="text-xl text-muted-foreground">If you're not redirected automatically, <a href="/" className="text-primary hover:underline">click here</a></p>
      </div>
    </div>
  );
};

export default Index;
