// PROTECCIÓN CONTRA COPIA
document.addEventListener('contextmenu', e => {
    e.preventDefault();
    alert('⚠️ Contenido protegido. No está permitido hacer clic derecho.');
});
document.addEventListener('keydown', e => {
    if (e.key === 'F12') { e.preventDefault(); return false; }
    if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C' || e.key === 'i' || e.key === 'j' || e.key === 'c')) { e.preventDefault(); return false; }
    if (e.ctrlKey && (e.key === 'U' || e.key === 'u' || e.key === 'S' || e.key === 's')) { e.preventDefault(); return false; }
});

onload = () => {
    document.body.classList.remove("container");

    // Lógica para la música
    const playButton = document.getElementById('playButton');
    const audio = document.getElementById('backgroundMusic');

    // Intentar reproducir automáticamente al cargar
    audio.currentTime = 19;
    audio.play().then(() => {
        playButton.textContent = '⏸ Pausar Música';
    }).catch(error => {
        console.log("La reproducción automática fue bloqueada por el navegador. Esperando interacción del usuario.");
        playButton.textContent = '🎵 Reproducir Música';
    });

    playButton.addEventListener('click', () => {
        if (audio.paused) {
            // Si el audio está al inicio (0), saltar a los 19 segundos la primera vez
            if (audio.currentTime === 0) {
                audio.currentTime = 19;
            }
            audio.play();
            playButton.textContent = '⏸ Pausar Música';
        } else {
            audio.pause();
            playButton.textContent = '🎵 Reproducir Música';
        }
    });

    // Lógica para las palabras que bajan
    const words = [
        "eres increíble",
        "eres maravillosa",
        "eres especial",
        "te quiero",
        "eres única",
        "cada día brillas más",
        "tu sonrisa es magia",
        "eres pura luz",
        "estudia mucho mi amorcito",
        "eres relamente inteligente",
        "eres muy hermosa",
        "mi mujer preciosa",
        "te amo con todo mi corazón",
        "te va a ir muy bien en tus examenes",
  "confío plenamente en ti",
  "tienes un talento enorme",
  "vas a lograr todo lo que te propongas",
  "tu esfuerzo siempre da frutos",
  "eres más fuerte de lo que piensas",
  "cada día aprendes y creces",
  "tu dedicación me inspira",
  "vas a superar cualquier reto",
  "eres un ejemplo de constancia",
  "tu inteligencia brilla en todo momento",
  "me siento orgulloso de ti",
  "tus sueños están más cerca de cumplirse",
  "eres capaz de todo",
  "tu disciplina te llevará lejos",
  "vas a triunfar en tu examen",
  "tu esfuerzo vale la pena",
  "eres mi motivación diaria",
  "nunca dudes de ti misma",
  "tienes un corazón y una mente brillantes",
  "tu éxito es inevitable"


    ];

    function createFallingText() {
        const textElement = document.createElement('div');
        textElement.classList.add('falling-text');
        
        // Elegir una palabra aleatoria
        textElement.textContent = words[Math.floor(Math.random() * words.length)];
        
        // Posición horizontal aleatoria (evitando el centro para no tapar las flores)
        const side = Math.random() > 0.5 ? 'left' : 'right';
        let xPos;
        if (side === 'left') {
            xPos = Math.random() * 15; // 0-15% del lado izquierdo
        } else {
            xPos = 75 + Math.random() * 10; // 75-85% del lado derecho (un poco más adentro)
        }
        
        textElement.style.left = xPos + 'vw';
        textElement.style.width = '20vw'; // Limitar ancho
        textElement.style.textAlign = 'center';
        textElement.style.whiteSpace = 'normal'; // Permitir que el texto se envuelva si es muy largo
        
        // Duración aleatoria para que no bajen todas iguales
        const duration = 5 + Math.random() * 5;
        textElement.style.animationDuration = duration + 's';
        
        // Tamaño de fuente aleatorio un poco
        const size = 1.5 + Math.random() * 1.5;
        textElement.style.fontSize = size + 'vmin';

        document.body.appendChild(textElement);

        // Eliminar del DOM cuando termine la animación
        setTimeout(() => {
            textElement.remove();
        }, duration * 1000);
    }

    // Crear palabras cada cierto tiempo
    setInterval(createFallingText, 2000);
};
