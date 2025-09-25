# Portfolio Website

This is a personal portfolio website built with [Next.js](https://nextjs.org/) to showcase projects, skills, and contact information.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Deployment](#deployment)
- [License](#license)

## Demo

Prod Stage - [http://aidanmackey.net](AidanMackey.net)

Gamma Stage - [http://gamma.aidanmackey.net](Gamma.AidanMackey.net)

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