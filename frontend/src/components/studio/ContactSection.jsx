import { useState } from "react";
import axios from "axios";
import { Reveal } from "@/components/studio/Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/sonner";
import { Instagram, MessageCircle } from "lucide-react";
import { brandConfig, budgetOptions, projectTypeOptions } from "@/data/studioContent";

const initialFormState = {
  name: "",
  email: "",
  phone: "",
  projectType: "",
  budget: "",
  message: "",
};

export const ContactSection = () => {
  const [form, setForm] = useState(initialFormState);
  const [submitting, setSubmitting] = useState(false);
  const [statusText, setStatusText] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    setStatusText("");

    try {
      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/inquiries`, {
        name: form.name,
        email: form.email,
        phone: form.phone || null,
        project_type: form.projectType,
        budget: form.budget || null,
        message: form.message,
      });

      toast.success("Inquiry sent successfully.");
      setStatusText("Thank you — our team will contact you within 24 hours.");
      setForm(initialFormState);
    } catch (error) {
      toast.error("Unable to send inquiry. Please try again.");
      setStatusText("We could not submit your inquiry right now. Please retry.");
      console.error("Inquiry submission failed", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32" data-testid="contact-section">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 lg:grid-cols-[1fr,1.15fr] lg:px-10">
        <Reveal className="space-y-6">
          <p className="text-xs uppercase tracking-[0.3em] text-studio-gold" data-testid="contact-eyebrow-text">
            Start a Project
          </p>
          <h2 className="text-3xl text-studio-text sm:text-4xl" data-testid="contact-heading-text">
            Let’s craft your next iconic interior story.
          </h2>
          <p className="text-base text-studio-text/75 md:text-lg" data-testid="contact-description-text">
            Share your vision and we will schedule a discovery call to shape concept,
            timeline, and execution roadmap.
          </p>

          <div className="space-y-2 border-l border-studio-champagne/40 pl-4" data-testid="contact-info-block">
            <a
              href={`mailto:${brandConfig.contact.email}`}
              className="block text-sm text-studio-text/80 transition-colors duration-300 hover:text-studio-champagne"
              data-testid="contact-email-link"
            >
              <span data-testid="contact-email-text">Email: {brandConfig.contact.email}</span>
            </a>
            <a
              href={`tel:${brandConfig.contact.phoneRaw}`}
              className="block text-sm text-studio-text/80 transition-colors duration-300 hover:text-studio-champagne"
              data-testid="contact-phone-link"
            >
              <span data-testid="contact-phone-text">Phone: {brandConfig.contact.phoneDisplay}</span>
            </a>
            <p className="text-sm text-studio-text/80" data-testid="contact-location-text">
              Address: {brandConfig.contact.address}
            </p>

            <a
              href={`https://wa.me/${brandConfig.contact.whatsappNumberIntl}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 pt-1 text-sm text-studio-champagne transition-colors duration-300 hover:text-white"
              data-testid="contact-whatsapp-link"
            >
              <MessageCircle className="h-4 w-4" />
              <span data-testid="contact-whatsapp-text">WhatsApp: {brandConfig.contact.phoneDisplay}</span>
            </a>

            <a
              href={brandConfig.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 pt-2 text-sm text-studio-champagne transition-colors duration-300 hover:text-white"
              data-testid="contact-instagram-link"
            >
              <Instagram className="h-4 w-4" />
              <span data-testid="contact-instagram-handle-text">{brandConfig.instagramHandle}</span>
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="border border-white/10 bg-studio-panel/80 p-7 backdrop-blur md:p-10">
          <form className="space-y-6" onSubmit={handleSubmit} data-testid="contact-form">
            <Input
              name="name"
              value={form.name}
              onChange={handleInputChange}
              required
              placeholder="Your Name"
              className="h-12 rounded-none border-x-0 border-t-0 border-b border-white/25 px-0 text-sm focus-visible:ring-0"
              data-testid="contact-name-input"
            />
            <Input
              name="email"
              type="email"
              value={form.email}
              onChange={handleInputChange}
              required
              placeholder="Email Address"
              className="h-12 rounded-none border-x-0 border-t-0 border-b border-white/25 px-0 text-sm focus-visible:ring-0"
              data-testid="contact-email-input"
            />
            <Input
              name="phone"
              value={form.phone}
              onChange={handleInputChange}
              placeholder="Phone Number"
              className="h-12 rounded-none border-x-0 border-t-0 border-b border-white/25 px-0 text-sm focus-visible:ring-0"
              data-testid="contact-phone-input"
            />

            <div className="grid gap-5 md:grid-cols-2" data-testid="contact-select-group">
              <select
                name="projectType"
                value={form.projectType}
                onChange={handleInputChange}
                required
                className="h-12 w-full rounded-none border-x-0 border-t-0 border-b border-white/25 bg-transparent px-0 text-sm text-studio-text focus:outline-none"
                data-testid="contact-project-type-select"
              >
                <option value="" className="bg-black">Project Type</option>
                {projectTypeOptions.map((option) => (
                  <option key={option} value={option} className="bg-black">
                    {option}
                  </option>
                ))}
              </select>

              <select
                name="budget"
                value={form.budget}
                onChange={handleInputChange}
                className="h-12 w-full rounded-none border-x-0 border-t-0 border-b border-white/25 bg-transparent px-0 text-sm text-studio-text focus:outline-none"
                data-testid="contact-budget-select"
              >
                <option value="" className="bg-black">Budget Range</option>
                {budgetOptions.map((option) => (
                  <option key={option} value={option} className="bg-black">
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <Textarea
              name="message"
              value={form.message}
              onChange={handleInputChange}
              required
              rows={4}
              placeholder="Tell us about your project"
              className="rounded-none border-x-0 border-t-0 border-b border-white/25 px-0 text-sm focus-visible:ring-0"
              data-testid="contact-message-textarea"
            />

            {statusText && (
              <p className="text-sm text-studio-champagne" data-testid="contact-status-text">
                {statusText}
              </p>
            )}

            <Button
              type="submit"
              disabled={submitting}
              className="w-full rounded-none bg-studio-champagne py-6 text-xs font-bold uppercase tracking-[0.22em] text-black hover:bg-white"
              data-testid="contact-submit-button"
            >
              {submitting ? "Sending Inquiry..." : "Send Inquiry"}
            </Button>
          </form>
        </Reveal>
      </div>
    </section>
  );
};