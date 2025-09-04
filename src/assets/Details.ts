import aauMin from "@/assets/icons/aau.min.webp";
import universityTexas from "@/assets/icons/UT.png";
import booktix from "@/assets/icons/booktix.jpg";
import mave from "@/assets/icons/Mave1.jpg";
import accenture from "@/assets/icons/Acenture.webp"

const details = {
  name: {
    first: "Dustin Daniel",
    last: "Lee",
    nickname: "Dustin",
  },
  title: "Software Engineer",
  biography: "Software Engineer with **8+ years** of experience building responsive, scalable **frontend** applications and **cloud-native APIs**. Specialized in **Angular, React, and hybrid MVC/SPAs**—paired with deep expertise inbackendsystems using **.NET** Core and **AWS**. Proven success in modernizing legacy frontends, migrating monolithstomicro frontends, and delivering performant UI/UX at scale. **Backend** strengths include **REST APIs, CleanArchitecture, and CI/CD with AWS ECS, Lambda, and Kubernetes.**",
  education: [
    {
      school: "The University of Texas at Austin",
      url: "https://www.utexas.edu/",
      icon: universityTexas,
      iconMin: aauMin,
      location: "Austin, TX",
      degree: "Master's degree in computer science",
      major: "Computer Science",
      start: "June 2015",
      end: "June 2017",
    },
    {
      school: "The University of Texas at Austin",
      url: "https://www.utexas.edu/",
      icon: universityTexas,
      iconMin: aauMin,
      location: "Austin, TX",
      degree: "Bachelor's degree in computer science",
      major: "Computer Science and Applied Mathematics",
      start: "Aug 2011",
      end: "May 2015",
    },
  ],
  experience: [
    {
      company: "Booktix",
      url: "https://www.booktix.com/",
      icon: booktix,
      iconMin: booktix,
      location: "East Brunswick, New Jersey",
      contract: "Full-time",
      position: "Senior Software Engineer",
      start: "Jun 2022",
      end: "Present",
      description: [
        "Built real-time interactive seat selection interface for ticket buyers, modeled after https://pretix/seats.io UX patterns",
        "Led the front-end modernization of a legacy Angular 1.x app, migrating to a hybrid Angular 11 + ASP.NET MVC interface while maintaining seamless UX across modules.",
        "Built React dashboards for internal admin and B2B clients, including real-time reporting, notifications, and secure component loading integrated with .NET APIs.",
        "Architected and maintained a global multi-tenant point-of-sale platform used by Fortune 500s—frontend in Angular and React, backend in .NET Core using Clean Architecture. ",
        "Delivered mobile-first UIs using Blazor and React-style component logic, with real-time sync to backend APIs via SignalR.",
        "Managed frontend CI/CD pipelines with GitLab and integrated observability using OpenTelemetry and CloudWatch.",
      ],
      skills: [
        "Angular",
        "React",
        "Razor Pages",
        ".NET 6",
        "AWS ECS Fargate",
        "Docker",
        "Kubernetes",
        "Elasticsearch",
        "CQRS",
      ],
    },
    {
      company: "Maverick Capital",
      url: "https://www.maverickcap.com/",
      icon: mave,
      iconMin: mave,
      location: "Dallas, Texas",
      contract: "Contract",
      position: "Software Engineer",
      start: "Mar 2020",
      end: "May 2022",
      description: [
        "Developed internal React/ASP.NET Web API apps for analysts and operations, optimizing UX for trade reconciliation and risk analytics.",
        "Introduced frontend test coverage and responsive design patterns for better cross-platform behavior infinancial dashboards.",
        "Tasked with shared components and architecture decisions related to all software projects in C#, .NET 2.0, 3.0, and 3.5 and technical candidate interviews."
      ],
      skills: ["React", ".NET", "SQL Server", "Bloomberg API", "Rhino Mocks", "TFS"],
    },
    {
      company: "Accenture",
      url: "https://www.accenture.com/",
      icon: accenture,
      iconMin: accenture,
      location: "Redmond, WA",
      contract: "Full-time",
      position: "Full-stack engineer",
      start: "Jul 2017",
      end: "Feb 2020",
      description: [
        "Created modular React components for complex routing and scheduling apps in a nationwide real estateservicingtool.",
        "Worked on front-end logic transformations from legacy jQuery/ASP into dynamic SPAs using React andRazorintegration.",
        "Coordinated with backend devs to shift client-side computation to APIs and improve performance.",
      ],
      skills: ["React", ".NET", "SQL Server", "Bloomberg API", "Rhino Mocks", "TFS"],
    },
  ],
  languages: [
    {
      name: "English",
      native: "A1",
      level: "A1",
    },
    {
      name: "Mandarin",
      level: "B2",
    },
  ],
  contact: {
    location: "Asutin, TX, 78735",
    email: "dustlee.dev@gmail.com",
    phone: "+1 430 257 0696",
    website: "https://dustinlee.online/",
    linkedin: "https://www.linkedin.com/in/dustin-lee-dev",
    github: "https://www.github.com/hereistopdev",
    researchgate: "dustinlee",
    gitlab: "https://www.gitlab.com/hereistopdev",
    deviantart: "https://dustinlee.online/",
  },
};

export default details;
