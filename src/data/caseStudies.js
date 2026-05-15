//data stucture for case studies

//icons to display with case study categories
import roleIcon from "../assets/icons/Role.svg";
import problemIcon from "../assets/icons/Warning.svg";
import goalIcon from "../assets/icons/Goal.svg";
import researchIcon from "../assets/icons/Search.svg";
import painPointsIcon from "../assets/icons/PainPoint.svg";
import personaIcon from "../assets/icons/Persona.svg";
import wireframesIcon from "../assets/icons/Wireframe.svg";
import designSystemIcon from "../assets/icons/Design.svg";
import prototypesIcon from "../assets/icons/Prototype.svg";
import usabilityStudiesIcon from "../assets/icons/UsabilityStudy.svg";
import accessibilityIcon from "../assets/icons/Accessibile.svg";
import finalDesignIcon from "../assets/icons/FinalDesign.svg";
import userFeedbackIcon from "../assets/icons/Feedback.svg";
import takeawaysIcon from "../assets/icons/Takeaways.svg";
import nextStepsIcon from "../assets/icons/NextSteps.svg";
import bookIcon from "../assets/icons/book.svg";
import laptopIcon from "../assets/icons/laptopIcon.svg";
import featuresIcon from "../assets/icons/features.svg";
import developmentIcon from "../assets/icons/development.svg";

//images

// CAMPSTORE
import campstoreHeaderImg from "../assets/images/campstore/campstorePreview-doublescreen.png";
import campstoreImg from "../assets/images/campstore/campstore.png";
import campstoreWireframe1 from "../assets/images/campstore/campstore_wireframe1.png";
import campstoreWireframe2 from "../assets/images/campstore/campstore_wireframe2.png";
import campstoreWireframe3 from "../assets/images/campstore/campstore_wireframe3.png";
import campstoreWireframe4 from "../assets/images/campstore/campstore_wireframe4.png";
import campstoredesign1 from "../assets/images/campstore/campstore_designsystem1.png";
import campstoredesign2 from "../assets/images/campstore/campstore_designsystem2.png";
import personaCampStore from "../assets/images/persona.png";
import campstorelofi from "../assets/images/campstore/campstore_lofi_prototype.png";
import campstorefinalDesign1 from "../assets/images/campstore/campstore_finalDesign1.png";
import campstorefinalDesign2 from "../assets/images/campstore/campstore_finalDesign2.png";

// OHC
import OHCImg from "../assets/images/oceanharbor.png";
import OHC_final1 from "../assets/images/OHC/OHC_final1.png";
import OHC_final2 from "../assets/images/OHC/OHC_Final2.png";

// DINE OR DITCH
import dineOrDitchImg from "../assets/images/dineorditch.png";
import DineConstructionImg from "../assets/images/DineOrDitch/DineOrDitch_construction.png";

//THERMOSTAT
import thermostatImg from "../assets/images/thermostat.png";
import thermostatDiagram from "../assets/images/thermostat/thermostat_diagram.png";

//SOS- MORSE CODE
import SOSImg from "../assets/images/SOS.png";
import morseDiagram from "../assets/images/sos/MORSECODE_Diagram.png";

// INVENTORY MANAGEMENT
import inventoryImg from "../assets/images/inventory.png";
import inventoryHeaderImg from "../assets/images/inventory-bar/inventoryHeader.png";
import inventory_final1 from "../assets/images/inventory-bar/inventory_final1.png";
import inventory_final2 from "../assets/images/inventory-bar/inventory_final2.png";

//ANDROID APP - Inventroy TRACKING
import androidAppImg from "../assets/images/AndroidApp/Android1.png";
import androidAppImg2 from "../assets/images/AndroidApp/Android2.png";
import androidAppCodeImg from "../assets/images/development-iMac-24-inch.png";

export const caseStudies = [
  {
    // CAMPSTORE - UX DESIGN
    mainImage: campstoreImg,
    caseStudyHeaderImage: campstoreHeaderImg,
    featured: true,
    overViewIcon: bookIcon,
    bgColor: "#8DA293",
    title: "Camp Store App",
    type: "UX Case Study",
    description: "UX Design",
    summary:
      "The Camp Store app gives campers a faster, easier way to shop by letting them browse items, check product details, and place orders without waiting in line. It also keeps users informed about current inventory, special offers, and upcoming events at their campground.",
    catchPhrase: "Camp More, Stress Less!",
    timeline: "4 Months",
    tools: "Figma",
    palette: [
      "rgba(217, 199, 162, 0.1)",
      "rgba(230, 126, 34, 0.1)",
      "rgba(46, 83, 57, 0.1)",
      "rgba(0, 0, 0, 0.1)",
    ],

    categories: {
      overview: {
        type: "overview",
        title: "Overview",
        icon: bookIcon,
        catchPhrase: "Camp More, Stress Less!",
        summary:
          "The Camp Store app gives campers a faster, easier way to shop by letting them browse items, check product details, and place orders without waiting in line. It also keeps users informed about current inventory, special offers, and upcoming events at their campground.",
        image: campstoreHeaderImg,
        role: "Lead UX Designer",
        timeline: "4 Months",
        tools: "Figma",
      },
      myRole: {
        type: "text",
        title: "My Role",
        icon: roleIcon,
        headline: "Lead UX Designer",
        description:
          "I was the Lead UX Designer for this project. I guided the design process from early research to polished prototypes. My work included conducting user research, shaping user stories, organizing the information architecture, and creating wireframes and high-fidelity designs in Figma.",
      },
      problem: {
        type: "text",
        title: "Problem",
        icon: problemIcon,
        headline: "Waiting Instead of Relaxing",
        description:
          "Campers often face long lines at the camp store, which takes time away from relaxing and enjoying nature. The lack of a convenient ordering system creates frustration and disrupts the overall camping experience.",
      },
      goal: {
        type: "text",
        title: "Goal",
        icon: goalIcon,
        headline: "Create an Accessible App",
        description:
          "Create a mobile app that enables campers to place store orders ahead of time and access campground event information directly from their phones. More time for s’mores, less time in line.",
      },
      userResearch: {
        type: "text",
        title: "User Research",
        icon: researchIcon,
        headline: "Reduce Bias",
        description:
          "After living in a campground for a summer, I developed two user personas based on real people I met there. I intentionally included underrepresented demographics to reduce bias and reflect a broader range of abilities and perspectives. \n\nThese personas informed a focused, moderated usability study with five participants ages 30–75, including an individual with a motor function impairment. The study aimed to quickly validate the low-fidelity prototype’s ordering process while collecting insights tied to key business metrics: increasing sales and event attendance while reducing delivery time.",
      },
      painPoints: {
        type: "block",
        title: "Pain Points",
        icon: painPointsIcon,
        items: [
          {
            title: "Live Inventory",
            description:
              "Campers can not see whether items are in stock before hiking to the store.",
          },
          {
            title: "Pick Up Orders",
            description:
              "Campers must visit the store multiple times to check if orders are ready.",
          },
          {
            title: "Long Lines",
            description: "Checkout lines grow during peak hours.",
          },
          {
            title: "Tiny Labels",
            description:
              "Small text and unclear pricing make products diffiuclt to read.",
          },
        ],
      },
      persona: {
        type: "image",
        title: "Persona",
        icon: personaIcon,
        images: [personaCampStore],
        imageDescriptions: ["Persona Card Created By Joann Carter"],
      },
      wireframes: {
        type: "image",
        title: "Wireframes",
        icon: wireframesIcon,
        images: [
          campstoreWireframe1,
          campstoreWireframe2,
          campstoreWireframe3,
          campstoreWireframe4,
        ],
        imagesIntro:
          "Paper sketches were translated into digital wireframes to define the structure of the ordering flow and event browsing experience.",
        imageDescriptions: ["Responsive Wireframes"],
      },
      designSystem: {
        type: "image",
        title: "Design System",
        icon: designSystemIcon,
        images: [campstoredesign1, campstoredesign2],
        imageDescriptions: ["Example Components", "Sticker Sheet"],
      },
      prototypes: {
        type: "prototype",
        title: "Prototype",
        icon: prototypesIcon,
        description:
          "This is the first prototype for the camp store. The bottom navigation tabs are Home, Events, Weather, and Profile. The cart is accessed from the top right of the home page.",
        buttonText: "Lo-Fi Prototype",
        link: "https://www.figma.com/proto/jriTfKyq2FG2ypO0JcesR7/CAMP-STORE-APP-prototype-update.1?node-id=0-1&t=NivYPPN1VYXImYGF-1",
        images: [campstorelofi],
      },
      usabilityStudies: {
        type: "usability",
        title: "Usability Studies",
        icon: usabilityStudiesIcon,
        headline: "Two Rounds",
        intro:
          "I carried out two rounds of usability studies. Insights from the first study helped guide the designs from wireframes to mockups. The second study used a high-fidelity prototype to reveal what areas needed refining.",
        rounds: [
          {
            label: "Round 1 Findings",
            subtitle: "Low-Fidelity Prototype",
            items: [
              "Users need <strong>more detail</strong> to understand the app.",
              "Users want to <strong>navigate</strong> between event dates.",
              "Users find the <strong>events</strong> exciting.",
            ],
          },
          {
            label: "Round 2 Findings",
            subtitle: "High-Fidelity Prototype",
            items: [
              "The <strong>cart icon</strong> is confusing.",
              "The <strong>profile tab</strong> is mislabeled.",
            ],
          },
        ],
      },
      Accessibility: {
        type: "block",
        title: "Accessibility",
        icon: accessibilityIcon,
        items: [
          {
            title: "Contrasting Colors",
            description:
              "High contrast colors were used to enhance readability and support users with visual impairments.",
          },
          {
            title: "Large Buttons",
            description:
              "Buttons met the 48 x 48 pixel minimum touch target size to support accessible interaction.",
          },
          {
            title: "Information Hierarchy",
            description:
              "Consistent navigation and information hierarchy were used to reduce cognitive load.",
          },
        ],
      },
      finalDesign: {
        type: "final design",
        title: "Final Design",
        icon: finalDesignIcon,
        buttonText: "Final Prototype",
        link: "https://www.figma.com/proto/jriTfKyq2FG2ypO0JcesR7/CAMP-STORE-APP-prototype-update.1?node-id=4111-257&t=NivYPPN1VYXImYGF-1",
        buttonDescription: "View the final prototype on Figma.",
        images: [campstorefinalDesign1, campstorefinalDesign2],
      },

      userFeedback: {
        type: "feedback",
        title: "User Feedback",
        icon: userFeedbackIcon,
        quotes: [
          "'If I was at a campground with my kids, this would make things easier!'",
          "'Simple… intuitive and easy!'",
        ],
      },
      takeaways: {
        type: "text",
        title: "Takeaways",
        icon: takeawaysIcon,
        headline: "Realistic Content Matters",
        description:
          "I learned that low fidelity placeholders (text blocks and wireframe image boxes) were not intuitive for the user during the initial testing phase. Realistic content is essential for accurate user feedback.",
      },
      nextSteps: {
        type: "block",
        title: "Next Steps",
        icon: nextStepsIcon,
        items: [
          {
            title: "More Testing",
            description:
              "Conduct follow-up usability testing on the newest designs on all screen sizes and platforms.",
          },
          {
            title: "Field Testing",
            description:
              "Deploy the prototype at a campground to test the functionality outdoors and in real time.",
          },
          {
            title: "Revenue",
            description:
              "Measure increases in store sales, event participation, and user retention.",
          },
        ],
      },
    },
  },

  {
    // OHC - FULL STACK
    mainImage: OHCImg,

    caseStudyHeaderImage: OHCImg,
    featured: false,
    overViewIcon: bookIcon,
    bgColor: "#A2C9C9",
    title: "Ocean Harbor Condominium",
    type: "Full Stack Development Case Study",
    description: "Full Stack Development",
    summary:
      "This website serves a condominium association in Florida. It features a public section with information for those interested in visiting Ocean Harbor, and a private residents-only portal for community interaction and exclusive resources.",
    catchPhrase: "Explore. Connect. Belong.",
    timeline: "1 year",
    tools: "JavaScript, Wix",
    palette: [
      "rgba(24, 193, 192, 0.1)", //cyan blue
      "rgba(68, 87, 109, 0.2)", //navy
      "rgba(217, 217, 217, 0.2)", //light grey
      "rgba(255, 255, 255, 0.1)", //white
    ],

    categories: {
      overview: {
        type: "overview",
        title: "Overview",
        icon: bookIcon,
        catchPhrase: "Explore. Connect. Belong.",
        summary:
          "This website serves a condominium association in Florida. It features a public section with information for those interested in visiting Ocean Harbor, and a private residents-only portal for community interaction and exclusive resources.",
        image: OHCImg,
        role: "Lead Developer & Designer",
        timeline: "1 year",
        tools: "JavaScript, Wix",
      },
      myRole: {
        type: "text",
        title: "My Role",
        icon: roleIcon,
        headline: "Lead Developer & Designer",
        description:
          "I thoroughly reviewed the old site, noting areas for improvement, and created several wireframes. I worked closely with the client, discussing different use cases to decide on the functionality that best suited their needs. I then redesigned and published a brand-new website using Wix, incorporating custom JavaScript to dynamically show or hide information based on user interactions.",
      },
      finalDesign: {
        type: "final design",
        title: "Final Design",
        icon: finalDesignIcon,
        buttonText: "Final Prototype",
        link: "",
        buttonDescription: "",
        images: [OHC_final1, OHC_final2],
      },
      takeaways: {
        type: "text",
        title: "Takeaways",
        icon: takeawaysIcon,
        headline: "Strong Communication Builds Stronger Prototypes",
        description:
          "Looking back, I would collaborate closely with the client to obtain all required content before commencing the layout design process. And, I would create detailed mockups that incorporate interactive elements to provide a realistic user experience.",
      },
      nextSteps: {
        type: "block",
        title: "Next Steps",
        icon: nextStepsIcon,
        items: [
          {
            title: "Content Alignment",
            description:
              "Collaborate with the association to gather complete, up‑to‑date content before redesigning key pages, ensuring accuracy and reducing revision cycles.",
          },
          {
            title: "Resident Portal Testing",
            description:
              "Conduct usability testing with actual residents to validate navigation, account access, and community‑specific features across devices.",
          },
          {
            title: "Admin Workflow Improvements",
            description:
              "Work with board members to streamline how announcements, documents, and updates are posted, improving long‑term maintainability.",
          },
        ],
      },
    },
  },
  {
    // DINE OR DITCH - FULL STACK
    mainImage: dineOrDitchImg,

    caseStudyHeaderImage: DineConstructionImg,
    featured: false,
    overViewIcon: bookIcon,
    bgColor: "#FFDFB1",
    title: "Dine or Ditch",
    type: "Full Stack Development Case Study",
    description: "Full Stack Development",
    summary:
      "Dine or Ditch is a mobile application designed to assist users in choosing dining options based on their preferences, location, and current mood. The app provides a curated list of restaurant recommendations, helping users quickly decide where to eat with minimal hassle.",
    catchPhrase: "Your Next Meal, Simplified.",
    timeline: "1 year",
    tools: "JavaScript, React Native",
    palette: [
      "rgba(0, 168, 0, 0.1)", //green
      "rgba(210, 0, 0, 0.2)", //red
      "rgba(166, 166, 166, 0.2)", //light grey
      "rgba(0, 0, 0, 0.1)", //black
    ],

    categories: {
      overview: {
        type: "overview",
        title: "Overview",
        icon: bookIcon,
        catchPhrase: "Your Next Meal, Simplified.",
        summary:
          "Dine or Ditch is a mobile application designed to assist users in choosing dining options based on their preferences, location, and current mood. The app provides a curated list of restaurant recommendations, helping users quickly decide where to eat with minimal hassle.",
        image: DineConstructionImg,
        role: "Lead Developer & Designer",
        timeline: "1 year",
        tools: "JavaScript, React Native",
      },
      myRole: {
        type: "text",
        title: "My Role",
        icon: roleIcon,
        headline: "Lead Developer & Designer",
        description:
          "I have developed the backend, implementing RESTful APIs to manage data flow and securely access restaurant listings. As the full-stack developer, I was responsible for ensuring all components integrated smoothly. Throughout the process, I conducted extensive testing and prototyping, including unit, integration, and end-to-end testing, to ensure the app’s reliability and quality at every stage. The UX for this App is currently under construction.",
      },

      takeaways: {
        type: "text",
        title: "Takeaways",
        icon: takeawaysIcon,
        headline: "Better UX, Better Code, Better App.",
        description:
          "I should have started with the UX of this app first. Once that is completed, I will need to redo the front end logic and possibly the back end to make sure the app is coded securely.",
      },
      nextSteps: {
        type: "block",
        title: "Next Steps",
        icon: nextStepsIcon,
        items: [
          {
            title: "UX Redesign",
            description:
              "Complete the full UX design to establish clear user flows, mood‑based decision paths, and a cohesive visual direction before rebuilding the interface.",
          },
          {
            title: "Frontend Refactor",
            description:
              "Rebuild the frontend logic to align with the finalized UX, improving component structure, state management, and overall performance.",
          },
          {
            title: "Backend Hardening",
            description:
              "Review and update backend endpoints to ensure secure data handling, improved validation, and scalable architecture as new features are introduced.",
          },
        ],
      },
    },
  },
  {
    // THERMOSTAT EMBEDDED SYSTEMS
    mainImage: thermostatImg,
    caseStudyHeaderImage: thermostatImg,
    featured: false,
    overViewIcon: bookIcon,
    bgColor: "#E7E7E7",
    title: "Thermostat",
    type: "Embedded Systems Case Study",
    description: "Embedded Systems",
    summary:
      "This project leverages a TI microcontroller to implement a basic thermostat system. The thermostat utilizes a set of buttons to adjust the desired temperature. A temperature sensor continuously monitors the ambient temperature, and an LED is controlled to simulate heating or cooling based on the set point and current temperature.",
    catchPhrase: "Multi‑Peripheral Design.",
    sourceCode: "https://github.com/lioness3/EmbeddedSystems",
    timeline: "1 week",
    tools: "C, Lucidchart",
    palette: [],

    categories: {
      overview: {
        type: "overview",
        title: "Overview",
        icon: bookIcon,
        catchPhrase: "Multi‑Peripheral Design.",
        summary:
          "This project leverages a TI microcontroller to implement a basic thermostat system. The thermostat utilizes a set of buttons to adjust the desired temperature. A temperature sensor continuously monitors the ambient temperature, and an LED is controlled to simulate heating or cooling based on the set point and current temperature.",
        image: thermostatImg,
        role: "Engineering a Microcontroller System",
        timeline: "1 week",
        tools: "C, Lucidchart",
        sourceCode: "https://github.com/lioness3/EmbeddedSystems",
      },
      myRole: {
        type: "text",

        title: "My Role",
        icon: roleIcon,
        headline: "Engineering a Microcontroller System",
        description:
          "In this project, I successfully integrated multiple peripherals, including buttons, LEDs, temperature sensors, and timers, with the microcontroller. I developed firmware to read sensor data, process user input, and control the LED output based on temperature comparisons. Additionally, I implemented clear and concise code with comprehensive comments to enhance readability and maintainability.",
      },
      wireframes: {
        type: "image",
        title: "Wireframes",
        icon: wireframesIcon,
        images: [thermostatDiagram],
        imagesIntro:
          "The thermostat is adjusted using an up and down button to change the set point for the desired temperature. Then, the temperature sensor is read from the board and an LED light is either turned on or off depending on the current state of the program. If the set point is lower than the room temperature, the light is turned off. If the set point is higher, the light is ON to replicate a heater.",
        imageDescriptions: ["Lucidchart was used to create this diagram."],
      },
      takeaways: {
        type: "text",
        title: "Takeaways",
        icon: takeawaysIcon,
        headline: "Refining the System Ahead.",
        description:
          "While this project provides a strong foundation in microcontroller programming, there are opportunities for improvement. The code could benefit from refactoring to enhance efficiency and readability. Implementing robust error handling mechanisms would increase the system's reliability. Exploring additional features like calibration, hysteresis, or remote control could further expand the functionality of the thermostat. Finally, a more user-friendly interface, such as an LCD display or a mobile app, could enhance the user experience.",
      },
    },
  },
  {
    // SOS- MORSE CODE EMBEDDED SYSTEMS
    mainImage: SOSImg,
    caseStudyHeaderImage: SOSImg,
    featured: false,
    overViewIcon: bookIcon,
    bgColor: "#D6ABA5",
    title: "SOS",
    type: "Embedded Systems Case Study",
    description: "Embedded Systems",
    summary:
      "This project demonstrates the application of state machines and GPIO pins to create a Morse code SOS signal. The device cycles through the SOS pattern using two LEDs until a user-initiated button press triggers a different LED sequence to signal an 'OK' message.",
    catchPhrase: "From 'SOS' to 'OK', Done in Code.",
    sourceCode: "https://github.com/lioness3/EmbeddedSystems",
    timeline: "1 week",
    tools: "C, Lucidchart, TI LaunchPad",
    palette: [],

    categories: {
      overview: {
        type: "overview",
        title: "Overview",
        icon: bookIcon,
        catchPhrase: "From 'SOS' to 'OK', Done in Code.",
        summary:
          "This project demonstrates the application of state machines and GPIO pins to create a Morse code SOS signal. The device cycles through the SOS pattern using two LEDs until a user-initiated button press triggers a different LED sequence to signal an 'OK' message.",
        image: SOSImg,
        role: "Coding Clear Signals With Simple Hardware",
        timeline: "1 week",
        tools: "C, Lucidchart, TI LaunchPad",
        sourceCode: "https://github.com/lioness3/EmbeddedSystems",
      },
      myRole: {
        type: "text",

        title: "My Role",
        icon: roleIcon,
        headline: "Coding Clear Signals With Simple Hardware",
        description:
          "In this project, I successfully implemented a state machine in C to control the LED sequences and button input. I also configured and utilized GPIO pins to interface with the LEDs and button. Additionally, I thoroughly documented the code, making it easy to understand and modify.",
      },
      wireframes: {
        type: "image",
        title: "Wireframes",
        icon: wireframesIcon,
        images: [morseDiagram],
        imagesIntro:
          "The diagram illustrates how the system transitions between SOS flashing, a pause state, and an OK signal depending on button presses.",
        imageDescriptions: ["Lucidchart was used to create this diagram."],
      },
      takeaways: {
        type: "text",
        title: "Takeaways",
        icon: takeawaysIcon,
        headline: "Refining the System Ahead.",
        description:
          "While this project successfully demonstrates state‑machine logic and GPIO control, there is still room for refinement. Improving the code’s modularity and readability through refactoring would strengthen its structure, and adding error‑handling would make the system more robust. Future enhancements such as, customizable Morse sequences, wireless features, or expanded user interaction could further elevate the project. Overall, this work sharpened my ability to navigate the TI manual and reinforced skills I can confidently carry into more advanced embedded projects.",
      },
    },
  },
  {
    // INVENTORY - FULL STACK
    mainImage: inventoryImg,
    caseStudyHeaderImage: inventoryHeaderImg,
    featured: false,
    overViewIcon: bookIcon,
    bgColor: "#AFA39C",
    title: "Inventory",
    type: "Full Stack Development Case Study",
    description: "Full Stack Development",
    summary:
      "Bar Inventory is a mock website created for a fictional bar company called 'Glass'. This site serves as a basic inventory management tool, allowing users to add beer kegs to the system and display them on the main screen.",
    catchPhrase: "Track Kegs. Stay Stocked.",
    timeline: "1 day",
    tools: "JavaScript, HTML, CSS, REACT",
    palette: [
      "rgba(149, 172, 172, 0.1)", //slate grey
      "rgba(56, 24, 18, 0.1)", //brown
      "rgba(238, 0, 0, 0.1)", //red
      "rgba(0, 0, 0, 0.1)", //black
    ],

    categories: {
      overview: {
        type: "overview",
        title: "Overview",
        icon: bookIcon,
        catchPhrase: "Track Kegs. Stay Stocked.",
        summary:
          "Bar Inventory is a mock website created for a fictional bar company called 'Glass'. This site serves as a basic inventory management tool, allowing users to add beer kegs to the system and display them on the main screen.",
        image: inventoryHeaderImg,
        role: "Lead Developer",
        timeline: "1 day",
        tools: "JavaScript, HTML, CSS, REACT",
      },
      myRole: {
        type: "text",
        title: "My Role",
        icon: roleIcon,
        headline: "Lead Developer",
        description:
          "As the sole developer on this project, I was responsible for designing and implementing the entire application from start to finish. This included setting up a solid React structure to ensure a scalable, maintainable codebase and applying UI design principles to create an intuitive user experience. The project served as a code review challenge, where I demonstrated my foundational knowledge in React components, state management, and component-based architecture. I also focused on creating a cohesive visual design, carefully considering layout, styling, and interaction to align with the needs of a simple inventory management system.",
      },
      finalDesign: {
        type: "final design",
        title: "Final Design",
        icon: finalDesignIcon,
        buttonText: "Final Prototype",
        link: "",
        buttonDescription: "",
        images: [inventory_final1, inventory_final2],
      },

      takeaways: {
        type: "text",
        title: "Takeaways",
        icon: takeawaysIcon,
        headline: "Refining the Process for Better UI.",
        description:
          "Reflecting on this project, I would invest more time in the design phase, starting with detailed mockups and a well-defined color palette, rather than choosing colors directly from the site to use in my demo. Additionally, I would create sample data to improve the visual consistency and usability of the interface.",
      },

      nextSteps: {
        type: "block",
        title: "Next Steps",
        icon: nextStepsIcon,
        items: [
          {
            title: "Enhance UI Consistency",
            description:
              "Introduce a defined color palette, typography system, and sample data to create a more polished and realistic interface.",
          },
          {
            title: "Expand Inventory Features",
            description:
              "Add support for editing, removing, and updating keg entries to create a more complete inventory workflow.",
          },
          {
            title: "Improve Data Structure",
            description:
              "Refactor how items are stored to support future scalability, such as categories, quantities, and keg status tracking.",
          },
        ],
      },
    },
  },
  {
    // INVENTORY TRACKING ANDROID APP
    mainImage: androidAppCodeImg,
    caseStudyHeaderImage: androidAppCodeImg,
    featured: false,
    overViewIcon: bookIcon,
    bgColor: "#b9d9fd",
    title: "Inventory Tracking Android App",
    type: "Mobile App Development",
    description: "Android Development & SQLite",
    summary:
      "A user-friendly Android application designed to simplify inventory management. The app enables users to efficiently add, edit, and delete inventory items with real-time quantity tracking. Built with robust user authentication and SQLite integration, it provides a secure and reliable solution for managing inventory data with ease.",
    catchPhrase: "Track Smart, Manage Simple",
    timeline: "Ongoing Development",
    tools: "Android Studio, Java, SQLite",
    palette: [
      "rgba(136, 8, 8, 0.1)", //red
      "rgba(26, 82, 118, 0.1)", //blue
      "rgba(84, 153, 199, 0.1)", //light blue
      "rgba(211, 211, 211 0.1)", //light grey
    ],

    categories: {
      overview: {
        type: "overview",
        title: "Overview",
        icon: bookIcon,
        catchPhrase: "Track Smart, Manage Simple",
        summary:
          "I developed this Android application end‑to‑end, designing and architecting the user interface for a seamless experience while integrating SQLite for secure, reliable data persistence. I implemented user authentication and account creation to protect access, and ensured overall stability through rigorous testing and debugging.",
        image: androidAppCodeImg,
        role: "Full-Stack Developer",
        timeline: "Ongoing Development",
        tools: "Android Studio, Java, SQLite",
        sourceCode: "https://github.com/lioness3/InventoryTrackingAndroidApp",
      },

      myRole: {
        type: "text",
        title: "My Role",
        icon: roleIcon,
        headline: "Full-Stack Developer",
        description:
          "As the developer for this project, I designed and implemented a complete Android application from the ground up. My responsibilities included architecting the user interface for seamless interaction, integrating SQLite for reliable data persistence, implementing secure user authentication and account creation systems, and conducting rigorous testing and debugging to ensure stability and reliability.",
      },

      problem: {
        type: "text",
        title: "Problem",
        icon: problemIcon,
        headline: "Inventory Management Complexity",
        description:
          "Traditional inventory tracking methods are time-consuming and error-prone. Users struggle to efficiently manage items, track quantities, and maintain secure access to inventory data. The lack of a dedicated, secure mobile solution creates friction in everyday inventory management workflows.",
      },

      goal: {
        type: "text",
        title: "Goal",
        icon: goalIcon,
        headline: "Simplify Inventory Management",
        description:
          "Create a secure, user-friendly Android application that enables users to quickly and easily manage their inventory. The app prioritizes simplicity and core functionality, allowing users to add, edit, and delete items with real-time quantity updates while ensuring data security through authentication and reliable storage.",
      },

      technology: {
        type: "text",
        title: "Technology Stack",
        icon: laptopIcon,
        headline: "Modern Android Development",
        description:
          "Built with Java in Android Studio, the application leverages SQLite for robust local data storage and retrieval. The architecture prioritizes data persistence and security, with a clean, intuitive user interface designed for accessibility and ease of use.",
      },

      keyFeatures: {
        type: "block",
        title: "Key Features",
        icon: featuresIcon,
        items: [
          {
            title: "User Authentication",
            description:
              "Secure login and account creation system to protect user data and control access to the application.",
          },
          {
            title: "Inventory Management",
            description:
              "Easily add, edit, and delete inventory items with real-time quantity tracking.",
          },
          {
            title: "SQLite Integration",
            description:
              "Reliable data persistence and retrieval with SQLite database for secure, local storage.",
          },
        ],
      },

      development: {
        type: "text",
        title: "Development Process",
        icon: developmentIcon,
        headline: "From Design to Implementation",
        description:
          "The development process began with careful UI design to ensure a seamless user experience. The SQLite database was integrated to provide reliable data persistence. User authentication was implemented using secure practices to protect sensitive user information. Throughout the development cycle, rigorous testing and debugging ensured the app's stability, reliability, and performance across different Android devices.",
      },

      accessibility: {
        type: "block",
        title: "Design Principles",
        icon: accessibilityIcon,
        items: [
          {
            title: "Simplicity First",
            description:
              "Focused on core inventory management features without unnecessary complexity.",
          },
          {
            title: "User-Centric Design",
            description:
              "Intuitive interface designed for users of varying technical expertise.",
          },
          {
            title: "Data Security",
            description:
              "Authentication and secure storage protect user data and control system access.",
          },
        ],
      },

      nextSteps: {
        type: "block",
        title: "Next Steps",
        icon: nextStepsIcon,
        items: [
          {
            title: "Password Reset",
            description:
              "Implement secure password recovery functionality for enhanced account management.",
          },

          {
            title: "Barcode Scanning",
            description:
              "Integrate barcode scanning to streamline item entry and tracking processes.",
          },

          {
            title: "Role-Based Access",
            description:
              "Implement user role-based permissions for advanced access control and team collaboration.",
          },
        ],
      },

      takeaways: {
        type: "text",
        title: "Takeaways",
        icon: takeawaysIcon,
        headline: "Building Foundation for Scalability",
        description:
          "This version of the app provides a solid foundation for inventory management. The focus on core functionality and user experience ensures reliability and ease of use. The architecture and implementation practices establish a strong base for future enhancements, allowing the app to evolve into a comprehensive and powerful inventory management solution.",
      },
    },
  },
];
