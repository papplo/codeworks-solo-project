
# Tellus
Tellus, an imaginary social digest based to discover stories, events and memories made by users in your vicinity. MVP made in early June 2018, to be continued...

[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/contains-technical-debt.svg)](https://forthebadge.com)


#### Codeworks is a 12-week Javascript Bootcamp
Where i attend in the April 2018-batch, this is our first soloproject where we get to create a full-stack application using frameworks of our choice.

 #### Collaborators on project:
> - Juha Silventoinen, Ux-, Ui-design
- Pablo Anttila, Full stack development

---

![Tellus Splash](https://github.com/papplo/codeworks-solo-project/raw/master/tellus.png)
# TELLUS: an imaginary social digest based on your location and interests.
Main focus of project has been to investigate PWA: "progressive web apps", and the capabilities a non-native app has of your client (mobile, desktop, etc).

[https://tellus.now.sh](http://tellus.now.sh)
[tellus.local](http://pablos-macbook-pro.local:3000/)

#### What is a PWA and what makes it interesting?
- [Google presents their view on PWA](https://developers.google.com/web/progressive-web-apps/#engaging)

#### Features you might not know are accessible in js/html5/css/ on desktop/mobile:
- [whatwebcando.today](https://whatwebcando.today/)

#### Advantages over native apps:
- Low friction in distribution
- Get discovered
- Links and bookmarks
- Push updates in background, always be fresh!

---
## </> Powered By: M.E.R.N
![picture alt](https://github.com/papplo/codeworks-solo-project/raw/master/mern-stack.png "Powered by Mern")

    REPO: Codeworks-solo-project
    ├── client                  # Frontend with Create React App Boilerplate
    ├── server                  # Backend with Node.js, Express, Mongoose
    └── README.md               # That's _me_ folks!

#### FRONTEND:

    ├── client
    │   ├── build                  # Compiled files with `npm run build`
    │   ├── public                 # Static files such as images and logos
    │   ├── src                    # Source files (devs look here!)
    │   │   ├── actions            # Redux actions
    │   │   ├── components         # Functional react components separated in folders
    │   │   ├── components-styled  # Styled components to replicate ui concistently
    │   │   ├── containers         # Class components that hold state and thus data
    │   │   ├── reducers           # Redux reducers
    │   │   ├── App.js, .css       # Main App component
    │   │   ├── Index.js, .css     # Starting point of App
    │   │   ├── store.js           # Redux store
    │   ├── package.json           # NPM dependencies
    │   ├── .gitignore             # local gitignore from create-react-app
    │   └── README.md              # Guide for create-react-app

Frontend NODE PACKAGES
```
└─
  "react": "^16.4.0",
  "react-dom": "^16.4.0",
  "react-helmet": "^5.2.0",
  "react-images-upload": "^1.1.99",
  "react-redux": "^5.0.7",
  "react-router-dom": "^4.3.1",
  "react-scripts": "1.1.4",
  "redux": "^4.0.0",
  "redux-thunk": "^2.3.0",
  "react-transition-group": "^2.3.1",
  "styled-components": "^3.3.2",
  "moment": "^2.22.2",
  "confetti-js": "0.0.11",
  "typeface-open-sans": "0.0.54"
  ```

#### BACKEND:

    ├── server
    │   ├── src                    # Source files (devs look here!)
    │   │   ├── controller         # Controllers for Nodes and Users
    │   │   ├── middleware         # Cors is not a middleware (blame Arol)
    │   │   ├── model              # Models for node and user
    │   │   ├── router             # Router for all API urls
    │   │   ├── server.js          # Main server logic
    │   ├── index.js               # Starting point of server and
    │   ├── package.json           # NPM dependencies and server commands `scripts:`
    │   └── README.md              # Empty readme to document our enpoints and server commands

Backend Node Packages:
```
└─
  "atob": "^2.1.1",
  "bcrypt": "^2.0.1",
  "body-parser": "^1.18.3",
  "cookie-parser": "^1.4.3",
  "cors": "^2.8.4",
  "dotenv": "^6.0.0",
  "express": "^4.16.3",
  "http-errors": "^1.6.3",
  "mongoose": "^5.1.4",
  "uuid": "^3.2.1"
```

Backend Node Scripts:
```
└─  "test": "jest -i --verbose --coverage --runInBand",
└─  "start": "node index.js",
└─  "watch": "DEBUG=express:* nodemon index.js",
└─  "dbon": "mkdir -p ./db && mongod --dbpath ./db",
└─  "dboff": "killall mongod"
```
___

## Developers log

June 13, 2018: Backend and database deploying...
- Setting up a mongodb on `mlab.com` is super easy, there are lot's of guides available, and the free tier gets you up and going in less than 5 minutes.
- Setting up Backend on `now.sh` proved easy, but there were few guides to explore the `environment keys`, some commands were available right in `help` — but the free tier of now doesn't allow more than one instance running at the same time...

June 13, 2018: Investigating deploying of demo
- Deploying frontend to `now.sh`, a zero-configuration server right from the command line!
- Static files (frontend) are easy to deply from an npm-enabled repo. The reporting is quite verbose and catches any errors when beeing built on server.
- Aliases and domain name mapping available!

June 12, 2018: Starting to abandon certain goals to be achieved for MVP
- namely geolocation-to-city with google maps, upload images to server/ cdn and securing error reporting in app.
- This has been a massive project in terms of actions and goals, why the important thing is to scope down goals wight from the beginning.
- Next iteration of app could serve as more than just a prototype, with actual content tied to user location, timespan and interests.

June 11, 2018: Adding cross-branch work to server-branch. Soon to merge into master.
 - Proved hard to maintain project goals intact, not stressed about outcome, but design is a painpoint and getting components to work without problems equally as time-consuming.
 - would rather have worked without such a big framework of ideas, to just test out main goal points: how to make a PWA.

June 8, 2018: Merging into Master
- Just decided to merge branch into Master, now going forward with real data, backend and further styling for a complete 'read-only' app.

June 7, 2018: Choosing a Route with the help from react-router
- now consolidating my idea of creating a pwa with url's and dynamic content, offline-capabilities and more, i declare my devpath to be a react app with router for all views, mostly to be able to grok all problems that will arise.

June 6, 2018: Swedish National Day, part 2
- Initial run of mern seems to be quite extensive, dockerfile for deployment seems cool to investigate, but at this point need to get more into react/redux to find out what dependencies and modules i need to build out mvp-features.
- swithcing to branch ```create-react-app``` together with redux and scss as main modules.

June 6, 2018: Swedish National Day
- Create new Branch: ```boilerplate-mern-io```
- Scaffold project with MERN.IO stack, with simple cli-style scaffolding tool.

June 5, 2018: Scaffold with Next.js
- Create New Branch: ```boilerplate-with-nextJs```
- Scaffold project with Next.js, evaluate product shipping time with this framework.
- Evaluate future development on this framework.
- Created simple app with fetching and some routes and css to check code similarity with react. Product deployed to ```now``` with alias [csp.now.sh](https://csp.now.sh).

June 5, 2018: Branching strategy
I'm creating a test branch ```boilerplate-with-nextjs``` to see what the [Next.js](https://nextjs.org/learn) is all about.

June 5, 2018: Initialize soloproject
```git init, npm init, git commit 'first'!```

[![forthebadge](https://forthebadge.com/images/badges/uses-badges.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/uses-git.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/uses-css.svg)](https://forthebadge.com)


---
#### UX DESIGN CHORE

Project process followed a traditional time-to-market strategy by creating personas and tasks, follwed by wireframes and finally simple no-design mockups.
Development was made in parallel, but suffered a lot of dead-ends as views and user-actions changed.

![wireframes](https://github.com/papplo/codeworks-solo-project/raw/master/wireframes-1.png)
