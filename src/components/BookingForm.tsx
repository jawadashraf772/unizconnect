"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Upload,
  Send,
  CheckCircle,
  ArrowRight,
  Copy,
  CreditCard,
  User,
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  MessageSquare,
  FileText,
  Image as ImageIcon,
  Loader2,
  Sparkles,
} from "lucide-react";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    cgpa: "",
    reason: "",
    notes: ""
  });
  
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [screenshotFile, setScreenshotFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const router = useRouter();

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

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
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

      router.push("/thank-you");
    } catch (error) {
      console.error("Submission error:", error);
      alert("There was an error submitting your request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const steps = [
    { step: "01", title: "Fill Form", desc: "Add details & consultation type", icon: FileText, color: "from-purple-500 to-violet-500" },
    { step: "02", title: "Attach CV", desc: "Help Ayesha review your profile", icon: Upload, color: "from-fuchsia-500 to-pink-500" },
    { step: "03", title: "Upload Screenshot", desc: "Upload PKR 5,000 screenshot", icon: ImageIcon, color: "from-indigo-500 to-blue-500" },
    { step: "04", title: "Submit", desc: "Team verifies & calendar is shared", icon: Send, color: "from-emerald-500 to-teal-500" },
  ];

  const bankDetails = [
    { label: "Account Title", value: "UNIZCONNECT", copyText: "UNIZCONNECT" },
    { label: "Account Number", value: "5501 5002061733", copyText: "55015002061733" },
    { label: "IBAN", value: "PK70-ALFH5501005002061733", copyText: "PK70ALFH5501005002061733" },
    { label: "Bank Name", value: "Bank Alfalah Islamic", copyText: "" },
  ];

  const formFields = [
    { name: "name", label: "Full Name", type: "text", placeholder: "e.g. Ali Ahmed", icon: User, required: true },
    { name: "email", label: "Email Address", type: "email", placeholder: "name@example.com", icon: Mail, required: true },
    { name: "phone", label: "Phone / WhatsApp", type: "tel", placeholder: "e.g. +92 300 1234567", icon: Phone, required: true },
    { name: "city", label: "City", type: "text", placeholder: "e.g. Lahore", icon: MapPin, required: true },
    { name: "cgpa", label: "CGPA / Grade / Percentage", type: "text", placeholder: "e.g. 3.4 or 80%", icon: GraduationCap, required: true },
  ];

  return (
    <div className="bg-white">

      {/* HOW BOOKING WORKS TIMELINE */}
      <section className="relative py-28 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-purple-50/30" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-100/40 rounded-full blur-[120px] -z-0" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-5 mb-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-xs font-black uppercase tracking-widest">
              <Sparkles className="w-4 h-4" />
              Simple Process
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight">
              How Booking{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">Works</span>
            </h2>
            <p className="text-slate-500 text-lg font-medium max-w-md mx-auto">Simple 4-step process to get scheduled</p>
          </motion.div>

          {/* Steps - Connected Timeline */}
          <div className="relative">
            {/* Connector Line */}
            <div className="hidden sm:block absolute top-16 left-[calc(12.5%+24px)] right-[calc(12.5%+24px)] h-[2px] bg-gradient-to-r from-purple-200 via-fuchsia-200 to-indigo-200 z-0" />

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 sm:gap-6 relative z-10">
              {steps.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.12, type: "spring", stiffness: 120 }}
                  className="flex flex-col items-center text-center group"
                >
                  {/* Step Circle */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg mb-5 group-hover:shadow-xl transition-shadow`}
                  >
                    <step.icon className="w-6 h-6 text-white" />
                  </motion.div>

                  {/* Card */}
                  <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:border-purple-100 transition-all duration-300 w-full">
                    <span className="text-[10px] font-black text-purple-600 uppercase tracking-[0.2em] mb-2 block">Step {step.step}</span>
                    <h4 className="font-black text-slate-800 text-lg mb-2">{step.title}</h4>
                    <p className="text-sm text-slate-500 font-medium leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-slate-600 font-semibold text-sm mt-12 bg-white border border-slate-200 rounded-full py-3 px-6 inline-flex items-center gap-2 mx-auto max-w-fit shadow-sm"
            style={{ display: "flex", margin: "3rem auto 0" }}
          >
            <CheckCircle className="w-4 h-4 text-emerald-500" />
            Team verifies payment and sends calendar link by email and WhatsApp.
          </motion.p>
        </div>
      </section>

      {/* FORM SECTION (Light Theme Update) */}
      <section id="booking-form" className="relative py-28 overflow-hidden bg-slate-50/50">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-purple-50/40 to-slate-50" />
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -15, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-[10%] w-[500px] h-[500px] bg-purple-200/40 rounded-full blur-[120px] mix-blend-multiply pointer-events-none"
        />
        <motion.div
          animate={{ x: [0, -20, 0], y: [0, 20, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-[10%] w-[400px] h-[400px] bg-indigo-200/40 rounded-full blur-[100px] mix-blend-multiply pointer-events-none"
        />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 80 }}
            className="relative"
          >
            {/* Card glow */}
            <div className="absolute -inset-[1px] bg-gradient-to-b from-purple-200 via-purple-100 to-transparent rounded-[2.5rem] blur-sm" />

            <div className="relative bg-white backdrop-blur-2xl rounded-[2.5rem] p-8 sm:p-12 border border-purple-100 overflow-hidden shadow-2xl">

              {/* Top Header */}
              <div className="space-y-6 mb-12">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-fuchsia-500 flex items-center justify-center shadow-sm">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-slate-900">Step-by-Step Session Booking</h3>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-xs font-bold text-emerald-600">Accepting bookings now</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-slate-600 font-medium leading-relaxed text-base">
                  To book your session, send PKR 5,000 to the below account, take a screenshot, fill out the form 👇, attach your CV and payment screenshot, and hit &lsquo;Submit&rsquo; to get your calendar link within 24 hours.
                </p>
              </div>
              
              {/* Bank Details Card */}
              <div className="relative bg-gradient-to-br from-purple-50 to-indigo-50 border border-purple-100 rounded-2xl p-6 sm:p-8 mb-12 overflow-hidden shadow-sm">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/60 rounded-full blur-3xl" />
                
                <div className="flex items-center gap-3 mb-6 relative">
                  <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center">
                    <CreditCard className="w-4 h-4 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-black text-slate-800">Bank Details</h3>
                  <span className="ml-auto text-[10px] font-black text-purple-700 bg-white px-2.5 py-1 rounded-md uppercase tracking-wider border border-purple-100 shadow-xs">
                    Official Account
                  </span>
                </div>
                
                <div className="space-y-3 relative">
                  {bankDetails.map((detail, idx) => (
                    <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 py-3 border-b border-purple-100/60 last:border-b-0">
                      <span className="text-sm text-slate-500 font-semibold">{detail.label}</span>
                      <div className="flex items-center gap-2">
                        <span className={`font-black text-slate-900 ${detail.label === "IBAN" ? "text-xs sm:text-sm font-mono" : detail.label === "Account Number" ? "font-mono" : ""}`}>
                          {detail.value}
                        </span>
                        {detail.copyText && (
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            type="button"
                            onClick={() => handleCopy(detail.copyText, detail.label)}
                            className={`flex items-center gap-1.5 text-xs font-black px-3 py-1.5 rounded-lg border transition-all ${
                              copiedField === detail.label
                                ? "bg-emerald-50 border-emerald-200 text-emerald-600"
                                : "bg-white border-slate-200 text-purple-700 hover:bg-purple-50 hover:border-purple-200 shadow-xs"
                            }`}
                          >
                            {copiedField === detail.label ? (
                              <>
                                <CheckCircle className="w-3 h-3" />
                                Copied!
                              </>
                            ) : (
                              <>
                                <Copy className="w-3 h-3" />
                                Copy
                              </>
                            )}
                          </motion.button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Form Fields */}
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {formFields.map((field) => (
                    <div key={field.name} className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 block flex items-center gap-2">
                        <field.icon className="w-3.5 h-3.5 text-purple-500" />
                        {field.label} {field.required && <span className="text-red-500">*</span>}
                      </label>
                      <input
                        type={field.type}
                        name={field.name}
                        required={field.required}
                        value={formData[field.name as keyof typeof formData]}
                        onChange={handleInputChange}
                        placeholder={field.placeholder}
                        className="w-full px-5 py-4 bg-slate-50/50 border border-slate-200 rounded-xl focus:outline-none focus:border-purple-400 focus:bg-white focus:ring-4 focus:ring-purple-500/10 text-base font-bold text-slate-900 placeholder:text-slate-400 transition-all shadow-xs"
                      />
                    </div>
                  ))}

                  {/* Consultation Reason Dropdown */}
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 block flex items-center gap-2">
                      <MessageSquare className="w-3.5 h-3.5 text-purple-500" />
                      Seeking consultation for <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="reason"
                      required
                      value={formData.reason}
                      onChange={handleInputChange}
                      className="w-full px-5 py-4 bg-slate-50/50 border border-slate-200 rounded-xl focus:outline-none focus:border-purple-400 focus:bg-white focus:ring-4 focus:ring-purple-500/10 text-base font-bold text-slate-900 transition-all cursor-pointer shadow-xs appearance-none"
                    >
                      <option value="">Select Option</option>
                      <option value="Bachelors">Bachelors</option>
                      <option value="Masters">Masters</option>
                      <option value="PhD">PhD</option>
                      <option value="Career Advice">Career Advice</option>
                      <option value="Profile Building">Profile Building</option>
                    </select>
                  </div>
                </div>

                {/* Notes Textarea */}
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 block">
                    Please share anything in particular that you&apos;d like to discuss in the session
                  </label>
                  <textarea
                    name="notes"
                    rows={4}
                    value={formData.notes}
                    onChange={handleInputChange}
                    placeholder="Tell us about your target universities, scholarships, or questions..."
                    className="w-full px-5 py-4 bg-slate-50/50 border border-slate-200 rounded-xl focus:outline-none focus:border-purple-400 focus:bg-white focus:ring-4 focus:ring-purple-500/10 text-base font-bold text-slate-900 placeholder:text-slate-400 transition-all resize-none shadow-xs"
                  />
                </div>

                {/* File Uploads */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
                  {/* CV Upload */}
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 block flex items-center gap-2">
                      <FileText className="w-3.5 h-3.5 text-purple-500" />
                      Attach CV <span className="text-red-500">*</span>
                    </label>
                    <label className={`flex flex-col items-center justify-center border-2 border-dashed rounded-xl p-8 cursor-pointer text-center transition-all ${
                      cvFile 
                        ? "border-emerald-400 bg-emerald-50" 
                        : "border-slate-200 bg-slate-50/50 hover:bg-purple-50 hover:border-purple-300"
                    }`}>
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
                        required
                        onChange={(e) => handleFileChange(e, "cv")}
                        className="hidden"
                      />
                      <div className={`p-3 rounded-xl mb-3 ${cvFile ? "bg-emerald-100 text-emerald-600" : "bg-purple-100 text-purple-600"}`}>
                        {cvFile ? <CheckCircle className="w-6 h-6" /> : <Upload className="w-6 h-6" />}
                      </div>
                      <span className="text-sm font-bold text-slate-900 block truncate max-w-full">
                        {cvFile ? cvFile.name : "Click to upload CV"}
                      </span>
                      <span className="text-xs text-slate-500 mt-1 font-medium">PDF / DOCS / JPEG / PNG</span>
                    </label>
                  </div>

                  {/* Screenshot Upload */}
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 block flex items-center gap-2">
                      <ImageIcon className="w-3.5 h-3.5 text-purple-500" />
                      Payment Screenshot <span className="text-red-500">*</span>
                    </label>
                    <label className={`flex flex-col items-center justify-center border-2 border-dashed rounded-xl p-8 cursor-pointer text-center transition-all ${
                      screenshotFile 
                        ? "border-emerald-400 bg-emerald-50" 
                        : "border-slate-200 bg-slate-50/50 hover:bg-purple-50 hover:border-purple-300"
                    }`}>
                      <input
                        type="file"
                        accept="image/*"
                        required
                        onChange={(e) => handleFileChange(e, "screenshot")}
                        className="hidden"
                      />
                      <div className={`p-3 rounded-xl mb-3 ${screenshotFile ? "bg-emerald-100 text-emerald-600" : "bg-purple-100 text-purple-600"}`}>
                        {screenshotFile ? <CheckCircle className="w-6 h-6" /> : <Upload className="w-6 h-6" />}
                      </div>
                      <span className="text-sm font-bold text-slate-900 block truncate max-w-full">
                        {screenshotFile ? screenshotFile.name : "Click to upload screenshot"}
                      </span>
                      <span className="text-xs text-slate-500 mt-1 font-medium">JPEG / PNG / JPG</span>
                    </label>
                  </div>
                </div>

                {/* Submit Button */}
                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-5 bg-gradient-to-r from-purple-600 via-fuchsia-600 to-indigo-600 hover:from-purple-500 hover:via-fuchsia-500 hover:to-indigo-500 text-white font-black text-xl rounded-xl shadow-xl shadow-purple-500/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 uppercase tracking-wider mt-8 relative overflow-hidden group"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
                  <span className="relative flex items-center gap-3">
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-6 h-6 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        SUBMIT REQUEST
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </span>
                </motion.button>
              </form>

              {/* Support Footer */}
              <div className="mt-8 pt-6 border-t border-slate-100 text-center">
                <p className="text-sm text-slate-500 font-medium">
                  For booking issues, contact support team at{" "}
                  <a href="tel:+923264855658" className="text-purple-600 hover:text-purple-800 transition-colors font-bold underline decoration-purple-300">
                    +92-326-4855658
                  </a>
                </p>
              </div>

            </div>
          </motion.div>

        </div>
      </section>

    </div>
  );
}
