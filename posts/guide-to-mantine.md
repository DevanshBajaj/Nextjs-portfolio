---
title: 'Getting Started with Mantine: A Guide to Setup and Customizations'
date: '2023-06-23'
author: 'devansh bajaj'
image: '../images/profile.png'
---

### Overview of Mantine Library and its Key Features

Mantine is a highly flexible and feature-rich component library for React. It is designed to help developers build user interfaces quickly and in a customizable manner. By focusing on developer productivity, Mantine provides accessible components and plugins for almost everything you might need while working on a large-scale React project.

One of its standout features is the ability to create easily customizable themes. Mantine also offers many useful hooks and utility functions that enhance the developer experience and boost productivity. Additionally, it includes powerful form handling capabilities that are highly customizable, accommodating special form requirements like error handling scenarios effectively.

The community support and documentation for Mantine are robust. Personally, I did not encounter any issues with support while working on a significant project with Mantine. Like most libraries, it also has built-in support for responsive design.

### Use Cases and Scenarios Where Mantine is a Perfect Option

1. **Enterprise Applications**
    
    In enterprise applications, there is often a need for a robust UI library that can handle the representation of complex and large datasets. Mantine provides excellent support for charts and tables, which are commonly used in enterprise applications for data visualization. There are external plugins, such as Mantine React Table, that extend Mantine's capabilities to support more complex tables. Additionally, Mantine includes many built-in accessibility features to ensure that everyone can use the application effectively.
    
2. **Internal Tools and Admin Panels**
    
    Internal tools and admin panels often need to be built quickly and efficiently. Mantine allows developers to rapidly build and iterate on these tools. Its focus on accessibility ensures that all users, regardless of their abilities, can use the tools effectively.
    

### Cons of Mantine

Although every library has some cons, I will discuss the ones I have encountered while working with Mantine:

1. **Opinionated Nature**  
    Mantine is a very opinionated library, which means you might encounter situations where you would prefer certain components to be styled differently or notice some missing functionality.
    
2. **Customization Challenges**  
    Creating custom components with Mantine can be challenging if it requires more changes than just the color scheme. However, if you are not planning to change the complete UI of those components, it should be manageable.
    

### A Guide to Setup and Create a Custom Theme using Mantine
Creating a custom theme in Mantine is straightforward and it allows you to modify the look and feel of the entire application to match the brand colours. So let's get started with a step-by-step guide:

> They have a well-maintained Vite.JS [Template](https://github.com/mantinedev/vite-template) which you can use as well, but I will be explaining the basic setup to give you a better understanding of it. You can also follow the following guide for [Next.js setup](https://mantine.dev/guides/next/).

#### Project Setup and Initialisation

**Step 1: Creating a Project** 
First, we will create a [Vite](https://vitejs.dev) project by running:
`yarn create vite`

Then choose the prompts like the following example:

```bash
✔ Project name: … mantine_theme-guide
✔ Select a framework: › React
✔ Select a variant: › TypeScript
```

**Step 2: Installing Dependencies** 
We will install the basic Mantine dependencies for the tutorial, but you can choose as per requirements.
`yarn add @mantine/core @mantine/hooks @mantine/form`

We will then install postCSS plugins as dev dependency
`yarn add --dev postcss postcss-preset-mantine postcss-simple-vars`

Next, create the `postcss.config.cjs` file at the root with the following code, which defines the required Mantine preset plugins:

```ts
module.exports = {
  plugins: {
    'postcss-preset-mantine': {},
    'postcss-simple-vars': {
      variables: {
        'mantine-breakpoint-xs': '36em',
        'mantine-breakpoint-sm': '48em',
        'mantine-breakpoint-md': '62em',
        'mantine-breakpoint-lg': '75em',
        'mantine-breakpoint-xl': '88em',
      },
    },
  },
};
```

**Step 3: Setup Styles Imports and MantineProvider** 
Replace the code in `src/App.tsx` with the following code:

```tsx
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";

export default function App() {
  return (
    <MantineProvider>
      <div>Hello World!</div>
    </MantineProvider>
  );
}
```

**Step 4: Start the App** 
Start the development server by running:
`yarn run dev`

It will start the server on either `http://localhost:5173/` or `http://localhost:3000/`.

#### Setting Up a Custom Theme

**Step 1: Define a Custom Theme**
In this step, let's create a custom theme by passing a theme object to the `MantineProvider` component we added in our `App.tsx`. The theme object can include custom colors, fonts, and many other supported design tokens. You can get more information on the available customisations [here](https://mantine.dev/theming/theme-object/).

```tsx
import { MantineColorsTuple, MantineProvider, createTheme } from '@mantine/core';

const blue: MantineColorsTuple = [
  '#ebf1ff',
  '#d7defa',
  '#adbbee',
  '#8095e3',
  '#5b75d9',
  '#4360d4',
  '#3656d2',
  '#2747bb',
  '#203fa8',
  '#113595',
];

const green: MantineColorsTuple = [
  '#e7faf6',
  '#deeee8',
  '#c0d9d1',
  '#9fc4b8',
  '#84b2a2',
  '#72a795',
  '#67a18e',
  '#548d7b',
  '#487e6c',
  '#366d5d',
];

const customTheme = createTheme({
  colors: {
    green,
    blue,
  },
});

```

In this, we have added two colour schemes in the theme object, named `customTheme`. We will pass this `customTheme` as a prop in the MantineProvider component inside the App component:

```tsx
<MantineProvider theme={customTheme}>
  <div>Hello World</div>
</MantineProvider>

```

**Step 2: Creating Some Basic UI to Apply These Colours in the Components**

We will apply the colour schemes to the buttons and see their real-life usage on a component:

```tsx
<MantineProvider theme={customTheme}>
  <Container miw="100vw" mih="100vh">
    <Flex mih="100vh" miw="100%" direction="column" gap="12px" justify="center" align="center">
      <Title order={1}>Hello World</Title>
      <Button color="nord">I am green</Button>
      <Button color="blue">I am blue</Button>
    </Flex>
  </Container>
</MantineProvider>

```

#### Conclusion

In conclusion, Mantine UI offers a powerful and flexible solution for building modern, responsive, and accessible React applications. It allows you to create a customised look for your application that aligns perfectly with your brand design requirements. While it has some drawbacks, such as a learning curve and potential performance impacts, the benefits often outweigh these challenges for many projects. By leveraging Mantine's features like the theme object, you can add more default styles to the components, customise component props, and enhance the overall user experience, ensuring your applications are both functional and visually appealing.