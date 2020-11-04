let txt1 = document.getElementById("txt1");
let txt2 = document.getElementById("txt2");
let label5 = document.getElementById("label5");

function check(){
    label5.innerHTML = 'Obrigado por se cadastrar'

    let respostas = [];

    respostas.push(txt1.value,txt2.value)

    console.log(respostas);
}

