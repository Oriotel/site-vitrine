# Oriotel Site Vitrine

Site vitrine premium pour Oriotel, spécialisé dans les solutions télécoms et opérationnelles.

## 🚀 Technologies
- **React** (Vite)
- **Tailwind CSS v4**
- **Framer Motion** (Animations)
- **Lucide React** (Icônes)

## 🎨 Design System & Composants UI

### Composants Partagés
Le projet utilise une série de composants UI centralisés pour garantir la cohérence visuelle.

#### 1. `SectionTitle`
Composant standard pour tous les titres de sections.
- **Chemin** : `src/components/ui/SectionTitle.jsx`
- **Props** : `title`, `subtitle`, `description`, `align` ('left' | 'center' | 'right').
- **Style** : Utilise la police **Oswald** et inclut un effet "Scribble" SVG animé.

#### 2. `PageHero`
En-tête premium réutilisable pour les pages secondaires (Services, À propos, Contact, Carrières).
- **Chemin** : `src/components/ui/PageHero.jsx`
- **Props** : `title`, `subtitle`, `description`, `image`, `overlayOpacity`.
- **Style** : Image de fond plein écran avec overlay sombre et animations d'entrée Framer Motion.

#### 3. `PremiumButton`
Bouton interactif avec effets de survol et transitions soignées.
- **Chemin** : `src/components/ui/PremiumButton.jsx`

#### 4. `Shimmer`
Utilitaire de base pour les effets de chargement (skeletons).

## ⏳ Système de Loading & Skeletons
Le site implémente un système de chargement progressif :
- **LoadingContext** : Gère l'état de chargement global du layout.
- **LayoutSkeleton** : Affiche des versions simplifiées du Header et du Footer pendant le chargement des données de la page.
- **Page Skeletons** : Chaque page majeure possède son propre squelette (ex: `HomePageSkeleton`, `ServicesPageSkeleton`) pour une transition fluide.

## 🛠️ Installation & Développement

```bash
# Installation des dépendances
npm install

# Lancer en mode développement
npm run dev

# Build pour la production
npm run build
```
