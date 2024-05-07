'use strict';

// Global variables that are set and used
// across the application
let gl;

// The programs
let perVertexProgram;
let perFragmentProgram;

// what is currently showing
let nowShowing = 'Vertex';
let program = null;

//#region Mila
let milaHead = null;
let milaNose = null;
let milaMuzzle = null;
let milaBody = null;
let milaEar = null;

let leaf = null;
//#endregion

function radians(angle) {
    return angle * (Math.PI / 180);
};

//
// Creates a VAO for a given object and return it.
//
// shape is the object to be bound
// program is the program (vertex/fragment shaders) to use in this VAO
//
//
// Note that the program object has member variables that store the
// location of attributes and uniforms in the shaders.  See the function
// initProgram for details.
//
// You can see the definition of the shaders themselves in the
// HTML file assn6-shading.html.   Though there are 2 sets of shaders
// defined (one for per-vertex shading and one for per-fragment shading,
// each set does have the same list of attributes and uniforms that
// need to be set
//
function bindVAO(shape, program) {
    //create and bind VAO
    gl.useProgram(program);
    let theVAO = gl.createVertexArray();
    gl.bindVertexArray(theVAO);

    // create and bind vertex buffer
    let myVertexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, myVertexBuffer);
    gl.bufferData(
        gl.ARRAY_BUFFER,
        new Float32Array(shape.points),
        gl.STATIC_DRAW
    );
    gl.enableVertexAttribArray(program.aVertexPosition);
    gl.vertexAttribPointer(program.aVertexPosition, 3, gl.FLOAT, false, 0, 0);

    // create and bind normal buffer
    let myNormalBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, myNormalBuffer);
    gl.bufferData(
        gl.ARRAY_BUFFER,
        new Float32Array(shape.normals),
        gl.STATIC_DRAW
    );
    gl.enableVertexAttribArray(program.aNormal);
    gl.vertexAttribPointer(program.aNormal, 3, gl.FLOAT, false, 0, 0);

    // Setting up the IBO
    let myIndexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, myIndexBuffer);
    gl.bufferData(
        gl.ELEMENT_ARRAY_BUFFER,
        new Uint16Array(shape.indices),
        gl.STATIC_DRAW
    );

    // Clean
    gl.bindVertexArray(null);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);

    return theVAO;
}

//
// In this function, you must set up all of the uniform variables
// in the shaders required for the implememtation of the Phong
// Illumination model.
//
// Check out the source of the vertex shader in the HTML file
// assn6-shading.html taking note of the types of each of the
// uniforms.
//
// Note that the program object has member variables that store the
// location of attributes and uniforms in the shaders.  See the function
// initProgram for details.
//
//
//  You should also set up your Model transform here.

function setUpPhong(program) {
    // Recall that you must set the program to be current using
    // the gl useProgram function
    gl.useProgram(program);

    gl.uniform3fv(
        program.ambientLight,
        glMatrix.vec3.fromValues(0.6, 0.7, 0.8)
    );
    gl.uniform3fv(program.lightPosition, glMatrix.vec3.fromValues(2, 20, 1));
    gl.uniform3fv(program.lightColor, glMatrix.vec3.fromValues(0.8, 0.2, 0));
    gl.uniform3fv(program.baseColor, glMatrix.vec3.fromValues(0.8, 0, 0.2));
    gl.uniform3fv(
        program.specHighlightColor,
        glMatrix.vec3.fromValues(0.7, 0.8, 0.2)
    );

    gl.uniform1f(program.ka, 0.8);
    gl.uniform1f(program.kd, 0.2);
    gl.uniform1f(program.ks, 0.9);
    gl.uniform1f(program.ke, 0.9);

    let modelMatrix = glMatrix.mat4.create();
    gl.uniformMatrix4fv(program.uModelT, false, modelMatrix);
}

//
// set up the view and projections transformations and
// send to the program (shaders) as uniforms.
//
// Note that the program object has member variables that store the
// location of attributes and uniforms in the shaders.  See the function
// initProgram for details.
//
function setUpCamera(program) {
    // Recall you must set the program to be current using the gl
    // function useProgram.
    gl.useProgram(program);
    // set up your projection
    let projMatrix = glMatrix.mat4.create();
    glMatrix.mat4.perspective(projMatrix, radians(70), -1, 1.0, 300.0);

    gl.uniformMatrix4fv(program.uProjT, false, projMatrix);

    // set up your view
    let viewMatrix = glMatrix.mat4.create();
    glMatrix.mat4.lookAt(viewMatrix, [0, 2, -5.2], [0, 0, 0], [0, 1, 0]);
    gl.uniformMatrix4fv(program.uViewT, false, viewMatrix);
}

///////////////////////////////////////////////////////////////////
//
//  No need to edit below this line.
//
////////////////////////////////////////////////////////////////////

// general call to make and bind a new object based on current
// settings..Basically a call to shape specfic calls in cgIshape.js
function createShapes() {
    //Head area
    milaHead = new Sphere(20, 20);
    milaHead.VAO = bindVAO(milaHead, program);
    milaMuzzle = new Sphere(10, 10);
    milaMuzzle.VAO = bindVAO(milaMuzzle, program);
    milaNose = new Sphere(10, 10);
    milaNose.VAO = bindVAO(milaNose, program);
    milaEar = new Sphere(3, 3);
    milaEar.VAO = bindVAO(milaEar, program);

    //Body
    milaBody = new Cube(6);
    milaBody.VAO = bindVAO(milaBody, program);

    //leaf
    leaf = new Sphere(20, 20);
    leaf.VAO = bindVAO(leaf, program);
}

function drawShapes() {
    drawShape(milaHead, [-0.8, -1, 0], [3, 3, 3]);
    drawShape(milaMuzzle, [0.1, -0.6, -1], [1.3, 1.3, 1.3]);
    drawShape(milaBody, [-6, -5, 3], [5, 5, 5]);
    drawShape(milaMuzzle, [.4, -0.5, -1], [.6, .6, .6]);
    drawShape(leaf, [-.6,1.9,.5], [3,3,3]);
}

function drawShape(object){
    //Body
    milaBody = new Cube(6);
    milaBody.VAO = bindVAO(milaBody, program);

    //leaf
    leaf = new Sphere(20, 20);
    leaf.VAO = bindVAO(leaf, program);
}

function drawShapes() {
    drawShape(milaHead, [-0.8, -1, 0], [3, 3, 3]);
    drawShape(milaMuzzle, [0.1, -0.6, -1], [1.3, 1.3, 1.3]);
    drawShape(milaBody, [-6, -5, 3], [5, 5, 5]);
    drawShape(milaMuzzle, [.4, -0.5, -1], [.6, .6, .6]);
    drawShape(leaf, [-.6,1.9,.5], [3,3,3]);
    drawShape(milaEar, [-1.5,0,-1], [1,2,1], [40,1,1])
}

function drawShape(
    object,
    translate = [0, 0, 0],
    scale = [1, 1, 1],
    rotation = [1,1,1]
) {
    let matrix = glMatrix.mat4.create();
    translate = glMatrix.vec3.fromValues(...translate);
    scale = glMatrix.vec3.fromValues(...scale);
    glMatrix.mat4.translate(matrix, matrix, translate);
    glMatrix.mat4.scale(matrix, matrix, scale);
    // glMatrix.mat4.rotateX(rotation[0])
    glMatrix.mat4.rotateX(matrix, matrix, radians(rotation[0]))
    glMatrix.mat4.rotateY(matrix, matrix, radians(rotation[1]))
    glMatrix.mat4.rotateZ(matrix, matrix, radians(rotation[2]))
    // glMatrix.mat4.rotateZ(rotation[2])
    gl.uniformMatrix4fv(program.uModelT, false, matrix);
    gl.bindVertexArray(object.VAO);
    gl.drawElements(gl.TRIANGLES, object.indices.length, gl.UNSIGNED_SHORT, 0);
}

// Given an id, extract the content's of a shader script
// from the DOM and return the compiled shader
function getShader(id) {
    const script = document.getElementById(id);
    const shaderString = script.text.trim();

    // Assign shader depending on the type of shader
    let shader;
    if (script.type === 'x-shader/x-vertex') {
        shader = gl.createShader(gl.VERTEX_SHADER);
    } else if (script.type === 'x-shader/x-fragment') {
        shader = gl.createShader(gl.FRAGMENT_SHADER);
    } else {
        return null;
    }

    // Compile the shader using the supplied shader code
    gl.shaderSource(shader, shaderString);
    gl.compileShader(shader);

    // Ensure the shader is valid
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error(
            'Compiling shader ' + id + ' ' + gl.getShaderInfoLog(shader)
        );
        return null;
    }

    return shader;
}

// Create a program with the appropriate vertex and fragment shaders
function initProgram(vertexid, fragmentid) {
    // set up the per-vertex program
    const vertexShader = getShader(vertexid);
    const fragmentShader = getShader(fragmentid);

    // Create a program
    program = gl.createProgram();
    gl.useProgram(program);
    // Attach the shaders to this program
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        console.error('Could not initialize shaders');
    }

    // Use this program instance
    gl.useProgram(program);
    // We attach the location of these shader values to the program instance
    // for easy access later in the code
    program.aVertexPosition = gl.getAttribLocation(program, 'aVertexPosition');
    program.aNormal = gl.getAttribLocation(program, 'aNormal');

    // uniforms
    program.uModelT = gl.getUniformLocation(program, 'modelT');
    program.uViewT = gl.getUniformLocation(program, 'viewT');
    program.uProjT = gl.getUniformLocation(program, 'projT');
    program.ambientLight = gl.getUniformLocation(program, 'ambientLight');
    program.lightPosition = gl.getUniformLocation(program, 'lightPosition');
    program.lightColor = gl.getUniformLocation(program, 'lightColor');
    program.baseColor = gl.getUniformLocation(program, 'baseColor');
    program.specHighlightColor = gl.getUniformLocation(
        program,
        'specHighlightColor'
    );
    program.ka = gl.getUniformLocation(program, 'ka');
    program.kd = gl.getUniformLocation(program, 'kd');
    program.ks = gl.getUniformLocation(program, 'ks');
    program.ke = gl.getUniformLocation(program, 'ke');

    return program;
}

// We call draw to render to our canvas
function draw() {
    // Clear the scene
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

    drawShapes();
    // Clean
    gl.bindVertexArray(null);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
}

// Entry point to our application
function init() {
    // Retrieve the canvas
    const canvas = document.getElementById('webgl-canvas');
    if (!canvas) {
        console.error(
            `There is no canvas with id ${'webgl-canvas'} on this page.`
        );
        return null;
    }

    // deal with keypress
    window.addEventListener('keydown', gotKey, false);

    // Retrieve a WebGL context
    gl = canvas.getContext('webgl2');
    if (!gl) {
        console.error(`There is no WebGL 2.0 context`);
        return null;
    }

    // Set the clear color to be black
    gl.clearColor(0, 0, 0, 1);

    // some GL initialization
    gl.enable(gl.DEPTH_TEST);
    gl.enable(gl.CULL_FACE);

    gl.cullFace(gl.BACK);
    gl.frontFace(gl.CCW);
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.depthFunc(gl.LEQUAL);
    gl.clearDepth(1.0);

    // Read, compile, and link your shaders
    perVertexProgram = initProgram('phong-per-vertex-V', 'phong-per-vertex-F');
    perFragmentProgram = initProgram(
        'phong-per-fragment-V',
        'phong-per-fragment-F'
    );

    // create and bind your current object
    createShapes();

    // set up your camera
    setUpCamera(perVertexProgram);
    setUpCamera(perFragmentProgram);

    // set up Phong parameters
    setUpPhong(perVertexProgram);
    setUpPhong(perFragmentProgram);

    // do a draw
    draw();
}
