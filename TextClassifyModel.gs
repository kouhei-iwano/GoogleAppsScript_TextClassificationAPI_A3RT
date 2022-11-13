class TextClassifyModel {

  constructor(apiHandler, modelID){
    this.apiHandler = apiHandler
    this.modelID = modelID

  }

  getDatasetURLandID(){

    //API呼び出し
    const URL = "https://api.a3rt.recruit.co.jp/text_classification/v1/dataset"
    
    let parsedResponse = this.apiHandler.post(URL)

    let result = {
      "dataset_id": parsedResponse["dataset_id"],
      "dataset_url": parsedResponse["dataset_url"] 
    }

    return result

  }

  create(datasetID){
    const URL = "https://api.a3rt.recruit.co.jp/text_classification/v1/model"
    
    let parsedResponse = this.apiHandler.post(URL, {
      "dataset_id": datasetID

    })

    let result = {
      "model_id": parsedResponse["model_id"]

    }
    return result
  }

  getStatus(){
    const URL = "https://api.a3rt.recruit.co.jp/text_classification/v1/check_status"
    let endPointURL = Utilities.formatString("%s?model_id=%s", URL, this.modelID)

    //APIを呼び出し、model_statusを返す
    let parsedResponse = this.apiHandler.get(endPointURL)
    let result = parsedResponse["model_status"]

    return result

  }
  getModelID(){
    return this.modelID

  }
}

function testGetDatasetURLandID(){
  let instance = new TextClassifyModel()
  let URLandID = instance.getDatasetURLandID()
  console.log(URLandID)
  
}

function testCreate(){
  let instance = new TextClassifyModel()
  let modelID = instance.create("ac3e8a32-29b8-441c-8c6b-2b66ff8b8b09")
  console.log(modelID)

}
//model_id: '2240818d-1850-4738-a129-d74bcefe67f7'

function testgetStatus(){
  let apiHandler = new APIHandler()
  let modelID = PropertiesService.getScriptProperties().getProperty("MODEL_ID")
  let instance = new TextClassifyModel(apiHandler, modelID)

  let status = instance.getStatus()
  console.log(status)
  
}




