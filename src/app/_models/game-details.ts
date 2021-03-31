export interface GameDetails {
  "id": number,
  "nom": string,
  "description": string,
  "regles": string,
  "langue": string,
  "url_media": string,
  "age": string,
  "poids": string,
  "nombre_joueurs": string,
  "categorie": string,
  "duree": string,
  "user_id": {
    "id": number,
    "nom": string,
    "prenom": string,
    "pseudo": string,
    "email": string,
    "email_verified_at": string,
    "created_at": string,
    "updated_at": string
  },
  "theme_id": {
    "id": number,
    "nom": string
  },
  "editeur_id": {
    "id": number,
    "nom": string
  },
  // "commentaires": [
  //   {
  //     "id": number,
  //     "commentaire": string,
  //     "date_com": string,
  //     "note": string,
  //     "jeu_id": string,
  //     "user_id": string
  //   },
  //   ...
  //   ],
  "commentaires": object,
  "statistiques": {
    "noteMax": string,
    "noteMin": string,
    "noteMoyenne": number,
    "nbCommentaires": number,
    "nbCommentairesTotal": number,
    "rang": number,
    "nbJeuxTheme": number,
  },
  "tarif": {
    "prixMax": string,
    "prixMin": string,
    "prixMoyen": number,
    "nbAchats": number
  }

}
