export const theme = {
    colors: {
        primary: '#8B5CF6', // Purple 500
        primaryDark: '#7C3AED', // Purple 600
        primaryLight: '#A78BFA', // Purple 400
        secondary: '#64748b',
        background: '#ffffff',
        foreground: '#0f172a',
        accent: '#faf5ff', // Purple 50
        accentMedium: '#f3e8ff', // Purple 100
        border: '#e9d5ff', // Purple 200
        success: '#22c55e',
        error: '#ef4444',
        warning: '#f59e0b',
        info: '#3b82f6',
        glass: 'rgba(255, 255, 255, 0.7)',
        glassDark: 'rgba(139, 92, 246, 0.1)',
    },
    breakpoints: {
        mobile: '576px',
        tablet: '768px',
        desktop: '1024px',
        large: '1440px',
    },
    spacing: {
        xs: '0.25rem',
        sm: '0.5rem',
        md: '1rem',
        lg: '1.5rem',
        xl: '2rem',
        xxl: '4rem',
    },
    shadows: {
        sm: '0 1px 2px 0 rgba(139, 92, 246, 0.05)',
        md: '0 4px 6px -1px rgba(139, 92, 246, 0.1), 0 2px 4px -1px rgba(139, 92, 246, 0.06)',
        lg: '0 10px 15px -3px rgba(139, 92, 246, 0.1), 0 4px 6px -2px rgba(139, 92, 246, 0.05)',
        xl: '0 20px 25px -5px rgba(139, 92, 246, 0.1), 0 10px 10px -5px rgba(139, 92, 246, 0.04)',
        glass: '0 8px 32px 0 rgba(139, 92, 246, 0.15)',
        glow: '0 0 20px rgba(139, 92, 246, 0.3)',
    },
    gradients: {
        primary: 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)',
        secondary: 'linear-gradient(135deg, #A78BFA 0%, #8B5CF6 100%)',
        accent: 'linear-gradient(135deg, #faf5ff 0%, #f3e8ff 100%)',
        glass: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.7) 100%)',
    },
    animations: {
        transition: '0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        transitionSlow: '0.5s cubic-bezier(0.4, 0, 0.2, 1)',
        transitionFast: '0.15s cubic-bezier(0.4, 0, 0.2, 1)',
    }
};

export type Theme = typeof theme;
