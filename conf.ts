exports.config = {
    framework: 'jasmine',
    directConnect:true,
    specs: ['spec.ts'],
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