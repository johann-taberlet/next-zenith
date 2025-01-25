import { SearchBar } from "./SearchBar";

export const Hero = () => {
  return (
    <section className="relative mt-24 mb-16 mx-auto w-[80%] h-[500px] bg-header rounded-xl overflow-hidden">
      {/* Hero Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1495195134817-aeb325a55b65?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
          backgroundBlendMode: 'overlay',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30" />
      </div>
      
      {/* Content */}
      <div className="relative container mx-auto text-center h-full flex flex-col items-center justify-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-up [animation-delay:200ms]">
          Discover Amazing Recipes
        </h1>
        <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-12 animate-fade-up [animation-delay:400ms]">
          Explore a world of delicious recipes, cooking tips, and culinary inspiration for every occasion.
        </p>
        <div className="w-full max-w-2xl animate-fade-up [animation-delay:600ms]">
          <SearchBar />
        </div>
      </div>
    </section>
  );
};