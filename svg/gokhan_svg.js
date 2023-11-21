document.addEventListener("DOMContentLoaded", function () {
    const svg = document.getElementById("robotSvg");
  
    const backgroundRect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    backgroundRect.setAttribute("x", "0");
    backgroundRect.setAttribute("y", "0");
    backgroundRect.setAttribute("width", "300");
    backgroundRect.setAttribute("height", "300");
    backgroundRect.setAttribute("fill", "white");
    backgroundRect.setAttribute("stroke", "black");
    svg.appendChild(backgroundRect);
  
    const robotBody = createRect(110, 90, 80, 120, "green");
    const robotHead = createCircle(150, 60, 30, "silver");
    const antenna = createRect(147, 20, 6, 10, "red");
    const leftArm = createRect(190, 90, 15, 60, "blue");
    const rightArm = createRect(95, 90, 15, 60, "blue");
  
    svg.appendChild(robotBody);
    svg.appendChild(robotHead);
    svg.appendChild(antenna);
    svg.appendChild(leftArm);
    svg.appendChild(rightArm);
  
    function createRect(x, y, width, height, fill) {
      const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
      rect.setAttribute("x", x.toString());
      rect.setAttribute("y", y.toString());
      rect.setAttribute("width", width.toString());
      rect.setAttribute("height", height.toString());
      rect.setAttribute("fill", fill);
      return rect;
    }
  
    function createCircle(cx, cy, r, fill) {
      const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      circle.setAttribute("cx", cx.toString());
      circle.setAttribute("cy", cy.toString());
      circle.setAttribute("r", r.toString());
      circle.setAttribute("fill", fill);
      return circle;
    }
  });
  