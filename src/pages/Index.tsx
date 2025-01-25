import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { FeatureSection } from "@/components/FeatureSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      
      <FeatureSection
        title="Cook with Love"
        description="Discover recipes that bring families together. Our curated collection of dishes helps create memorable moments around the dinner table."
        imageSrc="/lovable-uploads/c0bc8295-d971-4cc1-b58a-d95fbc3d39d9.png"
        imageAlt="Family cooking together"
        buttonText="Explore Recipes"
      />
      
      <FeatureSection
        title="Share the Joy"
        description="Join our community of food lovers. Share your recipes, tips, and culinary adventures with fellow cooking enthusiasts."
        imageSrc="/placeholder.svg"
        imageAlt="Community sharing recipes"
        buttonText="Join Community"
        reverse
      />
      
      <Footer />
    </div>
  );
};

export default Index;