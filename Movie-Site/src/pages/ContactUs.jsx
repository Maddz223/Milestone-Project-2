import React, { useState, useEffect, useRef } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);

  const nameInputRef = useRef(null);
  const closeButtonRef = useRef(null);
  const modalRef = useRef(null);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = "Name is required";
    if (!formData.email.trim()) {
      errs.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = "Email is invalid";
    }
    if (!formData.message.trim()) errs.message = "Message is required";
    return errs;
  };

  // Update formData and clear error for the field on change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    setErrors((prevErrors) => {
      if (prevErrors[name]) {
        const newErrors = { ...prevErrors };
        delete newErrors[name];
        return newErrors;
      }
      return prevErrors;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setShowModal(true);
      setFormData({ name: "", email: "", message: "" });
    }
  };

  const closeModal = () => setShowModal(false);

  useEffect(() => {
    if (showModal) {
      closeButtonRef.current?.focus();
    } else {
      nameInputRef.current?.focus();
    }
  }, [showModal]);

  useEffect(() => {
    if (!showModal) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeModal();
      } else if (e.key === "Tab") {
        const focusableElements = modalRef.current.querySelectorAll(
          'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [showModal]);

  return (
    <div className="bg-gray-100 dark:bg-gray-900 px-4 py-12 pt-15 flex justify-center">
      <div className="max-w-lg w-full bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-4 text-center">Contact Us</h1>
        <p className="mb-6 text-center">If you have any questions, feel free to reach out!</p>

        <form onSubmit={handleSubmit} noValidate>
          <div className="space-y-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block  text-center font-semibold mb-1">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error" : undefined}
                ref={nameInputRef}
                className={`w-full p-2 border rounded ${
                  errors.name ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.name && (
                <p id="name-error" className="text-red-600 text-sm mt-1">
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-center font-semibold mb-1">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
                className={`w-full p-2 border rounded ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.email && (
                <p id="email-error" className="text-red-600 text-sm mt-1">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-center font-semibold mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-error" : undefined}
                className={`w-full p-2 border rounded ${
                  errors.message ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.message && (
                <p id="message-error" className="text-red-600 text-sm mt-1">
                  {errors.message}
                </p>
              )}
            </div>
          </div>

          <button
            type="submit"
            className="mt-6 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition w-full"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Modal */}
      {showModal && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          aria-describedby="modal-desc"
        >
          {/* Blurred background overlay with click to close */}
          <div
            className="absolute inset-0 bg-white/30 backdrop-blur-sm"
            onClick={closeModal}
            aria-hidden="true"
          />

          {/* Modal content */}
          <div
            ref={modalRef}
            className="relative bg-white dark:bg-gray-900 rounded-lg p-6 max-w-sm w-full text-center shadow-lg"
            onClick={(e) => e.stopPropagation()} // prevent closing modal when clicking inside
          >
            <h2 id="modal-title" className="text-2xl font-semibold mb-4 text-green-600">
              Success!
            </h2>
            <p id="modal-desc" className="mb-6">
              Thank you for contacting us! We will get back to you soon.
            </p>
            <button
              ref={closeButtonRef}
              onClick={closeModal}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactUs;