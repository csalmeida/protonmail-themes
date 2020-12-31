# Theme Versioning

In `templates/@theme-base/` there is a `_version.scss` partial. This partial includes a single line of code that aids in keeping the version of all themes up to date:

```scss
$version: 'v4.0.0-beta15';
```

This variable is used in all themes by default and it will print the current version when a theme is compiled. For example, this theme header:

```scss
@import "../@theme-base/version";

/*! =========================================== *
 * SLICK THEME
 * Version: #{$version}
 * Author: ProtonMail
 * Website: www.protonmail.com
 * Twitter: @protonmail
 * =========================================== */
```

Will compile to:

```scss
/*! =========================================== *
 * SLICK THEME
 * Version: v4.0.0-beta15
 * Author: ProtonMail
 * Website: www.protonmail.com
 * Twitter: @protonmail
 * =========================================== */
```

In some cases a theme might have a specific version it is compatible with. In that case the variable can be pointed to another version on the theme template file:

```scss
@import "../@theme-base/version";
$version: "v4.0.0-beta3";

/*! =========================================== *
 * SLICK THEME
 * Version: #{$version}
 * Author: ProtonMail
 * Website: www.protonmail.com
 * Twitter: @protonmail
 * =========================================== */
```
