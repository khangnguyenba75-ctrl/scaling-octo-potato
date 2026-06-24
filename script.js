// Saved Game
// Version 1.9

const channels=[

["Thịnh Gaming",4120,
"UCEDt-NhEfLd1wc0yvNbcDfg"],

["Thịnh Gaming 2",204,
"UCBUWXtDzYPf2TOW-di1i_8A"],

["Thịnh Gaming 3",14,
"UCnMjjdBJyZkyh_sWxwKEl2g"],

["Thịnh Gaming Edit",4,
"UCMIbfRYT3REcSWX62M0rhvw"]

];

let html="";

channels.forEach((v,i)=>{

html+=`

<div class="card">

${i+1}: ${v[0]}
<br>

${v[1].toLocaleString()} sub

<br><br>

<iframe
src="https://livecounts.io/embed/youtube-live-subscriber-counter/${v[2]}">
</iframe>

</div>

`;

});

document.getElementById("top")
.innerHTML=html;
