// =====================================
// NETWORK ANALYZER PRO
// api.js
// =====================================

// ----------------------------
// Base API
// ----------------------------

const API = {

    ipLookup(ip){

        return `https://ipapi.co/${ip}/json/`;

    }

};

// ----------------------------
// Fetch IP Information
// ----------------------------

async function getIPDetails(ip){

    try{

        const response = await fetch(API.ipLookup(ip));

        if(!response.ok){

            throw new Error("Unable to fetch data");

        }

        return await response.json();

    }

    catch(error){

        console.log(error);

        return null;

    }

}

// ----------------------------
// Utility Functions
// ----------------------------

function randomLatency(){

    return 20 + Math.floor(Math.random()*60);

}

function randomBandwidth(min,max){

    return min + Math.floor(Math.random()*(max-min));

}

function randomStatus(){

    const status=[

        "Open",

        "Closed",

        "Filtered"

    ];

    return status[Math.floor(Math.random()*status.length)];

}

// ----------------------------
// Live Time
// ----------------------------

function currentTime(){

    return new Date().toLocaleTimeString();

}

// ----------------------------
// Fake Packet Generator
// ----------------------------

function generatePacket(){

    return{

        source:

        "192.168.1."+Math.floor(Math.random()*255),

        destination:

        "10.0.0."+Math.floor(Math.random()*255),

        protocol:

        ["TCP","UDP","ICMP"][Math.floor(Math.random()*3)],

        size:

        64+Math.floor(Math.random()*1400)

    };

}

// ----------------------------
// Console Message
// ----------------------------

console.log("api.js Loaded Successfully");
