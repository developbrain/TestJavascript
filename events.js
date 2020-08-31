//Alert handler
function handleAlert(){
    if('alert' in window)
        console.log('Alert is in window object');
}

//handleAlert();

//Prompt handler
function handlePrompt(){

}

document.addEventListener(() => {
    if('alert' in window)
        console.log('Alert is in window object');
});
