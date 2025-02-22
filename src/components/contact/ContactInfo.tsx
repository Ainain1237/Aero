// contacts/contactInfo.tsx
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MapPin, Phone, Mail } from "lucide-react";

export function ContactInfo() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Contact Information</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center">
          <MapPin className="w-5 h-5 mr-2 text-primary" />
          <p>
            77a matharasa Street, Vadakarai, 627812-Tenkasi, Tamilnadu
          </p>
        </div>
        <div className="flex items-center">
          <Phone className="w-5 h-5 mr-2 text-primary" />
          <p>9025230243</p>
        </div>
        <div className="flex items-center">
          <Mail className="w-5 h-5 mr-2 text-primary" />
          <p>ainainaftab111@gmail.com</p>
        </div>
      </CardContent>
    </Card>
  );
}