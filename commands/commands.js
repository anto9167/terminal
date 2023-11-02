function handleInput(e) {
    if (e.key === 'Enter') {
        const inputText = inputField.value.trim().toLowerCase(); // Convert input to lowercase
        terminal.innerHTML += `C:/user/${inputField.value}<br>`; // Display the original input (with proper case)

        const inputArray = inputText.split(' ');
        const command = inputArray[0];

        if (command === 'cloak') {
            const subcommand = inputArray.slice(1).join(' ');
            if (!subcommand) {
                terminal.innerHTML += "Tab Cloak:<br>Pick one of the tab cloak presets:<br>- Google Drive<br>- Google Classroom<br>- Google Docs<br>- Google Slides<br>- Google Search<br>";
            } else {
                handleCloakCommand(subcommand);
            }
        } else if (command === 'play') { // Check for the "play" command
            const gameName = inputArray.slice(1).join(' ');
            if (gameName) {
                terminal.innerHTML += `Launching ${gameName}...<br>`; // Display a message for launching the game
                // Add code here to actually launch the game based on the gameName
            } else {
                terminal.innerHTML += "Please specify a game to play. For example, 'play gamename'.<br>";
            }
        } else if (inputText === 'help') {
            terminal.innerHTML += "List of commands:<br>help - Display this message<br>gamelist - List all games<br>play gamename - Launch a game<br>cloak - Modify tab settings<br>";
        } else if (inputText === 'gamelist') {
            // You can add code here to list the games
            terminal.innerHTML += "List of games :<br>1v1.lol<br>Slope<br>";
        } else if (command === 'watch' && inputArray[1] === 'fnaf') {
            const iframe = document.getElementById('websiteIframe');
            iframe.style.display = 'block'; // Display the iframe element
            iframe.src = 'https://www.fnaf.mov/'; // Set the iframe source to the desired website URL
        } else {
            terminal.innerHTML += "Command not recognized. Type 'help' for a list of commands.<br>";
        }

        inputField.value = '';
        terminal.scrollTop = terminal.scrollHeight;
    }
}