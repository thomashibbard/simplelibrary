#Object Oriented Library Test

I made this simple library so I could have a super light weight implementation of JavaScript CSS settings, a simple modal, and some other basic functionality. The selection is all based on `document.querySelector`. 

###CSS object style JavaScipt format

    _('some-class').css({display: 'block', color: 'red' /*etc.*/});

###Modal creation is done by putting the modal on the HTML page

    <div id="modal" data-modal-title="sample title" modal-type="alert">
    <h3>Headline One</h3>    
	    <p>
	      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
	    </p>
	 </div>

	 And in the JS

	 _('#modal').modal();