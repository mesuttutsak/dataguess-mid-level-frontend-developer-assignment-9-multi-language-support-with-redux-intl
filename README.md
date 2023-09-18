# Multi-language Support with Redux Intl


## Installing

1. Clone the repository to your local machine using the following command:

```bash
  https://github.com/mesuttutsak/dataguess-mid-level-frontend-developer-assignment-9-multi-language-support-with-redux-intl.git
```

2. Install the project dependencies:

```bash
  npm install
```

## Usage

1. To run the application locally, use the following command:

```bash
  npm start
```


2. Open your web browser and go to `http://localhost:3000` to view the app.


## Folder Structure

This project follows a structured organization to maintain code clarity and scalability. Below is a tree view of the project structure:

```
.
├── README.md
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src
│   ├── App.test.tsx
│   ├── App.tsx
│   ├── core
│   │   ├── components
│   │   │   ├── Container
│   │   │   │   └── index.tsx
│   │   │   ├── Header
│   │   │   │   ├── header.module.scss
│   │   │   │   └── index.tsx
│   │   │   ├── IntlFormated
│   │   │   │   ├── CurrencyFormatted.tsx
│   │   │   │   ├── DateFormatted.tsx
│   │   │   │   ├── ListFormatted.tsx
│   │   │   │   ├── MessageFormated.tsx
│   │   │   │   ├── NumberFormatted.tsx
│   │   │   │   ├── PluralFormatted.tsx
│   │   │   │   ├── RelativeTimeFormatted.tsx
│   │   │   │   └── intlFormated.module.scss
│   │   │   ├── LanguageSelector
│   │   │   │   ├── index.tsx
│   │   │   │   └── language.module.scss
│   │   │   ├── Pages
│   │   │   │   ├── About
│   │   │   │   │   └── index.tsx
│   │   │   │   ├── HomePage
│   │   │   │   │   └── index.tsx
│   │   │   │   └── Page404
│   │   │   │       └── index.tsx
│   │   │   └── Text
│   │   │       ├── index.tsx
│   │   │       └── text.module.scss
│   │   ├── hooks
│   │   │   └── useLanguageChange.tsx
│   │   ├── layouts
│   │   │   └── MainLayout.tsx
│   │   ├── store
│   │   │   ├── index.tsx
│   │   │   └── reducer.tsx
│   │   ├── styes
│   │   │   ├── fonts.scss
│   │   │   ├── globals.scss
│   │   │   ├── mixins.scss
│   │   │   ├── reset.scss
│   │   │   └── variables.scss
│   │   ├── translations
│   │   │   ├── en.json
│   │   │   ├── es.json
│   │   │   ├── index.tsx
│   │   │   └── tr.json
│   │   └── utils
│   │       ├── flattenMessages.tsx
│   │       └── renderClasses.tsx
│   ├── index.tsx
│   ├── react-app-env.d.ts
│   ├── reportWebVitals.ts
│   └── setupTests.ts
├── tailwind.config.js
└── tsconfig.json

```
