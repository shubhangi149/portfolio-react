import { useState } from "react";
import { Mail, Phone, MapPin, Download, Send } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function Contact({ data }) {
    const [sent, setSent] = useState(false);
    const [loading, setLoading] = useState(false);
    const email = data.contactInfo.email.text
    const phone = data.contactInfo.phone.text
    const location = data.contactInfo.location.text
    const emailjs_cred = data.emailjs_cred

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);
        emailjs
            .sendForm(
                emailjs_cred.SERVICE_ID,
                emailjs_cred.TEMPLATE_ID,
                e.target,
                emailjs_cred.PUBLIC_KEY
            )
            .then(
                (result) => {
                    setSent(true);
                    setLoading(false);
                    e.target.reset();
                    setTimeout(() => setSent(false), 3000);
                },
                (error) => {
                    setLoading(false);
                }
            );
    };

    return (
        <section id="contact" className="container-section px-5 sm:px-10 py-20 sm:py-28">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold tracking-tight bg-gray-950 dark:bg-white bg-clip-text text-transparent">
                    Get In Touch
                </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-20 mx-auto">
                {/* Contact Form */}
                <div className="card p-8 rounded-3xl shadow-2xl bg-gradient-to-br from-white/90 to-white/70 dark:from-gray-800/80 dark:to-gray-900/70 hover:shadow-2xl transition-all duration-300 border border-white/20 dark:border-white/10">
                    <div className="mb-8">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Send a Message</h3>
                    </div>

                    <form className="space-y-6" onSubmit={sendEmail}>
                        <input type="hidden" name="to_name" value="Harsh" />

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Your Name</label>
                            <input
                                required
                                name="from_name"
                                placeholder="Enter your full name"
                                className="w-full px-4 py-3.5 rounded-xl bg-white/80 dark:bg-gray-700/50 border border-gray-200/60 dark:border-gray-600/50 outline-none focus:ring-2 focus:ring-gray-500/30 focus:border-gray-900 transition-all duration-200"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Email Address</label>
                            <input
                                required
                                type="email"
                                name="reply_to"
                                placeholder="your.email@example.com"
                                className="w-full px-4 py-3.5 rounded-xl bg-white/80 dark:bg-gray-700/50 border border-gray-200/60 dark:border-gray-600/50 outline-none focus:ring-2 focus:ring-gray-500/30 focus:border-gray-900 transition-all duration-200"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Your Message</label>
                            <textarea
                                required
                                name="message"
                                placeholder="Feel free to say hello or explore my projects — I’d love to connect!"
                                rows="5"
                                className="w-full px-4 py-3.5 rounded-xl bg-white/80 dark:bg-gray-700/50 border border-gray-200/60 dark:border-gray-600/50 outline-none focus:ring-2 focus:ring-gray-500/30 focus:border-gray-900 transition-all duration-200 resize-none"
                            />
                        </div>

                        <button
                            className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-3 ${loading
                                    ? "bg-gray-400 text-white cursor-not-allowed"
                                    : sent
                                        ? "bg-green-500 hover:bg-green-600 text-white"
                                        : "bg-amber-100 dark:bg-blue-950/50 hover:bg-amber-200 dark:hover:bg-blue-900/60 text-gray-900 dark:text-white shadow-lg hover:shadow-xl"
                                }`}
                            type="submit"
                            disabled={loading}
                        >
                            {loading ? (
                                <>
                                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                    Sending...
                                </>
                            ) : sent ? (
                                <>
                                    <Send size={18} />
                                    Message Sent!
                                </>
                            ) : (
                                <>
                                    <Send size={18} />
                                    Send Message
                                </>
                            )}
                        </button>
                    </form>
                </div>

                {/* Contact Details */}
                <div className="flex flex-col gap-8">
                    <div className="card p-8 rounded-3xl shadow-2xl bg-gradient-to-br from-white/90 to-white/70 dark:from-gray-800/80 dark:to-gray-900/70 hover:shadow-2xl transition-all duration-300 border border-white/20 dark:border-white/10 h-fit">
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Contact Info</h3>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/50 dark:bg-gray-700/30 hover:bg-white/70 dark:hover:bg-gray-700/50 transition-all duration-200 group">
                                <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-sky-100 dark:bg-sky-900/30 group-hover:scale-110 transition-transform duration-200">
                                    <Mail size={20} className="text-sky-600 dark:text-sky-400" />
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Email</p>
                                    <a
                                        href={`mailto:${email}`}
                                        className="text-gray-900 dark:text-white font-medium hover:text-sky-600 dark:hover:text-sky-400 transition-colors duration-200"
                                    >
                                        {email}
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/50 dark:bg-gray-700/30 hover:bg-white/70 dark:hover:bg-gray-700/50 transition-all duration-200 group">
                                <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-green-100 dark:bg-green-900/30 group-hover:scale-110 transition-transform duration-200">
                                    <Phone size={20} className="text-green-600 dark:text-green-400" />
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Phone</p>
                                    <p className="text-gray-900 dark:text-white font-medium">{phone}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/50 dark:bg-gray-700/30 hover:bg-white/70 dark:hover:bg-gray-700/50 transition-all duration-200 group">
                                <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-pink-100 dark:bg-pink-900/30 group-hover:scale-110 transition-transform duration-200">
                                    <MapPin size={20} className="text-pink-600 dark:text-pink-400" />
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Location</p>
                                    <p className="text-gray-900 dark:text-white font-medium">{location}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Resume Download Card */}
                    <div className="card p-6 rounded-3xl shadow-2xl bg-gradient-to-br from-white/90 to-white/70 dark:from-gray-800/80 dark:to-gray-900/70 hover:shadow-2xl transition-all duration-300 border border-white/20 dark:border-white/10 group">
                        <div className="flex items-center gap-4">
                            <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-amber-100 dark:bg-blue-900/50 group-hover:scale-110 transition-transform duration-200">
                                <Download size={24} className="text-amber-600 dark:text-blue-400" />
                            </div>
                            <div className="flex-1">
                                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Download Resume</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                                    Get my complete professional profile
                                </p>
                                <a
                                    href={data.social_media_links.Resume.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-100 dark:bg-blue-950/50 hover:bg-amber-200 dark:hover:bg-blue-900/60 text-gray-900 dark:text-white font-medium transition-all duration-200 shadow-lg hover:shadow-xl hover:translate-y-[-2px]"
                                >
                                    <Download size={16} />
                                    Download PDF
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}