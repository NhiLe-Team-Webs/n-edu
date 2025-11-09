import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { Course } from "@/lib/mockCourses";

export type CartItem = {
  id: string;
  title: string;
  image: string;
  price: number;
  originalPrice?: number;
  quantity: number;
  badge?: string;
};

type CartContextValue = {
  items: CartItem[];
  addItem: (course: Course, quantity?: number) => void;
  removeItem: (courseId: string) => void;
  updateQuantity: (courseId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  subtotal: number;
};

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "n-edu-cart";

const loadInitialCart = (): CartItem[] => {
  if (typeof window === "undefined") return [];
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (!stored) return [];
    return JSON.parse(stored) as CartItem[];
  } catch {
    return [];
  }
};

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>(loadInitialCart);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const addItem = (course: Course, quantity = 1) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.id === course.id);
      if (existing) {
        return prev.map((item) =>
          item.id === course.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [
        ...prev,
        {
          id: course.id,
          title: course.title,
          image: course.image,
          price: course.price,
          originalPrice: course.originalPrice,
          quantity,
          badge: course.badge,
        },
      ];
    });
  };

  const removeItem = (courseId: string) =>
    setItems((prev) => prev.filter((item) => item.id !== courseId));

  const updateQuantity = (courseId: string, quantity: number) => {
    setItems((prev) =>
      prev
        .map((item) =>
          item.id === courseId ? { ...item, quantity: Math.max(1, quantity) } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const clearCart = () => setItems([]);

  const totalItems = useMemo(
    () => items.reduce((total, item) => total + item.quantity, 0),
    [items]
  );

  const subtotal = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity * item.price, 0),
    [items]
  );

  const value = {
    items,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    totalItems,
    subtotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }
  return context;
};
