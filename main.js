const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const inputColor = document.getElementById("color")
const buttonsSize = document.querySelectorAll("[data-size]")
const currentSize = document.getElementById("currentSize")





let isDrawing = false;
let lastX, lastY;
let lineColor = "#000"
let lineSize = 5



buttonsSize.forEach(button => {
  button.addEventListener("click", ()=> {
    if(button.dataset.size === "+" && lineSize < 50){
      
      lineSize += 5
      currentSize.textContent = lineSize
    
    }
    
    if(button.dataset.size === "-" && lineSize > 5) {
      lineSize -= 5
      currentSize.textContent = lineSize
    }
  })
})



document.querySelector(".remove").addEventListener("click", ()=> {
  context.clearRect(0,0,canvas.width, canvas.height)
})


inputColor.addEventListener("change", (e)=> {
laneColor = e.target.value
})

canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  lastX = e.offsetX;
  lastY = e.offsetY;
});

canvas.addEventListener("mousemove", (e) => {
  if (!isDrawing) return;

  drawLine(lastX, lastY, e.offsetX, e.offsetY);
  lastX = e.offsetX;
  lastY = e.offsetY;
});

canvas.addEventListener("mouseup", () => {
  isDrawing = false;
});

canvas.addEventListener("mouseout", () => {
  isDrawing = false;
});

function drawLine(x1, y1, x2, y2) {
  context.beginPath();
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.strokeStyle = lineColor;
  context.lineCap = "round";
  context.lineJoin = "round";
  context.lineWidth = lineSize;
  context.stroke();
}