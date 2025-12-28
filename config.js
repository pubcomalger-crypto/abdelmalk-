// Configuration des informations personnelles

const profileConfig = {
    // Informations de base


    name: "مطبعتي",
    bio: "شركة طباعة و اشهار",
    profileImage: "https://i.ibb.co/5Wrr36B2/438165276-1803303496805105-424833355880910424-n.jpg",
    





    // Réseaux sociaux
    socialLinks: {
        facebook: "https://www.facebook.com/abdlmalek.abdlmalek.102",
        instagram: "https://www.instagram.com/aitoualimalek/",
        tiktok: "https://www.tiktok.com/@matbaati",
        whatsapp: "+213540253369",
        telegram: "+213 540 25 33 69",
        linkedin: "daisyparkhouse",
        snapchat: "https://www.snapchat.com/@sheikh_tidiane?sender_web_id=792b2a4d-05d3-4e8f-a5e0-1aeb89eba722&device_type=desktop&is_copy_url=true",
        email: "pubcom.alger@gmail.com",
        website: "https://www.youtube.com/",
        maps: "https://share.google/Au0cRmpbCJi8ZjN6m",
        phone: "+213540253369"
    },
    






    // Activation des icônes (mettre true pour afficher, false pour masquer)
    enabledIcons: {
        facebook: true,      // Afficher Facebook
        instagram: true,     // Afficher Instagram
        tiktok: true,        // Afficher TikTok
        whatsapp: true,      // Afficher WhatsApp
        telegram: true,      // Afficher Telegram
        linkedin: false,     // Afficher LinkedIn (mettre true pour l'activer)
        website: false,       // Afficher Site Web
        maps: true,          // Afficher Maps
        phone: true,         // Afficher Téléphone
        snapchat: false,      // Afficher Snapchat
        email: true,         // Afficher Email
    },
    
};



























// Ne pas modifier ci-dessous
if (typeof module !== 'undefined' && module.exports) {
    module.exports = profileConfig;
} else {
    window.profileConfig = profileConfig;
}



