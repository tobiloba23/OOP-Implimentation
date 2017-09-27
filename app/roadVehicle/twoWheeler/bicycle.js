'use strict';
import tWhlr from '../twoWheeler.js'

class bicycle extends tWhlr {  
    constructor(
        manufacturer = "",
        country = "") {
            super();
            //unique properties
            this.manufacturer = (typeof(manufacturer))? manufacturer.toString() : "";
            this.country = (typeof(country))? country.toString() : "";
    }

    //Generic Properties
    getName() {
        return "A bicycle";
    }

    getNumWheels() {
        return super.getNumWheels();
    }

    getMajorUse() {
        return "Personal use";
    }

    getPreferredTerrain() {
        return super.getPreferredTerrain();
    }

    getMaxSpeed() {
        return 60;
    }
    
    getPoweredBy() {
        return "human kinetics";
    }

    descriptionFunc() {
        return this.getName() +
                "\nMajor use of vehicle: " + this.getMajorUse() +
                "\nPowered by: " + this.getPoweredBy() +
                "\nWith a maximum speed of: " + this.getMaxSpeed().toString() + "km/hr"  +
                "\nNumber of wheels: " + this.getNumWheels().toString() +
                "\nPreferred terrain of use: " + this.getPreferredTerrain() +
                "\nManufactured by: " + this.manufacturer.toString() +
                "\nIn: " + this.country.toString() +
                "\n." + "\n.";
    }
  
}

export default bicycle;