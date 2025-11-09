import { FormEvent, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useCart } from "@/hooks/useCart";
import { currencyFormatter } from "@/lib/mockCourses";
import { toast } from "sonner";

const availableCoupons: Record<string, number> = {
  SKILLS100: 100000,
  NEWEARLY: 250000,
};

const Checkout = () => {
  const navigate = useNavigate();
  const { items, subtotal, clearCart } = useCart();
  const [couponInput, setCouponInput] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState<{ code: string; discount: number } | null>(
    null
  );
  const [couponError, setCouponError] = useState("");

  const discount = appliedCoupon?.discount ?? 0;
  const total = Math.max(subtotal - discount, 0);
  const hasItems = items.length > 0;

  const summary = useMemo(
    () => ({
      subtotal,
      discount,
      total,
    }),
    [subtotal, discount, total]
  );

  const handleApplyCoupon = () => {
    const normalized = couponInput.trim().toUpperCase();
    if (!normalized) {
      setCouponError("Vui long nhap ma giam gia");
      return;
    }
    if (!availableCoupons[normalized]) {
      setCouponError("Ma khong hop le hoac da het han");
      setAppliedCoupon(null);
      return;
    }
    setCouponError("");
    setAppliedCoupon({ code: normalized, discount: availableCoupons[normalized] });
    toast.success("Ap dung ma thanh cong", {
      description: `Giam ${currencyFormatter.format(availableCoupons[normalized])}`,
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    toast.success("Thanh toan mo phong thanh cong", {
      description: "Thong tin cua ban da duoc ghi nhan.",
    });
    clearCart();
    navigate("/programs");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation showCartIcon />

      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4 space-y-8">
          <div className="flex flex-col gap-2">
            <p className="text-primary font-semibold uppercase tracking-[0.3em] text-sm">
              Checkout
            </p>
            <h1 className="text-4xl font-bold text-foreground">Thanh toan khoa hoc</h1>
            <p className="text-muted-foreground max-w-2xl">
              Nhap thong tin hoc vien va hoan tat thanh toan. Luong nay dang su dung mock data va
              chua ket noi cong thanh toan that.
            </p>
          </div>

          {!hasItems ? (
            <Card className="p-10 text-center space-y-4">
              <p className="text-lg">Chua co khoa hoc nao trong gio hang.</p>
              <Button onClick={() => navigate("/programs")}>Quay lai khoa hoc</Button>
            </Card>
          ) : (
            <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
              <Card className="p-6">
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <h2 className="text-xl font-semibold mb-4">Thong tin nguoi mua</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="fullName">Ho va ten</Label>
                        <Input id="fullName" required placeholder="Nguyen Van A" />
                      </div>
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          placeholder="you@example.com"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">So dien thoai</Label>
                        <Input id="phone" required placeholder="090 xxx xxxx" />
                      </div>
                      <div>
                        <Label htmlFor="company">Cong ty (khong bat buoc)</Label>
                        <Input id="company" placeholder="Skills Bridge" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="note">Ghi chu cho doi ngu ho tro</Label>
                    <Textarea
                      id="note"
                      rows={4}
                      placeholder="Vi du: can xuat hoa don, uu tien lien he buoi toi..."
                    />
                  </div>

                  <Button type="submit" className="w-full bg-primary text-white text-lg">
                    Hoan tat thanh toan
                  </Button>
                </form>
              </Card>

              <Card className="p-6 space-y-5 h-fit">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold">Don hang</h2>
                  <span className="text-sm text-muted-foreground">
                    {items.length} khoa hoc
                  </span>
                </div>
                <div className="space-y-3">
                  {items.map((item) => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <div>
                        <p className="font-medium text-foreground">{item.title}</p>
                        <p className="text-muted-foreground">x{item.quantity}</p>
                      </div>
                      <p className="font-semibold text-foreground">
                        {currencyFormatter.format(item.price * item.quantity)}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="space-y-3 border border-dashed border-border rounded-xl p-4">
                  <Label htmlFor="coupon">Ma giam gia</Label>
                  <div className="flex flex-col gap-3">
                    <div className="flex gap-2">
                      <Input
                        id="coupon"
                        placeholder="Nhap ma cua ban"
                        value={couponInput}
                        onChange={(event) => setCouponInput(event.target.value.toUpperCase())}
                      />
                      <Button type="button" variant="secondary" onClick={handleApplyCoupon}>
                        Ap dung
                      </Button>
                    </div>
                    {couponError && <p className="text-sm text-red-500">{couponError}</p>}
                    {appliedCoupon && (
                      <p className="text-sm text-emerald-600">
                        Da ap dung ma {appliedCoupon.code} (-{currencyFormatter.format(appliedCoupon.discount)})
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tam tinh</span>
                    <span className="font-semibold">
                      {currencyFormatter.format(summary.subtotal)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Giam gia</span>
                    <span className="font-semibold text-emerald-600">
                      -{currencyFormatter.format(summary.discount)}
                    </span>
                  </div>
                  <div className="flex justify-between text-lg font-bold">
                    <span>Tong cong</span>
                    <span className="text-primary">{currencyFormatter.format(summary.total)}</span>
                  </div>
                </div>
              </Card>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Checkout;
