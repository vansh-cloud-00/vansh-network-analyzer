// ================================
// NETWORK ANALYZER PRO
// script.js Part 1
// ================================

// ------------------------------
// Loader
// ------------------------------

window.addEventListener("load", () => {

    setTimeout(() => {

        document.querySelector(".loader").style.display = "none";

    }, 1200);

});

// ------------------------------
// Live Packet Counter
// ------------------------------

let sent = 12043;
let received = 15621;

setInterval(() => {

    sent += Math.floor(Math.random() * 10);

    received += Math.floor(Math.random() * 12);

    document.getElementById("sentPackets").innerHTML = sent;

    document.getElementById("receivedPackets").innerHTML = received;

}, 1000);

// ------------------------------
// Upload Download Speed
// ------------------------------

setInterval(() => {

    document.getElementById("uploadSpeed").innerHTML =
        (70 + Math.floor(Math.random() * 40)) + " Mbps";

    document.getElementById("downloadSpeed").innerHTML =
        (120 + Math.floor(Math.random() * 70)) + " Mbps";

},2000);

// ------------------------------
// Traffic Chart
// ------------------------------

const trafficChart = new Chart(

document.getElementById("trafficChart"),

{

type:"line",

data:{

labels:["1","2","3","4","5","6","7"],

datasets:[{

label:"Network Traffic",

data:[20,35,25,60,45,70,65],

borderColor:"#00e5ff",

backgroundColor:"rgba(0,229,255,.2)",

fill:true,

tension:.4

}]

},

options:{

responsive:true,

plugins:{

legend:{

labels:{

color:"white"

}

}

},

scales:{

x:{

ticks:{color:"white"}

},

y:{

ticks:{color:"white"}

}

}

}

});

// ------------------------------
// CPU Chart
// ------------------------------

new Chart(

document.getElementById("cpuChart"),

{

type:"doughnut",

data:{

labels:["Used","Free"],

datasets:[{

data:[68,32],

backgroundColor:[

"#00e5ff",

"#1b2740"

]

}]

},

options:{

plugins:{

legend:{

labels:{

color:"white"

}

}

}

}

});

// ------------------------------
// Memory Chart
// ------------------------------

new Chart(

document.getElementById("memoryChart"),

{

type:"pie",

data:{

labels:["Used","Available"],

datasets:[{

data:[55,45],

backgroundColor:[

"#00ff88",

"#1b2740"

]

}]

},

options:{

plugins:{

legend:{

labels:{

color:"white"

}

}

}

}

});
// ======================================
// IP LOOKUP
// ======================================

document.getElementById("ipBtn").addEventListener("click", async () => {

    const ip = document.getElementById("ipInput").value.trim();

    if(ip===""){
        alert("Enter IP Address");
        return;
    }

    document.getElementById("ipResult").innerHTML="Loading...";

    try{

        const response=await fetch("https://ipapi.co/"+ip+"/json/");

        const data=await response.json();

        document.getElementById("ipResult").innerHTML=`

        <p><b>IP :</b> ${data.ip}</p>

        <p><b>City :</b> ${data.city}</p>

        <p><b>Region :</b> ${data.region}</p>

        <p><b>Country :</b> ${data.country_name}</p>

        <p><b>ISP :</b> ${data.org}</p>

        <p><b>Timezone :</b> ${data.timezone}</p>

        `;

    }

    catch{

        document.getElementById("ipResult").innerHTML="Unable to fetch data.";

    }

});


// ======================================
// DNS LOOKUP (Simulation)
// ======================================

document.getElementById("dnsBtn").onclick=function(){

    const domain=document.getElementById("dnsInput").value;

    document.getElementById("dnsResult").innerHTML=`

    <p><b>Domain :</b> ${domain}</p>

    <p>A Record : 142.250.183.78</p>

    <p>MX Record : mail.${domain}</p>

    <p>NS Record : ns1.${domain}</p>

    <p>TXT Record : v=spf1 include:_spf.google.com</p>

    `;

};


// ======================================
// PING TEST
// ======================================

document.getElementById("pingBtn").onclick=function(){

    const host=document.getElementById("pingInput").value;

    const latency=20+Math.floor(Math.random()*40);

    document.getElementById("pingResult").innerHTML=`

    <p>Host : ${host}</p>

    <p>Status : Reachable</p>

    <p>Latency : ${latency} ms</p>

    `;

};


// ======================================
// PORT SCANNER
// ======================================

document.getElementById("portBtn").onclick=function(){

const table=document.getElementById("portTable");

table.innerHTML="";

const ports=[

["22","SSH","Open"],

["53","DNS","Open"],

["80","HTTP","Open"],

["443","HTTPS","Open"],

["3306","MySQL","Closed"],

["8080","HTTP Alt","Filtered"]

];

ports.forEach(p=>{

table.innerHTML+=`

<tr>

<td>${p[0]}</td>

<td>${p[1]}</td>

<td>${p[2]}</td>

</tr>

`;

});

};


// ======================================
// WHOIS LOOKUP (Simulation)
// ======================================

document.getElementById("whoisBtn").onclick=function(){

const domain=document.getElementById("whoisInput").value;

document.getElementById("whoisResult").innerHTML=`

<p><b>Domain :</b> ${domain}</p>

<p>Registrar : Namecheap Inc.</p>

<p>Created : 12 Jan 2024</p>

<p>Expires : 12 Jan 2029</p>

<p>Status : Active</p>

`;

};
// ======================================
// TRACEROUTE (Simulation)
// ======================================

document.getElementById("traceBtn").onclick = function () {

    const host = document.getElementById("traceInput").value;

    document.getElementById("traceResult").innerHTML = `

    <p>1 → 192.168.1.1 (1 ms)</p>

    <p>2 → 10.0.0.1 (8 ms)</p>

    <p>3 → ISP Gateway (15 ms)</p>

    <p>4 → Regional Router (22 ms)</p>

    <p>5 → ${host} (31 ms)</p>

    <br>

    <b>Traceroute Completed Successfully</b>

    `;

};


// ======================================
// LIVE NETWORK ACTIVITY
// ======================================

const logs = [

"Device Connected : 192.168.1.20",

"HTTP Request Sent",

"HTTPS Connection Established",

"DNS Lookup Completed",

"SSH Login Attempt Detected",

"Packet Received",

"Packet Forwarded",

"Port 443 Open",

"Firewall Allowed Request",

"Network Interface Active",

"TCP Connection Established",

"ICMP Echo Reply",

"ARP Request Received",

"Gateway Reachable"

];

const activityBox = document.querySelector(".activity-box");

function addActivity(){

const random = logs[Math.floor(Math.random()*logs.length)];

const p = document.createElement("p");

const time = new Date().toLocaleTimeString();

p.innerHTML = "🟢 " + random + " <small>(" + time + ")</small>";

activityBox.prepend(p);

while(activityBox.children.length>10){

activityBox.removeChild(activityBox.lastChild);

}

}

setInterval(addActivity,3000);


// ======================================
// TRAFFIC GRAPH LIVE UPDATE
// ======================================

setInterval(()=>{

trafficChart.data.datasets[0].data.shift();

trafficChart.data.datasets[0].data.push(

20+Math.floor(Math.random()*70)

);

trafficChart.update();

},2500);


// ======================================
// RANDOM CPU & MEMORY UPDATE
// ======================================

setInterval(()=>{

cpuChart.data.datasets[0].data=[

40+Math.floor(Math.random()*50),

20+Math.floor(Math.random()*30)

];

cpuChart.update();

memoryChart.data.datasets[0].data=[

45+Math.floor(Math.random()*45),

20+Math.floor(Math.random()*40)

];

memoryChart.update();

},4000);


// ======================================
// STATUS INDICATOR
// ======================================

const onlineDot = document.querySelector(".online");

setInterval(()=>{

onlineDot.style.opacity="0.4";

setTimeout(()=>{

onlineDot.style.opacity="1";

},400);

},1200);


// ======================================
// WELCOME MESSAGE
// ======================================

console.log("Network Analyzer Pro Loaded Successfully");

console.log("Educational Frontend Project");

console.log("No Personal Data Collected");
