
document.addEventListener("DOMContentLoaded", ()=>{
    //all code must be written instde this function for some reason
    //drop down menu/expansion code
               const moreButtons = document.querySelectorAll('.more-button');
const elements = document.querySelectorAll('.element');
console.log("more buttons is ", [] );
Array.prototype.slice.call(moreButtons).map( (m, i) => {m.addEventListener('click', () => {
elements[i].classList.toggle('expanded');
}) 
});



console.log("hello am js1 from tour is every thing ok ");


//scale up in size on hover

document.addEventListener("DOMContentLoaded", () =>{
            
            console.log( 'hello' );
            
            // Add event listeners to attraction images for hover effects
const attractions = document.querySelectorAll('.attraction');

attractions.forEach((attraction) => {
    attraction.addEventListener('mouseover', () => {
        attraction.style.transform = 'scale(1.05)';
    });

    attraction.addEventListener('mouseout', () => {
        attraction.style.transform = 'scale(1)';
    });
});
            
        } );


               
           });
            
