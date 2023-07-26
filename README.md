# Hackathon Project UI

```
nvm use
npm run dev
```


# Project Spec

# Product Specification

## Vision

Our vision is to create a dynamic and user-friendly system that intelligently translates user preferences into effective resource allocation. This system aims to ensure fair and responsive distribution of resources within the Colony ecosystem, empowering users to actively shape its growth and direction.

## Overview

The product is a structured curation mechanism for autonomously allocating recurring funding over an unbounded number of projects in the Colony ecosystem on an ongoing basis. Projects in two states 

## Background

The product is designed to address the challenges of allocating funding in a trustless and pseudonymous environment. It aims to be robust against many types of exploit and failure scenarios, such as spamming the mechanism with fake projects.

## User stories

- As a User, I want to be able to connect my wallet to the system easily.
- As a User, I want to be able to log out of the system securely.
- As a User, I want to be able to choose between two projects to support one using my reputation.
- As a User, I want to be able to view detailed information on a project.
- As a User, I want to be able to view projects that are being funded in the leagues.
- As a User, I want to be able to view projects that are within the pools and can be promoted into the leagues using my reputation.
- As a User, I want to be able to submit a project for funding consideration, becoming a Project Owner.
- As a Project Owner, I want to be able to update the details of a project I have submitted.
- As a Project Owner, I want to be able to update my project status.
- As a Project Owner, I want to be able to designate where funds should be sent too. Such as Colony contract address.

## Use Case

The product will be used by reputation-holding accounts in the Colony ecosystem to vote on projects. The voting process will be divided into "units of work". Voting constraints will be in place to encourage reputation-holders to vote in the long-term interest of the Colony Network.

## User Flows
- Logging in
    - User can login with their wallet address.
    - User can log out.
- Voting on a project in the league:
    - User is presentend with two projects.
    - User selects a project to vote on.
    - The user is then presented with the next pair of projects.
    - In the background, the system aggregates and processes the votes.
- Voting on a project in the pools:
    - User is presentend with two projects.
    - User selects a project to vote on.
    - The user is then presented with the next pair of projects.
    - In the background, the system aggregates and processes the votes.
- Submitting a project:
    - User enters the details of the project.
    - The system processes the submission and adds the project to the pool.


## Design

The design of the product is using bootstrap and simple components for the purpose of keeping it simple for the limited timeframe.

## Acceptance Criteria

- User Authentication:
    - When a user clicks on login, they should be able to login with their wallet.
    - The system should display an error message if the login process fails.
    - When a user clicks logout, they should be logged out of the system and redirected to the login page.
    - The user's reputation value and wallet address should be displayed in the header after successful login.

- Project Voting:
    - Upon landing on the site, users should be presented with two project options to choose from.
    - When a user clicks on a project to vote, their vote should be registered, and the next two project options should be loaded for the user to choose from.
    - When a user clicks on "skip", the system should skip to the next set of projects without voting.
    - The system should display a message if there are no more projects to vote on.

- Project Promotion:
    - Clicking on "Promote" should navigate to the Promote page, which displays a random project from the pool for the user to promote.
    - On clicking to promote a project, the vote will be counted and you wil move
    - The user should also have the option to skip this project and view the next one.
    - The system should display a message if there are no more projects to promote.

- Viewing Leagues and Projects:
    - Clicking on "Leagues" should navigate to the leagues page, which displays a list of the leagues and the projects within each league.
    - Users should be able to click on a league to view more details about it.
    - Users should be able to click on a project within a league to view more details about the project.

- Error Handling:
    - The system should display appropriate error messages for any failed operations or system errors.
    - The system should handle any unexpected user inputs or actions gracefully, without crashing or freezing.

