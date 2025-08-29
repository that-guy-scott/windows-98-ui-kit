# Windows 98 UI Kit - Component Reference

This document provides detailed usage examples and documentation for all components in the Windows 98 UI Kit.

## Table of Contents

1. [Window System](#window-system)
2. [Buttons](#buttons)
3. [Form Controls](#form-controls)
4. [Navigation & Menus](#navigation--menus)
5. [Dialogs](#dialogs)
6. [Data Display](#data-display)
7. [Progress & Status](#progress--status)
8. [Layout & Containers](#layout--containers)
9. [Icons & Graphics](#icons--graphics)

---

## Window System

### Basic Window

Creates a resizable window container with authentic Windows 98 styling.

```html
<div class="window" style="width: 400px; height: 300px;">
    <div class="titlebar">
        <div class="titlebar-text">Window Title</div>
        <div class="titlebar-controls">
            <button class="window-control minimize-button"></button>
            <button class="window-control maximize-button"></button>
            <button class="window-control close-button"></button>
        </div>
    </div>
    <div class="window-content">
        <!-- Window content goes here -->
    </div>
</div>
```

**CSS Classes:**
- `.window` - Main window container
- `.titlebar` - Window title bar
- `.titlebar-text` - Title text
- `.titlebar-controls` - Container for window controls
- `.window-control` - Base class for window control buttons
- `.minimize-button`, `.maximize-button`, `.close-button` - Specific control buttons
- `.window-content` - Main content area

---

## Buttons

### Standard Buttons

```html
<!-- Basic button -->
<button class="button">Default Button</button>

<!-- Primary button -->
<button class="button button--primary">Primary Button</button>

<!-- Disabled button -->
<button class="button" disabled>Disabled Button</button>
```

### Button Sizes

```html
<button class="button button--small">Small</button>
<button class="button">Normal</button>
<button class="button button--large">Large</button>
```

### Special Buttons

```html
<!-- OK/Cancel buttons -->
<button class="button button--ok">OK</button>
<button class="button button--cancel">Cancel</button>

<!-- Icon button -->
<button class="icon-button">
    <div class="icon icon--small icon--settings"></div>
    Settings
</button>
```

**CSS Classes:**
- `.button` - Base button class
- `.button--primary` - Primary button variant
- `.button--small`, `.button--large` - Size variants
- `.button--ok`, `.button--cancel` - Semantic button types
- `.icon-button` - Button with icon

---

## Form Controls

### Text Inputs

```html
<!-- Basic text input -->
<input type="text" class="input" placeholder="Enter text">

<!-- Text area -->
<textarea class="textarea" rows="3" placeholder="Enter description"></textarea>

<!-- Form layout -->
<div class="form-layout">
    <div class="form-group">
        <label>Name:</label>
        <input type="text" class="input">
    </div>
    <div class="form-group">
        <label>Email:</label>
        <input type="email" class="input">
    </div>
</div>
```

### Selection Controls

```html
<!-- Dropdown select -->
<select class="select">
    <option>Option 1</option>
    <option>Option 2</option>
    <option>Option 3</option>
</select>

<!-- Checkboxes -->
<div class="checkbox-group">
    <label class="checkbox-label">
        <input type="checkbox" class="checkbox" checked>
        Option 1
    </label>
    <label class="checkbox-label">
        <input type="checkbox" class="checkbox">
        Option 2
    </label>
</div>

<!-- Radio buttons -->
<div class="radio-group">
    <label class="radio-label">
        <input type="radio" name="choice" class="radio" checked>
        Choice A
    </label>
    <label class="radio-label">
        <input type="radio" name="choice" class="radio">
        Choice B
    </label>
</div>
```

**CSS Classes:**
- `.input` - Text input styling
- `.textarea` - Multi-line text input
- `.select` - Dropdown select styling
- `.checkbox`, `.radio` - Checkbox and radio button styling
- `.form-layout` - Form container
- `.form-group` - Individual form field container

---

## Navigation & Menus

### Menu Bar

```html
<div class="menubar">
    <div class="menu-item">File</div>
    <div class="menu-item">Edit</div>
    <div class="menu-item">View</div>
    <div class="menu-item">Help</div>
</div>
```

### Dropdown Menu

```html
<div class="dropdown-menu">
    <div class="menu-item">New</div>
    <div class="menu-item">Open</div>
    <div class="menu-separator"></div>
    <div class="menu-item">Save</div>
    <div class="menu-item menu-item--disabled">Print</div>
</div>
```

### Toolbar

```html
<div class="toolbar">
    <button class="toolbar-button">
        <div class="icon icon--small icon--document"></div>
        New
    </button>
    <button class="toolbar-button">
        <div class="icon icon--small icon--folder"></div>
        Open
    </button>
    <div class="toolbar-separator"></div>
    <button class="toolbar-button">
        <div class="icon icon--small icon--print"></div>
        Print
    </button>
</div>
```

### Tabs

```html
<div class="tabs">
    <div class="tab-headers">
        <div class="tab active">Tab 1</div>
        <div class="tab">Tab 2</div>
        <div class="tab">Tab 3</div>
    </div>
    <div class="tab-content active">
        Content for Tab 1
    </div>
    <div class="tab-content">
        Content for Tab 2
    </div>
</div>
```

**CSS Classes:**
- `.menubar` - Horizontal menu bar
- `.menu-item` - Individual menu item
- `.dropdown-menu` - Dropdown menu container
- `.menu-separator` - Menu item separator
- `.toolbar` - Toolbar container
- `.toolbar-button` - Toolbar button
- `.toolbar-separator` - Toolbar separator
- `.tabs` - Tab container
- `.tab-headers` - Tab header container
- `.tab` - Individual tab
- `.tab-content` - Tab content area

---

## Dialogs

### Basic Dialog

```html
<div class="dialog">
    <div class="titlebar">
        <div class="titlebar-text">Dialog Title</div>
        <div class="titlebar-controls">
            <button class="window-control close-button"></button>
        </div>
    </div>
    <div class="dialog-content">
        <div class="dialog-icon">
            <div class="icon icon--large icon--info"></div>
        </div>
        <div class="dialog-text">
            <p>This is a dialog message.</p>
        </div>
    </div>
    <div class="dialog-buttons">
        <button class="button button--primary">OK</button>
        <button class="button">Cancel</button>
    </div>
</div>
```

### Message Box Types

```html
<!-- Information dialog -->
<div class="dialog dialog--info">
    <div class="dialog-icon">
        <div class="icon icon--large icon--info"></div>
    </div>
    <!-- ... -->
</div>

<!-- Warning dialog -->
<div class="dialog dialog--warning">
    <div class="dialog-icon">
        <div class="icon icon--large icon--warning"></div>
    </div>
    <!-- ... -->
</div>

<!-- Error dialog -->
<div class="dialog dialog--error">
    <div class="dialog-icon">
        <div class="icon icon--large icon--error"></div>
    </div>
    <!-- ... -->
</div>
```

**CSS Classes:**
- `.dialog` - Main dialog container
- `.dialog-content` - Dialog content area
- `.dialog-icon` - Icon container
- `.dialog-text` - Text content area
- `.dialog-buttons` - Button container

---

## Data Display

### List View

```html
<div class="listview">
    <div class="listview-header">
        <div class="listview-column">Name</div>
        <div class="listview-column">Size</div>
        <div class="listview-column">Type</div>
        <div class="listview-column">Modified</div>
    </div>
    <div class="listview-item selected">
        <div class="listview-cell">
            <div class="icon icon--small icon--document"></div>
            document.txt
        </div>
        <div class="listview-cell">1.2 KB</div>
        <div class="listview-cell">Text Document</div>
        <div class="listview-cell">12/15/1998</div>
    </div>
    <div class="listview-item">
        <div class="listview-cell">
            <div class="icon icon--small icon--folder"></div>
            My Folder
        </div>
        <div class="listview-cell">--</div>
        <div class="listview-cell">File Folder</div>
        <div class="listview-cell">12/10/1998</div>
    </div>
</div>
```

### Tree View

```html
<div class="treeview">
    <div class="tree-item expanded">
        <div class="tree-expander">-</div>
        <div class="icon icon--small icon--computer"></div>
        My Computer
    </div>
    <div class="tree-item tree-child">
        <div class="tree-expander">+</div>
        <div class="icon icon--small icon--drive"></div>
        (C:) Local Disk
    </div>
    <div class="tree-item tree-child tree-grandchild">
        <div class="tree-expander">+</div>
        <div class="icon icon--small icon--folder"></div>
        Program Files
    </div>
</div>
```

### Table

```html
<table class="table">
    <thead>
        <tr>
            <th class="table-header sortable">Name</th>
            <th class="table-header">Size</th>
            <th class="table-header">Modified</th>
        </tr>
    </thead>
    <tbody>
        <tr class="table-row selected">
            <td class="table-cell">document.txt</td>
            <td class="table-cell">1.2 KB</td>
            <td class="table-cell">12/15/1998</td>
        </tr>
        <tr class="table-row">
            <td class="table-cell">image.bmp</td>
            <td class="table-cell">256 KB</td>
            <td class="table-cell">12/10/1998</td>
        </tr>
    </tbody>
</table>
```

**CSS Classes:**
- `.listview` - List view container
- `.listview-header` - Header row
- `.listview-column` - Header column
- `.listview-item` - List item row
- `.listview-cell` - Individual cell
- `.treeview` - Tree view container
- `.tree-item` - Tree item
- `.tree-expander` - Expand/collapse button
- `.tree-child`, `.tree-grandchild` - Indentation classes
- `.table` - Table container
- `.table-header` - Table header cell
- `.table-row` - Table row
- `.table-cell` - Table cell

---

## Progress & Status

### Progress Bar

```html
<!-- Determinate progress -->
<div class="progress">
    <div class="progress-bar" style="width: 65%"></div>
</div>

<!-- Indeterminate progress -->
<div class="progress indeterminate">
    <div class="progress-bar"></div>
</div>

<!-- Progress with text -->
<div class="progress-container">
    <label>File Progress:</label>
    <div class="progress">
        <div class="progress-bar" style="width: 65%"></div>
    </div>
    <span class="progress-text">65% Complete</span>
</div>
```

### Status Bar

```html
<div class="statusbar">
    <div class="statusbar-section">Ready</div>
    <div class="statusbar-section">Items: 15</div>
    <div class="statusbar-section">12:34 PM</div>
    <div class="statusbar-resize-grip"></div>
</div>
```

**CSS Classes:**
- `.progress` - Progress bar container
- `.progress-bar` - Progress fill bar
- `.indeterminate` - Indeterminate progress modifier
- `.statusbar` - Status bar container
- `.statusbar-section` - Status bar section
- `.statusbar-resize-grip` - Resize grip

---

## Layout & Containers

### Panels

```html
<!-- Raised panel -->
<div class="panel panel--raised">
    <h4>Raised Panel</h4>
    <p>Content goes here</p>
</div>

<!-- Sunken panel -->
<div class="panel panel--sunken">
    <h4>Sunken Panel</h4>
    <p>Content goes here</p>
</div>

<!-- Group box -->
<div class="groupbox">
    <div class="groupbox-title">Options</div>
    <div class="groupbox-content">
        <label class="checkbox-label">
            <input type="checkbox" class="checkbox">
            Enable feature
        </label>
    </div>
</div>
```

### Splitters

```html
<div class="splitter-container">
    <div class="splitter-panel">
        <div class="panel panel--sunken">Left panel content</div>
    </div>
    <div class="splitter splitter-vertical"></div>
    <div class="splitter-panel">
        <div class="panel panel--sunken">Right panel content</div>
    </div>
</div>
```

**CSS Classes:**
- `.panel` - Base panel class
- `.panel--raised` - Raised panel variant
- `.panel--sunken` - Sunken panel variant
- `.groupbox` - Group box container
- `.groupbox-title` - Group box title
- `.groupbox-content` - Group box content area
- `.splitter-container` - Splitter layout container
- `.splitter-panel` - Splitter panel
- `.splitter` - Splitter handle
- `.splitter-vertical` - Vertical splitter

---

## Icons & Graphics

### System Icons

```html
<!-- Basic icon -->
<div class="icon icon--computer"></div>

<!-- Icon sizes -->
<div class="icon icon--small icon--folder"></div>
<div class="icon icon--medium icon--document"></div>
<div class="icon icon--large icon--application"></div>
<div class="icon icon--xlarge icon--settings"></div>
```

### Available Icons

- `.icon--computer` - Computer/My Computer
- `.icon--folder` - Folder
- `.icon--document` - Document/File
- `.icon--recycle-bin` - Recycle Bin
- `.icon--application` - Application/Program
- `.icon--settings` - Settings/Control Panel
- `.icon--network` - Network
- `.icon--drive` - Drive/Disk
- `.icon--print` - Print
- `.icon--warning` - Warning
- `.icon--error` - Error
- `.icon--info` - Information
- `.icon--search` - Search/Find

### Desktop Icons

```html
<div class="desktop-icon">
    <div class="icon icon--large icon--computer"></div>
    <div class="icon-label">My Computer</div>
</div>
```

### Custom Cursors

```html
<!-- Apply Windows 98 style cursors -->
<div class="cursor-win98-default">Default cursor</div>
<div class="cursor-win98-pointer">Hand pointer</div>
<div class="cursor-win98-text">Text cursor</div>
<div class="cursor-win98-wait">Wait cursor</div>
```

**CSS Classes:**
- `.icon` - Base icon class
- `.icon--small` - 16x16 pixels
- `.icon--medium` - 24x24 pixels
- `.icon--large` - 32x32 pixels
- `.icon--xlarge` - 48x48 pixels
- `.desktop-icon` - Desktop icon layout
- `.icon-label` - Icon text label
- `.cursor-win98-*` - Windows 98 style cursors

---

## Accessibility

### Keyboard Navigation

All interactive components support keyboard navigation:

- **Tab** - Navigate between focusable elements
- **Enter/Space** - Activate buttons and controls
- **Arrow keys** - Navigate within menus, lists, and trees
- **Escape** - Close dialogs and menus

### Screen Reader Support

Components include appropriate ARIA attributes:

```html
<button class="button" aria-label="Close window">
    <div class="window-control close-button"></div>
</button>

<div class="progress" role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100">
    <div class="progress-bar" style="width: 65%"></div>
</div>
```

### High Contrast Support

Components automatically adapt to high contrast mode preferences through CSS media queries.

---

## Browser Compatibility

The Windows 98 UI Kit supports:

- Chrome 60+
- Firefox 55+
- Safari 11+
- Edge 16+

For older browsers, graceful degradation is provided with fallback styles.