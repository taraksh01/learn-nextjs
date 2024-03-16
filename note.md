## What is nextJS?

> NextJS is a React framework for building web applications.

**With reactJS**

- It's not feasible to create fully featured application ready for production.
- React is a library for building user interface.
- We need to take decision about various features such as routing, data fetching and more.

**With nextJS**

- It uses react for building user interfaces.
- Also provide features that enable production ready application. These features include routing, optimized rendering, data featching, bundling and more.
- Some opinions and convensions need to be followed to implement these features as nextJS is an framework.

## Why learn nextJS?

> It simplifies the process of building web application for production.

1. File based Routing
2. Api routes
3. Supports bokth client and server side rendering
4. Data fetching
5. Styling
6. Optimization for images, fonts and scripts
7. Dev and prod build system

## How to start nextJS app?

```javascript
npx create-next-app@latest
```

## What are these files?

- package.json ==> project dependencies and scripts
- next.config.mjs ==> for nextjs
- tsconfig.json ==> for typescript
- eslintrc.json ==> for eslint
- tailwind.config.ts and postcss.config.js ==> for enabling tailwind css
- next-env.ts ==> for typescript declarations
- .next folder ==> for dev and prod builds
- app ==> here we write code for our web app
- public ==> Hold all the static assets

## Server components

- By default all the components are server component in next.js
- They have the ability to perform task such as fetching data or reading files from database
- They don't have the ability to handle hooks or handle user interactions.

## Client components

- To create client component it is necessary to include 'use client' at the top of the file
- Client components can't perform task like data fetching or reading files but can handle hooks and user interactions.

## Routing

- NextJS has file based routing mechanism
- URL paths are defined by files and folders in codebase
- All routes must be places inside **app** folder
- Every file that corresponds to route, must be named **page.tsx** or **page.js**
- Each folder corresponds to the path segment in the URL
- For nested route add folder inside the folder and add page.tsx or page.js
- For dynamic route, wrap the folder name inside brackets [] and inside that add page.tsx or page.js
- We can use dynamic route inside static route and static route inside dynamic route
- To use catch all feature we will use [...] while naming folder
- We can create a custom route error page by naming it **not-found.tsx** or **not-found.js**
- We can also import notFound form next/navigation to show error page conditionally. Upon callling the imported notFound function will fallback to nearest NotFound boundary
- There must be a **page.tsx** or **page.js** file to access the route
- To use undescore in route use **%5F**
- To use group routing wrap folder name inside parentheses ()
- When we use group routing, it is excluded from the route path

### Private folder

- Private folder indicates private implementation details that should not be considered by routing system
- Folder and subfolders are excluded from routing
- To make a folder private, we use uderscore as prefix

## Layout

- layout is a page that is unique to a route and shared between multiple pages
- We can use nested layout for different route just as we do it for page.tsx
