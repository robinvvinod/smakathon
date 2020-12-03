
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: emoji("🚀"),
  title: "SMAK-ATHON",
  title2: 'THINK. BUILD. WIN',
  subTitle: emoji("Embark on a journey into the world of IoT 🚀. If you have been curious to learn, tinker and build something fun, this is your chance!"),
  subTitle2: emoji("No coding experience is necessary. Leverage your problem-solving skills. Beginners have an opportunity to join and learn from the pre-event workshop.")
};

// Your Social Media Link

const socialMediaLinks = {

  facebook: "https://www.facebook.com/SingaporeMalayaleeAssociation",
  instagram: "https://www.instagram.com/singmalayalee",

};

// Your Skills Section

const skillsSection = {
  title: "Goals",
  subTitle: "THINK. BUILD. WIN.",
  skills: [
    emoji("⚡ Community Tech engagement"),
    emoji("⚡ Provide an opportunity to break down any barriers to entry/inhibition"),
    emoji("⚡ Build a tech product which would make your life easy / brings joy to you")
  ],

  softwareSkills: [

  ]
};

// Your education background

const educationInfo = {
  viewEducation: true, // Set it to true to see education section
  schools: [
    {
      schoolName: "Launch",
      logo: require("./assets/images/1.png"),
      subHeader: "Theme: Smart home / Christmas",
      duration: "20th November 2020",
      desc: "Challenge Information:",
      descBullets: [
        "Look around you, think about what improvements a smart home could make that will improve your life.",
        "Think about the holiday season and what smart gifts/smart decor could add to the festivities.",
        "Devise a Smart Home solution (Category 1 ) / Christmas Theme Smart gift or device (Category 2).",
        "Participants can form up to teams of three (three is maximum.)",
        "First 15 teams to register will receive a development kit."
      ]
    },
    {
      schoolName: "Arduino Workshop",
      logo: require("./assets/images/2.png"),
      subHeader: "Optional workshop to learn how to use the Arduino and sensors provided in the kit",
      duration: "12th December 2020, 10 AM - 1 PM",
      desc: " ⠀ ",
      descBullets: [
        "Face-to-face workshop",
        "You will be provided reference playlists for learning"
      ]
    },
    {
      schoolName: "Idea Selection",
      logo: require("./assets/images/3.png"),
      subHeader: "",
      duration: "13th December 2020, 3 PM",
      desc: " ⠀ ",
      descBullets: [
        "You have to select the idea that you will work on and submit a 2-min pitch video before Dec 13th 3 PM local time.",
        "Teams will have the option to select from few sample ideas we have listed @ link"
      ]
    },
    {
      schoolName: "Get Building!",
      logo: require("./assets/images/4.png"),
      subHeader: "",
      duration: "13th December 2020 - 19th December 2020",
      desc: " ⠀ ",
      descBullets: [
        "Every day between 13th - 19th, an organizer will be available for 1 hour to answer your questions (in a zoom meeting)"
      ]
    },
    {
      schoolName: "Team Readiness Assessment",
      logo: require("./assets/images/5.png"),
      subHeader: "",
      duration: "17th December 2020",
      desc: " ⠀ ",
      descBullets: [
        "Each registered team will have a 10 minute slot to demonstrate their prototype.",
        "Each team has to prepare and present a pitch on their product.",
        "We recommend preparing a short video of the working demo."
      ]
    },
    {
      schoolName: "Finals",
      logo: require("./assets/images/6.png"),
      subHeader: "",
      duration: "20th December 2020",
      desc: " ⠀ ",
      descBullets: [
        "8 teams will progress to the finals.",
        "Finalist teams will present to the judges and compete for the prize & glory!",
        "The winner will be selected based on a mixture of innovativeness, learning, complexity and the pitch."
      ]
    }
  ]
}

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Junior",
      company: "",
      companylogo: require("./assets/images/student.png"),
      date: "Up to Secondary 4 students",
      desc: " ⠀ ",
      //descBullets: [
        //"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        //"Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      //]
    },
    {
      role: "Senior",
      company: "",
      companylogo: require("./assets/images/graduate.png"),
      date: "Junior College students and adults",
      desc: " ⠀ ",
      //descBullets: [
        //"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        //"Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      //]
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "saadpasta", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"false" // Set true or false to show Contact profile using Github, defaults to false
};


// Some Big Projects You have worked with your company

const bigProjects = {
  //title: "Big Projects",
  //subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  //projects: [
    //{
      //image: require("./assets/images/saayaHealthLogo.webp"),
      //link: "http://saayahealth.com/"
    //},
    //{
      //image: require("./assets/images/nextuLogo.webp"),
      //link: "http://nextu.se/"
    //}
  //]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Judging Criteria 🏆 "),
  subtitle: " ⠀ ",

  achievementsCards: [
    {
      title: "Innovation / Creativity",
      subtitle: "What sets your product apart from other similar solutions?",
      image: require("./assets/images/innovation.png"), // Icons made by <a href="https://www.flaticon.com/authors/geotatah" title="geotatah">geotatah</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
      footerLink: [
      ]
    },
    {
      title: "Product Maturity",
      subtitle: "How viable is your idea to be implemented?",
      image: require("./assets/images/maturity.png"), // Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
      footerLink: [
      ]
    },
    {
      title: "Implementation Complexity",
      subtitle: "How many of the available sensors and programs have you utilised in your idea?",
      image: require("./assets/images/complexity.png"), // Icons made by <a href="https://www.flaticon.com/authors/eucalyp" title="Eucalyp">Eucalyp</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
      footerLink: [
      ]
    },
    {
      title: "Final pitch",
      //subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      image: require("./assets/images/pitch.png"), // Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
      footerLink: [
      ]
    },
  ]
};

// Blogs Section

const blogSection = {

  //title: "Blogs",
  //subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  //blogs: [
    //{
      //url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      //title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      //description: "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    //},
    //{
      //url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      //title: "Why REACT is The Best?",
      //description: "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    //}
  //]
};

// Talks Sections

const talkSection = {
  //title: "TALKS",
  //subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

  //talks: [
    //{
      //title: "Build Actions For Google Assistant",
      //subtitle: "Codelab at GDG DevFest Karachi 2019",
      //slides_url: "https://bit.ly/saadpasta-slides",
      //event_url: "https://www.facebook.com/events/2339906106275053/"
    //}
  //]
};

// Podcast Section

const podcastSection = {
  //title: emoji("Podcast 🎙️"),
  //subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  //// Please Provide with Your Podcast embeded Link
  //podcast: ["https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"]
};

const contactInfo = {
  title: emoji("Register ☎️"),
  subtitle1: "Form a Team with your friends or family (Maximum 3 participants within a team).",
  subtitle2: "If you are not able to find a team, do sign up individually and we will help you to form a team!",
  subtitle3: "$25 per team (at least 1 SMA member)",
  subtitle4: "$35 per team (no SMA members)",
  subtitle5: "Register at:",
  number: "http://bit.ly/smakathon",
  email_address: "SMAtechforum@malayalee.org.sg"
};

//Twitter Section

const twitterDetails = {

  //userName : "twitter"//Replace "twitter" with your twitter username without @

};
export { greeting, socialMediaLinks, skillsSection, educationInfo, techStack, workExperiences, openSource, bigProjects, achievementSection, blogSection, talkSection, podcastSection, contactInfo , twitterDetails};
