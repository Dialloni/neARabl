# Nearabl Coding Exercise

## Overview
This project is a web application designed to retrieve and display a dataset containing information about individuals based in the United States. The application allows users to search for individuals based on various criteria and provides detailed views for specific searches.

## Features
- Display a dataset in a table format.
- Search functionality based on:
  - State
  - First Name (displays user details)
  - Company Name (displays company details and plays a video of the company)
- Summary statistics showing the number of people per state.
- Visualization of the distribution of individuals across the US based on state or zip code.

## Project Structure
```
nearabl-coding-exercise
├── public
│   ├── index.html
│   └── favicon.ico
├── src
|   |__ assets
|   | |__ video
|   |   |__video.mp4
|   |
│   ├── components
│   │   ├── DataTable.tsx
│   │   ├── SearchBar.tsx
│   │   ├── UserDetails.tsx
│   │   ├── CompanyDetails.tsx
│   │   └── SummaryStats.tsx
|   |
│   ├── pages
│   │   ├── HomePage.tsx
│   │   |__ VisualizationPage.tsx
|   |   |__CompanyPage.tsx 
|   |
│   ├── services
│   │   └── api.ts
|   |
│   ├── utils
│   │   └── helpers.ts
|   |
│   ├── App.tsx
│   ├── index.tsx
|   |__ video.d.tsx
│   └── styles
│       └── App.css
|
├── package.json
├── tsconfig.json
└── README.md
|__ .env
```

## Setup Instructions
1. Clone the repository:
   ```
  https://github.com/Dialloni/neARabl.git
   ```
2. Navigate to the project directory:
   ```
   cd nearable
   ```
3. Install the dependencies:
   ```
   yarn install
   ```
4. Start the development server:
   ```
   yarn start
   ```
5. Open your browser and go to `http://localhost:3000` to view the application.

## Usage
- Use the search bar to filter individuals by state, first name, or company name.
- If a single result is found for a first name, detailed user information will be displayed.
- If a single result is found for a company name, company details will be shown along with a video.
- View summary statistics on the home page.
- Navigate to the visualization page to see data distribution.

## Technologies Used
- React
- TypeScript
- CSS
- HTML
- Axios (for API calls)
# neARabl
