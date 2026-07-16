function hello(){

    alert("👋 Hello! Welcome to my website.");
}

let dark = false;

function changeTheme(){

    if(!dark){

        document.body.style.background =
        "linear-gradient(135deg,#141E30,#243B55)";

    }else{

        document.body.style.background =
        "linear-gradient(135deg,#4facfe,#00f2fe)";
    }

    dark = !dark;
}