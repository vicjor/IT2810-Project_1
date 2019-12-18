$(document).ready(function() {
    //SVG
    $("#myRect").click(function() {
        handleClick1(event);
        // Changes the color of the rectangle
    })
    $("#myRect").mouseover(function() {
        $("#myRect").width("300");
        $("#myRect").height("200");
        // Changes the rect width to 400 on mouseover
    })
    $("#myCirc").mouseover(function() {
        // Changes the color of the circle, and speeds up the animation
        handleClick2(event);
    })
    $("#mySquare").click(function() {
        // Clicking the square creates a dropshadow
        handleClick3(event);
    })

    $("#myEllipse").mouseover(function() {
        // Clicking the ellipse changes placement
        handleClick4(event);
    })
    $("#bigCirc").click(function() {
        handleClick6(event);
    })
    //Canvas
    $("#myCanvas").click(function() {
        // Clicking the canvas adds a triangle to the top of the square
        handleClick5(event);
        drawCanvas(null);
    })
    drawCanvas(null);
    $("#myCanvas").mouseover(function() {
        drawCanvas('#909986');
    })
    $("#myCanvas").mouseout(function() {
        drawCanvas();
    })
    // Show/hide documentation
    $("#myButton").click(function() {
        $(".documentation").slideToggle();
        $("#myButton").text(function(i, text){
            return (text === 'Show documentation') ? 'Hide documentation' : 'Show documentation';
        })
    })

})



var colorChange = false;
var colors = ["url(#grad1)", "url(#grad2)", "url(#grad3)", "url(#grad4)", "url(#grad5)"];

// Function handleClick1() handles click to the rectangle, and changes it color randomly to one of the colors in the list "colors".
// It also resets the rectangle size to width=200
function handleClick1(event) {
    let randomNumber = Math.floor(Math.random() * Math.floor(colors.length));
    if (colorChange) {
        document.getElementById("myRect").style.fill=colors[randomNumber];
        colorChange = !colorChange;
        document.getElementById("myRect").style.width = "200";
        document.getElementById("myRect").style.height = "150";

    }
    else if (!colorChange) {
        document.getElementById("myRect").style.fill=colors[randomNumber];
        colorChange = !colorChange;
        document.getElementById("myRect").style.width = "200";
    }

}

var time = 5;
function handleClick2(event) {
    let randomNumber = Math.floor(Math.random() * Math.floor(colors.length));
    document.getElementById("myCirc").style.fill=colors[randomNumber];
    document.getElementById(event.target.id).style.animationDuration = time  + "s";
    decrementTime();
}

function decrementTime() {
    time = time/2;
}

function handleClick3(event) {
    if (document.getElementById(event.target.id).style.filter === "") {
        document.getElementById(event.target.id).style.filter = "url(#f1)";
    }
    else {
        document.getElementById(event.target.id).style.filter = "";
    }
}




function handleClick4(event) {
    if (event.target.getAttribute('cx') == 800 && event.target.getAttribute('cy')==600) {
        event.taget.setAttribute('stroke', " ")
    }
    else {

        let xCoord = [600, 400, 200, 100, 800];
        let xRand = Math.floor(Math.random() * Math.floor(xCoord.length));
        let yRand = Math.floor(Math.random() * Math.floor(xCoord.length));
        document.getElementById(event.target.id).setAttribute("cx", xCoord[xRand]);
        document.getElementById(event.target.id).setAttribute("cy", xCoord[yRand]);
    }
    console.log(event.target.getAttribute('cx', 'cy'))

}

var click = 0;
function handleClick5(event) {
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');
    if (click==0) {
        ctx.beginPath();
        ctx.moveTo(150, 20);
        ctx.lineTo(100, 50);
        ctx.lineTo(200, 50);
        ctx.lineTo(150, 20);
        ctx.closePath();
        ctx.fillStyle = "#8c5656";
        ctx.fill();
        click += 1;
    }
    else if (click==1) {
        ctx.beginPath();
        ctx.moveTo(100, 100);
        ctx.lineTo(100, 100);
        ctx.lineTo(200, 100);
        ctx.lineTo(150, 130);
        ctx.closePath();
        ctx.fillStyle = "#8c5656";
        ctx.fill();
        click += 1;

    }
    else if (click==2) {
        ctx.beginPath();
        ctx.moveTo(100, 50);
        ctx.lineTo(50, 75);
        ctx.lineTo(100, 100);
        ctx.lineTo(100, 50);
        ctx.closePath();
        ctx.fillStyle = "#8c5656";
        ctx.fill();
        click += 1;
    }
    else if (click==3) {
        ctx.beginPath();
        ctx.moveTo(200, 50);
        ctx.lineTo(250, 75);
        ctx.lineTo(200, 100);
        ctx.lineTo(200, 50);
        ctx.closePath();
        ctx.fillStyle = "#8c5656";
        ctx.fill();
        click += 1;
    }

    else {
        click=0;
        const canvas = document.getElementById('myCanvas');
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0,0, canvas.width, canvas.height);
    }

}


function handleClick6(event) {
    event.target.setAttribute('r', event.target.getAttribute('r') * 2);
    if (event.target.getAttribute('r') > 1500) {
        event.target.setAttribute('fill', '#909986');
        if (event.target.getAttribute('r') >= 3000) {
            event.target.setAttribute('fill', 'white');
            event.target.setAttribute('r', 10);
        }
    }

}

function drawCanvas(color) {
    if (color==null) {
        const canvas = document.getElementById('myCanvas');
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = '#8c5656';
        ctx.fillRect(100, 50, 100, 50);
    }
    else {
        const canvas = document.getElementById('myCanvas');
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = color;
        ctx.fillRect(100, 50, 100, 50);
    }

}
