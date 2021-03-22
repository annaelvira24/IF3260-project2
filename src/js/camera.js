function updateView() {
    let value = document.getElementById('angle').value;
    let radius = 90 - document.getElementById('radius').value;
    let angle = degToRad(value);

    var proj = getProjection(radius, canvas.width/canvas.height, 1, 10000);

    console.log(angle);
    var cameraMatrix = yRotation(angle);
    cameraMatrix = multiply(cameraMatrix, translation(0, 0, 1));
    var viewMatrix = inverse(cameraMatrix);
    var viewProjMatrix = multiply(proj, viewMatrix);

    for(var i = 0; i<objects.length; i++){
        objects[i].projMatrix = viewProjMatrix;
        draw(objects[i].projMatrix, objects[i].modelMatrix, objects[i].offset, objects[i].end);  
     }
}