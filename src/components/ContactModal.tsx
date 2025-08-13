import React from "react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for contacting us!");
    onClose();
  };

return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50
        transition-opacity duration-300 ease-in-out
        ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
      `}
      onClick={onClose}
    >
      <div
        className={`bg-background text-foreground p-6 rounded-lg w-full max-w-md relative shadow-lg border border-border
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'scale-100' : 'scale-95'}
        `}
        onClick={(e) => e.stopPropagation()}
      >
      <button
        onClick={onClose}
        className="absolute top-2 right-3 text-muted-foreground hover:text-primary text-2xl font-bold"
      >
        &times;
      </button>

      <h2 className="text-2xl font-bold mb-4 text-primary">Send a Message</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          required
          className="w-full px-4 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/60"
        />

        <input
          type="email"
          placeholder="Your Email"
          required
          className="w-full px-4 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/60"
        />

        <textarea
          rows={4}
          placeholder="Type your message here..."
          required
          className="w-full px-4 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/60"
        />

<button
  type="submit"
  className="w-full py-2 px-4 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="20"
    height="20"
    className="fill-white"
  >
    <path fill="none" d="M0 0h24v24H0z"></path>
    <path
      fill="currentColor"
      d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
    ></path>
  </svg>
  <span>Send</span>
</button>

      </form>
    </div>
  </div>
);

};

export default ContactModal;
