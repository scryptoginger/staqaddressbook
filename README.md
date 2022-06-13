# addressbook_staq

TL,DR: scroll to the bottom, line 21. But read this first... last night I had some issue with git that I couldn't figure out, so I copied my code into a new directory and set up a new git repo, which you see here. I started the project with npx create-react-app ... --template typescript

Notes:
- I've been working on this for several hours this week and I keep running in circles. I've read many posts/articles/how-to walkthroughs, watched several youtube videos, researched different libraries and ready-built options that I'd consider modeling after if this were a production app. (If someone else has built something that is relevant to your build, it works and works well, is elegant, can make sense to you, then why not model after what they built and improve/tweak to your needs?)

I've left comments as notes in the various files here with my ideas and thoughts. I hope they are coherent and make sense.

I had some troubles with gihub at the start since they changed their auth process last year (I guess it's been a while since I used git CLI - at my last company they used the GitKraken GUI, which was pretty slick). That took a couple of hours to sort out, but finally got it working on my macbook pro.

After that, I tried brute force building a form, realizing quickly that I should use some documentation. This is when I discovered both React Hook Form and Formik. I spent a couple more hours reading about these, their similarities, examples, etc. Ultimately I decided I think I want to use Formik because I think the built-in validation for email (which I want to include), is simple and easy. Also could be that I didn't research enough - but I like Formik (for now).

I then found a really slick example on GH called "awesome-address-book" https://github.com/cmacdonnacha/awesome-address-book. I decided I wanted to model after this app, but there are several things I didn't want to include (just yet, anwyay), such as the profile pic, the bio/tagline, the sidebar, the recent conversations/chat... This feels more like a social media address book, than the one in your cell phone. Ultimately, I'd like this to be a crypto-first address book and allow peopel to use NFTs as their profile pic and have a default cryptowallet address where people could 'tip' or donate or send cryptocurrency. I also discovered that this example is not very mobile friendly - that's a clear problem and I'd want to address that. 

I also looked at and resused (as a template) some code from this super simple example. https://github.com/Abhisheikh-G/react-basic-phonebook.

Next, I worked on using Formik for the validation and the form building, itself, in ContactForm.ts. 
There's more after this that I could speak to, but...

100% transparent (because you guys deserve nothing less than my full transparency...) and I know you both are really considering me for this team and project (which is incredible. Really, that makes me feel very good inside.)
This has been a real challenge for me. It's been awesome and stressful... (I wanted to do really well, quickly to impress you both, but reality is this is my first React project and I'm spending a lot of time trying to piece together bits of code from other examples, learn how they work, can work together (potentially), and I ran out of time. I'm going to continue working on this project, because I'm set on learning React, and when I start a project, I really like to try and get it finished, if possible.)... but it's been a really great experience so far. I have a much deeper understanding of React, it's potential and also that by scratching the surface, I can see there is SO MUCH MORE than I realize. This has let me get back into the CLI and using GIT again (at work we use Teams and Shelvesets, etc.). 
I don't want to keep you both hanging, so I want to commit all my latest changes and things. It's messy. It doesn't work. I haven't touched all the aspects of your homework assignment. If this were a college course and I were submitting this homework to you as my college teacher, I'd likely not get a great grade on it.
But I want to be clear and transparent with you both and leave nothing behind. I've tried hard on this. Thought about it almost nonstop this whole week.
I look forward to another conversation with you both.

##############
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
# staqaddressbook
