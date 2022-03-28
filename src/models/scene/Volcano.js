/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: chroma3d (https://sketchfab.com/vendol21)
license: SKETCHFAB Standard (https://sketchfab.com/licenses)
source: https://sketchfab.com/3d-models/low-poly-cartoon-volcano-scene-5ccb827bd7764c43b46e1acecf9c2cce
title: Low Poly Cartoon Volcano Scene
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/volcano.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[-0.59, -0.44, -0.39]} scale={3.21}>
          <mesh geometry={nodes.Volcano_0.geometry} material={materials.Volcano} />
          <mesh geometry={nodes.Volcano_1.geometry} material={materials.Lava} />
          <mesh geometry={nodes.Volcano_2.geometry} material={materials.Ground} />
          <mesh geometry={nodes.Volcano_3.geometry} material={materials.VolcanoSecond} />
          <mesh geometry={nodes.Volcano_4.geometry} material={materials.GroundSecond} />
        </group>
        <group position={[-1.49, -0.74, 2.33]} scale={3.21}>
          <mesh geometry={nodes.Smoke_0.geometry} material={materials.Smoke} />
        </group>
        <group position={[0.28, -0.36, -0.3]} scale={3.21}>
          <mesh geometry={nodes.Rocks_0.geometry} material={materials.Material} />
        </group>
        <group position={[2.38, -3.1, 0.57]} scale={3.21}>
          <mesh geometry={nodes.Tree_0.geometry} material={nodes.Tree_0.material} />
        </group>
        <group position={[0.98, 1.97, 0.43]} scale={3.21}>
          <mesh geometry={nodes.Tree02_0.geometry} material={nodes.Tree02_0.material} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/volcano.gltf')