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
    name: 'Your Name',
    role: 'Senior Angular Developer',
    subtitle: 'Angular • TypeScript • .NET APIs',
    location: 'Hyderabad - India',
    email: 'your.email@example.com',
    website: 'yourportfolio.com',
    phone: '+91 00000 00000',
    whatsapp: 'https://wa.me/910000000000',
    photo: 'assets/profile-placeholder.svg',
    resume: '#',
    coverLetter: '#'
  };

  socialLinks: SocialLink[] = [
    { label: 'LinkedIn', icon: 'in', url: 'https://linkedin.com/in/your-profile' },
    { label: 'GitHub', icon: 'GH', url: 'https://github.com/your-username' },
    { label: 'Email', icon: '✉', url: 'mailto:your.email@example.com' }
  ];

  techIcons = ['.NET', 'C#', 'A', 'React', 'JS', 'TS', 'SQL', 'Azure'];

  stats: StatCard[] = [
    { value: '10+ Years', label: 'Software Experience' },
    { value: '5+ Years', label: 'Angular Experience' },
    { value: '20+', label: 'Major Modules' },
    { value: 'Lead', label: 'Enterprise Delivery' }
  ];

  summaryPoints = [
    'Senior Angular Developer with strong experience in enterprise application development, REST APIs, reusable UI components, dashboards, and business workflows.',
    'Expertise in Angular, TypeScript, RxJS, HTML5, SCSS, Bootstrap, PrimeNG-style components, and clean frontend architecture.',
    'Experienced in authentication and security using JWT, OAuth, MSAL, Active Directory, role-based access, and claims-based authorization.',
    'Strong background in .NET Core Web APIs, SQL Server, Microservices, Clean Architecture, Agile delivery, CI/CD, logging, testing, and production support.',
    'Good experience in performance improvement, API error handling, responsive UI, browser compatibility, and maintainable coding standards.',
    'Recognized for delivering business-critical applications for government, enterprise, and internal digital transformation projects.'
  ];

  skills: SkillGroup[] = [
    {
      title: 'Frontend',
      items: ['Angular v20', 'TypeScript', 'RxJS', 'Signals', 'JavaScript', 'HTML5', 'CSS3', 'SCSS', 'Bootstrap', 'PrimeNG']
    },
    {
      title: 'Backend',
      items: ['C#', 'ASP.NET Core', 'ASP.NET MVC', 'Web API', 'REST API', 'Microservices', 'Entity Framework', 'Dapper']
    },
    {
      title: 'Database & Cloud',
      items: ['SQL Server', 'Stored Procedures', 'Query Optimization', 'Azure', 'Azure App Services', 'IIS', 'CI/CD']
    },
    {
      title: 'Security & Tools',
      items: ['JWT', 'OAuth', 'MSAL', 'Active Directory', 'Git', 'Postman', 'PowerShell', 'Swagger']
    }
  ];

  certifications = [
    'Microsoft Certified: Azure Developer Associate (AZ-204)',
    'Project Management Professional (PMP)®'
  ];

  achievements = [
    'Delivered multiple enterprise applications with improved user experience and faster business processing.',
    'Received appreciation certificates from clients and project stakeholders.',
    'Mentored junior developers on Angular structure, code quality, and API integration.'
  ];

  education: Education[] = [
    { degree: 'Master of Computer Applications (MCA)', university: 'Your University' },
    { degree: 'BSc Computer Science', university: 'Your University' }
  ];

  languages: Language[] = [
    { name: 'Telugu', level: 'Native Speaker' },
    { name: 'English', level: 'Professional' },
    { name: 'Hindi', level: 'Professional' }
  ];

  hobbies = ['Net Browsing', 'Cooking', 'Playing Games'];

  projects: Project[] = [
    {
      title: 'Enterprise Services Portal',
      subtitle: 'Government service platform',
      image: 'assets/project-government-services.svg',
      status: 'Current',
      description: 'Angular portal for service discovery, dashboard, application forms, authentication, API integration, and user journey tracking.',
      tech: ['Angular', 'TypeScript', 'REST API', '.NET Core', 'SQL Server']
    },
    {
      title: 'Workflow Approval System',
      subtitle: 'Business approval dashboard',
      image: 'assets/project-workflow.svg',
      status: 'Completed',
      description: 'Approval screens with status filters, reviewer actions, audit trail, notifications, and role-based access.',
      tech: ['Angular', 'Reactive Forms', 'JWT', 'Web API']
    },
    {
      title: 'AI Knowledge Search UI',
      subtitle: 'Internal knowledge assistant',
      image: 'assets/project-ai-search.svg',
      status: 'Prototype',
      description: 'Search interface to display secured AI results, document references, preview cards, and user feedback.',
      tech: ['Angular', 'Signals', 'REST API', 'UX']
    }
  ];

  experiences: Experience[] = [
    {
      role: 'Senior Angular Developer',
      company: 'Current Company',
      client: 'Enterprise Client',
      period: 'May 2026 - Present'
    },
    {
      role: 'Senior Full Stack Developer',
      company: 'Previous Company',
      client: 'Government / Enterprise Client',
      period: 'Oct 2024 - Apr 2026'
    },
    {
      role: '.NET Technical Lead',
      company: 'Previous Company',
      client: 'Internal Product / Client Project',
      period: 'Jul 2024 - Oct 2024'
    },
    {
      role: 'Senior .NET Developer',
      company: 'Previous Company',
      client: 'Digital Transformation Project',
      period: 'Oct 2023 - Feb 2024'
    },
    {
      role: '.NET Developer',
      company: 'Previous Company',
      client: 'Business Application Team',
      period: 'Jul 2019 - Jun 2021'
    }
  ];

  currentYear = new Date().getFullYear();
}
