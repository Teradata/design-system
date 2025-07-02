# Web design system

Web design system is a collection of reusable component libraries designed to streamline the development process and enhance the user interface of your web applications.

## Features

- **Reusable Components:** Currently Web design system provides a variety of reusable React components that you can easily integrate into your projects.
- **Responsive:** Our components are built with responsiveness in mind, ensuring that they look and function seamlessly across different screen sizes and devices.

## Installation

You can install react components offered by the Web design system via npm or yarn:

```bash
npm install @teradata-web/react-components
```

or

```bash
yarn add @teradata-web/react-components
```

## Usage

To use a component from Web design system, simply import it into your React application and render it:

```jsx
import React from 'react';
import { Button } from '@teradata-web/react-components';

const App = () => {
  return (
    <div>
      <Button onClick={() => alert('Button clicked!')}>Click me</Button>
    </div>
  );
};

export default App;
```

## Documentation

For documentation on each component, including usage examples and available props, please run the below command:

```bash
npx nx run react-components:storybook
```
