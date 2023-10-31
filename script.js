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

function handleCloakCommand(subcommand) {
    const title = document.title;
    const favicon = document.querySelector("link[rel*='icon']");

    switch (subcommand.toLowerCase()) { // Convert to lowercase for case insensitivity
        case 'google drive':
            document.title = 'My Drive - Google Drive';
            if (favicon) {
                favicon.href = 'https://www.gstatic.com/images/branding/product/2x/hh_drive_32dp.png'; // Google Drive icon
            }
            // Display a success message
            terminal.innerHTML += "Successfully cloaked to Google Drive.<br>";
            break;

        case 'google classroom':
            document.title = 'Home';
            if (favicon) {
                favicon.href = 'https://www.gstatic.com/classroom/logo_square_rounded.svg'; // Google Classroom icon
            }
            // Display a success message
            terminal.innerHTML += "Successfully cloaked to Google Classroom.<br>";
            break;

        case 'google docs':
            document.title = 'Untitled document - Google Docs';
            if (favicon) {
                favicon.href = 'https://www.gstatic.com/images/branding/product/1x/docs_2020q4_48dp.png'; // Google Docs icon
            }
            // Display a success message
            terminal.innerHTML += "Successfully cloaked to Google Docs.<br>";
            break;

        case 'google slides':
            document.title = 'Untitled presentation - Google Slides';
            if (favicon) {
                favicon.href = 'https://www.gstatic.com/images/branding/product/1x/slides_2020q4_48dp.png'; // Google Slides icon
            }
            // Display a success message
            terminal.innerHTML += "Successfully cloaked to Google Slides.<br>";
            break;

        case 'google search':
            document.title = 'Google';
            if (favicon) {
                favicon.href = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png'; // Google icon
            }
            // Display a success message
            terminal.innerHTML += "Successfully cloaked to Google Search.<br>";
            break;

        default:
            terminal.innerHTML += "Invalid subcommand for 'cloak'. Please select one of the available options.<br>";
            break;
    }
}


// ... (previous code)

function handleInput(e) {
    if (e.key === 'Enter') {
        const inputText = inputField.value.trim().toLowerCase(); // Convert input to lowercase
        terminal.innerHTML += `C:/${inputField.value}<br>`; // Display the original input (with proper case)

        const inputArray = inputText.split(' ');
        const command = inputArray[0];

        if (command === 'cloak') {
            const subcommand = inputArray.slice(1).join(' ');
            if (!subcommand) {
                terminal.innerHTML += "Tab Cloak:<br>Pick one of the tab cloak presets:<br>- Google Drive<br>- Google Classroom<br>- Google Docs<br>- Google Slides<br>- Google Search<br>";
            } else {
                handleCloakCommand(subcommand);
            }
        } else if (inputText === 'help') {
            terminal.innerHTML += "List of commands:<br>help - Display this message<br>gamelist - List all games<br>play gamename - Launch a game<br>cloak - Modify tab settings<br>";
        } else if (inputText === 'gamelist') {
            // You can add code here to list the games
            terminal.innerHTML += "List of games :<br>1v1.lol<br>Slope<br>";
        } else {
            terminal.innerHTML += "Command not recognized. Type 'help' for a list of commands.<br>";
        }

        inputField.value = '';
        terminal.scrollTop = terminal.scrollHeight;
    }
}

// ... (rest of the code)


displayMessage();
