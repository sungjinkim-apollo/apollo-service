import React from 'react';
import { GameTemplate } from '../types';

interface TemplateCardProps {
  template: GameTemplate;
}

const TemplateCard: React.FC<TemplateCardProps> = ({ template }) => {
  return (
    <div className={`genre-card group flex flex-col rounded-xl bg-surface-dark border border-border-dark overflow-hidden ${template.hoverBorderClass} ${template.shadowClass} transition-all cursor-pointer`}>
      <div className={`h-32 relative overflow-hidden bg-gradient-to-br ${template.bgGradient} flex items-center justify-center`}>
        <div className={`absolute inset-0 ${template.patternClass} opacity-30 mix-blend-overlay`}></div>
        <div className="genre-visual relative z-10">
          <span className="material-symbols-outlined text-5xl text-white/90 drop-shadow-2xl">{template.icon}</span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-surface-dark via-transparent to-transparent"></div>
      </div>
      <div className="p-4 bg-surface-dark">
        <h4 className={`text-sm font-bold text-white ${template.hoverColorClass} transition-colors`}>{template.title}</h4>
        <p className="text-[11px] text-text-secondary font-medium mt-1">{template.category}</p>
      </div>
    </div>
  );
};

export default TemplateCard;