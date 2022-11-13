class APIHandler {

  constructor(){
    this.apiKey = PropertiesService.getScriptProperties().getProperty("API_KEY")

  }
  post(URL){
    return this.post(URL, {})

  }

  post(URL, additional){
    
    let payload = {
        "apikey": this.apiKey
    }
    Object.assign(payload, additional)

    let response = UrlFetchApp.fetch(URL, {
      "method": "POST",
      "payload": payload
    })

    let parsedResponse = JSON.parse(response)
    return parsedResponse

  }

  get(URL){
    let endPointUrl = Utilities.formatString("%s&apikey=%s", URL, this.apiKey)
    let response = UrlFetchApp.fetch(endPointUrl)
    let parsedResponse = JSON.parse(response)

    return parsedResponse
  }
}
