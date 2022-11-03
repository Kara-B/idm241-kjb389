// Step 1: Defining Variables
// Have a variable for the button that is clicked, a button to store the text that changes, and a variable to control the bookmark animation being played

  const saveButton = document.querySelector('.js-save-button')
  const saveState = document.querySelector('.js-save-state')
  const saveStateDiv = document.querySelector ('.textSave')

// Step 2: Add event listener so button knows what function to perform when clicked

saveButton.addEventListener('click', function() {

    function changeTogif(){
      document.getElementById('js-bookmark-animation').src="images/bookmark_stretch.gif";
      document.getElementById('js-bookmark-animation').classList.add="showAnimation";
    }

    function changeToSavedIcon (){
      saveButton.src="images/save-recipe-icon-checked.svg";
    }

    function changeToUnsavedIcon(){
      saveButton.src="images/save-recipe-icon.svg";
    }

    function changeBookmarkClass() {
      var bookmark = document.getElementById("js-bookmark-animation");
      bookmark.classList.toggle("showAnimation");
    }   

    function changeBookmarkClassBack(){
      var bookmark = document.getElementById("js-bookmark-animation");
      bookmark.classList.toggle("showAnimation");
    }

    changeBookmarkClass();
    changeTogif();
    setTimeout(changeBookmarkClassBack, 1100);
  

    function changeSaveStatus () {

      if (saveState.textContent == 'Saved!') {
        saveState.textContent = 'Save'
        changeToUnsavedIcon();
      } else {
        saveState.textContent = 'Saved!'
        changeToSavedIcon();
    }
    saveState.classList.toggle = ('recipeSaved')
    }

    setTimeout(changeSaveStatus, 500);
 
  
  })


  