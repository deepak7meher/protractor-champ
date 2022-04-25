exports.config = {
    framework: 'jasmine',
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect:true,
    specs: ['home-spec.ts'],
    capabilities: { 
      'browserName': 'chrome', 
    },
    useAllAngular2AppRoots: true,
    onPrepare() { 
      require('ts-node').register({ 
        project: require('path').join(__dirname, './tsconfig.json') // Relative path of tsconfig.json file 
      });
    },
    onComplete() { 
      //global test tear-down goes here 
    }
  }