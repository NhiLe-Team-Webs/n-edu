import { MessageSquare, Phone, Mail, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingActions = () => {
  const actions = [
    { icon: MessageSquare, label: "Chat", href: "#contact" },
    { icon: Phone, label: "Phone", href: "tel:+65" },
    { icon: Mail, label: "Email", href: "mailto:info@nhi.sg" },
    { icon: Calendar, label: "Schedule", href: "#courses" },
  ];

  return (
    <div className="fixed right-4 bottom-4 flex flex-col gap-3 z-40">
      {actions.map((action, index) => (
        <Button
          key={index}
          size="icon"
          className="w-14 h-14 rounded-full bg-primary hover:bg-primary/90 shadow-lg hover:scale-110 transition-transform"
          asChild
        >
          <a href={action.href} aria-label={action.label}>
            <action.icon className="w-6 h-6 text-primary-foreground" />
          </a>
        </Button>
      ))}
    </div>
  );
};

export default FloatingActions;
