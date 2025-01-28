import { Recipe } from '../app/model/recipe';

export const recipes: Recipe[] = [
  {
    id: '1',
    name: 'Salmorejo',
    portions: 4,
    description:
      'Un plat espagnol frais et savoureux, parfait pour une entrée.',
    ingredients:
      "Tomates bien mûres4Pain (baguette)15-20 cmHuile d'olive2 cuillères à soupeAil1 ou 2 goussesŒufs durs2Jambon cru2 tranches",
    preparation_time: 15,
    cooking_time: 0,
    instructions:
      "Peler les tomates et les couper en gros morceaux.Ôter la croûte du pain et mouiller légèrement la mie.Râper les œufs et couper le jambon cru en fines lamelles.Mixer les tomates, la mie de pain, l'huile d'olive et l'ail.Servir dans des ramequins et garnir avec les œufs et le jambon.",
    tags: [
      { id: '1', name: 'Espagnol', description: 'Cuisine espagnole' },
      { id: '2', name: 'Entrée' },
    ],
  },
  {
    id: '2',
    name: 'Salade fromage frais, jambon cru et figues',
    portions: 4,
    description:
      'Une salade simple et élégante avec des saveurs sucrées et salées.',
    ingredients:
      "Fromages fraisà volonté      Jambon cruà volonté      Figues bien mûresà volonté      Huile d'oliveUn filet",
    preparation_time: 10,
    cooking_time: 0,
    instructions:
      "Découper les figues en 2 ou en 4.Découper le fromage frais en petits cubes.','Disposer les morceaux de figues dans un plat.Ajouter les cubes de fromage frais, un filet d'huile d'olive et le jambon cru.",
    tags: [
      { id: '3', name: 'Salade', description: 'Plat frais et léger' },
      { id: '2', name: 'Entrée' },
    ],
  },
  {
    id: '3',
    name: 'Soupe aux courgettes',
    portions: 4,
    description: 'Une soupe légère et réconfortante aux courgettes.',
    ingredients: 'Courgettes6      Cube bouillon1',
    preparation_time: 15,
    cooking_time: 45,
    instructions:
      "Laver et découper les courgettes en gros morceaux.Faire cuire avec un cube de bouillon pendant 45 minutes.Mixer jusqu'à obtenir une texture veloutée.",
    tags: [{ id: '4', name: 'Soupe', description: 'Plats chauds liquides' }],
  },
  {
    id: '4',
    name: 'Quiche thon tomate',
    portions: 4,
    description: 'Une quiche savoureuse à base de thon et tomates.',
    ingredients:
      "Tomates2-3      Thon180g      Pâte feuilletée1      Œufs3      Crème fraîche20 cl      Lait10 cl      Moutarde à l'ancienne1 cuillère à soupe      Gruyèreà volonté",
    preparation_time: 20,
    cooking_time: 40,
    instructions:
      'Découper les tomates en petits morceaux, retirer le jus.Émietter le thon.Mélanger les tomates, le thon et la moutarde.Dans un saladier, mélanger les œufs, la crème fraîche, le lait et le gruyère.Étaler la pâte feuilletée dans un plat, la piquer à la fourchette, et verser la préparation.Faire cuire 40 minutes au four à 180°C.',
    tags: [
      {
        id: '5',
        name: 'Quiche',
        description: 'Recettes à base de pâte et garniture',
      },
      { id: '6', name: 'Plat principal' },
    ],
  },
  {
    id: '5',
    name: 'Mousse au chocolat',
    portions: 4,
    description:
      'Un dessert classique et gourmand pour les amateurs de chocolat.',
    ingredients: 'Œufs4      Chocolat160g      BeurreUne noisette',
    preparation_time: 20,
    cooking_time: 0,
    instructions:
      "Faire fondre le chocolat avec une noisette de beurre.Séparer les blancs des jaunes d'œufs.Battre les blancs en neige.Mélanger les jaunes avec le chocolat fondu.Incorporer délicatement les blancs en neige au mélange chocolaté.Répartir dans des ramequins et réfrigérer au moins 2 heures.",
    tags: [
      { id: '7', name: 'Dessert', description: 'Plats sucrés' },
      { id: '8', name: 'Chocolat', description: 'Desserts à base de chocolat' },
    ],
  },
  {
    id: '6',
    name: "Curry d'agneau",
    portions: 4,
    description:
      "Un délicieux curry d'agneau épicé, idéal pour un repas chaleureux.",
    ingredients:
      "Épaule d'agneau désossée600g      Oignons2      Ail2 gousses      Gingembre1 cuillère à soupe      Tomates400g      Lait de coco400ml      Pâte de curry2 cuillères à soupe      Huile2 cuillères à soupe      Coriandre fraîcheQuelques brins",
    preparation_time: 30,
    cooking_time: 90,
    instructions:
      "Couper l'agneau en morceaux. Émincer les oignons, l'ail et le gingembre.Faire revenir les oignons, l'ail et le gingembre dans de l'huile.Ajouter la pâte de curry et mélanger.Incorporer les morceaux d'agneau et les faire dorer.Ajouter les tomates et le lait de coco, puis laisser mijoter 90 minutes.Servir avec de la coriandre fraîche en garniture.",
    tags: [
      { id: '9', name: 'Curry', description: 'Plats épicés à base de curry' },
      { id: '6', name: 'Plat principal' },
    ],
  },
];

// export const recipes: Recipe[] = [
//   {
//     id: '1',
//     name: 'Salmorejo',
//     portions: 4,
//     description:
//       'Un plat espagnol frais et savoureux, parfait pour une entrée.',
//     ingredients: [
//       { name: 'Tomates bien mûres', quantity: '4' },
//       { name: 'Pain (baguette)', quantity: '15-20 cm' },
//       { name: "Huile d'olive quantity: '2 cuillères à soupe' },
//       { name: 'Ail', quantity: '1 ou 2 gousses' },
//       { name: 'Œufs durs', quantity: '2' },
//       { name: 'Jambon cru', quantity: '2 tranches' },
//     ],
//     preparation_time: 15,
//     cooking_time: 0,
//     instructions: [
//       'Peler les tomates et les couper en gros morceaux.',
//       'Ôter la croûte du pain et mouiller légèrement la mie.',
//       'Râper les œufs et couper le jambon cru en fines lamelles.',
//       "Mixer les tomates, la mie de pain, l'huile d'olive et l'ail.",
//       'Servir dans des ramequins et garnir avec les œufs et le jambon.',
//     ],
//     tags: [
//       { id: '1', name: 'Espagnol', description: 'Cuisine espagnole' },
//       { id: '2', name: 'Entrée' },
//     ],
//   },
//   {
//     id: '2',
//     name: 'Salade fromage frais, jambon cru et figues',
//     portions: 4,
//     description:
//       'Une salade simple et élégante avec des saveurs sucrées et salées.',
//     ingredients: [
//       { name: 'Fromages frais', quantity: 'à volonté' },
//       { name: 'Jambon cru', quantity: 'à volonté' },
//       { name: 'Figues bien mûres', quantity: 'à volonté' },
//       { name: "Huile d'olive", quantity: 'Un filet' },
//     ],
//     preparation_time: 10,
//     cooking_time: 0,
//     instructions: [
//       'Découper les figues en 2 ou en 4.',
//       'Découper le fromage frais en petits cubes.',
//       'Disposer les morceaux de figues dans un plat.',
//       "Ajouter les cubes de fromage frais, un filet d'huile d'olive et le jambon cru.",
//     ],
//     tags: [
//       { id: '3', name: 'Salade', description: 'Plat frais et léger' },
//       { id: '2', name: 'Entrée' },
//     ],
//   },
//   {
//     id: '3',
//     name: 'Soupe aux courgettes',
//     portions: 4,
//     description: 'Une soupe légère et réconfortante aux courgettes.',
//     ingredients: [
//       { name: 'Courgettes', quantity: '6' },
//       { name: 'Cube bouillon', quantity: '1' },
//     ],
//     preparation_time: 15,
//     cooking_time: 45,
//     instructions: [
//       'Laver et découper les courgettes en gros morceaux.',
//       'Faire cuire avec un cube de bouillon pendant 45 minutes.',
//       "Mixer jusqu'à obtenir une texture veloutée.",
//     ],
//     tags: [{ id: '4', name: 'Soupe', description: 'Plats chauds liquides' }],
//   },
//   {
//     id: '4',
//     name: 'Quiche thon tomate',
//     portions: 4,
//     description: 'Une quiche savoureuse à base de thon et tomates.',
//     ingredients: [
//       { name: 'Tomates', quantity: '2-3' },
//       { name: 'Thon', quantity: '180g' },
//       { name: 'Pâte feuilletée', quantity: '1' },
//       { name: 'Œufs', quantity: '3' },
//       { name: 'Crème fraîche', quantity: '20 cl' },
//       { name: 'Lait', quantity: '10 cl' },
//       { name: "Moutarde à l'ancienne", quantity: '1 cuillère à soupe' },
//       { name: 'Gruyère', quantity: 'à volonté' },
//     ],
//     preparation_time: 20,
//     cooking_time: 40,
//     instructions: [
//       'Découper les tomates en petits morceaux, retirer le jus.',
//       'Émietter le thon.',
//       'Mélanger les tomates, le thon et la moutarde.',
//       'Dans un saladier, mélanger les œufs, la crème fraîche, le lait et le gruyère.',
//       'Étaler la pâte feuilletée dans un plat, la piquer à la fourchette, et verser la préparation.',
//       'Faire cuire 40 minutes au four à 180°C.',
//     ],
//     tags: [
//       {
//         id: '5',
//         name: 'Quiche',
//         description: 'Recettes à base de pâte et garniture',
//       },
//       { id: '6', name: 'Plat principal' },
//     ],
//   },
//   {
//     id: '5',
//     name: 'Mousse au chocolat',
//     portions: 4,
//     description:
//       'Un dessert classique et gourmand pour les amateurs de chocolat.',
//     ingredients: [
//       { name: 'Œufs', quantity: '4' },
//       { name: 'Chocolat', quantity: '160g' },
//       { name: 'Beurre', quantity: 'Une noisette' },
//     ],
//     preparation_time: 20,
//     cooking_time: 0,
//     instructions: [
//       'Faire fondre le chocolat avec une noisette de beurre.',
//       "Séparer les blancs des jaunes d'œufs.",
//       'Battre les blancs en neige.',
//       'Mélanger les jaunes avec le chocolat fondu.',
//       'Incorporer délicatement les blancs en neige au mélange chocolaté.',
//       'Répartir dans des ramequins et réfrigérer au moins 2 heures.',
//     ],
//     tags: [
//       { id: '7', name: 'Dessert', description: 'Plats sucrés' },
//       { id: '8', name: 'Chocolat', description: 'Desserts à base de chocolat' },
//     ],
//   },
//   {
//     id: '6',
//     name: "Curry d'agneau",
//     portions: 4,
//     description:
//       "Un délicieux curry d'agneau épicé, idéal pour un repas chaleureux.",
//     ingredients: [
//       { name: "Épaule d'agneau désossée", quantity: '600g' },
//       { name: 'Oignons', quantity: '2' },
//       { name: 'Ail', quantity: '2 gousses' },
//       { name: 'Gingembre', quantity: '1 cuillère à soupe' },
//       { name: 'Tomates', quantity: '400g' },
//       { name: 'Lait de coco', quantity: '400ml' },
//       { name: 'Pâte de curry', quantity: '2 cuillères à soupe' },
//       { name: 'Huile', quantity: '2 cuillères à soupe' },
//       { name: 'Coriandre fraîche', quantity: 'Quelques brins' },
//     ],
//     preparation_time: 30,
//     cooking_time: 90,
//     instructions: [
//       "Couper l'agneau en morceaux.",
//       "Émincer les oignons, l'ail et le gingembre.",
//       "Faire revenir les oignons, l'ail et le gingembre dans de l'huile.",
//       'Ajouter la pâte de curry et mélanger.',
//       "Incorporer les morceaux d'agneau et les faire dorer.",
//       'Ajouter les tomates et le lait de coco, puis laisser mijoter 90 minutes.',
//       'Servir avec de la coriandre fraîche en garniture.',
//     ],
//     tags: [
//       { id: '9', name: 'Curry', description: 'Plats épicés à base de curry' },
//       { id: '6', name: 'Plat principal' },
//     ],
//   },
// ];
