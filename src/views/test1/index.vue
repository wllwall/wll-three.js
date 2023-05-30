<template>
  <div id="container"></div>
</template>
<script>
import * as THREE from "three";
import { OBJLoader, MTLLoader } from "three-obj-mtl-loader";
// import MTLLoader from  'three-mtl-loader';
// import OBJLoader from  'three-obj-loader';
import { CSS2DRenderer, CSS2DObject } from "three-css2drender";

const OrbitControls = require("three-orbit-controls")(THREE);
export default {
  name: "test1",
  data() {
    return {
      scene: "",
      camera: "",
      renderer: "",
      cube: "",
      controls: "",
    };
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      this.scene = new THREE.Scene();
      this.scene.add(new THREE.AmbientLight(0x999999)); //环境光
      this.light = new THREE.DirectionalLight(0xdfebff, 0.45); //从正上方（不是位置）照射过来的平行光，0.45的强度
      this.light.position.set(50, 200, 100);
      this.light.position.multiplyScalar(0.3);
      this.scene.add(this.light);
      this.camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );

      this.renderer = new THREE.WebGLRenderer();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      document.body.appendChild(this.renderer.domElement);

      var geometry = new THREE.BoxGeometry(1, 1, 1);

      // var loader = new THREE.CubeTextureLoader();
      // loader.setPath("static/textures/");

      // var textureCube = loader.load([
      //   "apple.png",
      //   "apple.png",
      //   "apple.png",
      //   "apple.png",
      //   "apple.png",
      //   "apple.png",
      // ]);
      var material = new THREE.MeshLambertMaterial({
        color: 0x15d4ff,
        // map: textureCube,
        // emissive:0xe84da1,
        // map: 'reflection',
      });
      console.log(material);
      this.cube = new THREE.Mesh(geometry, material);
      this.camera.position.z = 5;
      this.camera.lookAt(this.scene.position);
      //初始化控制器
      this.controls = new OrbitControls(this.camera);
      this.controls.target.set(0, 0, 0);
      this.controls.minDistance = 0;
      this.controls.maxDistance = 400;
      this.controls.maxPolarAngle = Math.PI / 3;
      this.controls.update();
      this.scene.add(this.cube);

      this.render();
    },
    render() {
      this.cube.rotation.x += 0.01;
      this.cube.rotation.y += 0.01;
      requestAnimationFrame(this.render);
      this.renderer.render(this.scene, this.camera);
    },
  },
};
</script>
<style lang="less" scoped>
</style>\