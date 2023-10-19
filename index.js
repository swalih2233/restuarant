let clock=document.getElementById('clock');
function shoutime(){
    var date=new Date();
    var h=date.getHours();
    var m=date.getMinutes();
    var s=date.getSeconds();
    var session='AM';
    let text;
   
    if(h == 0){
        h = 12;
    }
    if(h > 12){
        h = h - 1;
        session = "PM";
     }
    

    if( h>17){
        text='Restuarant is Closed'
        document.getElementById('demo').innerText=text;
        document.getElementById('demo').textContent=text;
    }
    else{
        text='Restuarant is open'
        document.getElementById('demo').innerText=text;
        document.getElementById('demo').textContent=text;
    }
    h=(h<10) ? "0" + h : h;
    m=(m<10) ? "0" + m : m;
    s=(s<10) ? "0" + s : s;

    var time =h + ":" + m +":" + s + " " + session;
    document.getElementById("h1").innerText=time;
    document.getElementById("h1").textContent=time;
   

    setTimeout(shoutime,1000)
}
shoutime();