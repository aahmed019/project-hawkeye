import React, { useRef, useEffect } from 'react';

const SineWave = props => {
  const canvasRef = useRef(null);
  let startingY = 0;

  const calcSineY = (height, A, x, offset, k) => {
    return A * Math.sin(k * x + offset) + height / 2;
  }
  
  const drawSine = (context, y) => {
    // debugger;
    const height = context.canvas.height;
    const A = context.canvas.height / 4;
    const frequency = 0.1;
    const offset = 0.05;
    let x = (Math.asin((y - height / 2) / A) - offset) / frequency;

    context.beginPath();
    context.setLineDash([1, 7]);
    context.lineWidth = 1;
    context.strokeStyle = "white";
    context.moveTo(x, y);
    
    while(x < context.canvas.width){
      y = calcSineY(height, A, x, offset, frequency);
      context.lineTo(x, y);
      x += offset;
    }

    context.stroke();
    console.log(y);
    return y;
  }

  const draw = timestamp => {
    setInterval(function() {
      const context = canvasRef.current.getContext('2d');
      context.clearRect(0, 0, context.canvas.width, context.canvas.height);
      
      startingY = drawSine(context, startingY);
    }, 1000/12);
  }

  useEffect(() => {
    startingY = canvasRef.current.getContext('2d').canvas.height / 2;
    draw();
  })

  return <canvas ref={canvasRef} {...props} />;
};

export default SineWave;