import React, { useState, useRef, useEffect } from 'react';
import { Team, Project } from '../types';

interface TeamSwitcherProps {
  currentTeam: Team;
  allTeams: Team[];
  onTeamSelect: (team: Team) => void;
}

const TeamSwitcher: React.FC<TeamSwitcherProps> = ({ currentTeam, allTeams, onTeamSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  // Logic: Hovering a team in the list temporarily changes the previewed projects
  // We use `hoveredTeamId` to track which team is hovered.
  // If a team is hovered, we show its projects. If not, we show currentTeam projects.
  const [hoveredTeamId, setHoveredTeamId] = useState<string | null>(null);

  // Exclusive hover logic for projects:
  // When a project is hovered, it should be highlighted.
  // If a project is hovered, the "active" project should LOSE its highlight (be dimmed),
  // effectively behaving like a regular list item unless it is the one being hovered.
  const [hoveredProjectId, setHoveredProjectId] = useState<string | null>(null);

  const displayedProjects = hoveredTeamId 
    ? allTeams.find(t => t.id === hoveredTeamId)?.projects || []
    : currentTeam.projects;

  const toggleDropdown = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setHoveredTeamId(null);
        setHoveredProjectId(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="flex items-center gap-2 group px-2 py-1 rounded hover:bg-white/5 transition-all border border-transparent hover:border-white/10"
      >
        <span className="text-xs font-semibold tracking-tight text-white">{currentTeam.name}</span>
        <span className="px-1.5 py-0.5 rounded border border-gray-700 text-[10px] font-medium text-gray-400 leading-none bg-black/20">
          Hobby
        </span>
        <span className={`material-symbols-outlined text-gray-500 text-[16px] group-hover:text-white transition-colors duration-200 ${isOpen ? 'rotate-180' : ''}`}>
          expand_more
        </span>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-[480px] bg-[#161b22] border border-white/10 shadow-2xl rounded-xl z-50 overflow-hidden flex flex-col animate-in fade-in slide-in-from-top-2 duration-100">
          
          {/* User Profile Section */}
          <div className="p-3 border-b border-white/10 bg-[#161b22] flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-xs font-bold text-white shadow-inner ring-2 ring-[#161b22]">
              SK
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Sungjin Kim</p>
              <p className="text-xs text-text-secondary">@sungjinkim</p>
            </div>
          </div>

          <div 
            className="flex h-[320px]" 
            onMouseLeave={() => {
              // Reset preview only when leaving the entire columns area
              setHoveredTeamId(null);
              setHoveredProjectId(null);
            }}
          >
            {/* Left Column: Teams List */}
            <div className="w-[160px] flex flex-col border-r border-white/10 bg-black/20">
              <div className="sticky top-0 bg-[#0d1117] z-10 p-2 border-b border-white/10">
                <div className="relative">
                  <span className="absolute left-2 top-1.5 material-symbols-outlined text-[14px] text-text-secondary">
                    search
                  </span>
                  <input
                    className="w-full bg-black/30 border border-white/10 rounded-md py-1 pl-7 pr-2 text-xs text-white placeholder-text-secondary/50 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 outline-none"
                    placeholder="Find team..."
                    type="text"
                  />
                </div>
              </div>
              <div className="flex-1 overflow-y-auto mega-menu-scroll p-2 space-y-0.5">
                <div className="text-[10px] font-bold text-text-secondary uppercase tracking-wider mb-2 px-2">
                  Teams
                </div>
                
                {allTeams.map(team => {
                  const isHovered = hoveredTeamId === team.id;
                  const isAnyTeamHovered = hoveredTeamId !== null;
                  
                  // Exclusive Highlight Logic:
                  // If any team is hovered, only highlight the hovered one.
                  // If none are hovered, highlight the active one.
                  const showActiveStyle = isAnyTeamHovered ? isHovered : (currentTeam.id === team.id);
                  const isActuallyActive = currentTeam.id === team.id;
                  
                  return (
                    <button
                      key={team.id}
                      onMouseEnter={() => setHoveredTeamId(team.id)}
                      onClick={() => {
                        onTeamSelect(team);
                        setIsOpen(false);
                        setHoveredTeamId(null);
                      }}
                      className={`w-full flex items-center gap-2 p-2 rounded-md border text-left group transition-all 
                        ${showActiveStyle 
                          ? 'bg-primary/10 border-primary/20' 
                          : 'border-transparent hover:bg-primary/10 hover:border-primary/20'
                        }
                      `}
                    >
                      <div className={`h-6 w-6 rounded-md flex items-center justify-center shrink-0 border ${showActiveStyle ? 'bg-primary/20 text-primary border-transparent' : 'bg-gray-800 text-gray-400 border-white/5'}`}>
                        {team.id === 'apollo' ? (
                           <span className="material-symbols-outlined text-[14px]">token</span>
                        ) : (
                           <span className="text-[10px] font-bold">{team.initial}</span>
                        )}
                      </div>
                      <span className={`flex-1 text-xs font-medium truncate transition-colors ${showActiveStyle ? 'text-white' : 'text-gray-200 group-hover:text-white'}`}>
                        {team.name}
                      </span>
                      {isActuallyActive && <span className={`material-symbols-outlined text-primary text-[16px] ${showActiveStyle ? '' : 'opacity-50'}`}>check</span>}
                    </button>
                  );
                })}

                <button className="w-full flex items-center gap-2 p-2 rounded-md hover:bg-primary/10 border border-transparent hover:border-primary/20 text-left group transition-all text-gray-200 hover:text-white mt-2">
                  <span className="material-symbols-outlined text-[16px]">add_circle</span>
                  <span className="text-xs font-medium">New Team</span>
                </button>
              </div>
            </div>

            {/* Right Column: Projects List (Dynamic) */}
            <div className="flex-1 flex flex-col bg-[#161b22]">
              <div className="sticky top-0 bg-[#161b22] z-10 p-2 border-b border-white/5">
                <div className="relative">
                  <span className="absolute left-2 top-1.5 material-symbols-outlined text-[14px] text-text-secondary">
                    search
                  </span>
                  <input
                    className="w-full bg-black/30 border border-white/10 rounded-md py-1 pl-7 pr-2 text-xs text-white placeholder-text-secondary/50 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 outline-none"
                    placeholder="Find project..."
                    type="text"
                  />
                </div>
              </div>
              <div className="flex-1 overflow-y-auto mega-menu-scroll p-2">
                <div className="mb-2 px-2 text-[10px] font-bold text-text-secondary uppercase tracking-wider">
                  Projects
                </div>
                <div className="space-y-0.5" onMouseLeave={() => setHoveredProjectId(null)}>
                  {displayedProjects.map((project) => {
                     const isHovered = hoveredProjectId === project.id;
                     const isAnyProjectHovered = hoveredProjectId !== null;
                     
                     // Exclusive Highlight Logic for Projects
                     const showActiveStyle = isAnyProjectHovered ? isHovered : project.isActive;
                     
                     return (
                      <button
                        key={project.id}
                        onMouseEnter={() => setHoveredProjectId(project.id)}
                        className={`w-full flex items-center justify-between p-2 rounded-md border text-left group transition-all
                          ${showActiveStyle 
                             ? 'bg-primary/10 border-primary/20' 
                             : 'border-transparent hover:bg-primary/10 hover:border-primary/20'
                          }
                        `}
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <div className={`h-6 w-6 rounded-md border flex items-center justify-center shrink-0 ${project.iconBgClass} ${project.iconColorClass}`}>
                            <span className="material-symbols-outlined text-[18px]">{project.icon}</span>
                          </div>
                          <span className={`text-xs font-medium truncate ${showActiveStyle ? 'text-white font-bold' : 'text-gray-200 group-hover:text-white'}`}>
                            {project.name}
                          </span>
                        </div>
                        {project.isActive ? (
                          <span className="material-symbols-outlined text-primary text-[16px]">check</span>
                        ) : (
                          project.status && (
                            <span className={`text-[10px] transition-opacity opacity-0 group-hover:opacity-100 ${project.statusColorClass || 'text-text-secondary'}`}>
                              {project.status}
                            </span>
                          )
                        )}
                      </button>
                    );
                  })}
                  
                  <button className="w-full flex items-center gap-2 p-2 rounded-md hover:bg-primary/10 border border-transparent hover:border-primary/20 text-left group transition-all text-gray-200 hover:text-white mt-2">
                    <span className="material-symbols-outlined text-[16px]">add_circle</span>
                    <span className="text-xs font-medium">New Project</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="p-1 border-t border-white/10 bg-[#161b22]">
            <button className="w-full flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 text-gray-200 hover:text-white transition-colors text-left">
              <span className="material-symbols-outlined text-[16px]">settings</span>
              <span className="text-xs font-medium">Settings</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamSwitcher;