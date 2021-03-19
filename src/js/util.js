function getCenterPoint(start, end, arr){
    let maxX = -1;
    let minX = 1;
    let maxY = -1;
    let minY = 1;

    for (var i = start; i < end; i+=3){
        if(maxX < arr[i]){
            maxX = arr[i];
        }

        if(minX > arr[i]){
            minX = arr[i];
        }

        if(maxY < arr[i+1]){
            maxY = arr[i+1];
        }

        if(minY > arr[i+1]){
            minY = arr[i+1];
        }
    }

    let centerX = (maxX + minX)/2;
    let centerY = (maxY + minY)/2;
    console.log(centerX, centerY)
    return ([centerX, centerY])
}

function resetValue(){
    document.getElementById('scale').value = 1;
    document.getElementById('rotateX').value = 0;
    document.getElementById('rotateY').value = 0;
    document.getElementById('rotateZ').value = 0;

    oldValueRotX = 0;
    oldValueRotY = 0;
    oldValueRotZ = 0;

}

function getSelectedObjectIdx(selectedObject){
    for (var i = 0; i <objects.length; i++){
        if(objects[i].name == selectedObject){
            selectedObjectIdx = i;
            break;
        }
    }

    return selectedObjectIdx;
}


function getMousePosition(canvas, event) { 
    let temp = [];
    let rect = canvas.getBoundingClientRect(); 
    let x = ((event.clientX - rect.left)/(canvas.width))*2-1; 
    let y = -((event.clientY - rect.top)/(canvas.height))*2+1; 
    console.log(x, y);
    temp.push(x);
    temp.push(y)
    return(temp);
} 

var canvasElem = document.querySelector("#glcanvas"); 
canvasElem.addEventListener('mousedown', (e) => 
{ 
    vec = getMousePosition(canvasElem, e);
});
