import React, { useRef, useContext } from "react";
import { ThemeContext } from '../../theme-context';
import { Box, OrbitControls } from "@react-three/drei";
import * as THREE from 'three';
import { useFrame } from "@react-three/fiber";


export default function Card() {

    const { theme } = useContext(ThemeContext);
    const ref = useRef(null)

    useFrame(() => {
        if (!ref.current) {
            retrun
        }
        ref.current.rotation.x += -0.00005;
        ref.current.rotation.y += 0.002;

    })

    const materials = [
        new THREE.MeshBasicMaterial({ color: 0x404040 }),
        new THREE.MeshBasicMaterial({ color: 0x404040 }),
        new THREE.MeshBasicMaterial({ color: 0x404040 }),
        new THREE.MeshBasicMaterial({ color: 0x404040 }),
        new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load(theme.cardF) }),
        new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load(theme.cardB) }),
    ];

    return (
        <>
            <pointLight position={[0, 0, 0]} intensity={3} color={'green'}/>
            <Box args={[5.95, 3.4, 0.05]} ref={ref} material={materials}>
            </Box >
            <OrbitControls />
        </>

    )
}