document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById("robotCanvas");
    const ctx = canvas.getContext("2d");
  
    const BGWidth = 300;
    const BGHeight = 300;
  
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, BGWidth, BGHeight);
    ctx.strokeRect(0, 0, BGWidth, BGHeight);
  
    const robotBody = { width: 80, height: 100, color: "green" };
    const robotHead = { radius: 30, color: "silver" };
    const leftArm = { width: 10, height: 40, color: "blue" };
    const rightArm = { width: 10, height: 40, color: "blue" };
    const antenna = { width: 10, height: 20, color: "red" };
  
    drawComponent(leftArm, BGWidth / 3, 120);
    drawComponent(rightArm, 200, 120);
    drawComponent(antenna, BGWidth / 2, 40);
    drawComponent(robotHead, BGWidth / 2, 70);
    drawComponent(robotBody, BGWidth / 2, 150);
  
    function drawComponent(component, x, y) {
      ctx.fillStyle = component.color;
  
      if (component.width && component.height) {
        ctx.fillRect(
          x - component.width / 2,
          y - component.height / 2,
          component.width,
          component.height
        );
        ctx.strokeRect(
          x - component.width / 2,
          y - component.height / 2,
          component.width,
          component.height
        );
      } else if (component.radius) {
        ctx.beginPath();
        ctx.arc(x, y, component.radius, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();
      }
    }
  });
  