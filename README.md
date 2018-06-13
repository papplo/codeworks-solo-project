# codeworks-solo-project
Tellus, an imaginary social digest based to discover stories, events and memories made by users in your vicinity.

#### Codeworks is a 12-week Javascript Bootcamp
Where i attend in the April 2018-batch, this is our first soloproject where we get to create a full-stack application using frameworks of our choice.

 #### Collaborators on project:
> - Juha Silventoinen, Ux-, Ui-design
- Pablo Anttila, Full stack development

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
