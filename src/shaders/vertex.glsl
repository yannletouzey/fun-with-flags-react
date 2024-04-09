uniform vec2 uFrequency;
uniform float uTime;

varying vec2 vUv;
varying float vElevation;

void main() {
  vec4 modelPosition = modelMatrix * vec4(position, 1.0);

  float elevation = sin(modelPosition.x * uFrequency.x + uTime) * 0.1;
  elevation += sin(modelPosition.y * uFrequency.y + uTime) * 0.05;
  modelPosition.z = elevation;
  modelPosition.y *= 0.5;
  
  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectPosition = projectionMatrix * viewPosition;

  gl_Position = projectPosition;
  vUv = uv;
  vElevation = elevation;
}


// attribute float aRandom;
// varying float vRandom;

// void main() {
//   vec4 modelPosition = modelMatrix * vec4(position, 1.0);
//   // modelPosition.z = sin(modelPosition.x * 20.0) * 0.01;
//   modelPosition.z += aRandom * 0.1;

//   vec4 viewPosition = viewMatrix * modelPosition;
//   vec4 projectPosition = projectionMatrix * viewPosition;
//   gl_Position = projectPosition;

//   vRandom = aRandom;
// }