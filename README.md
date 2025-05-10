# SoftSell - Resell Unused Software Licenses

SoftSell is a modern, single-page marketing website designed to help businesses and individuals resell their unused software licenses easily and get paid fast.

## Features Implemented
*   **Hero Section:** Captivating headline, subheading, and a clear Call-to-Action (CTA) button.
*   **How It Works Section:** A simple 3-step visual guide (Upload License, Get Valuation, Get Paid).
*   **Why Choose Us Section:** Highlights key benefits like Fast Payments, Secure Transactions, Trusted by Companies, and Easy Process using icon-based cards.
*   **Testimonials Section:** Displays dummy customer reviews to build trust.
*   **Contact/Lead Form:** A functional form for users to request a quote, including fields for Name, Email, Company, License Type (dropdown), and Message. Includes basic frontend validation.
*   **Text-Based Logo:** "SoftSell" placeholder logo in the header.
*   **Favicon:** A simple 'S' favicon.
*   **SEO Tags:** Basic meta title and description for search engine optimization.
*   **Responsive Design:** The website is fully responsive and adapts to various screen sizes (desktop, tablet, mobile).
*   **Modern UI/UX:** Clean layout, ample padding and spacing, modern blue/soft tech color palette, and smooth animations using Framer Motion.
*   **AI Chat Widget (Mock):** A floating chat button that opens a modal with a hardcoded Q&A interaction for "How do I sell my license?".
*   PFA-
  ![image](https://github.com/user-attachments/assets/8c23c2d7-504d-4ef4-8fc6-400381b4738e)
  ![image](https://github.com/user-attachments/assets/1dcbbe9d-c3ca-4e5f-93e9-6d8e798038ee)
  ![image](https://github.com/user-attachments/assets/f5f07bd1-aae4-4727-80c3-593ccb853626)
  ![image](https://github.com/user-attachments/assets/fb13aaca-67fd-4f02-adb2-41064da55ec3)
  ![image](https://github.com/user-attachments/assets/33699387-8a12-43ee-9156-2c99f80b913b)
  ![image](https://github.com/user-attachments/assets/28476b18-c08c-487c-b1f5-89ce95f97597)

## Design Decisions
*   **Color Palette:** A modern and trustworthy color scheme primarily using blues (Primary: `hsl(220 75% 55%)`, Secondary: `hsl(200 80% 60%)`) and soft tech-inspired accents (Accent: `hsl(250 70% 65%)`). This aims to convey professionalism and reliability.
*   **Typography:**
    *   **Body Text:** 'Inter' for its excellent readability and modern feel.
    *   **Headings:** 'Poppins' for a slightly more distinct and friendly look for titles.
*   **Layout:** A clean, spacious single-page layout with clear visual hierarchy. Sections are well-defined with sufficient padding.
*   **Animations:** Subtle animations and transitions using Framer Motion are incorporated to enhance user experience without being distracting. This includes page load animations, hover effects, and section reveal animations.
*   **Component-Based Architecture:** The UI is broken down into reusable components (Header, Footer, Sections, UI elements like Button, Card, Input) for better maintainability and scalability.
*   **Glassmorphism/Neumorphism Elements:** Subtle use of background blur and soft shadows on cards and the chat widget to create a modern, layered feel.
*   **Icons:** Lucide React icons are used for clarity and visual appeal in sections like "How It Works" and "Why Choose Us".

### Prerequisites
- Node.js & npm installed
- PostgreSQL database setup

### Steps to Run Locally
#### Clone the Repository
```bash
git clone <repository-url>
cd SoftSell
```
#### Install dependencies and Run:
```
npm install
npm run dev
```

## Tech Stack
*   **Build Tool:** Vite
*   **Framework/Library:** React 18.2.0
*   **Styling:** TailwindCSS 3.3.3
*   **UI Components:** shadcn/ui (custom-built based on Radix UI primitives)
*   **Icons:** Lucide React 0.285.0
*   **Animations:** Framer Motion 10.16.4
*   **Language:** JavaScript (JSX for components)

## Time Taken
*   Approximately 3-4 hours (including initial setup, component creation, styling, content integration, and refinements).

## Live Demo & Repository
*   **Live Demo:** \[Placeholder - To be updated after deployment]
