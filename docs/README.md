# Documentation

A  breakdown of how the project works, and details on how themes are generated and now to create new ones.

<details>
<summary>Click to show available documentation</summary>

- [Documentation](#documentation)
  - [Quick Setup Guide](#quick-setup-guide)
  - [Creating a theme](#creating-a-theme)
  - [Themes](#themes)
  - [Templates](#templates)
  - [Theme Compilation](#theme-compilation)
  - [Contributing](#contributing)
  - [Is there something missing?](#is-there-something-missing)
- [Project's README](../README.md)
- [Theme Template Guide](./theme-template-guide.md)
- [Theme Versioning](./theme-versioning.md)
</details>

## Quick Setup Guide
> **Required for theme creation only**

Before making a contribution you might want to setup the project in order to test fixes and compile themes. Install NodeJS first and after forking/cloning this repository install the dependencies:

```bash
cd protonmail-themes
npm install
```

Themes can be created by duplicating and renaming the [example theme folder](../templates/theme_example) and its `.scss` file to the chosen theme name. 

A theme name folder and file should be separared by undercores if it has more than one word and should be places in [`/templates/`](../templates):

```bash
.
├── @theme-base
├── green_lume
│   └── green_lume.scss
├── your_theme
│   └── your_theme.scss
```

Then edit that file by chaging the color variables available. Please [follow the theme templates guide](./theme-templates-guide.md) for more detail on what this looks like and how to customise a theme.

Two commands are available to compile themes:

```bash
// Compiles themes as changes are made.
npm run watch

// Compiles all themes.
npm run build
```

## Creating a theme

Themes can be created in `/templates` and should be contained on a folder with the same name of the theme. For instance:
```
/templates
    /new_theme
        /new_theme.scss
```

After creating your theme folder and file, `new_theme.scss` should look similar to this snippet:
```scss
/*! =========================================== *
 * Template THEME
 * Version: #{$version}
 * Author: You name here
 * Website: Your website here
 * Tweets Your twitter handle
 * =========================================== */

// Change colors here and they will change everywhere.
$base: #1C1C1C;
$search: #000;
$highlight: #2FBF71;
$navigation: #fff;

$text_color: #0d0d0d;
$extra_color: #e6eaf0;
$danger_color: #d62646;
$warning_color: #ffaa00;

@import "../@theme-base/styles";
@import "../@theme-base/dark_mode";

// Please do not remove the imports above, add overrides and other partials below this line.
```

The snippet will change the colors of the elements across the theme. However, you can extend or override the theme further by adding changes to `_override.scss`. Additionally, [custom partials can be added](https://sass-lang.com/guide). You can refer to [the guide on editing theme templates](./theme-templates-guide.md) for more information on customizing themes.

## Themes
Ready to use themes are stored at [`/themes`](../themes) and can be copied over to the Custom Theme text area avalaible at the `Appearance -> Themes` section on your ProtonMail settings. Each theme has it's own folder with one or more `.css` files in it. The text inside these `.css` files is what needs to be copied to the custom theme section in ProtonMail for the theme to be applied.

These themes are compiled  from `.scss` templates into a final `.css`.

## Templates
The templates folder at [`/templates`](../templates) hold style rules for all the themes as well as their particular color palettes. All themes import their styles from the [`/@theme-base/_styles.scss`](../templates/@theme-base/_styles.scss) partial and this is the file that should be changed when fixing a bug in styling or adding styles to a newly introduced element in the UI.

In addition to [`_styles.scss`](../templates/@theme-base/_styles.scss), the [`/@theme-base/_full.scss`](../templates/@theme-base/_full.scss) will create a version of the theme where the base colour will be applied to further areas in the UI and can be used to have themes closer to a "dark mode" aesthetic.

Changes made in these two files will apply to all themes. Two `.css` files are created per theme as a result (is a full version is available.).

Theme colors be changed in their template files and can be found inside in their theme template folder. For instance, to change the Green Lume theme, change the variables at `/template/gree_lume/green_lume.scss`. The color values applied to those variables will replicate across ProtonMail's UI when the theme is applied.

The [`/@theme-base`](../templates/@theme-base/) folder also includes two other folders with styling. These are [part of ProtonMail's Design System](https://github.com/ProtonMail/design-system/tree/master/_sass) and serve as a starting point to create the themes.  

## Theme Compilation

Themes are written in `.scss` in order to allow multiple themes to be generated from a single template (`_styles.scss`). To achieve this a `gulpfile.js` is used to generate `.css` files for the themes.

This file makes sure templates get converted into themes by making two commands available (NodeJS required). Most of the time there's no need to change this file. These commands can be run from your terminal:

```bash
// Compiles themes as changes are made.
npm run watch

// Compiles all themes.
npm run build
```

# Contributing
Everyone who is learning or already has a grasp of SASS and CSS is encouraged to contribute to the project. If you're applying a fix to `gulpfile.js` or any other files there's not set rules for now. 

Most contributions are usually theme related and if you're thinking of making a pull request please change the respective `.scss` file in favor of the compiled stylesheet (in `/themes`) in order to make these changes permanent and available for everyone. Templates can be found at `/templates/@theme-base`.

If this is not clear please don't worry! Feel free to open a PR anyway and I'm happy to walk you through it.

# Is there something missing?
If your question wasn't addressed here please feel free open an issue.