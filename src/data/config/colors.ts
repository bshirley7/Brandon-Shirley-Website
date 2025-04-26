/**
 * COLOR CONFIGURATION
 * 
 * This file controls the colors used throughout your portfolio website.
 * To change colors, simply replace the hex codes below with your preferred colors.
 * 
 * TIPS:
 * - Use a color picker tool to find hex codes (like https://htmlcolorcodes.com/color-picker/)
 * - Make sure text colors have good contrast with background colors
 * - Keep your color palette consistent for a professional look
 */

export const colors = {
  // Main colors
  primary: {
    main: '#000000',     // Main background color
    light: '#333333',    // Lighter shade for hover states
    dark: '#000000',     // Darker shade for emphasis
  },
  
  // Text colors
  text: {
    primary: '#FFFFFF',   // Main text color
    secondary: '#CCCCCC', // Secondary text (less important)
    muted: '#999999',     // Muted text (even less important)
  },
  
  // Accent colors
  accent: {
    primary: '#FF0000',   // Primary accent color (for buttons, links)
    secondary: '#00FF00', // Secondary accent color
    tertiary: '#0000FF',  // Tertiary accent color
  },
  
  // Background colors
  background: {
    main: '#000000',      // Main background
    alt: '#111111',       // Alternative background
    card: '#222222',      // Card background
  },
  
  // Status colors
  status: {
    success: '#4CAF50',   // Success messages
    warning: '#FFC107',   // Warning messages
    error: '#F44336',     // Error messages
    info: '#2196F3',      // Information messages
  }
};

/**
 * HOW TO USE THESE COLORS
 * 
 * 1. To change a color, simply replace the hex code with your preferred color
 * 2. After changing colors, restart your development server
 * 3. The changes will be applied automatically throughout your website
 * 
 * EXAMPLE:
 * To change the main background color from black to dark blue:
 * Change: main: '#000000'
 * To: main: '#000033'
 */ 