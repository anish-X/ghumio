import React, { useState } from 'react';
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  ShieldCheck, 
  Bell, 
  CreditCard, 
  Heart, 
  Save, 
  ArrowLeft 
} from 'lucide-react';
import { AppView } from '../../types';
import { toast } from 'sonner';

interface ProfilePageProps {
  onNavigate: (view: AppView) => void;
}

export const ProfilePage: React.FC<ProfilePageProps> = ({ onNavigate }) => {
  const [name, setName] = useState('Aarav Sharma');
  const [email, setEmail] = useState('aarav.sharma@example.com');
  const [phone, setPhone] = useState('+977 9841234567');
  const [location, setLocation] = useState('Kathmandu, Nepal');
  const [emergencyContact, setEmergencyContact] = useState('+977 9801234888 (Sister)');
  const [dietary, setDietary] = useState('Vegetarian');
  const [trekkingExperience, setTrekkingExperience] = useState('Experienced (Up to 5,000m)');

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Profile preferences successfully updated.');
  };

  return (
    <div className="min-h-screen bg-[#FFFCF7] py-8 sm:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Navigation */}
        <div className="pb-6 border-b border-[#E8EAF0]">
          <button
            onClick={() => onNavigate({ type: 'home' })}
            className="inline-flex items-center gap-2 text-xs font-bold text-[#101D45] hover:text-[#1769F5]"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Discovery</span>
          </button>
        </div>

        <div className="pt-6 pb-6">
          <h1 className="text-2xl sm:text-3xl font-black text-[#101D45] tracking-tight">
            Account Profile & Travel Preferences
          </h1>
          <p className="text-xs sm:text-sm text-[#57647E] mt-1">
            Manage your personal traveler information and high-altitude emergency preferences.
          </p>
        </div>

        <form onSubmit={handleSaveProfile} className="space-y-6">
          
          {/* Personal Info Box */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E8EAF0] shadow-sm space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-[#101D45] text-white flex items-center justify-center font-black text-2xl border-4 border-white shadow-md">
                AS
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#101D45]">{name}</h3>
                <div className="flex items-center gap-2 text-xs text-[#15803D] font-semibold">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Verified Nepali Traveler ID</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div>
                <label className="block text-xs font-bold text-[#101D45] mb-1">Full Legal Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E8EAF0] text-sm text-[#101D45] font-semibold"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#101D45] mb-1">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E8EAF0] text-sm text-[#101D45] font-semibold"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#101D45] mb-1">Phone Number (Nepal)</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E8EAF0] text-sm text-[#101D45] font-semibold"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#101D45] mb-1">Home City / Province</label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E8EAF0] text-sm text-[#101D45] font-semibold"
                />
              </div>
            </div>
          </div>

          {/* Himalayan Travel & Safety Preferences */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E8EAF0] shadow-sm space-y-4">
            <h3 className="text-base font-black text-[#101D45]">Trekking & Safety Profile</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-[#101D45] mb-1">Emergency Contact in Nepal</label>
                <input
                  type="text"
                  value={emergencyContact}
                  onChange={(e) => setEmergencyContact(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E8EAF0] text-sm text-[#101D45] font-semibold"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#101D45] mb-1">Dietary Preference</label>
                <select
                  value={dietary}
                  onChange={(e) => setDietary(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E8EAF0] text-sm text-[#101D45] font-semibold"
                >
                  <option value="Vegetarian">Vegetarian (Dal Bhat, Paneer)</option>
                  <option value="Non-Vegetarian">Non-Vegetarian</option>
                  <option value="Vegan">Vegan</option>
                  <option value="Halal">Halal</option>
                </select>
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-bold text-[#101D45] mb-1">Himalayan Trekking Level</label>
                <select
                  value={trekkingExperience}
                  onChange={(e) => setTrekkingExperience(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E8EAF0] text-sm text-[#101D45] font-semibold"
                >
                  <option value="Beginner (Under 3,000m)">Beginner (Poon Hill, Australian Camp)</option>
                  <option value="Experienced (Up to 5,000m)">Experienced (Annapurna Base Camp, Mardi Himal)</option>
                  <option value="High Altitude Pass (5,400m+)">High Altitude Pass (Thorong La, Everest Base Camp)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Save Button */}
          <div className="flex justify-end gap-3">
            <button
              type="submit"
              className="px-6 py-3 rounded-2xl bg-[#F45B18] hover:bg-[#DF4810] text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-sm transition-all"
            >
              <Save className="w-4 h-4" />
              <span>Save Changes</span>
            </button>
          </div>

        </form>

      </div>
    </div>
  );
};
