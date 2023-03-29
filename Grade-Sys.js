const getResult = () => {

    let wsys = document.getElementById('wsys').value;
    let sia = document.getElementById('sia').value;
    let im = document.getElementById('im').value;
    let networking = document.getElementById('networking').value;
    let ethics = document.getElementById('ethics').value;

    let total = parseFloat(wsys) + parseFloat(sia) + parseFloat(im) + parseFloat(networking) + parseFloat(ethics);
    let percent=(total*100)/500;


        if(percent>=100){
            document.getElementById('grade').innerHTML = "ERROR!";
        }
        else if(percent>=95){
            document.getElementById('grade').innerHTML = "Very Satisfactory";
        }
        else if(percent>=90){
            document.getElementById('grade').innerHTML = "Satisfactory";
        }
        else if(percent>=85){
            document.getElementById('grade').innerHTML = "Very Good";
        }
        else if(percent>=80){
            document.getElementById('grade').innerHTML = "Good";
        }
        else if(percent>=75){
            document.getElementById('grade').innerHTML = "Fair";
        }
        else if(percent>=61){
            document.getElementById('grade').innerHTML = "FAILED";
        }
        else{
            document.getElementById('grade').innerHTML = "RETAKE";
        }


    document.getElementById('total').innerHTML = total;
    document.getElementById('percent').innerHTML = percent;
}
