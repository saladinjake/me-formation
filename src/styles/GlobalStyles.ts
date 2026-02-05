import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --primary: #8B5CF6;
    --primary-dark: #7C3AED;
    --primary-light: #A78BFA;
    --secondary: #64748b;
    --background: #ffffff;
    --foreground: #0f172a;
    --accent: #faf5ff;
    --border: #e9d5ff;
    --success: #22c55e;
    --error: #ef4444;
    --glass: rgba(255, 255, 255, 0.7);
    --shadow-sm: 0 1px 2px 0 rgba(139, 92, 246, 0.05);
    --shadow-md: 0 4px 6px -1px rgba(139, 92, 246, 0.1);
    --shadow-lg: 0 10px 15px -3px rgba(139, 92, 246, 0.1);
    --shadow-glass: 0 8px 32px 0 rgba(139, 92, 246, 0.15);
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html,
  body {
    max-width: 100vw;
    overflow-x: hidden;
    background: var(--background);
    color: var(--foreground);
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: all 0.3s ease;
  }

  button {
    cursor: pointer;
    border: none;
    background: transparent;
    font-family: inherit;
    transition: all 0.3s ease;
  }

  ul {
    list-style: none;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    line-height: 1.2;
    color: var(--foreground);
  }

  /* Custom Scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: var(--accent);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--primary-light);
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: var(--primary);
  }

  /* Selection color */
  ::selection {
    background: var(--primary-light);
    color: white;
  }

  .glass-card {
    background: var(--glass);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 1.5rem;
    box-shadow: var(--shadow-glass);
  }
`;
