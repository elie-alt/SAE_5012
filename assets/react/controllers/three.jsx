import React from "react";
import * as THREE from 'three';
import { Canvas } from "@react-three/fiber";
import  Card  from "./Card";

function Scene(params) {
    return (
        <>
            <Canvas style={{ "height": "450px", "width": "100%" }}>
                <Card />
            </Canvas>
        </>
    )
}

export  default Scene;