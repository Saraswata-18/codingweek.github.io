fetch('https://www.coursehubiitg.in/api/codingweek/contributions').then((data) => {
    return data.json();
}).then((completedata) => {
    completedata.sort((a, b) => b.points - a.points);

    let data1 = "";
    data1 = `<div class="group-kid"></div>
    <div class="hover1"><img src=${completedata[0].avatar} alt="no image"  class="group-item"></div>
    <div class="new-parent">
        <div class="box">
        <div class="amanda">${completedata[0].name} ${completedata[0].points}</div>
        
        
        </div>
    </div>`;
    document.getElementById('winner').innerHTML = data1;


    let data2 = "";
    data2 = `<div class="group-kid11"></div>
    <div class="hover1"><img src=${completedata[2].avatar} class="group-item11"></div>
    <div class="new-container">


        <div class="jefferey">${completedata[2].name} ${completedata[2].points}</div>
        
    </div>`;
    document.getElementById('second').innerHTML = data2;


    let data3 = "";
    data3 = `<div class="group-kid11"></div>
    <div class="hover1"><img src=${completedata[1].avatar} class="group-item11"></div>
    <div class="group-div">


        <div class="jeremy">${completedata[1].name} ${completedata[1].points}</div>
        
    </div>`;
    document.getElementById('third').innerHTML = data3;


    let data4 = "";
    let s = 4;
    completedata.slice(3).map((values) => {
        data4 += `<div class="main-1-kid2">
        <div class="innerbox">
        <div class="div7">${s}</div>
        <div class="hover1"><img src=${values.avatar} class="main-1-kid3"></div>
        <div class="joe">${values.name}</div>
        </div>
        <div class="div6">${values.points}</div>
        </div>
        
        
    <div style="height: 8px;color: white;"></div>
     `;
        s = s + 1;
    })
    document.getElementById('others').innerHTML = data4;


})
