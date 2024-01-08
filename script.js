function val(){
    var a=document.getElementById('num1').value
    
    let startval = document.getElementById('startval').value;
    let endval = document.getElementById('endval').value;
    document.getElementById('res').innerHTML=a.slice(Number(startval), Number(endval))
    }
  
  function one(){
    var a=document.getElementById('num1').value
    
    let startval = document.getElementById('startval').value;
    let endval = document.getElementById('endval').value;
    document.getElementById('res').innerHTML=a.substring(Number(startval), Number(endval))
  }
  function two(){
    var a=document.getElementById('num1').value
    
    let startval = document.getElementById('startval').value;
    document.getElementById('res').innerHTML=a.charCodeAt(Number(startval))
  }
  function three(){
    var a=document.getElementById('num1').value
    
    let startval = document.getElementById('startval').value;
    document.getElementById('res').innerHTML=a.charAt(Number(startval))
  }
  function four(){
    var a=document.getElementById('num1').value
    
    let startval = document.getElementById('startval').value;
    document.getElementById('res').innerHTML=a.at()
  }
  function five(){
    var a=document.getElementById('num1').value
    document.getElementById('res').innerHTML=a.toUpperCase();
  }
  function six(){
    var a=document.getElementById('num1').value
    document.getElementById('res').innerHTML=a.toLowerCase()
  }
  function seven(){
    let startval = document.getElementById('startval').value;
    let endval = document.getElementById('endval').value;

    document.getElementById('res').innerHTML=startval.concat("",endval)
  }
  function eight(){
    
    let startval = document.getElementById('startval').value;
    let endval = startval.trim()
    document.getElementById('res').innerHTML="length startval="+startval.length+"<br>length endval="+endval.length;
  }
  function nine(){
    
    let startval = document.getElementById('startval').value;
    let endval = startval.trimStart()
    document.getElementById('res').innerHTML="length startval="+startval.length+"<br>length endval="+endval.length;
  }
  function ten(){
    
    let startval = document.getElementById('startval').value;
    let endval = startval.trimEnd()
    document.getElementById('res').innerHTML="length startval="+startval.length+"<br>length endval="+endval.length;
  }
  function eleven(){
    var a=document.getElementById('num1').value
  
    let startval = document.getElementById('startval').value;
    let endval = document.getElementById('endval').value;
    document.getElementById('res').innerHTML=a.padStart(Number(startval),Number(endval))
  }
  function twelve(){
    var a=document.getElementById('num1').value
  
    let startval = document.getElementById('startval').value;
    let endval = document.getElementById('endval').value;
    document.getElementById('res').innerHTML=a.padEnd(Number(startval),Number(endval))
  }
  function thirteen(){
    var a=document.getElementById('num1').value
  
    let starval = document.getElementById('startval').value
    document.getElementById('res').innerHTML=a.repeat(Number(starval))
  }
  function fourteen(){
    var a=document.getElementById('num1').value
   
    const startval = a.split("");
  
    a = "";
    for (let i = 0; i < startval.length; i++) {
      a += startval[i] + "<br>"
    }
    document.getElementById('res').innerHTML = a;
  }
  function fifteen(){
    var a=document.getElementById('num1').value;
    var startval=document.getElementById('startval').value;
    var endval=document.getElementById('endval').value;
    document.getElementById('res').innerHTML = a.replace((startval),(endval));

  }
  function sixteen(){
    var a=document.getElementById("num1").value;
   document.getElementById("res").innerHTML=a.length;
  }
  function eighteen(){
    var a=document.getElementById("num1").value;
    var startval=document.getElementById("startval").value;
    var endval=document.getElementById("endval").value;
    document.getElementById("res").innerHTML = a.replaceAll((startval),(endval));

  }

