import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MapPin, Phone, Mail } from "lucide-react";

export function ContactInfo() {
  return (
    <div className="space-y-6">
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
            <p>brightqaerospacee@gmail.com
            </p>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardContent className="p-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.242092905232!2d77.26998057487768!3d9.041667588790803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0681450f3cac6b%3A0x9a29b17939093e95!2s77A%2F166%2C%20Matharasa%20St%2C%20Singara%20Thopu%2C%20Vadakarai%2C%20Vadakarai%20Keezhpadugai%2C%20Tamil%20Nadu%20627812!5e0!3m2!1sen!2sin!4v1740247376033!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </CardContent>
      </Card>
    </div>
  );
}
