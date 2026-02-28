import React, { useRef, useState } from "react";
import { toast } from "sonner";
import emailjs from "emailjs-com";

interface ContactFormProps {
    className?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ className = "" }) => {
    const formRef = useRef<HTMLFormElement | null>(null);
    const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

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
                toast.success("Message sent successfully! I'll get back to you soon.", {
                    description: "Thanks for reaching out!",
                    duration: 5000,
                });
                formRef.current?.reset();
                setFormData({ name: "", email: "", message: "" });
            })
            .catch((err: unknown) => {
                setStatus("error");
                console.error("EmailJS sendForm failed:", err);
                const message = err instanceof Error ? err.message : "Failed to send message. Please try again.";
                toast.error(message);
            });
    };

    return (
        <div className={className}>
            <div className="bg-card/30 border border-primary/10 rounded-none p-8 relative">
                <div className="relative z-10">
                    <h3 className="text-2xl font-serif italic text-primary mb-2">Send a Message</h3>
                    <p className="text-foreground/50 text-sm mb-10 font-light font-sans italic">
                        "Ready to initiate a new project? Just contact me
                    </p>

                    <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
                        <input
                            type="hidden"
                            name="title"
                            value={formData.name ? `New message from ${formData.name}` : "New contact request"}
                        />
                        <div className="space-y-2">
                            <label htmlFor="name" className="block text-[10px] tracking-[0.3em] font-medium text-foreground/40 uppercase">
                                Full Name
                            </label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                placeholder="E.g. John Doe"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full h-12 px-0 bg-transparent border-b border-primary/20 rounded-none focus:outline-none focus:border-primary transition-all duration-500 text-sm placeholder:text-foreground/20"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="email" className="block text-[10px] tracking-[0.3em] font-medium text-foreground/40 uppercase">
                                Email Address
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="john@example.com"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full h-12 px-0 bg-transparent border-b border-primary/20 rounded-none focus:outline-none focus:border-primary transition-all duration-500 text-sm placeholder:text-foreground/20"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="block text-[10px] tracking-[0.3em] font-medium text-foreground/40 uppercase">
                                Your Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                placeholder="Compose your message..."
                                required
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full py-4 bg-transparent border-b border-primary/20 rounded-none focus:outline-none focus:border-primary transition-all duration-500 text-sm resize-none placeholder:text-foreground/20"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={status === "sending"}
                            className="w-full h-14 bg-primary text-primary-foreground rounded-none hover:bg-primary/90 transition-all duration-500 tracking-[0.2em] font-medium text-xs uppercase flex items-center justify-center gap-3"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="14"
                                height="14"
                                className="fill-current"
                                aria-hidden="true"
                            >
                                <path fill="none" d="M0 0h24v24H0z"></path>
                                <path
                                    fill="currentColor"
                                    d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                                ></path>
                            </svg>
                            <span>DISPATCH MESSAGE</span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
