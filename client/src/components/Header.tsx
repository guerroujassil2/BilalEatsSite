import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Moon, Sun } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const isDarkMode = localStorage.getItem("theme") === "dark";
    setIsDark(isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    if (newIsDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
      data-testid="header-main"
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              data-testid="button-theme-toggle"
              className="hover-elevate"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>

            <nav className="hidden md:flex gap-2" data-testid="nav-desktop">
              <Button
                variant="ghost"
                onClick={() => scrollToSection("hero")}
                data-testid="link-home"
                className="hover-elevate"
              >
                الصفحة الرئيسية
              </Button>
              <Button
                variant="ghost"
                onClick={() => scrollToSection("menu")}
                data-testid="link-menu"
                className="hover-elevate"
              >
                القائمة
              </Button>
              <Button
                variant="ghost"
                onClick={() => scrollToSection("about")}
                data-testid="link-about"
                className="hover-elevate"
              >
                عن المطعم
              </Button>
              <Button
                variant="ghost"
                onClick={() => scrollToSection("contact")}
                data-testid="link-contact"
                className="hover-elevate"
              >
                اتصل بنا
              </Button>
            </nav>
          </div>

          <button
            onClick={() => scrollToSection("hero")}
            className="text-2xl font-bold font-['Cairo'] text-primary hover-elevate px-4 py-2 rounded-md"
            data-testid="link-home"
          >
            مطعم بلال
          </button>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden hover-elevate"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {isMobileMenuOpen && (
          <nav
            className="md:hidden py-4 space-y-2 border-t border-border"
            data-testid="nav-mobile"
          >
            <Button
              variant="ghost"
              className="w-full justify-start text-right hover-elevate"
              onClick={() => scrollToSection("hero")}
              data-testid="link-home-mobile"
            >
              الصفحة الرئيسية
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start text-right hover-elevate"
              onClick={() => scrollToSection("menu")}
              data-testid="link-menu-mobile"
            >
              القائمة
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start text-right hover-elevate"
              onClick={() => scrollToSection("about")}
              data-testid="link-about-mobile"
            >
              عن المطعم
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start text-right hover-elevate"
              onClick={() => scrollToSection("contact")}
              data-testid="link-contact-mobile"
            >
              اتصل بنا
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}
