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
  const getIcon = (name: string, color: string) => {
    switch (name) {
      case 'Compass':
        return <Compass className="w-5 h-5" style={{ color }} />;
      case 'Coffee':
        return <Coffee className="w-5 h-5" style={{ color }} />;
      case 'Mountain':
        return <Mountain className="w-5 h-5" style={{ color }} />;
      case 'Sunset':
        return <Sunset className="w-5 h-5" style={{ color }} />;
      case 'Footprints':
        return <Footprints className="w-5 h-5" style={{ color }} />;
      case 'Trees':
      default:
        return <Trees className="w-5 h-5" style={{ color }} />;
    }
  };

  const moodColors: Record<string, { accent: string; bg: string }> = {
    wild: { accent: '#08C5C9', bg: '#E6FAFB' },
    'slow-living': { accent: '#FFB91F', bg: '#FFF9EB' },
    'mountain-solitude': { accent: '#1769F5', bg: '#EEF4FE' },
    'weekend-escapes': { accent: '#F45B18', bg: '#FFF2EB' },
    'cultural-immersion': { accent: '#101D45', bg: '#F1F4F9' },
    'hidden-trails': { accent: '#15803D', bg: '#E8F8EE' },
  };

  return (
    <section className="py-16 sm:py-24 bg-[#FFFCF7] border-b border-[#E8EAF0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1769F5] mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#F45B18]" />
            Travel by Mood
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#101D45] tracking-tight">
            Find Your Kind of Escape
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#57647E] leading-relaxed">
            Choose a rhythm that matches your travel state of mind—from wildlife safaris to high mountain quietude.
          </p>
        </div>

        {/* 6 Mood Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ESCAPES_DATA.map((escape) => {
            const config = moodColors[escape.id] || { accent: '#F45B18', bg: '#FFF2EB' };
            return (
              <div
                key={escape.id}
                onClick={() => onSelectEscape(escape.category, escape.query)}
                className="group relative bg-white hover:bg-white p-7 rounded-3xl border border-[#E8EAF0] hover:border-[#1769F5]/40 shadow-xs hover:shadow-card card-hover-lift transition-all duration-200 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  {/* Header with Icon & Subtitle */}
                  <div className="flex items-center justify-between mb-4">
                    <div 
                      className="w-12 h-12 rounded-2xl flex items-center justify-center transition-colors"
                      style={{ backgroundColor: config.bg }}
                    >
                      {getIcon(escape.iconName, config.accent)}
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#8F9BB3]">
                      {escape.subtitle}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#101D45] group-hover:text-[#1769F5] transition-colors mb-2">
                    {escape.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#57647E] leading-relaxed mb-6 font-normal">
                    {escape.description}
                  </p>
                </div>

                {/* Destinations & Action Footer */}
                <div className="pt-4 border-t border-[#E8EAF0]">
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {escape.destinations.map((dest) => (
                        <span
                          key={dest}
                          className="px-2.5 py-1 rounded-full bg-[#F7F8FA] text-[#101D45] text-[11px] font-semibold border border-[#E8EAF0]"
                        >
                          {dest}
                        </span>
                      ))}
                    </div>
                    <div className="w-8 h-8 rounded-full bg-[#F7F8FA] group-hover:bg-[#101D45] group-hover:text-white flex items-center justify-center transition-all text-[#101D45] shrink-0">
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

