const aberturas= 
[ 
    {
        nome: "Temos a força",
        desenho: "Dragon ball z"
    },
    {
        nome: "Mudar o mundo",
        desenho: "inuyasha"
    },
    {
        nome: "Pegasus fantasy",
        desenho: "Cavaleiros dos zodiaco"
    }
];    

const procura = document.getElementById("procura");
const dados = document.getElementById("dados");

function search(){

    for(let i in aberturas){

        if(dados.value == aberturas[0].nome || dados.value == aberturas[0].desenho){

        procura.innerHTML = "<li> " + aberturas[0].nome + ": " + aberturas[0].desenho + "</li>";

        }

       else if(dados.value == aberturas[1].nome || dados.value == aberturas[1].desenho){

            procura.innerHTML = "<li> " + aberturas[1].nome + ": " + aberturas[1].desenho + "</li>";
    
            }
            else if(dados.value == aberturas[2].nome || dados.value == aberturas[2].desenho){

                procura.innerHTML = "<li> " + aberturas[2].nome + ": " + aberturas[2].desenho + "</li>";
        
                }

    }
}