/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function sinFunction(x) //WORKS
{
    // variables to test
    var functionType = document.getElementById('function').value; //new
    var maxValue = document.getElementById('max').value; //new
    var minValue = document.getElementById('min').value; //new
    var periodValue = document.getElementById('period').value; //new
    let NaNValue = NaN; // turning NaN into a string to be compared with object NaN
    
    // parsing all the varibales to calculate
    let max = parseInt(maxValue);
    let min = parseInt(minValue);
    let period = parseInt(periodValue);

    //Checks if any of the textbox is empty 
    if (Object.is(NaNValue, max)) // check if the "NaN" is NaN
    {
        alert('Input maximum value please');
        this.validate();
        this.repaint();
        return false;
    }
    else if (Object.is(NaNValue, min)) // check if the "NaN" is NaN
    {
        alert('Input minimum value please');
        this.validate();
        this.repaint();
        return false;
    }
    else if (Object.is(NaNValue, period)) // check if the "NaN" is NaN
    {
        alert('Input period value please');
        this.validate();
        this.repaint();
        return false;
    }
    // calculate the parameters 
    var a = max - min;
    var a = a / 2;
    // calculate b
    var b = 360 / period;
    //calculate d
    var d = max + min;
    var d = d / 2;
    
    // Shows the function equation 
    document.getElementById("functionEq").innerHTML = "f(x) = " +a+ "Sin(" +b+ "x) + " +d; 

    //return Math.sin(x);
    return a * Math.sin(b * x) + d;
    this.validate();
    this.repaint();
}
function cosFunction(x) // WORKS
{
    // variables to test
    var functionType = document.getElementById('function').value; //new
    var maxValue = document.getElementById('max').value; //new
    var minValue = document.getElementById('min').value; //new
    var periodValue = document.getElementById('period').value; //new
    let NaNValue = NaN; // turning NaN into a string to be compared with object NaN

    // parsing all the varibales to calculate       
    let max = parseInt(maxValue);
    let min = parseInt(minValue);
    let period = parseInt(periodValue);
    
    //Checks if any of the textbox is empty 
    if (Object.is(NaNValue, max)) // check if the "NaN" is NaN
    {
        alert('Input maximum value please');
        this.validate();
        this.repaint();
        return false;
    }
    else if (Object.is(NaNValue, min)) // check if the "NaN" is NaN
    {
        alert('Input minimum value please');
        this.validate();
        this.repaint();
        return false;
    }
    else if (Object.is(NaNValue, period)) // check if the "NaN" is NaN
    {
        alert('Input period value please');
        this.validate();
        this.repaint();
        return false;
    }
    // calculate the parameters 
    var a = max - min;
    var a = a / 2;
    // calculate b
    var b = 360 / period;
    //calculate d
    var d = max + min;
    var d = d / 2;

    // Shows the function equation 
    document.getElementById("functionEq").innerHTML = "f(x) = " +a+ "Cos(" +b+ "x) + " +d; 

    //return Math.cos(x);
    return a * Math.cos(b * x) + d;
    this.validate();
    this.repaint();
}

function draw(x)
{
    var canvas = document.getElementById("canvas");
    var maxValue = document.getElementById('max').value; //new
    var minValue = document.getElementById('min').value; //new
    var periodValue = document.getElementById('period').value; //new
    let period = parseInt(periodValue);

    if (null == canvas || !canvas.getContext)
        return;

    var axes = {}, ctx = canvas.getContext("2d");
    axes.x0 = 0.5 + 0.5 * canvas.width;  // x0 pixels from left to x=0
    axes.y0 = 0.5 + 0.5 * canvas.height; // y0 pixels from top to y=0
    axes.scale = period;                 // 40 pixels from x=0 to x=1
    axes.doNegativeX = true;

    showAxes(ctx, axes);
    if (x == "Sin")
    {
        funGraph(ctx, axes, sinFunction, "rgb(11,153,11)", 1); //cals the sinFunction
        
    } else if (x == "Cos")
    {
        funGraph(ctx, axes, cosFunction, "rgb(66,44,255)", 1); //calls the cosFunction
    }
    this.validate();
    this.repaint();
}

function funGraph(ctx, axes, func, color, thick)
{
    var maxValue = document.getElementById('max').value; //new
    var minValue = document.getElementById('min').value; //new
    let max = parseInt(maxValue);
    let min = parseInt(minValue);

    var xx, yy, dx = 10, x0 = axes.x0, y0 = axes.y0, scale = axes.scale;
    var iMax = Math.round((ctx.canvas.width - x0) / dx);
    var iMin = axes.doNegativeX ? Math.round(-x0 / dx) : 0;
    ctx.beginPath();
    ctx.lineWidth = thick;
    ctx.strokeStyle = color;

    for (var i = iMin; i <= iMax; i++) {
        xx = dx * i;
        yy = scale * func(xx / scale);
        if (i == iMin)
            ctx.moveTo(x0 + xx, y0 - yy);
        else
            ctx.lineTo(x0 + xx, y0 - yy);
    }
    ctx.stroke();
}

function showAxes(ctx, axes) {
    var x0 = axes.x0, w = ctx.canvas.width;
    var y0 = axes.y0, h = ctx.canvas.height;
    var xmin = axes.doNegativeX ? 0 : x0;
    ctx.beginPath();
    ctx.strokeStyle = "rgb(128,128,128)";
    ctx.moveTo(xmin, y0);
    ctx.lineTo(w, y0);  // X axis
    ctx.moveTo(x0, 0);
    ctx.lineTo(x0, h);  // Y axis
    ctx.stroke();
}



