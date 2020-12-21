
// rndf 是唯一的全局变量，后面所有要暴露的变量和方法都放在这个对象里
const rndf = {
  elements : new Set()
}

// 导入文件
rndf.readTextFile = (elementId, callback, fileTypes, encoding) => {
  rndf.elements.add(document.getElementById(elementId))
  let file
  document.addEventListener('click', async event => {
    if (event.target.id === elementId) {
      const element = document.createElement('input')
      element.type = "file"
      if (fileTypes) {
        element.accept = fileTypes
      }
      element.click()
      element.addEventListener("change", function() {
        file = element.files[0]
        
        // 读取文件内容
        const reader = new FileReader()
        reader.readAsText(file, encoding)
        reader.onload = function() {
          // console.log('成功读取文件内容：', this.result)
          
          if (fileTypes && fileTypes.includes("json")) {
            // 如果是 json 文件，将它转换为 JS 对象
            const data = JSON.parse(this.result)
            callback(data)
            
          } else{
            
            callback(this.result)
            
          }
        }
      }) 
    }
  })
}

// 下载文件
const download = (fileName, file) => {
  const element = document.createElement('a')
  const url = URL.createObjectURL(file)
  element.href = url
  element.download = fileName
  element.click()
  element.remove()
}

// 导出纯文本文件
rndf.downloadText = (elementId, fileName, textString) => {
  rndf.elements.add(document.getElementById(elementId))
  document.addEventListener('click', async event => {
    if (event.target.id === elementId) {
      const file = new File([textString], fileName, { type: 'text/plain' })
      download(fileName, file)
    }
  })
}

// 导出 JSON 文件
rndf.downloadJSON = (elementId, fileName, JSON_data) => {
  rndf.elements.add(document.getElementById(elementId))
  document.addEventListener('click', async event => {
    if (event.target.id === elementId) {
      const file = new File([JSON.stringify(JSON_data)], fileName, { type: 'application/json' })
      download(fileName, file)
    }
  })
}

onload = function() {
  
  // 修改光标形状
  for (const element of rndf.elements) {
    element.style.cursor = 'pointer'
  }
  
}
