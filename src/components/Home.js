import './styles/Home.css';

import React, { useEffect } from 'react';

function Home(props) {
  const ref = React.useRef(null);
  useEffect(() => {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.zIndex = '0';

    let hue = 0;
    canvas.height = innerHeight * 0.98;
    canvas.width = innerWidth * 0.98;

    var particleArray = [];

    window.addEventListener('resize', function () {
      canvas.height = window.innerHeight;
      canvas.width = window.innerWidth;
    });

    const mouse = {
      x: null,
      y: null,
    };



    class Particle {
      constructor(position, hue, animation = { frames: 4 }) {
        this.x = position.x;
        this.y = position.y;

        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
        this.color = 'hsl(' + hue + ',10%,10%,20%)';

        this.size = Math.random() * 5 + 4;
        this.i = 1;
        this.animation = animation;
        this.step = Math.floor(Math.random() * this.animation.frames);
        this.stagger = 5 + Math.floor(Math.random() * 15);
        this.runtime = 0;
        this.gravity = 0.0;
        this.drag = 0;
      }

      update() {
        this.x += this.speedX;
        this.speedY += this.gravity;
        this.y += this.speedY;
        this.color = 'hsl(' + hue + ',100%,40%,20%)';
        this.i++;
      }

      reduceSize(rate = 0.5) {
        if (this.size > 0.2) {
          this.size *= rate;
        }
      }
    }

    Particle.prototype.draw = function (ctx) {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill();

      if (this.runtime % this.stagger === 0) {
        if (this.step < this.animation.frames - 1) {
          this.step++;
        } else {
          this.step = 0;
        }
      }
      this.runtime++;
    };

    function handleParticle() {
      particleArray.forEach((particle) => {
        particle.update();
        particle.draw(ctx);
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX *= -1;
        }

        if (particle.y < 0 || particle.y > canvas.height) {
          particle.speedY *= -1;
        }
      });
    }

    for (
      let i = 0;
      i <
      Math.sqrt(canvas.height * canvas.height + canvas.width * canvas.width) /
        10;
      i++
    ) {
      particleArray.push(
        new Particle(
          { x: Math.random() * canvas.width, y: Math.random() * canvas.height },
          hue
        )
      );
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      handleParticle();
      hue++;

      for (let i = 0; i < particleArray.length - 1; i++) {
        for (let j = i; j < particleArray.length; j++) {
          let dx = Math.abs(particleArray[i].x - particleArray[j].x);
          let dy = Math.abs(particleArray[i].y - particleArray[j].y);

          let distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particleArray[i].x, particleArray[i].y);
            ctx.lineTo(particleArray[j].x, particleArray[j].y);
            ctx.strokeStyle = 'hsl(' + hue + ',100%,50%,20%)';
            ctx.strokeWidth = 2;
            ctx.stroke();
            ctx.closePath();
          }
        }
      }

      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  return (
    <div className="Home" id="home">
      <canvas id="canvas"></canvas>
      <div className="home-content">
        <div className="title">Hi! I'm Ivan Derlich.</div>
        <div className="title">Welcome to my website!</div>
        <br></br>
        <div className="text">
          <p>
            I'm a full-stack software developer. I can provide you with the
            software infrastructure to make your ideas become a reality.
          </p>
          <p>
            I've crafted this website for you to see some of my projects, the
            technologies I know, and a way to contact me.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
