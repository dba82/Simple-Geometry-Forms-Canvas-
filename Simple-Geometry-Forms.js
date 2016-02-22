var poc = require ('../Points on Circles/Points-on-Circles');

function polyline(ctx, points){
  ctx.beginPath();
  ctx.moveTo(points[0][0], points[0][1])
  points.slice(1)
        .forEach(function(point){
          ctx.lineTo(point[0], point[1]);})
};

var line = polyline; //alias

function polygon(ctx, points){
  polyline(ctx, points);
  ctx.closePath();
};

function circle(ctx, center, radius){
  ctx.beginPath();
	ctx.arc(center[0], center[1], radius, 0, 360, false);
};

function pointedCircle(ctx, center, radius){
  ctx.beginPath();
  ctx.moveTo(center[0], center[1]);
  ctx.lineTo(center[0] + radius, center[1])
	ctx.arc(center[0], center[1], radius, 0, 360, false);
};

function ellipse(){};

function square(center, sideLength){
};

function regularPolygon(ctx, center, radius, numberOfVertices, startAngle){
  polygon(ctx, poc.equidistantPoints(numberOfVertices, center[0], center[1], radius, startAngle))
}
