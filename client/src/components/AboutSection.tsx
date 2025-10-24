import { Card } from "@/components/ui/card";
import { UtensilsCrossed, Award, Heart } from "lucide-react";

const features = [
  {
    icon: UtensilsCrossed,
    title: "مكونات طازجة",
    description: "نستخدم أجود المكونات الطازجة يومياً لضمان أعلى جودة",
  },
  {
    icon: Award,
    title: "خبرة ١٥ عاماً",
    description: "خبرة طويلة في تقديم أشهى الأطباق العربية الأصيلة",
  },
  {
    icon: Heart,
    title: "طهي بحب",
    description: "كل طبق نقدمه محضر بعناية فائقة وحب للطعام الجيد",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-card" data-testid="section-about">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2
              className="text-4xl md:text-5xl font-bold font-['Cairo'] text-foreground mb-6"
              data-testid="text-about-title"
            >
              عن مطعم بلال
            </h2>
            <div className="text-lg text-card-foreground leading-relaxed space-y-4">
              <p>
                مرحباً بكم في مطعم بلال، حيث تلتقي الأصالة بالجودة. منذ أكثر من ١٥ عاماً ونحن نقدم
                لعملائنا الكرام أشهى الأطباق العربية المحضرة بأجود المكونات الطازجة.
              </p>
              <p>
                نفخر بتقديم تجربة طعام فريدة تجمع بين النكهات التقليدية الأصيلة والجودة العالية، في
                أجواء مريحة وأنيقة تناسب جميع أفراد العائلة.
              </p>
              <p>
                رسالتنا هي إسعاد كل ضيف يزورنا من خلال تقديم وجبات لذيذة، خدمة ممتازة، وذكريات لا تُنسى.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="p-6 text-center hover-elevate transition-all"
                data-testid={`card-feature-${index}`}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
