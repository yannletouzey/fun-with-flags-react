// /* eslint-disable react/prop-types */
import React, { useState, useEffect, useRef } from "react";
import countries from "./countries";
import { useParams } from "react-router-dom";
import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import vertexShader from './shaders/vertex.glsl'
import fragmentShader from './shaders/fragment.glsl'
const AnimatedMesh = ({ dataCountry }) => {
  const meshRef = useRef();
  const texture = useLoader(THREE.TextureLoader, dataCountry.flag || '');
  const [size, setSize] = useState({ width: 0, height: 0 });
  const [rFlag, setRFlag] = useState(6.5);
  useEffect(() => {
    if (texture) {
      setSize({
        width: texture.image.width,
        height: texture.image.height
      });
      console.log(texture.source.data.naturalWidth, texture.source.data.naturalHeight, dataCountry);
      
    }
    console.log(texture.source.data.naturalHeight, texture.source.data.naturalWidth, (texture.source.data.naturalHeight / texture.source.data.naturalWidth) );
    console.log(dataCountry);
    
    
  }, [texture]);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      // meshRef.current.material.uniforms.uTime.value = clock.getElapsedTime();
    }
  });

  return (
    <mesh ref={meshRef} >
      <planeGeometry args={[rFlag, (rFlag * (texture.source.data.naturalHeight / texture.source.data.naturalWidth) * 2), 32, 32]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={{ 
          uTexture: { value: texture },
          uFrequency: { value: new THREE.Vector2(1, 1) },
          uTime: { value: 0 },
        }}
      />
    </mesh>
  );
};
const Country = ({ data}) => {

  const { countryParam } = useParams();
  const [dataCountry, setDataCountry] = useState({
    name: "",
    flag: "",
    code: "",
    capital: "",
    population: ""
  });

  useEffect(() => {
    const country = countries.find(c => c.slug === countryParam);
    console.log(country);
    
    if (country) {
      setDataCountry({
        name: country.name,
        flag: country.img.toLowerCase(),
        code: country.code,
        capital: country.capital,
        population: country.population,
      });
    }
  }, [countryParam]);
  

  return (
    <div className="country">
      <h2>{dataCountry.name}</h2>
      <div className="country_container">
        <div className="country_left">
          <p>Capital: <b>{dataCountry.capital}</b></p>
          <p>Population: <b>{dataCountry.population}</b></p>
        </div>
        <div className="country_right">
          <Canvas style={{ width: "500px", height: "500px" }}>
            <AnimatedMesh dataCountry={dataCountry} />
          </Canvas>
        </div>
      </div>
    </div>
  );
};

export default Country;
