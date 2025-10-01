'use client';

import { useState } from 'react';
import { FiEdit2, FiMail, FiPhone, FiMapPin, FiPlus } from 'react-icons/fi';
import ContactForm from '@/components/contact/ContactForm';

export default function ContactPage() {
  const [showForm, setShowForm] = useState(false);
  const [editingContact, setEditingContact] = useState(null);

  const contactInfo = {
    email: 'contact@example.com',
    phone: '+1 234 567 890',
    location: 'New York, USA',
    socials: [
      { platform: 'GitHub', url: 'https://github.com', icon: 'FiGithub' },
      { platform: 'LinkedIn', url: 'https://linkedin.com', icon: 'FiLinkedin' },
      { platform: 'Twitter', url: 'https://twitter.com', icon: 'FiTwitter' }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#13151a] to-[#1a1b1e]">
      <div className="max-w-7xl mx-auto p-8 space-y-8">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Contact Information
            </h1>
            <p className="text-gray-400 mt-1">Manage your contact details and social links</p>
          </div>
          <button
            onClick={() => setShowForm(true)}
            className="flex items-center justify-center px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
          >
            <FiPlus className="sm:mr-2" /> <span className='hidden sm:inline'>Update Info</span>
          </button>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ContactCard
            icon={<FiMail className="w-6 h-6" />}
            title="Email"
            value={contactInfo.email}
            onEdit={() => {
              setEditingContact({ type: 'email', value: contactInfo.email });
              setShowForm(true);
            }}
          />
          <ContactCard
            icon={<FiPhone className="w-6 h-6" />}
            title="Phone"
            value={contactInfo.phone}
            onEdit={() => {
              setEditingContact({ type: 'phone', value: contactInfo.phone });
              setShowForm(true);
            }}
          />
          <ContactCard
            icon={<FiMapPin className="w-6 h-6" />}
            title="Location"
            value={contactInfo.location}
            onEdit={() => {
              setEditingContact({ type: 'location', value: contactInfo.location });
              setShowForm(true);
            }}
          />
        </div>

        {/* Social Links Section */}
        <div className="bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 p-6">
          <h2 className="text-xl font-semibold text-white mb-6">Social Links</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {contactInfo.socials.map((social, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10 hover:border-purple-500/50 transition-all"
              >
                <div className="flex items-center gap-3">
                  <span className="p-2 bg-white/5 rounded-lg text-purple-400">
                    {/* Replace with dynamic icon component */}
                    <FiMail className="w-5 h-5" />
                  </span>
                  <div>
                    <p className="text-white font-medium">{social.platform}</p>
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-400 hover:text-purple-400"
                    >
                      {social.url}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => {
                    setEditingContact({ type: 'social', value: social });
                    setShowForm(true);
                  }}
                  className="p-2 text-gray-400 hover:text-white transition-colors"
                >
                  <FiEdit2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form Modal */}
        {showForm && (
          <ContactForm
            contact={editingContact}
            onClose={() => {
              setShowForm(false);
              setEditingContact(null);
            }}
          />
        )}
      </div>
    </div>
  );
}

function ContactCard({ icon, title, value, onEdit }) {
  return (
    <div className="bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 p-6 hover:border-purple-500/50 transition-all">
      <div className="flex justify-between items-start">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-white/5 rounded-lg text-purple-400">
            {icon}
          </div>
          <div>
            <h3 className="text-gray-400 text-sm">{title}</h3>
            <p className="text-white mt-1 font-medium">{value}</p>
          </div>
        </div>
        <button
          onClick={onEdit}
          className="p-2 text-gray-400 hover:text-white transition-colors"
        >
          <FiEdit2 className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
