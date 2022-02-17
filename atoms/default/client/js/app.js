// if you want to import a module from shared/js then you can
// just do e.g. import Scatter from "shared/js/scatter.js"


// fade in composer images
// size: element-inline & element-supporting

// const inlineImages = document.querySelectorAll(".element-inline")
// const animateInlineImage = (() => {
//     inlineImages.forEach((el) => {
//         el.style.opacity = "0";
//         el.style.transform = "translateY(50px)"
//     })
// })

// animateInlineImage()

// let options = {
//   rootMargin: '0px',
//   threshold: 0.5
// }


//   const optionsImages = {
//   rootMargin: '0px 0px 0% 0px',
//   threshold: 0.5,
// };
// const picObserver = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting === true) {
//         entry.target.classList.add("fadeMeIn")
//         entry.target.style.opacity = "1";
//         entry.target.style.transform = "translateY(0px)"
        
//     }
//   });
// }, optionsImages);



// const init = () => {
//     // inlineImages = mainContent.querySelectorAll('.fade-me-in');
//   inlineImages.forEach((el) => {
//     picObserver.observe(el);
//   });
// }

// init()


// const newsletterButtonFunction = (() => {
//     console.log(document.querySelector('.email-sub__submit-button'))
//     document.querySelector('.email-sub__submit-button').style.backgroundColor = "red";
// })

// if (document.readyState === 'loading') { // Loading hasn't finished yet
//     console.log(document.querySelector('.email-sub__submit-button'))
//   document.addEventListener('DOMContentLoaded', newsletterButtonFunction());
// } else { // `DOMContentLoaded` has already fired
//     newsletterButtonFunction();
// }

// const newsletterButtonChange = setInterval