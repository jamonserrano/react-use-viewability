# react-use-viewability
React hook for tracking component viewability, based on IntersectionObserver.

# Installation

```sh
$ npm install react-use-viewability --save-dev
```

# Usage

The hook accepts the [standard IntersectionObserver options](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#Creating_an_intersection_observer) and returns an array containing an `inView` value that always reflects the component's viewability, and an `inViewRef` ref that must be passed to the element you want to track.

Example ([try the live version](https://codesandbox.io/s/great-jones-vywwvm5rn3)):

```js
import React from 'react';
import useViewability from 'react-use-viewability';

const Box = props => {
  // Consider the element viewable when at least half of it is in the viewport
  const [inView, inViewRef] = useViewability({ threshold: 0.5 });

  return (
    <div
      // Pass the received ref to the element
      ref={inViewRef}
      // Change background color when entering or leaving the viewport
      style={{ backgroundColor: inView ? 'green' : 'red' }}
    />
  );
};

export default Box;
```

# License

MIT License
