var calcDisplay = ""

function klikTombol(e){
    if(e == "1" || e == "2" || e == "3" || e == "4" || e == "/" || e == "*"){
        if (e == "AC"){
            calcDisplay = ""
        }else{
        calcDisplay = calcDisplay + e
        console.log(calcDisplay)
        }
    }else{
        console.log("input harus berupa angka dan simbol")
    }

    document.getElementById("display").value = calcDisplay
}

document.getElementById("display").addEventListener("input",
    function displayChange(){
        console.log(this.value)
        let e = this.value

        // if(e == "1" || e == "2" || e == "3" || e == "4" || e == "/" || e == "*"){
        // }else{
        //     console.log("ERROR")
        // }

        let chars = /^[0-9]+$/ //REGEX

        // let chars = /^\d{10}+$/

        if (chars.test(e)){
            console.log("digits")
        }else{
            alert("not digits")
        }
    }
)