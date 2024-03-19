const getInitialData = () => [
  {
    id: 1,
    title: "Babel",
    body: "Babel is a JavaScript transpiler. This means it takes modern JavaScript code, written with the latest features (ECMAScript 2015 and beyond), and converts it into a version that can be understood by older browsers or environments that don't support those new features.",
    createdAt: "2022-04-14T04:27:34.572Z",
    archived: false,
  },
  {
    id: 2,
    title: "Functional Component",
    body: "In React, a functional component is a fundamental building block for creating UI interfaces. It's essentially a JavaScript function that describes what part of the UI should look like and how it should behave.",
    createdAt: "2022-04-14T04:27:34.572Z",
    archived: false,
  },
  {
    id: 3,
    title: "Modularization",
    body: "Modularization is a fundamental concept across various fields. It refers to the practice of breaking down a system into smaller, self-contained units called modules. These modules are designed to work independently but can also be interconnected to achieve a more complex functionality.",
    createdAt: "2022-04-14T04:27:34.572Z",
    archived: false,
  },
  {
    id: 4,
    title: "Lifecycle",
    body: "In React, a component goes through a series of stages during its existence, from creation to removal. This journey is called the component lifecycle. It's important to understand these stages because they allow you to control the component's behavior and perform actions at specific points in its lifespan.",
    createdAt: "2022-04-14T04:27:34.572Z",
    archived: false,
  },
  {
    id: 5,
    title: "ESM",
    body: "ESM stands for ECMAScript Modules. It's the modern, standardized way to organize code into reusable modules in JavaScript. ",
    createdAt: "2022-04-14T04:27:34.572Z",
    archived: false,
  },
  {
    id: 6,
    title: "Module Bundler",
    body: "A module bundler is a developer tool specifically designed for JavaScript. It essentially deals with organizing and combining separate JavaScript files  into a single file, typically for use in web browsers.",
    createdAt: "2022-04-14T04:27:34.572Z",
    archived: false,
  },
];

const showFormattedDate = (date) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(date).toLocaleDateString("id-ID", options);
};

export { getInitialData, showFormattedDate };
