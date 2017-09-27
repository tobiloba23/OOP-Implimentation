import * as Mocha from 'mocha';
import chai from 'chai';
const expect = chai.expect;


'use strict';

import raceCar from '../app/roadVehicle/fourWheeler/raceCar.js';
import sedan from '../app/roadVehicle/fourWheeler/sedan.js';
import suv from '../app/roadVehicle/fourWheeler/suv.js';
import truck from '../app/roadVehicle/heavyDuty/truck.js';
import napep from '../app/roadVehicle/threeWheeler/napep.js';
import tricycle from '../app/roadVehicle/threeWheeler/tricycle.js';
import bicycle from '../app/roadVehicle/twoWheeler/bicycle.js';
import powerbike from '../app/roadVehicle/twoWheeler/powerbike.js';
import skooter from '../app/roadVehicle/twoWheeler/skooter.js';
import fourWheeler from '../app/roadVehicle/fourWheeler.js';
import threeWheeler from '../app/roadVehicle/threeWheeler.js';
import twoWheeler from '../app/roadVehicle/twoWheeler.js';
import roadVehicle from '../app/roadVehicle.js';


let raceCa = new raceCar(3, "Ferarri", "Italy");
let seda = new sedan(6, "Mercedes", "Germany");
let suvT = new suv(10,"Range Rover", "UK");
let trucka = new truck(20, "IVECO", "Sweden");
let naper = new napep("TukTuk", "India");
let tri = new tricycle("Oxford", "UK");
let bi = new bicycle("BMX","USA");
let powerbyk = new powerbike(2,"Ducati","Italy");
let skoota = new skooter(30,"Yamaha","Japan");
let fourWhl = new fourWheeler();
let thrWhl = new threeWheeler();
let twoWhl = new twoWheeler();
let roadV = new roadVehicle();



describe('Array', () => {
    //test code
    it('Expecting all vehicles to meet their expected number of wheels', () => {
        expect(raceCa.getName()).to.equal(4);
        expect(seda.getName()).to.equal(4);
        expect(suvT.getName()).to.equal(4);
        expect(trucka.getName()).to.equal(roadV.getName());
        expect(naper.getName()).to.equal(3);
        expect(tri.getName()).to.equal(3);
        expect(powerbyk.getName()).to.equal(2);
        expect(fourWhl.getName()).to.equal(4);
        expect(thrWhl.getName()).to.equal(3);
        expect(twoWhl.getName()).to.equal(2);
        expect(roadV.getName()).to.equal("It varies");
    });
    
})



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



describe('Array', () => {
    //test code
    it('Expecting all vehicles to meet their expected number of wheels', () => {
        expect(raceCa.getName()).to.equal("A race car");
        expect(seda.getName()).to.equal("A sedan");
        expect(suvT.getName()).to.equal("An SUV");
        expect(trucka.getName()).to.equal("A truck");
        expect(naper.getName()).to.equal("A napep");
        expect(tri.getName()).to.equal("A tricycle");
        expect(bi.getName()).to.equal("A bicycle");
        expect(skoota.getName()).to.equal("A skooter");
        expect(powerbyk.getName()).to.equal("A power bike");
        expect(fourWhl.getName()).to.equal("A four wheeler");
        expect(thrWhl.getName()).to.equal("A three wheeler");
        expect(twoWhl.getName()).to.equal("A two wheeler");
        expect(roadV.getName()).to.equal("A road vehicle");
    });
    
})
