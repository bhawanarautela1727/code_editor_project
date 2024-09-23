let Output = document.querySelector("#Output");
let allInput = document.querySelectorAll(".leftPart textarea");



let htmlCode,cssCode,jsCode ='';
allInput.forEach((el,index) =>{

    el.addEventListener("keyup",()=>
    {
        if(index==0)
        {
            htmlCode = el.value;
        }
        if(index==1)
        {
            cssCode = el.value;
        }
        if(index==2)
            {
                jsCode = el.value;
            }
            Output.contentDocument.body.innerHTML=htmlCode;
            Output.contentDocument.head.innerHTML=`<style> ${cssCode}</style`;
            Output.contentWindow.eval(jsCode);
        
    })
})
    






