'use strict';
import roadV from '../roadVehicle.js'

class twoWheeler extends roadV {
    constructor() {
        super(); 
    }

    //Generic Properties
    getName() {
        return "A two wheeler";
    }

    getNumWheels() {
        return 2;
    }

    getMajorUse() {
        return "transport of 3 or less people";
    }
    getPoweredBy() {
        return super.getPoweredBy();
    }
    getPreferredTerrain() {
        return "paved roads";
    }
    getMaxSpeed() {
        return 500;
    }
    
    descriptionFunc() {
        return this.getName() +
                "\nMajor use of vehicle: " + this.getMajorUse() +
                "\nPowered by: " + this.getPoweredBy() +
                "\nWith a maximum speed of: " + this.getMaxSpeed().toString() + "km/hr" +
                "\nNumber of wheels: " + this.getNumWheels().toString() +
                "\nPreferred terrain of use: " + this.getPreferredTerrain() +
                "\n." + "\n.";
    }
    
}

export default twoWheeler;