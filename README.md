## ClassA Agency - Institutional Website

Welcome to the repository for the ClassA Agency's institutional website! This project showcases the capabilities of our front-end development team and provides a platform for lead generation.

### Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Lead Capture Functionality](#lead-capture-functionality)
- [SEO Optimization](#seo-optimization)
- [Contributing](#contributing)

![alt text](image.png)

## Overview

The ClassA Agency website is designed to demonstrate our expertise in digital marketing and front-end development. The site includes sections that describe our services, introduce our team, and offer contact information. The primary objective is to provide a professional online presence and capture leads from potential clients.

## Features

- **Responsive Design:** Optimized for all devices, including desktops, tablets, and mobile phones.
- **Lead Capture:** Integrated forms for capturing leads, with data securely stored in a MongoDB database.
- **SEO Optimization:** Basic SEO practices are implemented, including meta tags for titles, descriptions, and social media previews.
- **Team Showcase:** Highlights our team members and their unique skills.

## Technologies Used

- **Front-End:** Next.js, React, Tailwind CSS
- **Back-End:** Node.js, Express, MongoDB
- **Deployment:** Vercel

## Installation

To run this project locally, follow these steps:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/yourusername/classa-agency.git
   cd classa-agency
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Set Up Environment Variables:**

   Create a `.env.local` file in the root directory and add the following:

   ```
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

4. **Run the Application:**

   ```bash
   npm run dev
   ```

   The site should now be running on [http://localhost:3000](http://localhost:3000).


## Lead Capture Functionality

The lead capture functionality allows users to submit their contact information, which is then stored securely in a MongoDB database. This feature is implemented in the `ContactForm` component and includes server-side handling of form submissions.

## SEO Optimization

Basic SEO practices have been implemented, including:

- Meta tags for titles and descriptions.
- Open Graph tags for better social media integration.
- Canonical URLs to prevent duplicate content issues.

## Contributing

We welcome contributions! Please fork the repository and create a pull request with your changes. Ensure that your code follows the existing coding style and includes appropriate tests.

