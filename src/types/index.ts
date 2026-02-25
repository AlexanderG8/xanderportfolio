import { SVGProps } from 'react';

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export interface ProjectImage {
  img: string;
  title: string;
}

export interface ProjectData {
  title: string;
  technologies: string;
  description: string;
  features: string[];
  images: ProjectImage[];
  githubUrl?: string;
}
