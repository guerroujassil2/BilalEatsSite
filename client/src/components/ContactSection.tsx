import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    console.log("Form submitted:", formData);

    setTimeout(() => {
      toast({
        title: "تم الإرسال بنجاح",
        description: "شكراً لتواصلك معنا. سنرد عليك في أقرب وقت ممكن.",
      });

      setFormData({ name: "", phone: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 bg-background" data-testid="section-contact">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            className="text-4xl md:text-5xl font-bold font-['Cairo'] text-foreground mb-4"
            data-testid="text-contact-title"
          >
            اتصل بنا
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            نسعد بتواصلك معنا. يمكنك زيارتنا أو التواصل عبر الهاتف أو إرسال رسالة
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="p-8" data-testid="card-contact-form">
            <h3 className="text-2xl font-semibold text-foreground mb-6">أرسل رسالة</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                  الاسم
                </label>
                <Input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="أدخل اسمك"
                  data-testid="input-name"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2 text-foreground">
                  رقم الهاتف
                </label>
                <Input
                  id="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="أدخل رقم هاتفك"
                  data-testid="input-phone"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
                  الرسالة
                </label>
                <Textarea
                  id="message"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="اكتب رسالتك هنا"
                  rows={5}
                  data-testid="input-message"
                />
              </div>

              <Button
                type="submit"
                className="w-full hover-elevate"
                disabled={isSubmitting}
                data-testid="button-submit"
              >
                {isSubmitting ? "جاري الإرسال..." : "إرسال الرسالة"}
              </Button>
            </form>
          </Card>

          <div className="space-y-6">
            <Card className="p-8 hover-elevate" data-testid="card-location">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">الموقع</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    شارع الملك فهد، حي النزهة
                    <br />
                    الرياض، المملكة العربية السعودية
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 hover-elevate" data-testid="card-phone">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">الهاتف</h3>
                  <p className="text-muted-foreground" dir="ltr">
                    +966 11 234 5678
                  </p>
                  <p className="text-muted-foreground mt-1" dir="ltr">
                    +966 50 123 4567
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 hover-elevate" data-testid="card-hours">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">ساعات العمل</h3>
                  <div className="space-y-1 text-muted-foreground">
                    <p>السبت - الخميس: ١٢:٠٠ ظهراً - ١٢:٠٠ منتصف الليل</p>
                    <p>الجمعة: ١:٠٠ ظهراً - ١٢:٠٠ منتصف الليل</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
