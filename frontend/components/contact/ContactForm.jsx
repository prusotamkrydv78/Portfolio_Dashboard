'use client';

import { useState } from 'react';
import { FiX, FiPlus, FiLoader } from 'react-icons/fi';
import { toast } from 'sonner';

export default function ContactForm({ contact, onClose, onUpdate }) {
  const [loading, setLoading] = useState(false);
  const [socialLoading, setSocialLoading] = useState(null);
  const [formData, setFormData] = useState({
    email: contact?.email || '',
    phone: contact?.phone || '',
    location: contact?.location || '',
    socials: contact?.socials || []  // Changed to array for better structure
  });

  const [newSocial, setNewSocial] = useState({
    name: '',
    platform: '',
    url: '',
    icon: ''
  });

  const addSocialLink = () => {
    if (newSocial.platform.trim() && newSocial.url.trim()) {
      setFormData({
        ...formData,
        socials: [...formData.socials, { ...newSocial }]
      });
      setNewSocial({ name: '', platform: '', url: '', icon: '' });
    }
  };

  const removeSocialLink = (index) => {
    const newSocials = formData.socials.filter((_, i) => i !== index);
    setFormData({ ...formData, socials: newSocials });
  };

  const updateSocialLink = (index, field, value) => {
    const newSocials = [...formData.socials];
    newSocials[index] = { ...newSocials[index], [field]: value };
    setFormData({ ...formData, socials: newSocials });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Frontend-only: just update parent state and show a toast
      await new Promise((r) => setTimeout(r, 300));
      toast.success('Contact information updated');
      onUpdate?.(formData);
      onClose();
    } catch (error) {
      toast.error('Failed to update contact');
    } finally {
      setLoading(false);
    }
  };

  const handleAddSocial = async () => {
    if (!newSocial.platform.trim() || !newSocial.url.trim()) {
      return toast.error('Platform and URL are required');
    }

    setSocialLoading('add');
    try {
      await new Promise((r) => setTimeout(r, 200));
      setFormData({
        ...formData,
        socials: [...formData.socials, { ...newSocial }]
      });
      setNewSocial({ name: '', platform: '', url: '', icon: '' });
      toast.success('Social link added');
    } catch (error) {
      toast.error('Failed to add social link');
    } finally {
      setSocialLoading(null);
    }
  };

  const handleUpdateSocial = async (index, field, value) => {
    setSocialLoading(index);
    try {
      await new Promise((r) => setTimeout(r, 150));
      updateSocialLink(index, field, value);
      toast.success('Social link updated');
    } catch (error) {
      toast.error('Failed to update social link');
    } finally {
      setSocialLoading(null);
    }
  };

  const handleDeleteSocial = async (index) => {
    setSocialLoading(index);
    try {
      await new Promise((r) => setTimeout(r, 150));
      removeSocialLink(index);
      toast.success('Social link deleted');
    } catch (error) {
      toast.error('Failed to delete social link');
    } finally {
      setSocialLoading(null);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-[#1a1b1e] rounded-xl w-full max-w-2xl flex flex-col max-h-[90vh] border border-white/10">
        {/* Header */}
        <div className="flex-shrink-0 flex items-center justify-between p-6 border-b border-white/10">
          <h2 className="text-xl font-semibold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Update Contact Information
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <FiX className="w-5 h-5 text-gray-400" />
          </button>
        </div>

        {/* Form */}
        <div className="flex-1 overflow-y-auto p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Location
                </label>
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <h3 className="text-gray-400">Social Links</h3>
                  <div className="grid grid-cols-4 gap-2 w-full max-w-2xl">
                    <input
                      type="text"
                      value={newSocial.name}
                      onChange={(e) => setNewSocial({ ...newSocial, name: e.target.value })}
                      placeholder="Display Name"
                      className="bg-[#212226] text-white rounded-lg p-2 text-sm"
                    />
                    <input
                      type="text"
                      value={newSocial.platform}
                      onChange={(e) => setNewSocial({ ...newSocial, platform: e.target.value })}
                      placeholder="Platform (e.g., Twitter)"
                      className="bg-[#212226] text-white rounded-lg p-2 text-sm"
                    />
                    <input
                      type="text"
                      value={newSocial.icon}
                      onChange={(e) => setNewSocial({ ...newSocial, icon: e.target.value })}
                      placeholder="Icon (e.g., FaTwitter)"
                      className="bg-[#212226] text-white rounded-lg p-2 text-sm"
                    />
                    <div className="flex space-x-2">
                      <button
                        type="button"
                        onClick={handleAddSocial}
                        disabled={socialLoading === 'add'}
                        className="p-2 text-gray-400 hover:text-white bg-[#212226] rounded-lg flex-1 disabled:opacity-50"
                      >
                        {socialLoading === 'add' ? (
                          <FiLoader className="w-5 h-5 mx-auto animate-spin" />
                        ) : (
                          <FiPlus className="w-5 h-5 mx-auto" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
                
                {formData.socials.map((social, index) => (
                  <div key={index} className="grid grid-cols-4 gap-2 items-end">
                    <div>
                      <label className="block text-gray-400 mb-2 text-sm">Name</label>
                      <input
                        type="text"
                        value={social.name}
                        onChange={(e) => updateSocialLink(index, 'name', e.target.value)}
                        className="w-full bg-[#212226] text-white rounded-lg p-2"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-400 mb-2 text-sm">Platform</label>
                      <input
                        type="text"
                        value={social.platform}
                        onChange={(e) => updateSocialLink(index, 'platform', e.target.value)}
                        className="w-full bg-[#212226] text-white rounded-lg p-2"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-400 mb-2 text-sm">Icon</label>
                      <input
                        type="text"
                        value={social.icon}
                        onChange={(e) => updateSocialLink(index, 'icon', e.target.value)}
                        className="w-full bg-[#212226] text-white rounded-lg p-2"
                      />
                    </div>
                    <div className="flex space-x-2">
                      <button
                        type="button"
                        onClick={() => handleDeleteSocial(index)}
                        disabled={socialLoading === index}
                        className="p-2 text-gray-400 hover:text-red-500 disabled:opacity-50"
                      >
                        {socialLoading === index ? (
                          <FiLoader className="w-5 h-5 animate-spin" />
                        ) : (
                          <FiX className="w-5 h-5" />
                        )}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex-shrink-0 flex justify-end items-center gap-3 p-6 border-t border-white/10 bg-[#1a1b1e]">
              <button
                onClick={onClose}
                className="px-4 py-2 text-gray-400 hover:text-white transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={loading}
                className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-colors flex items-center space-x-2"
              >
                {loading && <FiLoader className="w-4 h-4 animate-spin" />}
                <span>Save Changes</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
