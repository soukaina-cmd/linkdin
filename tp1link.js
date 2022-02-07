window.onload=function () {
    document.getElementById("si").addEventListener("click", connexion)
    
}
function connexion(){
    var a = document.getElementById("inp").value
    var b = document.getElementById("in").value

    if (a == '' && b == '') {
        document.getElementById("inp").style.border= "1px solid red"
        document.getElementById("in").style.border= "1px solid red "
        document.getElementById("logerreur").style.display= "block"
        document.getElementById("passerreur").style.display= "block "


    }
    else if (a != '' && b != '') {
        
        document.getElementById("inp").style.border= "1px solid green"
        document.getElementById("in").style.border= "1px solid green"
        document.getElementById("logerreur").style.display= "none"
        document.getElementById("passerreur").style.display= "none "
    }
    else if (a == '' && b != '') {
        document.getElementById("inp").style.border= "1px solid red"
        document.getElementById("in").style.border= "1px solid green"
        document.getElementById("logerreur").style.display= "block"
        document.getElementById("passerreur").style.display= "none"
    }
    else if (a != '' && b == '') {
        document.getElementById("inp").style.border= "1px solid green"
        document.getElementById("in").style.border= "1px solid red"
        document.getElementById("logerreur").style.display= "none"
        document.getElementById("passerreur").style.display= "block"
    }

}


