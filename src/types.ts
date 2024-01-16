// types.ts
export interface UserProfile {
  username: string;
  email: string;
  // Add other relevant profile fields
}

export interface Avatar {
  imageUrl: string;
  // Add other avatar properties if needed
}

// types.ts
export interface Module {
  id: number;
  title: string;
  content: string;
  quiz: QuizQuestion[];
}

export interface QuizQuestion {
  question: string;
  options: string[];
  answer: number; // Index of the correct answer in the options array
}


// types.ts
export interface LeaderboardEntry {
  id: number;
  username: string;
  points: number;
}

export interface LeaderboardProps {
  entries: LeaderboardEntry[];
}
