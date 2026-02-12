 const noButton=document.getElementById('noButton');
 const yesButton=document.getElementById('yesButton');
 const question=document.getElementById('question');

 function moveButton(){
   const padding=150;
   const maxX = window.innerWidth - padding;
   const maxY = window.innerHeight - padding;

   const x = Math.max(0, Math.random() * maxX);
   const y = Math.max(0, Math.random() * maxY);
   
   noButton.style.position='absolute';
   noButton.style.left= `${x}px`;
   noButton.style.top = `${y}px`;

}
 
noButton.addEventListener('mouseover', moveButton);
noButton.addEventListener('touchstart', (e)=>{
   e.preventDefault();
   moveButton();
});

yesButton.addEventListener('click',()=>{  
   question.innerText="YIPPEE! See you on the 14th!";
   noButton.style.display='none';
   document.querySelector('img').src = "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExcjcxM2g2azFkeDJnNnpnZGNsN21qNmoxYms1MXo5cXdvMG55aTF0dCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/XP7vXcpGLLeRMjQHax/giphy.gif";
});