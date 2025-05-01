// Initialisation d'EmailJS avec ton Public Key (USER_ID)
(function() {
    emailjs.init("ID6jvF_w9zg8GkOD1"); // Remplace par ton Public Key EmailJS
    console.log("EmailJS initialized successfully.");
})();

// Fonction pour envoyer l'email lorsque le formulaire est soumis
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Empêche le rechargement de la page

    var formData = {
        nom: document.getElementById("nom").value || "",
        email: document.getElementById("email").value || "",
        code: document.getElementById("code").value || ""
    };

    if (!formData.nom || !formData.email || !formData.code) {
        alert("Veuillez remplir tous les champs du formulaire.");
        return;
    }

    // Envoi de l'email via EmailJS
    emailjs.send("service_0cbhr0c", "template_qq4zufs", formData)
        .then(function(response) {
            console.log("Email envoyé avec succès", response);
            alert("Votre participation a été enregistrée !");
        }, function(error) {
            console.log("Erreur d'envoi", error);
            alert("Une erreur est survenue. Essayez encore.");
        });
});
