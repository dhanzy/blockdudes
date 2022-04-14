import React from "react";
import { styled } from "@mui/material";

const CanvasParticle = styled("canvas")(({ theme }) => ({
  position: "absolute",
  top: 0,
  right: 0,
  width: "50%",
  height: "100%",
  [theme.breakpoints.down("lg")]: {
    width: "100%",
  },
  [theme.breakpoints.down("md")]: {
    bottom: 0,
    left: 0,
    width: "100%",
  },
}));

const Canvas = () => {
  const canvasRef = React.useRef(null);
  //   const sleep = (milliseconds) => {
  //     return new Promise((resolve) => setTimeout(resolve, milliseconds));
  //   };
  React.useEffect(function init() {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let particlesarray;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    class Particle {
      constructor(x, y, directionX, directionY, size, color) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
      update() {
        if (this.x > canvas.width || this.x < 0) {
          this.directionX = -this.directionX;
        }
        if (this.y > canvas.height || this.y < 0) {
          this.directionY = -this.directionY;
        }
        this.x += this.directionX;
        this.y += this.directionY;

        this.draw();
      }
    }
    function connect() {
      for (let a = 0; a < particlesarray.length; a++) {
        for (let b = 0; b < particlesarray.length; b++) {
          ctx.strokeStyle = "rgba(236,236,236,0.1)";
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(particlesarray[a].x, particlesarray[a].y);
          ctx.lineTo(particlesarray[b].x, particlesarray[b].y);
          ctx.stroke();
        }
      }
    }
    function init() {
      particlesarray = [];
      let numberofparticles = (canvas.height * canvas.width) / 100000;
      for (let i = 0; i < numberofparticles; i++) {
        let size = Math.random() * 4 + 0.5;
        let x =
          Math.random() * (window.innerWidth - size * 2 - size * 2) + size * 2;
        let y =
          Math.random() * (window.innerHeight - size * 2 - size * 2) + size * 2;
        let directionX = Math.random() * 5 - 2.5;
        let directionY = Math.random() * 5 - 2.5;
        let color = "#fff";
        particlesarray.push(
          new Particle(x, y, directionX, directionY, size, color)
        );
      }
    }
    async function animate() {
      // setTimeout(() => requestAnimationFrame(animate), 1000 / 30);
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      for (let i = 0; i < particlesarray.length; i++) {
        particlesarray[i].update();
      }
      connect();
    }
    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    });
    init();
    animate();
  }, []);
  return <CanvasParticle ref={canvasRef} />;
};

export default Canvas;
