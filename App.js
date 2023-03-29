import React from "react";
import { View } from "react-native-web";
import {Expo} from 'expo';
import {Scene, Mesh, MeshBasicMaterial, PerspectiveCamera, BoxGeometry } from "three";
import ExpoTHREE, {Renderer} from "expo-three";
import{ExpoWebGLRenderingContext, GLView} from 'expo-gl';

const App = () =>{

  const onContextCreate = async(gl) =>{
    const scene = new Scene;
    const camera = new PerspectiveCamera(75, gl.drawingBufferWidth/gl.drawingBufferHeight, 0.1, 1000)

    //gl.canvas = {width: gl.drawingBufferWidth, height: gl.drawingBufferHeight}
    camera.position.z = 2

  const renderer = new Renderer({ gl });
  const canvas = document.createElement('canvas');
  canvas.width = gl.drawingBufferWidth;
  canvas.height = gl.drawingBufferHeight;
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(gl.drawingBufferWidth, gl.drawingBufferHeight);
  renderer.canvas = canvas;

  const geometry = new BoxGeometry( 0.5, 0.5, 0.5 );
  const material = new MeshBasicMaterial({color: 'green'});
  
  const cube = new Mesh(geometry, material)
  scene.add(cube)

    const render = () => {
    requestAnimationFrame(render)
  
    cube.rotation.x += 0.02;
    cube.rotation.y += 0.02;

    renderer.render(scene, camera)
    gl.endFrameEXP()
    }

    render()
  }



  return(
  <View>
    <GLView onContextCreate = {onContextCreate} 
      style={{width: 500, height: 500}}

    />
    </View>
  )
}

export default App