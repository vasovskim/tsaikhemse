document.addEventListener("DOMContentLoaded", function() {
  var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));

  if ("IntersectionObserver" in window) {
    let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          let lazyImage = entry.target;
          lazyImage.src = lazyImage.dataset.src;
          // lazyImage.srcset = lazyImage.dataset.srcset;
          lazyImage.classList.remove("lazy");
          lazyImageObserver.unobserve(lazyImage);
        }
      });
    });

    lazyImages.forEach(function(lazyImage) {
      lazyImageObserver.observe(lazyImage);
    });
  } else {
    // Possibly fall back to a more compatible method here
  }
});

//განსაზღვრეთ ელემენტი, რომელზე კლიკითაც უნდა მოხდეს მენიუში დამატება
let add_buttons = document.getElementsByClassName('button_style');

let b1 = add_buttons.length;
for (let i = 0; i < b1; i++) {
	add_buttons[i].addEventListener('click', function(){

		this.classList.toggle('added');
		if(this.classList.contains('added')){
		this.textContent='დამატებულია'
	} else {
		this.textContent = 'დამატება';
	}
	});
}

/*let menu_button = document.getElementsByClassName('burger')[0];
let menu_list = document.getElementsByClassName('burger-menu-list')[0];
menu_button.addEventListener('click', function(event){

  if(menu_button.className.indexOf('active') > -1){
    menu_button.className = 'burger';
    menu_list.className = 'burger-menu-list'
  }else{

    menu_button.className = 'burger active';
    menu_list.className = menu_list.className  + ' active'
  }
});*/
