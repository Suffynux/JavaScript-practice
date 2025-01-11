const colorPickerBtn = document.getElementById("colorPicker");

colorPickerBtn.addEventListener("click",  () => {
    if (!window.EyeDropper) {
        resultElement.textContent =
          "Your browser does not support the EyeDropper API";
        return;
      }
    
      const eyeDropper = new EyeDropper();
    
      eyeDropper
        .open()
        .catch((e) => {
          resultElement.textContent = e;
        });
});