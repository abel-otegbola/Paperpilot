![logo](https://github.com/abel-otegbola/Paperpilot/assets/59369762/3c7416b1-9a7a-4b1a-af37-f0860faac21c)


## (Paperpilot) Research papers recommendations website Application

A next-js research website for timely and efficient delivery of research resources. 
<hr>

# Features
- User recommendations and preferences management
- Diverse research resources API
- Advanced search functionality
- Email delivery of user research recommendations
- Clean user interface for easy interactivity
- Dark and light mode

visit live site [here](https://paperpilothub.vercel.app)

## Figma design
[Design](https://www.figma.com/proto/uQEajfMBYBAKeughCEtuTP/Paperpilot?type=design&node-id=1-3&t=uTpNxdWU6QhFg90o-0&scaling=scale-down-width&page-id=0%3A1)

## Screenshots
![paperpilot](https://github.com/abel-otegbola/Paperpilot/assets/59369762/401e1fcc-4455-45ec-a222-44f9bb40157d)



<hr>

## How to use

### Download
Download the zip file and unzip into your computer.

or


### Clone this repository
To clone and run this application, you'll need git and npm installed on your computer
Download [Git](https://git-scm.com)

open up your terminal and clone this repository

```md
git clone https://github.com/abel-otegbola/Paperpilot
```

open the folder 

```md
cd Paperpilot
```

Install the dependencies by running

```md
npm install
```

Once installed, run

```md
npm start
```

## Project Structure

Here is a breakdown of the project structure:

```
├── node_modules/
├── public/
│   ├── pictures go here
├── src/
│   ├── App.jsx
│   ├── index.jsx
│   ├── styles/
|   |   ├── //styles go here
|   |   ├── App.css
│   |   ├── index.css
|   ├── pages/
|   |   ├── api/
|   |   |   ├── auth/
|   |   |   |   ├── next-auth configs go here
|   |   |   ├── apis go here
|   ├── components/
│   |   ├── //components go here
|   ├── database/
│   |   ├── connection.js // mongodb connection
|   ├── models/
│   |   ├── Schema // mongodb schemas
|   ├── utils/
│   |   ├── //utils go here
│   └── 
├── .gitignore
|── .eslintrc.json
|── tailwind.config.js
|── postcss.config.js
|── jsconfig.json
├── package.json
|── package-lock.json
├── README.md
├── next.config.js
```

- `node_modules`: contains all the project dependencies.
- `public`: contains any other static assets that will be served by the development server or included in the production build.
- `src`: contains the application code, including the entry point (`main.jsx`), the root component (`App.jsx`), and any other components or styles.
- `.eslintrc.json`: contains configuration options for ESLint.
- `.gitignore`: specifies files and directories that should be ignored by Git.
- `package.json`: contains project metadata and specifies dependencies and scripts.
- `README.md`: contains project documentation.
- `next.config.js`: contains configuration options for Nextjs.
- `tailwind.config.js`: contains configuration options for Tailwind-css.

### credits
- [Tailwind-css](https://tailwindcss.com/docs/guides/nextjs)
- [Semantic scholar](https://www.semanticscholar.org/)
- [Springer API](https://dev.springernature.com)
- [Next-js](https://nextjs.org)

### You may also like
Check out my awesome [Mailme - endpoint generator website](https://github.com/abel-otegbola/mailme) app built with Next-js
