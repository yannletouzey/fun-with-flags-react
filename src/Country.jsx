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
  useEffect(() => {
    if (texture) {
      setSize({
        width: texture.image.width,
        height: texture.image.height
      });
    }
  }, [texture]);
  function calculerRatioSimplifie(width, height) {
    const pgcd = (a, b) => b === 0 ? a : pgcd(b, a % b);
    const diviseur = pgcd(width, height);
    let ratio = {
      width: width / diviseur,
      height: height / diviseur
    }
    return ratio;
  }
  const [ratio, setRatio] = useState({ width: 0, height: 0 });
  useEffect(() => {
    const ratio = calculerRatioSimplifie(size.width, size.height);
    setRatio({
      width: ratio.width,
      height: ratio.height
    })
  }, [size])

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.material.uniforms.uTime.value = clock.getElapsedTime();
    }
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[10, 10, 32, 32]} />
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
const Country = () => {

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
          <Canvas style={{ width: "100%", height: "100%" }}>
            <AnimatedMesh dataCountry={dataCountry} />
          </Canvas>
        </div>
      </div>
    </div>
  );
};

export default Country;
