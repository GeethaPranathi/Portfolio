# Kanala Geetha Pranathi - Personal Portfolio

Welcome to the source code for my personal portfolio! This is a modern, highly interactive React application built to showcase my experience, projects, skills, and coding profile statistics.

## ✨ Features

- **Automated Coding Stats:** A custom Node.js script automatically fetches my real-time LeetCode and GitHub statistics directly from their official APIs. A GitHub Action runs this script every night at midnight to keep the live site constantly updated.
- **Dynamic Particle Background:** A highly optimized, responsive floating particle network built with `@tsparticles/react`.
- **Modern UI/UX:** Built with React, Tailwind CSS, and Framer Motion for smooth, high-end animations, glassmorphism components, and a premium dark aesthetic.
- **Resume Integration:** A downloadable, directly integrated PDF resume viewer.
- **Fully Responsive:** Carefully crafted to look perfect on mobile, tablet, and desktop screens.

## 🛠 Tech Stack

- **Framework:** React + Vite
- **Styling:** Tailwind CSS (Utility-first CSS)
- **Icons:** Lucide React
- **Animations:** Custom CSS Keyframes
- **Deployment & Automation:** GitHub Actions + Node.js (Fetch API)

## 🚀 Getting Started

To run this project locally:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/GeethaPranathi/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Update your coding stats locally (Optional):**
   ```bash
   node scripts/update-stats.js
   ```

## ⚙️ Automated Stats Infrastructure

The `scripts/update-stats.js` script connects to:
- **LeetCode GraphQL API:** To fetch the exact number of problems solved (Easy, Medium, Hard).
- **GitHub REST API:** To pull the latest repository counts and followers.

This script updates the `src/data/live-stats.json` file. A GitHub workflow (`.github/workflows/update-stats.yml`) automatically executes this script daily, committing the new stats to the repository if changes are detected, which seamlessly updates the live site.

## 📫 Contact

Feel free to reach out for internship opportunities, project collaborations, or a friendly chat!
- **Email:** pranathikavyakanala@gmail.com
- **LinkedIn:** [Kanala Geetha Pranathi](https://www.linkedin.com/in/kanala-geetha-pranathi)
- **GitHub:** [GeethaPranathi](https://github.com/GeethaPranathi)
