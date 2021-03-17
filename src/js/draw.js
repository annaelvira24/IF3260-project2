var _Pmatrix;
var _Mmatrix; 
 
 var cubeVertices = [
    // Cube

    //back face
   -0.2,-0.2,-0.2, 0.2,-0.2,-0.2, 0.2,-0.18,-0.2, -0.2,-0.18,-0.2,
   -0.2,0.18,-0.2, 0.2,0.18,-0.2, 0.2,0.2,-0.2, -0.2,0.2,-0.2,
   -0.2,-0.2,-0.2, -0.18,-0.2,-0.2, -0.18,0.2,-0.2, -0.2,0.2,-0.2,
   0.18,-0.2,-0.2, 0.2,-0.2,-0.2, 0.2,0.2,-0.2, 0.18,0.2,-0.2,

   //front face
   -0.2,-0.2,0.2, 0.2,-0.2,0.2, 0.2,-0.18,0.2, -0.2,-0.18,0.2,
   -0.2,0.18,0.2, 0.2,0.18,0.2, 0.2,0.2,0.2, -0.2,0.2,0.2,
   -0.2,-0.2,0.2, -0.18,-0.2,0.2, -0.18,0.2,0.2, -0.2,0.2,0.2,
   0.18,-0.2,0.2, 0.2,-0.2,0.2, 0.2,0.2,0.2, 0.18,0.2,0.2,

   //bottom face
   -0.2,-0.2,0.2, -0.18,-0.2,0.2, -0.18,-0.2,-0.2, -0.2,-0.2,-0.2,
   0.18,-0.2,0.2, 0.2,-0.2,0.2, 0.2,-0.2,-0.2, 0.18,-0.2,-0.2,
   -0.2,-0.2,0.2, 0.2,-0.2,0.2, 0.2,-0.2,0.18, -0.2,-0.2,0.18,
   -0.2,-0.2,-0.2, 0.2,-0.2,-0.2, 0.2,-0.2,-0.18, -0.2,-0.2,-0.18,

   //top face
   -0.2,0.2,0.2, -0.18,0.2,0.2, -0.18,0.2,-0.2, -0.2,0.2,-0.2,
   0.18,0.2,0.2, 0.2,0.2,0.2, 0.2,0.2,-0.2, 0.18,0.2,-0.2,
   -0.2,0.2,0.2, 0.2,0.2,0.2, 0.2,0.2,0.18, -0.2,0.2,0.18,
   -0.2,0.2,-0.2, 0.2,0.2,-0.2, 0.2,0.2,-0.18, -0.2,0.2,-0.18,


   //left face
   -0.2,-0.2,0.2, -0.2,-0.2,0.18, -0.2,0.2,0.18, -0.2,0.2,0.2,
   -0.2,-0.2,-0.2, -0.2,-0.2,-0.18, -0.2,0.2,-0.18, -0.2,0.2,-0.2,
   -0.2,-0.2,0.2, -0.2,-0.2,-0.2, -0.2,-0.18,-0.2, -0.2,-0.18,0.2,
   -0.2,0.2,0.2, -0.2,0.18,0.2, -0.2,0.18,-0.2, -0.2,0.2,-0.2,

   //right face
   0.2,-0.2,0.2, 0.2,-0.2,0.18, 0.2,0.2,0.18, 0.2,0.2,0.2,
   0.2,-0.2,-0.2, 0.2,-0.2,-0.18, 0.2,0.2,-0.18, 0.2,0.2,-0.2,
   0.2,-0.2,0.2, 0.2,-0.2,-0.2, 0.2,-0.18,-0.2, 0.2,-0.18,0.2,
   0.2,0.2,0.2, 0.2,0.18,0.2, 0.2,0.18,-0.2, 0.2,0.2,-0.2,
];

for (var i = 0; i < 12*4*6; i++){
   if(i % 3 == 0){
      vertices.push(cubeVertices[i]-0.7);
   }
   else{
      vertices.push(cubeVertices[i]);
   }
}

 var colors = [
    1,0,1, 1,0,1, 1,0,1, 1,0,1,
    1,0,1, 1,0,1, 1,0,1, 1,0,1,
    1,0,1, 1,0,1, 1,0,1, 1,0,1,
    1,0,1, 1,0,1, 1,0,1, 1,0,1,

    1,0,1, 1,0,1, 1,0,1, 1,0,1,
    1,0,1, 1,0,1, 1,0,1, 1,0,1,
    1,0,1, 1,0,1, 1,0,1, 1,0,1,
    1,0,1, 1,0,1, 1,0,1, 1,0,1,

    1,0,1, 1,0,1, 1,0,1, 1,0,1,
    1,0,1, 1,0,1, 1,0,1, 1,0,1,
    1,0,1, 1,0,1, 1,0,1, 1,0,1,
    1,0,1, 1,0,1, 1,0,1, 1,0,1,

    1,0,1, 1,0,1, 1,0,1, 1,0,1,
    1,0,1, 1,0,1, 1,0,1, 1,0,1,
    1,0,1, 1,0,1, 1,0,1, 1,0,1,
    1,0,1, 1,0,1, 1,0,1, 1,0,1,

    1,0,1, 1,0,1, 1,0,1, 1,0,1,
    1,0,1, 1,0,1, 1,0,1, 1,0,1,
    1,0,1, 1,0,1, 1,0,1, 1,0,1,
    1,0,1, 1,0,1, 1,0,1, 1,0,1,

    1,0,1, 1,0,1, 1,0,1, 1,0,1,
    1,0,1, 1,0,1, 1,0,1, 1,0,1,
    1,0,1, 1,0,1, 1,0,1, 1,0,1,
    1,0,1, 1,0,1, 1,0,1, 1,0,1,
 ];

 function setUpBuffer(){
   // Create and store data into vertex buffer
   var vertex_buffer = gl.createBuffer ();
   gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
   gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

   // Create and store data into color buffer
   var color_buffer = gl.createBuffer ();
   gl.bindBuffer(gl.ARRAY_BUFFER, color_buffer);
   gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);

   /*======== Associating attributes to vertex shader =====*/
   _Pmatrix = gl.getUniformLocation(shaderProgram, "Pmatrix");
   _Mmatrix = gl.getUniformLocation(shaderProgram, "Mmatrix");

   gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
   var _position = gl.getAttribLocation(shaderProgram, "position");
   gl.vertexAttribPointer(_position, 3, gl.FLOAT, false,0,0);
   gl.enableVertexAttribArray(_position);

   gl.bindBuffer(gl.ARRAY_BUFFER, color_buffer);
   var _color = gl.getAttribLocation(shaderProgram, "color");
   gl.vertexAttribPointer(_color, 3, gl.FLOAT, false,0,0) ;
   gl.enableVertexAttribArray(_color);
   gl.useProgram(shaderProgram);

   gl.enable(gl.DEPTH_TEST);

   gl.depthFunc(gl.LEQUAL);
  
   gl.clearColor(0, 0, 0, 0);
   gl.clearDepth(1.0);
   gl.viewport(0.0, 0.0, canvas.width, canvas.height);
   gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
 }


//  /*==================== MATRIX ====================== */

//  function get_projection(angle, a, zMin, zMax) {
//     var ang = Math.tan((angle*.5)*Math.PI/180);//angle*.5
//     return [
//        0.5/ang, 0 , 0, 0,
//        0, 0.5*a/ang, 0, 0,
//        0, 0, -(zMax+zMin)/(zMax-zMin), -1,
//        0, 0, (-2*zMax*zMin)/(zMax-zMin), 0 
//        ];
//  }


//  var proj_matrix = get_projection(40, canvas.width/canvas.height, 1, 100);

// draw object
function draw(proj_matrix, model_matrix, start, end){
   gl.uniformMatrix4fv(_Pmatrix, false, proj_matrix);
   gl.uniformMatrix4fv(_Mmatrix, false, model_matrix);

   for (var i = start; i < end; i++){
      gl.drawArrays(gl.TRIANGLE_FAN, i*4, 4);
   }
}

function setUpInitScene(){
   let centerCube = (getCenterPoint(0, 12*4*6, vertices));

   var proj_matrix = [ 1,0,0,0, 0,1,0,0, 0,0,1,0, 0,0,0,1 ];
   var model_matrix = [ 1,0,0,0, 0,1,0,0, 0,0,1,0, 0,0,0,1 ];

   var translate_matrix1 = translation(-centerCube[0], -centerCube[1], 0);
   var translate_matrix2 = translation(centerCube[0], -0, 0);
   var rotate_matrix = multiply(yRotation(0.5),xRotation(0.5));
   var model_matrix = multiply(translate_matrix1, multiply(rotate_matrix, translate_matrix2));

   objects.push({
      "name" : "cube",
      "offset" : 0,
      "end" : 24,
      "numVertices" : 36,
      "vertices" : vertices.slice(0,36*3),
      "color" : colors.slice(0, 36*3),
      "projMatrix" : proj_matrix,
      "modelMatrix" : model_matrix
   });

   console.log(objects);
   for(var i = 0; i<objects.length; i++){
      draw(objects[i].projMatrix, objects[i].modelMatrix, objects[i].offset, objects[i].end);  
   }
}

setUpBuffer();
setUpInitScene();