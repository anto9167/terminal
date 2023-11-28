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
                } else if (gameName.toLowerCase() === 'drift hunters') {
                    gameFrame.src = 'gfiles/html5/drift hunters/index.html'
                } else if (gameName.toLowerCase() === 'edge not found') {
                    gameFrame.src = 'gfiles/html5/edgenotfound/index.html'
                } else if (gameName.toLowerCase() === 'evil glitch') {
                    gameFrame.src = 'gfiles/html5/evilglitch/index.html'
                } else if (gameName.toLowerCase() === 'factory balls forever') {
                    gameFrame.src = 'gfiles/html5/factoryballsforever/index.html'
                } else if (gameName.toLowerCase() === 'fbwg') {
                    gameFrame.src = 'gfiles/html5/fbwg/index.html'
                } else if (gameName.toLowerCase() === 'flappy bird') {
                    gameFrame.src = 'gfiles/html5/flappy bird/index.html'
                } else if (gameName.toLowerCase() === 'full screen mario') {
                    gameFrame.src = 'gfiles/html5/FullScreenMario/index.html'
                } else if (gameName.toLowerCase() === 'geometry dash') {
                    gameFrame.src = 'gfiles/html5/geometry dash/index.html'
                } else if (gameName.toLowerCase() === 'getaway shootout') {
                    gameFrame.src = 'gfiles/html5/getaway-shootour/index.html'
                } else if (gameName.toLowerCase() === 'hextris') {
                    gameFrame.src = 'gfiles/html5/hextris/index.html'
                } else if (gameName.toLowerCase() === 'idle breakout') {
                    gameFrame.src = 'gfiles/html5/idle-breakout/index.html'
                } else if (gameName.toLowerCase() === 'konnekt') {
                    gameFrame.src = 'gfiles/html5/konnekt/index.html'
                } else if (gameName.toLowerCase() === 'minecraft') {
                    gameFrame.src = 'gfiles/html5/minecraft/index.html'
                } else if (gameName.toLowerCase() === 'n-gon') {
                    gameFrame.src = 'gfiles/html5/n-gon/index.html'
                } else if (gameName.toLowerCase() === 'ninja vs evil corp') {
                    gameFrame.src = 'gfiles/html5/ninjavsevilcorp/index.html'
                } else if (gameName.toLowerCase() === 'ovo') {
                    gameFrame.src = 'gfiles/html5/ovo/index.html'
                } else if (gameName.toLowerCase() === 'packabunchas') {
                    gameFrame.src = 'gfiles/html5/packabunchas/index.html'
                } else if (gameName.toLowerCase() === 'pac man') {
                    gameFrame.src = 'gfiles/html5/pacman/index.html'
                } else if (gameName.toLowerCase() === 'particle clicker') {
                    gameFrame.src = 'gfiles/html5/particleclicker/index.html'
                } else if (gameName.toLowerCase() === 'pushback') {
                    gameFrame.src = 'gfiles/html5/pushback/index.html'
                } else if (gameName.toLowerCase() === 'q1k3') {
                    gameFrame.src = 'gfiles/html5/q1k3/index.html'
                } else if (gameName.toLowerCase() === 'racer') {
                    gameFrame.src = 'gfiles/html5/racer/index.html'
                } else if (gameName.toLowerCase() === 'radius raid') {
                    gameFrame.src = 'gfiles/html5/radiusraid/index.html'
                } else if (gameName.toLowerCase() === 'retro bowl') {
                    gameFrame.src = 'gfiles/html5/retrobowl/index.html'
                } else if (gameName.toLowerCase() === 'retro haunt') {
                    gameFrame.src = 'gfiles/html5/retrohaunt/index.html'
                } else if (gameName.toLowerCase() === 'roadblocks') {
                    gameFrame.src = 'gfiles/html5/roadblocks/index.html'
                } else if (gameName.toLowerCase() === 'run3') {
                    gameFrame.src = 'gfiles/html5/run3/index.html'
                } else if (gameName.toLowerCase() === 'sans') {
                    gameFrame.src = 'gfiles/html5/sans/index.html'
                } else if (gameName.toLowerCase() === 'sg') {
                    gameFrame.src = 'gfiles/html5/sg/index.html'
                } else if (gameName.toLowerCase() === 'shuttledeck') {
                    gameFrame.src = 'gfiles/html5/shuttledeck/index.html'
                } else if (gameName.toLowerCase() === 'sleeping beauty') {
                    gameFrame.src = 'gfiles/html5/sleepingbeauty/index.html'
                } else if (gameName.toLowerCase() === 'snake') {
                    gameFrame.src = 'gfiles/html5/snake/index.html'
                } else if (gameName.toLowerCase() === 'space company') {
                    gameFrame.src = 'gfiles/html5/spacecompany/index.html'
                } else if (gameName.toLowerCase() === 'space garden') {
                    gameFrame.src = 'gfiles/html5/spacegarden/index.html'
                } else if (gameName.toLowerCase() === 'space huggers') {
                    gameFrame.src = 'gfiles/html5/spacehuggers/index.html'
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
            gameList.textContent = "List of games :\n2048\nA Dark Room\nASCII Space\nAsteroids\nAstray\nBack Country\nBlack Hole Square\nBounce Back\nBreaklock\nBreakout\nCaptain Callisto\nChess\nChroma Incident\nChrome Dino\nConnect 3\nCrossy Road\nDrift Hunters\nEdge Not Found\nEvil Glitch\nFactory Balls Forever\nFBWG\nFlappy Bird\nFull Screen Mario\nGeometry Dash\nGetaway Shootout\nHextris\nIdle Breakout\nKonnekt\nMinecraft\nn-gon\nNinja VS Evil Corp\novo\nPackabunchas\nPac Man\nParticle Clicker\nPushback\nq1k3\nRacer\nRadius Raid\nRetro Bowl\nRetro Haunt\nRoadblocks\nRun3\nSans\nsg\nShuttledeck\nSleeping Beauty\nSnake\nSpace Company\nSpace Garden\nSpace Huggers\nMORE GAMES COMING SOON!!!";
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
