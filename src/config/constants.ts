export const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'June',
  'July',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

type FooterType = {
  title: string;
  leftURL?: string;
  leftText: string;
  rightText: string;
  image: string;
  list: string[];
};

type ImageType = string;

export type ListItem = {
  tagline: string;
  image: ImageType;
  byline: string;
  date: Date;
  footer: FooterType;
};

export const resumeList = [
  {
    tagline: "Hello, I'm @dowatugkins",
    image: require('../assets/images/geekshizskull.png'),
    byline:
      'Mobile Architect, entrepreneur, creator of 4 mini-me terrors, and founder of GeekShiz.',
    date: new Date(),
    footer: {
      title: 'Also known as Doug Watkins',
      leftURL: 'https://shop.geekshiz.com',
      leftText:
        "I've been writing code for over 2 decades now, and been making mobile apps since 2013. \nI live in central Utah and love to build mobile apps, solve problems, and spend time with my family. I'm also currently creating geeky shiz for sale at **GeekShiz**.",
      rightText:
        "I'm not currently looking for employment, but that doesn't mean I'm not interested in working with you. Hit me up if any of these pique your interest:",
      image: require('../assets/images/geekshiz.png'),
      list: [
        'Consultations on Architecture',
        'Mobile app development or planning',
        'Making your app more intuitive',
        'Playing Borderlands',
        'Creating Geeky Shiz',
      ],
    },
  },
  {
    tagline: 'Consulting',
    image: require('../assets/images/geekshiz.png'),
    byline: 'Consulting and Spec work',
    date: new Date(2023, 4, 4),
    footer: {
      title: 'React Native Mobile Architect',
      leftURL: 'mailto:doug@dougwatkinsdev.com',
      leftText: `Most recently I've been consulting for Bridgenext and Varo as an Architect, helping Varo to get their app refactor from native Android and iOS to a React Native app. This contract ends soon, so if you are in need of React Native help, **email me**.`,
      rightText: `I've also been keeping busy between consulting contracts working on a new version of the My Food Storage app. Rewriting from the ground up to create a modern and easy to use app for tracking food inventory.`,
      image: require('../assets/images/varo.png'),
      list: [
        'Identify problems with code quality',
        'Research and create proposals for new architecture decisions',
        'Mentor and guide less experienced developers on React Native best practices',
        'Working with product, design, and leadership to create a quality consumer application',
      ],
    },
  },
  {
    tagline: 'Shopify',
    image: require('../assets/images/shopify-circle.png'),
    byline:
      'Worked on the merchant Inbox app, a chat app connecting customers and merchants.',
    date: new Date(2022, 5, 31),
    footer: {
      title: 'Developer L5',
      leftText:
        'I worked on a small team building both the mobile and web applications on their Inbox app. This small team worked with a much larger team that was involved with all things Shopify Chat related. We were connecting merchants to customers who were chatting on their online stores.',
      rightText:
        'Inbox was also connected to Facebook Messenger, Instagram,  Apple Business Chat, and email to allow merchants to connect with customers from multiple platforms.',
      image: require('../assets/images/shopify.png'),
      list: [
        'Cleaned up bugs and tech debt',
        'Used both REST and GraphQL to retrieve and update data',
        'Worked on the React Native Web web app, as well as the React Native mobile app',
        'Working with product, design, and leadership to create a quality consumer application',
      ],
    },
  },
  {
    tagline: 'Knock',
    image: require('../assets/images/knock-circle.png'),
    byline: 'Rebuilt iOS and Android apps using modern React Native.',
    date: new Date(2021, 1, 4),
    footer: {
      title: 'Senior Software Engineer',
      leftText:
        'I rebuilt their mobile app from the ground up. Courtesy of multiple pivots, the app was built and rebuilt several times. Using a modern custom hook based architecture, we built and tested',
      rightText:
        'much of the business logic through custom hooks and passed the relevant data through context:',
      image: require('../assets/images/knock.png'),
      list: [
        'Working with product managers to determine feasibility and direction for feature work',
        'Creating the data storage and retrieval methods within the app',
        'Building and consuming GraphQL queries to retrieve and update server side data',
        'Working with product, design, and leadership to create a quality consumer application',
      ],
    },
  },
  {
    tagline: 'Motion Auto Insurance',
    image: require('../assets/images/motion.png'),
    byline: 'Scratch built Android and iOS apps using React Native.',
    date: new Date(2019, 9, 15),
    footer: {
      title: 'Mobile Architect',
      leftText:
        'I rebuilt their mobile app from the ground up. Architecting a solution to not only achieve the required funtionality now, but also allow the framework and programming to be flexible enough to allow for ',
      rightText:
        'numerous unforseen future features to be added with minimal refactoring. I was in charge of:',
      image: require('../assets/images/motionauto.png'),
      list: [
        'Delegating development tasks',
        'Architecting the framework of the app',
        'Building multiple backend APIs for the app to consume',
        'Working with the product team and CTO to create a cohesive user facing application',
      ],
    },
  },
  {
    tagline: 'Inside Real Estate',
    image: require('../assets/images/inre.png'),
    byline: 'Took over kvCore and rebuilt their Open House app from scratch',
    date: new Date(2018, 9, 5),
    footer: {
      title: 'Senior React Native Engineer',
      leftText:
        'Took kvCore from a 3rd party developer, stabilized it, and then brought it from 2 stars to 4+. Then rebuilt their Open House app from the ground up. We also whitelabled both apps so they could be easily skinned for our customers. ',
      rightText:
        'Automated their build process, and created automated processes for building the whitelabled apps as well.',
      image: require('../assets/images/kvcore.png'),
      list: [
        'Created a team to work under my direction',
        'Significantly increased reliability and customer satisfaction',
        'Created streamlined, and simple, way to whitelable both apps',
        'Worked with the Product team and the SVP of Engineering',
      ],
    },
  },
  {
    tagline: 'Fashionphile',
    image: require('../assets/images/fashionphile.png'),
    byline: 'Moved focus from Native development to React Native Development',
    date: new Date(2017, 10, 25),
    footer: {
      title: 'Mobile Developer',
      leftText:
        'In 2 weeks, went from 0 knowledge of React Native to actively working on features in the mobile app. In 6 months, was told by my mentor that my code looked identical to his, and was capable of accomplishing all my work without his help. ',
      rightText:
        'Helped bring their mobile app to the store, using my knowledge of the iOS App Store to help navigate issues that arose because of previous apps.',
      image: require('../assets/images/fashionphileapp.png'),
      list: [
        'Learned React Native',
        'Quickly became capable on my own',
        'Was able to help management understand when certain designs should be changed',
        'Started learning the ancient art of ping-pong',
      ],
    },
  },
  {
    tagline: 'My Food Storage',
    image: require('../assets/images/geekshiz.png'),
    byline:
      'Based on my senior project, I started my path to millions in the app store.',
    date: new Date(2015, 1, 28),
    footer: {
      title: 'My first fully fledged mobile app',
      leftText:
        'Another food storage tracker, this time with everything stored locally on the phone and with no server side code. Since my experience making server side code was small, I kept it all in the app. I also re-made the app multipe times ',
      rightText:
        "since I wasn't happy with it. I then focused on the following:",
      image: require('../assets/images/mfs.jpg'),
      list: [
        'An intuitive design - my parents had to know what to do without any prompting from me or the app',
        'Speed of use - 10 seconds or less to add or remove a food item once you learned how to use the app',
        'Simple UI - how could I fit all my UI into comfortable and easily reached areas of the screen? What was the best way to nest parts of the navigation?',
      ],
    },
  },
  {
    tagline: 'Coder - Learn JavaScript',
    image: require('../assets/images/geekshiz.png'),
    byline:
      'Seeing a gap in the market, I built an app to learn website creation through practice.',
    date: new Date(2015, 7, 14),
    footer: {
      title: 'Learn by playing in a sandbox',
      leftText:
        'As I was finishing My Food Storage, I was also looking for work. Seeing that most places wanted Swift experience, I decided to make an app in swift. Around that time I also saw an article about a JS learning app. After downloading and trying it ',
      rightText:
        "I realized it missed the mark, since it didn't allow the user to actually practice what they were learning.",
      image: require('../assets/images/coder.jpg'),
      list: [
        'Learned Swift by building the entire app in 2 weeks',
        'A set of tutorials, and an open sandbox to build and run HTML, CSS, and JS files in',
        'Tutorials for basic HTML, CSS, and JavaScript were created and included as in app purchases',
        'No internet required to run',
      ],
    },
  },
  {
    tagline: 'My Food Storage 2',
    image: require('../assets/images/geekshiz.png'),
    byline:
      'Moving on, I decided I wanted a more scalable version of My Food Storage, so I built one using Firebase and Swift.',
    date: new Date(2017, 4, 9),
    footer: {
      title: 'How can I make it better?',
      leftText:
        'I was moving towards doing an app for iOS, Android, and web, so I decided to remake MFS using Firebase as the backend. This allowed for really fast syncing across all platforms. I could also set the app to keep things stored locally for my prepper friends. ',
      rightText:
        'So, I created my next swift app, adding new features discovered through doing a small kickstarter campaign.',
      image: require('../assets/images/mfs2.jpg'),
      list: [
        'Kickstarter used to get user input and testers',
        'Rebuilt with new features discovered through backers',
        'Focused more on building your food storage instead of just tracking it',
        'Will eventually be white labeled',
      ],
    },
  },
  {
    tagline: 'MFS2 back from the dead',
    image: require('../assets/images/geekshiz.png'),
    byline:
      'Life being what it can be, kids and jobs stopped my work on MFS2, but a newfound skillset started it back up.',
    date: new Date(2018, 8, 15),
    footer: {
      title: 'Lets rebuild with React Native',
      leftText:
        'Fashionphile gave me a new technology to use, one that would allow me to easily acheive my dream of making an Android and iOS version of MFS2, so I started back up with it. Recreating what I had gotten to about 90% completion took me roughly 2 ',
      rightText:
        'weeks. The project is once again stagnant due to work and my 4 mini me terrors, but will soon be under way again.',
      image: require('../assets/images/mfs2.jpg'),
      list: [
        'Took a set of designs and recreated them in React Native',
        'Further my knowledge of RN and it best practices',
        'Adding new animations and other tweaks which make an app feel more professional',
      ],
    },
  },
  {
    tagline: 'Mobile App Creation',
    image: require('../assets/images/geekshiz.png'),
    byline:
      "Initially called Integrity Designer, I started Tyrsoft to help build apps. More recently I've rebranded to GeekShiz",
    date: new Date('May 10, 2013'),
    footer: {
      title: 'Integrity is critical to me',
      leftText:
        'We chose the name of our original name carefully. Integrity was of vital importance to me, and as such needed to be part of the name. Later, trying to pick a new name, I decided that Tyr - the norse god of justice - was a name that described important characteristics to me. ',
      rightText:
        'Originally creating websites using Wordpress, now we create websites in React and mobile apps in React Native.',
      image: require('../assets/images/geekshizskull.png'),
      list: [
        'Logo Design',
        'Website design and development',
        'Mobile app design and development',
        'UX research for mobile apps',
        'Consultations on any of the above',
      ],
    },
  },
  {
    tagline: 'Aggies all the way!',
    image: require('../assets/images/usu.png'),
    byline:
      'BA in MIS Database Administration emphasis, CS Minor, and 2 years of German',
    date: new Date(2013, 6, 10),
    footer: {
      title: 'Utah State Alumni',
      leftText:
        "First majoring in Computer Engineering, then Computer Science, and finally Management Information Systems. I originally wanted to make video games - since I was 13 - but realized it didn't offer the Family Life I wanted. During my final project I created an iOS app ",
      rightText:
        'and fell in love with making mobile apps. Teaching myself Objective-C and using the API created by my teammates we sucessuflly delivered a working food storage tracker.',
      image: require('../assets/images/usu.png'),
      list: [
        '2 years of German Language',
        'CS classes taught me how to think properly',
        'Found my passion in making mobile apps',
      ],
    },
  },
  {
    tagline: 'Heward Ranch App',
    image: require('../assets/images/usu.png'),
    byline:
      'Built an iOS barcode scanning app, to easily add and remove food storage inventory.',
    date: new Date(2012, 11, 15),
    footer: {
      title: 'My Senior Project',
      leftText:
        'Working with my team, we built a MySQL backed website and API to track the food storage of a ranch in the middle of nowhere. The ranch was tracking food manually on index cards. Our system allowed them to cut DAYS of work every year since ',
      rightText:
        'tracking a whole years worth of food for 20 or so people. The iOS app was the main source of interacting with the DB. I learned the following:',
      image: require('../assets/images/heward.jpg'),
      list: [
        'Obj-C and building iOS apps',
        'How to integrate with open source',
        'How to communicate with an API',
        'Keep the data processing where it should be, on the server',
      ],
    },
  },
  {
    tagline: 'High School HiJinx',
    image: require('../assets/images/c++.png'),
    byline: 'My current career path all started back here.',
    date: new Date(2003, 5, 1),
    footer: {
      title: 'Computer Progamming',
      leftText:
        'I already knew I wanted to make games, but my Junior year of high school I started doing something about it. I instantly fell in love with the process of writing software. I love puzzles and software is the ultimate puzzle. I also found out I have a natural knack for writing ',
      rightText:
        'code, and was usually the first done with my work, and the person everyone came to with questions. Also, with admin rights, because of working for the sys admin at school, I also knew how to bend the rules, and had rights to do things such as installing and playing Unreal Tournament.',
      image: require('../assets/images/unreal.png'),
      list: [],
    },
  },
];
