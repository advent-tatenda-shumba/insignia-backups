import React, { useState, useEffect } from 'react';
import { Shield, Cloud, Users, Building2, Heart, Camera, Server, Lock, Clock, Mail, Phone, Check, ArrowRight, Menu, X, MessageCircle } from 'lucide-react';

export default function App() {
  const [scrollY, setScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', plan: '', message: ''
  });

  // Your contact details
  const CONTACT_EMAIL = "insigniabackupsolutions@gmail.com";
  const WHATSAPP_NUMBER = "263784443299"; // Format without + or spaces for API

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const smoothScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const openSignup = (plan = '') => {
    setSelectedPlan(plan);
    setFormData({ ...formData, plan });
    setShowSignupModal(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Construct email body
    const subject = `New Inquiry: ${formData.plan || 'General'} Plan`;
    const body = `Name: ${formData.name}%0D%0A` +
                 `Email: ${formData.email}%0D%0A` +
                 `Phone: ${formData.phone}%0D%0A` +
                 `Selected Plan: ${formData.plan}%0D%0A` +
                 `Message: ${formData.message}`;

    // Open email client
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    
    setShowSignupModal(false);
    setFormData({ name: '', email: '', phone: '', plan: '', message: '' });
  };

  const solutions = [
    {
      icon: <Camera className="w-10 h-10" />,
      title: "Personal Users",
      description: "Lost precious memories to device malfunction? We secure your photos, videos, and personal files with automatic backup and duplicate removal.",
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "Households",
      description: "Protect your family's digital life. Cloud storage not for everyone? We offer personalized backup solutions that fit your needs.",
      color: "from-orange-400 to-red-500"
    },
    {
      icon: <Building2 className="w-10 h-10" />,
      title: "Small & Medium Businesses",
      description: "Many Zimbabwean enterprises lack backup expertise. We provide complete disaster recovery plans and ongoing technical support.",
      color: "from-yellow-500 to-amber-600"
    },
    {
      icon: <Heart className="w-10 h-10" />,
      title: "Healthcare Facilities",
      description: "Digitize paper-heavy workflows. We capture, document, and secure patient data with professional-grade systems.",
      color: "from-red-400 to-pink-500"
    }
  ];

  const plans = [
    {
      name: "Basic",
      price: "$10",
      storage: "20GB",
      features: [
        "20GB secure storage",
        "Automatic duplicate removal",
        "Chronological organization",
        "Web access to your data",
        "Email support"
      ],
      cta: "Get Started"
    },
    {
      name: "Standard",
      price: "$25",
      storage: "50GB",
      features: [
        "50GB secure storage",
        "Automatic duplicate removal",
        "Chronological organization",
        "Priority email support",
        "Data quality enhancement"
      ],
      cta: "Get Started"
    },
    {
      name: "Premium",
      price: "$30",
      storage: "Unlimited",
      popular: true,
      features: [
        "Dedicated service",
        "24/7 priority support",
        "Free external SSD backup",
        "On-site backup service available",
        "Advanced data organization",
        "Real-time sync"
      ],
      cta: "Go Premium"
    }
  ];

  const features = [
    { icon: <Shield className="w-8 h-8" />, title: "Military-Grade Security", desc: "Your data encrypted and protected" },
    { icon: <Clock className="w-8 h-8" />, title: "Automated Backups", desc: "Set it and forget it" },
    { icon: <Server className="w-8 h-8" />, title: "Reliable Infrastructure", desc: "99.9% uptime guarantee" },
    { icon: <Lock className="w-8 h-8" />, title: "Privacy First", desc: "Your data, your control" }
  ];

  return (
    <div className="bg-black text-white overflow-x-hidden">
      {/* Floating WhatsApp Button */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all hover:scale-110 border-2 border-white"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-8 h-8" />
      </a>

      <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-lg border-b border-gray-800/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                <Cloud className="w-6 h-6 text-black" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Insignia Backup Solutions
              </span>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => smoothScroll('solutions')} className="hover:text-yellow-400 transition-colors">Solutions</button>
              <button onClick={() => smoothScroll('pricing')} className="hover:text-yellow-400 transition-colors">Pricing</button>
              <button onClick={() => smoothScroll('contact')} className="hover:text-yellow-400 transition-colors">Contact</button>
              <button 
                onClick={() => openSignup()}
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-2 rounded-full font-semibold hover:shadow-lg hover:shadow-yellow-400/50 transition-all"
              >
                Get Started
              </button>
            </div>

            <button 
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
              <button onClick={() => smoothScroll('solutions')} className="hover:text-yellow-400 transition-colors text-left">Solutions</button>
              <button onClick={() => smoothScroll('pricing')} className="hover:text-yellow-400 transition-colors text-left">Pricing</button>
              <button onClick={() => smoothScroll('contact')} className="hover:text-yellow-400 transition-colors text-left">Contact</button>
              <button 
                onClick={() => openSignup()}
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-2 rounded-full font-semibold"
              >
                Get Started
              </button>
            </div>
          )}
        </div>
      </nav>

      {showSignupModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 rounded-3xl max-w-md w-full p-8 border border-gray-700 relative">
            <button 
              onClick={() => setShowSignupModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>
            
            <h3 className="text-3xl font-bold mb-2">Get Started</h3>
            <p className="text-gray-400 mb-6">Fill out the form and we'll create an email for you to send to us.</p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-2">Full Name *</label>
                <input 
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-yellow-400"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold mb-2">Email *</label>
                <input 
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-yellow-400"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold mb-2">Phone Number *</label>
                <input 
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-yellow-400"
                  placeholder="+263 78 123 4567"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold mb-2">Select Plan *</label>
                <select 
                  required
                  value={formData.plan}
                  onChange={(e) => setFormData({...formData, plan: e.target.value})}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-yellow-400"
                >
                  <option value="">Choose a plan...</option>
                  <option value="Basic">Basic - $10/month</option>
                  <option value="Standard">Standard - $25/month</option>
                  <option value="Premium">Premium - $30/month</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-semibold mb-2">Message (Optional)</label>
                <textarea 
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-yellow-400 resize-none"
                  rows="3"
                  placeholder="Tell us about your backup needs..."
                />
              </div>
              
              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black py-4 rounded-full font-bold hover:shadow-xl hover:shadow-yellow-400/50 transition-all"
              >
                Submit via Email
              </button>
            </form>
          </div>
        </div>
      )}

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 via-orange-500/10 to-black">
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255, 193, 7, 0.15) 1px, transparent 0)',
              backgroundSize: '40px 40px',
              transform: `translateY(${scrollY * 0.5}px)`
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20 text-center">
          <div className="mb-8 inline-block">
            <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-2xl shadow-yellow-400/50 animate-pulse">
              <Cloud className="w-16 h-16 text-black" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Your Data.
            <br />
            <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
              Always Protected.
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Zimbabwe's trusted one-stop backup service provider. From precious family memories to critical business data, we've got you covered.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => smoothScroll('pricing')}
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-yellow-400/50 transition-all transform hover:scale-105 flex items-center gap-2"
            >
              Start Backing Up <ArrowRight className="w-5 h-5" />
            </button>
            <button 
              onClick={() => smoothScroll('solutions')}
              className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-400 hover:text-black transition-all"
            >
              Learn More
            </button>
          </div>

          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">99.9%</div>
              <div className="text-gray-400 mt-2">Uptime</div>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">24/7</div>
              <div className="text-gray-400 mt-2">Support</div>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Secure</div>
              <div className="text-gray-400 mt-2">Encrypted</div>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Fast</div>
              <div className="text-gray-400 mt-2">Recovery</div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Backup Solutions for
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"> Everyone</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Whether you're safeguarding family photos or protecting critical business data, we have the perfect solution.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, idx) => (
              <div 
                key={idx}
                className="group relative bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-3xl border border-gray-700 hover:border-yellow-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-400/20 hover:transform hover:scale-105"
              >
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${solution.color} mb-6 group-hover:scale-110 transition-transform`}>
                  {solution.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{solution.title}</h3>
                <p className="text-gray-400 leading-relaxed">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Why Choose
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"> Insignia?</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="text-center">
                <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-500 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* How It Works */}
          <div className="mt-32">
            <h3 className="text-3xl md:text-5xl font-bold text-center mb-16">How It Works</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-2xl font-bold text-black">1</div>
                <h4 className="text-xl font-bold mb-3">Create Account</h4>
                <p className="text-gray-400">Sign up and choose your plan. Upload your data or schedule an on-site visit.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-2xl font-bold text-black">2</div>
                <h4 className="text-xl font-bold mb-3">Automatic Backup</h4>
                <p className="text-gray-400">We organize, clean duplicates, and secure your data chronologically.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-2xl font-bold text-black">3</div>
                <h4 className="text-xl font-bold mb-3">Access Anywhere</h4>
                <p className="text-gray-400">Access your backed-up data 24/7 from any device, anywhere.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Simple,
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"> Transparent Pricing</span>
            </h2>
            <p className="text-xl text-gray-400">Choose the plan that fits your needs. All plans include secure encryption and easy recovery.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, idx) => (
              <div 
                key={idx}
                className={`relative bg-gradient-to-b from-gray-900 to-gray-800 p-8 rounded-3xl border-2 transition-all duration-500 hover:scale-105 ${
                  plan.popular 
                    ? 'border-yellow-400 shadow-2xl shadow-yellow-400/30' 
                    : 'border-gray-700 hover:border-yellow-400/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-1 rounded-full text-sm font-bold">
                    MOST POPULAR
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="text-5xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent mb-2">
                    {plan.price}
                  </div>
                  <div className="text-gray-400">per month</div>
                  <div className="text-yellow-400 font-semibold mt-2">{plan.storage}</div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={() => openSignup(plan.name)}
                  className={`w-full py-4 rounded-full font-bold transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-black hover:shadow-xl hover:shadow-yellow-400/50'
                      : 'bg-gray-700 hover:bg-gray-600 text-white'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>

          {/* Important Notes */}
          <div className="mt-16 max-w-4xl mx-auto bg-gray-900/50 border border-gray-700 rounded-2xl p-8">
            <h4 className="text-xl font-bold mb-4 text-yellow-400">Important Information</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-yellow-400 font-bold">•</span>
                <span>Account locked upon non-payment. Access restored after payment clearance.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-400 font-bold">•</span>
                <span>Data deleted after 3 months of default. Late payments incur storage fees.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-400 font-bold">•</span>
                <span>Premium subscribers receive a complimentary external SSD with data backup upon signup.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-400 font-bold">•</span>
                <span>On-site backup service available at additional cost for all plans.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Let's Get
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"> Started</span>
            </h2>
            <p className="text-xl text-gray-400">Ready to protect your data? Contact us today.</p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-3xl border border-gray-700">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl">
                    <Phone className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-300">Phone</div>
                    <a href={`tel:+${WHATSAPP_NUMBER}`} className="text-yellow-400 hover:text-yellow-300 text-lg">
                      +263 78 444 3299
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl">
                    <Mail className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-300">Email</div>
                    <a href={`mailto:${CONTACT_EMAIL}`} className="text-yellow-400 hover:text-yellow-300 break-all">
                      {CONTACT_EMAIL}
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-700">
                <h4 className="font-bold mb-4">Business Hours</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between"><span className="text-gray-400">Mon - Thu:</span><span>9:00 AM - 6:00 PM</span></div>
                  <div className="flex justify-between"><span className="text-gray-400">Friday:</span><span>9:00 AM - 4:00 PM</span></div>
                  <div className="flex justify-between"><span className="text-gray-400">Sat - Sun:</span><span className="text-red-400">Closed</span></div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-yellow-400 to-orange-500 p-8 rounded-3xl text-black">
              <h3 className="text-2xl font-bold mb-4">Ready to Protect Your Data?</h3>
              <p className="mb-6 text-black/80">
                Join hundreds of satisfied customers who trust Insignia Backup Solutions with their most valuable data.
              </p>
              <button 
                onClick={() => openSignup()}
                className="w-full bg-black text-white py-4 rounded-full font-bold hover:bg-gray-900 transition-all flex items-center justify-center gap-2"
              >
                Start Your Free Trial <ArrowRight className="w-5 h-5" />
              </button>
              
              <div className="mt-8 pt-8 border-t border-black/20">
                <p className="text-sm text-black/70">
                  <strong>Need on-site service?</strong> We come to you! Available for all plans at competitive rates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                <Cloud className="w-6 h-6 text-black" />
              </div>
              <div>
                <div className="font-bold text-lg">Insignia Backup Solutions</div>
                <div className="text-sm text-gray-400">Your One-Stop Backup Service Provider</div>
              </div>
            </div>
            
            <div className="text-center md:text-right text-gray-400 text-sm">
              <p>&copy; 2024 Insignia Backup Solutions. All rights reserved.</p>
              <p className="mt-1">Information Technology • Computer Services • Data Protection</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}