import React, { useRef, useState } from "react";
import { X } from "lucide-react";
import { toast } from "sonner";
import emailjs from "emailjs-com";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const formRef = useRef<HTMLFormElement | null>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    const normalizeEnv = (value: string | undefined) =>
      value?.trim().replace(/^['"]|['"]$/g, "");

    const serviceId = normalizeEnv(import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined);
    const templateId = normalizeEnv(import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined);
    const publicKey = normalizeEnv(import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined);

    if (!serviceId || !templateId || !publicKey) {
      setStatus("error");
      toast.error("Email service is not configured.");
      return;
    }

    setStatus("sending");
    emailjs
      .sendForm(serviceId, templateId, formRef.current, publicKey)
      .then(() => {
        setStatus("sent");
        toast.success("Thank you! Your message has been sent successfully.");
        formRef.current?.reset();
        onClose();
      })
      .catch((err: unknown) => {
        setStatus("error");
        console.error("EmailJS sendForm failed:", err);
        const message = err instanceof Error ? err.message : "Failed to send message. Please try again.";
        toast.error(message);
      });
  };

  return (
    <div
      className={`fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50
        transition-all duration-300 ease-in-out p-4
        ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
      `}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
    >
      <div
        className={`bg-card border border-border/80 text-foreground p-6 sm:p-8 rounded-xl w-full max-w-md relative shadow-2xl
          transform transition-all duration-300 ease-in-out
          ${isOpen ? 'scale-100' : 'scale-95'}
        `}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary rounded-lg p-2"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <h2 id="contact-modal-title" className="text-2xl sm:text-3xl font-bold mb-6 text-primary">
          Send a Message
        </h2>

        <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
          <input type="hidden" name="title" value="New contact request" />
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">Your Name</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 bg-background border border-border/60 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/70 focus:border-primary transition-all duration-200 text-base placeholder:text-muted-foreground"
              aria-describedby="name-error"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">Your Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-3 bg-background border border-border/60 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/70 focus:border-primary transition-all duration-200 text-base placeholder:text-muted-foreground"
              aria-describedby="email-error"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">Your Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Tell me about your project..."
              required
              className="w-full px-4 py-3 bg-background border border-border/60 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/70 focus:border-primary transition-all duration-200 text-base resize-none placeholder:text-muted-foreground"
              aria-describedby="message-error"
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full py-3 px-4 bg-primary text-white rounded-lg hover:shadow-glow transition-all duration-300 font-semibold text-base flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-card"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="20"
              height="20"
              className="fill-white"
              aria-hidden="true"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path
                fill="currentColor"
                d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
              ></path>
            </svg>
            <span>Send Message</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;
