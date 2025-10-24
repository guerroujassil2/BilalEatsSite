// ========== بيانات القائمة ==========
const menuItems = [
    {
        id: 1,
        name: "طبق المقبلات المشكل",
        description: "تشكيلة متنوعة من المقبلات الشرقية: حمص، بابا غنوج، فلافل، تبولة",
        price: "٤٥ ريال",
        category: "appetizers"
    },
    {
        id: 2,
        name: "حمص بالطحينة",
        description: "حمص طازج مع طحينة وزيت زيتون بكري",
        price: "٢٥ ريال",
        category: "appetizers"
    },
    {
        id: 3,
        name: "فتوش",
        description: "سلطة خضار طازجة مع خبز مقرمش ودبس الرمان",
        price: "٣٠ ريال",
        category: "appetizers"
    },
    {
        id: 4,
        name: "مشاوي مشكلة",
        description: "تشكيلة من الكباب والدجاج المشوي مع الأرز والخضار",
        price: "٩٥ ريال",
        category: "mains"
    },
    {
        id: 5,
        name: "كباب لحم",
        description: "كباب لحم مشوي على الفحم مع الأرز والسلطة",
        price: "٧٥ ريال",
        category: "mains"
    },
    {
        id: 6,
        name: "دجاج مشوي",
        description: "دجاج مشوي بالبهارات الخاصة مع الثوم والليمون",
        price: "٦٥ ريال",
        category: "mains"
    },
    {
        id: 7,
        name: "شاورما لحم",
        description: "شاورما لحم طازجة مع الطحينة والمخللات",
        price: "٣٥ ريال",
        category: "mains"
    },
    {
        id: 8,
        name: "عصير برتقال طازج",
        description: "عصير برتقال طبيعي ١٠٠٪",
        price: "١٨ ريال",
        category: "drinks"
    },
    {
        id: 9,
        name: "شاي بالنعناع",
        description: "شاي أخضر طازج بالنعناع",
        price: "١٢ ريال",
        category: "drinks"
    },
    {
        id: 10,
        name: "قهوة عربية",
        description: "قهوة عربية أصيلة بالهيل",
        price: "١٥ ريال",
        category: "drinks"
    },
    {
        id: 11,
        name: "بقلاوة",
        description: "حلوى شرقية محشوة بالفستق والعسل",
        price: "٣٥ ريال",
        category: "desserts"
    },
    {
        id: 12,
        name: "كنافة نابلسية",
        description: "كنافة طازجة بالجبنة والقطر",
        price: "٤٠ ريال",
        category: "desserts"
    },
    {
        id: 13,
        name: "أم علي",
        description: "حلى أم علي الساخن بالمكسرات",
        price: "٣٠ ريال",
        category: "desserts"
    }
];

// ========== وظيفة التنقل السلس ==========
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        
        // إغلاق قائمة الموبايل إذا كانت مفتوحة
        const mobileNav = document.getElementById('mobile-nav');
        if (mobileNav.classList.contains('active')) {
            mobileNav.classList.remove('active');
        }
    }
}

// ========== وظيفة الوضع الليلي/النهاري ==========
function initThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    const darkIcon = document.getElementById('theme-icon-dark');
    const lightIcon = document.getElementById('theme-icon-light');
    
    // التحقق من الوضع المحفوظ
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        darkIcon.classList.add('hidden');
        lightIcon.classList.remove('hidden');
    }
    
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const isDark = document.body.classList.contains('dark-mode');
        
        // تبديل الأيقونات
        darkIcon.classList.toggle('hidden');
        lightIcon.classList.toggle('hidden');
        
        // حفظ الاختيار
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
}

// ========== وظيفة شريط التنقل عند التمرير ==========
function initHeaderScroll() {
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// ========== وظيفة قائمة الموبايل ==========
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileNav = document.getElementById('mobile-nav');
    
    mobileMenuBtn.addEventListener('click', () => {
        mobileNav.classList.toggle('active');
    });
}

// ========== وظيفة عرض القائمة ==========
function renderMenu(category = 'all') {
    const menuContainer = document.getElementById('menu-items');
    const filteredItems = category === 'all' 
        ? menuItems 
        : menuItems.filter(item => item.category === category);
    
    menuContainer.innerHTML = filteredItems.map(item => `
        <div class="menu-item">
            <div class="menu-item-header">
                <h3 class="menu-item-name">${item.name}</h3>
                <span class="menu-item-price">${item.price}</span>
            </div>
            <p class="menu-item-description">${item.description}</p>
        </div>
    `).join('');
}

// ========== وظيفة فلترة القائمة ==========
function initMenuFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // إزالة الحالة النشطة من جميع الأزرار
            filterButtons.forEach(b => b.classList.remove('active'));
            
            // إضافة الحالة النشطة للزر المضغوط
            btn.classList.add('active');
            
            // تصفية وعرض القائمة
            const category = btn.getAttribute('data-category');
            renderMenu(category);
        });
    });
}

// ========== وظيفة زر العودة للأعلى ==========
function initBackToTop() {
    const backToTopBtn = document.getElementById('back-to-top');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
    
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ========== وظيفة إظهار الإشعار ==========
function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// ========== وظيفة إرسال نموذج الاتصال ==========
function initContactForm() {
    const form = document.getElementById('contact-form');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // الحصول على البيانات
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;
        
        // هنا يمكن إرسال البيانات لسيرفر
        console.log('تم إرسال الرسالة:', { name, phone, message });
        
        // إظهار رسالة نجاح
        showToast('تم الإرسال بنجاح! شكراً لتواصلك معنا. سنرد عليك في أقرب وقت ممكن.');
        
        // إعادة تعيين النموذج
        form.reset();
    });
}

// ========== تحديث السنة في التذييل ==========
function updateYear() {
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

// ========== تهيئة جميع الوظائف عند تحميل الصفحة ==========
document.addEventListener('DOMContentLoaded', () => {
    initThemeToggle();
    initHeaderScroll();
    initMobileMenu();
    renderMenu();
    initMenuFilter();
    initBackToTop();
    initContactForm();
    updateYear();
});
