import React, { useState } from "react";
import {
  Send,
  Phone,
  MapPin,
  Mail,
  Linkedin,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);

  // =========================
  // FORM VALIDATION
  // =========================
  const validateForm = () => {
    const tempErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      tempErrors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Please enter a valid email";
      isValid = false;
    }

    if (!formData.subject.trim()) {
      tempErrors.subject = "Subject is required";
      isValid = false;
    }

    if (!formData.message.trim()) {
      tempErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(tempErrors);

    return isValid;
  };

  // =========================
  // WEB3FORMS SUBMISSION
  // =========================
  const handleSubmit = async (event) => {
    event.preventDefault();

    setStatus("");

    if (!validateForm()) {
      setStatus("Please fill in all required fields correctly.");
      return;
    }

    setIsSending(true);
    setStatus("Sending...");

    const web3FormData = new FormData();

web3FormData.append(
  "access_key",
  "f851dd3e-744d-4529-b830-5ed70e90b958"
);

web3FormData.append("name", formData.name);
web3FormData.append("email", formData.email);
web3FormData.append("subject", formData.subject);
web3FormData.append("message", formData.message);
    // Web3Forms settings
    web3FormData.append(
      "from_name",
      "Imran Shaik Portfolio"
    );

    web3FormData.append(
      "replyto",
      formData.email
    );

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: web3FormData,
        }
      );

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus(
          "Message sent successfully! 🚀"
        );

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });

        setErrors({});
      } else {
        setStatus(
          result.message ||
            "Failed to send your message."
        );
      }
    } catch (error) {
      console.error(
        "Web3Forms Error:",
        error
      );

      setStatus(
        "Something went wrong. Please try again."
      );
    } finally {
      setIsSending(false);
    }
  };

  // =========================
  // CONTACT PAGE
  // =========================
  return (
    <main className="min-h-screen bg-[#04081A] pt-20 text-white lg:pt-0">

      <section className="relative flex min-h-screen items-center overflow-hidden px-4 py-20 sm:px-6 lg:px-8">

        {/* Background Grid */}
        <div className="pointer-events-none absolute inset-0 opacity-20">
          <div className="bg-grid-pattern absolute inset-0" />
        </div>

        {/* Main Container */}
        <div className="relative z-10 mx-auto w-full max-w-6xl">

          <div className="grid items-center gap-12 lg:grid-cols-2">

            {/* =========================
                CONTACT INFORMATION
            ========================= */}

            <div className="space-y-8">

              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
                  Contact Me
                </p>

                <h2 className="mb-5 text-4xl font-bold md:text-5xl">
                  Let's{" "}
                  <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    Connect
                  </span>
                </h2>

                <p className="max-w-xl text-lg leading-8 text-gray-400">
                  Have a project idea, job opportunity,
                  or just want to say hello? Feel free to
                  send me a message. I'd be happy to
                  connect with you.
                </p>
              </div>

              {/* Email */}
              <a
                href="mailto:imranshaik0458@gmail.com"
                className="group flex items-center gap-4 rounded-xl border border-gray-800 bg-white/[0.03] p-4 transition-all duration-300 hover:border-purple-500/40 hover:bg-white/[0.06]"
              >
                <div className="rounded-lg bg-purple-500/10 p-3">
                  <Mail className="h-6 w-6 text-purple-400" />
                </div>

                <div>
                  <p className="text-sm text-gray-500">
                    Email
                  </p>

                  <p className="font-medium text-gray-200 transition-colors group-hover:text-purple-400">
                    imranshaik0458@gmail.com
                  </p>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:+919391680458"
                className="group flex items-center gap-4 rounded-xl border border-gray-800 bg-white/[0.03] p-4 transition-all duration-300 hover:border-green-500/40 hover:bg-white/[0.06]"
              >
                <div className="rounded-lg bg-green-500/10 p-3">
                  <Phone className="h-6 w-6 text-green-400" />
                </div>

                <div>
                  <p className="text-sm text-gray-500">
                    Phone
                  </p>

                  <p className="font-medium text-gray-200 transition-colors group-hover:text-green-400">
                    +91 93916 80458
                  </p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-4 rounded-xl border border-gray-800 bg-white/[0.03] p-4">
                <div className="rounded-lg bg-pink-500/10 p-3">
                  <MapPin className="h-6 w-6 text-pink-400" />
                </div>

                <div>
                  <p className="text-sm text-gray-500">
                    Location
                  </p>

                  <p className="font-medium text-gray-200">
                    Ongole, Andhra Pradesh, India
                  </p>
                </div>
              </div>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/shaik-imran0458/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-gray-700 bg-white/5 px-5 py-3 transition-all hover:border-blue-500 hover:bg-blue-500/10"
              >
                <Linkedin className="h-5 w-5 text-blue-400" />

                <span>
                  Connect on LinkedIn
                </span>
              </a>

            </div>

            {/* =========================
                CONTACT FORM
            ========================= */}

            <div className="rounded-2xl border border-gray-800 bg-white/[0.04] p-6 shadow-2xl backdrop-blur-xl md:p-8">

              <div className="mb-6">
                <h3 className="text-2xl font-bold">
                  Send Me a Message
                </h3>

                <p className="mt-2 text-sm text-gray-400">
                  I'll get back to you as soon as possible.
                </p>
              </div>

              <form
                onSubmit={handleSubmit}
                className="space-y-5"
              >

                {/* Name */}
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    className={`w-full rounded-lg border bg-white/5 px-4 py-3 text-white outline-none transition-all placeholder:text-gray-500 ${
                      errors.name
                        ? "border-red-500"
                        : "border-gray-700 focus:border-blue-500"
                    }`}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        name: e.target.value,
                      })
                    }
                  />

                  {errors.name && (
                    <p className="mt-1 text-sm text-red-400">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    className={`w-full rounded-lg border bg-white/5 px-4 py-3 text-white outline-none transition-all placeholder:text-gray-500 ${
                      errors.email
                        ? "border-red-500"
                        : "border-gray-700 focus:border-blue-500"
                    }`}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        email: e.target.value,
                      })
                    }
                  />

                  {errors.email && (
                    <p className="mt-1 text-sm text-red-400">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Subject */}
                <div>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    className={`w-full rounded-lg border bg-white/5 px-4 py-3 text-white outline-none transition-all placeholder:text-gray-500 ${
                      errors.subject
                        ? "border-red-500"
                        : "border-gray-700 focus:border-blue-500"
                    }`}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        subject: e.target.value,
                      })
                    }
                  />

                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-400">
                      {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Your Message"
                    value={formData.message}
                    className={`w-full resize-none rounded-lg border bg-white/5 px-4 py-3 text-white outline-none transition-all placeholder:text-gray-500 ${
                      errors.message
                        ? "border-red-500"
                        : "border-gray-700 focus:border-blue-500"
                    }`}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        message: e.target.value,
                      })
                    }
                  />

                  {errors.message && (
                    <p className="mt-1 text-sm text-red-400">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSending}
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 font-semibold text-white transition-all hover:scale-[1.01] hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSending ? (
                    "Sending..."
                  ) : (
                    <>
                      <span>
                        Send Message
                      </span>

                      <Send className="h-4 w-4" />
                    </>
                  )}
                </button>

              </form>

              {/* Status Message */}
              {status && (
                <div
                  className={`mt-5 rounded-lg border p-3 text-center text-sm ${
                    status.includes("successfully")
                      ? "border-green-500/20 bg-green-500/10 text-green-400"
                      : "border-red-500/20 bg-red-500/10 text-red-400"
                  }`}
                >
                  {status}
                </div>
              )}

            </div>

          </div>
        </div>
      </section>

      {/* Background CSS */}
      <style>{`
        .bg-grid-pattern {
          background-image:
            linear-gradient(
              to right,
              rgba(100, 100, 255, 0.08) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(100, 100, 255, 0.08) 1px,
              transparent 1px
            );

          background-size: 40px 40px;
        }
      `}</style>

    </main>
  );
}