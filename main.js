window.onload = rotate;

let theSkills = 0;
let skillImages = new Array("./css_logo.jpg","./express_logo.jpg","./git_logo.jpg", "./html_logo.jpg", "./javascript_logo.jpg", "./node_js_logo.jpg");

function rotate() {
     theSkills++;
     if (theSkills == skillImages.length) {
        theSkills = 0;
     }
     document.getElementById("skills").src = skillImages[theSkills];

     setTimeout(rotate, 3 * 1000);
}