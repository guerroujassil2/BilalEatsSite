import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@assets/generated_images/Elegant_restaurant_interior_atmosphere_109257fe.png";

export default function HeroSection() {
  const scrollToMenu = () => {
    const element = document.getElementById("menu");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center"
      data-testid="section-hero"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <h1
          className="text-5xl md:text-7xl font-bold font-['Cairo'] text-white mb-6"
          data-testid="text-hero-title"
        >
          مطعم بلال
        </h1>
        <p
          className="text-2xl md:text-3xl text-white/90 mb-8 font-medium"
          data-testid="text-hero-tagline"
        >
          أطيب المأكولات بأجود المكونات
        </p>
        <p className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
          استمتع بتجربة طهي أصيلة تجمع بين النكهات التقليدية والجودة العالية في أجواء مريحة وأنيقة
        </p>
        <Button
          size="lg"
          onClick={scrollToMenu}
          className="bg-primary/90 backdrop-blur-md text-primary-foreground border border-primary-border hover-elevate text-lg px-8 py-6"
          data-testid="button-view-menu"
        >
          اطلع على القائمة
        </Button>
      </div>

      <button
        onClick={scrollToMenu}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 hover:text-white transition-colors animate-bounce"
        data-testid="button-scroll-indicator"
      >
        <ChevronDown className="h-8 w-8" />
      </button>
    </section>
  );
}
