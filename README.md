# ptemplate
[![Dependencies](https://david-dm.org/nethruster/ptemplate.svg)](https://david-dm.org/nethruster/ptemplate) [![DevDependencies](https://david-dm.org/nethruster/ptemplate/dev-status.svg)](https://david-dm.org/nethruster/ptemplate?type=dev)

A personal website template that's not a pain in the ass to setup and use.

[Demo](https://ptemplate.nethruster.com)

Example screenshot
![alt text](https://github.com/nethruster/ptemplate/blob/master/src/assets/icons/meta-img.png "Home screenshot")

### Requirements
- You need to have `yarn` (**recommended**) or `npm` installed.

### Useful commands

#### Yarn
- `yarn` - Install and update dependencies.
- `yarn dev` - Launch local web server with hot compiling. Ideal to work on the project easily.
- `yarn build` - Build the website in production mode to the `dist/` folder.
- `yarn build-gz` - Builds a gzip compressed version of the built app in the dist/ folder.

#### NPM
- `npm install` - Install and update dependencies.
- `npm run dev` - Launch local web server with hot compiling. Ideal to work on the project easily.
- `npm run build` - Build the website in production mode to the `dist/` folder.
- `npm run build-gz` - Builds a gzip compressed version of the built app in the dist/ folder.

## Customization

Note: To apply all of these changes you must rebuild the app.

### If you're not hosting the app at the root of the server
Go to `webpack.config.js` and change the `publicPath` key inside of the `output` part of the config

### Favicons
You can replace them at `src/assets/icons/`.

### Avatar
You can replace it at `src/assets/`. If the name or the extension is different to "avatar.svg", you need to modify it in `src/config.js` and `src/assets-imports.js`.

### Title
Change the <title> tag in `src/index.html`.

### Most of the UI (description, work content, contact icons...)
Modify `src/config.js`. You can add, remove or modify its contents.

### ReCATPCHA public key
Change it in `src/config.js`.

### Translations
Customize them in the `src/assets/lang/` folder. Add a new lang file named by the [IEC_15897](https://en.wikipedia.org/wiki/ISO/IEC_15897) standard, paste contents from your source locale and translate it. To activate a language copy the contents from the source locale to `src/asssets/lang.json`.

### Add icons
Add new icon paths with the desired ID in the `src/assets/icons.svg` file.

## Usage
Once everything is compiled and built the last step is to serve the contents of the `dist/` folder as static files with your web server of choice and you're done! 
