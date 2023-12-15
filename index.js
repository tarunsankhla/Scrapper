var express = require('express');
var app     = express();
var axios = require('axios');
const fs = require('fs');
// const open = require('open');
var CircularJSON = require('circular-json');
const puppeteer = require('puppeteer');

const https = require('https');


var url = 'https://www.myworkday.com/northeastern/d/faceted-search2/c9/fs1/recover-current-state.htmld';

url ='https://www.myworkday.com/northeastern/d/task/1422$2404.htmld';

url ='https://www.myworkday.com/northeastern/task/1422$2404.htmld?clientRequestID=bd97700ed2b34d5bb2be9571c4c880f5';
var searchUrl = "https://www.myworkday.com/northeastern/faceted-search2/c9/fs1/search.htmld"


// app.set('view engine', 'jade');

app.get("/", function(req, res) {
    axios.get(url)
        .then(function(response) {
            console.log(response.data);
            // res.writeHead(200, {'Content-Type': 'text/html'});
            // var re = res.send(response.data);
            res.write(response.data, function(err,data) {
                if (err) throw err;
                console.log('Saved!',data);
            });
            // res.render('/index.js', {status: 'good'});

            // res.send(response.data);
            // console.log(re.get('Content'));
            // console.log(re.body.children[1].listItems[0]);
            // console.log(re.get('Content-Type'));
            // res.write("new");
            // res.end();  
            // fs.unlink('index.html', function (err) {
            //     if (err) throw err;
            //     console.log('File deleted!');
            //   });

            // fs.appendFile('index.html',(res.write(response.data)) , function(err) {
            //     if (err) throw err;
            //     console.log('Saved!');

            // });

            // const url = 'https://www.myworkday.com/northeastern/task/1422$2404.htmld?clientRequestID=bd97700ed2b34d5bb2be9571c4c880f5';
  
            // const request = https.request(url, (response) => {
            //     let data = '';
            //     response.on('data', (chunk) => {
            //         data = data + chunk.toString();
            //     });
              
            //     response.on('end', () => {
            //         // const body = JSON.parse(data);
            //         console.log(data);
            //     });
            // })

            // request.on('error', (error) => {
            //     console.log('An error', error);
            // });
              
            // request.end() 
            // res.sendFile(__dirname + '/index.html');
            console.log(1);
            pupet();
            console.log(2);
    });
});

app.listen(8080, function() {
    console.log('Server running at http://127.0.0.1:8080/');
});

function pupet(){
    console.log(3);
    (async () => {
    const browser = await puppeteer.launch({
        headless: false
    });

    const page = await browser.newPage();

    // Open page.
    await page.goto('https://www.myworkday.com/northeastern/task/1422$2404.htmld?clientRequestID=bd97700ed2b34d5bb2be9571c4c880f5');

    // Show search form.
    // await page.click('.search-trigger');

    // Focus input field.
    // await page.focus('#search-form-top input');

    // Type in query.
    // await page.type('JavaScript', {delay: 200});

    // Submit the form.
    setTimeout(async function(){
        // console.log("Hello"); 
        // page.click('#wd-FacetValue-Search-SearchButton');
        const searchForm = await page.$('pre');
        const id = await page.$('#i0116');
        // await page.locator('input').fill('value');

        await page.locator('#i0116').fill('sankhla.t@northeastern.edu');
        await page.locator('#idSIButton9').click();
        
        // await page.locator('#i0118').fill('4thMarch@AdmitNortheastern');
        // await page.locator('#idSIButton9').click();
        await page.waitForXPath('//*[@id="i0118"]',5000);

        await page.locator('#i0118').fill('4thMarch@AdmitNortheastern');
        await page.locator('#idSIButton9').click();

        // await page.locator('#i0118').fill('4thMarch@AdmitNortheastern');
        await page.locator('#idSIButton9').click();
        
        // console.log(searchForm,id);
        console.log("a1");
    }, 3000);
   
    // setTimeout(async function(){
    //     // console.log("Hello"); 
    //     // page.click('#wd-FacetValue-Search-SearchButton');
    //     // const searchForm = await page.$('pre');
    //     // const id = await page.$('#i0116');
    //     // // await page.locator('input').fill('value');

    //     // await page.locator('#i0116').fill('sankhla.t@northeastern.edu');
    //     // await page.locator('#idSIButton9').click();
        
       
    //     // console.log(searchForm,id);
    //     console.log("a2");
    // }, 3000);
    // await searchForm.evaluate(searchForm => searchForm.submit());

    // Keep the browser open.
    // browser.close();
    })();
    console.log(4);

}