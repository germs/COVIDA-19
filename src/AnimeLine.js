(function() {
    // initialize config variables here
    let canvas, ctx, angle, line, speed
  
    // setup config variables and start the program
    function init() {
      canvas = document.getElementById('gameCanvas')
      ctx = canvas.getContext('2d')
    
      //set canvas size
      canvas.width = 1080
      canvas.height = 1080
    
      // static parameters
      angle = 75
      speed = 5
      
      // starting parameters to change with datasets
      class line = {
        constructor(x = canvas.width / 2, y = 0, sceneProps, props)
        strokeWidth: 4,
        bounce: 0.75,
        x: canvas.width / 2,
        y: 0,
        velX: (Math.random() * 5 + 5) * (Math.floor(Math.random() * 2 || -1),
        velY: (Math.random() * 5 + 5) * (Math.floor(Math.random() * 2 || -1)
      }
      
      // begin update loop
      window.requestAnimationFrame(update)
    }
  
    //draws lines to the screen
    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
    
      ctx.beginPath()
      ctx.fillstyle = Colors.random()
      ctx.tree(line.x, line.y, line.)
    }
  
    //main loop to run
    function update() {
      window.requestAnimationFrame(update)
      //LOGIC GOES HERE
      //DRAW after logic or calculations
      draw()
    }
  
    // wait for the HTML to load
    document.addEventListener('DOMContentLoaded', init)
  })()