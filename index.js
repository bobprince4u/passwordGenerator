// Define password length
let passwordLength = 15;

// Initialize toggle states
let useSymbole = true;
let useNumber = true;

// Function to generate password
function generatePassword(useSymbole, useNumber) {
  // Define possible characters
  let possibleCharacter = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  // Add numbers if toggle is on
  if (useNumber) {
    possibleCharacter += "0123456789";
  }

  // Add symbols if toggle is on
  if (useSymbole) {
    possibleCharacter += "~`!@#$%^&*()_+-={}[]:;<>?,./";
  }

  // Generate password
  let password1 = "";
  let password2 = "";

  for (let i = 0; i < passwordLength; i++) {
    const randomIndex1 = Math.floor(Math.random() * possibleCharacter.length);
    const randomCharacter1 = possibleCharacter[randomIndex1];

    const randomIndex2 = Math.floor(Math.random() * possibleCharacter.length);
    const randomCharacter2 = possibleCharacter[randomIndex2];

    password1 += randomCharacter1;
    password2 += randomCharacter2;
  }

  return {
    password1: password1,
    password2: password2,
  };
}

// Get toggle buttons and generate button
const symboleToggleBtn = document.getElementById("toggle-symbols-btn");
const numberToggleBtn = document.getElementById("toggle-numbers-btn");
const generateBtn = document.getElementById("generate-btn");

// Add event listeners to toggle buttons
symboleToggleBtn.addEventListener("click", () => {
  useSymbole = !useSymbole;
  symboleToggleBtn.textContent = useSymbole ? "Symbols: ON" : "Symbols: OFF";
});

numberToggleBtn.addEventListener("click", () => {
  useNumber = !useNumber;
  numberToggleBtn.textContent = useNumber ? "Numbers: ON" : "Numbers: OFF";
});

// Add event listener to generate button
generateBtn.addEventListener("click", () => {
  const passwords = generatePassword(useSymbole, useNumber);
  document.getElementById("password-1").value = passwords.password1;
  document.getElementById("password-2").value = passwords.password2;
});

function copyToClipboard(password1, password2) {
   const copyText = document.getElementById("copy-btn-1")
   const copyText1 = document.getElementById("copy-btn-2")
   navigator.clipboard.writeText(copyText.value).then(() => {
    console.log('Password copied to clipboard:', copyText.value)
    alert('Password copied to clipboard')
   })
 .catch((err) => {
        console.error('Error copying password to clipboard:', err)
    })

}

document.getElementById("copy-btn-1").addEventListener('click', () => {
    copyToClipboard('password1')
})

document.getElementById("copy-btn-2").addEventListener('click', () => {
    copyToClipboard('password2')
})