import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card';
import { Button } from './components/ui/button';
import { Input } from './components/ui/input';
import { Textarea } from './components/ui/textarea';
import { Label } from './components/ui/label';
import { useToast } from './hooks/use-toast';
import { Toaster } from './components/ui/toaster';
import { Mail, User, MessageSquare, Send } from 'lucide-react';
import { submitContactForm } from './mock';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await submitContactForm(formData);
      
      if (response.success) {
        toast({
          title: "Message Sent Successfully!",
          description: response.message,
          duration: 5000,
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          company: '',
          message: ''
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Card className="border-0 shadow-2xl bg-white">
        <CardHeader className="text-center pb-6">
          <CardTitle className="text-2xl font-bold text-navy-900 flex items-center justify-center">
            <Mail className="w-6 h-6 mr-3 text-tech-blue-600" />
            Get In Touch
          </CardTitle>
          <p className="text-slate-600 mt-2">
            Let's discuss your technology challenges and transformation opportunities
          </p>
        </CardHeader>
        <CardContent className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium text-slate-700 flex items-center">
                  <User className="w-4 h-4 mr-2" />
                  Full Name *
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="border-slate-300 focus:border-tech-blue-500 focus:ring-tech-blue-500"
                  placeholder="Your full name"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-slate-700 flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  Email Address *
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="border-slate-300 focus:border-tech-blue-500 focus:ring-tech-blue-500"
                  placeholder="your.email@company.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="company" className="text-sm font-medium text-slate-700">
                Company/Organization
              </Label>
              <Input
                id="company"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                className="border-slate-300 focus:border-tech-blue-500 focus:ring-tech-blue-500"
                placeholder="Your company name"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-sm font-medium text-slate-700 flex items-center">
                <MessageSquare className="w-4 h-4 mr-2" />
                Message *
              </Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={5}
                className="border-slate-300 focus:border-tech-blue-500 focus:ring-tech-blue-500 resize-none"
                placeholder="Tell me about your project, challenges, or how I can help..."
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-tech-blue-600 hover:bg-tech-blue-700 text-white py-3 text-lg font-medium transition-colors duration-200"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5 mr-3" />
                  Send Message
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
      <Toaster />
    </>
  );
};

export default ContactForm;