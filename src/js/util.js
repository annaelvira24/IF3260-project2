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
    console.log(arr[end-1]);
    return ([centerX, centerY])
}

function resetValue(){
    document.getElementById('scale').value = 0;
    document.getElementById('rotate').value = 0;
    document.getElementById('transX').value = 0;
    document.getElementById('transY').value = 0;
    oldValueX = 0;
    oldValueY = 0;
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
