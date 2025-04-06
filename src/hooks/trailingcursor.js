'use client';
import { useEffect, useRef } from 'react';
const TrailingCursor = ({
  element,
  particles = 30,
  rate = 0.3,
  baseImageSrc = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAATCAYAAACk9eypAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAADKADAAQAAAABAAAAEwAAAADxvPoOAAAB50lEQVQoFY1TzWoUQRCu6mlnhRj8ISSoEGRPksVb8g7x4jMIPoLk4gsIPocnES/eIxg3gjnkurqsCzHgzwYkuuDO9EyX39dj3xZiwdDdVfX9VM+MfHszOj0//HLDzJz8R7hYh9t/qvlwdjh5bS+suAjjYtVKrPk0/R+b07WLAHry8si0d0mK0osrIeC0v7EyP9Xt7bAM7Nq6kXYRJFZNUpJow1l99YONx71lAB+rKM5gSUUsd5hunH0v7+D4Mafy6tuKymhVlUKgonYzFdVGs3eTHbu+GK0PBvMMcDEESbYAbGkLT1p5ESHsy3nv08/j6bUMgKVW1BTWjSIpnGjaG5S9yJUQ23soHLDo6ZsKjs1E0B1zICjMVluQFeLfzt6PH1jhj7wqOqgAKxrRiGaSFEApWLhHGSB55i7rZ28RBhIIzaFTogKwsAqbSRGEBIqsdgrsYCCDT6Xbd9zCeTpN2XRma555KhhKHZ1iJhpjuFq0qatFc+vuo53fzHgSRJhMbgEmgQMBlf4Jl70yrqCSAC4pEMpwcgatJ9Tjoanbsq1DGWr9muopKzID+z72r1xT9Qd795/C20Q4MIARL5Q3mMNv7e2u50NeofBQVQ+oQ7P8/HMs/cu2Hu8OcfnPMcMxhpoC+CsD/gKIcP3rDHChOwAAAABJRU5ErkJggg==',
}) => {
  const canvasRef = useRef(null);
  const cursorRef = useRef({ x: 0, y: 0 });
  const particlesRef = useRef([]);
  const animationFrameRef = useRef();
  const cursorsInittedRef = useRef(false);
  class Particle {
    position;
    image;
    constructor(x, y, image) {
      this.position = { x, y };
      this.image = image;
    }
    move(context) {
      context.drawImage(this.image, this.position.x, this.position.y);
    }
  }
  useEffect(() => {
    const baseImage = new Image();
    baseImage.src = baseImageSrc;
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    );
    const hasWrapperEl = element !== undefined;
    const targetElement = hasWrapperEl ? element : document.body;
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    if (!context) return;
    canvasRef.current = canvas;
    canvas.style.top = '0px';
    canvas.style.left = '0px';
    canvas.style.pointerEvents = 'none';
    if (hasWrapperEl) {
      canvas.style.position = 'absolute';
      canvas.style.zIndex = 9999999999;
      targetElement.appendChild(canvas);
      canvas.width = targetElement.clientWidth;
      canvas.height = targetElement.clientHeight;
    } else {
      canvas.style.position = 'fixed';
      canvas.style.zIndex = 9999999999;
      document.body.appendChild(canvas);
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    const onMouseMove = (e) => {
      if (hasWrapperEl && element) {
        const boundingRect = element.getBoundingClientRect();
        cursorRef.current.x = e.clientX - boundingRect.left;
        cursorRef.current.y = e.clientY - boundingRect.top;
      } else {
        cursorRef.current.x = e.clientX;
        cursorRef.current.y = e.clientY;
      }
      if (cursorsInittedRef.current === false) {
        cursorsInittedRef.current = true;
        for (let i = 0; i < particles; i++) {
          particlesRef.current.push(
            new Particle(cursorRef.current.x, cursorRef.current.y, baseImage)
          );
        }
      }
    };
    const onWindowResize = () => {
      if (hasWrapperEl && element) {
        canvas.width = element.clientWidth;
        canvas.height = element.clientHeight;
      } else {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };
    const updateParticles = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      let x = cursorRef.current.x;
      let y = cursorRef.current.y;
      particlesRef.current.forEach((particle, index) => {
        const nextParticle =
          particlesRef.current[index + 1] || particlesRef.current[0];
        particle.position.x = x;
        particle.position.y = y;
        particle.move(context);
        x += (nextParticle.position.x - particle.position.x) * rate;
        y += (nextParticle.position.y - particle.position.y) * rate;
      });
    };
    const loop = () => {
      updateParticles();
      animationFrameRef.current = requestAnimationFrame(loop);
    };
    if (!prefersReducedMotion.matches) {
      targetElement.addEventListener('mousemove', onMouseMove);
      window.addEventListener('resize', onWindowResize);
      loop();
    }
    return () => {
      if (canvasRef.current) {
        canvasRef.current.remove();
      }
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      targetElement.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onWindowResize);
    };
  }, [element, particles, rate, baseImageSrc]);
  return null;
};
export default TrailingCursor;
