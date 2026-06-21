import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface SocialLink {
  label: string;
  icon: string;
  url: string;
}

interface StatCard {
  value: string;
  label: string;
}

interface SkillGroup {
  title: string;
  items: string[];
}

interface Project {
  title: string;
  subtitle: string;
  image: string;
  status: string;
  description: string;
  tech: string[];
}

interface Experience {
  role: string;
  company: string;
  client: string;
  period: string;
}

interface Education {
  degree: string;
  university: string;
}

interface Language {
  name: string;
  level: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  profile = {
    name: 'Rakesh Dhobila',
    role: 'Angular Developer',
    subtitle: 'Angular • TypeScript',
    location: 'Hyderabad - India',
    email: 'mailto:rakeshdhobila006@gmail.com',
    website: 'https://lnkd.in/dursZpFf',
    phone: '+91 8639822946',
    whatsapp: 'https://wa.me/918639822946',
    photo: 'assets/rakesh1.jpeg',
    resume: 'assets/Resume.pdf',
    coverLetter: 'assets/cover_letter.pdf'
  };

  socialLinks: SocialLink[] = [
    { label: 'LinkedIn', icon: 'in', url: 'https://www.linkedin.com/in/rakesh-dhobila-a34523222/' },
    { label: 'GitHub', icon: 'GH', url: 'https://github.com/DhobilaRakesh' },
    { label: 'Email', icon: '✉', url: 'mailto:rakeshdhobila006@gmail.com' }
  ];

  techIcons = ['Angular', 'Type Script', 'Node Js', 'MongoDB', 'Jquery', 'HTML', 'CSS', 'React', 'JS', 'REST APIs'];

  stats: StatCard[] = [
    // { value: '3+ Years', label: 'Software Experience' },
    // { value: '3+ Years', label: 'Angular Experience' }
  ];

  summaryPoints = [
    '3+ years of hands-on experience in full-stack web application development using the MEAN stack: MongoDB, Express.js, Angular, and Node.js.',
    'Expertise in Angular, TypeScript, RxJS, HTML5, CSS, Bootstrap, PrimeNG-style components, and clean frontend architecture.',
    'Strong knowledge of building and consuming RESTful APIs using Node.js and Express.js.',
    'Hands-on experience in designing and managing MongoDB databases, collections, schemas, queries, and CRUD operations.',
    'Good experience in performance improvement, API error handling, responsive UI, browser compatibility, and maintainable coding standards.',
    'Recognized for delivering business-critical applications for government, enterprise, and internal digital transformation projects.',
    'Experienced in integrating frontend Angular applications with backend APIs and handling HTTP requests using Angular services.',
    'Good understanding of Angular concepts such as components, modules, routing, services, forms, directives, pipes, and RxJS observables.',
    'Worked on debugging, troubleshooting, and fixing application issues across frontend, backend, and database layers.',
    'Familiar with version control tools like Git, GitHub, and GitLab for source code management.',
    'Good knowledge of API testing tools such as Postman for validating backend services.',
    'Ability to write clean, reusable, and maintainable code following coding standards and best practices.'
  ];

  skills: SkillGroup[] = [
    {
      title: 'Frontend',
      items: ['Angular v20', 'TypeScript', 'RxJS', 'Signals', 'JavaScript', 'HTML5', 'CSS3', 'SCSS', 'Bootstrap', 'PrimeNG']
    },
    {
      title: 'Backend',
      items: ['Node Js', 'REST API']
    },
    {
      title: 'Database & Cloud',
      items: ['MonogoDB', 'Query Optimization']
    },
    {
      title: 'Security & Tools',
      items: ['JWT', 'OAuth', 'MSAL', 'Git', 'Postman', 'PowerShell', 'Swagger']
    }
  ];

  certifications = [
    ''
  ];

  achievements = [
    'Delivered multiple enterprise applications with improved user experience and faster business processing.',
    'Received appreciation certificates from clients and project stakeholders.'
  ];

  education: Education[] = [
    { degree: 'M.Sc Computer Science', university: 'Satavahana University' },
    { degree: 'BSc Computer Science', university: 'Satavahana University' }
  ];

  languages: Language[] = [
    { name: 'Telugu', level: 'Native Speaker' },
    { name: 'English', level: 'Professional' },
    { name: 'Hindi', level: 'Professional' }
  ];

  hobbies = ['Net Browsing', 'Cooking', 'Playing Games'];

  projects: Project[] = [
    {
      title: 'Digital Healthcare Services Portal',
      subtitle: 'ABDM integrated healthcare platform',
      image: 'assets/ABHA.png',
      status: 'Current',
      description: 'Developed a healthcare portal for ABHA, HFR, HPR, and EMR OP/IP modules. The application supports patient registration, digital health profile management, healthcare professional and facility records, outpatient visits, inpatient admission, clinical records, prescriptions, and discharge summary workflows.',
      tech: ['Angular', 'TypeScript', 'JavaScript', 'REST API', 'NodeJS', 'MongoDB']
    },
    {
      title: 'Workflow Approval System',
      subtitle: 'Business approval dashboard',
      image: 'assets/abha2.png',
      status: 'Completed',
      description: 'Approval screens with status filters, reviewer actions, audit trail, notifications, and role-based access.',
      tech: ['Angular', 'Reactive Forms', 'JWT', 'Web API']
    }
    // {
    //   title: 'AI Knowledge Search UI',
    //   subtitle: 'Internal knowledge assistant',
    //   image: 'assets/project-ai-search.svg',
    //   status: 'Prototype',
    //   description: 'Search interface to display secured AI results, document references, preview cards, and user feedback.',
    //   tech: ['Angular', 'Signals', 'REST API', 'UX']
    // }
  ];



  experiences: Experience[] = [
  {
    role: 'MEAN Stack Developer',
    company: 'Suvarna Technosoft Pvt Ltd.',
    client: 'Healthcare / Government Client',
    period: 'May 2023 - Present'
  },
  {
    role: 'Angular Developer',
    company: 'Suvarna Technosoft Pvt Ltd.',
    client: 'Digital Healthcare Services Portal',
    period: 'May 2023 - Present'
  },
  {
    role: 'Frontend Developer',
    company: 'Suvarna Technosoft Pvt Ltd.',
    client: 'Workflow Approval System',
    period: '2024 - 2025'
  }
];
  // experiences: Experience[] = [
  //   {
  //     role: 'Angular Developer',
  //     company: 'Suvarna Technosoft Pvt Ltd.',
  //     client: 'Enterprise Client',
  //     period: 'May 2023 - Present'
  //   },
  //   {
  //     role: 'Angular Developer',
  //     company: 'Previous Company',
  //     client: 'Government / Enterprise Client',
  //     period: 'Oct 2024 - Apr 2026'
  //   },
  //   {
  //     role: '.NET Technical Lead',
  //     company: 'Previous Company',
  //     client: 'Internal Product / Client Project',
  //     period: 'Jul 2024 - Oct 2024'
  //   },
  //   {
  //     role: 'Senior .NET Developer',
  //     company: 'Previous Company',
  //     client: 'Digital Transformation Project',
  //     period: 'Oct 2023 - Feb 2024'
  //   },
  //   {
  //     role: '.NET Developer',
  //     company: 'Previous Company',
  //     client: 'Business Application Team',
  //     period: 'Jul 2019 - Jun 2021'
  //   }
  // ];

  currentYear = new Date().getFullYear();
}
