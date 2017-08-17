const profile = {
  fullname: "Website Owner",
  description: "FRONT-END DEVELOPER",
  social: [
    //The key will be the svg Id in /src/assets/icons.svg
    {
      iconName: "twitter",
      url: "https://twitter.com/username",
      hoverColor: "#1da1f2"
    },
    {
      iconName: "telegram",
      url: "https://t.me/username",
      hoverColor: "#0088cc"
    },
    {
      iconName: "github",
      url: "https://github.com/username",
      hoverColor: "#000"
    }
  ]
}

const projects = [
  {
    title: "Project Title #1",
    img: {
      isSvg: true,
      svgId: "exmaple",
      //Only if not a svg
      url: ""
    },
    description: "Lorem ipsum dolor sit amet, in nulla hendrerit ius, sed et congue graeci, qui id propriae accusata.",
    categories: ["Sample", "Open source", "React"],
    siteUrl: "amazing.project.com",
    sourceCodeUrl: "github.com/user/project"
  },
  {
    title: "Project Title #2",
    img: {
      isSvg: true,
      svgId: "exmaple",
      //Only if not a svg
      url: ""
    },
    description: "Lorem ipsum dolor sit amet, in nulla hendrerit ius, sed et congue graeci, qui id propriae accusata.",
    categories: ["Sample", "Freeware", "Go"],
    siteUrl: "amazing.project.com",
    sourceCodeUrl: "github.com/user/project"
  },
  {
    title: "Project Title #3",
    img: {
      isSvg: true,
      svgId: "exmaple",
      //Only if not a svg
      url: ""
    },
    description: "Lorem ipsum dolor sit amet, in nulla hendrerit ius, sed et congue graeci, qui id propriae accusata.",
    categories: ["Wat", "Linux", "LoL"],
    siteUrl: "amazing.project.es",
    sourceCodeUrl: "github.com/user/:O"
  }
]

export {
  profile,
  projects
}
