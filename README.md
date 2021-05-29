# ProtonMail Themes
Since [v1.16](https://blog.protonmail.ch/protonmail-beta-v1-16-release-notes/), the encrypted mail service allows the use of themes with Cascading Style Sheets. You can pick a theme from the [Themes](themes/) folder or create a custom one yourself using CSS. Feel free to [use the theme template provided](templates/theme_example) as a starting point.

> These themes were developed for **[v4.0.x](https://github.com/csalmeida/protonmail-themes/releases)** of ProtonMail.
> Themes for **`v3.0.x`** can be used by [downloading the `v3.15.30` release](https://github.com/csalmeida/protonmail-themes/releases/tag/v3.15.30).
## Table of contents

<details>
<summary>Click to expand contents</summary>

- [How to use a theme](#how-to-use-a-theme)
- [Available themes](#available-themes)
  - [Do these themes compromise security?](#do-these-themes-compromise-security)
- [Quick setup guide](#quick-setup-guide)
- [Feedback and fixes](#feedback-and-fixes)
- [Supporting and maintaining the project](#supporting-and-maintaining-the-project)
- [Frequently Asked Questions](#frequently-asked-questions)
- [Where can I find more themes?](#where-can-i-find-more-themes)
- [Web References](#web-references)

#### Documentation 📖

- [Documentation](#documentation)
  - [Quick Setup Guide](docs/README.md#quick-setup-guide)
  - [Creating a theme](docs/README.md#creating-a-theme)
  - [Themes](docs/README.md#themes)
  - [Templates](docs/README.md#templates)
  - [Theme Compilation](docs/README.md#theme-compilation)
  - [Contributing](docs/README.md#contributing)
  - [Is there something missing?](docs/README.md#is-there-something-missing)
- [Project's README](../README.md)
- [Theme Template Guide](./theme-template-guide.md)
- [Theme Versioning](./theme-versioning.md)
</details>


### How to use a theme
1. Pick one from the themes folder in the repository.
1. Select the theme and select the raw view to see all the code.
1. Select all and copy the code.
1. Install the [Stylus](https://github.com/openstyles/stylus#releases) browser if not done already.
1. Add a new style in *Stylus* and paste the code in the text area.
1. Below the text area select from the *Applies to* dropdown *"URLs on the domain"* and add `beta.protonmail.com` as a value and press save.
1. Select the added theme in Stylus' Manage panel to enable it.

> *In order to remove a theme, open Stylus, click Manage, and untick the box of the theme or remove it altogether by pressing `X`.*

The theme should be applied and you should see the changes immediately.

### Available themes
Check out some of the available themes you can choose from.

> There is also a `full` version available, that applies theme colors to the messages panel and more elements.

<details>
<summary><b>Expand theme list</b> 👩🏻‍🎨</summary>

#### [Green Lume](themes/green_lume)
![Screenshot of Green Lume theme.](screenshots/green_lume.png)

![Screenshot of Green Lume theme.](screenshots/green_lume_full.png)

#### [Vitamin C](themes/vitamin_c)
![Screenshot of Vitamin C theme.](screenshots/vitamin_c.png)

![Screenshot of Vitamin C theme.](screenshots/vitamin_c_full.png)

#### [Dark Bubble Gum](themes/dark_bubble_gum)
![Screenshot of Dark Bubble Gum theme.](screenshots/dark_bubble_gum.png)

![Screenshot of Dark Bubble Gum theme.](screenshots/dark_bubble_gum_full.png)

#### [Blue and Orange](themes/blue_and_orange)
![Screenshot of Blue and Orange theme.](screenshots/blue_and_orange.png)

![Screenshot of Blue and Orange theme.](screenshots/blue_and_orange_full.png)

#### [Ochin](themes/ochin)
![Screenshot of Ochin theme.](screenshots/ochin.png)

![Screenshot of Ochin theme.](screenshots/ochin_full.png)

#### [Dracula](themes/dracula)
![Screenshot of Dracula theme.](screenshots/dracula.png)

![Screenshot of Dracula theme.](screenshots/dracula_full.png)

#### [Monokai](themes/monokai)
![Screenshot of Monokai theme.](screenshots/monokai.png)

![Screenshot of Monokai theme.](screenshots/monokai_full.png)

#### [Deutera One](themes/deutera_one)
![Screenshot of Deutera One theme.](screenshots/deutera_one.png)

![Screenshot of Deutera One theme.](screenshots/deutera_one_full.png)

#### [Gruvbox](themes/gruvbox)
![Screenshot of Gruvbox theme.](screenshots/gruvbox.png)

![Screenshot of Gruvbox theme.](screenshots/gruvbox_full.png)

#### [Inbox](themes/inbox)
![Screenshot of Inbox theme.](screenshots/inbox.png)

### [Nord](themes/nord)
![Screenshot of Nord theme.](screenshots/nord.png)

![Screenshot of Nord theme.](screenshots/nord_full.png)
</details>

## Quick setup guide

> **Required for theme creation only**

Install [NodeJS](https://nodejs.org/en/), after forking/cloning this repository install dependencies:

```bash
cd protonmail-themes
# Requires Node v15.2.1, run `nvm use` to set the correct version. 
npm install
```

Themes can be created by duplicating and renaming the [example theme folder](templates/theme_example) and its `.scss` file to the theme name. Then edit that file by changing the color variables. You can also extend the theme by editing the `_styles.css` partial or by creating a custom one.

Two commands are available to compile themes:
```
*// Compiles themes as changes are made.*
npm run watch

*// Compiles all themes.*
npm run build
```

## Container Setup with Docker

1. [Install Docker](https://docs.docker.com/engine/install/). For MacOS and Windows, [Docker Desktop](https://docs.docker.com/engine/install/#desktop) is recommended instead.
1. Run `docker compose up -d`. This will run the development environment.

**Additional notes:**

- To examine the container run `docker ps`.
- To stop the container run `docker compose down`.
- The container will run a Node image with the version this project supports along with the dependencies. Then it will run the watch command so themes can be compiled as changes are made.
- When using **Windows Subsystem Linux**, cloning the repo into a folder inside `/home/` directory of you distro of choice is reccomended since mounted drivers and folders (i.e `/mnt/c`) won't issue a file change event.

### Feedback and fixes
If you notice something's missing feel free to make a pull request. If you have no time to fix it please open an issue.

### Supporting and maintaining the project
ProtonMail is a great email service, I enjoy working on the project and provide themes for all. Please consider making a small donation, just the price of a cup of coffee *goes a long way* to help me maintain it and keep adding color to your private email experience! Thank you 🙇🏻

<a href='https://www.paypal.me/csalmeida/5'>
<img src='https://getflywheel.com/wp-content/uploads/2015/10/paypal-donate-button-large.png' alt='PayPal Me' width='160' />
</a>

### Frequently Asked Questions

#### Do these themes compromise security?
In short, no. All themes listed here will always style existing elements from ProtonMail's UI and not import any third party files from anywhere.
At the time I created these themes I've received a few directions from ProtonMail's co-founder [Jason Stockman](https://twitter.com/jasonstockman) in order to avoid breaking layout and security issues.
#### Why is Stylus required to use custom themes?

Support for custom themes in ProtonMail's appearance settings [seems to have been temporarily disabled in `~v4.0.0 beta 33`](https://www.reddit.com/r/ProtonMail/comments/j2l1im/protonmail_beta_41_removes_ability_to_use_and/g767k97/?context=3).

To use custom themes an alternative needs to be used to load the stylesheet. [Stylus](https://github.com/openstyles/stylus#releases) has been recommended but any other alternative should work.

#### Where can I find more themes?
* [ProtonMail's Official Themes](http://protonmail.tumblr.com/)
* [Austin Delamar's ProtonMail Themes](https://github.com/amdelamar/pm-theme)
* [Jérémie Cook's ProtonMail Theme](https://github.com/jeremiecook/protonmail-theme)
* [Quark, a theme creator for ProtonMail](https://github.com/csalmeida/quark)

#### Web References
* [The Greenlume theme got featured on ProtonMail's website](https://protonmail.com/blog/protonmail-themes/)
