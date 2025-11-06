import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, Send } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.name || !formData.phone || !formData.email || !formData.message) {
      toast({
        title: "Lỗi",
        description: "Vui lòng điền đầy đủ thông tin",
        variant: "destructive",
      });
      return;
    }

    // Success message
    toast({
      title: "Gửi thành công!",
      description: "Chúng tôi sẽ liên hệ với bạn sớm nhất có thể.",
    });

    // Reset form
    setFormData({
      name: "",
      phone: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Left Side - Contact Info */}
            <div>
              <div className="bg-primary rounded-3xl p-12 text-primary-foreground h-full flex flex-col justify-center">
                <div className="mb-12">
                  <div className="text-4xl font-bold mb-2">
                    <span className="text-white">N</span>
                    <span className="text-primary-foreground">Education</span>
                  </div>
                </div>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4">Liên hệ</h3>
                    <a 
                      href="tel:+84789785904" 
                      className="flex items-center gap-3 text-lg hover:underline"
                    >
                      <Phone className="w-5 h-5" />
                      (+84) 789785904
                    </a>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-4">Email</h3>
                    <a 
                      href="mailto:nedu@nhi.sg" 
                      className="flex items-center gap-3 text-lg hover:underline"
                    >
                      <Mail className="w-5 h-5" />
                      nedu@nhi.sg
                    </a>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-4">Telegram</h3>
                    <a 
                      href="https://t.me/neducationvn" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-lg hover:underline"
                    >
                      <Send className="w-5 h-5" />
                      @neducationvn
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div>
              <Card className="p-8">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Kết nối với chúng tôi
                </h2>
                <p className="text-muted-foreground mb-6">
                  Điền đầy đủ thông tin để nhận tư vấn từ N-EDU
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-foreground">
                      Họ và tên <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="name"
                      placeholder="Nhập họ và tên của bạn"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="mt-2"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone" className="text-foreground">
                        Số điện thoại <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="Nhập số điện thoại"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="mt-2"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-foreground">
                        Email <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Nhập email của bạn"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="mt-2"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-foreground">
                      Nội dung <span className="text-destructive">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Bạn cần hỗ trợ điều gì?"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="mt-2 min-h-32"
                      required
                    />
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 text-lg"
                  >
                    GỬI
                  </Button>
                </form>
              </Card>

              {/* Company Info */}
              <Card className="mt-6 p-6 bg-secondary/30">
                <h3 className="font-bold text-foreground mb-2">
                  CÔNG TY TNHH THƯƠNG MẠI DỊCH VỤ NHILE
                </h3>
                <p className="text-sm text-muted-foreground mb-1">
                  Mã số thuế: 0317268736
                </p>
                <p className="text-sm text-muted-foreground">
                  25 Lê Bá Trinh, Phường Hoà Cường Bắc, Quận Hải Châu, Đà Nẵng
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
