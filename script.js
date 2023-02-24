var btn = document.getElementById('rum')
btn.addEventListener('click',inserir)

function inserir(){
    //ocultar pagina 1 e exibir pagina 2
    let p1 = document.getElementById('page1')
    let p2 = document.getElementById('page2')

    p1.style.display = "none"
    p2.style.display = "flex"

    //inserir codigo em html 
    //let codeHtml = document.getElementById('codeHtml').value
    //p2.innerHTML = codeHtml

    //inserir codigo em JS
    //let codeJs = document.getElementById('codeJs').value
    //document.getElementById('jsUser').innerHTML = codeJs

    let codeJs = document.getElementById('codeJs').value 


    var tagScript = document.createElement('script') //cria um elemento chamado script
    tagScript.setAttribute("type", "text/javascript") //dar atributo para o elemento que ele criou

    var textScript = document.createTextNode(codeJs) // pega o texto que o usuario criou e joga

    tagScript.appendChild(textScript)  //inserir algo dentro do script
    document.body.appendChild(tagScript) // pega variavel script que eata dentro do body


}