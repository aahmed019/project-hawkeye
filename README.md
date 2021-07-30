<p align="center">
   <img src="https://github.com/aahmed019/project-hawkeye/blob/main/frontend/public/images/logo.png" alt="logo">
</p>


[Live Demo](https://project-hawkeye.herokuapp.com/)

# Background and Overview
It's not uncommon for recruiters to look at an individual's social media account in order to determine whether they are a good fit for the position.
People may use Twitter to look for previous tweets from the person in question. You filter these tweets and want to save the collection
or perhaps even share it with your hiring manager or just group these tweets from specific users together.

Project Hawkeye will be a web application
that allows users to filter tweets based on an individual's Twitter username. 
Search results and searches can be saved into a workspace created by the user. 
Users can have private workspaces for limited usage (password protected) or publicly shared workspaces.

# Technologies Stack
* MongoDB
* Express
* React/Redux
* Node.js
* Twitter API

# Technologies and Challenges
## Backend (Mongo, Express)

MongoDB holds all our user information and when a user is logged in, the data for their workspaces, 
folders and comments are all pulled from Mongo and sent to the frontend. When the user is logged in, 
they are redirected to a workspace page where they can access all their data and add more to it. 
