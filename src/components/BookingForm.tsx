"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileText,
  Upload,
  Check,
  ShieldCheck,
  PhoneCall,
  Banknote,
  Send,
  Sparkles,
  AlertTriangle,
  Building,
  GraduationCap,
  Briefcase
} from "lucide-react";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    institution: "",
    cgpa: "",
    experience: "",
    reason: "",
    notes: ""
  });
  
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [screenshotFile, setScreenshotFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, type: "cv" | "screenshot") => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (type === "cv") {
        setCvFile(file);
      } else {
        setScreenshotFile(file);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!cvFile || !screenshotFile) {
      alert("Please upload both your CV and payment screenshot.");
      return;
    }
    setIsSubmitting(true);
    
    try {
      const formPayload = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formPayload.append(key, value as string);
      });
      formPayload.append("cvFile", cvFile);
      formPayload.append("screenshotFile", screenshotFile);

      const response = await fetch("https://services.leadconnectorhq.com/hooks/B1KkpgABfPleeIPoYy8x/webhook-trigger/bJivOdKvcs65nQRqpR2B", {
        method: "POST",
        body: formPayload,
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setIsSuccess(true);
    } catch (error) {
      console.error("Submission error:", error);
      alert("There was an error submitting your request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToForm = () => {
    const element = document.getElementById("booking-form");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-slate-50">
      
      {/* 11. TAKE YOUR FIRST STEP TODAY SECTION */}
      <section className="py-24 relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-50/50 via-white to-violet-50/50" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="bg-gradient-to-br from-purple-900 to-indigo-950 text-white rounded-[3rem] p-8 sm:p-16 shadow-2xl relative border-4 border-purple-800">
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl" />
            
            <div className="text-center space-y-6 mb-12">
              <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-purple-500/30 text-purple-200 font-black text-sm uppercase tracking-widest border border-purple-400/30">
                1:1 Consultation Offer
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight">
                Take Your First Step Today
              </h2>
              <div className="text-3xl sm:text-4xl font-extrabold text-purple-300">
                PKR 5,000 <span className="text-xl text-slate-300 font-bold">/ 40-Minute 1:1 Consultation</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-12">
              {[
                "Personalized guidance",
                "Admission and scholarship discussion",
                "University & course suggestions",
                "Roadmap and timeline",
                "Career direction",
                "Answers to all your queries",
                "BONUS: Free follow-up questions",
                "BONUS: Custom recap email",
                "BONUS: Direct access to Ayesha"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-lg font-bold text-slate-200">
                  <div className="bg-purple-500 p-1.5 rounded-full shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="text-center">
              <motion.button
                whileHover={{ scale: 1.05, rotate: -1 }}
                whileTap={{ scale: 0.95, rotate: 1 }}
                onClick={scrollToForm}
                className="w-full sm:w-auto px-12 py-6 bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white font-black text-2xl rounded-full shadow-2xl shadow-purple-500/40 cursor-none border-b-4 border-purple-700 active:border-b-0 active:mt-1 transition-all"
              >
                Book it Now 🚀
              </motion.button>
            </div>
          </div>

        </div>
      </section>

      {/* 12. WHY IT IS WORTH PKR 5,000 SECTION */}
      <section className="py-24 relative overflow-hidden bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900">
              Why It Is Worth{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">PKR 5,000</span>
            </h2>
            <p className="text-slate-500 text-lg font-bold">A small investment to avoid massive future mistakes</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            
            {/* Left Text Block */}
            <div className="lg:col-span-6 space-y-6">
              <h3 className="text-3xl font-black text-slate-800 leading-tight">
                Free information is not personal guidance.
              </h3>
              <p className="text-lg text-slate-600 font-medium leading-relaxed">
                You can Google things, watch videos, and ask friends. But that does not tell you what fits your profile.
              </p>
              <div className="bg-white p-6 border-l-8 border-purple-600 rounded-r-2xl shadow-sm">
                <p className="font-bold text-slate-700 italic">
                  "Having an expert filter through the noise is the difference between securing a top university offer or receiving multiple rejections."
                </p>
              </div>
            </div>

            {/* Right Risk Comparison Box */}
            <div className="lg:col-span-6 bg-gradient-to-br from-red-50 to-orange-50 border-2 border-red-200 rounded-[2.5rem] p-8 sm:p-10 shadow-lg relative">
              <div className="absolute top-4 right-4 text-red-500 opacity-20">
                <AlertTriangle className="w-16 h-16" />
              </div>
              <h3 className="text-2xl font-black text-red-800 mb-6 flex items-center gap-2">
                <AlertTriangle className="w-6 h-6 text-red-600 shrink-0" />
                The Real Cost of Guesswork
              </h3>
              
              <div className="space-y-5">
                {[
                  { risk: "Missed deadline", effect: "fewer options" },
                  { risk: "Wrong course", effect: "£11,400–£38,000 risk" },
                  { risk: "Wrong degree fit", effect: "3–4 years wasted" },
                  { risk: "Weak SOP / essay", effect: "missed scholarships" },
                  { risk: "Late planning", effect: "delayed CAS / visa" }
                ].map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center py-2.5 border-b border-red-100 last:border-b-0">
                    <span className="font-bold text-slate-800 text-base sm:text-lg">{item.risk}</span>
                    <span className="font-black text-red-700 bg-red-100/80 px-3 py-1 rounded-xl text-sm uppercase tracking-wide">
                      {item.effect}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          <div className="text-center">
            <motion.button
              whileHover={{ scale: 1.06, rotate: 1 }}
              whileTap={{ scale: 0.94, rotate: -1 }}
              onClick={scrollToForm}
              className="w-full sm:w-auto px-12 py-5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-black text-xl rounded-2xl shadow-xl shadow-purple-500/30 cursor-none border-b-4 border-indigo-800 active:border-b-0 active:mt-1 transition-all"
            >
              Book Your 1:1 Strategy Session 🚀
            </motion.button>
          </div>

        </div>
      </section>

      {/* 13. HOW BOOKING WORKS (TIMELINE) */}
      <section className="py-24 bg-white border-t border-slate-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900">
              How Booking{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">Works</span>
            </h2>
            <p className="text-slate-600 text-lg font-bold">Simple 4-step process to get scheduled</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 max-w-5xl mx-auto relative">
            {[
              { step: "Step 1", title: "Fill Form", desc: "Add details & consultation type" },
              { step: "Step 2", title: "Attach CV", desc: "Help Ayesha review your profile" },
              { step: "Step 3", title: "Upload Screenshot", desc: "Upload PKR 5,000 screenshot" },
              { step: "Step 4", title: "Submit", desc: "Team verifies & calendar is shared" }
            ].map((step, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white border-2 border-slate-100 p-8 rounded-[2rem] relative shadow-md hover:shadow-xl hover:border-purple-200 flex flex-col items-center text-center group cursor-crosshair"
              >
                <span className="text-sm font-black text-white bg-gradient-to-r from-purple-500 to-fuchsia-500 px-4 py-1.5 rounded-xl mb-4 shadow-sm group-hover:scale-110 transition-transform">
                  {step.step}
                </span>
                <h4 className="font-black text-slate-800 text-lg mb-2">{step.title}</h4>
                <p className="text-sm text-slate-500 font-medium">{step.desc}</p>
                {idx < 3 && (
                  <span className="hidden sm:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-purple-300 font-black text-2xl z-10 select-none opacity-50 group-hover:opacity-100 transition-opacity">
                    →
                  </span>
                )}
              </motion.div>
            ))}
          </div>

          <p className="text-center text-slate-400 font-bold uppercase tracking-wider text-xs mt-10">
            Note: Team verifies payment and sends calendar link by email and WhatsApp.
          </p>
        </div>
      </section>

      {/* FORM SECTION */}
      <section id="booking-form" className="py-24 bg-gradient-to-b from-white to-slate-50 border-t-4 border-dashed border-purple-100 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-200/40 rounded-full blur-[120px] -z-10 mix-blend-multiply" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Left Reminder Block */}
            <div className="lg:col-span-5 space-y-6 bg-gradient-to-br from-purple-600 to-indigo-700 text-white rounded-[2.5rem] p-10 border-4 border-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-white/20 rounded-full blur-2xl animate-pulse" />
              <div className="relative z-10 space-y-6">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 text-fuchsia-200 font-bold uppercase tracking-wider text-xs border border-white/20">
                  Direct 1:1 Session
                </span>
                <h3 className="text-3xl font-black text-white leading-tight">
                  Book Your 1:1 Strategy Session With Ayesha
                </h3>
                <p className="text-fuchsia-100 text-base font-semibold leading-relaxed">
                  Share your details and CV so Ayesha can prepare for your session.
                </p>
                <div className="border-t border-white/20 pt-6 mt-6">
                  <div className="flex items-center gap-3">
                    <div className="bg-emerald-400 p-1 rounded-full"><Check className="w-3 h-3 text-white" /></div>
                    <span className="font-bold text-sm">Direct session with Ayesha Saleem</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Booking Form Fields */}
            <div className="lg:col-span-7 bg-white border-2 border-slate-100 rounded-[2.5rem] p-8 sm:p-12 shadow-2xl relative">
              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    className="text-center py-20 space-y-8"
                  >
                    <motion.div
                      animate={{ y: [0, -20, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="w-24 h-24 bg-gradient-to-br from-emerald-400 to-teal-500 text-white rounded-full flex items-center justify-center mx-auto shadow-xl shadow-emerald-500/30 border-4 border-white"
                    >
                      <Check className="w-12 h-12" />
                    </motion.div>
                    <h3 className="text-4xl font-black text-slate-900">You're All Set! 🎉</h3>
                    <p className="text-slate-600 text-xl font-medium max-w-md mx-auto leading-relaxed">
                      Our team is verifying your payment. Keep an eye on your email and WhatsApp for Ayesha's calendar link within 24 hours.
                    </p>
                    <div className="pt-8 flex items-center justify-center gap-3 text-sm text-slate-500 font-bold bg-slate-50 py-3 rounded-2xl w-max mx-auto px-6">
                      <ShieldCheck className="w-5 h-5 text-emerald-600" />
                      <span>Secure verification in progress.</span>
                    </div>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Name */}
                      <div className="space-y-2">
                        <label className="text-xs font-black text-slate-500 uppercase tracking-widest">Full Name *</label>
                        <motion.input
                          whileFocus={{ scale: 1.01, borderColor: "#a855f7" }}
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Enter full name"
                          className="w-full px-5 py-4 bg-slate-50 border-2 border-transparent rounded-2xl focus:bg-white focus:outline-hidden text-base font-bold text-slate-800 transition-colors shadow-inner"
                        />
                      </div>

                      {/* Phone */}
                      <div className="space-y-2">
                        <label className="text-xs font-black text-slate-500 uppercase tracking-widest">Phone / WhatsApp *</label>
                        <motion.input
                          whileFocus={{ scale: 1.01, borderColor: "#a855f7" }}
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+92 3XX XXXXXXX"
                          className="w-full px-5 py-4 bg-slate-50 border-2 border-transparent rounded-2xl focus:bg-white focus:outline-hidden text-base font-bold text-slate-800 transition-colors shadow-inner"
                        />
                      </div>

                      {/* Email */}
                      <div className="space-y-2">
                        <label className="text-xs font-black text-slate-500 uppercase tracking-widest">Email Address *</label>
                        <motion.input
                          whileFocus={{ scale: 1.01, borderColor: "#a855f7" }}
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="name@example.com"
                          className="w-full px-5 py-4 bg-slate-50 border-2 border-transparent rounded-2xl focus:bg-white focus:outline-hidden text-base font-bold text-slate-800 transition-colors shadow-inner"
                        />
                      </div>

                      {/* Institution */}
                      <div className="space-y-2">
                        <label className="text-xs font-black text-slate-500 uppercase tracking-widest">Institution *</label>
                        <motion.input
                          whileFocus={{ scale: 1.01, borderColor: "#a855f7" }}
                          type="text"
                          name="institution"
                          required
                          value={formData.institution}
                          onChange={handleInputChange}
                          placeholder="University or College name"
                          className="w-full px-5 py-4 bg-slate-50 border-2 border-transparent rounded-2xl focus:bg-white focus:outline-hidden text-base font-bold text-slate-800 transition-colors shadow-inner"
                        />
                      </div>

                      {/* CGPA / Grade */}
                      <div className="space-y-2">
                        <label className="text-xs font-black text-slate-500 uppercase tracking-widest">CGPA / Grade / Percentage *</label>
                        <motion.input
                          whileFocus={{ scale: 1.01, borderColor: "#a855f7" }}
                          type="text"
                          name="cgpa"
                          required
                          value={formData.cgpa}
                          onChange={handleInputChange}
                          placeholder="e.g. 3.4 or 80%"
                          className="w-full px-5 py-4 bg-slate-50 border-2 border-transparent rounded-2xl focus:bg-white focus:outline-hidden text-base font-bold text-slate-800 transition-colors shadow-inner"
                        />
                      </div>

                      {/* Work Experience */}
                      <div className="space-y-2">
                        <label className="text-xs font-black text-slate-500 uppercase tracking-widest">Work Experience *</label>
                        <motion.input
                          whileFocus={{ scale: 1.01, borderColor: "#a855f7" }}
                          type="text"
                          name="experience"
                          required
                          value={formData.experience}
                          onChange={handleInputChange}
                          placeholder="e.g. 2 years or Fresh Graduate"
                          className="w-full px-5 py-4 bg-slate-50 border-2 border-transparent rounded-2xl focus:bg-white focus:outline-hidden text-base font-bold text-slate-800 transition-colors shadow-inner"
                        />
                      </div>

                      {/* Consultation Reason */}
                      <div className="space-y-2 sm:col-span-2">
                        <label className="text-xs font-black text-slate-500 uppercase tracking-widest">Consultation Reason *</label>
                        <motion.select
                          whileFocus={{ scale: 1.01, borderColor: "#a855f7" }}
                          name="reason"
                          required
                          value={formData.reason}
                          onChange={handleInputChange}
                          className="w-full px-5 py-4 bg-slate-50 border-2 border-transparent rounded-2xl focus:bg-white focus:outline-hidden text-base font-bold text-slate-800 transition-colors shadow-inner cursor-pointer"
                        >
                          <option value="">Select Option</option>
                          <option value="Bachelors">Bachelors Study Abroad</option>
                          <option value="Masters">Masters Study Abroad</option>
                          <option value="PhD">PhD Study Abroad</option>
                          <option value="Career Advice">Career Alignment Advice</option>
                          <option value="Profile Assessment">Admission & Scholarship Suitability</option>
                        </motion.select>
                      </div>
                    </div>

                    {/* Specific Notes */}
                    <div className="space-y-2">
                      <label className="text-xs font-black text-slate-500 uppercase tracking-widest">Specific Notes / Discussion Point</label>
                      <motion.textarea
                        whileFocus={{ scale: 1.01, borderColor: "#a855f7" }}
                        name="notes"
                        rows={3}
                        value={formData.notes}
                        onChange={handleInputChange}
                        placeholder="Briefly share any particular queries you'd like Ayesha to focus on."
                        className="w-full px-5 py-4 bg-slate-50 border-2 border-transparent rounded-2xl focus:bg-white focus:outline-hidden text-base font-bold text-slate-800 transition-colors shadow-inner resize-none"
                      />
                    </div>

                    {/* File Uploads */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                      {/* Upload CV */}
                      <div className="space-y-2">
                        <span className="block text-xs font-black text-slate-500 uppercase tracking-widest">Upload CV *</span>
                        <motion.label
                          whileHover={{ scale: 1.01, borderColor: "#a855f7", backgroundColor: "#faf5ff" }}
                          whileTap={{ scale: 0.99 }}
                          className="flex flex-col items-center justify-center border-4 border-dashed border-slate-200 bg-slate-50 rounded-2xl p-6 cursor-crosshair text-center transition-colors"
                        >
                          <input
                            type="file"
                            accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
                            required
                            onChange={(e) => handleFileChange(e, "cv")}
                            className="hidden"
                          />
                          <FileText className="w-8 h-8 text-purple-400 mb-3" />
                          <span className="text-sm font-black text-slate-800 block truncate max-w-full">
                            {cvFile ? cvFile.name : "Click to upload CV"}
                          </span>
                          <span className="text-xs text-slate-400 mt-1 font-bold">PDF/Docs/Image</span>
                        </motion.label>
                      </div>

                      {/* Upload Payment Screenshot */}
                      <div className="space-y-2">
                        <span className="block text-xs font-black text-slate-500 uppercase tracking-widest">Upload Payment Screenshot *</span>
                        <motion.label
                          whileHover={{ scale: 1.01, borderColor: "#a855f7", backgroundColor: "#faf5ff" }}
                          whileTap={{ scale: 0.99 }}
                          className="flex flex-col items-center justify-center border-4 border-dashed border-slate-200 bg-slate-50 rounded-2xl p-6 cursor-crosshair text-center transition-colors"
                        >
                          <input
                            type="file"
                            accept="image/*"
                            required
                            onChange={(e) => handleFileChange(e, "screenshot")}
                            className="hidden"
                          />
                          <Upload className="w-8 h-8 text-purple-400 mb-3" />
                          <span className="text-sm font-black text-slate-800 block truncate max-w-full">
                            {screenshotFile ? screenshotFile.name : "Click to upload screenshot"}
                          </span>
                          <span className="text-xs text-slate-400 mt-1 font-bold">Image files only</span>
                        </motion.label>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <motion.button
                      whileHover={{ scale: 1.02, rotate: 0.5 }}
                      whileTap={{ scale: 0.98, rotate: -0.5 }}
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-5 mt-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-black text-xl rounded-2xl shadow-xl shadow-purple-500/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 cursor-none border-b-4 border-indigo-800 active:border-b-0 active:mt-1"
                    >
                      <Send className="w-6 h-6" />
                      {isSubmitting ? "Verifying..." : "Book Your 1:1 Session"}
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>

          </div>

        </div>
      </section>

      {/* 14. PRICING & PAYMENT SECTION */}
      <section className="py-24 bg-white border-t border-slate-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900">
              Pricing & Payment Details
            </h2>
            <p className="text-slate-500 text-lg font-bold">Secure your session with the payment details below</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            
            {/* Left: Session Fee Box */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="lg:col-span-6 bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-700 text-white rounded-[2.5rem] p-10 border-4 border-white shadow-2xl relative overflow-hidden flex flex-col justify-between"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-white/20 rounded-full blur-2xl animate-pulse" />
              <div className="relative z-10 space-y-6">
                <div>
                  <span className="text-xs font-black tracking-widest text-fuchsia-200 uppercase bg-white/10 px-3 py-1 rounded-lg backdrop-blur-sm">Fee Summary</span>
                  <div className="text-5xl font-black mt-4">PKR 5,000</div>
                  <div className="text-sm line-through text-fuchsia-300 font-bold mt-1">Original Price: PKR 10,000</div>
                </div>

                <div className="border-t border-white/20 pt-6 space-y-3 font-semibold text-base">
                  <p className="text-fuchsia-200 font-black text-xs uppercase tracking-wider">Includes:</p>
                  {[
                    "40-minute 1:1 session",
                    "Direct access to Ayesha",
                    "Profile assessment",
                    "Course/country guidance",
                    "Scholarship suitability",
                    "Recap email",
                    "Follow-up questions"
                  ].map((inc, i) => (
                    <div key={i} className="flex items-center gap-2.5">
                      <div className="bg-emerald-400 p-0.5 rounded-full shrink-0"><Check className="w-3.5 h-3.5 text-white" /></div>
                      <span>{inc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right: Bank Details Box */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="lg:col-span-6 bg-white border-2 border-slate-100 rounded-[2.5rem] p-10 shadow-xl flex flex-col justify-between"
            >
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-100 to-indigo-100 flex items-center justify-center text-purple-600 shadow-inner shrink-0">
                    <Banknote className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-slate-800">Bank Alfalah Islamic</h3>
                    <p className="text-sm text-slate-500 font-bold uppercase tracking-wider">Official Bank Account</p>
                  </div>
                </div>

                <div className="space-y-4 border-t border-slate-100 pt-6 text-base font-semibold">
                  <div className="flex justify-between py-2 border-b border-slate-50">
                    <span className="text-slate-500">Account Title:</span>
                    <span className="font-black text-slate-800 bg-slate-100 px-2 py-0.5 rounded">UNIZCONNECT</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-50">
                    <span className="text-slate-500">Account Number:</span>
                    <span className="font-black text-slate-800 select-all bg-slate-100 px-2 py-0.5 rounded cursor-text">5501 5002061733</span>
                  </div>
                  <div className="flex justify-between py-2 flex-col sm:flex-row gap-2 sm:gap-0">
                    <span className="text-slate-500">IBAN:</span>
                    <span className="font-black text-slate-800 select-all bg-slate-100 px-2 py-0.5 rounded cursor-text">PK70-ALFH5501005002061733</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-5 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl flex items-center gap-4 border border-purple-100">
                <div className="bg-white p-2 rounded-xl shadow-sm">
                  <PhoneCall className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <p className="text-xs font-black text-slate-500 uppercase tracking-wider">Booking Support (Call / WhatsApp)</p>
                  <a href="tel:+923264855658" className="text-lg font-black text-purple-700 hover:text-purple-900 transition-colors">
                    +92-326-4855658
                  </a>
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </section>

    </div>
  );
}
