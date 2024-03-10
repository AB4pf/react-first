import { Canvas, useFrame } from '@react-three/fiber'
import './App.css'
import { useRef } from 'react'

// toujours définir mes variable dans le const comme fait ci-dessous pour pouvoir simplifier l'impémentation de mes
// cube que je vais appellée dans mon const App
const Cube = ({ position, size, color }) => {

  // quand on itulise useFrame pour animer en 3D mes éléments toujours importer useRef
  const ref = useRef ()

  // useFrame est utiliser pour animer mes les éléments comme par exemple la rotation 
  useFrame ((state , delta) => {
    // la rotation sur l'axe x 'tourne vers le bas' pour y 'tourne vers la droite' pour z 'tourne autoure de
    // lui même sans la 3d'
    ref.current.rotation.x += delta // delta * 2 acélere la rotation
    ref.current.rotation.z += delta
    // la positoon est utiliser pour faire tourner le cube donc la rotation vers la direction
    // d'un axe
    ref.current.position.x = Math.sin(state.clock.elapsedTime) * 2 // Math.sin... c'est pour faire revenir en arriere
    // comme un boomerang le cube le ' * 2 ' est juste ou le cube doit allez vers l'axe pour revenir a son point initiale
    ref.current.position.z = Math.sin(state.clock.elapsedTime) * 2
    // Pour afficher dans la console le temps 
    console.log (state.clock.elapsedTime)

  })

  // code pour racourci le faite de faire et afficher mes cubes avec des <mesh>
  return (
    <mesh position={position} ref={ref}>
          <boxGeometry args={size}/>
          <meshStandardMaterial color={color}/>
    </mesh>
  )
}

// const App pour ce qui s'affiche sur mon serveur
const App = () => {

  return (
      <Canvas>
        {/* Mettre la couleur sur un axe de mon Cube */}
        <directionalLight position={[0, 0, 2]}/>
        {/* Faire refléchir sur les autres axe la couleur mise sur un axe */}
        <ambientLight intensity={0.1}/>
        {/* 'group' pour Grouper mes cubes */}
        {/* <group position={[0, -1, 0]}>
          <Cube position={[1, 0, 0]} color={"pink"} size={[1, 1, 1]} />
          <Cube position={[-1, 0, 0]} color={"red"} size={[1, 1, 1]} />

          <Cube position={[-1,2,0]} color={"blue"} size={[1, 1, 1]} />
          <Cube position={[1,2,0]} color={"green"} size={[1, 1, 1]} />
        </group> */}
        <Cube position={[0, 0, 0]} size={[1, 1, 1]} color={"yellow"}/>
      </Canvas>
  )
}

export default App
