'use strict';
import roadV from '../roadVehicle.js'

class heavyDuty extends roadV {
    constructor() {
        super(); 
    }

    //Generic Properties
    getName() {
        return "A heavy duty truck";
    }

    getNumWheels() {
        return "A heavy duty truck";
    }

    getNumWheels() {
        return super.getNumWheels();
    }
    getMajorUse() {
        return super.getMajorUse();
    }
    getPoweredBy() {
        return super.getPoweredBy();
    }
    getPreferredTerrain() {
        return super.getPreferredTerrain();
    }
    getMaxSpeed() {
        return 200;
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

export default heavyDuty;