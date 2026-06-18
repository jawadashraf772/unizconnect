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
  Check,
  Gift,
  Zap,
  Quote,
  Star,
  ExternalLink,
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

  const inclusions = [
    "Personalized profile & target country guidance",
    "Comprehensive admission & scholarship strategy",
    "Country-specific comparison & pros/cons",
    "Tailored university & course recommendations",
    "Custom application roadmap & timeline",
    "Future career direction & opportunities",
    "Direct answers to all your specific queries",
  ];

  const bonuses = [
    { num: 1, text: "Free follow-up questions" },
    { num: 2, text: "Custom recap email" },
  ];

  const focusNameField = () => {
    const element = document.getElementsByName("name")[0] as HTMLInputElement | undefined;
    if (element) {
      element.focus();
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

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
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* LEFT COLUMN: Pricing Card */}
            <div className="lg:col-span-5 w-full flex flex-col gap-8">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 80, damping: 20 }}
                className="w-full relative group"
              >
                {/* Animated border glow */}
                <div className="absolute -inset-[1px] bg-gradient-to-r from-purple-300 via-fuchsia-300 to-indigo-300 rounded-[2rem] opacity-60 group-hover:opacity-100 transition-opacity duration-500 blur-md" />

                {/* Card body */}
                <div className="relative bg-white backdrop-blur-2xl rounded-[2rem] p-6 sm:p-8 border border-purple-100 overflow-hidden shadow-xl">

                  {/* Top badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-purple-50 to-fuchsia-50 border border-purple-200/60">
                      <Zap className="w-3.5 h-3.5 text-yellow-500" />
                      <span className="text-[10px] font-black text-purple-700 uppercase tracking-wider">Most Popular</span>
                    </div>
                    <span className="text-[9px] font-black text-purple-600 bg-purple-50 px-2.5 py-1 rounded-lg uppercase tracking-wider border border-purple-100">
                      100% Certified
                    </span>
                  </div>

                  {/* Title & Price */}
                  <div className="space-y-3 mb-6">
                    <h3 className="text-lg sm:text-xl font-black tracking-tight text-slate-900">
                      40-Minute 1:1 Consultation
                    </h3>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-indigo-700">
                        PKR 5,000
                      </span>
                      <span className="text-sm line-through text-slate-400 font-bold">
                        PKR 10,000
                      </span>
                    </div>
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-600 text-[10px] font-black">
                      <span>🔥</span> 50% OFF — Limited Time
                    </div>
                  </div>

                  <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-200 to-transparent mb-6" />

                  {/* Inclusions */}
                  <div className="space-y-4 mb-6">
                    <p className="text-[10px] font-black text-purple-600 uppercase tracking-[0.15em]">What You'll Get in This Session</p>
                    <ul className="space-y-2.5">
                      {inclusions.map((item, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.05 * idx }}
                          className="flex items-start gap-2.5 group/item"
                        >
                          <div className="bg-gradient-to-br from-purple-100 to-fuchsia-100 border border-purple-200 p-0.5 rounded-lg shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform">
                            <Check className="w-2.5 h-2.5 text-purple-600" />
                          </div>
                          <span className="text-xs font-semibold text-slate-700 leading-relaxed">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>



                  {/* Bonuses Box */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="relative bg-gradient-to-br from-purple-50 to-fuchsia-50 border border-purple-100 rounded-2xl p-4 sm:p-5 overflow-hidden shadow-sm mt-5"
                  >
                    <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-400/10 rounded-full blur-2xl" />
                    <p className="text-[10px] font-black text-yellow-600 uppercase tracking-[0.12em] flex items-center gap-1.5 mb-3 relative">
                      <Gift className="w-3.5 h-3.5 text-yellow-500" /> Exclusive Access Bonuses (PKR 15k+ value)
                    </p>
                    <div className="space-y-2 relative">
                      {bonuses.map((bonus, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs font-bold text-slate-700">
                          <span className="w-6 h-6 rounded-lg bg-yellow-100 border border-yellow-200 flex items-center justify-center text-[10px] text-yellow-600 font-black shrink-0">
                            {bonus.num}
                          </span>
                          <span>{bonus.text}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                </div>
              </motion.div>

              {/* Spotlight Testimonial Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 80, damping: 20 }}
                className="relative group w-full"
              >
                {/* Card glow */}
                <div className="absolute -inset-[1px] bg-gradient-to-r from-purple-200 via-purple-100 to-purple-200 rounded-[2rem] blur-sm opacity-60 group-hover:opacity-100 transition-opacity" />

                <div className="relative bg-white backdrop-blur-2xl border border-purple-100 rounded-[2rem] p-6 sm:p-8 overflow-hidden shadow-xl">

                  {/* Decorative quote */}
                  <div className="absolute top-4 right-4 text-purple-100/50 pointer-events-none">
                    <Quote className="w-16 h-16 rotate-180" />
                  </div>

                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
                    {/* Portrait */}
                    <div className="relative shrink-0">
                      <div className="absolute -inset-1 bg-gradient-to-br from-purple-200 to-fuchsia-200 rounded-2xl opacity-60 blur-sm" />
                      <div className="relative w-16 h-16 rounded-xl overflow-hidden border-2 border-white bg-purple-50 shadow-md">
                        <img
                          src="/kashmala.png"
                          alt="Kashmala Khan"
                          className="w-full h-full object-cover object-center"
                        />
                      </div>
                    </div>

                    {/* Right text content */}
                    <div className="flex-1 text-center sm:text-left space-y-3 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                        {/* Featured Story Label */}
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-yellow-100 border border-yellow-200 text-yellow-700 text-[9px] font-black uppercase tracking-wider shadow-xs">
                          <Star className="w-2.5 h-2.5 fill-yellow-500 text-yellow-500" />
                          Featured success story
                        </div>

                        {/* 5 Stars */}
                        <div className="flex items-center justify-center gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                          ))}
                        </div>
                      </div>

                      <p className="text-slate-800 text-xs italic font-bold leading-relaxed">
                        &ldquo;I&apos;ve been working with Ayesha since 2023, and I can confidently say that my journey toward pursuing a master&apos;s degree would not have been the same without her support and guidance. She never rushed the process and always gave me the time and space I needed to manage things at my own pace, something I deeply appreciated, especially during moments of overwhelm.&rdquo;
                      </p>

                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 border-t border-slate-100 w-full">
                        <div className="text-left">
                          <p className="text-xs font-black text-purple-700">Kashmala Khan</p>
                          <p className="text-[10px] font-bold text-slate-500">BNU, Lahore</p>
                        </div>
                        <div className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-emerald-50 border border-emerald-100 shadow-xs justify-center shrink-0">
                          <ExternalLink className="w-3 h-3 text-emerald-600" />
                          <span className="text-[10px] font-bold text-emerald-700">
                            Now at <span className="font-black underline decoration-emerald-300">Cardiff Met University</span>, UK
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </motion.div>
            </div>

            {/* RIGHT COLUMN: Form Card */}
            <div className="lg:col-span-7 w-full">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 80 }}
                className="relative"
              >
                {/* Card glow */}
                <div className="absolute -inset-[1px] bg-gradient-to-b from-purple-200 via-purple-100 to-transparent rounded-[2rem] blur-sm" />

                <div className="relative bg-white backdrop-blur-2xl rounded-[2rem] p-6 sm:p-8 border border-purple-100 overflow-hidden shadow-xl">

                  {/* Top Header */}
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-500 to-fuchsia-500 flex items-center justify-center shadow-sm">
                        <Sparkles className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-black text-slate-900">Step-by-Step Session Booking</h3>
                        <div className="flex items-center gap-1.5 mt-0.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          <span className="text-[10px] font-bold text-emerald-600">Accepting bookings now</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-slate-600 font-medium leading-relaxed text-sm">
                      To book your session, send PKR 5,000 to the below account, take a screenshot, fill out the form 👇, attach your CV and payment screenshot, and hit &lsquo;Submit&rsquo; to get your calendar link within 24 hours.
                    </p>
                  </div>
                  
                  {/* Bank Details Card */}
                  <div className="relative bg-gradient-to-br from-purple-50 to-indigo-50 border border-purple-100 rounded-2xl p-5 sm:p-6 mb-8 overflow-hidden shadow-sm">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/60 rounded-full blur-2xl" />
                    
                    <div className="flex items-center gap-2.5 mb-4 relative">
                      <div className="w-7 h-7 rounded-lg bg-purple-100 flex items-center justify-center">
                        <CreditCard className="w-3.5 h-3.5 text-purple-600" />
                      </div>
                      <h3 className="text-base font-black text-slate-800">Bank Details</h3>
                      <span className="ml-auto text-[9px] font-black text-purple-700 bg-white px-2 py-0.5 rounded-md uppercase tracking-wider border border-purple-100 shadow-xs">
                        Official Account
                      </span>
                    </div>
                    
                    <div className="space-y-2.5 relative">
                      {bankDetails.map((detail, idx) => (
                        <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 py-2.5 border-b border-purple-100/60 last:border-b-0">
                          <span className="text-xs text-slate-500 font-semibold">{detail.label}</span>
                          <div className="flex items-center gap-2">
                            <span className={`font-black text-slate-900 ${detail.label === "IBAN" ? "text-xs font-mono" : detail.label === "Account Number" ? "text-sm font-mono" : "text-sm"}`}>
                              {detail.value}
                            </span>
                            {detail.copyText && (
                              <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                type="button"
                                onClick={() => handleCopy(detail.copyText, detail.label)}
                                className={`flex items-center gap-1 text-[10px] font-black px-2 py-1 rounded-lg border transition-all ${
                                  copiedField === detail.label
                                    ? "bg-emerald-50 border-emerald-200 text-emerald-600"
                                    : "bg-white border-slate-200 text-purple-700 hover:bg-purple-50 hover:border-purple-200 shadow-xs"
                                }`}
                              >
                                {copiedField === detail.label ? (
                                  <>
                                    <CheckCircle className="w-2.5 h-2.5" />
                                    Copied!
                                  </>
                                ) : (
                                  <>
                                    <Copy className="w-2.5 h-2.5" />
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
                  <form onSubmit={handleSubmit} className="space-y-5">
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {formFields.map((field) => (
                        <div key={field.name} className="space-y-1.5">
                          <label className="text-xs font-bold text-slate-700 block flex items-center gap-1.5">
                            <field.icon className="w-3 h-3 text-purple-500" />
                            {field.label} {field.required && <span className="text-red-500">*</span>}
                          </label>
                          <input
                            type={field.type}
                            name={field.name}
                            required={field.required}
                            value={formData[field.name as keyof typeof formData]}
                            onChange={handleInputChange}
                            placeholder={field.placeholder}
                            className="w-full px-4 py-3 bg-slate-50/50 border border-slate-200 rounded-xl focus:outline-none focus:border-purple-400 focus:bg-white focus:ring-4 focus:ring-purple-500/10 text-sm font-bold text-slate-900 placeholder:text-slate-400 transition-all shadow-xs"
                          />
                        </div>
                      ))}

                      {/* Consultation Reason Dropdown */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-700 block flex items-center gap-1.5">
                          <MessageSquare className="w-3 h-3 text-purple-500" />
                          Seeking consultation for <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="reason"
                          required
                          value={formData.reason}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-slate-50/50 border border-slate-200 rounded-xl focus:outline-none focus:border-purple-400 focus:bg-white focus:ring-4 focus:ring-purple-500/10 text-sm font-bold text-slate-900 transition-all cursor-pointer shadow-xs appearance-none"
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
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 block">
                        Please share anything in particular that you&apos;d like to discuss in the session
                      </label>
                      <textarea
                        name="notes"
                        rows={4}
                        value={formData.notes}
                        onChange={handleInputChange}
                        placeholder="Tell us about your target universities, scholarships, or questions..."
                        className="w-full px-4 py-3 bg-slate-50/50 border border-slate-200 rounded-xl focus:outline-none focus:border-purple-400 focus:bg-white focus:ring-4 focus:ring-purple-500/10 text-sm font-bold text-slate-900 placeholder:text-slate-400 transition-all resize-none shadow-xs"
                      />
                    </div>

                    {/* File Uploads */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                      {/* CV Upload */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-700 block flex items-center gap-1.5">
                          <FileText className="w-3 h-3 text-purple-500" />
                          Attach CV <span className="text-red-500">*</span>
                        </label>
                        <label className={`flex flex-col items-center justify-center border-2 border-dashed rounded-xl p-6 cursor-pointer text-center transition-all ${
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
                          <div className={`p-2.5 rounded-xl mb-2.5 ${cvFile ? "bg-emerald-100 text-emerald-600" : "bg-purple-100 text-purple-600"}`}>
                            {cvFile ? <CheckCircle className="w-5 h-5" /> : <Upload className="w-5 h-5" />}
                          </div>
                          <span className="text-xs font-bold text-slate-900 block truncate max-w-full">
                            {cvFile ? cvFile.name : "Click to upload CV"}
                          </span>
                          <span className="text-[10px] text-slate-500 mt-0.5 font-medium">PDF / DOCS / JPEG / PNG</span>
                        </label>
                      </div>

                      {/* Screenshot Upload */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-700 block flex items-center gap-1.5">
                          <ImageIcon className="w-3 h-3 text-purple-500" />
                          Payment Screenshot <span className="text-red-500">*</span>
                        </label>
                        <label className={`flex flex-col items-center justify-center border-2 border-dashed rounded-xl p-6 cursor-pointer text-center transition-all ${
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
                          <div className={`p-2.5 rounded-xl mb-2.5 ${screenshotFile ? "bg-emerald-100 text-emerald-600" : "bg-purple-100 text-purple-600"}`}>
                            {screenshotFile ? <CheckCircle className="w-5 h-5" /> : <Upload className="w-5 h-5" />}
                          </div>
                          <span className="text-xs font-bold text-slate-900 block truncate max-w-full">
                            {screenshotFile ? screenshotFile.name : "Click to upload screenshot"}
                          </span>
                          <span className="text-[10px] text-slate-500 mt-0.5 font-medium">JPEG / PNG / JPG</span>
                        </label>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <motion.button
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-gradient-to-r from-purple-600 via-fuchsia-600 to-indigo-600 hover:from-purple-500 hover:via-fuchsia-500 hover:to-indigo-500 text-white font-black text-lg rounded-xl shadow-xl shadow-purple-500/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2.5 uppercase tracking-wider mt-6 relative overflow-hidden group"
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
                      <span className="relative flex items-center gap-2.5">
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Submitting...
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            SUBMIT REQUEST
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </span>
                    </motion.button>
                  </form>

                  {/* Support Footer */}
                  <div className="mt-6 pt-5 border-t border-slate-100 text-center">
                    <p className="text-xs text-slate-500 font-medium">
                      For booking issues, contact support team at{" "}
                      <a href="tel:+923264855658" className="text-purple-600 hover:text-purple-800 transition-colors font-bold underline decoration-purple-300">
                        +92-326-4855658
                      </a>
                    </p>
                  </div>

                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
