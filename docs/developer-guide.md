# Windows 98 UI Kit - Developer Guide

This guide provides detailed information for developers who want to integrate, customize, or extend the Windows 98 UI Kit.

## Table of Contents

1. [Quick Start](#quick-start)
2. [Installation & Integration](#installation--integration)
3. [Customization Guide](#customization-guide)
4. [CSS Architecture](#css-architecture)
5. [Theme Variables](#theme-variables)
6. [Best Practices](#best-practices)
7. [Troubleshooting](#troubleshooting)
8. [Contributing](#contributing)

---

## Quick Start

### Basic Setup

1. **Download or clone the repository:**
   ```bash
   git clone https://github.com/yourname/window-98-ui-kit.git
   ```

2. **Include the CSS in your HTML:**
   ```html
   <link rel="stylesheet" href="path/to/src/styles/base/index.css">
   ```

3. **Start using components:**
   ```html
   <div class="window">
       <div class="titlebar">
           <div class="titlebar-text">My Application</div>
       </div>
       <div class="window-content">
           <button class="button">Click me!</button>
       </div>
   </div>
   ```

### CDN Usage (Future)

```html
<!-- Future CDN link -->
<link rel="stylesheet" href="https://cdn.example.com/windows98-ui-kit/1.0.0/index.css">
```

---

## Installation & Integration

### Package Manager Installation

**NPM:**
```bash
npm install windows-98-ui-kit
```

**Yarn:**
```bash
yarn add windows-98-ui-kit
```

### Manual Installation

1. Download the latest release from the repository
2. Extract the files to your project directory
3. Reference the CSS file in your HTML

### Webpack Integration

```javascript
// webpack.config.js
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
};

// In your JavaScript
import 'windows-98-ui-kit/src/styles/base/index.css';
```

### Sass/SCSS Integration

```scss
// Import the entire kit
@import '~windows-98-ui-kit/src/styles/base/index.css';

// Or import specific components
@import '~windows-98-ui-kit/src/styles/components/button.css';
@import '~windows-98-ui-kit/src/styles/components/window.css';
```

### Build Process Integration

**PostCSS:**
```javascript
// postcss.config.js
module.exports = {
  plugins: [
    require('autoprefixer'),
    require('cssnano')
  ]
}
```

**Gulp:**
```javascript
const gulp = require('gulp');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');

gulp.task('css', () => {
  return gulp.src([
    'node_modules/windows-98-ui-kit/src/styles/base/index.css',
    'src/custom-styles.css'
  ])
  .pipe(concat('app.css'))
  .pipe(cleanCSS())
  .pipe(gulp.dest('dist/css'));
});
```

---

## Customization Guide

### CSS Custom Properties

The UI kit uses CSS custom properties (variables) for easy customization:

```css
:root {
  /* Color System */
  --button-face: #c0c0c0;
  --button-shadow: #808080;
  --button-highlight: #ffffff;
  --button-dark-shadow: #404040;
  
  /* Text Colors */
  --text-color: #000000;
  --selected-text: #ffffff;
  
  /* Background Colors */
  --window-bg: #ffffff;
  --selected-bg: #000080;
  --desktop-bg: #008080;
  
  /* Border Colors */
  --border-color: #808080;
  --focus-border: #000080;
}
```

### Creating Custom Themes

**Dark Theme Example:**
```css
.theme-dark {
  --button-face: #404040;
  --button-shadow: #202020;
  --button-highlight: #606060;
  --text-color: #ffffff;
  --window-bg: #303030;
  --selected-bg: #0060ff;
  --border-color: #606060;
}
```

**High Contrast Theme:**
```css
.theme-high-contrast {
  --button-face: #ffffff;
  --button-shadow: #000000;
  --button-highlight: #ffffff;
  --text-color: #000000;
  --window-bg: #ffffff;
  --selected-bg: #000000;
  --selected-text: #ffffff;
  --border-color: #000000;
}
```

### Component-Specific Customization

**Custom Button Styles:**
```css
.button-custom {
  background: linear-gradient(to bottom, #ff6b6b, #ee5a24);
  color: white;
  border-color: #c44569;
}

.button-custom:hover {
  background: linear-gradient(to bottom, #ff7675, #fd79a8);
}

.button-custom:active {
  background: linear-gradient(to bottom, #d63031, #e84393);
}
```

**Custom Window Styling:**
```css
.window-modern {
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  overflow: hidden;
}

.window-modern .titlebar {
  background: linear-gradient(to right, #667eea, #764ba2);
  color: white;
  border-radius: 8px 8px 0 0;
}
```

### Icon Customization

**Custom Icon Sets:**
```css
.icon--custom-save {
  background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiI+...');
}

.icon--custom-folder {
  background-image: url('./assets/icons/custom-folder.svg');
}
```

---

## CSS Architecture

### File Structure

```
src/styles/
├── base/
│   ├── index.css          # Main entry point
│   ├── reset.css          # CSS reset
│   └── variables.css      # CSS custom properties
├── utilities/
│   ├── layout.css         # Layout utilities
│   ├── typography.css     # Text utilities
│   ├── borders.css        # Border utilities
│   └── backgrounds.css    # Background utilities
└── components/
    ├── window.css         # Window system
    ├── button.css         # Buttons
    ├── input.css          # Form inputs
    └── ...               # Other components
```

### Naming Conventions

The UI kit follows a modified BEM (Block Element Modifier) methodology:

**Block:** `.button`, `.window`, `.dialog`
**Element:** `.button-text`, `.window-content`, `.dialog-buttons`
**Modifier:** `.button--primary`, `.window--maximized`, `.dialog--error`

**Utility Classes:** `.u-text-center`, `.u-margin-small`, `.u-hidden`

### CSS Methodology

**Component-based Structure:**
- Each component has its own CSS file
- Components are self-contained and reusable
- Minimal dependencies between components

**Utility-first Approach:**
- Common patterns extracted into utility classes
- Consistent spacing and sizing system
- Flexible layout options

**Progressive Enhancement:**
- Base styles work in all browsers
- Enhanced features for modern browsers
- Graceful degradation for older browsers

---

## Theme Variables

### Complete Variable Reference

```css
:root {
  /* Core Colors */
  --button-face: #c0c0c0;
  --button-shadow: #808080;
  --button-highlight: #ffffff;
  --button-dark-shadow: #404040;
  --button-light: #dfdfdf;
  
  /* Interactive States */
  --button-hover-bg: #e0e0e0;
  --button-active-bg: #a0a0a0;
  --button-disabled-bg: #c0c0c0;
  --button-disabled-text: #808080;
  
  /* Text Colors */
  --text-color: #000000;
  --text-disabled: #808080;
  --selected-text: #ffffff;
  --link-color: #0000ff;
  --link-visited: #800080;
  
  /* Background Colors */
  --window-bg: #ffffff;
  --selected-bg: #000080;
  --desktop-bg: #008080;
  --titlebar-active: linear-gradient(to right, #0a246a, #3771c8);
  --titlebar-inactive: linear-gradient(to right, #808080, #c0c0c0);
  
  /* Border Colors */
  --border-color: #808080;
  --border-light: #ffffff;
  --border-dark: #404040;
  --focus-border: #000080;
  --error-border: #ff0000;
  
  /* Spacing System */
  --spacing-xs: 2px;
  --spacing-sm: 4px;
  --spacing-md: 8px;
  --spacing-lg: 16px;
  --spacing-xl: 24px;
  
  /* Typography */
  --font-family: "MS Sans Serif", sans-serif;
  --font-size-xs: 8px;
  --font-size-sm: 10px;
  --font-size-base: 11px;
  --font-size-lg: 12px;
  --font-size-xl: 14px;
  
  /* Z-index Scale */
  --z-dropdown: 1000;
  --z-sticky: 1020;
  --z-fixed: 1030;
  --z-modal: 1040;
  --z-tooltip: 1070;
  
  /* Animation */
  --transition-fast: 0.15s ease;
  --transition-base: 0.3s ease;
  --transition-slow: 0.5s ease;
}
```

### Responsive Breakpoints

```css
/* Custom Media Queries */
@custom-media --sm-up (min-width: 576px);
@custom-media --md-up (min-width: 768px);
@custom-media --lg-up (min-width: 992px);
@custom-media --xl-up (min-width: 1200px);

/* Usage in components */
@media (--md-up) {
  .window {
    max-width: 800px;
  }
}
```

---

## Best Practices

### HTML Structure

**Use semantic HTML:**
```html
<!-- Good -->
<dialog class="dialog" role="dialog" aria-labelledby="dialog-title">
  <h2 id="dialog-title" class="titlebar-text">Confirm Action</h2>
  <p>Are you sure you want to delete this file?</p>
  <div class="dialog-buttons">
    <button class="button" type="button">Cancel</button>
    <button class="button button--primary" type="submit">Delete</button>
  </div>
</dialog>

<!-- Avoid -->
<div class="dialog">
  <div class="titlebar-text">Confirm Action</div>
  <div>Are you sure you want to delete this file?</div>
  <div class="dialog-buttons">
    <div class="button">Cancel</div>
    <div class="button button--primary">Delete</div>
  </div>
</div>
```

### Accessibility Guidelines

**Always include proper labels:**
```html
<label for="username">Username:</label>
<input id="username" class="input" type="text" required>
```

**Use ARIA attributes when needed:**
```html
<button class="button" aria-expanded="false" aria-controls="dropdown-menu">
  Options
</button>
<div id="dropdown-menu" class="dropdown-menu" aria-hidden="true">
  <!-- Menu items -->
</div>
```

**Provide keyboard navigation:**
```javascript
// Example: Tab navigation for custom components
document.addEventListener('keydown', (e) => {
  if (e.key === 'Tab') {
    // Handle tab navigation
  }
  if (e.key === 'Escape') {
    // Close modals/dropdowns
  }
});
```

### Performance Optimization

**Load only needed components:**
```html
<!-- Load specific components instead of the entire kit -->
<link rel="stylesheet" href="styles/components/button.css">
<link rel="stylesheet" href="styles/components/window.css">
```

**Use CSS containment:**
```css
.window {
  contain: layout style paint;
}
```

**Optimize images and icons:**
- Use SVG for icons when possible
- Optimize PNG/GIF images for Windows 98 aesthetic
- Consider sprite sheets for multiple icons

### JavaScript Integration

**Framework-agnostic approach:**
```javascript
// Vanilla JavaScript
class Win98Dialog {
  constructor(element) {
    this.element = element;
    this.init();
  }
  
  init() {
    // Initialize dialog behavior
  }
  
  show() {
    this.element.style.display = 'block';
  }
  
  hide() {
    this.element.style.display = 'none';
  }
}

// React integration
const Win98Button = ({ children, variant, ...props }) => {
  const className = `button ${variant ? `button--${variant}` : ''}`;
  return <button className={className} {...props}>{children}</button>;
};

// Vue integration
Vue.component('win98-button', {
  props: ['variant'],
  template: `
    <button :class="buttonClasses" @click="$emit('click')">
      <slot></slot>
    </button>
  `,
  computed: {
    buttonClasses() {
      return {
        'button': true,
        [`button--${this.variant}`]: this.variant
      };
    }
  }
});
```

---

## Troubleshooting

### Common Issues

**Issue: Styles not loading**
```
Solution: Check file paths and ensure CSS is loaded before rendering components
```

**Issue: Icons not displaying**
```
Solution: Verify SVG data URIs are properly encoded and check browser console for errors
```

**Issue: Buttons not styled correctly**
```
Solution: Ensure proper HTML structure and check for CSS specificity conflicts
```

**Issue: Z-index conflicts**
```
Solution: Use the provided z-index variables and avoid arbitrary z-index values
```

### Browser-Specific Issues

**Internet Explorer:**
- CSS custom properties not supported (use PostCSS plugin for fallbacks)
- SVG data URIs may need encoding adjustments

**Safari:**
- Flexbox behavior differences (test layouts thoroughly)
- WebKit-specific prefixes may be needed for some properties

**Firefox:**
- Scrollbar styling differences (provide fallbacks)
- Button focus outlines (customize as needed)

### Debugging Tools

**CSS Custom Property Inspector:**
```javascript
// Check computed custom property values
const element = document.querySelector('.button');
const styles = getComputedStyle(element);
console.log(styles.getPropertyValue('--button-face'));
```

**Component State Debugging:**
```css
/* Add visual debugging borders */
.debug * {
  outline: 1px solid red !important;
}

.debug .button {
  outline-color: blue !important;
}

.debug .window {
  outline-color: green !important;
}
```

### Performance Profiling

**CSS Performance:**
```javascript
// Measure CSS parsing time
console.time('CSS Load');
const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'path/to/windows98-ui-kit.css';
link.onload = () => console.timeEnd('CSS Load');
document.head.appendChild(link);
```

**Layout Performance:**
```javascript
// Monitor layout thrashing
const observer = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    if (entry.entryType === 'measure') {
      console.log(`${entry.name}: ${entry.duration}ms`);
    }
  }
});
observer.observe({ entryTypes: ['measure'] });
```

---

## Contributing

### Development Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourname/windows-98-ui-kit.git
   cd windows-98-ui-kit
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

### Code Style Guidelines

**CSS Formatting:**
- Use 2 spaces for indentation
- Use lowercase for property names and values
- Use single quotes for strings
- Group related properties together

**File Organization:**
- One component per CSS file
- Use descriptive file names
- Include header comments with component description

**Component Development:**
```css
/* Component: Button
 * Description: Standard Windows 98 button component
 * Dependencies: variables.css, borders.css
 * Version: 1.0.0
 */

.button {
  /* Layout */
  display: inline-block;
  padding: var(--spacing-sm) var(--spacing-md);
  
  /* Appearance */
  background: var(--button-face);
  border: 2px solid;
  border-color: var(--button-highlight) var(--button-shadow) var(--button-shadow) var(--button-highlight);
  
  /* Typography */
  font-family: var(--font-family);
  font-size: var(--font-size-base);
  
  /* Interaction */
  cursor: pointer;
  user-select: none;
}
```

### Testing Guidelines

**Cross-browser Testing:**
- Test in Chrome, Firefox, Safari, Edge
- Verify mobile responsiveness
- Check accessibility with screen readers

**Component Testing:**
- Test all interactive states (hover, active, disabled)
- Verify keyboard navigation
- Test with different content lengths

### Submission Process

1. Fork the repository
2. Create a feature branch
3. Implement changes with tests
4. Update documentation
5. Submit pull request with detailed description

---

## Resources

### External Links

- [Windows 98 Design Guidelines (Archive)](https://web.archive.org/web/19990427143154/http://msdn.microsoft.com/library/books/winguide/ch02.htm)
- [CSS Custom Properties Documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
- [Web Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Modern CSS Techniques](https://css-tricks.com/)

### Tools

- [CSS Validation Service](https://jigsaw.w3.org/css-validator/)
- [Accessibility Testing Tools](https://wave.webaim.org/)
- [Cross-browser Testing](https://www.browserstack.com/)
- [Performance Testing](https://web.dev/measure/)

### Community

- [GitHub Issues](https://github.com/yourname/windows-98-ui-kit/issues) - Bug reports and feature requests
- [GitHub Discussions](https://github.com/yourname/windows-98-ui-kit/discussions) - Community discussions
- [Stack Overflow](https://stackoverflow.com/questions/tagged/windows-98-ui-kit) - Developer questions

---

*Last updated: December 1998 (in the spirit of Windows 98!)*