how to use webpack là công cụ giúp bạn compile các module Javascript.

Một số ưu điểm khi dùng webpack

Giúp cho cho project dễ dàng phát triển, quản lý, customize
Tăng tốc độ cho project
Phân chia các module và chỉ load khi cần
Đóng gói tất cả file nguồn thành một file duy nhất, nhờ vào loader mà có thể biên dịch các loại file khác nhau
Biến các tài nguyên tĩnh ( image, css) trở thành 1 module
Chuyển đổi các mã nguồn : JSX, less, sass, scss thành js, ... ES6 -> ES5 thông qua babel transpiler ...

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

     - css-loader: reads the contents of the CSS file and return this contents but doesn't do anything else with this css
     - style-loader: takes the CSS and injects it into the page using style tags

     - then npm install css-loader style-loader

     - apply for sass -> npm i sass-loader sass --save-dev

     - using latest javascript features with babel is the most popular Javascript compiler

     - Babel hay Babel JS là một trình biên dịch JavaScript, mã nguồn mở và miễn phí. Babel được sử dụng để biên dịch ECMAScript (ES) thành phiên bản tương thích ngược với JavaScript có thể chạy trên các môi trường JavaScript cũ hơn. Babel là công cụ phổ biến để sử dụng các tính năng mới nhất trong JavaScript.

     - this tool can convert modern javascript code into older javascript code that already support by all major browser

     - change "hello-world-text" -> variable buttonCssClass

     - npm i @babel/core babel-loader @babel/plugin-proposal-class-properties @babel/preset-env --save-dev

- 4. webpack plugins are additional javascript libraries that do everything that loaders cannot do

  - Plugins can also modify how the bundles themselves are created. Ex uglifyjs plugin takes the bundle.js and minimizes the contents
    to decrease the bundle size

    4.1 Minification of the resulting webpack bundle => add new TerserPlugin to decrease bundle size

    4.2 Extracting CSS into a separate bundle with mini-css-extract-plugin -> Part 1

        - this will make the size of our Javacript bundle much smaller -> faster to download

        - this will allow us to load multiple files in parallel

        - add mini css extract plugin in webpack config and change the rule of css and sass from style.loader to MiniCssExtractPlugin.loader

        - add <link rel="stylesheet" href="./dist/style.css" /> to html

        - Part 2: look at style.css

    4.3 Broswer caching

    - 4.3.1 Ly thuyet tuc la moi lan refresh page thi minh can download rat nhiu file ve de chay trang web , doi voi nguoi dung mobile thi cang te hai hon neu internet qua cham,

    - may man la chung ta co solution va no dc goi la browser caching -> bundle.[contenthash].js

    - Neu ta thay doi noi dung js file thi no se tao ra them 1 bundle voi ma MD5 hash nua (also work with css)

      4.4 Clean dist folder before generate new bundles

      -> using CleanWebpackPlugin

      it also clean multiple folder -> cleanOnceBeforeBuildPatterns or you can use clean: true in output attr
