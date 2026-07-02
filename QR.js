let inp=document.getElementsByTagName('input')[0]
let button=document.getElementsByTagName('button')[0]
let image=document.getElementsByTagName('img')[0]

image.style.display="none"

button.addEventListener('click',()=>{
    if(inp.value===""){
        alert("Enter the proper Value")
    }
    else{
        image.style.display='block'
        let img_add=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inp.value}`
        image.src=img_add
    }
})