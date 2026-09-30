const input = document.getElementById('cmd');
const output = document.getElementById('output');

input.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    const command = input.value.trim().toUpperCase();
    
    // Print the command typed
    output.innerText += `\nC:\\> ${input.value}\n`;

    // Handle standard DOS commands
    if (command === 'HELP') {
      output.innerText += "Available commands: HELP, DIR, CLS, VER\n";
    } else if (command === 'DIR') {
      output.innerText += " Directory of C:\\\n\nREADME   TXT         100 01-01-26  12:00p\nINDEX    HTML        500 01-01-26  12:00p\n";
    } else if (command === 'CLS') {
      output.innerText = "";
    } else if (command === 'VER') {
      output.innerText += "MS-DOS Version 6.22\n";
    } else if (command !== "") {
      output.innerText += `'${input.value}' is not recognized as an internal or external command.\n`;
    }

    // Reset input field and scroll to bottom
    input.value = '';
    window.scrollTo(0, document.body.scrollHeight);
  }
});