let  div = document.querySelector('div')



let messege = (text,name)=>{
    div.innerHTML = `<p>${text}</p>  <span onclick='parentElement.remove()'>x</span>`
    div.classList = name
}