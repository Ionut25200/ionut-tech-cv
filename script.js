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