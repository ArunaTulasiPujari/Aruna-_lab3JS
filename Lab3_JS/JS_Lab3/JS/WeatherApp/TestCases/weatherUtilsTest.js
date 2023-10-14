import { WeatherUtils } from "../weatherUtils.js"
import { WeatherAPI } from "../weatherApi.js";

async function testConvertResponse() {

  const weatherAPIObj = new WeatherAPI();
  weatherAPIObj.constructURL("Germany");
  const responseJSON = await weatherAPIObj.invokeURL();
  console.log(responseJSON);

  const outcome = WeatherUtils.convertResponse(responseJSON);

  console.log("Converted Response");
  console.log(outcome);
}

testConvertResponse();