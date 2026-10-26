import React, { useState } from 'react';
import { 
  ShieldCheck, 
  BarChart2, 
  Users, 
  Layers, 
  RotateCcw, 
  ArrowLeft, 
  Check, 
  X, 
  TrendingUp, 
  AlertTriangle,
  Building,
  FileCheck,
  Search,
  Filter
} from 'lucide-react';
import { AppView } from '../../types';
import { ADMIN_STATS } from '../../data/mockData';
import { formatNPR } from '../../lib/utils';
import { toast } from 'sonner';

interface AdminDashboardPageProps {
  onNavigate: (view: AppView) => void;
}

export const AdminDashboardPage: React.FC<AdminDashboardPageProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'moderation' | 'suppliers' | 'refunds'>('overview');
  
  // Pending moderation items mock state
  const [pendingListings, setPendingListings] = useState([
    {
      id: 'mod-1',
      title: 'Upper Mustang 4WD Jeep Overland Expedition',
      provider: 'Highland Sherpa Explorations',
      type: 'Tour',
      priceNPR: 95000,
      submittedDate: '2026-10-24',
      documents: 'ACAP License & Tourism Board Reg Attached'
    },
    {
      id: 'mod-2',
      title: 'Pokhara Lakeside Eco Boutique Villa Suite',
      provider: 'Barahi Group Hospitality',
      type: 'Hotel',
      priceNPR: 18000,
      submittedDate: '2026-10-23',
      documents: 'Hotel Association Nepal (HAN) Verified'
    },
    {
      id: 'mod-3',
      title: 'Ghandruk Sunrise Helicopter Day Tour',
      provider: 'Air Dynasty Nepal',
      type: 'Activity',
      priceNPR: 28000,
      submittedDate: '2026-10-22',
      documents: 'CAAN Flight AOC Valid'
    }
  ]);

  const handleApprove = (id: string, title: string) => {
    setPendingListings(pendingListings.filter((l) => l.id !== id));
    toast.success(`Approved "${title}" — Now active on Ghumio marketplace.`);
  };

  const handleReject = (id: string, title: string) => {
    setPendingListings(pendingListings.filter((l) => l.id !== id));
    toast.error(`Returned "${title}" to supplier for permit documentation revision.`);
  };

  return (
    <div className="min-h-screen bg-[#F1F4F9] flex flex-col">
      
      {/* Top Admin Bar */}
      <header className="bg-[#101D45] text-white px-4 sm:px-8 py-3.5 border-b border-[#1A2A5E]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => onNavigate({ type: 'home' })}
              className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors flex items-center gap-1.5 text-xs font-semibold"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Exit Admin</span>
            </button>
            <div className="flex items-center gap-2">
              <span className="font-black text-lg text-white">Ghumio</span>
              <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-[#08C5C9] text-[#101D45]">
                Ops Admin Console
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold text-slate-300">Nepal Operations Lead: Anish</span>
            <div className="w-8 h-8 rounded-full bg-[#08C5C9] text-[#101D45] font-black flex items-center justify-center text-xs">
              AD
            </div>
          </div>
        </div>
      </header>

      {/* Main Admin Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-6 w-full flex-1">
        
        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 border-b border-[#D7DBE5] pb-4 mb-6 overflow-x-auto">
          {[
            { id: 'overview', label: 'Platform Metrics', icon: <BarChart2 className="w-4 h-4" /> },
            { id: 'moderation', label: `Listing Moderation (${pendingListings.length})`, icon: <FileCheck className="w-4 h-4" /> },
            { id: 'suppliers', label: 'Registered Operators (124)', icon: <Building className="w-4 h-4" /> },
            { id: 'refunds', label: 'Disputes & Refunds (2)', icon: <RotateCcw className="w-4 h-4" /> },
          ].map((tab) => {
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                  active
                    ? 'bg-[#101D45] text-white shadow-sm'
                    : 'bg-white text-[#57647E] border border-[#D7DBE5] hover:bg-slate-200'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab 1: Overview */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            
            {/* KPI Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white p-5 rounded-2xl border border-[#D7DBE5] shadow-sm">
                <div className="text-xs font-bold text-[#8F9BB3] uppercase tracking-wider">Gross Merchandise Value</div>
                <div className="text-2xl font-black text-[#101D45] mt-1">{formatNPR(ADMIN_STATS.totalGrossBookingsNPR)}</div>
                <div className="text-xs text-[#15803D] font-semibold mt-2 flex items-center gap-1">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>+24.1% MoM (High Autumn Season)</span>
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-[#D7DBE5] shadow-sm">
                <div className="text-xs font-bold text-[#8F9BB3] uppercase tracking-wider">Monthly Active Bookings</div>
                <div className="text-2xl font-black text-[#101D45] mt-1">{ADMIN_STATS.monthlyActiveBookings}</div>
                <div className="text-xs text-[#57647E] mt-2">62% Trekking • 24% Bus • 14% Stays</div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-[#D7DBE5] shadow-sm">
                <div className="text-xs font-bold text-[#8F9BB3] uppercase tracking-wider">Registered Operators</div>
                <div className="text-2xl font-black text-[#101D45] mt-1">{ADMIN_STATS.registeredSuppliers}</div>
                <div className="text-xs text-[#B7791F] font-semibold mt-2">
                  {ADMIN_STATS.pendingSupplierApprovals} pending compliance check
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-[#D7DBE5] shadow-sm">
                <div className="text-xs font-bold text-[#8F9BB3] uppercase tracking-wider">Dispute & Chargeback Rate</div>
                <div className="text-2xl font-black text-[#15803D] mt-1">{ADMIN_STATS.disputeRatePercent}</div>
                <div className="text-xs text-[#8F9BB3] mt-2">Lowest across Nepal travel tech</div>
              </div>
            </div>

            {/* Platform Health Summary */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-[#D7DBE5] shadow-sm">
                <h3 className="font-bold text-base text-[#101D45] mb-4">Volume by Travel Category</h3>
                <div className="space-y-3 text-xs">
                  <div>
                    <div className="flex justify-between font-bold mb-1">
                      <span>Himalayan Treks & Packages (Annapurna, EBC)</span>
                      <span className="text-[#101D45]">62% ({formatNPR(9188400)})</span>
                    </div>
                    <div className="w-full h-2.5 rounded-full bg-slate-100 overflow-hidden">
                      <div className="w-[62%] h-full bg-[#F45B18]" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between font-bold mb-1">
                      <span>Intercity Tourist Buses (Kathmandu ⇄ Pokhara)</span>
                      <span className="text-[#101D45]">24% ({formatNPR(3556800)})</span>
                    </div>
                    <div className="w-full h-2.5 rounded-full bg-slate-100 overflow-hidden">
                      <div className="w-[24%] h-full bg-[#FFB91F]" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between font-bold mb-1">
                      <span>Lakeside Resorts & Heritage Stays</span>
                      <span className="text-[#101D45]">14% ({formatNPR(2074800)})</span>
                    </div>
                    <div className="w-full h-2.5 rounded-full bg-slate-100 overflow-hidden">
                      <div className="w-[14%] h-full bg-[#1769F5]" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-[#D7DBE5] shadow-sm">
                <h3 className="font-bold text-base text-[#101D45] mb-4">Nepal Government Compliance Status</h3>
                <div className="space-y-2.5 text-xs text-[#57647E]">
                  <div className="flex items-center justify-between p-3 rounded-xl bg-[#F7F8FA] border border-[#E8EAF0]">
                    <span>Nepal Tourism Board (NTB) Agency Registry</span>
                    <span className="font-bold text-[#15803D]">Active & Synchronized</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-xl bg-[#F7F8FA] border border-[#E8EAF0]">
                    <span>ACAP & TIMS Permit Automation API</span>
                    <span className="font-bold text-[#15803D]">Operational</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-xl bg-[#F7F8FA] border border-[#E8EAF0]">
                    <span>Inland Revenue Dept (IRD) Real-time VAT Sync</span>
                    <span className="font-bold text-[#15803D]">Compliant (13% VAT)</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* Tab 2: Listing Moderation */}
        {activeTab === 'moderation' && (
          <div className="bg-white rounded-2xl border border-[#D7DBE5] shadow-sm overflow-hidden p-6 space-y-4">
            <div>
              <h3 className="font-bold text-base text-[#101D45]">Pending Supplier Experience Submissions</h3>
              <p className="text-xs text-[#8F9BB3]">
                Verify guide licenses, ACAP compliance, and price parity before releasing to public catalog.
              </p>
            </div>

            {pendingListings.length === 0 ? (
              <div className="py-12 text-center text-xs text-[#8F9BB3]">
                ✓ All submissions moderated. Catalog is up to date.
              </div>
            ) : (
              <div className="space-y-3">
                {pendingListings.map((item) => (
                  <div
                    key={item.id}
                    className="p-5 rounded-2xl border border-[#E8EAF0] bg-[#FDFDFE] flex flex-col md:flex-row md:items-center justify-between gap-4"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#EEF4FE] text-[#1769F5]">
                          {item.type}
                        </span>
                        <span className="text-xs font-bold text-[#8F9BB3]">Submitted: {item.submittedDate}</span>
                      </div>
                      <h4 className="font-bold text-sm text-[#101D45] mt-1">{item.title}</h4>
                      <div className="text-xs text-[#57647E] mt-0.5">
                        Supplier: <strong>{item.provider}</strong> • Rate: {formatNPR(item.priceNPR)}
                      </div>
                      <div className="text-[11px] text-[#15803D] mt-1">
                        📄 {item.documents}
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleApprove(item.id, item.title)}
                        className="px-4 py-2 rounded-xl bg-[#15803D] hover:bg-[#166534] text-white text-xs font-bold flex items-center gap-1.5 transition-colors"
                      >
                        <Check className="w-4 h-4" />
                        <span>Approve & Publish</span>
                      </button>
                      <button
                        onClick={() => handleReject(item.id, item.title)}
                        className="px-3.5 py-2 rounded-xl border border-[#DC2626] text-[#DC2626] hover:bg-[#FEE2E2] text-xs font-bold flex items-center gap-1 transition-colors"
                      >
                        <X className="w-4 h-4" />
                        <span>Request Info</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Tab 3: Suppliers */}
        {activeTab === 'suppliers' && (
          <div className="bg-white rounded-2xl border border-[#D7DBE5] shadow-sm p-6 space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-bold text-base text-[#101D45]">Verified Travel Partners</h3>
                <p className="text-xs text-[#8F9BB3]">Authorized agencies, bus transport lines, and hotel chains in Nepal.</p>
              </div>
              <div className="flex items-center gap-2 bg-[#F7F8FA] border border-[#E8EAF0] px-3 py-1.5 rounded-xl text-xs">
                <Search className="w-3.5 h-3.5 text-[#8F9BB3]" />
                <input placeholder="Search operator..." className="bg-transparent focus:outline-none text-xs" />
              </div>
            </div>

            <div className="divide-y divide-[#E8EAF0] text-xs text-[#101D45]">
              {[
                { name: 'Jagadamba VIP Travels', category: 'Bus Fleet', location: 'Kathmandu / Pokhara', status: 'Active (Tier 1)', rating: 4.92 },
                { name: 'Highland Sherpa Explorations', category: 'Trekking & Expeditions', location: 'Thamel, Kathmandu', status: 'Active (Tier 1)', rating: 4.96 },
                { name: 'The Pavilions Himalayas Group', category: 'Luxury Stays', location: 'Pokhara Lakeside', status: 'Active (Tier 1)', rating: 4.96 },
                { name: 'Skyline Paragliding Pokhara', category: 'Air Adventure', location: 'Sarangkot, Pokhara', status: 'Active', rating: 4.96 },
              ].map((s, idx) => (
                <div key={idx} className="py-3.5 flex items-center justify-between">
                  <div>
                    <div className="font-bold text-sm">{s.name}</div>
                    <div className="text-[#57647E]">{s.category} • {s.location}</div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="font-bold text-[#FFB91F]">{s.rating} ★</span>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#E8F8EE] text-[#15803D]">
                      {s.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 4: Disputes & Refunds */}
        {activeTab === 'refunds' && (
          <div className="bg-white rounded-2xl border border-[#D7DBE5] shadow-sm p-6 space-y-4">
            <div>
              <h3 className="font-bold text-base text-[#101D45]">Dispute & Cancellation Queue</h3>
              <p className="text-xs text-[#8F9BB3]">Customer cancellation requests under operational review.</p>
            </div>

            <div className="space-y-3 text-xs">
              <div className="p-4 rounded-xl border border-[#E8EAF0] bg-[#FDFDFE] flex items-center justify-between">
                <div>
                  <span className="font-bold text-[#101D45]">Booking GHM-654122 (Kathmandu to Pokhara Bus)</span>
                  <div className="text-[#57647E]">Reason: Customer rescheduled due to heavy Prithvi highway landslide alert.</div>
                  <div className="text-[11px] text-[#B7791F] font-semibold mt-0.5">Simulated Amount: NPR 3,885</div>
                </div>
                <button
                  onClick={() => toast.success('Simulated refund voucher credited.')}
                  className="px-3.5 py-1.5 rounded-xl bg-[#101D45] text-white font-bold hover:bg-[#15803D]"
                >
                  Approve Refund
                </button>
              </div>
            </div>
          </div>
        )}

      </div>

    </div>
  );
};

