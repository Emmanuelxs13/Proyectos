let btnsubmit = document.getElementById("btngenera"), 
        qrfinal = document.querySelector(".qrcode-final"),
        qr_canvas = document.querySelector("canvas"),
        user_input = document.getElementById("intext");

btnsubmit.onclick = function(){
      
      if(user_input.value != ""){
        if(qrfinal.childElementCount == 0){
          genera(user_input);  
        } else { 
          qrfinal.innerHTML = "";          
          genera(user_input);
        }
      } else{
        qrfinal.style = "display none";
      }
    }

function genera(user_input){
      qrfinal.style = "";

      var qrcode = new QRCode(qrfinal, {
        text: `${user_input.value}`,
        width: 200,
        height: 200,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
      });

      let descargar = document.createElement("button");
      descargar.setAttribute("id", "dscr");
      qrfinal.appendChild(descargar);

      let qr_a = document.createElement("a");
      qr_a.setAttribute("download", "ESH_QRCODE.png");
      qr_a.innerText = "Descargar";
      descargar.appendChild(qr_a);
      
      let qr_ima = document.querySelector(".qrcode-final img");
      if(qr_ima.getAttribute("src") == ''){
          setTimeout(() => {
            qr_a.setAttribute("href", `${qr_canvas.toDataURL()}`);
          }, 300);
        } else{
          setTimeout(() => {
            qr_a.setAttribute("href", `${qr_ima.getAttribute("src")}`);
        }, 300);
      }
    }