import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  //testMatch: ["tests/login.test.ts"],
  //testMatch: ["tests/recorded.test.ts"],
  //testMatch: ["tests/basicInteractions.test.ts"],
  //testMatch: ["tests/frames.test.ts"],
  //testMatch: ["tests/windows.test.ts"],
  //testMatch: ["tests/calendar.test.ts"],
  //testMatch: ["tests/uploadDownload.test.ts"],
  testMatch: ["pomtest/addToCart.test.ts"],
  use: {
    baseURL: "https://ecommerce-playground.lambdatest.io/index.php?",
    headless: false,
    screenshot: "only-on-failure",
    video: "retain-on-failure",
    // launchOptions: {
    //   slowMo: 1000
    // }
  },
  retries: 0,
  reporter: [
    ["dot"], 
    ["json", {
      outputFile: "jsonReports/jsonReport.json"
    }],
    ["html", {
      open: "never"
  }]]
}

export default config;
