// /* eslint-disable react/prop-types */
import React, { useState, useEffect, useRef } from "react";
import countries from "./countries";
import { useParams } from "react-router-dom";
import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import vertexShader from './shaders/vertex.glsl'
import fragmentShader from './shaders/fragment.glsl'
import dataCountries from "./allDataCrountry"

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
    }    
  }, [texture]);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.material.uniforms.uTime.value = clock.getElapsedTime();
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
const Country = () => {

  const { countryParam } = useParams();
  const [dataCountry, setDataCountry] = useState({
    name: "",
    flag: "",
    code: "",
    capital: "",
    population: ""
  });
  const [allDataCountries, setAllDataCountries] = useState({
    continent: "",
    currency: "",
    nativeName: "",
    languages: "",
    maps: ""
  });

  useEffect(() => {
    const country = countries.find(c => c.slug === countryParam);
    if (country) {
      dataCountries.map((c) => {   
        
        if (c.cca2 === country.code) {
          const kCurrenties = Object.keys(c.currencies)
          const kNativename = Object.keys(c.name.nativeName)
          const kLanguage = Object.keys(c.languages)
          const kMaps = Object.keys(c.maps)
          
          setAllDataCountries({
            continent: c.continents[0],
            currency: c.currencies[kCurrenties[0]].name,
            nativeName: c.name.nativeName[kNativename[0]].official,
            languages: c.languages[kLanguage[0]],
            maps: c.maps[kMaps[0]]
          })
        }
      })
      
      setDataCountry({
        name: country.name,
        flag: country.img.toLowerCase(),
        code: country.code,
        capital: country.capital,
        population: country.population,
        continent: country.continent
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
          <p>Continent: <b>{allDataCountries.continent}</b></p>
          <p>Currency: <b>{allDataCountries.currency}</b></p>
          <p>Native name: <b>{allDataCountries.nativeName}</b></p>
          <p>Languages: <b>{allDataCountries.languages}</b></p>
          <p>Maps: <b><a href={allDataCountries.maps} target="_blank" rel="noreferrer">{allDataCountries.maps}</a></b></p>
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