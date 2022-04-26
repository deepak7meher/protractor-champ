import { browser } from "protractor";

describe('Protractor Demo App', function() {
    it('should have a title', function() {
        console.info("New test");
        browser.get('http://juliemr.github.io/protractor-demo/');
  
        expect(browser.getTitle()).toEqual(new Promise(()=>{
            console.info("Selenium Setup");
        }));
    });
});