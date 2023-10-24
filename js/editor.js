$(document).ready(function () {
    window.currentlySelectedObject = null;
    // Function to toggle the panel
    $('#toggleButton').click(function () {
        $('.side-panel').toggleClass('open');
    });

    var objectLists = {};
    var objectCount = {};
    // Function to update slider value text
    function updateSliderValue(sliderId, valueId) {
        const slider = document.getElementById(sliderId);
        const value = document.getElementById(valueId);
        value.textContent = slider.value;
        var selectObject = window.currentlySelectedObject;
        //console.log(`${slider}, ${sliderId}, ${slider.value}`)
        switch (sliderId) {
            case "slider1":
           // console.log(selectObject);  
            //$(selectObject).attr('width',slider.value);
   
            try{
                if(!window.currentlySelectedObject){
                    console.log("welp.");
                }else{
                   // console.log("ok");
                    var gameobject = objectLists[`${window.currentlySelectedObject.getAttribute("object_attach")}`];
                    //console.log(gameobject);
                    gameobject.setAttribute("width",slider.value);
                    
                    //console.log(`.${window.currentlySelectedObject.getAttribute("object_attach")}`);
                }
               
            }catch{

            }
            break;
            case "slider2":
           // console.log(selectObject);  
            //$(selectObject).attr('width',slider.value);
   
            try{
                if(!window.currentlySelectedObject){
                    console.log("welp.");
                }else{
                   // console.log("ok");
                    var gameobject = objectLists[`${window.currentlySelectedObject.getAttribute("object_attach")}`];
                    //console.log(gameobject);
                    gameobject.setAttribute("height",slider.value);
                    
                    //console.log(`.${window.currentlySelectedObject.getAttribute("object_attach")}`);
                }
               
            }catch{

            }
            break;
            case "slider3":
           // console.log(selectObject);  
            //$(selectObject).attr('width',slider.value);
   
            try{
                if(!window.currentlySelectedObject){
                    console.log("welp.");
                }else{
                   // console.log("ok");
                    var gameobject = objectLists[`${window.currentlySelectedObject.getAttribute("object_attach")}`];
                    //console.log(gameobject);
                    gameobject.setAttribute("length",slider.value);
                    
                    //console.log(`.${window.currentlySelectedObject.getAttribute("object_attach")}`);
                }
               
            }catch{

            }
            break;
        
            default:
                break;
        }
    }

    // Initial setup
    updateSliderValue('slider1', 'slider1-value');
    updateSliderValue('slider2', 'slider2-value');
    updateSliderValue('slider3', 'slider3-value');

    // Add event listeners for slider changes
    $('#slider1').on('input', function () {
        updateSliderValue('slider1', 'slider1-value');
    });

    $('#slider2').on('input', function () {
        updateSliderValue('slider2', 'slider2-value');
    });
    $('#slider3').on('input', function () {
        updateSliderValue('slider3', 'slider3-value');
    });
    document.addEventListener("DOMContentLoaded", function() {
        const folders = document.querySelectorAll("#file-tree .folder");
        
        folders.forEach(folder => {
            folder.addEventListener("click", () => {
                folder.nextElementSibling.classList.toggle("visible");
            });
        });
    });
    
   
   var gamescene = document.querySelector('.game-scene');
   gamescene.querySelectorAll('.gameobject').forEach((gameobject)=>{
    let index = 0; 
    let objectText;
    function dothingwithcount(){
        if(objectLists[$(gameobject).text()+`-${index}`]){
            index++;
            dothingwithcount();
        }else{
            objectLists[$(gameobject).text()+`-${index}`] = gameobject;
            objectText = `${$(gameobject).text()}-${index}`;
        
        }
    }
    dothingwithcount();
    $('.f_workspace').append(`<li>
                    <ul>
                        <li><span class="object" object_attach="${objectText}">${$(gameobject).text()}</span></li>
                        
                    </ul>
                </li>`);
   });
   let prevObj;  
   $(".object").click((e)=>{
    if(!prevObj){
        window.currentlySelectedObject = e.target;
        console.log('e');
        //console.log(window.currentlySelectedObject);
        let parelem = window.currentlySelectedObject.parentElement.parentElement;
        console.log(parelem.style);
        parelem.style.color = "green"
        prevObj = parelem;
    }else{
        prevObj.style.color = "";
        window.currentlySelectedObject = e.target;
        console.log('e');
        //console.log(window.currentlySelectedObject);
        let parelem = window.currentlySelectedObject.parentElement.parentElement;
        console.log(parelem.style);
        parelem.style.color = "green"
        prevObj = parelem;
    }
    window.currentlySelectedObject = e.target;
    console.log('e');
    //console.log(window.currentlySelectedObject);
    let parelem = window.currentlySelectedObject.parentElement.parentElement;
    console.log(parelem.style);
    parelem.style.color = "green";
})
    
    


});
