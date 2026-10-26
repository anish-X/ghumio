import React from 'react';
import { 
  Compass, 
  Coffee, 
  Mountain, 
  Sunset, 
  Footprints, 
  Trees, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { ESCAPES_DATA } from '../../data/mockData';
import { ServiceCategory } from '../../types';

interface EscapeMoodSectionProps {
  onSelectEscape: (category: ServiceCategory, query: string) => void;
}

export const EscapeMoodSection: React.FC<EscapeMoodSectionProps> = ({ onSelectEscape }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Compass':
        return <Compass className="w-5 h-5 text-[#C77B5A]" />;
      case 'Coffee':
        return <Coffee className="w-5 h-5 text-[#C77B5A]" />;
      case 'Mountain':
        return <Mountain className="w-5 h-5 text-[#C77B5A]" />;
      case 'Sunset':
        return <Sunset className="w-5 h-5 text-[#C77B5A]" />;
      case 'Footprints':
        return <Footprints className="w-5 h-5 text-[#C77B5A]" />;
      case 'Trees':
      default:
        return <Trees className="w-5 h-5 text-[#C77B5A]" />;
    }
  };

  return (
    <section className="py-20 sm:py-28 bg-[#F7F5EF] text-[#252923] border-b border-[#E8DFD0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 border-b border-[#E8DFD0] pb-8">
          <div className="inline-flex items-center gap-2 text-xs font-light tracking-[0.25em] uppercase text-[#7D8876] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C77B5A]" />
            <span>Curated Moods • Intentional Travel</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-light text-[#173D32] tracking-tight leading-[1.15]">
            Find your kind of <br className="hidden sm:inline" />
            <span className="italic font-normal text-[#C77B5A]">escape.</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base font-light text-[#7D8876] leading-relaxed max-w-xl">
            Not everyone travels for the same reason. Choose a rhythm that resonates with your spirit—from deep mountain quietude to ancient living traditions.
          </p>
        </div>

        {/* 6 Minimalist Mood Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ESCAPES_DATA.map((escape) => (
            <div
              key={escape.id}
              onClick={() => onSelectEscape(escape.category, escape.query)}
              className="group relative bg-[#F7F5EF] hover:bg-white p-7 rounded-3xl border border-[#E8DFD0] hover:border-[#173D32]/30 transition-all duration-300 cursor-pointer shadow-2xs hover:shadow-md flex flex-col justify-between"
            >
              <div>
                {/* Header with Icon & Subtitle */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-2xl bg-[#E8DFD0]/40 group-hover:bg-[#E8DFD0] flex items-center justify-center transition-colors">
                    {getIcon(escape.iconName)}
                  </div>
                  <span className="text-[10px] font-mono tracking-wider uppercase text-[#7D8876]">
                    {escape.subtitle}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-serif font-light text-[#173D32] group-hover:text-[#C77B5A] transition-colors mb-2">
                  {escape.title}
                </h3>

                {/* Evocative Description */}
                <p className="text-xs sm:text-sm font-light text-[#252923]/75 leading-relaxed mb-6">
                  {escape.description}
                </p>
              </div>

              {/* Destinations & Action Footer */}
              <div className="pt-4 border-t border-[#E8DFD0]/60">
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {escape.destinations.map((dest) => (
                      <span
                        key={dest}
                        className="px-2.5 py-0.5 rounded-full bg-[#E8DFD0]/40 text-[#173D32] text-[10px] font-medium"
                      >
                        {dest}
                      </span>
                    ))}
                  </div>
                  <div className="w-8 h-8 rounded-full bg-transparent group-hover:bg-[#173D32] group-hover:text-[#F7F5EF] flex items-center justify-center transition-all text-[#173D32] shrink-0">
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
