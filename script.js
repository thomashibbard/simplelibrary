window.onload = function(){
  var triggermodal = document.getElementById("modaltrigger");
  modaltrigger.addEventListener("click", makeModal);
  function makeModal(modal){
    _("#modal").modal();
  }
  var toggletrigger = document.getElementById("toggletrigger");
  toggletrigger.addEventListener("click", toggleDiv);
  function toggleDiv(modal){
    _("#somediv").toggle();
  }
};
var _ = function(selector){
   var meta = {
     version: 0.0,
     author: 'thomas hibbard'
   };
 
   if (selector) {
     this.collection = [].slice.call(document.querySelectorAll(selector), null);
      if (window === this) {
        return new _(selector);
      }
      return this;
   } else {
      return meta;
   }  
};
_.prototype = {
  modal: function (size) {
    size = size || 'med';
    var cssTarget = this.collection;
    var localTarget = cssTarget[0];
    var html = localTarget.querySelector('.modal-body') ? localTarget.querySelector('.modal-body').innerHTML : localTarget.innerHTML;
    var title = localTarget.dataset.modalTitle || '';
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    var modalWidth = windowWidth * 0.5;
    var modalHeight = windowHeight * 0.4;
    var modalLeft = (windowWidth - modalWidth) / 2;
    var modalTop = (windowHeight - modalHeight + 15) / 2;  
    var cssObj = {
                   position: 'absolute',
                   top: modalTop + 'px',
                   left: modalLeft + 'px',
                   width: modalWidth + 'px', 
                   height: modalHeight + 'px',
                   display: 'block',
                 };
    localTarget.innerHTML = '';
    localTarget.innerHTML = '<div class="modal-close-container"><span class="modal-header">' + title + '</span><span class="modal-close-button">&times;</span></div><div class="modal-body">' +  html + '</div>'
    _.prototype.css(cssObj, cssTarget);
    var closeTarget = localTarget.querySelector('.modal-close-button');    
    closeTarget.addEventListener('click', function(){
       _.prototype.css({display: 'none'}, cssTarget);
    });
    return this;
  },
  show: function(){
    var target = this.collection;
    target.forEach(function(elm){
      elm.style.display = 'block';
    });
    return this;
  },
  hide: function(){
    var target = this.collection;
    target.forEach(function(elm){
      elm.style.display = 'none';
    });
    return this;
  },
  toggle: function(){
    var target = this.collection;
    target.forEach(function(elm){
      window.getComputedStyle(elm).display === 'none' 
        ? elm.style.display = 'block' 
        : elm.style.display = 'none';

    });    
    return this;
  },
  css: function(cssObj, target){
    var target = target || this.collection;
    target.forEach(function(elm){
      for (var prop in cssObj){
        elm.style[prop] = cssObj[prop];
      }      
    })
    return this;
  },
  wait: function(time, callback){
    this.isWaiting = true;
    var timeout = window.setTimeout(function(){
      callback();
      this.isWaiting = false;
    }, time);
    return this;
  }
};



