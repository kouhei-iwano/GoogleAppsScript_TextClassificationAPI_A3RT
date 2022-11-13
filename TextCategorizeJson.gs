class TextCategorizeJson {

  createResponce(text, category){

    let array = {
      "text": text,
      "category": category

    }
    //JSONで結果を出力
    let textOutput = ContentService.createTextOutput()
    textOutput.setMimeType(ContentService.MimeType.JSON)
    textOutput.setContent(JSON.stringify(array))

    return textOutput
  }

}


