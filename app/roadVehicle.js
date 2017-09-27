'use strict';
class roadVehicle {
    constructor() {
    }

    //Generic Properties
    getName() {
        return "A road vehicle";
    }

    getMajorUse() {
        return "Moving people and property over land";
    }
    getPoweredBy() {
        return "a mechanical reaction";
    }
    getNumWheels() {
        return "it varies";
    }
    getPreferredTerrain() {
        return "roads";
    }

    descriptionFunc() {
        return this.getName() +
                "\nMajor use of vehicle: " + this.getMajorUse() +
                "\nPowered by: " + this.getPoweredBy() +
                "\nNumber of wheels: " + this.getNumWheels().toString() +
                "\nPreferred terrain of use: " + this.getPreferredTerrain()+
                "\n." + "\n.";
    }

};

export default roadVehicle;