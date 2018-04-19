

// list of radio buttons
var defaultLanguage = 'ua';

var getCurrentLanguage = function () {
    var val = localStorage.getItem('language'); // local storage value
    if (val) {
        return val;
    } else {
        return defaultLanguage;
    }
};

function changeLanguage(el){
  /// el = https://developer.mozilla.org/en-US/docs/Web/Events/change
  localStorage.setItem("language", el.target.value); /// marking the required radio as checked
  changeDisplayLanguage();
}

function changeDisplayLanguage(){
	lang = getCurrentLanguage();
	elements = document.getElementsByClassName('lang');
  for(var i=0; i<elements.length; i++){
  	if(elements[i].classList.contains('lang-' + lang)){
    	elements[i].classList.add('visible');
    } else {
    	elements[i].classList.remove('visible');
    }
  }
};

//debugger;

(function start(){
// debugger; 
   changeDisplayLanguage();

	var radios = document.querySelectorAll('#languages input'); /// here you should use querySelectorAll
  if (radios) {
    for (var i = 0; i < radios.length; i++) {
          radios[i].addEventListener('change', changeLanguage);
      }
   }
})();

//for (var i = 0; i < langEls.length; i++) {
//  var langEl = langEls[i];

// langEl.style.display = 'inline';
//langEl.classList.add('visible');
//}

var $save = document.querySelector('#save')
 $save.addEventListener('click', changeLanguage ); // збереження мови відбувається без кнопки save )))