# Weather App

##### React & Material UI app utilizing the Weatherapi API.

It is designed display your current and 3 day forecast weather.
It uses geolocation to find your city. This still gives the user the option to search for another location.

Register your API Key at
[https://www.weatherapi.com/](https://www.weatherapi.com/)

## :fire: Built With

This project was built using these technologies.

- [React.js v18](https://reactjs.org/)
- [Material UI v5](https://mui.com/)

## 🛠 Quick Start

```bash
# Install dependencies
npm install

# Serve on localhost:3000
npm start

# Build for production
npm run build

# Format with prettier
npm run format

# Lint with eslint
npm run lint
```

## :package: Deploy to Netlify

```bash
# Generate a production build and deploy it

  "scripts": {
    ...
    "predeploy": "npm run build",
    "deploy": "netlify deploy -p"
  },
```

### Status badge

[![Netlify Status](https://api.netlify.com/api/v1/badges/60489cf1-a118-47ff-bcae-6b6b2b957f2a/deploy-status)](https://app.netlify.com/sites/the-awesome-theobroma-site/deploys)
