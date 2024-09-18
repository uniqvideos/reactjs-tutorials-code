function manipulateElements(){
    // let newListElement = document.createElement("li")

    // console.log( newListElement );

    // newListElement.innerText = "<a>Link</a>Item-5"
    // newListElement.innerHTML = "<a>Link</a>Item-5"
    // newListElement.textContent = "<a>Link</a>Item-5"
    
    let newListElement = document.createElement("li")
    
    let input = document.querySelector("input")
    
    // console.log( input.value );
    
    newListElement.innerText = input.value
    
    // console.log( newListElement );

    let orderList = document.querySelector("ol")

    // orderList.append( "Text Node", newListElement )
    
    // orderList.insertBefore( newListElement, orderList.children[2] )
    // orderList.replaceChild( newListElement, orderList.children[2] )
    // orderList.removeChild( orderList.children[0]  )
    // orderList.remove()
    
    //Dynamic Cascading
    newListElement.style.color = "green"
    newListElement.style.textShadow = "10px 10px 1px white"
    
    orderList.appendChild( newListElement )
    // orderList.prepend("Text Node", newListElement )
  
}