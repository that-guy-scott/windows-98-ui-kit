# Windows 98 Icons Guide

This guide shows how to use the authentic Windows 98 icons included in the UI kit.

## Basic Usage

### Icon Classes

All icons use the base class `win98-icon` with size modifiers:

- `win98-icon-small` - 16x16 pixels (toolbar icons)
- `win98-icon-medium` - 24x24 pixels
- `win98-icon-large` - 32x32 pixels (desktop icons)
- `win98-icon-xlarge` - 48x48 pixels

### Example

```html
<div class="win98-icon win98-icon-large win98-icon-computer"></div>
```

## Icon Categories

### System Icons
- `win98-icon-computer` - My Computer
- `win98-icon-recycle-bin` - Recycle Bin (empty)
- `win98-icon-recycle-bin-full` - Recycle Bin (full)
- `win98-icon-network` - Network Neighborhood

### Folders & Files
- `win98-icon-folder` - Folder (closed)
- `win98-icon-folder-open` - Folder (open)
- `win98-icon-document` - Generic document
- `win98-icon-notepad-file` - Text file

### Storage Devices
- `win98-icon-hard-disk` - Hard disk drive
- `win98-icon-floppy-drive` - 3.5" floppy drive
- `win98-icon-cd-drive` - CD-ROM drive
- `win98-icon-network-drive` - Network drive

### Applications
- `win98-icon-notepad` - Notepad
- `win98-icon-paint` - MS Paint
- `win98-icon-calculator` - Calculator
- `win98-icon-internet-explorer` - Internet Explorer
- `win98-icon-outlook-express` - Outlook Express

### Games
- `win98-icon-solitaire` - Solitaire
- `win98-icon-minesweeper` - Minesweeper
- `win98-icon-freecell` - FreeCell
- `win98-icon-hearts` - Hearts

### Hardware
- `win98-icon-printer` - Printer
- `win98-icon-mouse` - Mouse
- `win98-icon-keyboard` - Keyboard
- `win98-icon-monitor` - Monitor
- `win98-icon-scanner` - Scanner
- `win98-icon-camera` - Camera

### Control Panel
- `win98-icon-gears` - Settings/Control Panel
- `win98-icon-display-properties` - Display Properties
- `win98-icon-accessibility` - Accessibility Options

### Dialog Icons
- `win98-icon-info` - Information
- `win98-icon-warning` - Warning
- `win98-icon-error` - Error
- `win98-icon-question` - Question

### Utilities
- `win98-icon-search` - Find/Search
- `win98-icon-help` - Help
- `win98-icon-regedit` - Registry Editor
- `win98-icon-scandisk` - ScanDisk
- `win98-icon-defragment` - Disk Defragmenter

## Usage Examples

### Desktop Icons
```html
<div class="desktop-icon">
    <div class="win98-icon win98-icon-large win98-icon-computer"></div>
    <div class="icon-label">My Computer</div>
</div>
```

### Toolbar Buttons
```html
<button class="win98-toolbar-button">
    <div class="win98-icon win98-icon-small win98-icon-document"></div>
    New
</button>
```

### List View Items
```html
<div class="win98-listview-item">
    <div class="win98-icon win98-icon-small win98-icon-folder"></div>
    <span>Program Files</span>
</div>
```

### Dialog with Icon
```html
<div class="win98-dialog-content">
    <div class="win98-dialog-icon">
        <div class="win98-icon win98-icon-large win98-icon-warning"></div>
    </div>
    <div class="win98-dialog-text">
        <p>Are you sure you want to delete this file?</p>
    </div>
</div>
```

## Legacy Support

For backward compatibility, the old icon classes are still supported:
- `icon--computer` maps to `win98-icon-computer`
- `icon--folder` maps to `win98-icon-folder`
- `icon--document` maps to `win98-icon-document`
- etc.

## Technical Notes

- Icons are rendered using authentic Windows 98 .ico files from the `assets/ico/` directory
- The `image-rendering: pixelated` CSS property preserves the authentic pixelated appearance
- All icons maintain their original color palette and design
- Icons automatically scale based on the size class while maintaining crisp edges

## Best Practices

1. Use appropriate sizes:
   - Small (16px) for toolbars and compact lists
   - Large (32px) for desktop icons and main UI elements
   - XLarge (48px) for dialog icons and important visual elements

2. Always include descriptive text or labels with icons for accessibility

3. Use consistent icon styles throughout your interface

4. Consider the context - use system icons for system functions, application icons for programs, etc.