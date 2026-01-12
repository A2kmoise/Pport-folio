import React, { useState } from "react";

interface ContactFormProps {
    className?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ className = "" }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically send the form data to a server
        console.log("Form submitted:", formData);
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });

        // Reset success message after 3 seconds
        setTimeout(() => setSubmitted(false), 3000);
    };

    return (
        <div className={className}>
            <div className="bg-card/40 backdrop-blur-md border border-border/50 rounded-xl p-5 sm:p-6 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/5 opacity-50" />

                <div className="relative z-10">
                    <h3 className="text-lg sm:text-xl font-bold text-foreground mb-1">Send a Message</h3>
                    <p className="text-muted-foreground text-xs sm:text-sm mb-4 font-light">
                        Get in touch and let me know how I can help you.
                    </p>

                    {submitted && (
                        <div className="mb-4 p-3 bg-success/10 border border-success/30 rounded-lg">
                            <p className="text-success font-medium text-xs">
                                ✓ Thank you for your message! I'll get back to you soon.
                            </p>
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-xs font-semibold text-foreground mb-1.5">
                                Your Name
                            </label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                placeholder="Your Name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-3 py-2.5 bg-background border border-border/60 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/70 focus:border-primary transition-all duration-200 text-sm placeholder:text-muted-foreground"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-xs font-semibold text-foreground mb-1.5">
                                Your Email
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="your.email@example.com"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-3 py-2.5 bg-background border border-border/60 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/70 focus:border-primary transition-all duration-200 text-sm placeholder:text-muted-foreground"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-xs font-semibold text-foreground mb-1.5">
                                Your Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                placeholder="Tell me about your project..."
                                required
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full px-3 py-2.5 bg-background border border-border/60 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/70 focus:border-primary transition-all duration-200 text-sm resize-none placeholder:text-muted-foreground"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full py-2.5 px-3 bg-gradient-primary text-white rounded-lg hover:shadow-glow transition-all duration-300 font-semibold text-sm flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-card"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="16"
                                height="16"
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
        </div>
    );
};

export default ContactForm;
