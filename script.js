var x = document.getElementsByClassName("grandparent");          

x.addEventListener('click', myFunction);

function myFunction(){
 if (x[0])  document.body.style.backgroundColor =  '#6082B6';
 if (x[1])  document.body.style.backgroundColor =  '#00BFFF';
}
