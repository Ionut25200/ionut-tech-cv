// On attend que le DOM (le contenu de la page) soit chargé
document.addEventListener('DOMContentLoaded', () => {

    // 1. Cibler tes éléments
    const btnGoMining = document.getElementById('link-gomining');
    const btnGitHub = document.getElementById('link-github');

    // 2. Créer la fonction d'action
    const openLink = (url) => {
        window.open(url, '_blank'); // Ouvre dans un nouvel onglet
    };

    // 3. Mettre les écouteurs en place
    if (btnGoMining) {
        btnGoMining.addEventListener('click', () => {
            openLink('https://gomining.com/?ref=xmywC');
        });
    }

    if (btnGitHub) {
        btnGitHub.addEventListener('click', () => {
            openLink('https://github.com/votre-profil');
        });
    }
});
const video = document.getElementById('hero-video');

// 1. L'effet "Mise en marche" au survol
video.addEventListener('mouseenter', () => {
    video.play();
    video.style.filter = "brightness(1.2) contrast(1.1)"; // La voiture s'illumine
});

document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('hero-video');

    // S'assurer que la vidéo se lance bien
    if (video) {
        video.play().catch(error => {
            console.log("L'autostart a été bloqué par le navigateur, l'utilisateur doit interagir.");
        });

        // Gérer le clic pour TikTok
        video.addEventListener('click', () => {
            window.open('https://www.tiktok.com/@ton-profil', '_blank');
        });
    }
});
