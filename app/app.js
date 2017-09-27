'use strict';


import raceCar from './roadVehicle/fourWheeler/raceCar.js';
import sedan from './roadVehicle/fourWheeler/sedan.js';
import suv from './roadVehicle/fourWheeler/suv.js';
import truck from './roadVehicle/heavyDuty/truck.js';
import napep from './roadVehicle/threeWheeler/napep.js';
import tricycle from './roadVehicle/threeWheeler/tricycle.js';
import bicycle from './roadVehicle/twoWheeler/bicycle.js';
import powerbike from './roadVehicle/twoWheeler/powerbike.js';
import skooter from './roadVehicle/twoWheeler/skooter.js';
import fourWheeler from './roadVehicle/fourWheeler.js';
import threeWheeler from './roadVehicle/threeWheeler.js';
import twoWheeler from './roadVehicle/twoWheeler.js';
import roadVehicle from './roadVehicle.js';


let raceCa;
let seda;
let suvT;
let trucka;
let naper;
let tri;
let bi;
let powerbyk;
let skoota;
let fourWhl;
let thrWhl;
let twoWhl;
let roadV;

try{

    raceCa = new raceCar("Ferarri", 3, "Italy");
    seda = new sedan(6, "Germany");
    suvT = new suv(10,"Range Rover", []);
    trucka = new truck(20,false, "Sweden");
    naper = new napep("TukTuk", "India");
    tri = new tricycle("Oxford", "UK");
    bi = new bicycle("BMX","USA");
    powerbyk = new powerbike(2,"Ducati","Italy");
    skoota = new skooter(30,"Yamaha","Japan");
    fourWhl = new fourWheeler(1);
    thrWhl = new threeWheeler();
    twoWhl = new twoWheeler("");
    roadV = new roadVehicle(true);
}
catch(e){
    throw new ErrorEvent('invalid input');
}


console.log(raceCa.descriptionFunc());
console.log(seda.descriptionFunc());
console.log(suvT.descriptionFunc());
console.log(trucka.descriptionFunc());
console.log(naper.descriptionFunc());
console.log(tri.descriptionFunc());
console.log(bi.descriptionFunc());
console.log(powerbyk.descriptionFunc());
console.log(skoota.descriptionFunc());
console.log(fourWhl.descriptionFunc());
console.log(thrWhl.descriptionFunc());
console.log(twoWhl.descriptionFunc());
console.log(roadV.descriptionFunc());