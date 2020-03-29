## API Automation with Chai and Mocha

**Pre-Requisite:**

1. Must have installed NodeJS in you machine.
2. Install yarn globally - **npm install -g yarn**

Steps to start with Project:

1. **npm install** - it will install all dependencies you have in your package.json

Here I am using **reqres.in** API.

Install Prettier Plugin from Extentions at VSCode and create .prettierrc file and put below code in it.
{
"tabWidth": 2,
"singleQuote": true,
"semi": true,
"useTabs": true
}

**Run Tests:**

1. **yarn test** - to run all tests
2. **yarn test test/users.js** - to run specif file
3. **yarn test test/users.js --grep 'Get Users'** - To run a specific test case
4. **yarn test/<folder_name>** - to run specific folder
