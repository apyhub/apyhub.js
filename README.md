# ApyHub SDK for Node.js

Welcome to the ApyHub SDK for Node.js! This library provides easy access to the ApyHub APIs through a set of simple and powerful functions.

With this SDK, you can easily perform tasks such as file conversion, text and metadata extraction, document and image generation, image processing, and access to data lists and currency conversion. As our platform grows and develops new APIs, we will be adding more functions to this library.

To learn more about ApyHub, visit our website at **[apyhub.com](https://www.apyhub.com/)** or join our Discord server at [**discord.com/invite/apyhub**](https://discord.gg/JZagJJcw6F).

## **API Documentation**

Our SDK provides access to the following API categories:

- [Convert API](https://github.com/apyhub/apyhub.js/tree/main/src/convert#README.md)
- Data API
- Extract API
- Generate API
- Image Processing API
- Validate
- Search

Each of these categories contains multiple functions for interacting with the corresponding API. For more examples and detailed API documentation, see the links above.

## **Installation**

To use this library, you will need to have Node.js and npm installed on your machine. Then, you can install the ApyHub SDK by running the following command:

```bash
npm install apyhub
```

## **Usage**

To use the library, you will need to initialize it with your ApyHub API token. You can do this by importing the **`initApyhub`** function and calling it with your token as an argument:

```jsx
import { initApyhub } from 'apyhub';

initApyhub('YOUR_APY_TOKEN');
```

Once the library is initialized, you can import and use the various functions and methods provided by the library. For example, to access the data list of countries, you can do the following:

```jsx
import { data } from 'apyhub';

const countries = await data.countries();
```

For more examples, see the **[API documentation](https://docs.apyhub.com/)**.

## **Contributing**

We welcome contributions to this project. If you have an idea for a new feature or improvement, please open an issue to discuss it. If you'd like to contribute code, please follow these steps:

1. Fork the repository.
2. Create a new branch for your changes.
3. Make your changes and commit them.
4. Push your branch to your fork on GitHub.
5. Open a pull request from your branch to the **`main`** branch of this repository.