how to use webpack

npm i webpack webpack-cli --save-dev

npx webpack

npx webpack --stats detailed

- 1. custom webpack config

  then run npx webpack --config webpack.config.js
  --config mean you can specify the name of webpack config file.

  change ./src/index.js -> ./dist/bundle.js and check chrome console

- 2. Asset Modules
     asset files various kind of images, fonts or plain text files -> all those files can be processed by Webpack using asset modules

  4 types:

  - assets/resource -> can be used to import large images or large font files

    hanling images with webpack -> create add image function -> go to webpack config file add new property module

  - assets/inline ->
    Can be used to import small assets like SVG
    SVG are injected into the javascript bundle as the data URI

    html
    <img src="data:image/svg+xml,%3Csvg width='247' height='34' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFF' fill-rule='non.zero'%3E%3Cpath d='M13.918 ... 4.022-2.888 4.57V26h-4.46V7.975z' fill='%23D7DCE1'/%3E%3C/g%3E%3C/svg%3E"/>

    css
    .logo {
    background: url("data:image/svg+xml,%3Csvg ... /svg%3E");
    }

    this size of our bundle became so big

  - assets -> general asset type which serves as a combination of the previous two asset types

    if the file < 8 kilobytes -> the file will be treat as inline assets module
    if the file > 8 kilobytes -> the file will be treat as resource assets module

    but we can change this number to anything we want

  - asset/source -> import some plaintext data as a javascipt string Ex: you have a text file that stores some data as plain text

    reads the contents of the file into a javascript string and inject that string directly into the javascript bundle

- 3. Loaders allow you import all other kinds of files that you cant handle using Asset Module

     css-loader: reads the contents of the CSS file and return this contents but doesn't do anything else with this css
     style-loader: takes the CSS and injects it into the page using style tags

     then npm install css-loader style-loader

     apply for sass -> npm i sass-loader sass --save-dev

     using latest javascript features with babel is the most popular Javascript compiler

     Babel hay Babel JS là một trình biên dịch JavaScript, mã nguồn mở và miễn phí. Babel được sử dụng để biên dịch ECMAScript (ES) thành phiên bản tương thích ngược với JavaScript có thể chạy trên các môi trường JavaScript cũ hơn. Babel là công cụ phổ biến để sử dụng các tính năng mới nhất trong JavaScript.

     this tool can convert modern javascript code into older javascript code that already support by all major browser

     change "hello-world-text" -> variable buttonCssClass

     npm i @babel/core babel-loader @babel/plugin-proposal-class-properties @babel/preset-env --save-dev

- 4. webpack plugins are additional javascript libraries that do everything that loaders cannot do

  Plugins can also modify how the bundles themselves are created. Ex uglifyjs plugin takes the bundle.js and minimizes the contents
  to decrease the bundle size

  4.1 Minification of the resulting webpack bundle => add new TerserPlugin to decrease bundle size
