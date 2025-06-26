const errorMessages = [
    "ERROR: System breach detected...",
    "WARNING: Unauthorized access in progress...",
    "ALERT: Firewall compromised...",
    "ERROR: Database connection lost...",
    "CRITICAL: Memory overflow detected...",
    "WARNING: Malicious code injection...",
    "ERROR: Security protocols disabled...",
    "ALERT: System vulnerability exploited...",
    "CRITICAL: Data encryption failed...",
    "WARNING: Network intrusion detected...",
    "ERROR: Authentication bypass successful...",
    "ALERT: Root access granted...",
    "CRITICAL: System files corrupted...",
    "WARNING: Backdoor installation complete...",
    "ERROR: User privileges escalated...",
    "ALERT: System control transferred...",
    "CRITICAL: All security measures disabled...",
    "WARNING: Data extraction in progress...",
    "ERROR: System shutdown imminent...",
    "FINAL WARNING: YOU HAVE BEEN HACKED!"
];

let terminalInterval;
let messageIndex = 0;

function triggerBug() {
    // Hide main page
    document.getElementById('mainPage').classList.add('hidden');
    
    // Show terminal
    setTimeout(() => {
        document.getElementById('terminalScreen').classList.add('active');
        startTerminalAnimation();
    }, 300);
}

function startTerminalAnimation() {
    const terminalBody = document.getElementById('terminalBody');
    
    terminalInterval = setInterval(() => {
        if (messageIndex < errorMessages.length) {
            const line = document.createElement('div');
            line.className = 'terminal-line';
            line.textContent = errorMessages[messageIndex];
            terminalBody.appendChild(line);
            
            // Auto scroll to bottom
            terminalBody.scrollTop = terminalBody.scrollHeight;
            
            messageIndex++;
            
            // Speed up as we go
            if (messageIndex > 10) {
                clearInterval(terminalInterval);
                terminalInterval = setInterval(() => {
                    if (messageIndex < errorMessages.length) {
                        const line = document.createElement('div');
                        line.className = 'terminal-line';
                        line.textContent = errorMessages[messageIndex];
                        terminalBody.appendChild(line);
                        terminalBody.scrollTop = terminalBody.scrollHeight;
                        messageIndex++;
                    } else {
                        clearInterval(terminalInterval);
                        showHackedScreen();
                    }
                }, 50);
            }
        } else {
            clearInterval(terminalInterval);
            showHackedScreen();
        }
    }, 200);
}

function showHackedScreen() {
    setTimeout(() => {
        document.getElementById('terminalScreen').classList.remove('active');
        document.getElementById('hackedScreen').classList.add('active');
        
        // Add sound effect (optional)
        // playHackSound();
        
        // Auto reset after 5 seconds (optional)
        setTimeout(() => {
            resetPage();
        }, 5000);
    }, 1000);
}

function resetPage() {
    document.getElementById('hackedScreen').classList.remove('active');
    document.getElementById('terminalScreen').classList.remove('active');
    document.getElementById('mainPage').classList.remove('hidden');
    
    // Reset terminal
    document.getElementById('terminalBody').innerHTML = '<div class="terminal-line">$ system.exe --run</div>';
    messageIndex = 0;
}

// Optional: Add click to reset
document.getElementById('hackedScreen').addEventListener('click', resetPage);