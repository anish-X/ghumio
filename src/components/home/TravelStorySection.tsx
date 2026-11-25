import React from 'react';
import { ArrowRight, BookOpen, Quote, Mountain } from 'lucide-react';

interface TravelStorySectionProps {
  onExploreJourneys: () => void;
}

export const TravelStorySection: React.FC<TravelStorySectionProps> = ({ onExploreJourneys }) => {
  return (
    <section className="py-16 sm:py-24 bg-white border-b border-[#E8EAF0] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Atmospheric Editorial Imagery */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-[#E8EAF0] shadow-card bg-[#101D45] aspect-[4/5] sm:aspect-[3/4]">
              <img
                src="/assets/places/story-himalaya.svg"
                alt="High Himalayan Trail at Dusk"
                className="w-full h-full object-cover filter brightness-[0.93] contrast-[1.05]"
              />
              
              {/* Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#101D45]/95 via-transparent to-black/30"></div>

              {/* Top Meta Tag */}
              <div className="absolute top-5 left-5 z-10 flex items-center gap-2 text-xs text-white px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/20 font-medium">
                <Mountain className="w-3.5 h-3.5 text-[#FFB91F]" />
                <span>Thorong High Pass • 4,800m</span>
              </div>

              {/* Bottom Inset Quote */}
              <div className="absolute bottom-6 inset-x-6 z-10 text-white">
                <Quote className="w-8 h-8 text-[#08C5C9]/60 mb-2" />
                <p className="font-semibold text-lg sm:text-xl text-slate-100 leading-snug">
                  "The mountains do not hurry, yet every valley, river, and quiet pass finds its way."
                </p>
                <div className="mt-3 text-[11px] uppercase tracking-wider font-bold text-[#FFB91F]">
                  Ghumio Travel Notes • Autumn Observation
                </div>
              </div>
            </div>

            {/* Subtle decorative accent pill */}
            <div className="hidden sm:block absolute -bottom-3 -right-3 w-32 h-32 border-2 border-[#F45B18]/20 rounded-3xl -z-10 pointer-events-none"></div>
          </div>

          {/* Right Column: Thoughtful Essay Spread */}
          <div className="lg:col-span-6 max-w-xl">
            
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1769F5] mb-3">
              <BookOpen className="w-3.5 h-3.5 text-[#F45B18]" />
              <span>Ghumio Journal • Travel, at Your Own Pace</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#101D45] tracking-tight leading-[1.15] mb-6">
              Not every journey <br />
              <span className="text-[#F45B18]">needs a destination.</span>
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#57647E] leading-relaxed">
              <p>
                In the rush to tick landmarks off a bucket list, it is easy to forget why we set foot on the trail in the first place. Nepal teaches a different geometry of time.
              </p>
              <p>
                Here, travel is measured in the slow warmth of woodsmoke rising from a stone kitchen, the crunch of pine needles on an uncrowded trail, and the unexpected hospitality of an elder pouring hot butter tea before a steep pass.
              </p>
              <p className="border-l-4 border-[#F45B18] pl-4 italic text-[#101D45] font-medium bg-[#F7F8FA] py-2 rounded-r-xl">
                When you allow yourself to slow down, Nepal reveals its quietest, most transformative sanctuaries.
              </p>
            </div>

            {/* Author info & Exploration CTA */}
            <div className="mt-8 pt-6 border-t border-[#E8EAF0] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="text-xs font-bold text-[#101D45]">
                  Tenzin Norbu & Ghumio Journal Team
                </div>
                <div className="text-[11px] text-[#8F9BB3]">
                  Annapurna Conservation Area • Field Notes
                </div>
              </div>

              <button
                onClick={onExploreJourneys}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#101D45] hover:bg-[#1A2A5E] text-white font-bold text-xs tracking-wide shadow-sm transition-all"
              >
                <span>Explore Journeys</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#08C5C9]" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

