function updateTranslate(axis, value){
    selectedObject = document.getElementById('objectlist').value;

    let selectedObjectIdx = getSelectedObjectIdx(selectedObject);

    if(axis == 'x'){
        var model_matrix = translation(value-oldValueX, 0, 0);  
        oldValueX = value;
    }
    else{
        var model_matrix = translation(0, value-oldValueY, 0);
        oldValueY = value;
    }

    let currentModelMatrix = objects[selectedObjectIdx].modelMatrix;
    objects[selectedObjectIdx].modelMatrix = multiply(model_matrix, currentModelMatrix);

    for(var i = 0; i<objects.length; i++){
        draw(objects[i].projMatrix, objects[i].modelMatrix, objects[i].offset, objects[i].end);  
    }
    
}

function updateScale(value){
    selectedObject = document.getElementById('objectlist').value;
    let selectedObjectIdx = getSelectedObjectIdx(selectedObject);
    
    let scaleValue = value/oldValueScale;
    var model_matrix = scale(scaleValue, scaleValue, scaleValue);
    let currentModelMatrix = objects[selectedObjectIdx].modelMatrix;
    objects[selectedObjectIdx].modelMatrix = multiply(model_matrix, currentModelMatrix);

    for(var i = 0; i<objects.length; i++){
        draw(objects[i].projMatrix, objects[i].modelMatrix, objects[i].offset, objects[i].end);  
    }

    oldValueScale = value;
}

function updateRotate(value){
    selectedObject = document.getElementById('objectlist').value;
    let selectedObjectIdx = getSelectedObjectIdx(selectedObject);

    let rotateValue = value - oldValueRotate;
    console.log(rotateValue);
    var model_matrix = xRotation(rotateValue);

    let currentModelMatrix = objects[selectedObjectIdx].modelMatrix;
    objects[selectedObjectIdx].modelMatrix = multiply(model_matrix, currentModelMatrix);

    for(var i = 0; i<objects.length; i++){
        draw(objects[i].projMatrix, objects[i].modelMatrix, objects[i].offset, objects[i].end);  
    }

    oldValueRotate = value;
}