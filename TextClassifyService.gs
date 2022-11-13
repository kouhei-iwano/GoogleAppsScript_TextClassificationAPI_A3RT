class TextClassifyService {

  execute(text){
    
    //モデルIDを取得
    let modelID = PropertiesService.getScriptProperties().getProperty("MODEL_ID")

    //モデルオブジェクトの作成
    let apiHandler = new APIHandler()
    let model = new TextClassifyModel(apiHandler, modelID)

    //textの文字数が1000字を超えるならErrorという文字列を返す
    //ステータスを取得し、finish以外ならErrorという文字列を返す
    //ステータスがfinishなら判定を行い、カテゴリを返す
    let classify = new TextClassify()
    let checkResult = (classify.check(text))
    
    let result = "Error"
    if(checkResult){
      let status = model.getStatus()

      if(status == "finish"){
        
        result = classify.classify(apiHandler, model, text)

      }
    }
    return result
  }
}

function testExecute(){
  let instance = new TextClassifyService()
  let result = instance.execute("両親が吃音の子供を何と呼ぶんですか？")
  console.log(result)
}
