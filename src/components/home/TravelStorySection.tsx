import React from 'react';
import { ArrowRight, BookOpen, Quote, Mountain } from 'lucide-react';
import { ServiceCategory } from '../../types';

interface TravelStorySectionProps {
  onExploreJourneys: () => void;
}

export const TravelStorySection: React.FC<TravelStorySectionProps> = ({ onExploreJourneys }) => {
  return (
    <section className="py-20 sm:py-28 bg-[#F7F5EF] text-[#252923] border-b border-[#E8DFD0] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Atmospheric Editorial Imagery */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-[#E8DFD0] shadow-xl bg-[#173D32] aspect-[4/5] sm:aspect-[3/4]">
              <img
                src="/assets/places/story-himalaya.svg"
                alt="High Himalayan Trail at Dusk"
                className="w-full h-full object-cover filter brightness-[0.93] contrast-[1.05]"
              />
              
              {/* Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#173D32]/90 via-transparent to-black/20"></div>

              {/* Top Meta Tag */}
              <div className="absolute top-6 left-6 z-10 flex items-center gap-2 text-xs font-mono text-[#F7F5EF]/80 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/20">
                <Mountain className="w-3.5 h-3.5 text-[#C77B5A]" />
                <span>Thorong High Ridge • 4,800m</span>
              </div>

              {/* Bottom Inset Quote */}
              <div className="absolute bottom-6 inset-x-6 z-10 text-[#F7F5EF]">
                <Quote className="w-8 h-8 text-[#A8B8A0]/40 mb-2" />
                <p className="font-serif italic text-lg sm:text-xl text-[#E8DFD0] leading-snug">
                  "The mountains do not hurry, and yet every valley, river, and quiet pass finds its way."
                </p>
                <div className="mt-3 text-[11px] font-mono tracking-widest uppercase text-[#A8B8A0]">
                  Ghumio Wilderness Archive • Autumn Observation
                </div>
              </div>
            </div>

            {/* Decorative Offset Border element */}
            <div className="hidden sm:block absolute -bottom-4 -right-4 w-40 h-40 border border-[#C77B5A]/30 rounded-3xl -z-10 pointer-events-none"></div>
          </div>

          {/* Right Column: Thoughtful Essay Spread */}
          <div className="lg:col-span-6 max-w-xl">
            
            <div className="inline-flex items-center gap-2 text-xs font-light tracking-[0.25em] uppercase text-[#7D8876] mb-4">
              <BookOpen className="w-3.5 h-3.5 text-[#C77B5A]" />
              <span>Ghumio Essay • Travel, at your own pace</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-serif font-light text-[#173D32] tracking-tight leading-[1.15] mb-6">
              Not every journey <br />
              <span className="italic font-normal text-[#C77B5A]">needs a destination.</span>
            </h2>

            <div className="space-y-4 text-sm sm:text-base font-light text-[#252923]/80 leading-relaxed">
              <p>
                In the modern rush to tick landmarks off a bucket list, we often forget why we walked out the front door in the first place. Nepal teaches a different geometry of time.
              </p>
              <p>
                Here, a journey is measured not in kilometers covered, but in the slow warmth of woodsmoke rising from a stone kitchen, the rhythm of your boots crunching pine needles on an empty hillside, and the unexpected kindness of an elder offering ginger tea before a steep pass.
              </p>
              <p className="border-l-2 border-[#C77B5A] pl-4 italic text-[#173D32] font-serif">
                When you let go of the compulsion to arrive everywhere at once, Nepal reveals its quietest, most transformative sanctuaries.
              </p>
            </div>

            {/* Author info & Exploration CTA */}
            <div className="mt-8 pt-6 border-t border-[#E8DFD0] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="text-xs font-medium text-[#173D32]">
                  Tenzin Norbu & Ghumio Journal Team
                </div>
                <div className="text-[11px] text-[#7D8876]">
                  Annapurna Conservation Area • Field Notes
                </div>
              </div>

              <button
                onClick={onExploreJourneys}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#173D32] text-[#F7F5EF] hover:bg-[#C77B5A] transition-all text-xs font-medium tracking-wide shadow-sm"
              >
                <span>Explore mindful journeys</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
