* start ts, webpack

mkdir src dist
npm init     # (use `./dist/bundle.js` as entry point)
npm install --save d3 immutable
npm install --save-dev typescript@2 webpack@2 ts-loader source-map-loader \
  webpack-dev-server@2 @types/d3 @types/immutable
echo "console.log('hello world');" > src/index.ts
git init


* gitignore

Create .gitignore file in the root project

Add in it:
*.iml
.idea
.alm
dist
node_modules

* Editorconfig

Create .editorconfig in the root folder
Add:
[*.{js,jsx,ts,tsx}]
indent_style = space
indent_size = 4
trim_trailing_whitespace = true
insert_final_newline = true

[*.md]
trim_trailing_whitespace = true
insert_final_newline = true

*  tsc --init

Modify:
{
  "compilerOptions": {
    "strictNullChecks": true,
    "noImplicitAny": true,
    "outDir": "./dist/",
    "sourceMap": true,
    "target": "es5"
  },
  "filesGlob": [
    "./src/*.ts"
  ]
}

* Webpack

Create webpack.config.js in the root folder
Add:
const path = require("path");
module.exports = {
    entry: "./src/index.ts",
    output: {
        filename: "./dist/bundle.js"
    },
    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",
    resolve: {
        // Add '.ts' as resolvable extensions.
        extensions: [".ts", ".js"]
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ["source-map-loader"],
                enforce: "pre"
            },
            {
                test: /\.ts$/,
                use: ["ts-loader"]
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, "/dist"),
        compress: true,
        port: 8000
    },
    // Omit "externals" if you don't have any. Just an example because it's
    // common to have them.
    externals: [
        // Don't bundle giant dependencies, instead assume they're available in
        // the html doc as global variables node module name -> JS global
        // through which it is available
        {"d3": "d3",
         "immutable": "Immutable"}
    ]
};

* Package.json
npm init
Modify:
"scripts": {
    "start": "node_modules/.bin/webpack-dev-server",
    "build": "node_modules/.bin/webpack",
    "build:watch": "node_modules/.bin/webpack -w",
    "run": "node_modules/.bin/webpack -w && node_modules/.bin/webpack-dev-server",
    "clean": "rm ./dist/*",
    "test": "node ./dist/bundle.js"
  },

* How to build and test
npm run run
Build watch and start server

npm test
test the app

