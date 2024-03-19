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

## Routing metadata

- NextJS has a metadata API that allows us to define metadata for each page.
- Metadata ensures accurate and relevant information is displayed when page is shared or indexed.

### Configuring metadata

- Export a static metadata object
- Export a dynamic generateMetadata function
- We can make title as object using Metadata type
- title object can have three properties

  1.  default: useful when we want to define a fallback title for child route
  2.  template: useful for dynamic title for nested route
  3.  absolute: to ignore all the template provided in the parent metadata

### **Rules**

- Both layout and page can export metadata
- Metadata is read in order from root level down to page level
- When there is multiple metadata defined for same route, they are combined and page metadata will replace all other metadata if they have same property
- we can also make the generateMetadata function async

## Navigation

- We can navigate to route using Link
- We have to pass href attribute to go to the url
- We can use replace attribute replaces the history instead of adding history to stack
- With the help of usePathname hook we can get the current path of the url
- With useRouter hook we can programatically navigate to other url

## Template

- Template are similar to layout in which it wraps the page
- But with taemplate, when a user navigate between routes that share same tempalte, a new instance of component is mounted, DOM elements are recreated, states are not preserved, and effects are re-synchronized
- Template can be defined by default exporting **template.tsx** or **template.js** file

## Loading

- This file allows us to create loading state that are displayed to user while a specific route segment's content is loading

- The loading state appears immedietly after navigation, giving user assurance that the application is responsive and actively loading content

## Error

- Autometically wraps a route segment and its nested children in a React error boundary
- Create UI error for the specific segments using file-based hirarchy to adjust granularity
- Isolate errors to affected segments while keeping the rest app functional and add functionality to recover from error without full page reload
- To recover from error we get a reset function that reloads the component

```javascript
# Component hirarchy

<Layout>
  <Template>
    <ErrorBoundary fallback={<Error />}>
      <Suspense fallback={<Loading />}>
        <ErrorBoundary fallback={<NotFound />}>
          <Page />
        </ErrorBoundary>
      </Suspense>
    </ErrorBoundary>
  </Template>
</Layout>

```

## Parallel routes

- Parallel routes are advanced mechanism that allows for the simultaneous rendering of multiple pages in the same layout

## Why parallel route?

> 1. With parallel route, we can split a single layout into multiple slots making the code more manageable
> 2. Independent route handeling
> 3. Sub navigation in route

### Rules

- parallel routes in nextJS are defined using feature called slots
- slots help structure content in modular fashion
- To define slots we use **@folder** naming convension.
- Each slot is passed as prop its corresponding **layout.tsx** file

### Unmached routes

- While navigating using ui, nextJS retails the previous state of a slot regradless the changes in url
- When we reload the page, nextJS looks for a **default.tsx** or **default.js** file within each unmatched slots, which is responsible for the default content
- If **default.tsx** file is missing from any one of the slot, we will get a page error
- When a page reload will occur, **default.tsx** will be used for unmached routes

### Intercepting routes

- Intercepting rotues allows us to intercept the default route behavior to present an alternate view when navigating through UI, while preserving the intended route for scenarios like page reload
- This can be helpful when we want to show a route while keeping the context of the page
- To intecept at same level use **(.)folder** naming convension
- To intercept at one level up use **(..)folder** naming convension
- to intercept at two level up use **(..)(..)folder** naming convension _(currently not working due to issue in nextJS)_
- To intercept at root level use **(...)folder** naming convension

## Route handler

- As we have created page rotues, we can also create custom request handlers using route handler
- Unlike page routes which respond with html content, route handler allow us to create RESTful endpoints, giving us full control over response
- There is no overhead of creating and configuring separate sever
- Route handler are also great for making external API requests
- Route handler run on server side, ensuring that sensitive informations like private keys remains sequre and never shipped to browser
- Route handler are equivalant to API route in page router
- To create a route, we must create a **route.ts** file
- If both **route.ts** and **page.tsx** are present in folder, **route.ts** will be getting preference
- For each request type we have to create **Type** async function taking care of the route structure

## Caching in route handler

- Route handlers are cached by default when useing get method with re response object in nextJS

### How to opt out of caching?

- Using dynamic mode in segment config option
- Using request object
- Using dynamic function like **headers()** or **cookies()**
- Using other route than GET

## Middleware

- Middleware is a robust way to intercept and control the flow of request or response withing application
- Next.js does it at global level that significantly enhances the features like redirection, url rewrite, authentication, header and cookies management and more
- Middleware allows us to add path where it will be active
  1. Custom matcher config
  2. Conditional statement

## Rendering

> Rendering is a process of transforming code into UI

1. **Client Side Rendering (CSR)** - In this method, code component is transformed into UI directly within browser
2. **Server Side Rendering (SSR)** - It renders the page on demand in response to user request.
3. **Static Site Generation (SSG)** - It occurs at build time, when the application is deployed at server. This results into pages that are already rendered and ready to serve.
4. **React Server components (RSC)**

### What is hydration?

> During hydration, react takes control of the component tree in the memory based on the HTML that was served. It carefully plans the placement of interactive elements within the tree. Then React proceed to bind neccessary javascript logic to these elements. This involve initializing the application state, attaching event handler for action such as click, mouseover, and setting up any dynamic functionalities required for a fully interactive UI.

### Drawback of SSR

1. We have to fetch everything before we can show anything
   - Component can not start rendering and then pause or wait while date is being loaded
   - If the component need to fetch data, it must be done before server can begin rendering the page
2. We have to load everything before we start hydrating
   - For successful hydration, the component tree in browser must be exactly match the server generated component tree
   - This means that all the javascript must be loaded on client before we start hydrating
3. We must hydrate everything before we interact with anything
   - React hydrates the component in a single pass, that means once it starts hydrating it won't stop until it finishes with entire tree

### How to overcome SSR?

> Use the <Suspence> component to unlock two major SSR feature
> Using <Lazy> we can split our code into chunks
>
> 1. HTML streaming on the server
> 2. Selective hydration on client
