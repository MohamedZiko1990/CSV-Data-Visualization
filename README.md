This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Line-Graph Task

The goal of this task was to create a CSv data converter, which display any given CSV data into graphs using `highcharts` and `highcharts-react` in 3 different ways as the user can choose between `spline` , `bar` and `column`.

### Overview

When you load the web-page for the first time, you will find the page consits of 3 main parts distributed into 2 columns.

The firts part is the CSV data form, which will recieve the users data in the text area. after the user hits the `process` button, the headers which are avaliable in the data will be updated automatically in the drop-down boxes for the Axes.

The second part is the Axes form, the 2 drop-down boxes represents the `x-Axis` and `y-Axis`. after you click apply the data fetched for this 2 headers will construct the graph.

the final part is the `highchart` which presents the data according to the selected axes. As a user you will have 3 different buttons to choose the display type of your graph, and the graph shows the displayed Axes names and the series name.

#### Steps

- Load the page using `npm start` in the cmd in the location of the project (you can do that from the search bar OR from directory navigation bar)
- when the page load, you will see a CSV data form with a `process` button, place any sample of CSV data in the available text-area and press the button.
- when the `process` button is clicked, check the Axes drop-menu boxes for the header names which is updated automatically.
- Select the `x-Axis` and the `y-Axis` from the drop-menu boxes and press `apply`.
- the results will show up on the graph area by default as `spline`.
- use the 3 buttons below the graph to navigate between different display types of your data
  `spline`, `bar` and `column`.

#### Frame Works/ libraries/ tools

- ReactJs
- highcharts
- highcharts-react
- convert-csv-to-array
- Bootstrap 4
- Git
- Postman

---

### Introduction

#### Entities

##### Navbar

contains the company logo and the head of the project

##### CSV Form

contains the text-area where the user can copy-past his CSV data and press `process` button.

##### Axes Form

contains 2 drop-menu boxes, which presents the 2 Axes in your graph. Lists will be updated automatically when the CSV form is submitted. The user will choose the `x-Axis` and the `y-Axis` and press `apply` button.

##### Chart

The place which will presnets the user CSV data into graphs, contains 3 buttons to navigate between modes of displaying users data `spline`, `bar` and `column`.

---
