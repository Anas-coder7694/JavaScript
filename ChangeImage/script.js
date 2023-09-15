function ToggleImage() {
    var img = document.getElementById('myImage');
    
    // Check the current source and toggle it
    if (img.src.endsWith('image1.jpg')) {
        img.src = './image/image2.jpg'; // Change to your second image source
    } else {
        img.src = './image/image1.jpg'; // Change to your first image source
    }
}

function ChangeImage() {
    var a = document.getElementById('myImage');
    
    
   
    a.src = './image/image2.jpg'; 
    
}