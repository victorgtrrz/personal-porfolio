import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const BackgroundNumbers: React.FC<{theme: string | undefined}> = ({ theme }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
    
  useEffect(() => {
    if (canvasRef.current) {

      const canvas = canvasRef.current;
      // Texture Loader
      const loader = new THREE.TextureLoader();
      const zeros = loader.load('./0.png');
      const ones = loader.load('./1.png');
      // Scene
      const scene = new THREE.Scene()
  
      // Objects
      const geometry = new THREE.TorusGeometry(.6, .2, 32, 100);
      const particlesGeometry_zeros = new THREE.BufferGeometry;
      const particlesGeometry_ones = new THREE.BufferGeometry;
      const particlesCount = 5000;
  
      const posArray_zeros = new Float32Array(particlesCount * 3);
      const posArray_ones = new Float32Array(particlesCount * 3);
  
      for (let i = 0; i < particlesCount ; i++) {
        posArray_zeros[i * 3 ] = (Math.random() - 0.5) * 5
        posArray_zeros[i * 3 + 1] = (Math.random() - 0.5) * 5
        posArray_zeros[i * 3 + 2] = - Math.random() * 0.5
      }

      for (let i = 0; i < particlesCount ; i++) {
        posArray_ones[i * 3 ] = (Math.random() - 0.5) * 5
        posArray_ones[i * 3 + 1] = (Math.random() - 0.5) * 5
        posArray_ones[i * 3 + 2] = - Math.random() * 0.5
      }
  
      particlesGeometry_zeros.setAttribute('position', new THREE.BufferAttribute(posArray_zeros, 3))
      particlesGeometry_ones.setAttribute('position', new THREE.BufferAttribute(posArray_ones, 3))
  
      const particlesMaterial_zeros = new THREE.PointsMaterial({
        size: 0.005,
        map: zeros,
        transparent: true,
        color: theme == 'dark' ? '#00ff00' : '#000000'
      })

      const particlesMaterial_ones = new THREE.PointsMaterial({
        size: 0.005,
        map: ones,
        transparent: true,
        color: theme == 'dark' ? '#00ff00' : '#000000'
      })
  
      // Mesh
      const particlesMesh_zeros = new THREE.Points(particlesGeometry_zeros, particlesMaterial_zeros)
      const particlesMesh_ones = new THREE.Points(particlesGeometry_ones, particlesMaterial_ones)
      
      scene.add(particlesMesh_zeros, particlesMesh_ones)
  
      // Sizes
      const sizes = {
        width: window.innerWidth,
        height: window.innerHeight
      }
  
      window.addEventListener('resize', () => {
        // Update sizes
        sizes.width = window.innerWidth
        sizes.height = window.innerHeight
  
        // Update camera
        camera.aspect = sizes.width / sizes.height
        camera.updateProjectionMatrix()
  
        // Update renderer
        renderer.setSize(sizes.width, sizes.height)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      })
  
      // Base camera
      const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
      camera.position.x = 1.2;
      camera.position.y = 0
      camera.position.z = 0
      scene.add(camera)
  
      // Renderer
      const renderer = new THREE.WebGLRenderer({
        canvas: canvas
      })
      renderer.setSize(sizes.width, sizes.height)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      renderer.setClearColor(new THREE.Color('#000000'), 0)
  
      // Animate
      const clock = new THREE.Clock()
  
      const tick = () => {
  
        const elapsedTime = clock.getElapsedTime()
  
        // Update objects
 
        particlesMesh_zeros.rotation.z = elapsedTime * 0.05

        particlesMesh_ones.rotation.z = elapsedTime * 0.05
  
        // Update Orbital Controls
        // controls.update()
  
        // Render
        renderer.render(scene, camera)
  
        // Call tick again on the next frame
        window.requestAnimationFrame(tick)
  
      }
  
      tick()
  
      // Función de limpieza para liberar recursos cuando el componente se desmonte
      return () => {
        // Aquí debes parar tu animación y liberar los recursos de Three.js
        // No olvides limpiar el listener de eventos
        scene.remove(particlesMesh_zeros, particlesMesh_ones)
        geometry.dispose()
        particlesGeometry_zeros.dispose()
        particlesGeometry_ones.dispose()
        particlesMaterial_zeros.dispose()
        particlesMaterial_ones.dispose()
        renderer.dispose()
      };

    }
  }, [theme]);

  return (
    <div className={`absolute three-background w-full ${theme == 'dark' ? 'bg-black' : 'bg-[#00ff00]'}`}>
      <canvas ref={canvasRef} className="webgl"></canvas>
      <style jsx>{`
        .three-background {
          position: fixed; /* Cambiado de 'absolute' a 'fixed' */
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
        }
        .webgl {
          width: 100%;
          height: 100%;
        }
      `}</style>
    </div>
  );
};

export default BackgroundNumbers;
