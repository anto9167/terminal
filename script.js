const terminal = document.getElementById('output');
const inputField = document.getElementById('input');

const welcomeMessage = [
    "© Blyzio Corp. 2023. All Rights Reserved",
    "C:/ Running index.html...",
    "C:/ Finding user log...",
    "C:/ Launching...",
    "  ██╗     ████████╗███████╗██████╗ ███╗   ███╗██╗███╗   ██╗ █████╗ ██╗     ",
    " ██╔╝     ╚══██╔══╝██╔════╝██╔══██╗████╗ ████║██║████╗  ██║██╔══██╗██║     ",
    "██╔╝         ██║   █████╗  ██████╔╝██╔████╔██║██║██╔██╗ ██║███████║██║     ",
    "╚██╗         ██║   ██╔══╝  ██╔══██╗██║╚██╔╝██║██║██║╚██╗██║██╔══██║██║     ",
    " ╚██╗███████╗██║   ███████╗██║  ██║██║ ╚═╝ ██║██║██║ ╚████║██║  ██║███████╗",
    "  ╚═╝╚══════╝╚═╝   ╚══════╝╚═╝  ╚═╝╚═╝     ╚═╝╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝╚══════╝",
    "C:/ Welcome to Terminal. Type 'help' for a list of commands."
];









let currentMessageIndex = 0;
let typingSpeed = 20; // Typing speed in milliseconds

function displayMessage() {
    if (currentMessageIndex < welcomeMessage.length) {
        if (currentMessageIndex >= 4 && currentMessageIndex <= 9) {
            setTimeout(() => {
                terminal.innerHTML += welcomeMessage[currentMessageIndex] + "<br>";
                currentMessageIndex++;
                displayMessage();
            }, 15); // 0.1-second delay for ASCII art
        } else {
            const message = welcomeMessage[currentMessageIndex];
            let charIndex = 0;

            function typeCharacter() {
                if (charIndex < message.length) {
                    terminal.innerHTML += message[charIndex];
                    charIndex++;
                    setTimeout(typeCharacter, typingSpeed);
                } else {
                    terminal.innerHTML += "<br>";
                    currentMessageIndex++;
                    setTimeout(displayMessage, 350); // 1-second delay for other messages
                }
            }

            typeCharacter();
        }
    } else {
        inputField.addEventListener('keydown', handleInput);
    }
}




// ... (previous code)




// ... (rest of the code)


displayMessage();
