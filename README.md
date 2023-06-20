#### Test Automation Project ###

This project performs test automation of a web system using JavaScript, CodeceptJS, and Playwright.

### Installation ###

Make sure you have Node.js installed. Then, run the following command to install the dependencies:

- Install codeceptjs and playwright
npm install codeceptjs playwright --save

- Install gherkin
npx codeceptjs gherkin:init

- Install mochawesome
npm i mochawesome
npm install -g mochawesome-report-generator

### Run ###

- Run tests with mochawesome reports
npx codeceptjs run --reporter mochawesome

- Run steps and features
npx codeceptjs run --features --steps

- Run features
npx codeceptjs run --features --steps 

- Run tests 
npx codeceptjs run 

### Report ###

- This project uses mochawesome.
After running the tests, the HTML report file is generated in the ./output folder, so you just need to drag it to the browser.

### Docker ###

- Download docker
https://docs.docker.com/desktop/install/

- Create docker image
docker image build -t dockerfile-oranum-image .