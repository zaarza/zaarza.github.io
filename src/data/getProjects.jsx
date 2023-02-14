function getProjects() {
  return [
    {
      id: 'project-1',
      name: 'Simple Note App',
      imageUrl: '/assets/images/project-1.png',
      description: 'Submission for Dicoding course "Belajar Fundamental Aplikasi Web dengan React"',
      liveViewUrl: 'https://simple-note-app-zaarza.vercel.app/',
      repositoryUrl: 'https://github.com/zaarza/simple-note-app',
      technology: [
        { name: 'ReactJS' },
        { name: 'TailwindCSS' },
      ],
    },
    {
      id: 'project-2',
      name: 'Restaurant Catalogue',
      imageUrl: '/assets/images/project-2.png',
      description: 'Submission for Dicoding course "Menjadi Front-End Web Developer Expert"',
      liveViewUrl: 'https://restaurant-catalogue-zaarza.vercel.app/',
      repositoryUrl: 'https://github.com/zaarza/restaurant-catalogue',
      technology: [
        { name: 'VanillaJS' },
        { name: 'Progressive Web Apps' },
      ],
    },
  ];
}

export default getProjects;
