import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { CheckCircle2 } from 'lucide-react';

const contactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Valid phone number is required'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function Contact() {
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    }
  });

  const onSubmit = (data: ContactFormData) => {
    // Simulate API call
    setTimeout(() => {
      setIsSuccess(true);
      form.reset();
      setTimeout(() => setIsSuccess(false), 5000);
    }, 500);
  };

  return (
    <div className="pt-24 pb-24 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Inquire about a specific vehicle, arrange a private viewing, or speak with one of our automotive specialists.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Form */}
          <div className="glassmorphism p-8 md:p-12 rounded-xl">
            <h2 className="text-2xl font-bold text-white mb-8">Send a Message</h2>
            
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label className="block text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">Full Name</label>
                <input
                  type="text"
                  {...form.register("name")}
                  className="w-full bg-black/50 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                  placeholder="John Doe"
                />
                {form.formState.errors.name && (
                  <span className="text-red-500 text-xs mt-1 block">{form.formState.errors.name.message}</span>
                )}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">Email Address</label>
                  <input
                    type="email"
                    {...form.register("email")}
                    className="w-full bg-black/50 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                    placeholder="john@example.com"
                  />
                  {form.formState.errors.email && (
                    <span className="text-red-500 text-xs mt-1 block">{form.formState.errors.email.message}</span>
                  )}
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">Phone Number</label>
                  <input
                    type="tel"
                    {...form.register("phone")}
                    className="w-full bg-black/50 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                    placeholder="+1 (555) 000-0000"
                  />
                  {form.formState.errors.phone && (
                    <span className="text-red-500 text-xs mt-1 block">{form.formState.errors.phone.message}</span>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">Message</label>
                <textarea
                  {...form.register("message")}
                  rows={5}
                  className="w-full bg-black/50 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="How can we help you?"
                ></textarea>
                {form.formState.errors.message && (
                  <span className="text-red-500 text-xs mt-1 block">{form.formState.errors.message.message}</span>
                )}
              </div>

              <button
                type="submit"
                disabled={form.formState.isSubmitting}
                className="w-full bg-primary text-white font-bold py-4 rounded uppercase tracking-widest hover:bg-red-700 hover:shadow-[0_0_20px_rgba(220,38,38,0.4)] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {form.formState.isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {isSuccess && (
                <div className="mt-4 p-4 bg-green-500/10 border border-green-500/20 rounded flex items-start gap-3 animate-in fade-in zoom-in duration-300">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <p className="text-green-400 text-sm">
                    ✅ Message Sent Successfully! We'll get back to you within 24 hours.
                  </p>
                </div>
              )}
            </form>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="glassmorphism p-8 rounded-xl">
              <h3 className="text-xl font-bold text-white mb-6">Showroom Details</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Address</h4>
                    <p className="text-gray-400 text-sm">123 Apex Drive<br/>Beverly Hills, CA 90210</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Phone</h4>
                    <p className="text-gray-400 text-sm">+1 (310) 555-0199<br/>Mon-Sat, 9am - 7pm PST</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Email</h4>
                    <p className="text-gray-400 text-sm">concierge@apexmotors.com<br/>sales@apexmotors.com</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Hours of Operation</h4>
                    <p className="text-gray-400 text-sm">Monday - Saturday: 9:00 AM - 7:00 PM<br/>Sunday: By Appointment Only</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Map Placeholder */}
            <div className="glassmorphism p-2 rounded-xl overflow-hidden h-[300px] relative flex items-center justify-center group border border-white/5">
              <div className="absolute inset-0 bg-black/80 z-10 flex flex-col items-center justify-center p-6 text-center backdrop-blur-[2px]">
                <MapPin className="w-8 h-8 text-primary mb-3" />
                <span className="text-white font-bold tracking-widest uppercase mb-1">Beverly Hills Showroom</span>
                <span className="text-gray-400 text-sm">[ Interactive Map Placeholder ]</span>
              </div>
              {/* Fake map background */}
              <div className="absolute inset-0 opacity-20 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=Beverly+Hills,CA&zoom=13&size=600x300&maptype=roadmap&style=feature:all|element:labels.text.fill|color:0x8ec3b9&style=feature:all|element:labels.text.stroke|color:0x1a3646&style=feature:landscape|element:geometry|color:0x2c5a71&style=feature:road|element:geometry.fill|color:0x023e58&style=feature:road|element:geometry.stroke|color:0x030818&style=feature:road.highway|element:geometry.fill|color:0x011e2b&style=feature:water|element:geometry|color:0x0e1626')] bg-cover bg-center"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
