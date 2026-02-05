import React from 'react';
import { GameTemplate } from '../types';

interface GameTemplateCardProps {
  template: GameTemplate;
}

const GameTemplateCard: React.FC<GameTemplateCardProps> = ({ template }) => {
  return (
    <div className={`genre-card group flex flex-col rounded-xl bg-surface-dark border border-border-dark overflow-hidden ${template.hoverBorder} ${template.hoverShadow} transition-all cursor-pointer`}>
      <div className={`h-32 relative overflow-hidden bg-gradient-to-br ${template.gradientFrom} ${template.gradientVia} ${template.gradientTo} flex items-center justify-center`}>
        <div 
            className={`absolute inset-0 ${template.patternOpacity} ${template.patternBlend}`}
            style={{ 
                backgroundImage: template.pattern,
                backgroundSize: template.visualSize || 'auto'
            }}
        ></div>
        <div className="relative z-10 transition-transform duration-500 cubic-bezier(0.4, 0, 0.2, 1) group-hover:scale-110 group-hover:rotate-2">
          <span className="material-symbols-outlined text-5xl text-white/90 drop-shadow-2xl">{template.icon}</span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-surface-dark via-transparent to-transparent"></div>
      </div>
      <div className="p-4 bg-surface-dark">
        <h4 className={`text-sm font-bold text-white ${template.hoverText} transition-colors`}>{template.title}</h4>
        <p className="text-[11px] text-text-secondary font-medium mt-1">{template.tags}</p>
      </div>
    </div>
  );
};

export default GameTemplateCard;