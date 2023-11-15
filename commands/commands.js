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
        } else if (command === 'exit') {
            terminal.innerHTML += 'Exiting game...<br>';
            
            // Remove the iframe from the DOM
            const gameFrame = document.querySelector('iframe');
            if (gameFrame) {
                gameFrame.parentNode.removeChild(gameFrame);
            } else {
                terminal.innerHTML += 'No game is currently running.<br>';
            }
        } else if (command === 'play') {
            const gameName = inputArray.slice(1).join(' ');
            if (gameName) {
                terminal.innerHTML += `Launching ${gameName}...<br>`;
                const gameFrame = document.createElement('iframe');
                gameFrame.style.width = '1000px';
                gameFrame.style.height = '600px'; // Adjust the height as needed
        
                if (gameName.toLowerCase() === '2048') {
                    // Set the iframe source for 2048
                    gameFrame.src = 'gfiles/html5/2048/index.html';
                } else if (gameName.toLowerCase() === 'a dark room') {
                    // Set the iframe source for A Dark Room
                    gameFrame.src = 'gfiles/html5/adarkroom/index.html';
                    setTimeout(() => {
                        terminal.innerHTML += '  Press "lights off" if you can\'t see anything.<br>';
                    }, 2500);
                } else if (gameName.toLowerCase() === 'ascii space') {
                    gameFrame.src = 'gfiles/html5/asciispace/index.html'
                } else if (gameName.toLowerCase() === 'asteroids') {
                    gameFrame.src = 'gfiles/html5/asteroids/index.html'
                } else if (gameName.toLowerCase() === 'astray') {
                    gameFrame.src = 'gfiles/html5/astray/index.html'
                } else if (gameName.toLowerCase() === 'back country') {
                    gameFrame.src = 'gfiles/html5/backcountry/index.html'
                } else if (gameName.toLowerCase() === 'black hole square') {
                    gameFrame.src = 'gfiles/html5/blackholesquare/index.html'
                } else if (gameName.toLowerCase() === 'bounce back') {
                    gameFrame.src = 'gfiles/html5/bounceback/index.html'
                } else if (gameName.toLowerCase() === 'breaklock') {
                    gameFrame.src = 'gfiles/html5/breaklock/index.html'
                } else if (gameName.toLowerCase() === 'breakout') {
                    gameFrame.src = 'gfiles/html5/breakout/index.html'
                } else if (gameName.toLowerCase() === 'captain callisto') {
                    gameFrame.src = 'gfiles/html5/captaincallisto/index.html'
                } else if (gameName.toLowerCase() === 'chess') {
                    gameFrame.src = 'gfiles/html5/chess/index.html'
                } else if (gameName.toLowerCase() === 'choroma incident') {
                    gameFrame.src = 'gfiles/html5/choromaincident/index.html'
                } else if (gameName.toLowerCase() === 'chrome dino') {
                    gameFrame.src = 'gfiles/html5/chromedino/index.html'
                } else if (gameName.toLowerCase() === 'connect 3') {
                    gameFrame.src = 'gfiles/html5/connect3/index.html'
                } else if (gameName.toLowerCase() === 'crossy road') {
                    gameFrame.src = 'gfiles/html5/crossyroad/index.html'
                } else {
                    terminal.innerHTML += `Game '${gameName}' not found.<br>`;
                    return;
                }
        
                // Clear existing content and append the iframe to the terminal
                terminal.innerHTML = '';
                terminal.appendChild(gameFrame);
            } else {
                terminal.innerHTML += 'Please specify a game to play. For example, \'play 2048\'.<br>';
            }
        } else if (inputText === 'help') {
            const helpMessage = document.createElement('div');
            helpMessage.textContent = "List of commands:\nhelp - Display this message\ngamelist - List all games\nplay gamename - Launch a game\ncloak - Change tab name and image";
            terminal.appendChild(helpMessage);
        } else if (inputText === 'gamelist') {
            const gameList = document.createElement('div');
            gameList.textContent = "List of games :\n2048\nA Dark Room\nASCII Space\nAsteroids\nAstray\nBack Country\nBlack Hole Square\nBounce Back\nBreaklock\nBreakout\nCaptain Callisto\nChess\nChroma Incident\nChrome Dino\nConnect 3\nCrossy Road\nMORE GAMES COMING SOON!!!";
            terminal.appendChild(gameList);
        } else if (command === 'watch' && inputArray[1] === 'fnaf') {
            const iframe = document.createElement('iframe');
            iframe.style.width = '1000px';
            iframe.style.height = '600px'; // Adjust the height as needed
            iframe.style.display = 'block'; // Display the iframe element
            iframe.src = 'https://www.fnaf.mov/'; // Set the iframe source to the desired website URL
        
            // Clear existing content and append the iframe to the terminal
            terminal.innerHTML = '';
            terminal.appendChild(iframe);
        } else {
            terminal.innerHTML += "Command not recognized. Type 'help' for a list of commands.<br>";
        }

        inputField.value = '';
        terminal.scrollTop = terminal.scrollHeight;
    }
}
