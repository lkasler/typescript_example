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


