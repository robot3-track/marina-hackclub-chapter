export interface Officer {
  id: string;
  name: string;
  grade: string;
  role: string;
  department: 'Executive' | 'Software' | 'Hardware' | 'Communications' | 'Fundraising & Socials' | 'Promotion';
  description: string;
  avatarColor: string;
}

export interface ConstitutionArticle {
  id: string;
  title: string;
  sections: {
    number?: string;
    title?: string;
    content: string;
  }[];
}

export interface Workshop {
  id: string;
  title: string;
  category: 'Software' | 'Hardware' | 'Hackathon' | 'Showcase';
  date: string;
  time: string;
  location: string;
  description: string;
  tags: string[];
  difficulty: 'Beginner' | 'Intermediate' | 'All Levels';
}

export interface ClubProject {
  id: string;
  title: string;
  author: string;
  description: string;
  category: string;
  stars: number;
  githubUrl?: string;
  liveUrl?: string;
  tags: string[];
}

export interface MemberSignup {
  fullName: string;
  grade: string;
  phone: string;
  email: string;
  association: string;
  interest: string;
  whyJoin: string;
  excitementLevel: number;
  rememberMe: boolean;
}
