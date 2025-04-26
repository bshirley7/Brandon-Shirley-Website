# 🎨 Color Customization Guide

Welcome! This guide will help you change the colors of your portfolio website without needing to understand code. It's designed to be simple and straightforward.

## 📍 Where to Change Colors

All colors are defined in the Tailwind configuration file:
`tailwind.config.js`

## 🌈 How to Change Colors

1. Open `tailwind.config.js` in Visual Studio Code
2. Look for the `theme.extend` section
3. Find the color you want to change
4. Replace the hex code (e.g., '#000000') with your new color
5. Save the file - changes will apply automatically!

## 🎯 Color Categories

Your website uses these color categories:

### 1. Background Colors
Found in the `backgroundColor` section:
```js
backgroundColor: {
  'primary': '#000000',      // Main background
  'primary-light': '#333333', // Lighter shade for hover
  'primary-dark': '#000000',  // Darker shade for emphasis
  'surface': '#111111',       // Secondary background
  'card': '#222222',         // Card backgrounds
}
```

### 2. Text Colors
Found in the `textColor` section:
```js
textColor: {
  'primary': '#FFFFFF',    // Main text
  'secondary': '#CCCCCC',  // Less important text
  'muted': '#999999',      // Subtle text
}
```

### 3. Accent Colors
Found in the `colors` section:
```js
colors: {
  'accent': '#FF0000',          // Primary accent
  'accent-secondary': '#00FF00', // Secondary accent
  'accent-tertiary': '#0000FF',  // Third accent
  'success': '#4CAF50',         // Success messages
  'warning': '#FFC107',         // Warning messages
  'error': '#F44336',           // Error messages
  'info': '#2196F3',           // Info messages
}
```

## 🎨 Example Color Schemes

### Modern Dark Theme
```js
backgroundColor: {
  'primary': '#000000',    // Black background
  'surface': '#111111',    // Dark gray surface
},
textColor: {
  'primary': '#FFFFFF',    // White text
},
colors: {
  'accent': '#FF3366',     // Pink accent
}
```

### Light Professional Theme
```js
backgroundColor: {
  'primary': '#FFFFFF',    // White background
  'surface': '#F5F5F5',    // Light gray surface
},
textColor: {
  'primary': '#333333',    // Dark text
},
colors: {
  'accent': '#2196F3',     // Blue accent
}
```

## 🔍 Finding Colors

1. Use an online color picker:
   - Visit [HTML Color Codes](https://htmlcolorcodes.com/color-picker/)
   - Pick your color
   - Copy the hex code (starts with #)

2. Use your brand colors:
   - Get hex codes from your brand guide
   - Or use a tool like [ColorZilla](https://www.colorzilla.com/) to pick colors from your logo

## 💡 Tips for Great Color Combinations

1. **Start Simple**
   - Choose a background color (`primary`)
   - Pick a contrasting text color (`primary` in textColor)
   - Add one accent color (`accent`)

2. **Ensure Readability**
   - Dark text needs light backgrounds
   - Light text needs dark backgrounds
   - Test your combinations

3. **Create Harmony**
   - Use your accent color sparingly
   - Keep similar elements the same color
   - Use color to guide attention

## ❓ Common Questions

### How do I preview colors?
Use the color picker at [HTML Color Codes](https://htmlcolorcodes.com/color-picker/) to see how colors look before using them.

### What if my colors don't look good together?
Try using a color palette generator like [Coolors](https://coolors.co/) to find harmonious color combinations.

### How do I undo color changes?
Keep a backup of your original colors by copying the color values from `tailwind.config.js` before making changes.

## 🆘 Need Help?

If you're stuck or need inspiration:
1. Look at other portfolio websites you like
2. Use a color palette generator
3. Start with your favorite color and build from there

Remember: The best color scheme is one that makes your work look great and feels true to your style! 