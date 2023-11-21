BGWidth = 300
BGHeight = 300

BG = rectangle(BGWidth, BGHeight, "outline", "white")
robotBody = rectangle(80, 100, "solid", "green")
robotHead = circle(30, "solid", "silver")
leftArm = rectangle(10, 40, "solid", "blue")
rightArm = rectangle(10, 40, "solid", "blue")
antenna = rectangle(10, 20, "solid", "red")

place-image(leftArm, BGWidth / 3, 120,
  place-image(rightArm, 200, 120,
    place-image(antenna, BGWidth / 2, 40,
      place-image(robotHead, BGWidth / 2, 70,
                 place-image(robotBody, BGWidth / 2, 150, BG)))))
