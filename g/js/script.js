var btn = document.querySelector('#btn'),
    btn2 = document.querySelector('#btn2'),
    out = document.querySelector('#out'),
    weight = document.querySelector('#weight'),
    vol = document.querySelector('#vol'),
    load = document.querySelector('#load'),
    del = document.querySelector('#del'),
    frag = document.querySelector('#frag'),
    range = document.querySelector('#range'),
    rasstoyanie = document.querySelector('.rasstoyanie').innerHTML = 50;
    weight = document.querySelector('#weight'),
    vol = document.querySelector('#vol'),
    kg = 5.5,
    kub = 3500,
    km = 2;
 // range slider
    range.oninput = function(){
      var rasstoyanie = document.querySelector('.rasstoyanie').innerHTML = range.value;
    }
  // Basic function 
btn2.onclick=function(){
      out.innerHTML = 0;
      weight.value="";
      vol.value="";
      load.checked = false;
      del.checked=false;
      frag.checked=false;
      
} 
btn.onclick = function(){
  if (weight.value != '' && vol.value != '') {
      if (load.checked){ 
          load.value = 1500; }
        else 
        {
          load.value = 0;
      }
      if (del.checked){ 
          del.value = 3500; }
        else 
        {
          del.value = 0;
      }
      if (frag.checked){ 
          frag.value = 2000; }
        else 
        {
          frag.value = 0;
      }
 
var sum = (weight.value * kg) + (vol.value * kub) + Number(load.value) + + Number(del.value) + Number(frag.value) + (range.value * km);
      out.innerHTML = sum.toFixed(2);
  }else{
alert('Введите вес и объем груза');
}
      if (weight.value <=-1 || vol.value <= -1)
      {
        out.innerHTML = 0;
        alert("Введено некорректное значение");
      }

}