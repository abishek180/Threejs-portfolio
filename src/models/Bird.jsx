import { useAnimations, useGLTF } from "@react-three/drei"
import birdScene from "../assets/3d/phoenix_bird.glb"
import { useEffect, useRef } from "react"

const Bird = () => {
    const {scene, animations} = useGLTF(birdScene)
    const birdRef = useRef();
    const {actions} = useAnimations(animations, birdRef);

    useEffect(()=>{
      actions['Take 001'].play();
    },[]);

  return (
    <mesh 
    position={[-5,2,1]} 
    scale={[0.003,0.003,0.003]}
    ref={birdRef}>
        <primitive object={scene}/>
    </mesh>
  )
}

export default Bird