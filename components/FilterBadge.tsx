import React from 'react';

interface FilterBadgeProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const FilterBadge: React.FC<FilterBadgeProps> = ({ label, isActive, onClick }) => {
  if (isActive) {
    return (
      <button 
        onClick={onClick}
        className="px-4 py-1.5 rounded-full text-[11px] font-bold bg-primary text-background-dark shadow-[0_0_20px_rgba(58,191,248,0.3)] transition-all"
      >
        {label}
      </button>
    );
  }

  return (
    <button 
      onClick={onClick}
      className="px-4 py-1.5 rounded-full text-[11px] font-bold bg-surface-dark border border-border-dark text-text-secondary hover:text-white hover:border-gray-500 transition-all"
    >
      {label}
    </button>
  );
};

export default FilterBadge;