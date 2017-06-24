## Website Performance Optimization portfolio project (1st Updates)

#### How to run the site locally

Download as a zip file, unzip and then you can view the web pages locally.

To rank the page with Google Page Insigts, host the folder in a local web server, and then run ngrok with your localhost, so that you can access the pages remotely. 

Images are resized with ImageMagick. To run it in Windows 10, I installed bash, node.js (with npm) and gulp. Instuctions on how to install them are available on their own GitHub repo or support documentations.

#### Part 1: Optimize PageSpeed Insights score for index.html

Action taken:

1. Optimize CSS Delivery (https://developers.google.com/speed/docs/insights/OptimizeCSSDelivery?hl=en)

2. Images resized

3. Minify CSS/JavaScript files

#### Part 2: Optimize Frames per Second in pizza

Action taken:

1. Modifying the for loop in updatePositions() function

2. Modifying the for loop in changePizzaSizes() function

3. Replace some QuerySelector instances with getElementbyId in the changePizzaSizes() function