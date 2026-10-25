import React, { useState } from 'react';
import { 
  BriefcaseBusiness, 
  BarChart3, 
  ListPlus, 
  Calendar as CalendarIcon, 
  CreditCard, 
  Users, 
  ArrowLeft, 
  Plus, 
  CheckCircle2, 
  Clock, 
  Search, 
  TrendingUp, 
  Building2, 
  AlertCircle,
  X,
  FileCheck,
  ShieldCheck
} from 'lucide-react';
import { AppView } from '../../types';
import { SUPPLIER_LISTINGS } from '../../data/mockData';
import { formatNPR } from '../../lib/utils';
import { toast } from 'sonner';

interface SupplierPortalPageProps {
  onNavigate: (view: AppView) => void;
}

export const SupplierPortalPage: React.FC<SupplierPortalPageProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'listings' | 'availability' | 'finance'>('overview');
  const [listings, setListings] = useState(SUPPLIER_LISTINGS);
  const [newListingModal, setNewListingModal] = useState(false);

  // New Listing Form
  const [newTitle, setNewTitle] = useState('');
  const [newType, setNewType] = useState('Tour');
  const [newPrice, setNewPrice] = useState(35000);
  const [newDestination, setNewDestination] = useState('Pokhara');

  const handleCreateListing = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle) {
      toast.error('Listing title is required.');
      return;
    }

    const created = {
      id: `sup-${Date.now()}`,
      title: newTitle,
      type: newType,
      priceNPR: Number(newPrice),
      status: 'Active',
      rating: 5.0,
      bookingsCount: 0,
      revenueNPR: 0,
      inventory: 'Available (Daily)'
    };

    setListings([created, ...listings]);
    setNewListingModal(false);
    setNewTitle('');
    toast.success(`"${newTitle}" successfully published to Ghumio marketplace.`);
  };

  const totalRevenue = listings.reduce((sum, l) => sum + l.revenueNPR, 0);
  const totalBookings = listings.reduce((sum, l) => sum + l.bookingsCount, 0);

  return (
    <div className="min-h-screen bg-[#F7F8FA] flex flex-col">
      
      {/* Top Professional Portal Header */}
      <header className="bg-[#101D45] text-white border-b border-[#1A2A5E] px-4 sm:px-8 py-3.5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          <div className="flex items-center gap-4">
            <button
              onClick={() => onNavigate({ type: 'home' })}
              className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors flex items-center gap-1.5 text-xs font-semibold"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Marketplace</span>
            </button>

            <div className="h-4 w-[1px] bg-white/20 hidden sm:block" />

            <div className="flex items-center gap-2">
              <span className="font-black text-lg text-white">Ghumio</span>
              <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-[#F45B18] text-white">
                Supplier Hub
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="text-right hidden sm:block">
              <div className="text-xs font-bold text-white">Highland Sherpa Explorations</div>
              <div className="text-[10px] text-[#08C5C9]">Verified Nepal Operator #NP-8821</div>
            </div>
            <div className="w-8 h-8 rounded-full bg-[#F45B18] flex items-center justify-center text-xs font-bold text-white">
              HS
            </div>
          </div>

        </div>
      </header>

      {/* Main Portal View with Horizontal Nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-6 w-full flex-1">
        
        {/* Navigation Tabs */}
        <div className="flex items-center justify-between border-b border-[#E8EAF0] pb-4 mb-6">
          <div className="flex items-center gap-2 overflow-x-auto">
            {[
              { id: 'overview', label: 'Dashboard Overview', icon: <BarChart3 className="w-4 h-4" /> },
              { id: 'listings', label: `My Listings (${listings.length})`, icon: <ListPlus className="w-4 h-4" /> },
              { id: 'availability', label: 'Departure Calendar', icon: <CalendarIcon className="w-4 h-4" /> },
              { id: 'finance', label: 'Earnings & Bank Settlements', icon: <CreditCard className="w-4 h-4" /> },
            ].map((tab) => {
              const active = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                    active
                      ? 'bg-[#101D45] text-white shadow-sm'
                      : 'bg-white text-[#57647E] border border-[#E8EAF0] hover:bg-slate-100'
                  }`}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          <button
            onClick={() => setNewListingModal(true)}
            className="hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#F45B18] hover:bg-[#DF4810] text-white text-xs font-bold shadow-sm"
          >
            <Plus className="w-4 h-4" />
            <span>New Listing</span>
          </button>
        </div>

        {/* Tab 1: Overview */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            
            {/* KPI Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white p-5 rounded-2xl border border-[#E8EAF0] shadow-sm">
                <div className="text-xs font-bold text-[#8F9BB3] uppercase tracking-wider">Gross Booking Revenue</div>
                <div className="text-2xl font-black text-[#101D45] mt-1">{formatNPR(totalRevenue)}</div>
                <div className="text-xs text-[#15803D] font-semibold mt-2 flex items-center gap-1">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>+18.4% from last month</span>
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-[#E8EAF0] shadow-sm">
                <div className="text-xs font-bold text-[#8F9BB3] uppercase tracking-wider">Confirmed Bookings</div>
                <div className="text-2xl font-black text-[#101D45] mt-1">{totalBookings}</div>
                <div className="text-xs text-[#57647E] mt-2">Across 3 active packages</div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-[#E8EAF0] shadow-sm">
                <div className="text-xs font-bold text-[#8F9BB3] uppercase tracking-wider">Customer Satisfaction</div>
                <div className="text-2xl font-black text-[#FFB91F] mt-1">4.94 ★</div>
                <div className="text-xs text-[#57647E] mt-2">Based on 176 verified reviews</div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-[#E8EAF0] shadow-sm">
                <div className="text-xs font-bold text-[#8F9BB3] uppercase tracking-wider">Next Bank Payout</div>
                <div className="text-2xl font-black text-[#15803D] mt-1">{formatNPR(742000)}</div>
                <div className="text-xs text-[#8F9BB3] mt-2">Scheduled Nov 1, 2026 (Nabil Bank)</div>
              </div>
            </div>

            {/* Recent Bookings Table */}
            <div className="bg-white rounded-2xl border border-[#E8EAF0] shadow-sm overflow-hidden">
              <div className="p-5 border-b border-[#E8EAF0] flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-base text-[#101D45]">Incoming Traveler Bookings</h3>
                  <p className="text-xs text-[#8F9BB3]">Real-time customer bookings pending guide assignment</p>
                </div>
                <span className="text-xs font-bold text-[#1769F5]">3 Pending Reviews</span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-[#F7F8FA] text-[#8F9BB3] uppercase font-bold border-b border-[#E8EAF0]">
                    <tr>
                      <th className="py-3 px-5">Ref Code</th>
                      <th className="py-3 px-5">Package Title</th>
                      <th className="py-3 px-5">Traveler Name</th>
                      <th className="py-3 px-5">Travel Date</th>
                      <th className="py-3 px-5">Amount</th>
                      <th className="py-3 px-5">Status</th>
                      <th className="py-3 px-5 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E8EAF0] text-[#101D45]">
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-5 font-mono font-bold text-[#F45B18]">GHM-882190</td>
                      <td className="py-3.5 px-5 font-semibold">Annapurna Circuit Trek (2 Pax)</td>
                      <td className="py-3.5 px-5">Aarav Sharma</td>
                      <td className="py-3.5 px-5">2026-11-15</td>
                      <td className="py-3.5 px-5 font-bold">{formatNPR(138850)}</td>
                      <td className="py-3.5 px-5">
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#E8F8EE] text-[#15803D]">
                          Confirmed
                        </span>
                      </td>
                      <td className="py-3.5 px-5 text-right">
                        <button 
                          onClick={() => toast.success('Guide Ram Sherpa assigned to booking GHM-882190.')}
                          className="px-2.5 py-1 rounded bg-[#101D45] text-white font-bold hover:bg-[#F45B18]"
                        >
                          Assign Guide
                        </button>
                      </td>
                    </tr>

                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-5 font-mono font-bold text-[#F45B18]">GHM-771249</td>
                      <td className="py-3.5 px-5 font-semibold">Mardi Himal Ridge (4 Pax)</td>
                      <td className="py-3.5 px-5">David Miller (UK)</td>
                      <td className="py-3.5 px-5">2026-11-20</td>
                      <td className="py-3.5 px-5 font-bold">{formatNPR(98000)}</td>
                      <td className="py-3.5 px-5">
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#E8F8EE] text-[#15803D]">
                          Confirmed
                        </span>
                      </td>
                      <td className="py-3.5 px-5 text-right">
                        <button 
                          onClick={() => toast.success('Guide Pasang Sherpa assigned to booking GHM-771249.')}
                          className="px-2.5 py-1 rounded bg-[#101D45] text-white font-bold hover:bg-[#F45B18]"
                        >
                          Assign Guide
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        )}

        {/* Tab 2: Listings */}
        {activeTab === 'listings' && (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-bold text-base text-[#101D45]">Live Market Listings</h3>
                <p className="text-xs text-[#8F9BB3]">Manage your active tour packages, seat allocations, and pricing.</p>
              </div>
              <button
                onClick={() => setNewListingModal(true)}
                className="px-4 py-2 rounded-xl bg-[#F45B18] text-white font-bold text-xs flex items-center gap-1.5"
              >
                <Plus className="w-4 h-4" />
                <span>Add Listing</span>
              </button>
            </div>

            <div className="bg-white rounded-2xl border border-[#E8EAF0] shadow-sm overflow-hidden">
              <table className="w-full text-left text-xs">
                <thead className="bg-[#F7F8FA] text-[#8F9BB3] uppercase font-bold border-b border-[#E8EAF0]">
                  <tr>
                    <th className="py-3 px-5">Service Title</th>
                    <th className="py-3 px-5">Type</th>
                    <th className="py-3 px-5">Base Price</th>
                    <th className="py-3 px-5">Total Bookings</th>
                    <th className="py-3 px-5">Gross Revenue</th>
                    <th className="py-3 px-5">Status</th>
                    <th className="py-3 px-5 text-right">Controls</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E8EAF0] text-[#101D45]">
                  {listings.map((l) => (
                    <tr key={l.id} className="hover:bg-slate-50">
                      <td className="py-3.5 px-5 font-bold">{l.title}</td>
                      <td className="py-3.5 px-5">{l.type}</td>
                      <td className="py-3.5 px-5 font-bold">{formatNPR(l.priceNPR)}</td>
                      <td className="py-3.5 px-5 font-semibold">{l.bookingsCount}</td>
                      <td className="py-3.5 px-5 font-black text-[#101D45]">{formatNPR(l.revenueNPR)}</td>
                      <td className="py-3.5 px-5">
                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                          l.status === 'Active' ? 'bg-[#E8F8EE] text-[#15803D]' : 'bg-[#FFF9EB] text-[#B7791F]'
                        }`}>
                          {l.status}
                        </span>
                      </td>
                      <td className="py-3.5 px-5 text-right space-x-2">
                        <button
                          onClick={() => toast.success(`Updated status for ${l.title}`)}
                          className="px-2.5 py-1 rounded border border-[#E8EAF0] text-xs font-semibold hover:bg-[#F1F4F9]"
                        >
                          Edit
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab 3: Availability Calendar */}
        {activeTab === 'availability' && (
          <div className="bg-white p-6 rounded-2xl border border-[#E8EAF0] shadow-sm space-y-4">
            <div className="flex justify-between items-center pb-4 border-b border-[#E8EAF0]">
              <div>
                <h3 className="font-bold text-base text-[#101D45]">November 2026 Departure Slots</h3>
                <p className="text-xs text-[#8F9BB3]">Click on any calendar day to adjust price or freeze departures.</p>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold">
                <span className="w-3 h-3 rounded-full bg-[#15803D]"></span>
                <span className="text-slate-600">Open for Bookings</span>
                <span className="w-3 h-3 rounded-full bg-[#DC2626] ml-2"></span>
                <span className="text-slate-600">Locked / Full</span>
              </div>
            </div>

            <div className="grid grid-cols-7 gap-2 text-center text-xs">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((d) => (
                <div key={d} className="font-bold text-[#8F9BB3] py-2 uppercase tracking-wider">{d}</div>
              ))}
              {Array.from({ length: 30 }).map((_, i) => {
                const day = i + 1;
                const isBusy = day === 7 || day === 14 || day === 21;
                return (
                  <button
                    key={day}
                    onClick={() => toast.info(`Day ${day} Nov: Slots open. Base rate NPR 68,500.`)}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      isBusy ? 'bg-[#FFF2EB] border-[#F45B18]/30' : 'bg-[#FDFDFE] border-[#E8EAF0] hover:border-[#101D45]'
                    }`}
                  >
                    <div className="font-bold text-[#101D45]">{day}</div>
                    <div className="text-[10px] text-[#57647E] mt-1">
                      {isBusy ? '4 slots left' : 'Daily Guide'}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Tab 4: Finance */}
        {activeTab === 'finance' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-5 rounded-2xl border border-[#E8EAF0] shadow-sm">
                <div className="text-xs text-[#8F9BB3] font-bold uppercase">Total Lifetime Settlements</div>
                <div className="text-2xl font-black text-[#101D45] mt-1">{formatNPR(totalRevenue * 0.9)}</div>
                <div className="text-xs text-[#15803D] mt-2">Paid after 10% platform facilitation fee</div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-[#E8EAF0] shadow-sm">
                <div className="text-xs text-[#8F9BB3] font-bold uppercase">Linked Bank Account</div>
                <div className="text-base font-black text-[#101D45] mt-1">Nabil Bank Nepal</div>
                <div className="text-xs text-[#57647E] font-mono mt-1">A/C: 01900175002931 (Sherpa Expeditions)</div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-[#E8EAF0] shadow-sm">
                <div className="text-xs text-[#8F9BB3] font-bold uppercase">PAN / VAT Status</div>
                <div className="text-base font-black text-[#15803D] mt-1">Verified Compliant</div>
                <div className="text-xs text-[#57647E] mt-1">Inland Revenue Dept Nepal #302198012</div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-[#E8EAF0] shadow-sm p-5">
              <h3 className="font-bold text-base text-[#101D45] mb-3">Settlement Statement History</h3>
              <div className="space-y-2 text-xs">
                <div className="flex items-center justify-between p-3 rounded-xl bg-[#F7F8FA] border border-[#E8EAF0]">
                  <div>
                    <span className="font-bold text-[#101D45]">October 2026 Mid-Month Payout</span>
                    <div className="text-[11px] text-[#8F9BB3]">Transferred to Nabil Bank • UTR: NBL-992104</div>
                  </div>
                  <div className="text-right">
                    <div className="font-black text-[#15803D]">{formatNPR(1450000)}</div>
                    <div className="text-[10px] text-[#8F9BB3]">Settled on Oct 16</div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-[#F7F8FA] border border-[#E8EAF0]">
                  <div>
                    <span className="font-bold text-[#101D45]">September 2026 End-Month Payout</span>
                    <div className="text-[11px] text-[#8F9BB3]">Transferred to Nabil Bank • UTR: NBL-881290</div>
                  </div>
                  <div className="text-right">
                    <div className="font-black text-[#15803D]">{formatNPR(1890000)}</div>
                    <div className="text-[10px] text-[#8F9BB3]">Settled on Oct 01</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>

      {/* New Listing Modal */}
      {newListingModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 space-y-4 shadow-2xl relative">
            <button
              onClick={() => setNewListingModal(false)}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-800"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-lg font-black text-[#101D45]">Publish New Experience</h3>

            <form onSubmit={handleCreateListing} className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-[#101D45] mb-1">Listing Title</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Langtang Valley Gosaikunda Trek"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-[#E8EAF0] text-xs font-semibold text-[#101D45]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#101D45] mb-1">Service Type</label>
                  <select
                    value={newType}
                    onChange={(e) => setNewType(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-[#E8EAF0] text-xs font-semibold text-[#101D45]"
                  >
                    <option value="Tour">Trekking Tour</option>
                    <option value="Hotel">Hotel Room</option>
                    <option value="Bus">Bus Seat</option>
                    <option value="Activity">Adventure Activity</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#101D45] mb-1">Base Price (NPR)</label>
                  <input
                    type="number"
                    value={newPrice}
                    onChange={(e) => setNewPrice(Number(e.target.value))}
                    className="w-full px-3 py-2 rounded-xl border border-[#E8EAF0] text-xs font-semibold text-[#101D45]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#101D45] mb-1">Himalayan Region</label>
                <select
                  value={newDestination}
                  onChange={(e) => setNewDestination(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-[#E8EAF0] text-xs font-semibold text-[#101D45]"
                >
                  <option value="Pokhara">Pokhara</option>
                  <option value="Annapurna">Annapurna</option>
                  <option value="Everest">Everest / Khumbu</option>
                  <option value="Langtang">Langtang</option>
                  <option value="Mustang">Mustang</option>
                </select>
              </div>

              <div className="pt-2 flex gap-2">
                <button
                  type="submit"
                  className="flex-1 py-3 rounded-xl bg-[#F45B18] text-white font-bold text-xs"
                >
                  Publish Listing
                </button>
                <button
                  type="button"
                  onClick={() => setNewListingModal(false)}
                  className="px-4 py-3 rounded-xl border border-[#E8EAF0] text-xs font-bold text-[#57647E]"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
