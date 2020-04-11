const getMonthYear = (d1, d2) => {
  var months = (d2.getFullYear() - d1.getFullYear()) * 12;
  months += d2.getMonth() - d1.getMonth();
  if (d2.getDate() < d1.getDate()) months--;
  return (months / 12).toFixed(1);
};

export const data = {
  web: {
    name: "Web",
    data: [
      {
        iconName: "faReact",
        name: "React",
        level: "Intermediate",
        star: "3/5",
        year: getMonthYear(new Date(2016, 5, 23), new Date()),
      },
      {
        iconName: "faAngular",
        name: "Anguar",
        level: "beginner",
        star: "2/5",
        year: getMonthYear(new Date(2019, 1, 23), new Date()),
      },
      {
        iconName: "faHtml5",
        name: "HTML 5",
        level: "Intermediate",
        star: "3/5",
        year: getMonthYear(new Date(2016, 1, 23), new Date()),
      },
      {
        iconName: "faSass",
        name: "Sass",
        level: "Intermediate",
        star: "3/5",
        year: getMonthYear(new Date(2019, 3, 23), new Date()),
      },
      {
        iconName: "faBootstrap",
        name: "Bootstrap",
        level: "Intermediate",
        star: "3/5",
        year: getMonthYear(new Date(2017, 1, 23), new Date()),
      },
      {
        iconName: "faNode",
        name: "Node",
        level: "Intermediate",
        star: "3/5",
        year: getMonthYear(new Date(2017, 10, 23), new Date()),
      },
      {
        iconName: "faAws",
        name: "AWS",
        level: "beginner",
        star: "2/5",
        year: getMonthYear(new Date(2019, 1, 23), new Date()),
      },
      {
        iconName: "faDocker",
        name: "Docker",
        level: "beginner",
        star: "2/5",
        year: getMonthYear(new Date(2019, 4, 23), new Date()),
      },
    ],
  },
  mobile: {
    name: "Mobile",
    data: [
      {
        iconName: "faReact",
        name: "React-Native",
        level: "Intermediate",
        star: "4/5",
        year: getMonthYear(new Date(2017, 8, 23), new Date()),
      },
      {
        iconName: "faAndroid",
        name: "Android",
        level: "Intermediate",
        star: "3/5",
        year: getMonthYear(new Date(2017, 1, 23), new Date()),
      },
      {
        iconName: "faApple",
        name: "Apple",
        level: "Intermediate",
        star: "3/5",
        year: getMonthYear(new Date(2016, 2, 23), new Date()),
      },
      {
        iconName: "faUnity",
        name: "Unity",
        level: "Intermediate",
        star: "3/5",
        year: getMonthYear(new Date(2017, 8, 23), new Date()),
      },
    ],
  },
  testing: {
    name: "Testing",
    data: [
      {
        iconName: "faJenkins",
        name: "Jenkins",
        level: "beginner",
        star: "2/5",
        year: getMonthYear(new Date(2019, 6, 23), new Date()),
      },
      {
        iconName: "faJira",
        name: "Jira",
        level: "Intermediate",
        star: "3/5",
        year: getMonthYear(new Date(2019, 2, 23), new Date()),
      },
    ],
  },
  language: {
    name: "Language",
    data: [
      {
        iconName: "faJs",
        name: "JavaScript",
        level: "Advanced",
        star: "4/5",
        year: getMonthYear(new Date(2016, 2, 23), new Date()),
      },
      {
        iconName: "faJava",
        name: "Java",
        level: "Intermediate",
        star: "2/5",
        year: getMonthYear(new Date(2019, 1, 23), new Date()),
      },
      {
        iconName: "faSwift",
        name: "Swift",
        level: "Intermediate",
        star: "3/5",
        year: getMonthYear(new Date(2018, 5, 23), new Date()),
      },
      {
        iconName: "faPython",
        name: "Python",
        level: "beginner",
        star: "2/5",
        year: getMonthYear(new Date(2019, 9, 23), new Date()),
      },
    ],
  },
  repository: {
    name: "Repository",
    data: [
      {
        iconName: "faGitlab",
        name: "GitLab",
        level: "Intermediate",
        star: "4/5",
        year: getMonthYear(new Date(2017, 1, 23), new Date()),
      },
      {
        iconName: "faGithub",
        name: "GitHub",
        level: "Intermediate",
        star: "4/5",
        year: getMonthYear(new Date(2018, 5, 23), new Date()),
      },
      {
        iconName: "faBitbucket",
        name: "BitBucket",
        level: "beginner",
        star: "4/5",
        year: getMonthYear(new Date(2019, 5, 23), new Date()),
      },
    ],
  },
};
