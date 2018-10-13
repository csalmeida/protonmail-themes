# ProtonMail Themes
Since [v1.16](https://blog.protonmail.ch/protonmail-beta-v1-16-release-notes/), the encrypted mail service allows the use of themes with Cascading Style Sheets. You can pick a theme from the [Themes](Themes/) folder or create a custom one yourself using CSS. Feel free to [use the theme template provided](templates/theme_example) as a starting point.

> These themes were developed for **[v3.14.x](https://github.com/csalmeida/protonmail-themes/releases)** of ProtonMail.

### How to use a theme.
1. Pick one from the themes folder in the repository.
2. Select the theme and select the raw view to see all the code.
3. Select all and copy the code.
4. At ProtonMail's website head over to **Settings**, click the **Appearance** tab.
5. Paste the code under the *Custom Theme* section and press save.
> *In order to remove a theme, press clear.*

The theme should be applied and you should see the changes immediately.

### Available themes.
Check out some of the available themes you can choose from.

#### [Green Lume](Themes/green_lume/green_lume.css)
![Screenshot of Green Lume theme.](screenshots/green_lume_3.12.0.gif)

#### [Vitamin C](Themes/vitamin_c/vitamin_c.css)
![Screenshot of Vitamin C theme.](screenshots/vitamin_c_3.12.0.gif)

#### [Dark Bubble Gum](Themes/dark_bubble_gum/dark_bubble_gum.min.css)
![Screenshot of Dark Bubble Gum theme.](screenshots/dark_bubble_gum_3.5.16.png)

#### [Blue and Orange](Themes/blue_and_orange/blue_and_orange.min.css)
![Screenshot of Blue and Orange theme.](screenshots/blue_and_orange_3.5.16.png)

### Do these themes compromise security?
In short, no. All themes listed here will always style existing elements from ProtonMail's UI and not import any third party files from anywhere.
At the time I created these themes I've received a few directions from ProtonMail's co-founder [Jason Stockman](https://twitter.com/jasonstockman) in order to avoid breaking layout and security issues.

## Quick setup guide
*Required for theme creation only*
Install NodeJS, after forking/cloning this repository install dependencies:
```
cd protonmail-themes
npm install
```

Themes can be created by duplicating and renaming the [example theme folder](templates/theme_example) and its `.scss` file to the theme name. Then edit that file by chaging the color variables. You can also extend the theme by editing the `_styles.css` partial or by creating a custom one.

Two commands are available to compile themes:
```
*// Compiles themes as changes are made.*
npm run watch

*// Compiles all themes.*
npm run build
```

### Feedback and fixes.
If you notice something's missing feel free to make a pull request. If you have no time to fix it please open an issue.

### Supporting and maintaining the project.
ProtonMail is a great email service, I enjoy working on the project and provide themes for all. Please consider making a small donation, just the price of a cup of coffee *goes a long way* to help me maintain it and keep adding color to your private email experience! Thank you 🙇🏻

<a href='https://www.paypal.me/csalmeida/5'>
<img src='https://getflywheel.com/wp-content/uploads/2015/10/paypal-donate-button-large.png' alt='PayPal Me' width='160' />
</a>

#### Where can I find more themes?
* [ProtonMail's Official Themes](http://protonmail.tumblr.com/)
* [Austin Delamar's ProtonMail Themes](https://github.com/amdelamar/pm-theme)
* [Jérémie Cook's ProtonMail Theme](https://github.com/jeremiecook/protonmail-theme)
* [Quark, a theme creator for ProtonMail](https://github.com/csalmeida/quark)

#### Web References
* [The Greenlume theme got featured on ProtonMail's website](https://protonmail.com/blog/protonmail-themes/)
