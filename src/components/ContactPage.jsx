import React, { useState } from 'react';
import { 
  Building2, 
  Mail, 
  Phone, 
  MapPin, 
  CheckCircle2, 
  Send, 
  AlertCircle, 
  Users, 
  GraduationCap,
  ShieldCheck,
  UserCheck
} from 'lucide-react';
import { MIND_PILOT_INFO } from '../data/mindpilotData';

export default function ContactPage() {
  const [enquiryType, setEnquiryType] = useState('institutional'); // 'institutional' | 'general'
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formError, setFormError] = useState('');

  const [formData, setFormData] = useState({
    schoolName: '',
    contactName: '',
    designation: 'Principal',
    email: '',
    phone: '',
    city: 'Visakhapatnam',
    studentCount: '150',
    gradesOfInterest: 'Grades 6–8',
    implementationPeriod: 'Academic-year program',
    schoolWebsite: '',
    deliveryFormat: 'Timetabled classroom sessions',
    message: '',
    consent: true
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError('');

    // Form Validation
    if (!formData.contactName.trim()) {
      setFormError('Please enter the contact person name.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setFormError('Please enter a valid email address.');
      return;
    }
    if (!formData.phone.trim()) {
      setFormError('Please enter a contact phone number.');
      return;
    }
    if (enquiryType === 'institutional' && !formData.schoolName.trim()) {
      setFormError('Please enter the school name.');
      return;
    }
    if (!formData.consent) {
      setFormError('Please accept the consent terms to submit your enquiry.');
      return;
    }

    setIsSubmitting(true);

    // Simulate backend submission response
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Title Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-extrabold tracking-wider uppercase border border-indigo-200">
          <Building2 className="w-4 h-4 text-indigo-600" />
          <span>School Partnership Enquiry</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-slate-900 tracking-tight">
          Let's Explore What AI Readiness Could Look Like at Your School.
        </h1>
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium">
          Tell us a little about your institution. Our team will discuss your students, academic priorities, and a program structure suited to your school.
        </p>
      </div>

      {/* Enquiry Type Selector */}
      <div className="flex justify-center">
        <div className="bg-slate-100 p-1.5 rounded-2xl border border-slate-200 inline-flex gap-2">
          <button
            onClick={() => { setEnquiryType('institutional'); setIsSuccess(false); }}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all flex items-center gap-2 ${
              enquiryType === 'institutional'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white'
            }`}
          >
            <Building2 className="w-4 h-4" />
            <span>School Management & Principals</span>
          </button>
          
          <button
            onClick={() => { setEnquiryType('general'); setIsSuccess(false); }}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all flex items-center gap-2 ${
              enquiryType === 'general'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white'
            }`}
          >
            <Users className="w-4 h-4" />
            <span>Parents or General Inquiry</span>
          </button>
        </div>
      </div>

      {/* Main Grid: Form + Contact Info */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Form */}
        <div className="lg:col-span-8 bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-md space-y-6">
          
          {isSuccess ? (
            <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
              <div className="w-16 h-16 rounded-2xl bg-teal-50 text-teal-600 border border-teal-200 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h2 className="text-2xl font-heading font-black text-slate-900">Enquiry Submitted Successfully</h2>
              <p className="text-slate-600 text-sm max-w-lg mx-auto leading-relaxed">
                Thank you for reaching out. Your enquiry has been received. Our team will review your requirements and contact you using the details provided.
              </p>
              <div className="pt-4">
                <button
                  onClick={() => { setIsSuccess(false); }}
                  className="px-6 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-all"
                >
                  Submit Another Request
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {formError && (
                <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-bold flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{formError}</span>
                </div>
              )}

              {enquiryType === 'institutional' ? (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 uppercase">School Name <span className="text-red-500">*</span></label>
                      <input
                        type="text"
                        name="schoolName"
                        value={formData.schoolName}
                        onChange={handleChange}
                        placeholder="e.g. Greenwood International School"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-500/20 text-sm font-medium outline-none"
                        required
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 uppercase">Contact Person Name <span className="text-red-500">*</span></label>
                      <input
                        type="text"
                        name="contactName"
                        value={formData.contactName}
                        onChange={handleChange}
                        placeholder="e.g. Dr. A. Sharma"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-500/20 text-sm font-medium outline-none"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 uppercase">Designation / Role <span className="text-red-500">*</span></label>
                      <select
                        name="designation"
                        value={formData.designation}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-500/20 text-sm font-medium outline-none bg-white"
                      >
                        <option value="Principal">Principal</option>
                        <option value="Correspondent / Management">Correspondent / Management</option>
                        <option value="Academic Coordinator">Academic Coordinator</option>
                        <option value="Teacher">Teacher</option>
                        <option value="Parent">Parent</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 uppercase">Official Email <span className="text-red-500">*</span></label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="principal@school.edu.in"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-500/20 text-sm font-medium outline-none"
                        required
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 uppercase">Phone Number <span className="text-red-500">*</span></label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 9876543210"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-500/20 text-sm font-medium outline-none"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 uppercase">City <span className="text-red-500">*</span></label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        placeholder="Visakhapatnam"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-500/20 text-sm font-medium outline-none"
                        required
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 uppercase">Approx. Student Count <span className="text-red-500">*</span></label>
                      <select
                        name="studentCount"
                        value={formData.studentCount}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-500/20 text-sm font-medium outline-none bg-white"
                      >
                        <option value="50-100">50 - 100 students</option>
                        <option value="150">150 students</option>
                        <option value="250-500">250 - 500 students</option>
                        <option value="500+">500+ students</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 uppercase">Grades of Interest <span className="text-red-500">*</span></label>
                      <select
                        name="gradesOfInterest"
                        value={formData.gradesOfInterest}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-500/20 text-sm font-medium outline-none bg-white"
                      >
                        <option value="Grades 3–5">Grades 3–5</option>
                        <option value="Grades 6–8">Grades 6–8 (Recommended)</option>
                        <option value="Grades 9–10">Grades 9–10 (Recommended)</option>
                        <option value="Grades 11–12">Grades 11–12</option>
                        <option value="Multiple grade groups">Multiple grade groups</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 uppercase">Implementation Period</label>
                      <select
                        name="implementationPeriod"
                        value={formData.implementationPeriod}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-500/20 text-sm font-medium outline-none bg-white"
                      >
                        <option value="Academic-year program">Academic-year program</option>
                        <option value="Term-based program">Term-based program</option>
                        <option value="Periodic workshops">Periodic workshops</option>
                        <option value="Not sure yet — discuss with us">Not sure yet — discuss with us</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 uppercase">School Website (Optional)</label>
                      <input
                        type="url"
                        name="schoolWebsite"
                        value={formData.schoolWebsite}
                        onChange={handleChange}
                        placeholder="https://www.schoolname.edu.in"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-500/20 text-sm font-medium outline-none"
                      />
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 uppercase">Your Full Name <span className="text-red-500">*</span></label>
                      <input
                        type="text"
                        name="contactName"
                        value={formData.contactName}
                        onChange={handleChange}
                        placeholder="e.g. Ramesh Kumar"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-500/20 text-sm font-medium outline-none"
                        required
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 uppercase">Email Address <span className="text-red-500">*</span></label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="ramesh@gmail.com"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-500/20 text-sm font-medium outline-none"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 uppercase">Phone Number <span className="text-red-500">*</span></label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 9876543210"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-500/20 text-sm font-medium outline-none"
                        required
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 uppercase">City <span className="text-red-500">*</span></label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        placeholder="Visakhapatnam"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-500/20 text-sm font-medium outline-none"
                        required
                      />
                    </div>
                  </div>
                </>
              )}

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase">Message or Specific Requirements (Optional)</label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your student population, timetable preferences, or specific questions..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-500/20 text-sm font-medium outline-none resize-none"
                />
              </div>

              <div className="flex items-start gap-2.5 pt-2">
                <input
                  type="checkbox"
                  id="consent"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                  className="mt-1 w-4 h-4 text-indigo-600 rounded border-slate-300 focus:ring-indigo-500"
                />
                <label htmlFor="consent" className="text-xs text-slate-600 leading-normal">
                  I agree to allow MindPilot Education to contact me regarding this institutional enquiry. We respect your data privacy.
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-base shadow-lg transition-all disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Submitting Enquiry...</span>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Request a Partnership Discussion</span>
                  </>
                )}
              </button>

            </form>
          )}

        </div>

        {/* Right Column: Official Contact Card & Headquarters */}
        <div className="lg:col-span-4 space-y-6">
          
          <div className="bg-slate-900 text-white p-8 rounded-3xl space-y-6 shadow-xl border border-slate-800">
            <h3 className="text-xl font-heading font-black text-white flex items-center gap-2">
              <Building2 className="w-5 h-5 text-teal-400" />
              <span>Headquarters & Contact</span>
            </h3>

            <div className="space-y-4 text-sm font-medium">
              <div className="space-y-1">
                <p className="text-xs font-bold text-teal-400 uppercase">LEADERSHIP</p>
                <p className="text-base font-bold text-white">{MIND_PILOT_INFO.contact.ceo}</p>
                <p className="text-xs text-slate-400">{MIND_PILOT_INFO.contact.role}</p>
              </div>

              <div className="pt-2 border-t border-slate-800 space-y-3 text-xs sm:text-sm">
                <div className="flex items-center gap-3 text-slate-300">
                  <Mail className="w-4 h-4 text-teal-400 shrink-0" />
                  <a href={`mailto:${MIND_PILOT_INFO.contact.email}`} className="hover:text-white transition-colors">{MIND_PILOT_INFO.contact.email}</a>
                </div>

                <div className="flex items-center gap-3 text-slate-300">
                  <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                  <a href={`tel:${MIND_PILOT_INFO.contact.phone}`} className="hover:text-white transition-colors">{MIND_PILOT_INFO.contact.phone}</a>
                </div>

                <div className="flex items-start gap-3 text-slate-300">
                  <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <span>{MIND_PILOT_INFO.contact.location}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-indigo-200 bg-indigo-50/50 space-y-2">
            <h4 className="text-xs font-extrabold text-indigo-800 uppercase tracking-wider">NO PUBLIC PRICING GUARANTEE</h4>
            <p className="text-xs text-slate-600 leading-relaxed font-medium">
              We do not post public pricing or standardized package fees. Every proposal is crafted following an institutional discovery session with school leadership.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}
