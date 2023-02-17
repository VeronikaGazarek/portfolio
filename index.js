const btnGroup = document.getElementById("btn-group")
const styleTag = document.getElementById("style-mode")
btnGroup.addEventListener("click", changeMode)

function changeMode(event){
    if(event.target.tagName === "BUTTON"){
        let pathString = `./css/${event.target.id}.css`
        console.log(pathString)
        styleTag.setAttribute("href", pathString)
    }
    if(event.srcElement.id === "styleAnim"){
        document.getElementById('bubbles').style.display = 'block';
    }
    // else {
    //     document.getElementById('bubbles').style.display = 'none';
    // }
}

