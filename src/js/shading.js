function shading(modelMatrix, viewMatrix){
    var temp = multiply(viewMatrix, modelMatrix);
    var mvMatrix = [];
    var normalMatrix = [];

    for (var i = 0; i<4; i=i*4){
        mvMatrix.push([temp[i], temp[i+1], temp[i+2], temp[i+3]]);
    }

    normalMatrix = invert(mvMatrix);

    normalMatrix = transpose(normalMatrix);

    gl.uniformMatrix4fv(_Nmatrix, false, normalMatrix);

    for(var i = 0; i<objects.length; i++){
        draw(objects[i].projMatrix, objects[i].modelMatrix, objects[i].offset, objects[i].end);  
    }
}