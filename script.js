const btn = document.getElementsByClassName("grandparent");
    var backgrounds = ['red', 'royalblue', 'green', 'purple', 'yellow'];

    function ChangeBackground(){
        backgrounds.forEach(strtChng);
    }

    function strtChng(){
        let i=0;
        if(i<=backgrounds.length){
            i++;
            document.body.style.backgroundColor = backgrounds[i];
            console.log(backgrounds[i]);
        }
        else{
            i=0;
        }
    }
            