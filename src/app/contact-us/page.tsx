import { ContactForm } from '@/components/contact/ContactForm';
import { ContactInfo } from '@/components/contact/ContactInfo';

export const metadata = {
  title: 'Contact Us - BrightQ Aerospace Limited',
  description: 'Get in touch with BrightQ Aerospace Limited for inquiries about our space technology services and products.',
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ContactForm />
        <ContactInfo />
      </div>
    </div>
  );
}