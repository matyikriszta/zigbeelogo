$.fn.zigbee = function() {
  var canvas = document.createElement('canvas'),
			logo = $(this)[0],
			ctx = canvas.getContext('2d');
	
	// create canvas	
	logo.appendChild(canvas);
	
	// fit canvas to parent
	canvas.style.width='100%';
	canvas.style.height='100%';

	// make canvas hiDPI
	canvas.width  = canvas.offsetWidth * 2;
	canvas.height = canvas.offsetHeight * 2;

	// calculate offsets in case parent is not of size nxn
	if(canvas.width > canvas.height) {
	 	offsetW = (canvas.width - canvas.height);
	 	offsetH = 0;
	 	cWidth = canvas.width-offsetW;
	 	cHeight = canvas.height;	 	
	} else if (canvas.width < canvas.height) {
	 	offsetH = (canvas.height - canvas.width);
	 	offsetW = 0;
	 	cWidth = canvas.width;
	 	cHeight = canvas.height-offsetH;
	} else {
	 	offsetH = 0;
	 	offsetW = 0;
	 	cWidth = canvas.width;
	 	cHeight = canvas.height;
	}

	// calculate width, height, logo elements, margins and offsets.
	var width = cWidth*0.52,
	    height = cHeight*0.43,
	    diameter = 0,
	    marginLR = 0.24*cWidth,
	    marginT = 0.28*cHeight,
	    marginB = 0.29*cHeight,
	    heightRow1 = 0.2093023255814*height,
	    heightRow2 = 0.13953488372093*height,
	    heightRow3 = 0.30232558139535*height,
	    circleDiameter = (width/2)*0.25,
		offsetLeft = (offsetW/2) + (width*0.125) + circleDiameter + marginLR,
	    offsetRight =  (offsetW/2) + (width*0.625) + circleDiameter + marginLR;

	// draw logo
	ctx.beginPath();
	ctx.arc(offsetLeft, circleDiameter + marginT, circleDiameter, 0, 2*Math.PI);
	ctx.arc(offsetRight, circleDiameter + marginT, circleDiameter, 0, 2*Math.PI);
	ctx.rect((offsetW/2) + marginLR, heightRow3 + heightRow2 + marginT, width, heightRow1);
	ctx.rect((offsetW/2) + marginLR, heightRow3 + heightRow1 + heightRow2*2 + marginT, width, heightRow1);
	ctx.closePath();
	ctx.fill();

	return this;
}
