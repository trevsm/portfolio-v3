export interface Project {
  category: 'current' | 'other';
  date: string;
  title: string;
  subtitle: string;
  description: string;
  langs: string[];
  image: {
    large: string;
    small: string;
  };
  live?: string;
  source?: string;
}

export interface PageProject extends Project {
  path: string;
}
