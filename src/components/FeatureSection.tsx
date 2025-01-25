interface FeatureSectionProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  buttonText: string;
  reverse?: boolean;
}

export const FeatureSection = ({
  title,
  description,
  imageSrc,
  imageAlt,
  buttonText,
  reverse = false,
}: FeatureSectionProps) => {
  return (
    <section className={`py-20 ${reverse ? 'bg-background' : 'bg-background-secondary'}`}>
      <div className="container mx-auto px-4">
        <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12`}>
          <div className="flex-1 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">{title}</h2>
            <p className="text-lg text-secondary/80 mb-8">{description}</p>
            <button className="px-8 py-3 rounded-full bg-primary text-white hover:bg-primary/90 transition-colors">
              {buttonText}
            </button>
          </div>
          <div className="flex-1">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="rounded-2xl shadow-xl animate-fade-in w-full max-w-md mx-auto"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};