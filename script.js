
window.addEventListener('scroll', function(){
   let header =document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 0);
});
function toggleMenu(){
    let menuToggle = document.querySelector('.menuToggle');
    let navigation = document.querySelector('.navigation');
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
   
};
// window.onscroll = () =>{
//     menuToggle.classList.remove('active');
//     navigation.classList.remove('active');
// }
console.log("it javascript");