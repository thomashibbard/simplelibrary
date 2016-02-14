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
  resizeModal: function(){
    var windowDimensions = _.prototype.getWindowDimensions();
    var modalWidth = windowDimensions.width * 0.5;
    var modalHeight = windowDimensions.height * 0.5;
    var modalLeft = (windowDimensions.width - modalWidth) * 0.5;
    var modalTop = (windowDimensions.height - modalHeight - 25) * 0.5; 
    modalCss = {
      top: modalTop + 'px',
      left: modalLeft + 'px',
      width: modalWidth + 'px',
    };
    backdropCss = windowDimensions;
    _.prototype.css(backdropCss, arguments[0]);
    _.prototype.css(modalCss, arguments[1]);
  },
  getWindowDimensions: function(){
    return {
      width: window.innerWidth,
      height: window.innerHeight
    };
  },
  throttle: function(func, wait){
    _.prototype.throttling = false;
    return (function() {
      if (!_.prototype.throttling) {
        func.call(arguments);
        _.prototype.throttling = true;
        window.setTimeout(function() {
          _.prototype.throttling = false;
        }, wait);
      };
    })();    
  },  
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
    var modalLeft = (windowWidth - modalWidth) * 0.5;
    var modalTop = (windowHeight - modalHeight - 25) * 0.5;  
    var modalCssObj = {
      position: 'absolute',
      top: modalTop + 'px',
      left: modalLeft + 'px',
      width: modalWidth + 'px', 
      display: 'block',
      zIndex: 1000
    };
    var backdropCssObj = {
      position: 'absolute', 
      top: 0,
      left: 0,
      width: windowWidth + 'px',
      height: windowHeight + 'px',
      background: 'rgba(0, 0, 0, 0.8)',
      display: 'block',
      zIndex: 999
    };
    var backdrop = document.createElement('div');
    backdrop.id = 'modal-backdrop';
    _.prototype.css(backdropCssObj, backdrop);
    document.body.appendChild(backdrop);
    localTarget.innerHTML = '<div class="modal-close-container"><span class="modal-header"><b>' + title + '</b></span><span class="modal-close-button">&times;</span></div><div class="modal-body">' +  html + '</div>';
    _.prototype.css(modalCssObj, cssTarget);
    var closeTarget = localTarget.querySelector('.modal-close-button');    
    closeTarget.addEventListener('click', function(){
      _.prototype.css({display: 'none'}, cssTarget);
      var modalBackdrop = document.getElementById('modal-backdrop')
      document.body.removeChild(modalBackdrop);
    });
    window.onresize = function(){
      _.prototype.throttle(function(){
        _.prototype.resizeModal(backdrop, cssTarget);
      }, 50);
    };
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
      window.getComputedStyle(elm).display === 'none' ? elm.style.display = 'block' : elm.style.display = 'none';
    });    
    return this;
  },
  css: function(cssObj, target){
    target = target || this.collection;
    if (Array.isArray(target)){
      target.forEach(function(elm){
        for (var prop in cssObj){
          elm.style[prop] = cssObj[prop];
        }      
      });      
    }else{
      for (var prop in cssObj){
        target.style[prop] = cssObj[prop];
      }        
    }

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



