let ClickTime = -1;
let something = document.getElementsByClassName("Home_Image");
function Click(){
    ClickTime++;  
    console.log(ClickTime)
    switch (ClickTime) {
        case 3:
            alert("Noting.")
            break;
        case 4:
            alert("Noting.")
            break;
        case 5:
            alert("Noting Here.")
            break;
        case 6:
            alert("Bro Don't Click Noting Here.")
            break;
        case 7:
            alert("If you click one more time I will close this website.")
            break;
        case 8:
            window.close();
            break;
    }
}
