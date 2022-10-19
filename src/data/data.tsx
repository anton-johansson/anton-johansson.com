import {
  AcademicCapIcon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  OfficeBuildingIcon,
  SparklesIcon,
} from '@heroicons/react/outline';

import GitHubIcon from '../components/Icon/GitHubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import SpotifyIcon from '../components/Icon/SpotifyIcon';
import SteamIcon from '../components/Icon/SteamIcon';
import homeBackground from '../images/header.webp';
import profile from '../images/profile.jpg';
import recommendationsBackground from '../images/recommendations.webp';
import {
  About,
  ContactSection,
  ContactType,
  Home,
  HomepageMeta,
  PortfolioItem,
  RecommendationSection,
  Skill,
  Social,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Anton Johansson',
  description: 'Anton Johanssons personal web page.',
};

/**
 * Section definition
 */
export const SectionId = {
  Home: 'home',
  About: 'about',
  Resume: 'resume',
  Portfolio: 'portfolio', // Currently not used
  Recommendations: 'recommendations',
  Contact: 'contact',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Home section
 */
export const homeData: Home = {
  imageSrc: homeBackground,
  name: 'I am Anton Johansson',
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a <strong className="text-stone-100">software developer</strong> and a{' '}
        <strong className="text-stone-100">DevOps engineer</strong> based in Sweden, currently working at{' '}
        <strong className="text-stone-100">Viskan System AB</strong> helping build a modern e-commerce platform and
        ecosystem.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I spend most of my free time <strong className="text-stone-100">gaming</strong>,{' '}
        <strong className="text-stone-100">coding</strong> pet projects and{' '}
        <strong className="text-stone-100">socialising</strong> with friends and family. And like most other human
        beings on this planet, I enjoy <strong className="text-stone-100">traveling</strong>!
      </p>
    </>
  ),
};

const birthDate = Date.parse('1990-04-14');

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profile,
  description:
    "I am a tech nerd at heart and I've always been interested in gaming and coding, even at a very young age. I'm born and raised (and I still live) in the medium sized swedish city of Borås. I studied at the university in the same city, and during the final year of my studies I had the oppertunity to work on my thesis at Viskan System AB, which lead me to employment thereafter. I have a tendency to start a bunch of pet projects that I never seem to finish, but it keeps me on my toes when it comes to new tech. I love traveling and I don't mind bringing my work with me on my travels.",
  aboutItems: [
    {label: 'Location', text: 'Borås, Sweden', Icon: MapIcon},
    {
      label: 'Age',
      text: () => Math.floor((Date.now() - birthDate) / (365 * 24 * 60 * 60 * 1000)).toString(),
      Icon: CalendarIcon,
    },
    {label: 'Nationality', text: 'Swedish', Icon: FlagIcon},
    {label: 'Interests', text: 'Gaming, coding and socializing', Icon: SparklesIcon},
    {label: 'Study', text: 'University of Borås', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Viskan System AB', Icon: OfficeBuildingIcon},
  ],
};

/**
 * Skills section
 */
export const skills: Skill[] = [
  {
    title: 'System architecture',
    description: [
      'The bigger picture - in a technical perspective - is something that has always caught my interest. How do applications work together, how do they communicate? What type of database is most suited for a specific use case and how do we make sure that data reaches its destination in the most efficient way?',
    ],
  },
  {
    title: 'Programming',
    description: [
      "Programming has always been very important to me. Mainly focusing on backend development, I've spent most of my time programming in Java. But I've also been doing backend development in Node.js and also played around a lot with Golang, which is very interesting.",
      'I strive to keep my code clean, easy to understand and easy to test, following practices such as dependency injection and test driven development.',
      "Frontend development has never been my strong suit, but lately I've been working a lot with React, which has made me appreciate frontend development a lot more.",
    ],
  },
  {
    title: 'Database modelling',
    description: [
      'Properly modelling your database is a fundamental part of software development. It requires you to take a step back and think about how resources within the system behaves and interacts with one another.',
      'Finding the balance between database integrity and performance can sometimes be challenging in larger databases, which makes it all the more interesting!',
    ],
  },
  {
    title: 'Containerisation & cloud native',
    description: [
      'Cloud native development is one of my favorite topics. I was an early adopter of Docker and when container orchestration started growing, I was quick to jump into it.',
      "I've looked into both Docker Swarm and Kubernetes, and while Docker Swarm is a lot easier to get started with, I feel Kubernetes is superior. The community is great and it feels like the the possibilities are endless.",
      'I have experience in both the operational parts of Kubernetes (installing and maintaining bare-metal Kubernetes clusters) and the client aspect of Kubernetes (utilizing clusters and deploying applications). However, I prefer the client aspect, converting and building applications to properly run in a Kubernetes environment.',
    ],
  },
  {
    title: 'Continuous integration & delivery',
    description: [
      'Making sure that your code base is automatically tested, automatically checked for code style issues and is automatically deployed is something that I enjoy working with. There is not much that compares to the the feeling of watching a well planned build pipeline succeed.',
      'I have worked mostly with Jenkins (former Hudson) and GitLab CI, and specially connecting them with container orcehstration platforms such as Kubernetes, having developers feature branches deployed automatically.',
    ],
  },
  {
    title: 'API design & development',
    description: [
      "During my years in this business, I've been working a lot with API's, both on the consuming end and the providing end. I have been writing integrations with 3rd parties more times than I can count and it has given me a good insight when it comes to providing a good, well-structured API.",
      'When providing an API, I believe that it is very important to have a well defined and documented API that is easy to understand and where naming conventions are consistent throughout the API.',
    ],
  },
  {
    title: 'Security',
    description: [
      'Cyber security has always been an important area, but it has been blowing up a lot the last few years. I find it a very interesting topic, and I enjoy keeping up with the latest news.',
      'I have worked with multiple tools related to finding vulnerabilities in your code and I also enjoy messing around with security related platforms, such as Try Hack Me and Secure Code Warrior.',
    ],
  },
];

/**
 * Portfolio section (currently not used)
 */
export const portfolioItems: PortfolioItem[] = [];

/**
 * Resume section
 */
export const education: TimelineItem[] = [
  {
    date: 'June 2009',
    location: 'John Bauer gymnasium',
    title: 'Information technology',
    content: [
      "An all-in-all basic IT program with classes varying from programming to regular Unix usage. A very chill place where I got to know many of my closest friends today, however I must admit that the education itself wasn't very rewarding.",
    ],
  },
  {
    date: 'May 2012',
    location: 'University of Borås',
    title: 'System architect',
    content: [
      'A three-year lasting bachelor degree that was very well balanced around theory and practical excersices, learning different kinds of programming languages, technices and also different project management styles. I knew must of the practical things at this time, but it was educational to just practice it with other people and discuss with like-minded people.',
    ],
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'June 2012 - present',
    location: 'Viskan System AB',
    title: 'System developer',
    content: [
      "Originally hired as a backend developer (mainly Java and SQL), I've been doing a lot of coding and big refactorings of older applications. Smoothly transitioning more into the DevOps  area, working with setting up new tools such as Jenkins, Nexus, GitLab and Mattermost.",
      "I've also been improving our build pipelines by configuring Maven builds, Jenkins pipelines and deployment scripts. Lately, I've been working a lot with containerisation, trying out both Docker Swarm and Kubernetes. Transitioning our applications to a containerised environment has been a very rewarding and fun journey.",
    ],
  },
  {
    date: 'September 2016 - present',
    location: 'Viskan System AB',
    title: 'Partner & integration',
    content: [
      'With this role, I got responsibility over our integrations with third parties and the technical communication with them. This was mainly focused on our third party payment service providers, building a solid framework for processing payments through our E-commerce platform and further down the flows in the back-office system, handling order cancellations, invoice activations and returns.',
    ],
  },
];

/**
 * Recommendation section
 */
export const recommendation: RecommendationSection = {
  backgroundImage: recommendationsBackground,
  recommendations: [
    {
      name: 'Linus Brimstedt - former CTO at Viskan System AB',
      texts: [
        'Anton is a friendly and highly professional colleague, quick to learn and unafraid of challenges.',
        'He masters any task given and understand the importance of high quality, testable and clean code.',
        'He is good at teaching others and can operate both in teams and alone, taking responsibility of delivering good products in both cases.',
        'Apart from being a great developer he also has a good understanding of operations and how to host software in a good way.',
        'I would hire Anton for any job requiring a great developer, a DevOps engineer or an architect.',
      ],
    },
  ],
};

/**
 * Contact section
 */
export const contact: ContactSection = {
  headerText: 'Get in touch',
  description: 'To reach me, you can either use the contact form to the left, or use one of the links below.',
  descriptionMobile: 'To reach me, you can use one of the links below or the contact form further down.',
  items: [
    {
      type: ContactType.Email,
      text: 'hello@anton-johansson.com',
      href: 'mailto:hello@anton-johansson.com',
    },
    {
      type: ContactType.Location,
      text: 'Borås, Sweden',
      href: 'https://www.google.se/maps/place/Bor%C3%A5s/@57.7247654,12.8571302,12z',
    },
    {
      type: ContactType.GitHub,
      text: 'anton-johansson',
      href: 'https://github.com/anton-johansson',
    },
    {
      type: ContactType.LinkedIn,
      text: 'anton-johansson',
      href: 'https://www.linkedin.com/in/anton-johansson/',
    },
    {
      type: ContactType.Instagram,
      text: '@anton.johansson',
      href: 'https://www.instagram.com/anton.johansson/',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'GitHub', Icon: GitHubIcon, href: 'https://github.com/anton-johansson'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/anton-johansson/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/anton.johansson/'},
  {label: 'Steam', Icon: SteamIcon, href: 'https://steamcommunity.com/id/antonjohansson_'},
  {label: 'Spotify', Icon: SpotifyIcon, href: 'https://open.spotify.com/user/antoon'},
];
