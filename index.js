
//ELEVATOR JS LIBRERIA
window.onload = ()=>{
    const elevator = new Elevator({
      element: document.querySelector(".sube"),
      mainAudio: "./Sounds/bossa.mp3",
      endAudio: "./Sounds/fm-elevator-bell-41820.mp3",
      duration: 9000 
    });
};


