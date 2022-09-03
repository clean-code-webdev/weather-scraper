const puppeteer = require("puppeteer");

class Weather {
  constructor(obj) {
    this.latitude = obj.latitude;
    this.longitude = obj.longitude;
  }

  getWeather = async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(
      `https://darksky.net/forecast/${this.latitude},${this.longitude}/si12/en`
    );

    const result = await page.evaluate(() => {
      const days = document.querySelectorAll("#week .day");

      let obj = [];

      days.forEach((day) => {
        const el = day.innerText.split("\n");
        const dayObj = { day: el[0], min: el[1], max: el[2] };
        obj.push(dayObj);
      });

      return obj;
    });

    await browser.close();
    return result;
  };
}

// New York Coordinates
const coodinates = {
  latitude: "40.71",
  longitude: "74.00",
};

// async funtion that initiate weather scraping
async function init(coodinates) {
  const weather = new Weather(coodinates);
  const res = await weather.getWeather();
  console.log(res);
}

init(coodinates);
