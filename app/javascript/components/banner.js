import Typed from 'typed.js';
import swal from 'sweetalert';

function loadDynamicBannerText() {
  new Typed('#banner-typed-text', {
    strings: ["Change your life", "Learn to code"],
    typeSpeed: 100,
    loop: true
  });
}


function bindSweetAlertButtonDemo() {
  const swalButton = document.getElementById('sweet-alert-demo');
  if (swalButton) { // protect other pages
    swalButton.addEventListener('click', () => {
      swal({
        title: "A nice alert",
        text: "This is a great alert, isn't it?",
        icon: "success"
      });
    });  
  }
}

export { loadDynamicBannerText,  bindSweetAlertButtonDemo};