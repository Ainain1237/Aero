"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Sending...');

    const form = new FormData();
    form.append('access_key', process.env.NEXT_PUBLIC_YOUR_ACCESS_KEY_HERE || '');
    form.append('name', formData.name);
    form.append('email', formData.email);
    form.append('subject', formData.subject);
    form.append('message', formData.message);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: form
      });

      const data = await response.json();

      if (data.success) {
        setStatus('Message sent successfully');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      } else {
        console.log('Error:', data);
        setStatus(data.message || 'Failed to send message');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('Failed to send message');
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Send us a Message</CardTitle>
        <CardDescription>Fill out the form below and we&apos;ll get back to you as soon as possible.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <Input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <Input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <Textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <Button type="submit">Send Message</Button>
          {status && <p className="mt-4 text-sm">{status}</p>}
        </form>
      </CardContent>
    </Card>
  );
}