const failFast = require("protractor-fail-fast");

exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    //directConnect:true,
    specs: ['src/home-spec.ts'],
    plugins: [
        failFast.init(),
    ],
    capabilities: { 
      'browserName': 'chrome', 
      'chromeOptions': {
          'args': ['--no-sandbox', '--disable-web-security']
      }
    },
    useAllAngular2AppRoots: true,
    onPrepare() { 
      //browser.driver.manage().window().maximize();
      require('ts-node').register({ 
        project: require('path').join(__dirname, './tsconfig.json') // Relative path of tsconfig.json file 
      });
    },
    onComplete() { 
      //global test tear-down goes here 
    },
    jasmineNodeOpts: {
      defaultTimeoutInterval: 300000
    },
    suites: {
      test : 'src/home-spec.js'
    }
  }