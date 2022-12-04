// Step 1: Defining Variables
// Have a variable for the button that is clicked, a button to store the text that changes, and a variable to control the bookmark animation being played
console.log ("Script is loading")
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
    saveState.classList.toggle = ("recipeSaved");
    }

    setTimeout(changeSaveStatus, 500);
 
  
  })


  const infoButton = document.getElementById('js-nutritional-info-icon');
  const flipCard = document.querySelector('.flip-card-inner');
  const backButton = document.getElementById('js-backButton');
  

  infoButton.addEventListener('click', () => {

    function changeFlipCardClass() {
      const flipCard = document.querySelector('.flip-card-inner');
      flipCard.classList.add("flip-card-anim");
    } 

    function hideImage(){
      const recipeImage = document.querySelector('.js-recipe-image-front');
      recipeImage.classList.add("display-none");
    }

    changeFlipCardClass();
    setTimeout(hideImage, 300); 

  });
  
  backButton.addEventListener('click', () => {

    function changeFlipCardClassBack(){
      const flipCard = document.querySelector('.flip-card-inner');
      flipCard.classList.toggle("flip-card-anim");
    }
    changeFlipCardClassBack();
    function showImage(){
      const recipeImage = document.querySelector('.js-recipe-image-front');
      recipeImage.classList.remove("display-none");
    }

    showImage();

  });
  