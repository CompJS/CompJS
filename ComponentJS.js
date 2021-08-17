class Form {
  constructor(style, inputs, submit, method, action, parent) {
    this.input = (e)=>{
      return e.localName == "input" && e.type != "submit"
    }
    this.HTMLForm = document.createElement('form')
    this.HTMLForm.action = action
    this.HTMLForm.method = method
    
    inputs.forEach((i)=>{
      this.HTMLForm.appendChild(i)
    })
    
    parent.appendChild(this.HTMLForm)
  }
  ondataavailable(callback) {
    this.HTMLForm.addEventListener("submit", ()=>{
      this.values = this.HTMLForm.children.filter(input)
      submittedData = {}
      this.values.forEach((e)=>{
        submittedData[e.name] = e.value
      })
      callback(submittedData)
    })
  }
}

    
    
  
