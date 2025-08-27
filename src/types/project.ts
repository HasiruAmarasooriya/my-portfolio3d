export type Skill = {
  name: string;
  icon: string; // path to icon image
};

export type Project = {
  id: number;
  name: string;
  description: string;
  images: string[];
  github?: string;
  vercel?: string;
  video?: string;
  skills?: Skill[];
};
