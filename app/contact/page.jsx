'use client';

import { useState } from 'react';
import { FiEdit2, FiTrash2 } from 'react-icons/fi';
import ContactForm from '@/components/contact/ContactForm';
import { toast } from 'sonner';

export default function ContactPage() {
  const [showForm, setShowForm] = useState(false);
  const [editingContact, setEditingContact] = useState(null);
  const [contactInfo, setContactInfo] = useState({
    email: 'prusotamkumaryadav78@gmail.com',
    phone: '+977- 9702902298',
    location: 'Janakpur,Nepal',
    socials: [
      { id: 1, name: 'GitHub', platform: 'github', url: 'https://github.com', icon: 'FaGithub' },
      { id: 2, name: 'LinkedIn', platform: 'linkedin', url: 'https://linkedin.com', icon: 'FaLinkedin' },
    ]
  });

  const handleSave = (data) => {
    setContactInfo(data);
    toast.success('Contact information updated successfully');
  };

  const handleDeleteSocial = (id) => {
    setContactInfo({
      ...contactInfo,
      socials: contactInfo.socials.filter(s => s.id !== id)
    });
    toast.success('Social link deleted');
  };

  return (
    <div className="min-h-screen bg-[#13151a] p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-semibold text-white">Contact Information</h1>
          <button
            onClick={() => {
              setEditingContact(contactInfo);
              setShowForm(true);
            }}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Update Contact Info
          </button>
        </div>

        {/* Contact Info Cards */}
        <div className="bg-[#1a1b1e] rounded-xl p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InfoCard
              icon="📧"
              title="Email"
              value={contactInfo?.email}
              onEdit={() => {
                setEditingContact({ ...contactInfo, editField: 'email' });
                setShowForm(true);
              }}
            />
            <InfoCard
              icon="📱"
              title="Phone"
              value={contactInfo?.phone}
              onEdit={() => {
                setEditingContact({ ...contactInfo, editField: 'phone' });
                setShowForm(true);
              }}
            />
            <InfoCard
              icon="📍"
              title="Location"
              value={contactInfo?.location}
              onEdit={() => {
                setEditingContact({ ...contactInfo, editField: 'location' });
                setShowForm(true);
              }}
            />
          </div>

          {/* Social Links Section */}
          <div className="mt-8">
            <h2 className="text-lg font-medium text-white mb-4">Social Links</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {contactInfo?.socials.map((social) => (
                <div
                  key={social.id}
                  className="bg-[#212226] rounded-lg p-4 flex items-center justify-between"
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-gray-400">{social.name}</span>
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 text-sm"
                    >
                      {social.url}
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => {
                        setEditingContact({ ...contactInfo, editingSocial: social });
                        setShowForm(true);
                      }}
                      className="p-2 text-gray-400 hover:text-white"
                    >
                      <FiEdit2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDeleteSocial(social.id)}
                      className="p-2 text-gray-400 hover:text-red-500"
                    >
                      <FiTrash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
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
            onUpdate={handleSave}
          />
        )}
      </div>
    </div>
  );
}

const InfoCard = ({ icon, title, value, onEdit }) => (
  <div className="bg-[#212226] rounded-lg p-4">
    <div className="flex items-start justify-between">
      <div className="flex items-start space-x-3">
        <span className="text-2xl">{icon}</span>
        <div>
          <h3 className="text-gray-400 text-sm">{title}</h3>
          <p className="text-white mt-1">{value}</p>
        </div>
      </div>
      <button
        onClick={onEdit}
        className="p-2 text-gray-400 hover:text-white"
      >
        <FiEdit2 className="w-4 h-4" />
      </button>
    </div>
  </div>
);
