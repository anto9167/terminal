// cloak.js

function handleCloakCommand(subcommand) {
    const title = document.title;
    const favicon = document.querySelector("link[rel*='icon']");

    switch (subcommand.toLowerCase()) {
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
