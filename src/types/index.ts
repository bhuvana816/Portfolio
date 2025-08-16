export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  github?: string;
  live?: string;
  tags: string[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  duration: string;
  cgpa?: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  thumbnail: string;
  link?: string;
}