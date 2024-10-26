let state = 0;
function changeBulbImage(){
    if (state == 1)
    {
        document.getElementById("bulbImg") .src= "https://media.istockphoto.com/id/881418554/photo/blank-light-bulb.jpg?s=612x612&w=0&k=20&c=ab5BDqa2Leqgp-3yov1sHMfZEyI6FAC_R2UbZbOdcZc=" ;

                state = 0;
                
    } else {
        document.getElementById("bulbImg") .src="https://5.imimg.com/data5/WL/SG/MY-8835990/10w-gls-light-bulb.jpg";

              state = 1;
    }
    }
