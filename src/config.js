const profile = {
    fullname : "Website Owner",
    description: "FRONT-END DEVELOPER",
    avatarUrl: "https://s-media-cache-ak0.pinimg.com/736x/a9/8d/33/a98d336578c49bd121eeb9dc9e51174d--adobe-illustrator-smileys.jpg",
    social: [
        //The key will be the svg Id in /src/assets/icons.svg
        {
            iconName: "twitter",
            url: "https://twitter.com/username",
            hoverColour: "#1da1f2"
        },
        {
            iconName: "telegram",
            url: "https://t.me/username",
            hoverColour: "#fff"
        },
        {
            iconName: "github",
            url: "https://github.com/username",
            hoverColour: "#333"
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