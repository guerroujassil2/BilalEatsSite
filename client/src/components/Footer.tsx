import { Facebook, Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-card border-t border-card-border" data-testid="footer-main">
      <div className="container mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3
              className="text-2xl font-bold font-['Cairo'] text-primary mb-4"
              data-testid="text-footer-brand"
            >
              مطعم بلال
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              أطيب المأكولات بأجود المكونات. نقدم لكم تجربة طعام فريدة تجمع بين الأصالة والجودة منذ
              أكثر من ١٥ عاماً.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">روابط سريعة</h4>
            <nav className="space-y-2">
              <Button
                variant="ghost"
                className="w-full justify-start text-right px-0 hover-elevate"
                onClick={() => scrollToSection("menu")}
                data-testid="link-footer-menu"
              >
                القائمة
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start text-right px-0 hover-elevate"
                onClick={() => scrollToSection("about")}
                data-testid="link-footer-about"
              >
                عن المطعم
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start text-right px-0 hover-elevate"
                onClick={() => scrollToSection("contact")}
                data-testid="link-footer-contact"
              >
                اتصل بنا
              </Button>
            </nav>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">تابعنا</h4>
            <div className="flex gap-3">
              <Button
                size="icon"
                variant="outline"
                className="hover-elevate"
                onClick={() => console.log("Facebook clicked")}
                data-testid="link-facebook"
              >
                <Facebook className="h-5 w-5" />
              </Button>
              <Button
                size="icon"
                variant="outline"
                className="hover-elevate"
                onClick={() => console.log("Instagram clicked")}
                data-testid="link-instagram"
              >
                <Instagram className="h-5 w-5" />
              </Button>
              <Button
                size="icon"
                variant="outline"
                className="hover-elevate"
                onClick={() => console.log("Twitter clicked")}
                data-testid="link-twitter"
              >
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-card-border pt-8 text-center">
          <p className="text-muted-foreground" data-testid="text-copyright">
            © {new Date().getFullYear()} مطعم بلال. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
}
