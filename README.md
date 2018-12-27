# Welcome to the Shame Shopper Challenge!!!

## Your Objective:

Become familiar with the core functionality of the Vue.js framework. This project has two directories: `start` and `finish`. The `start` directory is a clean slate for you to code your challenge in. The `finish` directory is an example of the finished product. Keep in mind that your project ***does not*** have to look like that at the end. There are many ways to skin a cat in Vue.

Avoid looking at it as much as possible and instead look at the [Vue.js documentation](https://vuejs.org) for explanations and examples on how to use the framework. The documentation is ***excellent***!

Starter data is provided in the `data.txt` file. Here is the summary of tasks for this challenge:

1. Display Your Data
    * Add Vue.js to your site and initialize a Vue instance.
    * Add dummy data to your site.
    * Render your data on your in a meaningful way.
2. Interact with your data
    * Provide a way to add new items to your list.
    * Provide a way to update existing items.
    * Provide a way to remove items from the list.
3. Code Cleanup
    * Abstract code into components

## Detailed Tasks

### Display Your Data

1. Add Vue.js to your site using the CDN ([help](https://vuejs.org/v2/guide/installation.html#CDN)).
2. Create a new Vue instance and have it watch en element on your page ([help](https://vuejs.org/v2/guide/index.html#Declarative-Rendering)).
3. Add data to your Vue instance (there is some starter data in the `data.txt` file located at the root of the project).
4. Create a table on your page and dynamically populate the rows of the table using the data in your Vue instance ([help](https://vuejs.org/v2/guide/index.html#Conditionals-and-Loops)).
    * Be sure to ad a subtotal value in each row.
5. Add image or text indication of healthy or non-healthy foods.
6. Add a Total row at the bottom of your dynamic rows.
7. Create custom filter for currency ([help](https://vuejs.org/v2/guide/filters.html));

### Interact With Your Data

1. Add a form in the footer of your table where users can add new items to their list ([help](https://vuejs.org/v2/guide/index.html#Handling-User-Input)).
2. Add Edit button to toggle a form in the table so users can update their items.
3. Add a button for users to remove items off of their list.

### Code Cleanup

1. Abstract Code into Components ([help](https://vuejs.org/v2/guide/index.html#Composing-with-Components));
    * Move code for table rows into a custom component.
    * Move Add new form into a custom component.