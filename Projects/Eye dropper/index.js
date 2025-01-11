const imageInput = document.getElementById("imageInput");
const showImageDiv = document.getElementById("showImageDiv");
const clearImageBtn = document.getElementById("clearImageBtn");
const PickColorBtn = document.getElementById("PickColorBtn");
const ColorCodeShow = document.getElementById("resultCode");
const showImageOutput = document.getElementById("showImage");
const resultBox = document.getElementById("result-box");


      // Function to check if the user is on a mobile device
      function isMobileDevice() {
        return /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      }

// Eyedrop function on button
PickColorBtn.addEventListener("click", async (event) => {
  // Prevent the default form submission action (page refresh)
  event.preventDefault();
  if (isMobileDevice()) {
    event.preventDefault(); // Prevent the default behavior
    alert("The Eyedropper API is only supported on desktops. Please use a desktop for this feature.");
  } 

  if (!window.EyeDropper) {
    ColorCodeShow.textContent =
      "Your browser does not support the EyeDropper API";
    return;
  }

  const eyeDropper = new EyeDropper();

  try {
    const result = await eyeDropper.open();
    const colorCode = result.sRGBHex;
    // Pushing the Value into the HTML
    ColorCodeShow.textContent = " ";
    ColorCodeShow.textContent = colorCode;
    resultBox.style.backgroundColor = colorCode;
  } catch (error) {
    // ColorCodeShow.textContent = error;
    console.log(error);
  }

  console.log("working");
});

// Getting image from URl
    // Event listener for file input
    imageInput.addEventListener('change', (event) => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();

        reader.onload = function (e) {
          // Create an image element
          const img = document.createElement('img');
          img.src = e.target.result;
          img.alt = "Uploaded Image";
          img.classList.add('w-96', 'h-auto', 'object-contain'); // Tailwind classes for image styling
          
          // Clear previous image and display the new one
          showImageDiv.innerHTML = '';
          showImageDiv.appendChild(img);
        };

        // Read the file as a data URL
        reader.readAsDataURL(file);
      }
    });
// // Clearing the image
clearImageBtn.addEventListener("click", () => {
  showImageDiv.innerHTML = " ";
  
});