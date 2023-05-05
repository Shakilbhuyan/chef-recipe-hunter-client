import React from 'react';
import { Container } from 'react-bootstrap';

const Blog = () => {
    return (
        <div>
            <Container className='p-2'>
                <h1>1.Tell us the differences between uncontrolled and controlled components!</h1>
                <p>Ans:In the context of web development, components refer to small, self-contained pieces of code that can be reused in multiple places within a web application. Components can be classified into two categories: controlled and uncontrolled components.
                    Uncontrolled components are components whose state is managed by the browser rather than the application. The values of the form elements (e.g., input, textarea, select) inside uncontrolled components are managed by the browser and not by the React component. Uncontrolled components are often simpler to implement than controlled components, but they offer less control over the form's behavior.

                    Controlled components, on the other hand, are components whose state is managed by the application. In other words, the value of the form elements inside controlled components is explicitly set and managed by the React component. Controlled components provide more control over the form's behavior, making it possible to implement custom validation logic and handle complex user interactions.

                    In summary, the main difference between controlled and uncontrolled components is that controlled components provide more control over the form's behavior, but require more code to implement, while uncontrolled components</p>
                <h1>2.How to validate React props using PropTypes</h1>
                <>React provides a built-in library called PropTypes to validate the props passed to a component. PropTypes can help catch bugs early and improve the robustness of your code. Here's how you can use PropTypes to validate props in your React components:
                    <li>Import PropTypes from the 'prop-types' package</li>
                    <li>Define the propTypes object as a static property of your component. This should include the name of the prop and its corresponding data type</li>
                    <li>Render the component with props:</li>
                    If the value of a prop passed to the component doesn't match the defined data type or is not required but not provided, React will throw a warning in the console.

                    It's important to note that PropTypes is only available in development mode, so it won't impact the performance of your production code. Also, PropTypes only validate the types of props, not their shape or values. If you need more complex validation logic, you may want to use a library like Yup or Joi.
                </>
                <h1>3.Tell us the difference between nodejs and express js.</h1>
                <p>Node.js and Express.js are both popular technologies used for building server-side applications, but they serve different purposes.

                    Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows you to run JavaScript on the server-side and perform I/O operations asynchronously. Node.js provides a rich set of built-in modules that enable developers to create server-side applications with ease. Node.js is lightweight, fast, and efficient, making it an ideal choice for building scalable and high-performance applications.

                    Express.js, on the other hand, is a web application framework for Node.js. It provides a set of features that make it easier to build web applications, such as routing, middleware, and template engines. Express.js is built on top of Node.js and provides a higher level of abstraction, making it easier to write web applications quickly and efficiently.</p>
                    <h1>4.What is a custom hook, and why will you create a custom hook?</h1>
                    <>In React, a custom hook is a function that allows you to reuse stateful logic between components. A custom hook is a JavaScript function that uses React hooks like useState, useEffect, useContext, and others to provide a specific functionality. Custom hooks are a way to share stateful logic between components without having to repeat the code.
                    Here are some reasons why you might want to create a custom hook:

                 <li>Reusability: Custom hooks allow you to extract and reuse complex logic between different components in your React application.</li>
                 <li>Encapsulation: Custom hooks encapsulate the logic inside the hook, making it easy to share and reuse without exposing the details of the implementation to the components that use it.</li>
                 <li>Testability: Custom hooks can be tested independently of the components that use them, making it easier to write tests for your React application.</li>
                 <li>Code organization: Custom hooks allow you to organize your code by functionality, making it easier to find and maintain the logic of your application.</li>
                    </>
            </Container>
        </div>
    );
};

export default Blog;