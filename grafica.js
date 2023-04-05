

function resultadoacevivf2() {

    const vivf2vi = document.getElementById('vivf2-vi').value;
    const vivf2vf = document.getElementById('vivf2-vf').value;
    const vivf2t = document.getElementById('vivf2-t').value;
    
    if ((isNaN(vivfvi||vivf2vf||vivf2t))||(vivf2t<0)) {
      alert("Alerta: El tiempo es negativo o las variables colocadas no son numeros");
    }

      ace=((vivf2vf-vivf2vi)/vivf2t);
      document.getElementById("resultadoace-vivf2").innerHTML=ace;
       

      const ctx= document.getElementById('myChart').getContext("2d");
      const myChart = new Chart(ctx,{
      type:"line",
      data:{
        labels:[0,5,10,15,20,25,30,35,40,45,50,55,60,65,70],
        datasets:[{
            label:"aceleracion",
            data:[ace,ace,ace,ace,ace,ace,ace,ace,ace,ace,ace,ace,ace,ace,ace]
          }]
      },
      options:{
        responsive:true,
        width:50,
        height:70
      }
  });
  };


 function resultadoacevid2() {
  
  const vid2vi = document.getElementById('vid2-vi').value;
  const vid2d = document.getElementById('vid2-d').value;
  const vid2t = document.getElementById('vid2-t').value;

  if ((isNaN(vid2vi||vid2t||vid2d))||(vid2t<0)) {
    alert("Alerta: El tiempo es negativo o las variables colocadas no son numeros");
  }


    ace = (2*(vid2d - (vid2vi*vid2t)))/(vid2t*vid2t);
    document.getElementById("resultadoace-vid2").innerHTML = ace;
      
    const ctx= document.getElementById('myChart').getContext("2d");
      const myChart = new Chart(ctx,{
      type:"line",
      data:{
          labels:[0,5,10,15,20,25,30,35,40,45,50,55,60,65,70],
          datasets:[{
              label:"aceleracion",
              data:[ace,ace,ace,ace,ace,ace,ace,ace,ace,ace,ace,ace,ace,ace,ace]
          }]
      },
      options:{
        responsive:true,
        width:50,
        height:70
      }
  });
  };

  
  function resultadoacevfd2(){

    const vfd2vf = document.getElementById('vfd2-vf').value;
    const vfd2d = document.getElementById('vfd2-d').value;
    const vfd2t = document.getElementById('vfd2-t').value;
  
    if ((isNaN(vfd2vf||vfd2t||vfd2d))||(vfd2t<0)) {
      alert("Alerta: El tiempo es negativo o las variables colocadas no son numeros");
    }

    ace = (2*(vfd2d-(vfd2vf*vfd2t)))/(vfd2t*vfd2t);
    document.getElementById("resultadoace-vfd2").innerHTML=ace;

    const ctx= document.getElementById('myChart').getContext("2d");
    const myChart = new Chart(ctx,{
    type:"line",
    data:{
        labels:[vfd2t,5+vfd2t,10+vfd2t,15+vfd2t,20+vfd2t,25+vfd2t,30+vfd2t,35+vfd2t,40+vfd2t,45+vfd2t,50+vfd2t,55+vfd2t,60+vfd2t,65+vfd2t,70+vfd2t],
        datasets:[{
            label:"aceleracion",
            data:[ace,ace,ace,ace,ace,ace,ace,ace,ace,ace,ace,ace,ace,ace,ace]
        }]
    },
    options:{
      responsive:true,
      width:50,
      height:70
    }
});
};

function resultadodisvia2() { 
  
  const via2vi = document.getElementById('via2-vi').value;
  const via2a = document.getElementById('via2-a').value;
  const via2t = document.getElementById('via2-t').value;

  if ((isNaN(via2vi||via2a||via2t))||(via2t<0)) {
    alert("Alerta: El tiempo es negativo o las variables colocadas no son numeros");
  }

  dis= (via2vi*via2t) + ((1/2)*via2a*(via2t^2));  
  document.getElementById("resultadodis-via2").innerHTML=dis;

  const ctx= document.getElementById('myChart2').getContext("2d");
  const myChart = new Chart(ctx,{
  type:"bar",
  data:{
      labels:[via2t],
      datasets:[{
          label:"distancia",
          data:[dis]
      }]
  },
  options:{
    responsive:true,
    width:50,
    height:70
  }
});
};

function resultadodisvivf() {
  
  const vivfvi = document.getElementById('vivf-vi').value;
  const vivfvf = document.getElementById('vivf-vf').value;
  const vivft = document.getElementById('vivf-t').value;

  if ((isNaN(vivfvi||vivft||vivfvf))||(vivft<0)) {
    alert("Alerta: El tiempo es negativo o las variables colocadas no son numeros");
  }

  dis = (vivfvi/(2*vivft))+((vivfvf)/(2*vivft));
  
  document.getElementById("resultadodis-vivf").innerHTML=dis;

  const ctx= document.getElementById('myChart2').getContext("2d");
  const myChart = new Chart(ctx,{
  type:"bar",
  data:{
      labels:[vivft],
      datasets:[{
          label:"distancia",
          data:[dis]
      }]
  },
  options:{
    responsive:true,
    width:50,
    height:70
  }
});
};

function resultadodisvfa2() {
  const vfa2vf = document.getElementById('vfa2-vf').value;
  const vfa2a = document.getElementById('vfa2-a').value;
  const vfa2t = document.getElementById('vfa2-t').value;

  if ((isNaN(vfa2vf||vfa2a||vfa2t))||(vfa2t<0)) {
    alert("Alerta: El tiempo es negativo o las variables colocadas no son numeros");
  }

  dis= (vfa2vf*vfa2t) - ((1/2)*(vfa2a*(vfa2t^2)));

document.getElementById("resultadodis-vfa2").innerHTML=dis;

  const ctx= document.getElementById('myChart2').getContext("2d");
  const myChart = new Chart(ctx,{
  type:"bar",
  data:{
      labels:[vfa2t],
      datasets:[{
          label:"distancia",
          data:[dis]
      }]
  },
  options:{
    responsive:true,
    width:50,
    height:70
  }
});
};

function resultadovfvia() {
  
  const viavi = document.getElementById('via-vi').value;
  const viaa = document.getElementById('via-a').value;
  const viat = document.getElementById('via-t').value;
if ((isNaN(viavi||viaa||viat))||(viat<0)) {
  alert("Alerta: El tiempo es negativo o las variables colocadas no son numeros");
}
  vf = (parseFloat(viavi)+(viaa*viat));

  document.getElementById("resultadovf-via").innerHTML=vf;

  const ctx= document.getElementById('myChart3').getContext("2d");
  const myChart = new Chart(ctx,{
  type:"bar",
  data:{
      labels:[viat],
      datasets:[{
          label:"velocidad final",
          data:[vf]
      }]
  },
  options:{
    responsive:true,
    width:50,
    height:70
  }
});
};

function resultadovfvid() {

const vidvi = document.getElementById('vid-vi').value;
const vidd = document.getElementById('vid-d').value;
const vidt = document.getElementById('vid-t').value;

if ((isNaN(vidt||vidd||vidvi))||(vidt<0)) {
  alert("Alerta: El tiempo es negativo o las variables colocadas no son numeros");
}
vf = (2*vidd/vidt) - vidvi;
document.getElementById("resultadovf-vid").innerHTML=vf;

const ctx= document.getElementById('myChart3').getContext("2d");
  const myChart = new Chart(ctx,{
  type:"bar",
  data:{
      labels:[vidt],
      datasets:[{
          label:"velocidad final",
          data:[vf]
      }]
  },
  options:{
    responsive:true,
    width:50,
    height:70
  }
});
};

function resultadovivfa() {
  const vfavf = document.getElementById('vfa-vf').value;
  const vfaa = document.getElementById('vfa-a').value;
  const vfat = document.getElementById('vfa-t').value;
  if ((isNaN(vfavf||vfaa||vfat))||(vfat<0)) {
    alert("Alerta: El tiempo es negativo o las variables colocadas no son numeros");
  }
  v0 = vfavf - (vfaa*vfat);

  document.getElementById("resultadovi-vfa").innerHTML = v0;

  const ctx= document.getElementById('myChart4').getContext("2d");
  const myChart = new Chart(ctx,{
  type:"bar",
  data:{
      labels:[vfat],
      datasets:[{
          label:"velocidad inicial",
          data:[v0]
      }]
  },
  options:{
    responsive:true,
    width:50,
    height:70
  }
});
};

function resultadovivfd() {
  
  const vfdvf = document.getElementById('vfd-vf').value;
  const vfdd = document.getElementById('vfd-d').value;
  const vfdt = document.getElementById('vfd-t').value;

  v0 = (((2*vfdd)/vfdt) )- vfdvf;
  document.getElementById("resultadovi-vfd").innerHTML = v0;

const ctx= document.getElementById('myChart4').getContext("2d");
  const myChart = new Chart(ctx,{
  type:"bar",
  data:{
      labels:[vfdt],
      datasets:[{
          label:"velocidad inicial",
          data:[v0]
      }]
  },
  options:{
    responsive:true,
    width:50,
    height:70
  }
});
};

function mostrarposicion() {
  
  const xo = parseFloat(document.getElementById("xo").value);
  const vo = parseFloat(document.getElementById("vo").value);
  var t = parseFloat(document.getElementById("t").value);
  const a = parseFloat(document.getElementById("a").value);

 var t2= t+2;
 var t3 = t+4;
 var t4 = t+6;
 var t5= t+8;

  x1 = (parseFloat(xo) + parseFloat((vo*t)) +parseFloat((((1/2)*a)*(t*t))));
  x2 = (      xo + (vo*t2) + (((a*(t2*t2))/2)     ));
  x3 = (      xo + (vo*t3) + (((a*(t3*t3))/2)     ));
  x4 = (      xo + (vo*t4) + (((a*(t4*t4))/2)     ));
  x5 = (      xo + (vo*t5) + (((a*(t5*t5))/2)     ));

  document.getElementById("resultadoxo").innerHTML = x1;




  const ctx= document.getElementById('myChart5').getContext("2d");
  const myChart = new Chart(ctx,{
  type:"line",
  data:{
      labels:[t,t2,t3,t4,t5],
      datasets:[{
          label:"Grafica de posicion",
          data:[x1,x2,x3,x4,x5]
      }]
  },
  options:{
    responsive:true,
    width:50,
    height:70
  }
});
};
