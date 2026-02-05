export interface Project {
  id: string;
  name: string;
  icon: string;
  iconColorClass: string;
  iconBgClass: string;
  status?: 'Dev' | 'Staging' | 'Error';
  statusColorClass?: string;
  isActive?: boolean;
}

export interface Team {
  id: string;
  name: string;
  initial: string;
  projects: Project[];
}

export interface GameTemplate {
  id: string;
  title: string;
  category: string;
  description: string;
  icon: string;
  bgGradient: string;
  patternClass: string;
  hoverColorClass: string;
  hoverBorderClass: string;
  shadowClass: string;
}
