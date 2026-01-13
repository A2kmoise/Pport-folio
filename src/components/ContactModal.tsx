import { X } from "lucide-react";
import { toast } from "sonner";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! Your message has been sent successfully.");
    onClose();
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

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">Your Name</label>
            <input
              id="name"
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
              rows={5}
              placeholder="Tell me about your project..."
              required
              className="w-full px-4 py-3 bg-background border border-border/60 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/70 focus:border-primary transition-all duration-200 text-base resize-none placeholder:text-muted-foreground"
              aria-describedby="message-error"
            />
          </div>

          <button
            type="submit"
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
