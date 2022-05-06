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
      "Managing props in reusable components were the goal of this page. There are three primary reusable components in this portfolio: the project cards on this page, these red cards from where you are reading right now, and some buttons.",
    titleTwo: "Showcase",
    textTwo:
      "The data is imported from another file, and the code creates the cards dynamically in two versions, the closed small card and the bigger opened card.",
    titleThree: "Tech used",
    textThree:
      "I highlight here the React Hooks such as useState, useRef, and useEffect.",
    titleFour: "",
    textFour: "",
    observation: "",
    bottom: "5%",
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
    textOne:
      "As a professional obsessed with organization, standards, and clean code, I wanted to present this passion in a provocative and creative manner.",
    titleTwo: "Showcase",
    textTwo:
      "To be transparent, I want to show my code exactly as I write it. Thus, to view the original code of this page, click the magnifying glass icon.",
    titleThree: "Tech used",
    textThree:
      "ScrollTrigger, CSS and JS animation, useState, useRef, and use Effect.",
    titleFour: "",
    textFour: "",
    observation: "",
    bottom: "-5%",
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
      "Hook useContext, DragDropContext, Droppable, Draggable from React Beautiful DnD library.",
    titleFour: "",
    textFour: "",
    observation: "",
    bottom: "9%",
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
    frontText: "100% React-based, this is my most important project built.",
    backText_titleOne: "why",
    backText_textOne: `Rather than make a "to-do list" project after taking a React course, I thought it would be more productive to build a bold project where I could apply what I've learned and study new things to go beyond what I already knew.`,
    backText_titleTwo: "how",
    backText_textTwo:
      "As a product strategist, I began the project by thinking about how to create a valuable portfolio that would benefit employers looking for talent with my skills.",
    backText_titleThree: "what",
    backText_textThree:
      "From many sketches, designing the project on Figma, to coding afterward, in each step, the portfolio was built intentionally gathering new knowledge and new understandings.",
    backText_titleFour: "tech",
    backText_textFour:
      "100% React-based, JSX, CSS, SASS, and HTML. Some tools used: Git, VisualCode, Figma, Adobe Photoshop, and Adobe Premiere.",
    // backText_textFour:"100% React-based, JSX, CSS, SASS, and HTML. Besides that, some tools such as Git, VisualCode, Figma, Adobe Photoshop, and Adobe Premiere.",
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
    frontText: "Here's a tutorial project I took to a whole new level.",
    backText_titleOne: "why",
    backText_textOne:
      "After some courses, I focused on building projects following tutorials, until I got some fluency with the language. This was my first relevant project in Vanilla Javascript.",
    backText_titleTwo: "how",
    backText_textTwo:
      "For this project, Ania Kubow's tutorial was very helpful. However, the design was really simple, and there were no buttons on the screen for mobile users to play. That was my opportunity to customize it myself.",
    backText_titleThree: "what",
    backText_textThree:
      "Using Javascript and CSS, I redesigned the entire game, adding buttons to start and play on mobile devices, and adding some sounds to create a better user experience.",
    backText_titleFour: "",
    backText_textFour: "",
    backText_linkName: "Compare with original: Ania Kubów's Tutorial",
    backText_link: "https://www.youtube.com/watch?v=CeUGlSl2i4Q&t=45s",
    backgroundColor: "#FDD54D",
    visitIcon: true,
  },
  {
    id: 3,
    frontShow: true,
    icon: require("../assets/images/card-icon-seletos.png"),
    titleA: "Seletos",
    year: "2021",
    tech: "html css",
    category: "website",
    url: "https://fkodama.com/_dev/seletos",
    image: require("../assets/images/project-seletos.jpg"),
    frontText:
      "This was the first website that I fully developed with HTML, CSS, and JS.",
    backText_titleOne: "why",
    backText_textOne:
      "Customizing template websites was already something I knew how to do. Now, it was time to build a website from scratch.",
    backText_titleTwo: "how",
    backText_textTwo:
      "In response to a client's briefing, I used my experience in digital marketing to design and code the entire website.",
    backText_titleThree: "what",
    backText_textThree:
      "The key features of the project were Flexbox, Display Grid, some simple animations, and Responsiveness in general.",
    backText_titleFour: "",
    backText_textFour: "",
    backgroundColor: "#BA88F9",
    visitIcon: true,
  },
  {
    id: 4,
    frontShow: true,
    icon: require("../assets/images/card-icon-spaceinvaders.png"),
    titleA: "Space Invaders",
    year: "2021",
    tech: "html css js",
    category: "video game",
    url: "https://fkodama.com/spaceinvaders/",
    image: require("../assets/images/project-space.jpg"),
    frontText:
      "It's pretty awesome to build classic video games. You learn to play!",
    backText_titleOne: "why",
    backText_textOne:
      "As I studied product management, agile, and some other things, I have not been coding for some time. I want to make my big return with a fun project to allow me to catch up with the syntax.",
    backText_titleTwo: "how",
    backText_textTwo:
      "That's why I decided to build this project. This tutorial again from Ania Kubow (mentioned on the Pac Man project) uses a great deal of Vanilla Javascript logic. Therefore, it was a good place to restart.",
    backText_titleThree: "what",
    backText_textThree:
      "As I did with Pac Man, I challenged myself to create new buttons and redesign the entire video game.",
    backText_titleFour: "",
    backText_textFour: "",
    backText_linkName: "Compare with original: Ania Kubów's Tutorial",
    backText_link: "https://www.youtube.com/watch?v=3Nz4Yp7Y_uA",
    backgroundColor: "#70D1D5",
    visitIcon: true,
  },
  {
    id: 5,
    frontShow: true,
    icon: require("../assets/images/card-icon-mundial.png"),
    titleA: "Mundial",
    year: "2021",
    tech: "html css",
    category: "website",
    url: "https://www.mundialcomunicacao.com.br/",
    image: require("../assets/images/project-mundial.jpg"),
    frontText: "My first client website, my first big challenge.",
    backText_titleOne: "why",
    backText_textOne:
      "This client needed a new communication and a new website as well. I didn't have the opportunity to study deeply yet HTML and CSS, so as a starting point, I used the structure of a template website.",
    backText_titleTwo: "how",
    backText_textTwo:
      "Even though I wasn't ready to build this website from scratch, I had to come up with a new brand, font type, icons, and customization for all areas.",
    backText_titleThree: "what",
    backText_textThree:
      "The client was very pleased with the final outcome, and so was I. Seeing that I was on the right track was the best motivation for me to keep studying even harder.",
    backText_titleFour: "",
    backText_textFour: "",
    backgroundColor: "#3FABD8",
    visitIcon: true,
  },
  {
    id: 6,
    frontShow: true,
    icon: require("../assets/images/card-icon-resume.png"),
    titleA: "Resume",
    year: "2021",
    tech: "html css js",
    category: "resume online",
    url: "http://kodes.ca/angelapodetz",
    image: require("../assets/images/project-resume.jpg"),
    frontText: "Building a website based on the design reference.",
    backText_titleOne: "why",
    backText_textOne:
      "After completing my HTML and CSS course, I found this design offered by the author so people like me can practice building it using this design as a guide.",
    backText_titleTwo: "how",
    backText_textTwo:
      "Despite being the beginning of my journey, I used advanced CSS techniques, such as flexbox and display grid, to construct this website.",
    backText_titleThree: "what",
    backText_textThree:
      "Developing this single-page application was my first experience with JS: the logic to scroll the page from the menu.",
    backText_titleFour: "",
    backText_textFour: "",
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
