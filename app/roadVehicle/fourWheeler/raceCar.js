'use strict';
import fWhlr from '../fourWheeler.js'

class raceCar extends fWhlr {  
    constructor(accl,
        manufacturer = "",
        country = "") {
            super();
            //unique properties
            this.accl = (!isNaN(accl))? accl : 0;
            this.manufacturer = (typeof(manufacturer)==='undefined')? manufacturer.toString() : "";
            this.country = (typeof(country)==='undefined')? country.toString() : "";
    }

    //Generic Properties
    getName() {
        return "A race car";
    }

    getNumWheels() {
        return super.getNumWheels();
    }

    getMajorUse() {
        return "1.) sports racing 2.) luxury travel";
    }

    getPreferredTerrain() {
        return "Perfectly paved roads";
    }

    getMaxSpeed() {
        return 700;
    }
    
    getPoweredBy() {
        return "Performance fuel";
    }

    descriptionFunc() {
        return this.getName() +
                "\nMajor use of vehicle: " + this.getMajorUse() +
                "\nPowered by: " + this.getPoweredBy() +
                "\nWith a maximum speed of: " + this.getMaxSpeed().toString() + "km/hr" +
                "\nAccelerates from 0-60km/hr in: " + this.accl.toString() + "seconds" +
                "\nNumber of wheels: " + this.getNumWheels().toString() +
                "\nPreferred terrain of use: " + this.getPreferredTerrain() +
                "\nManufactured by: " + this.manufacturer.toString() +
                "\nIn: " + this.country.toString() +
                "\n." + "\n.";
    }
  
}

export default raceCar;