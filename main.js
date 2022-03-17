const puppeteer = require("puppeteer");
let page;
console.log("Before");
const browserOpenPromises = puppeteer.launch({ 
    headless: false,
    slowMo:true,
    defaultViewport:null,
    args:["--start-maximized"]

});
browserOpenPromises
    .then(function (browser) {
        // currently open tabs
        let pageArrPromise = browser.pages();
        return pageArrPromise;
    }).then(function (browserPages) {
        page = browserPages[0];
        let gotoPromise = page.goto("https://www.google.com/");
        return gotoPromise;
    }).then(function () {
        let elementWaitPromise = page.waitForSelector("input[type='text']", { visible: true });
        return elementWaitPromise;
    }).then(function () {
        // console.log("Reached google Home Page");
        let keyWillBeSendPromise = page.type("input[type='text']", "pepcoding");
        return keyWillBeSendPromise;
    }).then(function () {
        let enterWillBePressed = page.keyboard.press("Enter");
        return enterWillBePressed;
    }).then(function(){
        let elementWaitPromise = page.waitForSelector("h3.LC20lb.DKV0Md",{visible:true});
        return elementWaitPromise;
    }).then(function(){
        let keyWillBeSendPromise = page.click("h3.LC20lb.DKV0Md");
        return keyWillBeSendPromise;
    })
    .catch(function (err) {
        console.log(err);
    })
console.log("After");