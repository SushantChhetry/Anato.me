"use client";
// add use client directive because this model can be rendered in client side only

import React, { useRef } from "react";
import {
  Canvas,
  useLoader,
  useThree,
  useFrame,
  extend,
} from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

const ModelViewer = () => {
  const controlsRef = useRef();

  useFrame(() => controlsRef.current.update());

  return <OrbitControls ref={controlsRef} />;
};

const Model = () => {
  return (
    <div>
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <ModelViewer />
        <mesh>
          <boxBufferGeometry args={[2, 2, 2]} />
          <meshStandardMaterial />
        </mesh>
      </Canvas>
    </div>
  );
};

export default Model;
