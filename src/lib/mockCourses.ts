export type Course = {
  id: string;
  title: string;
  shortDescription: string;
  price: number;
  originalPrice?: number;
  badge?: string;
  image: string;
  mode: "Online" | "Offline" | "Hybrid";
  duration: string;
  categories: string[];
};

export const courses: Course[] = [
  {
    id: "ai-survival-kit",
    title: "Khoa hoc AI Survival Kit - Bo 6 ky nang song con thoi AI",
    shortDescription: "Lam chu 6 ky nang AI de gia tang hieu suat ngay trong 30 ngay.",
    price: 1399000,
    originalPrice: 2764000,
    badge: "Khoa hoc moi",
    image: "/images/lachinhminh.jpg",
    mode: "Online",
    duration: "6 tuan",
    categories: ["AI", "Productivity"],
  },
  {
    id: "ai-workflow-automation",
    title: "Khoa hoc AI Workflow Automation - Tu dong hoa quy trinh voi Zapier, Make AI, N8N",
    shortDescription: "Xay dung pipeline tu dong giup doanh nghiep van hanh 24/7.",
    price: 1599000,
    originalPrice: 2199000,
    badge: "Hot",
    image: "/images/genai.jpg",
    mode: "Online",
    duration: "4 tuan",
    categories: ["Automation", "Productivity"],
  },
  {
    id: "looker-studio-advanced",
    title: "Looker Studio for Everyone - 1 Click Tu Dong Hoa Bao Cao",
    shortDescription: "Thiet ke dashboard realtime, ho tro ra quyet dinh chinh xac.",
    price: 1899000,
    originalPrice: 2499000,
    badge: "Uu dai",
    image: "/images/aibusiness.jpg",
    mode: "Online",
    duration: "3 tuan",
    categories: ["Data", "Business"],
  },
  {
    id: "ai-content-mastery",
    title: "AI Content Mastery - Lam sao de tao noi dung dung giong hieu",
    shortDescription: "Quy trinh tao content da nen tang voi tro ly AI ca nhan.",
    price: 899000,
    originalPrice: 1070000,
    badge: "Uu dai -23%",
    image: "/images/thuonghieu.jpg",
    mode: "Online",
    duration: "10 buoi",
    categories: ["Content", "Marketing"],
  },
  {
    id: "ai-decision-making",
    title: "AI for Decision Making - 7 ngay ung dung du lieu thanh quyet dinh",
    shortDescription: "Framework X5 toc do dua ra quyet dinh cho lanh dao.",
    price: 2999000,
    originalPrice: 3499000,
    badge: "Uu dai -27%",
    image: "/images/sucmanhvohan.jpg",
    mode: "Hybrid",
    duration: "7 ngay",
    categories: ["Strategy", "Leadership"],
  },
  {
    id: "ai-foundation-combo",
    title: "AI Foundation: Combo 2 khoa AI Content Mastery + Data Processing",
    shortDescription: "Combo xay nen kien thuc AI toan dien cho doi ngu marketing.",
    price: 1699000,
    originalPrice: 2169000,
    badge: "Combo",
    image: "/images/cuocsong.jpg",
    mode: "Online",
    duration: "5 tuan",
    categories: ["AI", "Marketing"],
  },
];

export const currencyFormatter = new Intl.NumberFormat("vi-VN", {
  style: "currency",
  currency: "VND",
  maximumFractionDigits: 0,
});
