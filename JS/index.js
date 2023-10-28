var input = document.createElement("input");

function AddTask()
{   
    let main = document.querySelector("main");
    var textInput = document.querySelector("input.type-text");

    if(textInput.value)
    {
        var article = document.createElement("article");
        main.appendChild(article);

        input.type = "checkbox";
        article.appendChild(input);

        var p = document.createElement("p");
        p.innerText = textInput.value;
        article.appendChild(p);
    }
}
/*
input.onclick = function()
{
    var te = document.querySelector("p");
    te.innerHTML = `<s>${te.value}</s>`;
}*/