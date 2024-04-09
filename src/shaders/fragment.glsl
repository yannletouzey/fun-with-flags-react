uniform vec3 uColor;
uniform sampler2D uTexture;

varying vec2 vUv;
varying float vElevation;

void main() {
  vec4 textureColor = texture2D(uTexture, vUv);
  textureColor.rgb += vElevation;
  gl_FragColor = textureColor;
}

// void main() {
//   gl_FragColor = vec4(uColor, 1.0);
// }
// varying float vRandom;

// void main() {
//   gl_FragColor = vec4(vRandom * 0.5, vRandom * 0.2, 0.0, 0.5);
// }