const fs = require('fs');
const path = require('path');

// Le répertoire actuel où le script est exécuté
const repertoireCourant = __dirname; 

console.log(`\nScan du répertoire : ${repertoireCourant}\n`);

// 1. Lire tous les fichiers dans le répertoire
fs.readdir(repertoireCourant, (err, fichiers) => {
    if (err) {
        console.error("Erreur de lecture du répertoire :", err);
        return;
    }

    let fichiersRenommes = 0;
    
    // 2. Filtrer et traiter uniquement les fichiers .lrv
    fichiers.forEach(fichier => {
        const extension = path.extname(fichier).toLowerCase();
        
        if (extension === '.lrv') {
            const cheminAncien = path.join(repertoireCourant, fichier);
            const nouveauNom = fichier.replace(/\.lrv$/i, '.mp4');
            const cheminNouveau = path.join(repertoireCourant, nouveauNom);
            
            // Vérifie que le fichier .mp4 n'existe pas déjà pour éviter l'écrasement
            if (fs.existsSync(cheminNouveau)) {
                console.warn(`⚠️ Fichier ignoré : ${nouveauNom} existe déjà. Renommage omis.`);
                return;
            }
            
            try {
                // 3. Renommer le fichier
                fs.renameSync(cheminAncien, cheminNouveau);
                console.log(`✅ Renommé : ${fichier} -> ${nouveauNom}`);
                fichiersRenommes++;
            } catch (erreur) {
                console.error(`❌ Erreur lors du renommage de ${fichier} : ${erreur.message}`);
            }
        }
    });

    // 4. Afficher le bilan
    if (fichiersRenommes > 0) {
        console.log(`\n🎉 Terminé ! ${fichiersRenommes} fichiers .lrv ont été renommés en .mp4.`);
    } else {
        console.log("\n⚠️ Aucun fichier .lrv à renommer trouvé dans ce répertoire.");
    }
});