
# HERE AND NOW AI - AgriChain Optimizer

![App Screenshot](https://raw.githubusercontent.com/hereandnowai/images/refs/heads/main/project-images/agrichain-optimizer-screenshot.png)

An innovative application by **HERE AND NOW AI** to optimize the agricultural supply chain from farm to table. This dashboard provides a comprehensive suite of tools for farmers, distributors, and retailers to manage inventory, track shipments, participate in a direct marketplace, and leverage powerful AI-driven analytics for forecasting and decision-making.

> _"designed with passion for innovation"_

[![Powered by Google Gemini](https://img.shields.io/badge/Powered%20by-Google%20Gemini-blue.svg)](https://ai.google.dev/)
[![React](https://img.shields.io/badge/React-19-blue?logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3-cyan?logo=tailwindcss)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org/)

---

## ✨ Features

- **Centralized Dashboard:** Get a bird's-eye view of your entire supply chain with key performance indicators like total inventory, ongoing shipments, market listings, and waste reduction metrics.
- **Inventory Management:** Detailed view of all crop inventories, tracking their current stage (planting, growing, harvesting, storage), quantity, and AI-assessed spoilage risk.
- **Real-Time Shipment Tracking:** Monitor the status and location of all shipments, from pending to delivered, with estimated delivery dates to anticipate arrivals.
- **Direct Marketplace:** A platform for farmers to list their produce and for buyers to connect directly, promoting fair pricing and reducing intermediaries.
- **🤖 AI-Powered Analytics (Powered by Google Gemini):** An interactive chat interface to gain deep insights from your data. Ask complex questions, request demand forecasts, or get actionable recommendations to optimize logistics and reduce waste.

---

## 🛠️ Tech Stack

- **Frontend:** [React](https://reactjs.org/) (v19) with TypeScript
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) for a modern, utility-first design system.
- **AI & Generative Language:** [Google Gemini API](https://ai.google.dev/) (`@google/genai`) for analytics, forecasting, and insights.
- **Module Loading:** Fetched via ES Module imports from `esm.sh` for a buildless development experience.
- **Icons:** Custom SVG icons for a consistent and clean user interface.

---

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- A modern web browser that supports ES Modules.
- A Google Gemini API Key. You can obtain one from [Google AI Studio](https://aistudio.google.com/app/apikey).

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/agrichain-optimizer.git
    cd agrichain-optimizer
    ```

2.  **Set up your Environment Variable:**
    This project requires a Google Gemini API key to power the AI analytics feature. You need to make this key available as an environment variable. The application is configured to read `process.env.API_KEY`. The hosting environment (like Vercel, Netlify, or a custom server) must have this variable set.

    *For local development, you will need a local server that can inject environment variables. A simple way is to use a tool like `vite`.*

3.  **Run the application:**
    Since this is a buildless setup, you can serve the files with any simple static server. A recommended tool is `http-server`.

    ```bash
    # Install http-server globally if you don't have it
    npm install -g http-server

    # Serve the project directory
    http-server .
    ```
    Now, open your browser and navigate to the local address provided by the server (e.g., `http://localhost:8080`).

---

## ⚙️ How It Works

The application is architected as a single-page application (SPA) using React and TypeScript.

-   **`index.html`**: The entry point of the application. It includes the `importmap` to manage dependencies like React and `@google/genai` without a build step.
-   **`App.tsx`**: The root component that manages the main layout, including the `Sidebar` and the main content area. It holds the state for the `activeView`.
-   **`components/`**:
    -   **`Sidebar.tsx`**: Renders the navigation menu, allowing users to switch between different views.
    -   **`Dashboard.tsx`**: A container component that conditionally renders the appropriate view (`Dashboard`, `Inventory`, `Shipments`, etc.) based on the user's selection.
    -   **`icons.tsx`**: A collection of SVG icons used throughout the application.
-   **`services/geminiService.ts`**: This is the core of the AI functionality.
    -   It initializes the `GoogleGenAI` client.
    -   The `getSupplyChainInsights` function constructs a detailed `systemInstruction` for the Gemini model, providing it with a real-time data snapshot of the current inventory, shipments, and market listings.
    -   It sends the user's query along with this rich context to the `gemini-2.5-flash` model and streams the response back to the UI for an interactive chat experience.
-   **`data/mockData.ts`**: Contains static data to simulate a real-world supply chain, making the application fully functional for demonstration purposes.

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE.md file for details.

---

## Acknowledgements

- Developed with passion by the **HERE AND NOW AI** (products engineering team - SHALINI).
- Icons provided by various open-source libraries.
- Powered by the incredible capabilities of the Google Gemini API.
