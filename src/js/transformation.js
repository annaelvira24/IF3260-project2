function updateTranslate(axis, value){
    selectedObject = document.getElementById('objectlist').value;

    let selectedObjectIdx = getSelectedObjectIdx(selectedObject);

    if(axis == 'x'){
        var model_matrix = translation(value, 0, 0);  
    }
    else{
        var model_matrix = translation(0, value, 0);
    }

    let currentModelMatrix = objects[selectedObjectIdx].modelMatrix;
    objects[selectedObjectIdx].modelMatrix = multiply(currentModelMatrix, model_matrix);

    for(var i = 0; i<objects.length; i++){
        draw(objects[i].projMatrix, objects[i].modelMatrix, objects[i].offset, objects[i].end);  
    }
    
}

function updateScale(){
    let value = document.getElementById('scale').value;
    selectedObject = document.getElementById('objectlist').value;
    let selectedObjectIdx = getSelectedObjectIdx(selectedObject);
    
    let centerPoint = getCenterPoint(objects[selectedObjectIdx].offset, objects[selectedObjectIdx].offset + objects[selectedObjectIdx].numVertices*3,vertices);
    var translate_matrix1 = translation(-centerPoint[0], -centerPoint[1], 0);
    var translate_matrix2 = translation(centerPoint[0], -0, 0);
    var scale_matrix = scale(value, value, value);
    var model_matrix = multiply(translate_matrix1, multiply(scale_matrix, translate_matrix2));

    let currentModelMatrix = objects[selectedObjectIdx].modelMatrix;
    objects[selectedObjectIdx].modelMatrix = multiply(model_matrix, currentModelMatrix);

    for(var i = 0; i<objects.length; i++){
        draw(objects[i].projMatrix, objects[i].modelMatrix, objects[i].offset, objects[i].end);  
    }
}

function updateRotate(axis, value){
    selectedObject = document.getElementById('objectlist').value;
    let selectedObjectIdx = getSelectedObjectIdx(selectedObject);

    let rotateValue = 0;
    
    let centerPoint = getCenterPoint(objects[selectedObjectIdx].offset*12, objects[selectedObjectIdx].offset*12 + objects[selectedObjectIdx].numVertices*3,vertices);
    var translate_matrix1 = translation(-centerPoint[0], -centerPoint[1], 0);
    var translate_matrix2 = translation(centerPoint[0], -0, 0);
    var model_matrix;
    
    if(axis == 'x'){
        rotateValue = value - oldValueRotX;
        var model_matrix = multiply(translate_matrix1, multiply(xRotation(rotateValue), translate_matrix2));
        oldValueRotX = value;
    }
    
    else if(axis == 'y'){
        rotateValue = value - oldValueRotY;
        var model_matrix = multiply(translate_matrix1, multiply(yRotation(rotateValue), translate_matrix2));
        oldValueRotY = value;
    }
    else{
        rotateValue = value - oldValueRotZ;
        var model_matrix = multiply(translate_matrix1, multiply(zRotation(rotateValue), translate_matrix2));
        oldValueRotZ = value;
    }

    let currentModelMatrix = objects[selectedObjectIdx].modelMatrix;
    objects[selectedObjectIdx].modelMatrix = multiply(model_matrix, currentModelMatrix);

    for(var i = 0; i<objects.length; i++){
        draw(objects[i].projMatrix, objects[i].modelMatrix, objects[i].offset, objects[i].end);  
    }

}