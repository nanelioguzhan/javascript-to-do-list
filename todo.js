let listLength = document.getElementsByTagName("li")
let listDOM = document.querySelector("#list")
let taskDOM = document.querySelector("#task")
const toastLiveExample = document.getElementById('liveToast')

function newElement(){
    let task = taskDOM.value
    let li = document.createElement("li")
    li.innerHTML = task

    if (!task || task.trim() == "" ){
        $(".error").toast("show")
    }
    else{
        listDOM.appendChild(li)
        // $(".toast-header").toast("show")
        $(".success").toast("show")
        
    } 

    let span = document.createElement("span")
    let closeText = document.createTextNode("\u00D7")
    span.className = "close"
    span.appendChild(closeText)
    li.appendChild(span)
    
    
    span.onclick = function(){
        let parentLI = this.parentElement
        parentLI.style.display = "none"    
    }
    
}

// check li's
listDOM.addEventListener("click" , function(item){
    if(item.target.tagName = "li"){
        item.target.classList.toggle("checked")
    }
})



//existed li's take close button
for(i = 0; i < listLength.length; i++){
    let span = document.createElement("span")
    let closeText = document.createTextNode("\u00D7")
    span.className = "close"
    span.appendChild(closeText)
    listLength[i].appendChild(span)
}

//remove existed li
let spanLength = document.getElementsByClassName("close")
for(i = 0; i < spanLength.length; i++){
    spanLength[i].onclick = function(){
        let parentLI = this.parentElement
        parentLI.style.display = "none"    
        }
    }
