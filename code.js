// these are variavkes that are meant to store songs and interact with the user in the console log.
var volumeOn = true;
var volumeLevel;
var allSongs = ["495b-33d8-40cb-9316-0f6c29dc83a1-(1).mp3", "b768-8816-422d-8909-5b7c98aa94c6-(1).mp3", "dfa4-d256-4a8d-8d17-ce24db6777d9-(1).mp3", "9640-3acf-4223-adb5-d889ba376485-(1).mp3", "Possible-theme-song-(Comes-from-the-Project-Diva-series).mp3"];

function anounceReturn() {
  console.log("Returned to home screen sucessfully.");
}

function clickSound( ) {
  playSound("assets/category_app/app_button_click_1.mp3");
} 
// this line of code defines how to get to the settings options.
onEvent("settingsOptions", "click", function( ) {
  setScreen("settingsScreen");
  clickSound();
  console.log("Settings are being opened...");
});
// these lines of code control how to exit the build history.
onEvent("viewBuildHstry", "click", function( ) {
  setScreen("buildHistoryScreen");
  clickSound();
  console.log("loading build history");
});

onEvent("exitBuildInfo", "click", function ( ) {
  setScreen("introScreen");
  clickSound();
});
// these lines of code are used to return to the home screen.
onEvent("returnToHomeScreen", "click", function( ) {
  setScreen("introScreen");
  clickSound();
  anounceReturn();
});

onEvent("returnToHomeScreen2", "click", function( ) {
  setScreen("introScreen");
  clickSound();
  anounceReturn();
});

onEvent("returnToHomeScreen3", "click", function( ) {
  setScreen("introScreen");
  clickSound();
  anounceReturn();
});

onEvent("returnToHomeScreen4", "click", function( ) {
  setScreen("introScreen");
  clickSound();
  anounceReturn();
});

onEvent("returnToHomeScreen5", "click", function( ) {
  setScreen("introScreen");
  clickSound();
  anounceReturn();
});

onEvent("returnToHomeScreen6", "click", function( ) {
  setScreen("introScreen");
  clickSound();
  anounceReturn();
});

onEvent("returnToHomeScreen7", "click", function( ) {
  setScreen("introScreen");
  clickSound();
  anounceReturn();
});

onEvent("returnToHomeScreen8", "click", function( ) {
  setScreen("introScreen");
  clickSound();
  anounceReturn();
});

// this is where all of the buttons that transition to the new screens.
onEvent("infoAboutApp", "click", function( ) {
  setScreen("aboutThisApp");
  clickSound();
  console.log("Thank you for checking this out :D");
});

onEvent("letsStart", "click", function( ) {
  clickSound();
  setScreen("projectInfoScreen");
});

onEvent("continueButton1", "click", function( ) {
  setScreen("risksAndSafety");
  clickSound();
  console.log("Continuing to the next screen...");
});

onEvent("continueButton2", "click", function( ) {
  setScreen("materialsScreen");
  clickSound();
  console.log("Continuing to the next screen...");
});

onEvent("continueButton3", "click", function( ) {
  setScreen("viewRefPDFFile");
  clickSound();
  console.log("Continuing to the next screen...");
});

onEvent("continueButton4", "click", function( ) {
  setScreen("diagramsForComponentsAndThisApp");
  clickSound();
  console.log("Continuing to the next screen...");
});

onEvent("continueButton5", "click", function( ) {
  setScreen("placeholderScreen");
  clickSound();
  console.log("Continuing to the next screen...");
});

onEvent("continueButton6", "click", function ( ) {
  setScreen();
  clickSound();
  console.log("There is nothing here!");
});
// these lines of code return to the home screen.
onEvent("returnToPreviousScreen", "click", function( ) {
  setScreen("introScreen");
  clickSound();
  console.log("Continuing to the previous screen...");
});

onEvent("returnToPreviousScreen1", "click", function( ) {
  setScreen("projectInfoScreen");
  clickSound();
  console.log("Continuing to the previous screen...");
});

onEvent("returnToPreviousScreen2", "click", function( ) {
  setScreen("risksAndSafety");
  clickSound();
  console.log("Continuing to the previous screen...");
});

onEvent("returnToPreviousScreen3", "click", function( ) {
  setScreen("materialsScreen");
  clickSound();
  console.log("Continuing to the previous screen...");
});

onEvent("returnToPreviousScreen4", "click", function( ) {
  setScreen("viewRefPDFFile");
  clickSound();
  console.log("Continuing to the previous screen...");
});

onEvent("returnToPreviousScreen5", "click", function( ) {
  setScreen("diagramsForComponentsAndThisApp");
  clickSound();
  console.log("Continuing to the previous screen...");
});

// this script takes you to my YouTube channel, please subscribe :D
onEvent("youTubeIcon", "click", function( ) {
  clickSound();
  open("https://www.youtube.com/@iiIfeiithetechnerd");
  console.log("Thank you for checking out my Youtube Channel! :D");
});
// this script takes you to the reference material for my science fair project.
onEvent("viewRefPDF", "click", function( ) {
  clickSound();
  open("https://docs.google.com/document/d/1r2TdzkKmUANgOm3dWqYNmJD5mVPne4bOEwLo1NxWw_c/edit?usp=sharing");
});
// these are options that control the songs that are played.
// You can mute the songs, but no volume level controls will
//be added until future builds, hopefully in build 0.0.1.3 it will be added!
onEvent("musicOption1", "click", function( ) {
  stopSound(allSongs);
  clickSound();
  if (volumeOn == true){
    playSound("495b-33d8-40cb-9316-0f6c29dc83a1-(1).mp3", true);
    console.log("Playing The eye of the universe - Harmonious Convergence Channel...");
  }
});

onEvent("musicOption2", "click", function( ) {
  stopSound(allSongs);
  clickSound();
  if (volumeOn == true){
    playSound("dfa4-d256-4a8d-8d17-ce24db6777d9-(1).mp3", true);
    console.log("Playing XYLØ - Afterlife (Ark Patrol Remix)...");
  }
});

onEvent("musicOption3", "click", function( ) {
  stopSound(allSongs);
  clickSound();
  if (volumeOn == true){
    playSound("9640-3acf-4223-adb5-d889ba376485-(1).mp3", true);
    console.log("Playing Dion Timmer - Internet Boy (feat. Micah Martin) [Monstercat Release]...");
  }
});

onEvent("musicOption4", "click", function( ) {
  stopSound(allSongs);
  clickSound();
  if (volumeOn == true){
    playSound("b768-8816-422d-8909-5b7c98aa94c6-(1).mp3", true);
    console.log("playing Tobu - Higher...");
  }
});

onEvent("launchSequenceProjectDiva", "click", function( ) {
  stopSound(allSongs);
  clickSound();
  if (volumeOn == true){
    playSound("Possible-theme-song-(Comes-from-the-Project-Diva-series).mp3", true);
    console.log("playing Lanuch Sequence - Lemn, Project DIVA");
  }
});
//keep in mind that more songs will be added in the future!

onEvent("volumeSlider", "change", function( ) {
  checkVolume();
});

function checkVolume(){
  volumeLevel = getNumber("volumeSlider");
  if (volumeLevel <= 20){
    volumeOn = false;
  } else {
    volumeOn = true;
  }
  setText("volumeLabel", volumeLevel);
  if (volumeOn == false){
    stopSound(allSongs);
  }
}



