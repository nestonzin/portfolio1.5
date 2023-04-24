import { Component } from '@angular/core';

interface featuredProjects {
  title: string;
  description: string;
  url: string;
}

interface Project {
  title: string;
  year: number;
  url: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  featuredProjects: featuredProjects[] = [
    {
      title: 'Lost Ark To do List',
      description: 'Track your quests with Lost List.',
      url: 'https://lost-ark-to-do.vercel.app',
    },
    {
      title: 'Rick and Morty',
      description: 'Rick and Morty API project in React.',
      url: 'https://rickand-morty-gamma.vercel.app',
    },
    {
      title: 'SmartStats',
      description: 'League of legends API track.',
      url: 'https://smartstats.vercel.app',
    },
  ];

  projects: Project[] = [
    {
      title: 'Lost Ark ToDo List',
      url: 'https://lost-ark-to-do.vercel.app',
      year: 2023,
    },
    {
      title: 'SmartStats',
      url: 'https://smartstats.vercel.app',
      year: 2022,
    },
    {
      title: 'Rick and Morty',
      url: 'https://rickand-morty-gamma.vercel.app',
      year: 2022,
    },
    {
      title: 'Links',
      url: 'https://nestor-links.vercel.app',
      year: 2022,
    },
    {
      title: 'WaterWorks',
      url: 'https://github.com/nestonzin/waterworks',
      year: 2022,
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  getProjectsByYear(year: number) {
    return this.projects.filter((project) => project.year === year);
  }

  getYears() {
    return Array.from(new Set(this.projects.map((project) => project.year)));
  }
}
