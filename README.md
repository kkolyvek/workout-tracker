<h1 align="center"><strong>Workout Tracker</strong></h1>

<p align="center">
    <img src="https://img.shields.io/github/languages/top/kkolyvek/workout-tracker">
    <img src="https://img.shields.io/github/repo-size/kkolyvek/workout-tracker">
    <img src="https://img.shields.io/badge/License-MIT-yellow.svg">
</p>

<h2 align="center">
  <a href="https://workout-tracker-kk.herokuapp.com/?id=611da7d85f9b78001637400c">Deployed Site</a>
</h2>

## Description:

Workout tracker, as the name suggests, is a tool to help you keep track of your workouts.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Questions](#questions)
- [License](#license)

## Installation

This is a deployed site so there is no need for any installation. If you are looking to clone and run the site on your localhost, be sure to install all required dependencies using `npm i` and seed the MongoDB database using `npm run seed` in the terminal.

## Usage

There are a couple things to keep in mind when using this workout tracker.

1. Workouts can have multiple exercises.
2. Exercises must be either cardio or resistance training.
3. Cardio exercises require a type, distance, and workout duration.
4. Resistance exercises require a type, weight, number of sets, number of reps, and workout duration.

The home page of the workout tracker displays the sum of the exercises of your latest workout. If you have more to add, you can choose the "Continue Workout" option to keep contributing to the active workout. This will append the list of exercises and increase the aggregate totals. If you'd like to start a new workouts, simply choose the "New Workout" option. This will finalize the last workout and begin a new workout from scratch.

Navigating to the dashboard will display two charts from your last seven workouts; Workout Duration and Total Pounds Lifted. These show sums of the whole workout.

## Questions

For further questions and comments, please reach out through [GitHub](https://github.com/kkolyvek) or via email at kk674@uw.edu.

## License

This project uses the MIT License
