function updateTranslate(axis, value){
    selectedObject = document.getElementById('objectlist').value;
    console.log(selectedObject);
    console.log(value);

    for (var i = 0; i <objects.length; i++){
        if(objects[i].name == selectedObject){
            selectedObjectIdx = i;
            break;
        }
    }
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