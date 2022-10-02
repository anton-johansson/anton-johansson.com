import {StaticImageData} from 'next/image';
import {FC, SVGProps} from 'react';

import {IconProps} from '../components/Icon/Icon';

export interface HomepageMeta {
  title: string;
  description: string;
  ogImageUrl?: string;
  twitterCardType?: 'summary' | 'summary_large';
  twitterTitle?: string;
  twitterSite?: string;
  twitterCreator?: string;
  twitterDomain?: string;
  twitterUrl?: string;
  twitterDescription?: string;
  twitterImageUrl?: string;
}

/**
 * Home section
 */
export interface Home {
  imageSrc: string;
  name: string;
  description: JSX.Element;
}

/**
 * About section
 */
export interface About {
  profileImageSrc?: string;
  description: string;
  aboutItems: AboutItem[];
}

export interface AboutItem {
  label: string;
  text: string | (() => string);
  Icon?: (props: SVGProps<SVGSVGElement>) => JSX.Element;
}

/**
 * Stat section
 */
export interface Stat {
  title: string;
  value: number;
  Icon?: (props: SVGProps<SVGSVGElement>) => JSX.Element;
}

/**
 * Skills section
 */

export interface Skill {
  readonly title: string;
  readonly description: string[];
}

/**
 * Portfolio section
 */
export interface PortfolioItem {
  title: string;
  description: string;
  url: string;
  image: string | StaticImageData;
}

/**
 * Resume section
 */
export interface TimelineItem {
  date: string;
  location: string;
  title: string;
  content: string[];
}

/**
 * Testimonial section
 */
export interface TestimonialSection {
  backgroundImage: string | StaticImageData;
  testimonials: Testimonial[];
}

export interface Testimonial {
  name: string;
  texts: string[];
}

/**
 * Contact section
 */
export interface ContactSection {
  headerText?: string;
  description: string;
  descriptionMobile: string;
  items: ContactItem[];
}

export const ContactType = {
  Email: 'Email',
  Location: 'Location',
  LinkedIn: 'LinkedIn',
  GitHub: 'GitHub',
  Instagram: 'Instagram',
} as const;

export type ContactType = typeof ContactType[keyof typeof ContactType];

export interface ContactItem {
  type: ContactType;
  text: string;
  href?: string;
}

export interface ContactValue {
  Icon: FC<IconProps> | ((props: SVGProps<SVGSVGElement>) => JSX.Element);
  srLabel: string;
}

/**
 * Social items
 */
export interface Social {
  label: string;
  Icon: FC<IconProps>;
  href: string;
}
