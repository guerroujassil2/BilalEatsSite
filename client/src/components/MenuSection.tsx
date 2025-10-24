import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type MenuCategory = "all" | "appetizers" | "mains" | "drinks" | "desserts";

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  category: MenuCategory;
}

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "طبق المقبلات المشكل",
    description: "تشكيلة متنوعة من المقبلات الشرقية: حمص، بابا غنوج، فلافل، تبولة",
    price: "٤٥ ريال",
    category: "appetizers",
  },
  {
    id: 2,
    name: "حمص بالطحينة",
    description: "حمص طازج مع طحينة وزيت زيتون بكري",
    price: "٢٥ ريال",
    category: "appetizers",
  },
  {
    id: 3,
    name: "فتوش",
    description: "سلطة خضار طازجة مع خبز مقرمش ودبس الرمان",
    price: "٣٠ ريال",
    category: "appetizers",
  },
  {
    id: 4,
    name: "مشاوي مشكلة",
    description: "تشكيلة من الكباب والدجاج المشوي مع الأرز والخضار",
    price: "٩٥ ريال",
    category: "mains",
  },
  {
    id: 5,
    name: "كباب لحم",
    description: "كباب لحم مشوي على الفحم مع الأرز والسلطة",
    price: "٧٥ ريال",
    category: "mains",
  },
  {
    id: 6,
    name: "دجاج مشوي",
    description: "دجاج مشوي بالبهارات الخاصة مع الثوم والليمون",
    price: "٦٥ ريال",
    category: "mains",
  },
  {
    id: 7,
    name: "شاورما لحم",
    description: "شاورما لحم طازجة مع الطحينة والمخللات",
    price: "٣٥ ريال",
    category: "mains",
  },
  {
    id: 8,
    name: "عصير برتقال طازج",
    description: "عصير برتقال طبيعي ١٠٠٪",
    price: "١٨ ريال",
    category: "drinks",
  },
  {
    id: 9,
    name: "شاي بالنعناع",
    description: "شاي أخضر طازج بالنعناع",
    price: "١٢ ريال",
    category: "drinks",
  },
  {
    id: 10,
    name: "قهوة عربية",
    description: "قهوة عربية أصيلة بالهيل",
    price: "١٥ ريال",
    category: "drinks",
  },
  {
    id: 11,
    name: "بقلاوة",
    description: "حلوى شرقية محشوة بالفستق والعسل",
    price: "٣٥ ريال",
    category: "desserts",
  },
  {
    id: 12,
    name: "كنافة نابلسية",
    description: "كنافة طازجة بالجبنة والقطر",
    price: "٤٠ ريال",
    category: "desserts",
  },
  {
    id: 13,
    name: "أم علي",
    description: "حلى أم علي الساخن بالمكسرات",
    price: "٣٠ ريال",
    category: "desserts",
  },
];

const categories = [
  { id: "all" as MenuCategory, label: "الكل" },
  { id: "appetizers" as MenuCategory, label: "مقبلات" },
  { id: "mains" as MenuCategory, label: "أطباق رئيسية" },
  { id: "drinks" as MenuCategory, label: "مشروبات" },
  { id: "desserts" as MenuCategory, label: "حلويات" },
];

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>("all");

  const filteredItems =
    activeCategory === "all"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  return (
    <section id="menu" className="py-20 bg-background" data-testid="section-menu">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            className="text-4xl md:text-5xl font-bold font-['Cairo'] text-foreground mb-4"
            data-testid="text-menu-title"
          >
            قائمة الطعام
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            اختر من تشكيلتنا المميزة من الأطباق الشهية المحضرة بأجود المكونات
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12" data-testid="menu-categories">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              data-testid={`button-category-${category.id}`}
              className="hover-elevate"
            >
              {category.label}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <Card
              key={item.id}
              className="p-6 hover-elevate transition-all duration-300"
              data-testid={`card-menu-item-${item.id}`}
            >
              <div className="flex justify-between items-start gap-4 mb-3">
                <h3
                  className="text-xl font-semibold text-foreground flex-1"
                  data-testid={`text-item-name-${item.id}`}
                >
                  {item.name}
                </h3>
                <span
                  className="text-lg font-bold text-primary whitespace-nowrap"
                  data-testid={`text-item-price-${item.id}`}
                >
                  {item.price}
                </span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
