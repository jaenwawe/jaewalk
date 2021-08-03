var x = document.getElementsByClassName("grandparent");          

x.addEventListener('click', myFunction);

function myFunction(){
 if (x[0])  document.scripts.backgroundColor=" #cceeff";
 if (x[1])  document.body.style.backgroundColor = '#66ccff';
}
 
 /*
 body.innerHTML = document.body.style.backgroundColor = " #cceeff";
  x[1].innerHTML = document.body.style.backgroundColor = '#66ccff';
};
*/
 