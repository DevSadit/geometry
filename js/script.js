function calculateTriangle() {
  const b = document.getElementById(`base`);
  const x = parseFloat(b.value);
  const h = document.getElementById(`height`);
  const y = parseFloat(h.value);
  const area = 0.5 * x * y;

//   way 01
  const spanp = document.getElementById(`para-area`);
  spanp.innerText = `The Area of the Triangle is ${area}`;
//   way 02
  // const areaBox = document.getElementById(`area-box`);
  // const p = document.createElement(`p`);
  // p.textContent = `the area of the triangle is ${area}`
  // areaBox.appendChild(p);
}



function calculateRectangle() {
  const width = document.getElementById(`width`);
  const x = parseFloat(width.value);
  const length = document.getElementById(`length`);
  const y = parseFloat(length.value);
  const area =  x * y;

  //   way 01
  const spanp = document.getElementById(`para-area`);
  spanp.innerText = `The Area of the Rectangle is ${area}`;
  //   way 02
  // const areaBox = document.getElementById(`area-box`);
  // const p = document.createElement(`p`);
  // p.textContent = `the area of the triangle is ${area}`
  // areaBox.appendChild(p);
}