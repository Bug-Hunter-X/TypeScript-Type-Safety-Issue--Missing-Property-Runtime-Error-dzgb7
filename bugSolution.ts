function printCoord(pt: { x?: number; y?: number }) {
  if (pt.x !== undefined && pt.y !== undefined) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
  } else {
    console.log("Incomplete coordinate data received.");
  }
}

printCoord({ x: 3, y: 7 });
printCoord({});
printCoord({ x: 5 });