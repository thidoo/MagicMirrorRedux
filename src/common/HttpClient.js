import fetch from "cross-fetch";

class HttpClient {
  makeRequest = url => {
    return fetch(url)
      .then(response => this.processHttpResponse(response))
      .then(response => response);
  };

  processHttpResponse = response => {
    if (!response.ok) {
      throw Error(response.statusText);
    }

    return response.json();
  };
}

export default HttpClient;
