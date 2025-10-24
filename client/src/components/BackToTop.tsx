import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronUp } from "lucide-react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!isVisible) return null;

  return (
    <Button
      size="icon"
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-40 rounded-full shadow-lg hover-elevate"
      data-testid="button-back-to-top"
    >
      <ChevronUp className="h-5 w-5" />
    </Button>
  );
}
