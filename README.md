<a href="http://www.aidanmackey.net">
    <h1 align="center">&lt;AidanMackey.net /&gt;</h1>
</a>

![GitHub Workflow Status](http://img.shields.io/github/actions/workflow/status/A-Mackey/AidanMackey.net/deploy.yml?branch=main&style=for-the-badge)


[![Prod](https://img.shields.io/badge/Prod-link-blue)](http://www.aidanmackey.net)
[![Gamma](https://img.shields.io/badge/Gamma-link-blue)](http://gamma.aidanmackey.net)
[![Raycast](https://img.shields.io/badge/RayCasting_Engine-link-blue)](http://raycast.aidanmackey.net)

![GitHub last commit](https://img.shields.io/github/last-commit/A-Mackey/AidanMackey.net)
![Language](https://img.shields.io/badge/Lanuage-TypeScript_&_Tailwind-Green)
![Framework](https://img.shields.io/badge/Framework-React_/_Next.js-Green)
![Deployment](https://img.shields.io/badge/Deployment-Docker-Green)
![GitHub deployments](https://img.shields.io/github/deployments/A-Mackey/AidanMackey.net/beta?label=Beta%20Deployment)
![GitHub deployments](https://img.shields.io/github/deployments/A-Mackey/AidanMackey.net/gamma?label=Gamma%20Deployment)
![GitHub deployments](https://img.shields.io/github/deployments/A-Mackey/AidanMackey.net/prod?label=Prod%20Deployment)

[![RayCasting Engine](https://img.shields.io/badge/RayCasting_Engine-000000?logo=Github&logoColor=white)](https://github.com/A-Mackey/Raycasting-Engine-WebGL-JavaScript)
[![GitHub followers](https://img.shields.io/github/followers/A-Mackey)](https://github.com/A-Mackey)


This is a personal portfolio website built with [Next.js](https://nextjs.org/) to showcase projects, skills, and contact information.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Deployment](#deployment)
- [License](#license)

## Demo

Prod Stage - [http://aidanmackey.net](http://www.AidanMackey.net)

Gamma Stage - [http://gamma.aidanmackey.net](http://gamma.AidanMackey.net)

RayCast Engine - [http://raycast.aidanmackey.net](http://Raycast.AidanMackey.net)

## Features

- Contact form or contact information
- Responsive design for all devices
- Clean and minimal UI

## Tech Stack

- **Framework:** Next.js  
- **Styling:** CSS Modules / Tailwind CSS / Styled Components  
- **Deployment:** Github Actions / Docker

## Getting Started

To run this project locally:

- Make sure you have node installed (v22+ preferred)
- Docker if you want to deploy locally

1. Clone the repository:

```bash
git clone https://github.com/A-Mackey/AidanMackey.net.git
cd AidanMackey.net
```

2. Install dependencies

```bash
npm install
```

3. Run development server
```bash
npm run dev
```

4. Verify deployment locally
```bash
npm run docker
```
This will spin up a docker container with the website running on port 1080

## Deployment

Deployment is handled through Github actions, which deploys to a computer sitting right next to my desk at home.

See .github/workflows/deploy.yml for the steps
