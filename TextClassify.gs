class TextClassify {

  //1000文字以下かどうか
  check(text){
    let result = (text.length <= 1000)
    return result

  }

  //クラス分けを実行し、最も可能性が高いラベルを返す
  classify(apiHandler, model, text){

    //パラメータ準備
    let additional = {
      "model_id": model.getModelID(),
      "text": text

    }

    //APIの呼び出し
    const URL = "https://api.a3rt.recruit.co.jp/text_classification/v1/classify"
    let parsedResponse = apiHandler.post(URL, additional)
    console.log(parsedResponse)
    //返すデータの整形
    let classes = parsedResponse["classes"]
    let first = classes[0]
    let label = first["label"]

    //結果を返す
    return label

  }
}

function testClassify(){
  let apiHandler = new APIHandler()
  let modelID = PropertiesService.getScriptProperties().getProperty("MODEL_ID")
  let model = new TextClassifyModel(apiHandler, modelID)

  let instance = new TextClassify()
  let result = instance.classify(apiHandler, model, "両親が吃音の子供を何と呼ぶんですか？ ")

  console.log(result)
}














