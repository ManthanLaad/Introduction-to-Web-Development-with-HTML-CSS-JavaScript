const main = document.body.querySelector("main");

function Laptop(Processor, Gpu) {
  this.Processor = Processor;
  this.Gpu = Gpu;
  this.name = () => {
    return this.Processor + " || " + this.Gpu + this.cost()
  }
}

function addHeader(text) {
  const h1 = document.createElement("h3");
  h1.innerHTML = text;
  h1.style = "color: cyan;"
  main.appendChild(h1);
}

Laptop.prototype.cost = ()=>{
    return this.Processor +" "+ this.Gpu
}

var a = new Laptop("Ryzen", "Nvidia");
var b = new Laptop("Intel", "Rtx 1050");

console.log(a.name());
console.log(b.name());


addHeader("Add by JavaScript");
