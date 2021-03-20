 function get_projection(angle, a, zMin, zMax) {
    var ang = Math.tan((angle*.5)*Math.PI/180);//angle*.5
    return [
       0.5/ang, 0 , 0, 0,
       0, 0.5*a/ang, 0, 0,
       0, 0, -(zMax+zMin)/(zMax-zMin), -1,
       0, 0, (-2*zMax*zMin)/(zMax-zMin), 0 
       ];
 }

function toPerspective(){
     var proj_matrix = get_projection(10, canvas.width/canvas.height, 1, 100);

     for(var i = 0; i<objects.length; i++){
        objects[i].projMatrix = proj_matrix;
        draw(objects[i].projMatrix, objects[i].modelMatrix, objects[i].offset, objects[i].end);  
    }
}

function toOrtho(){
    var proj_matrix = [ 1,0,0,0, 0,1,0,0, 0,0,0,0, 0,0,0,1 ];

    for(var i = 0; i<objects.length; i++){
       objects[i].projMatrix = proj_matrix;
       draw(objects[i].projMatrix, objects[i].modelMatrix, objects[i].offset, objects[i].end);  
   }
}