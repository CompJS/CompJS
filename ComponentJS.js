class Form {
  constructor(inputs, submit, otherAttributes={}) {
    this.Element = document.createElement('form')
    this.ComputedStyle = "";
    if (otherAttributes.toString() != "{}") {
      for (var k in otherAttributes) {
        this.ComputedStyle += `${k}: ${otherAttributes[k]}; `
      }
    }
  }
}
