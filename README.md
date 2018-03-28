## Productization Concept

This project is a simple proof of concept for one of productization concept that works. The goal is just using **1 code base** that can be used for multiple spin-offs. Each spin-off need to have their own theme, colors set, API set, etc.

All the presets would be stored inside `/config/presets/`, which contains all things that the spin-off need to have on their site. All things that stored here will be called by `/config/api-config.js` and distributed on controllers who called it. Every value is a clear cut, stored on preset, collected on `api-config.js`, and used directly on controller.

The thing is different with the **stylesheet** since CSS is a precompiled language, we can't just the sets and used it directly. Here is the flow of generating the CSS using each spin-off sets.

1. When you run the server using `nodemon`, it will run `gulp` on start, you can check and set this inside `nodemon.json` line `13`.
2. `gulp` will run 2 main tasks inside `gulpfile.js`.
3. First one is `ejsToCss` task (line `12`) that will injecting `primary` & `secondary` value inside preset file (see `/config/presets/_glabs.json` line `31` & `32` for example) into `/public/sass/base/_base.scss.ejs` line `3` & `4`. Then will rename it to `/public/sass/base/_base.scss`. This file will be imported into master style `/public/sass/style.scss`.
4. Second is `scssToCss` task (line `22`) that will compile Sass file `/public/sass/style.scss` to CSS file `/public/stylesheets/style.css`. This CSS file will be the one that called into the HTML file.

### Helpful Links

- [Slide Presentation](https://docs.google.com/presentation/d/1P7xuwglQqoJV9z-BpsljppQBeiIrcU16okd2EoAf_J8/edit?usp=sharing)
- [Sass Official Website](https://sass-lang.com/)
- [Sass Official Documentation Website](http://sass-lang.com/documentation/file.SASS_REFERENCE.html)
- [Sass Official Script Function Documentation](http://sass-lang.com/documentation/Sass/Script/Functions.html)
- [8 Tips For Sass Best Practice from Site Point](https://www.sitepoint.com/8-tips-help-get-best-sass/)
- [Tips For Sass Architecture from Site Point](https://www.sitepoint.com/architecture-sass-project/)

### Local Testing First Installation

```bash
$ git clone https://github.com/ksugiarto/productization-concept.git
$ cd productization-concept
```

This project created using Node 8.5.0. Even though there are no fancy things inside this project, if you use the latest Node, all functions should be work properly. You can use NVM (Node Version Manager) for easy and better Node management:

```bash
$ nvm list
$ nvm install 8.5.0
$ nvm alias default 8.5.0
```

Make sure you have `Nodemon` installed globally on your machine, if you don't have that yet, install it using:

```bash
$ npm install nodemon -g
```

Then install all prerequisite packages using:

```bash
$ npm install
```

### Run the server in Development mode

List of presets that ready to be used would be inside folder `config/presets/`.

#### Manual Way

Start the server using Glabs' preset:

```bash
$ SITE_ENV=glabs NODE_ENV=development nodemon -w . ./bin/www
```

Start the server using Dnet's preset:

```bash
$ SITE_ENV=dnet NODE_ENV=development nodemon -w . ./bin/www
```

#### Script Way
See the list inside `package.json` line `6` & `7`. Start the server using Glabs' preset:

```bash
$ npm run glabs
```

Start the server using Dnet's preset:

```bash
$ npm run dnet
```
