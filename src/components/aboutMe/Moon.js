import moonTexture from "../../assets/svg/moonTexture.png";
import React, { Component } from "react";
import * as THREE from "three";

class Moon extends Component {
  componentDidMount() {
    // Créer un renderer
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setSize(1000, 500);

    this.mount.appendChild(this.renderer.domElement);

    // Créer une scène
    this.scene = new THREE.Scene();

    // Créer une caméra
    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this.camera.position.z = 20;

    // Créer une sphère
    const geometry = new THREE.SphereGeometry(12, 32, 32);
    const texture = new THREE.TextureLoader().load(moonTexture);
    const material = new THREE.MeshBasicMaterial({ map: texture });
    this.mesh = new THREE.Mesh(geometry, material);
    this.mesh.position.set(0, 0, 0); // Positionner la sphère à l'origine
    material.castShadow = false; // Désactiver l'ombre portée
    material.receiveShadow = false;
    this.scene.add(this.mesh);

    // Animer la sphère
    this.animate();
  }

  animate = () => {
    requestAnimationFrame(this.animate);
    this.mesh.rotation.y += 0.0005;
    this.renderer.render(this.scene, this.camera);
  };

  render() {
    return <div className="moonCanvas" ref={(mount) => (this.mount = mount)} />;
  }
}

export default Moon;
