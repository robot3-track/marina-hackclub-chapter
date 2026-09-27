import { Officer, ConstitutionArticle, Workshop, ClubProject } from '../types';

export interface ChapterMember {
  name: string;
  grade: string;
  role: string;
}

export const CHAPTER_MEMBERS: ChapterMember[] = [
  { name: 'Yohan Chang', grade: '10th', role: 'Club President' },
  { name: 'Thien Nguyen', grade: '10th', role: 'Club Vice President' },
  { name: 'Demir Deran', grade: '10th', role: 'Treasurer / Software' },
  { name: 'Youssef Kelada', grade: '10th', role: 'Club Secretary' },
  { name: 'Kai Scholler', grade: '10th', role: 'Treasurer / Communications' },
  { name: 'Noah Kalbhenn', grade: '10th', role: 'Treasurer / Fundraising & Social Media' },
  { name: 'Kai Bulosan', grade: '10th', role: 'Treasurer / Hardware' },
  { name: 'Eli Chem', grade: '10th', role: 'Social Media' },
  { name: 'Zachary Ruiz', grade: '10th', role: 'Club Promoter' },
  { name: 'Susie Hartman', grade: '10th', role: 'Chapter Member' },
  { name: 'David Terriquez', grade: '11th', role: 'Chapter Member' },
  { name: 'Julianna Do', grade: '10th', role: 'Chapter Member' },
  { name: 'Justin Le', grade: '10th', role: 'Chapter Member' },
  { name: 'Long', grade: '9th', role: 'Chapter Member' },
  { name: 'Griffin Walker', grade: '10th', role: 'Chapter Member' },
  { name: 'Bennett Blystone', grade: '10th', role: 'Chapter Member' },
  { name: 'Katelyn Nguyen', grade: '10th', role: 'Chapter Member' }
];

export const TOP_OFFICIALS: Officer[] = [
  {
    id: '1',
    name: 'Yohan Chang',
    grade: '10th Grade',
    role: 'Club President',
    department: 'Executive',
    description: 'Oversees club operations, leads meetings, and serves as the primary contact with school administration and Hack Club HQ.',
    avatarColor: '#ec3750'
  },
  {
    id: '2',
    name: 'Thien Nguyen',
    grade: '10th Grade',
    role: 'Club Vice President',
    department: 'Executive',
    description: 'Assists in planning coding workshops, leads build sessions, and fulfills President duties in their absence.',
    avatarColor: '#ff8c37'
  },
  {
    id: '3',
    name: 'Youssef Kelada',
    grade: '10th Grade',
    role: 'Club Secretary',
    department: 'Communications',
    description: 'Records meeting notes, manages member communications, group chats, and tracks member project submissions.',
    avatarColor: '#338eda'
  },
  {
    id: '4',
    name: 'Demir Deran',
    grade: '10th Grade',
    role: 'Treasurer / Software',
    department: 'Software',
    description: 'Maintains software project repositories, guides chapter coding sessions, and coordinates Hack Club Bank requests.',
    avatarColor: '#33d6a6'
  },
  {
    id: '5',
    name: 'Kai Scholler',
    grade: '10th Grade',
    role: 'Treasurer / Communications',
    department: 'Communications',
    description: 'Oversees announcements, club calendar, and manages communications with Marina High School student body.',
    avatarColor: '#5bc0de'
  },
  {
    id: '6',
    name: 'Noah Kalbhenn',
    grade: '10th Grade',
    role: 'Treasurer / Fundraising & Social Media',
    department: 'Fundraising & Socials',
    description: 'Coordinates chapter fundraising efforts, manages sponsorship outreach, and leads social media initiatives.',
    avatarColor: '#f1c40f'
  },
  {
    id: '7',
    name: 'Kai Bulosan',
    grade: '10th Grade',
    role: 'Treasurer / Hardware',
    department: 'Hardware',
    description: 'Manages physical hardware kits, microcontrollers, Raspberry Pis, and breadboards granted by Hack Club HQ.',
    avatarColor: '#a633d6'
  },
  {
    id: '8',
    name: 'Eli Chem',
    grade: '10th Grade',
    role: 'Social Media',
    department: 'Fundraising & Socials',
    description: 'Documents meetings, captures project builds, and runs the official chapter Instagram page @hackclub.marina.',
    avatarColor: '#ec3750'
  },
  {
    id: '9',
    name: 'Zachary Ruiz',
    grade: '10th Grade',
    role: 'Club Promoter',
    department: 'Promotion',
    description: 'Designs campus flyers, distributes chapter stickers, and coordinates recruitment drives during Club Rush.',
    avatarColor: '#ff8c37'
  }
];

export const CONSTITUTION_ARTICLES: ConstitutionArticle[] = [
  {
    id: 'preamble',
    title: 'Preamble',
    sections: [
      {
        content: 'We, the students of Marina High School, in order to foster passion for technology, hands-on computer science, maker culture, and collaborative engineering, do hereby establish this constitution for the Hack Club Marina Chapter.'
      }
    ]
  },
  {
    id: 'art1',
    title: 'Article I - Name',
    sections: [
      {
        content: 'The name of this organization shall be Hack Club Marina Chapter.'
      }
    ]
  },
  {
    id: 'art2',
    title: 'Article II - Purpose',
    sections: [
      {
        content: 'The purpose of this organization shall be to create an inclusive space where students of all skill levels learn to code, collaborate on hands-on software and hardware projects, and access global technical resources and hackathons under the support of the main Hack Club organization.'
      }
    ]
  },
  {
    id: 'art3',
    title: 'Article III - Membership',
    sections: [
      {
        number: 'Section I',
        content: 'The membership of Hack Club Marina Chapter shall consist of any student enrolled at Marina High School.'
      },
      {
        number: 'Section II',
        content: 'Active members shall attend meetings regularly and participate in club build sessions and projects.'
      }
    ]
  },
  {
    id: 'art4',
    title: 'Article IV - Officers',
    sections: [
      {
        content: 'The officers of Hack Club Marina Chapter shall consist of President, Vice President, Secretary, and Treasurer/Technical Lead.'
      }
    ]
  },
  {
    id: 'art5',
    title: 'Article V - Duties of Officers',
    sections: [
      {
        number: 'Section I',
        title: 'President',
        content: 'The President shall oversee club operations, lead meetings, and serve as the primary contact with school administration and the national Hack Club organization.'
      },
      {
        number: 'Section II',
        title: 'Vice President',
        content: 'The Vice President shall assist in planning workshops, attend meetings regularly, and fulfill the President’s duties in their absence.'
      },
      {
        number: 'Section III',
        title: 'Secretary',
        content: 'The Secretary shall record meeting notes, manage member communications, and track project submissions.'
      },
      {
        number: 'Section IV',
        title: 'Treasurer / Technical Lead',
        content: 'The Treasurer/Technical Lead shall manage club accounts, oversee fundraising or hardware requests, and support workshop activities. There shall be multiple roles in specific departments up to 4 roles to manage hardware, software, communications, and fundraising.'
      }
    ]
  },
  {
    id: 'art6',
    title: 'Article VI - Elections',
    sections: [
      {
        number: 'Section I',
        content: 'Eligibility for office requires a minimum 2.0 GPA, good standing with school administration, and active participation in club activities.'
      },
      {
        number: 'Section II',
        content: 'Elections will not be conducted; it is on a volunteer basis.'
      }
    ]
  },
  {
    id: 'art7',
    title: 'Article VII - Finances, Fees, Dues',
    sections: [
      {
        number: 'Section I',
        content: 'Membership dues will NOT be collected.'
      },
      {
        number: 'Section II',
        content: 'If Hack Club Marina Chapter becomes inactive or disbands, all assets of the club will revert to the Associated Student Body general account for the Interclub Council.'
      },
      {
        number: 'Section III',
        content: 'Funds to operate Hack Club Marina Chapter shall be raised through approved fundraising activities, donations, ASB allocations, and/or Hack Club HQ support.'
      }
    ]
  },
  {
    id: 'art8',
    title: 'Article VIII - Activities and Projects',
    sections: [
      {
        number: 'Section I',
        content: 'Hack Club Marina Chapter shall host coding workshops, collaborative build sessions, and project showcases throughout the school year.'
      }
    ]
  },
  {
    id: 'art9',
    title: 'Article IX - Amendments',
    sections: [
      {
        content: 'This constitution may be amended by a two-thirds (2/3) majority vote of eligible active members of Hack Club Marina Chapter.'
      }
    ]
  },
  {
    id: 'art10',
    title: 'Article X - Meetings',
    sections: [
      {
        number: 'Section I',
        content: 'Hack Club Marina Chapter will hold regular club meetings on a flexible schedule as announced by officers.'
      },
      {
        number: 'Section II',
        content: 'Meetings will be held during lunch or after school in Room 252 and Lunch on Mondays unless revised.'
      }
    ]
  }
];

export const WORKSHOPS: Workshop[] = [
  {
    id: 'ws-1',
    title: 'Web Dev 101: Build Your First Personal Site',
    category: 'Software',
    date: 'Next Tuesday',
    time: 'Lunch & After School (3:30 PM)',
    location: "Room 252 and Lunch on Mondays unless revised",
    description: 'Learn HTML, CSS, and Tailwind CSS basics. Everyone walks out with a live website hosted on the web!',
    tags: ['HTML/CSS', 'Tailwind', 'Beginner Friendly'],
    difficulty: 'Beginner'
  },
  {
    id: 'ws-2',
    title: 'Hardware Hacking: Microcontrollers & Sensors',
    category: 'Hardware',
    date: 'Thursday',
    time: 'After School (3:30 PM)',
    location: "Room 252 and Lunch on Mondays unless revised",
    description: 'Hands-on hardware session using microcontrollers granted by Hack Club HQ. Program LEDs, buzzers, and environmental sensors.',
    tags: ['Arduino', 'C++', 'Circuitry', 'HQ Kits'],
    difficulty: 'All Levels'
  },
  {
    id: 'ws-3',
    title: 'Full-Stack Web Dev: APIs & Real-Time Apps',
    category: 'Software',
    date: 'Next Week',
    time: 'Lunch Session',
    location: "Room 252 and Lunch on Mondays unless revised",
    description: 'Build full-stack web applications, connect real REST APIs, and deploy interactive tools for student Hack Clubbers.',
    tags: ['JavaScript', 'APIs', 'Full-Stack'],
    difficulty: 'Intermediate'
  },
  {
    id: 'ws-4',
    title: 'Hackathon Prep & Project Sprint',
    category: 'Hackathon',
    date: 'Upcoming Month',
    time: 'Flexible Build Session',
    location: "Room 252 and Lunch on Mondays unless revised & Discord",
    description: 'Team up with fellow Marina HS students to submit projects to global Hack Club hackathons and win grants and swag!',
    tags: ['Hackathons', 'Team Building', 'Swag'],
    difficulty: 'All Levels'
  }
];

export const FEATURED_PROJECTS: ClubProject[] = [
  {
    id: 'p1',
    title: 'Viking Campus Map & Bell Schedule',
    author: 'Demir Deran (Software Lead)',
    description: 'An interactive web app displaying Marina High School campus navigation, live period countdowns, and club meeting schedules.',
    category: 'Web App',
    stars: 18,
    tags: ['React', 'TypeScript', 'Tailwind']
  },
  {
    id: 'p2',
    title: 'IoT Classroom Temperature Monitor',
    author: 'Kai Bulosan (Hardware Lead)',
    description: 'ESP32 microcontroller with OLED display and temperature sensor sending real-time climate data to a web dashboard.',
    category: 'Hardware',
    stars: 14,
    tags: ['C++', 'Arduino', 'IoT']
  },
  {
    id: 'p3',
    title: 'Marina High Flashcard Study Deck',
    author: 'Yohan Chang & Thien Nguyen',
    description: 'Interactive study flashcard generator and quiz practice tool built by student Hack Clubbers.',
    category: 'Web App',
    stars: 22,
    tags: ['JavaScript', 'TypeScript', 'Web']
  }
];
