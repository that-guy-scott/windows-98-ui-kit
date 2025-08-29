# Windows 98 Design Specifications

## Color Palette

### Primary Colors
- **Control Face**: `#c0c0c0` (RGB: 192, 192, 192) - Main background color for buttons, dialogs
- **Control Light**: `#ffffff` (RGB: 255, 255, 255) - Light edge highlights
- **Control Light Light**: `#dfdfdf` (RGB: 223, 223, 223) - Secondary light highlights
- **Control Dark**: `#808080` (RGB: 128, 128, 128) - Dark edge shadows
- **Control Dark Dark**: `#404040` (RGB: 64, 64, 64) - Deepest shadows

### System Colors
- **Window Background**: `#ffffff` (RGB: 255, 255, 255) - Text area backgrounds
- **Window Text**: `#000000` (RGB: 0, 0, 0) - Primary text color
- **Selection Background**: `#0a246a` (RGB: 10, 36, 106) - Selected item background
- **Selection Text**: `#ffffff` (RGB: 255, 255, 255) - Selected item text
- **Inactive Selection**: `#808080` (RGB: 128, 128, 128) - Unfocused selection background

### Accent Colors
- **Active Title**: `#0a246a` (RGB: 10, 36, 106) - Active window titlebar
- **Inactive Title**: `#808080` (RGB: 128, 128, 128) - Inactive window titlebar
- **Title Text**: `#ffffff` (RGB: 255, 255, 255) - Titlebar text color
- **Menu Highlight**: `#0a246a` (RGB: 10, 36, 106) - Menu hover background

### Status Colors
- **Info Text**: `#000080` (RGB: 0, 0, 128) - Information messages
- **Error Text**: `#800000` (RGB: 128, 0, 0) - Error messages

## Typography

### Font Stack
```css
font-family: "MS Sans Serif", sans-serif;
```

### Font Sizes
- **Window Title**: 11px, bold
- **Menu Text**: 11px, normal
- **Button Text**: 11px, normal
- **Dialog Text**: 11px, normal
- **Small Text**: 8px, normal (status bars, tooltips)

### Text Rendering
- **font-smooth**: never (to maintain pixelated appearance)
- **-webkit-font-smoothing**: none
- **-moz-osx-font-smoothing**: unset

## Spacing and Layout

### Grid System
- **Base Unit**: 2px
- **Standard Spacing**: 4px, 8px, 12px, 16px
- **Button Padding**: 4px 12px
- **Dialog Padding**: 8px 12px
- **Window Border Width**: 2px

### Component Dimensions
- **Titlebar Height**: 18px
- **Button Height**: 23px
- **Menu Height**: 19px
- **Scrollbar Width**: 16px
- **Icon Size**: 16x16px (small), 32x32px (large)

## Border and Shadow Effects

### Raised Border (3D Effect)
```css
border-top: 1px solid #ffffff;
border-left: 1px solid #ffffff;
border-right: 1px solid #808080;
border-bottom: 1px solid #808080;
```

### Sunken Border (Pressed Effect)
```css
border-top: 1px solid #808080;
border-left: 1px solid #808080;
border-right: 1px solid #ffffff;
border-bottom: 1px solid #ffffff;
```

### Deep Sunken Border (Text Fields)
```css
border-top: 1px solid #404040;
border-left: 1px solid #404040;
border-right: 1px solid #dfdfdf;
border-bottom: 1px solid #dfdfdf;
```

### Focus Outline
```css
outline: 1px dotted #000000;
outline-offset: -1px;
```

## Component States

### Button States
- **Default**: Raised border, Control Face background
- **Hover**: Subtle highlight, maintain raised border
- **Active/Pressed**: Sunken border, slightly darker background
- **Focused**: Dotted outline inside border
- **Disabled**: Grayed text, maintain raised border

### Window States
- **Active**: Blue titlebar (#0a246a)
- **Inactive**: Gray titlebar (#808080)
- **Minimized**: Hidden content area
- **Maximized**: Full viewport coverage

## Cursor Styles

### Standard Cursors
- **Default**: Arrow cursor
- **Text**: I-beam cursor
- **Wait**: Hourglass cursor
- **Resize**: Bidirectional arrows
- **Hand**: Pointing hand (for links)

## Accessibility Considerations

### Focus Management
- Tab order follows logical flow
- Focus indicators clearly visible
- Keyboard shortcuts supported

### Color Contrast
- Ensure sufficient contrast ratios
- Provide alternative indicators beyond color
- Support high contrast mode

## Implementation Notes

### CSS Methodology
- Use BEM naming convention
- Component-based architecture
- CSS custom properties for theming
- Minimal use of modern CSS features for compatibility

### Browser Compatibility
- Target: IE 11+, Chrome, Firefox, Safari
- Avoid CSS Grid (use Flexbox sparingly)
- Use traditional box model
- Test with different font rendering settings