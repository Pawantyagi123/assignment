"use client"


import { Context } from "@/context/Context";
import { Fade } from "react-awesome-reveal";
import { Modal } from "react-bootstrap";
import {Link} from "next/link";
import image from "@/public/home.png"
import Image from "next/image";
import { useContext, useEffect } from "react";
import "./homeContent.css"

function HomeContent() {
      const { openSignup, setOpenSignup } = useContext(Context);
    
      const handlePopup = () => {
        setOpenSignup(!openSignup);
      };

     useEffect(() => {
        const canvas = document.getElementById("canvas");
        const ctx = canvas.getContext("2d");
    
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    
        class Particle {
          constructor(x, y, speedX, speedY) {
            this.x = x;
            this.y = y;
            this.speedX = speedX;
            this.speedY = speedY;
          }
    
          update() {
            this.x += this.speedX;
            this.y += this.speedY;
    
            if (this.x > canvas.width || this.x < 0) this.speedX = -this.speedX;
            if (this.y > canvas.height || this.y < 0) this.speedY = -this.speedY;
          }
    
          draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
            ctx.fillStyle = "aqua";
            ctx.fill();
          }
        }
    
        const particles = [];
        const numParticles = 25;
    
        for (let i = 0; i < numParticles; i++) {
          const x = Math.random() * canvas.width;
          const y = Math.random() * canvas.height;
          const speedX = (Math.random() - 0.5) * 1.2;
          const speedY = (Math.random() - 0.5) * 1.2;
          particles.push(new Particle(x, y, speedX, speedY));
        }
    
        function animate() {
          requestAnimationFrame(animate);
          ctx.clearRect(0, 0, canvas.width, canvas.height);
    
          for (const particle of particles) {
            particle.update();
            particle.draw();
          }
    
          for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
              const dx = particles[i].x - particles[j].x;
              const dy = particles[i].y - particles[j].y;
              const distance = Math.sqrt(dx * dx + dy * dy);
    
              if (distance < 110) {
                ctx.strokeStyle = "rgba(157, 212, 215, 0.2)";
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.stroke();
              }
            }
          }
        }
    
        animate();
    
        window.addEventListener("resize", () => {
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;
        });
      }, []);
  return (
      <div className="home">
       
        <canvas id="canvas" className="canvas-background"></canvas>

       
        <Fade direction="left" duration={2000} triggerOnce>
        <div className="home-content">
          <h2>
            Test <span>Smarter</span>, Not <span>Harder</span>
          </h2>
          <h3>IT Solutions.</h3>
          <p className="para w-75">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero,
            id. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Molestiae, cumque.
          </p>
           {/* <Link href="#" onClick={handlePopup} className="button">
            Join us
          </Link>  */}
        </div>
        </Fade> 
     <Fade direction="right" duration={2000} triggerOnce>
        <div className="image d-flex justify-content-center align-items-center">
          <Image
            src={image}
            width={600}
            height={500}
            className="animated-image"
            alt="home-image"
            priority={false}
          />
        </div>
        </Fade>
      </div> 
  )
}

export default HomeContent
