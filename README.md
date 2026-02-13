# 🔐 Portfolio Login System

Willkommen! Dieses Portfolio ist durch ein Login-System geschützt. Nur autorisierte Benutzer mit gültigen Zugangsdaten können auf die Inhalte zugreifen.

## 🚀 Features

- ✅ **Sicheres Login**: Passwörter werden mit SHA-512 gehasht
- ✅ **Session-Management**: Automatischer Logout nach 2 Stunden Inaktivität
- ✅ **Mehrere Benutzer**: Unterstützt beliebig viele Benutzer-Accounts
- ✅ **Responsive Design**: Funktioniert auf Desktop und Mobile
- ✅ **Einfache Verwaltung**: Neue Benutzer können einfach hinzugefügt werden

## 🎯 Zugang anfordern

Falls du Zugriff auf dieses Portfolio benötigst, kontaktiere bitte den Portfolio-Inhaber für deine Zugangsdaten.

## 🔑 Standard-Benutzer

Für Demo-Zwecke sind folgende Test-Accounts verfügbar:
- **Benutzername:** admin | **Passwort:** demo123
- **Benutzername:** student | **Passwort:** student
- **Benutzername:** test | **Passwort:** test003

*Hinweis: In der Produktion sollten diese Test-Accounts entfernt werden.*

## 📁 Projektstruktur

```
portfolio/
├── index.html              # Login-Seite (Eingangsseite)
├── home.html              # Haupt-Portfolio-Seite (geschützt)
├── projekte.html          # Projekte (geschützt)
├── skills.html            # Skills (geschützt)
├── downloads.html         # Downloads (geschützt)
├── kontakt.html           # Kontakt (geschützt)
├── ueber-mich.html        # Über mich (geschützt)
├── auth-protection.js     # Login-Schutz Script
├── style.css              # Stylesheet
└── README.md              # Diese Datei
```

## 🛠️ Installation & Setup (für Entwickler)

### 1. Repository klonen
```bash
git clone https://github.com/dein-username/dein-repo.git
cd dein-repo
```

### 2. Dateien strukturieren
Stelle sicher, dass alle Dateien korrekt vorhanden sind (siehe Projektstruktur oben).

### 3. Neue Benutzer hinzufügen

**Schritt 1:** Hash für Passwort generieren
- Öffne `index.html` im Browser
- Drücke F12 für die Konsole
- Gib ein: `generateHash("deinPasswort")`
- Kopiere den generierten Hash

**Schritt 2:** Benutzer in index.html einfügen
```javascript
const users = {
    'admin': 'hash_hier',
    'student': 'hash_hier',
    'neueruser': 'dein_kopierter_hash',  // Neuer Benutzer
};
```

### 4. Geschützte Seiten einrichten

Jede HTML-Seite (außer index.html) benötigt diesen Code direkt nach `<body>`:

```html
<body>
<script src="auth-protection.js"></script>

<!-- Dein normaler Seiteninhalt -->
```

### 5. Navigation einrichten

Füge einen Logout-Button zur Navigation hinzu:

```html
<nav>
    <a href="home.html">Home</a>
    <a href="projekte.html">Projekte</a>
    <a href="skills.html">Skills</a>
    <a href="downloads.html">Downloads</a>
    <a href="kontakt.html">Kontakt</a>
    <a href="ueber-mich.html">Über mich</a>
    <button onclick="logout()">🔓 Abmelden</button>
</nav>
```

## ⚙️ Konfiguration

### Session-Dauer ändern
In `auth-protection.js`:
```javascript
const TWO_HOURS = 2 * 60 * 60 * 1000;  // 2 Stunden
```
Ändern zu:
```javascript
const THIRTY_MINUTES = 30 * 60 * 1000;  // 30 Minuten
const ONE_DAY = 24 * 60 * 60 * 1000;   // 24 Stunden
```

### Design anpassen
Die Login-Seite kann in `index.html` im `<style>` Bereich angepasst werden:
```css
/* Farbverlauf ändern */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Zu eigenen Farben */
background: linear-gradient(135deg, #ff6b6b 0%, #4ecdc4 100%);
```

## 🔒 Sicherheitshinweise

### ⚠️ Wichtig zu wissen:

**Frontend-Login = Basis-Schutz**
- Dieses System bietet einen Basis-Schutz für Portfolio-Inhalte
- Passwörter werden gehasht, aber der Code läuft im Browser
- Technisch versierte Personen könnten den Schutz umgehen

### ✅ Geeignet für:
- Portfolio-Demos
- Nicht-sensible Inhalte
- Geschützte Bereiche für Kunden/Partner
- Kleine Benutzergruppen

### ❌ Nicht geeignet für:
- Hochsensible Daten
- Finanzinformationen
- Persönliche/medizinische Daten
- Große Benutzergruppen

### 🛡️ Für höhere Sicherheit:
Für produktive Anwendungen mit sensiblen Daten wird ein Backend mit:
- Server-seitiger Authentifizierung
- Datenbank für Benutzer
- HTTPS-Verschlüsselung
- Rate Limiting
- 2-Faktor-Authentifizierung

empfohlen.

## 🧪 Testen

### Lokal testen:
```bash
# Einfacher HTTP-Server mit Python
python -m http.server 8000

# Oder mit Node.js
npx http-server
```

Dann öffne: `http://localhost:8000`

### Auf GitHub Pages:
1. Pushe alle Dateien zu GitHub
2. Aktiviere GitHub Pages in den Repository Settings
3. Wähle Branch: `main` (oder `master`)
4. Speichern
5. Deine Seite ist verfügbar unter: `https://dein-username.github.io/dein-repo/`

## 📝 Workflow

```
Besucher öffnet Website
    ↓
Sieht Login-Seite (index.html)
    ↓
Gibt Benutzername + Passwort ein
    ↓
System hasht Passwort und vergleicht
    ↓
Bei Erfolg: Session wird erstellt
    ↓
Weiterleitung zu home.html
    ↓
Benutzer kann alle Seiten navigieren
    ↓
Nach 2 Stunden Inaktivität: Auto-Logout
    ↓
Manueller Logout über Button möglich
```

## 🆘 Troubleshooting

### Problem: "File not found" nach Login
**Lösung:** Prüfe ob `home.html` existiert und die Weiterleitung korrekt ist.

### Problem: Login funktioniert nicht
**Lösung:** 
- Browser-Konsole (F12) öffnen und Fehler prüfen
- Sicherstellen, dass Passwort-Hash korrekt ist
- Cache leeren (Strg + F5)

### Problem: Sofortiger Logout
**Lösung:** Prüfe ob `auth-protection.js` in allen geschützten Seiten eingebunden ist.

### Problem: Alte Startseite wird angezeigt
**Lösung:** Browser-Cache leeren oder im Inkognito-Modus testen.

## 🎨 Anpassungen

### Login-Seite personalisieren:
- Ändere den Titel in `index.html`
- Passe die Farben im CSS an
- Füge dein Logo hinzu
- Ändere die Texte nach deinen Wünschen

### Weiterleitungs-Ziel ändern:
Wenn nach dem Login zu einer anderen Seite weitergeleitet werden soll:
```javascript
// In index.html
window.location.href = 'andere-seite.html';
```

## 📞 Support

Bei Fragen oder Problemen:
1. Überprüfe diese README-Datei
2. Schaue in die Browser-Konsole (F12) für Fehlermeldungen
3. Prüfe ob alle Dateien korrekt hochgeladen wurden
4. Teste mit den Standard-Zugangsdaten

## 🔄 Updates

**Version 1.0** (Aktuell)
- Initiales Login-System
- SHA-512 Hashing
- Session Management
- Multi-User Support

## 📄 Lizenz

Dieses Projekt ist für persönliche und kommerzielle Nutzung frei verfügbar.

## 👨‍💻 Entwicklung

**Technologie-Stack:**
- HTML5
- CSS3
- Vanilla JavaScript
- Web Crypto API (SHA-512)
- SessionStorage API

**Browser-Kompatibilität:**
- Chrome/Edge 37+
- Firefox 34+
- Safari 11+
- Opera 24+

## ✅ Checkliste für Live-Deployment

- [ ] Test-Accounts entfernt oder geändert
- [ ] Eigene Benutzer mit sicheren Passwörtern erstellt
- [ ] Alle Seiten mit `auth-protection.js` geschützt
- [ ] Navigation mit Logout-Button versehen
- [ ] Alle Links funktionieren korrekt
- [ ] Session-Dauer nach Bedarf angepasst
- [ ] Design personalisiert
- [ ] Auf verschiedenen Browsern getestet
- [ ] Auf Mobile-Geräten getestet
- [ ] GitHub Pages aktiviert

---

**Erstellt:** 2025  
**Letzte Aktualisierung:** 2025

Viel Erfolg mit deinem geschützten Portfolio! 🚀
