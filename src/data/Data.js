// ----------------------------------------
// --------------- WHY CARD ---------------
// ----------------------------------------

export const whyData = {
  reason: {
    titleOne: "Why?",
    textOne:
      "This portfolio was created to help me gain a deeper understanding and practice of the languages I work with.",
    titleTwo: "Showcase",
    textTwo:
      "In addition, the portfolio displays my varied skills which go since the conception of the project, creativity, design, and coding.",
    titleThree: "Tech used",
    textThree: "React, Javascript, CSS, SASS, HTML, NPM, and Git.",
    titleFour: "Tools used",
    textFour: "Figma, Adobe Photoshop, and VS Code.",
    observation:
      "This portfolio was 100% created and programmed by Francis Kodama.",
    bottom: "10%",
    left: "50%",
  },
  about: {
    titleOne: "Why?",
    textOne: `This page was created to serve as a real showcase for my future employer, who may be involved with e-commerce. Besides, the numerous "states" made it a good sandbox to practice my React skills.`,
    titleTwo: "Showcase",
    textTwo: `Go with the flow: choosing a location is required to "add to my team". By clicking this button, an item will appear in the shop bag. When the customer clicks on the bag, I will appear as a product to be checked out with the location chosen. Next, you can delete the item or click on "schedule an interview." You will be directed to the contact form with the data you picked.`,
    titleThree: "Tech used",
    textThree:
      "As a starting point, I challenged myself to use either CSS Grid or Flexbox on each side of the page. Regarding JS, conditional was used to control the appearance of certain elements. Additionally, I used React events and React Hooks, such as useState and useRef.",
    titleFour: "",
    textFour: "",
    observation: "",
    bottom: "-5%",
    left: "50%",
  },
  selectedProjects: {
    titleOne: "Why?",
    textOne:
      "Managing props in reusable components was the goal of this page. The logic for displaying the active card, and for closing it if another card was activated, was also interesting and fun.",
    titleTwo: "Showcase",
    textTwo:
      "The data is imported from another file, and the code creates the cards dynamically in two versions, the closed small card and the bigger opened card.",
    titleThree: "Tech used",
    textThree:
      "I highlight here the React Hooks such as useState, useRef, and useEffect.",
    titleFour: "",
    textFour: "",
    observation: "",
    bottom: "20%",
    left: "50%",
  },
  api: {
    titleOne: "Why?",
    textOne:
      "I will certainly need to manage API interactions in my future job, so creating this portfolio page was crucial.",
    titleTwo: "Showcase",
    textTwo:
      "Fetching data from a third party, and promises were the key to this page. Moreover, the method of calculating the time, as well as how to present the data on the screen to the user, also contributed to my learning of React.",
    titleThree: "Tech used",
    textThree:
      "Fetch request, promises, React hooks such as useState and useEffect, and some JS methods.",
    titleFour: "",
    textFour: "",
    observation: "",
    bottom: "10%",
    left: "50%",
  },
  code: {
    titleOne: "Why?",
    textOne: "",
    titleTwo: "Showcase",
    textTwo: "",
    titleThree: "Tech used",
    textThree: "",
    titleFour: "",
    textFour: "",
    observation: "",
    bottom: "5%",
    left: "50%",
  },
  contact: {
    titleOne: "Why?",
    textOne:
      "In order to feel complete in my learning, I needed drag-and-drop functionality. In response, I created the Hello Generator, an easy way to get you in touch, and of course, schedule an interview! :)",
    titleTwo: "Showcase",
    textTwo:
      "The ability to program and be creative. In addition to the drag and drop feature, this page receives and manages props (the interview request and the location information) from the about me page.",
    titleThree: "Tech used",
    textThree:
      "DragDropContext, Droppable, Draggable from React Beautiful DnD library.",
    titleFour: "",
    textFour: "",
    observation: "",
    bottom: "5%",
    left: "50%",
  },
};

// ----------------------------------------
// ---------------- AVATAR ----------------
// ----------------------------------------

export const avatarData = [
  {
    key: 0,
    title: "creative and innovation",
    description:
      "Due to his continuous curiosity and extensive advertising experience, he is always ready to contribute to the development of innovative solutions that can make a real impact.",
    imgUrl: require("../assets/images/avatar-creative.jpg"),
  },
  {
    key: 1,
    title: "creative and innovation",
    description:
      "Due to his continuous curiosity and extensive advertising experience, he is always ready to contribute to the development of innovative solutions that can make a real impact.",
    imgUrl: require("../assets/images/avatar-creative.jpg"),
  },
  {
    key: 2,
    title: "problem-solving",
    description:
      "Possess the ability to handle and calmly identify solutions to difficult or unexpected situations both in programming challenges and in the workplace.",
    imgUrl: require("../assets/images/avatar-problem2.jpg"),
  },
  {
    key: 3,
    title: "effective communication",
    description:
      "It is crucial that we are able to listen actively to the stakeholders, which was Francis' job for all of his life. Additionally, Francis has the gift of feeding it back to them, so they know it is correct.",
    imgUrl: require("../assets/images/avatar-communication2.jpg"),
  },
  {
    key: 4,
    title: "lifelong learner",
    description:
      "Dedicated to continuous growth and development to keep up with changes in this new world. Aims to develop skills, and master new technologies, in order to add value to the organization.",
    imgUrl: require("../assets/images/avatar-learner2.jpg"),
  },
  {
    key: 5,
    title: "goal-oriented",
    description:
      "Motivated by a clear vision, goals, and meaningful aspirations, he believes in hard work, choices, and persistence. Difficult to have him distracted from his goals.",
    imgUrl: require("../assets/images/avatar-goal2.jpg"),
  },
  {
    key: 6,
    title: "positive attitude",
    description:
      "Demonstrates kindly interest and goodwill in his relationships. Collaboration, flexibility, and empathy are his top qualities developed over a strong and experienced career.",
    imgUrl: require("../assets/images/avatar-friendly.jpg"),
  },
];

// ----------------------------------------
// --------------- PROJECTS ---------------
// ----------------------------------------

export const projects = [
  {
    id: 1,
    frontShow: true,
    icon: require("../assets/images/card-icon-thisportfolio.png"),
    title0: "this.",
    titleA: "Portfolio",
    year: "2022",
    tech: "... + react",
    category: "website",
    url: "https://www.fkodama.com",
    image: require("../assets/images/project-portfolio.jpg"),
    frontText:
      "I am an experienced tech services entrepreneur/consultant product.",
    backText_titleOne: "why",
    backText_textOne: "100% React-based, it was the most important project.",
    backText_titleTwo: "how",
    backText_textTwo: "100% React-based, it was the most important project.",
    backText_titleThree: "what",
    backText_textThree: "100% React-based, it was the most important project.",
    backText_titleFour: "tech",
    backText_textFour: "100% React-based, it was the most important project.",
    backgroundColor: "#FC9651",
    visitIcon: false,
  },
  {
    id: 2,
    frontShow: true,
    icon: require("../assets/images/card-icon-pacman.png"),
    titleA: "Pac Man",
    year: "2021",
    tech: "html css js",
    category: "video game",
    url: "https://fkodama.com/pacman/",
    image: require("../assets/images/project-pacman.jpg"),
    frontText:
      "I am an experienced tech services entrepreneur/consultant product.",
    backText_titleOne: "why",
    backText_textOne: "100% React-based, it was the most important project.",
    backText_titleTwo: "how",
    backText_textTwo: "100% React-based, it was the most important project.",
    backText_titleThree: "what",
    backText_textThree: "100% React-based, it was the most important project.",
    backText_titleFour: "tech",
    backText_textFour: "100% React-based, it was the most important project.",
    backgroundColor: "#FDD54D",
    visitIcon: true,
  },
  {
    id: 3,
    frontShow: true,
    icon: require("../assets/images/card-icon-seletos.png"),
    titleA: "Seletos",
    year: "2022",
    tech: "html css",
    category: "website",
    url: "https://fkodama.com/_dev/seletos",
    image: require("../assets/images/project-seletos.jpg"),
    frontText:
      "I am an experienced tech services entrepreneur/consultant product.",
    backText_titleOne: "why",
    backText_textOne: "100% React-based, it was the most important project.",
    backText_titleTwo: "how",
    backText_textTwo: "100% React-based, it was the most important project.",
    backText_titleThree: "what",
    backText_textThree: "100% React-based, it was the most important project.",
    backText_titleFour: "tech",
    backText_textFour: "100% React-based, it was the most important project.",
    backgroundColor: "#BA88F9",
    visitIcon: true,
  },
  {
    id: 4,
    frontShow: true,
    icon: require("../assets/images/card-icon-spaceinvaders.png"),
    titleA: "Space Invaders",
    year: "2022",
    tech: "html css js",
    category: "video game",
    url: "https://fkodama.com/spaceinvaders/",
    image: require("../assets/images/project-space.jpg"),
    frontText:
      "I am an experienced tech services entrepreneur/consultant product.",
    backText_titleOne: "why",
    backText_textOne: "100% React-based, it was the most important project.",
    backText_titleTwo: "how",
    backText_textTwo: "100% React-based, it was the most important project.",
    backText_titleThree: "what",
    backText_textThree: "100% React-based, it was the most important project.",
    backText_titleFour: "tech",
    backText_textFour: "100% React-based, it was the most important project.",
    backgroundColor: "#70D1D5",
    visitIcon: true,
  },
  {
    id: 5,
    frontShow: true,
    icon: require("../assets/images/card-icon-mundial.png"),
    titleA: "Mundial",
    tech: "html css",
    category: "website",
    url: "https://www.mundialcomunicacao.com.br/",
    image: require("../assets/images/project-mundial.jpg"),
    frontText:
      "I am an experienced tech services entrepreneur/consultant product.",
    backText_titleOne: "why",
    backText_textOne: "100% React-based, it was the most important project.",
    backText_titleTwo: "how",
    backText_textTwo: "100% React-based, it was the most important project.",
    backText_titleThree: "what",
    backText_textThree: "100% React-based, it was the most important project.",
    backText_titleFour: "tech",
    backText_textFour: "100% React-based, it was the most important project.",
    backgroundColor: "#3FABD8",
    visitIcon: true,
  },
  {
    id: 6,
    frontShow: true,
    icon: require("../assets/images/card-icon-resume.png"),
    titleA: "Resume",
    year: "2022",
    tech: "html css js",
    category: "resume online",
    url: "http://kodes.ca/angelapodetz",
    image: require("../assets/images/project-resume.jpg"),
    frontText:
      "I am an experienced tech services entrepreneur/consultant product.",
    backText_titleOne: "why",
    backText_textOne: "100% React-based, it was the most important project.",
    backText_titleTwo: "how",
    backText_textTwo: "100% React-based, it was the most important project.",
    backText_titleThree: "what",
    backText_textThree: "100% React-based, it was the most important project.",
    backText_titleFour: "tech",
    backText_textFour: "100% React-based, it was the most important project.",
    backgroundColor: "#D3CFCC",
    visitIcon: true,
  },
];

export const contactData = [
  {
    id: "1",
    content: "Hey Francis!",
  },
  {
    id: "2",
    content: "I hope this message finds you well.",
  },
  {
    id: "3",
    content: "Cool website, man!",
  },
  {
    id: "4",
    content: "Do you want to work in our company?",
  },
  {
    id: "5",
    content: "ops, I found a bug.",
  },
  {
    id: "6",
    content: "Holly cow, what a portfolio!",
  },
  {
    id: "7",
    content: `Let's schedule an interview?`,
  },
  {
    id: "8",
    content: "I am looking for a professional like you.",
  },
  {
    id: "9",
    content: "Cool!!!",
  },
  {
    id: "10",
    content: "I did not like your website, and I will tell you why...",
  },
  {
    id: "11",
    content: "See you soon!",
  },
  {
    id: "12",
    content: "Take care!",
  },
  {
    id: "13",
    content: "Thanks! :)",
  },
];
