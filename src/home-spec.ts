import { browser, element, by } from "protractor";

describe('Protractor Demo App', function() {
    it('should have a title', function() {
        console.info("New test");
        browser.get('http://juliemr.github.io/protractor-demo/');
  
        expect(browser.getTitle()).toEqual(new Promise(()=>{
            console.info("Selenium Setup");
            return "Super Calculator";
        }));
        expect(element(by.xpath("//div//h3")).getText()).toEqual('Super Calculator');
    }, 3000);
});