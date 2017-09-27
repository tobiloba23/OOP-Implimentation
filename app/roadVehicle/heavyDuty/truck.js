'use strict';
import heavyD from '../heavyDuty.js'

class truck extends heavyD {  
    constructor(accl,
        manufacturer = "",
        country = "") {
            super();
            //unique properties
            this.accl = (!isNaN(accl))? accl : 0;
            console.log(typeof(manufacturer));
            this.manufacturer = (typeof(manufacturer)!==undefined)? manufacturer.toString() : "";
            this.country = (typeof(country)!==undefined)? country.toString() : "";
    }

    //Generic Properties
    getName() {
        return "A truck";
    }

    getNumWheels() {
        return super.getNumWheels();
    }

    getMajorUse() {
        return "1.) trasportation of large properties accross long distance";
    }

    getPreferredTerrain() {
        return "1.) Motor-way";
    }

    getMaxSpeed() {
        return super.getMaxSpeed();
    }
    
    getPoweredBy() {
        return "Diesel";
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

export default truck;