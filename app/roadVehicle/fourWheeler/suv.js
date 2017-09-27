'use strict';
import fWhlr from '../fourWheeler.js'

class suv extends fWhlr {  
    constructor(poweredBy,
        accl,
        manufacturer = "",
        country = "") {
            super();
            //unique properties
            this.poweredBy = poweredBy.toString();
            this.accl = (!isNaN(accl))? accl : 0;
            this.manufacturer = (typeof(manufacturer)==='undefined')? manufacturer.toString() : "";
            this.country = (typeof(country)==='undefined')? country.toString() : "";
    }

    //Generic Properties
    getName() {
        return "An SUV";
    }

    getNumWheels() {
        return super.getNumWheels();
    }

    getMajorUse() {
        return "1.) sports utility 2.) luxury travel 3.) winter travel";
    }

    getPreferredTerrain() {
        return "1.) off-road 2.) Free-way";
    }

    getMaxSpeed() {
        return 450;
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

export default suv;