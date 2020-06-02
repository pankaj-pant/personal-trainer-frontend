# Frontend for a Personal Training Company

A simple front end application built using React. The application connects to the customer database (which contains info about customers and their trainings) using REST API. 

* [Live Demo](https://personal-trainer-frontend-pp.herokuapp.com/)

## Using the app

There are three main pages in the application

1) Customers page - Lists all customers and their details in a paginated table. In this page customer info can be edited, deleted and new trainings for a customer can also be added. The page also contains sort and search features.

2) Trainings page - Lists all trainings and their details. The page also contains sort and search features. Trainings can be deleted through this page.

3) Calendar page - Lists all trainings in a calendar view, where user can see trainings (monthly, weekly, daily)

## Quick start

1. [Clone the repo](#1-clone-the-repo).
1. [Install the dependencies](#2-install-the-dependencies).
1. [Run the frontend](#4-run-the-frontend).

### 1. Clone the repo

Clone the `personal-trainer-frontend` repository locally. In a terminal, run:

```
$ git clone https://github.com/pankaj-pant/personal-trainer-frontend.git
$ cd personal-trainer-frontend
```

### 2. Install the dependencies and build production version of app

To install the dependencies and build a production version of the app, run the commands:

    $ npm install
    $ npm run build

### 3. Run the frontend

This command serves the app at `http://localhost:8080/`.

    $ npm start

## License
[MIT](https://choosealicense.com/licenses/mit/)