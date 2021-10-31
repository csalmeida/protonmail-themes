# Theme Template

> This guide expands on theme creation. Please follow the [quick setup guide](README.md#quick-setup-guide) before proceeding.

There's a template provided at [`/templates/theme_example`](`../templates/theme_example`) that allows anyone that knows a bit a about `SCSS` to generate a theme.

This template does not style every single element of ProtonMail's UI and sticks to changing the `color` of elements rather than `position` or `font`.

Feel free to extend and adapt this template to your needs by creating an `_override.scss` file and adding new styles there, those styles will be scoped to your theme only. The [Ochin theme can be consulted as an example](../templates/ochin) of using overrides can be used on a theme.

## Creating a theme from the template

Sass was used to enable users and contributors to create themes without having to create a stylesheet from scratch. In order to create a theme it will require [some knowledge of how variables work in Sass](http://sass-lang.com/guide).

### 1. Setting color palette

Decide at least four colors you would like to use in your theme, then replace the `hex` values on the following variables:

```scss
$base: #1c1c1c;
$search: #000;
$highlight: #2fbf71;
$navigation: #fff;
```

Each variable applies to a certain area of the UI. The `$base` color changes the top and side navigation bars so this color will be prominent. The `$search` color on the other hand only applies to the search element. The `$highlight` color tends to be applied to elements that need contrast, for instance the compose button. Finally the `$navigation` variable sets the color of navigation links.

> [Coolors is a good tool to create a palette](https://coolors.co/) if you're unsure of which colors to use!

#### (Optional) Changing other variables

There is another set of variables available that will change elements that tend to fall out of the groups defined earlier. This could include content boxes, warnings, or elements that usually show up on the Settings part of the app. Feel free to experiment changing these if you are looking for a bit more customization (for adding more to the theme you can also extend the template, we'll get to this later).

```scss
$text_color: #0d0d0d;
$extra_color: #e6eaf0;
$danger_color: #d62646;
$warning_color: #ffaa00;
```

### 2. Compiling the template from SASS into a CSS theme

This project [includes a way of compiling themes using Gulp](./README.md#theme-compilation) but the way you do this is entirely up to you. You could do it through the command line, perhaps you use [Atom](https://atom.io/) and a plugin to compile your `.scss` files into CSS as you write them. Use [Webpack](https://webpack.js.org/) or [Sassmeister](https://www.sassmeister.com/). This project can compile your theme by running `npm run build`, provided that dependencies were installed.

Regardless of the way you choose to do this you should end up with a `theme_template.css` _not_ `.scss`.

### 3. (Optional) Extending you theme.

Editing the variables can create a decent theme but you might want to further develop it and style as many elements as you like. To further customize your theme, add the extra CSS to an `_override.scss` file and add additional styles there. The file should be in `/templates/you_theme/`:

```bash
.
├── @theme-base
├── green_lume
│   └── green_lume.scss
├── your_theme
│   └── your_theme.scss
│   └── _override_.scss
```

Override styles will be scoped to your theme only. The [Ochin theme can be consulted as an example](../templates/ochin) of using overrides can be used on a theme. Notice how the override partial is imported in the theme file:

```scss
// Color variables here...

@import "../@theme-base/styles";

// Please do not remove the imports above, add overrides and other partials below this line.
@import "override";
```

In `_override.scss` add the styles specific to your theme:

```scss
.pm-button--primary {
  background: peachpuff;
}

.isDarkMode .pm-button--primary {
  background: darkgrey;
}
```

Your theme will compile to CSS and can be found in `/themes/your_theme_name` by running the build task present in the [quick setup guide](README.md#quick-setup-guide), in the README.

### Final touches

Test your theme on ProtonMail and re-iterate as needed. If you think your theme is ready and _cool_ you can submit a pull request and add it to this repo so everyone can use it.
