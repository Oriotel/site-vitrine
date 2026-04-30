# 🎨 Oriotel - Guide de Style & Design

Ce document répertorie les récentes décisions de design appliquées sur l'interface du site Oriotel, visant à moderniser, uniformiser et donner un aspect plus "Premium" à l'expérience utilisateur.

## 1. Boutons d'Action (ex: "Découvrir Oriotel")
Le style des boutons de liens ("Call to action" textuels) a été épuré pour être plus percutant et professionnel.

**Classes appliquées :**
- `text-[#1428C9]` : Couleur bleue caractéristique d'Oriotel.
- `font-bold` : Texte en gras pour faire ressortir l'action.
- `text-sm uppercase tracking-widest` : Texte en majuscules avec un grand espacement entre les lettres, donnant un style très institutionnel et élégant.
- **Effet au survol (Hover) :** `group-hover:text-[#111827] transition-colors` – Le texte s'assombrit doucement pour réagir à la souris de l'utilisateur.

## 2. Flèches de Navigation (Arrows)
Les flèches accompagnant les liens ou les boutons ont été standardisées pour inclure une micro-animation fluide, invitant naturellement au clic.

**Classes appliquées :**
- `w-4 h-4 ml-2` : Taille proportionnée avec un espacement défini sur la gauche.
- **Animation de survol :** `transform group-hover:translate-x-2 transition-transform duration-300` 
- **Explication :** Lorsque l'utilisateur passe sa souris sur le bouton ou la carte (le `group`), la flèche se décale doucement vers la droite de quelques pixels (`translate-x-2`), créant un appel à l'action très engageant.

## 3. Design des Cartes (Suppression du border-radius)
Pour rompre avec le style "bulle" et s'orienter vers une esthétique B2B plus stricte, géométrique et haut de gamme, les coins arrondis (`border-radius`) des cartes ont été réduits ou supprimés.

**Modifications :**
- Retrait des classes comme `rounded-3xl` ou `rounded-full` sur certains conteneurs.
- Utilisation de `rounded-none` (ou de très petits radius) pour créer des arêtes nettes.
- **Effet visuel :** Cela structure le contenu, donnant un aspect plus architectural qui correspond bien aux services d'optimisation et d'architecture d'entreprise proposés par Oriotel. Les ombres légères (`shadow-sm`) et l'effet de levier au survol (`hover:-translate-y-1`) sont conservés pour maintenir l'interactivité.
