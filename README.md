# Hero Block Starter

**Starter for a custom two-image hero block for WordPress.**

## Description

As is, adds a new block to the editor under a custom block category.

The block is rendered as two side-by-side images, with one in the foreground, and another in the background. The foreground image partially covers the one in the background. Options for selecting the two rendered images are shown in the editor.

## Installation

Download this repository as a ZIP file via the "Code" dropdown menu in the top right.

Navigate to `Plugins » Add Plugin » Upload Plugin` in the admin dashboard of your WordPress site.

Choose the ZIP file in the file select input and press the "Install Now" button.

Once installed, activate the plugin in `Plugins » Installed Plugins`, if it was not already activated during the installation process.

Alternatively, you can install the plugin by cloning this repository's contents to your site's plugin folder (`wp-content/plugins`).

```bash
git clone --depth=1 https://github.com/kasperkouhia/hero-block.git hero-block

cd hero-block

rm -rf .git
```

Remember to also activate the plugin afterwards in `Plugins » Installed Plugins`.

## File Structure

This starter uses a largely standard custom block file structure.

- `hero-block.php` - The main plugin file, used to register the hero block and custom block category.
- `package.json` - Standard file used by NPM for defining package dependencies and scripts for development.
- The `src` folder contains the development files for the plugin's block(s).
- `src/hero-block`
  - `block.json` - Contains the block's metadata. For more, go to: [https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/).
  - `index.js` - The entry point file for the block that gets loaded in the block editor.
  - `edit.js` - Used for rendering the block and the block's editing UI in the block editor.
  - `save.js` - Exports the function that returns the static HTML markup that gets saved in the WordPress database.
  - `index.css` - Contains the styles for the block.
  - Included is also the `block.js` file, imported in both `edit.js` and `save.js` to render the block. Edit this one to make changes to the rendered block.
- The `build` folder contains the compiled block(s) of the plugin.

For more on the file structure of a (custom) block, go to: [https://developer.wordpress.org/block-editor/getting-started/fundamentals/file-structure-of-a-block/](https://developer.wordpress.org/block-editor/getting-started/fundamentals/file-structure-of-a-block/).

## Development

To start development on the block, navigate to the plugin's folder in `wp-content/plugins/hero-block`, and install the required dependencies with the `npm i` command in the terminal.

Refer to the above section for information on each of the relevant files and folders of the plugin.

If you just need to make changes to the rendered block, you need only to edit the `block.js` file.

When making changes to the block's files, use either the `start` or `build` scripts defined in `package.json`.

`npm run start` will run continuously, and automatically rebuild the block whenever any changes are detected. Builds created this way are not optimized.

`npm run build` will build a production-ready, optimized version of the block.

Both will output in the `build` folder.

For more on the included scripts, go to: [https://developer.wordpress.org/block-editor/reference-guides/packages/packages-scripts/](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-scripts/).

## Further Reading

Used in the `edit.js` of this starter are a few components from the `@wordpress/block-editor`, `@wordpress/components`, and `@wordpress/i18n` packages.

Imported from `@wordpress/block-editor`:

- `InspectorControls` - Container for the block's settings, its contents appear in the settings sidebar when the block is selected. For more, refer to: [https://github.com/WordPress/gutenberg/blob/HEAD/packages/block-editor/src/components/inspector-controls/README.md](https://github.com/WordPress/gutenberg/blob/HEAD/packages/block-editor/src/components/inspector-controls/README.md).
- `MediaUpload` - Used for opening the WordPress media select and/or upload modal window. For more, refer to: [https://github.com/WordPress/gutenberg/blob/HEAD/packages/block-editor/src/components/media-upload/README.md](https://github.com/WordPress/gutenberg/blob/HEAD/packages/block-editor/src/components/media-upload/README.md).
  - `MediaUploadCheck` - Wrapper used for `MediaUpload` to check whether or not the current user has the necessary permissions to upload new media to the site.
- `usePropBlocks` - Hook used to mark an element as a block element. This is used to pass the necessary props to the outermost element returned by `edit.js`.

For more on the `@wordpress/block-editor` package as a whole, go to: [https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/).

Imported from `@wordpress/components`:

- `Button` - Quite self-explanatory. Used for rendering buttons in the editor. For more, go to: [https://github.com/WordPress/gutenberg/blob/HEAD/packages/components/src/button/README.md](https://github.com/WordPress/gutenberg/blob/HEAD/packages/components/src/button/README.md).
- `PanelBody` - Renders a collapsible container that can be toggled open or closed. For more, refer to: [https://github.com/WordPress/gutenberg/blob/HEAD/packages/components/src/panel/README.md](https://github.com/WordPress/gutenberg/blob/HEAD/packages/components/src/panel/README.md).
  - `PanelRow` - Container for rows within a `PanelBody`.
- `Placeholder` - Renders a placeholder element. For more, refer to: [https://github.com/WordPress/gutenberg/blob/HEAD/packages/components/src/placeholder/README.md](https://github.com/WordPress/gutenberg/blob/HEAD/packages/components/src/placeholder/README.md).

For more on the `@wordpress/components` package as a whole, go to: [https://developer.wordpress.org/block-editor/reference-guides/packages/packages-components/](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-components/).

Also worth checking out are the WordPress Storybook docs at: [https://wordpress.github.io/gutenberg/](https://wordpress.github.io/gutenberg/).

The sole import from `@wordpress/i18n` is `__`, which is used for retrieving the translations of strings. For more on the package, go to: [https://github.com/WordPress/gutenberg/blob/HEAD/packages/i18n/README.md](https://github.com/WordPress/gutenberg/blob/HEAD/packages/i18n/README.md).

## Author

[Kasper Kouhia](https://github.com/kasperkouhia)
