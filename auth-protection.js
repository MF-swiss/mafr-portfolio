// ========================================
// LOGIN-SCHUTZ FÜR PORTFOLIO-SEITEN
// ========================================
// Diesen Code am ANFANG jeder HTML-Seite einfügen (direkt nach <body>)

// Prüfen ob Benutzer eingeloggt ist
function checkAuth() {
    const loggedIn = sessionStorage.getItem('loggedIn');
    const loginTime = sessionStorage.getItem('loginTime');
    
    // Wenn nicht eingeloggt -> zur Login-Seite
    if (loggedIn !== 'true') {
        window.location.href = 'index.html';
        return false;
    }
    
    // Session-Timeout: 2 Stunden (optional anpassbar)
    const TWO_HOURS = 2 * 60 * 60 * 1000;
    const currentTime = new Date().getTime();
    
    if (loginTime && (currentTime - loginTime) > TWO_HOURS) {
        // Session abgelaufen
        sessionStorage.clear();
        alert('Deine Session ist abgelaufen. Bitte melde dich erneut an.');
        window.location.href = 'index.html';
        return false;
    }
    
    return true;
}

// Logout-Funktion (global verfügbar)
function logout() {
    sessionStorage.clear();
    window.location.href = 'index.html';
}

// Automatische Aktivitätserkennung (Session bleibt aktiv bei Nutzung)
function updateActivity() {
    if (sessionStorage.getItem('loggedIn') === 'true') {
        sessionStorage.setItem('loginTime', new Date().getTime());
    }
}

// Event Listener für Benutzeraktivität
document.addEventListener('click', updateActivity);
document.addEventListener('keypress', updateActivity);
document.addEventListener('scroll', updateActivity);

// Sofort beim Laden prüfen
checkAuth();
