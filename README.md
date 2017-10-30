# ptemplate
[![Dependencies](https://david-dm.org/nethruster/ptemplate.svg)](https://david-dm.org/nethruster/ptemplate) [![DevDependencies](https://david-dm.org/nethruster/ptemplate/dev-status.svg)](https://david-dm.org/nethruster/ptemplate?type=dev)

A personal website template that's not a pain in the ass to setup and use.

### Requirements
- You need to have `yarn` installed.

### Usefull commands
- `yarn` - Initialize or update dependencies.
- `yarn dev` - Real-time building & local web hosting. Perfect for preview and working with it.
- `yarn build` - Builds the website and put the final result in the dist/ folder.
- `yarn build-gz` - Builds a gzip compressed version of the final website in the dist/ folder.


## Customization
### Favicons
You can replace them at `src/assets/icons/`.

### Avatar
You can replace it at `src/assets/`. If the name or the extension is different to "avatar.svg", you need to modify it in `src/config.js` and `src/assets-imports.js`.

### Title
Modify the <title> tag in `src/index.html`.

### A lot of visual components (description, work content, contact icons...)
Modify the `src/config.js`. You can add, remove or modify its contents.

### ReCATPCHA public key
Modify it in `src/config.js`.

### Translations
Modify them in the `src/assets/lang/` folder. The `lang.json` file is the default.

### Add icons
Add their paths with their IDs in the `src/assets/icons.svg` file.
