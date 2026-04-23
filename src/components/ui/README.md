# Composants UI Centralisés - Oriotel

Ce répertoire contient les composants UI réutilisables utilisés dans l'ensemble du site Oriotel pour assurer une cohérence visuelle et une facilité de maintenance.

---

## 1. PremiumButton
Le composant `PremiumButton` est le bouton principal du site. Il propose un design haut de gamme avec des micro-animations et une gestion automatique des liens.

### Utilisation
```jsx
import { PremiumButton } from '@/components/ui/PremiumButton';

// Version Lien (Lien interne ou externe)
<PremiumButton href="/a-propos">
  En savoir plus
</PremiumButton>

// Version Action (onClick)
<PremiumButton onClick={() => alert('Action!')}>
  S'abonner
</PremiumButton>

// Version compacte pour le Header
<PremiumButton href="/carrieres" size="sm">
  Candidature
</PremiumButton>
```

### Propriétés (Props)
| Prop | Type | Par défaut | Description |
| :--- | :--- | :--- | :--- |
| `children` | `node` | **Requis** | Le texte ou contenu du bouton. |
| `href` | `string` | `undefined` | Si défini, le bouton devient un lien `<a>`. |
| `onClick` | `function` | `undefined` | Action à exécuter au clic (si `href` n'est pas défini). |
| `size` | `'lg' \| 'sm' \| 'default'` | `'lg'` | Définit la taille et le padding du bouton. |
| `showIcon` | `boolean` | `true` | Affiche ou masque l'icône à droite. |
| `icon` | `LucideIcon` | `ArrowRight` | Permet de changer l'icône affichée. |
| `className` | `string` | `''` | Classes CSS additionnelles (Tailwind). |

---

## 2. SectionTitle
Le composant `SectionTitle` permet de générer des titres de section cohérents avec un badge de sous-titre optionnel et un effet graphique "Scribble" en arrière-plan.

### Utilisation
```jsx
import { SectionTitle } from '@/components/ui/SectionTitle';

<SectionTitle 
  title="Nos Expertises"
  subtitle="NOTRE SAVOIR-FAIRE"
  description="Découvrez comment nous accompagnons nos clients dans leur transformation digitale."
  align="center"
/>
```

### Propriétés (Props)
| Prop | Type | Par défaut | Description |
| :--- | :--- | :--- | :--- |
| `title` | `string` | **Requis** | Le titre principal de la section. |
| `subtitle` | `string` | `undefined` | Petit texte en majuscules au-dessus du titre. |
| `description` | `string` | `undefined` | Paragraphe descriptif sous le titre. |
| `align` | `'left' \| 'center' \| 'right'` | `'left'` | Alignement horizontal du texte et des éléments. |
| `icon` | `LucideIcon` | `undefined` | Affiche une icône dans un carré stylisé au-dessus du titre. |
| `className` | `string` | `''` | Classes pour le conteneur global. |
| `titleClassName`| `string` | `''` | Classes spécifiques pour la balise `<h2>`. |

---

## 3. Logo
Le composant `Logo` centralise l'affichage du logo Oriotel, permettant de basculer facilement entre la version standard et la version monochrome (blanche) pour les fonds sombres.

### Utilisation
```jsx
import { Logo } from '@/components/ui/Logo';

// Version standard avec lien vers l'accueil
<Logo className="h-9" />

// Version blanche pour le footer ou sections sombres
<Logo variant="white" className="h-10" />

// Version sans lien (simple image)
<Logo asLink={false} className="h-12" />
```

### Propriétés (Props)
| Prop | Type | Par défaut | Description |
| :--- | :--- | :--- | :--- |
| `variant` | `'default' \| 'white'` | `'default'` | Utilise le filtre d'inversion pour la version blanche. |
| `href` | `string` | `'/'` | Destination du lien si `asLink` est vrai. |
| `asLink` | `boolean` | `true` | Si vrai, entoure le logo d'une balise `<a>`. |
| `className` | `string` | `''` | Classes CSS pour contrôler la taille (`h-9`, `h-10`, etc.). |

---

## 4. PageHero
Le composant `PageHero` est une section d'en-tête premium utilisée pour les pages secondaires du site. Il intègre une image de fond avec overlay et des animations fluides.

### Utilisation
```jsx
import PageHero from '@/components/ui/PageHero';

<PageHero 
  title="Nos Services"
  subtitle="Expertise et conseil"
  description="Découvrez comment nous transformons vos défis en avantages compétitifs."
  image="/path-to-image.jpg"
/>
```

### Propriétés (Props)
| Prop | Type | Par défaut | Description |
| :--- | :--- | :--- | :--- |
| `title` | `string` | **Requis** | Le titre principal de la page (police Oswald). |
| `subtitle` | `string` | `undefined` | Petit texte (badge) au-dessus du titre. |
| `description` | `string` | `undefined` | Paragraphe descriptif sous le titre. |
| `image` | `string` | `Unsplash URL` | Chemin vers l'image de fond. |
| `overlayOpacity` | `string` | `'bg-black/65'` | Classe Tailwind pour l'opacité de l'overlay sombre. |

---

## Bonnes Pratiques
- **Cohérence** : Utilisez toujours `PremiumButton` pour les appels à l'action principaux (CTA).
- **Branding** : Utilisez toujours le composant `Logo` au lieu d'une balise `<img>` manuelle pour garantir que le bon fichier source est utilisé partout.
- **Maintenance** : Si vous devez modifier le style global ou la source des composants, faites-le directement dans leurs fichiers respectifs dans `src/components/ui/`.
