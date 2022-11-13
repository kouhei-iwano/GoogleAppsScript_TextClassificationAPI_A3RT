function doPost(e){

  //パラメータの取得
  let question = e.parameter.question

  //判別
  let service = new TextClassifyService()
  let category = service.execute(question)

  //レスポンス整形
  let json = new TextCategorizeJson()
  let textOutput = json.createResponce(question, category)

  return textOutput
  
}
