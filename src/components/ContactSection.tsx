import { useState } from "react";
import DOMPurify from "dompurify";
import "./ContactSection.css";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [isSuccess, setIsSuccess] = useState(false);

  // Input validation functions
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateInput = (name: string, value: string): string => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Name is required';
        if (value.trim().length < 2) return 'Name must be at least 2 characters';
        if (value.trim().length > 50) return 'Name must be less than 50 characters';
        if (!/^[a-zA-Z\s\-']+$/.test(value)) return 'Name contains invalid characters';
        return '';
      case 'email':
        if (!value.trim()) return 'Email is required';
        if (!validateEmail(value)) return 'Please enter a valid email address';
        return '';
      case 'message':
        if (!value.trim()) return 'Message is required';
        if (value.trim().length < 10) return 'Message must be at least 10 characters';
        if (value.trim().length > 1000) return 'Message must be less than 1000 characters';
        return '';
      default:
        return '';
    }
  };

  const sanitizeInput = (input: string): string => {
    return DOMPurify.sanitize(input.trim());
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setIsSuccess(false);
    
    // Validate all fields
    const newErrors: {[key: string]: string} = {};
    Object.entries(formData).forEach(([key, value]) => {
      const error = validateInput(key, value);
      if (error) {
        newErrors[key] = error;
      }
    });
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      // Sanitize all inputs before processing
      const sanitizedData = {
        name: sanitizeInput(formData.name),
        email: sanitizeInput(formData.email),
        message: sanitizeInput(formData.message),
      };

      // Simulate form submission (replace with actual API call)
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Reset form on success
      setFormData({ name: "", email: "", message: "" });
      setIsSuccess(true);
      
      // Auto-hide success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
      
    } catch (error) {
      setErrors({ submit: 'Something went wrong. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
    
    setFormData((prev) => ({
      ...prev,
      [name]: value,
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
                href="https://www.linkedin.com/in/kynthanthonymarcaida/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Connect with me
              </a>
            </div>

            <div className="contact-method">
              <h4>GitHub</h4>
              <a
                href="https://github.com/kynth65"
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

          {isSuccess && (
            <div className="success-message" role="alert">
              Thank you for your message! I'll get back to you soon.
            </div>
          )}

          {errors.submit && (
            <div className="error-message" role="alert">
              {errors.submit}
            </div>
          )}

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
              className={errors.name ? 'error' : ''}
              aria-describedby={errors.name ? 'name-error' : undefined}
              autoComplete="name"
            />
            {errors.name && (
              <span id="name-error" className="field-error" role="alert">
                {errors.name}
              </span>
            )}
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
              className={errors.email ? 'error' : ''}
              aria-describedby={errors.email ? 'email-error' : undefined}
              autoComplete="email"
            />
            {errors.email && (
              <span id="email-error" className="field-error" role="alert">
                {errors.email}
              </span>
            )}
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
              className={errors.message ? 'error' : ''}
              aria-describedby={errors.message ? 'message-error' : undefined}
            />
            {errors.message && (
              <span id="message-error" className="field-error" role="alert">
                {errors.message}
              </span>
            )}
          </div>

          <button
            type="submit"
            className="submit-button"
            disabled={isSubmitting || Object.keys(errors).length > 0}
            aria-describedby="submit-status"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
