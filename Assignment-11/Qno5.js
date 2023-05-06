// 5. Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes.   


class Cylinder {
    constructor(radius, height) {
      this.radius = radius;
      this.height = height;
    }
  
    getVolume() {
      const pi = 3.14159265358979323846;
      const volume = pi * Math.pow(this.radius, 2) * this.height;
      return volume.toFixed(4);
    }
  }
  
  const cylinder = new Cylinder(3, 5);
  console.log(`The volume of the cylinder is ${cylinder.getVolume()}`);
  


 