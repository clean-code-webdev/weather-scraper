# Weather Scraper

## Scrape weather using Puppeteer

- 1 ) Define your desired coordinates

```
// Example coordinates: New York  
const coodinates = {
  latitude: "40.71",
  longitude: "74.00",
};
```

* 2 ) Create and asynchronous function in order to call the application

```
async function init(coodinates) {
 const weather = new Weather(coodinates); // create a new class
 const forecast = await weather.getWeather(); // return the weather forecast
  
 console.log(forecast);
}
```

* 3 ) Call the asynchronous function

```
init(coodinates);
```

