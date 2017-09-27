'use strict';
import roadV from '../roadVehicle.js'

class threeWheeler extends roadV {
    constructor() {
        super(); 
    }

    //Generic Properties
    getName() {
        return "A three wheeler";
    }

    getNumWheels() {
        return 3;
    }

    getMajorUse() {
        return "1.) public transport of people and property 2.) self use";
    }
    getPoweredBy() {
        return super.getPoweredBy();
    }
    getPreferredTerrain() {
        return "inner roads";
    }
    getMaxSpeed() {
        return 80;
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

export default threeWheeler;