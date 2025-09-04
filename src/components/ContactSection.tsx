import { useState } from "react";
import "./ContactSection.css";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Reset form
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);

    // Show success message (you could implement a proper toast/notification here)
    alert("Thank you for your message! I'll get back to you soon.");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section className="contact-section">
      <div className="contact-content">
        <div className="contact-info">
          <h2>Let's Work Together</h2>
          <p className="contact-intro">
            I'm always excited to discuss new opportunities, collaborate on
            projects, or just chat about web development. Feel free to reach
            out!
          </p>

          <div className="contact-methods">
            <div className="contact-method">
              <h4>Email</h4>
              <a href="mailto:kynth65@gmail.com">kynth65@gmail.com</a>
            </div>

            <div className="contact-method">
              <h4>LinkedIn</h4>
              <a
                href="https://linkedin.com/in/kynth-marcaida"
                target="_blank"
                rel="noopener noreferrer"
              >
                Connect with me
              </a>
            </div>

            <div className="contact-method">
              <h4>GitHub</h4>
              <a
                href="https://github.com/kynth-marcaida"
                target="_blank"
                rel="noopener noreferrer"
              >
                View my repositories
              </a>
            </div>
          </div>

          <div className="availability">
            <h4>Current Status</h4>
            <div className="status-indicator">
              <span className="status-dot available"></span>
              <span>Available for new opportunities</span>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h3>Send me a message</h3>

          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your.email@example.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Tell me about your project or just say hello..."
              rows={5}
            />
          </div>

          <button
            type="submit"
            className="submit-button"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
