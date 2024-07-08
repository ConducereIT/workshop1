import { GenezioDeploy } from "@genezio/types";

@GenezioDeploy()
export class BackendClass {
  handleCall() {
    return fetch("http://ip-api.com/json/")
      .then((response) => response.json())
      .then((data) => {
        return data;
      })
      .catch((error) => {
        console.log(error);
      });
  }
  handleCats() {
    return fetch("https://api.thecatapi.com/v1/images/search", {})
      .then((response) => response.json())
      .then((data) => {
        return data[0].url;
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
