import {
  RBF,
  RBM,
  RBN,
  RG1618,
  RGM,
  RGN,
  RMF,
  RMM,
  RMN,
  RSF,
  RSM,
  RSN,
} from './image';

const products = [
  {
    id: 1,
    name: 'Rattan Manau',
    image: RMN,
    status: '',
    descriptiom:
      'Rattan sells well in local and international markets which has high commercial value. Mostly used for household furniture such as tables, chairs, beds amd others.',
    characteristicTitle: 'Manau',
    characteristic: [
      {
        characteristicId: 111,
        characteristicText: 'Diameter 2 - 5 cm.',
      },
      {
        characteristicId: 112,
        characteristicText: 'Segment length 18 - 35 cm.',
      },
      {
        characteristicId: 113,
        characteristicText:
          'Usually made as rattan handicraft as well and also part of home furniture such as rattan table, rattan sofa, rattan lantern and many more.',
      },
      {
        characteristicId: 114,
        characteristicText:
          'One of few rattans that have sold arround the world.',
      },
    ],
    items: [
      {
        itemId: 11,
        itemImage: RMF,
        itemName: 'Rattan Manau 1',
      },
      {
        itemId: 12,
        itemImage: RMM,
        itemName: 'Rattan Manau 2',
      },
      {
        itemId: 13,
        itemImage: RMN,
        itemName: 'Rattan Manau 1',
      },
    ],
  },
  {
    id: 2,
    name: 'Rattan Sega',
    image: RSN,
    status: '',
    descriptiom: '',
    characteristicTitle: 'Sega',
    characteristic: [
      {
        characteristicId: 211,
        characteristicText: 'Smaller than Manau, Baliong and Getah rattan.',
      },
      {
        characteristicId: 212,
        characteristicText: 'Diameter 25 mm.',
      },
      {
        characteristicId: 213,
        characteristicText: 'Segment length 15 - 50 cm.',
      },
    ],
    items: [
      {
        itemId: 21,
        itemImage: RSF,
        itemName: 'Rattan Sega 1',
      },
      {
        itemId: 22,
        itemImage: RSM,
        itemName: 'Rattan Sega 2',
      },
    ],
  },
  {
    id: 3,
    name: 'Rattan Baliong',
    image: RBN,
    status: '',
    descriptiom: '',
    characteristicTitle: 'Baliong',
    characteristic: [
      {
        characteristicId: 311,
        characteristicText: 'Diameter 25 - 35 mm.',
      },
      {
        characteristicId: 312,
        characteristicText:
          'Mostly as rattan frame before it turns as rattan products.',
      },
      {
        characteristicId: 313,
        characteristicText: 'Segment length 20 - 30 cm.',
      },
      {
        characteristicId: 314,
        characteristicText: 'The colour of this rattan is reddish brown.',
      },
    ],
    items: [
      {
        itemId: 31,
        itemImage: RBF,
        itemName: 'Rattan Baliong 1',
      },
      {
        itemId: 32,
        itemImage: RBM,
        itemName: 'Rattan Baliong 2',
      },
      {
        itemId: 33,
        itemImage: RBN,
        itemName: 'Rattan Baliong 3',
      },
    ],
  },
  {
    id: 4,
    name: 'Rattan Getah',
    image: RGN,
    status: '',
    descriptiom: '',
    characteristicTitle: 'Getah',
    characteristic: [
      {
        characteristicId: 411,
        characteristicText: 'A bit more longer than Manau and Baliong rattan.',
      },
      {
        characteristicId: 412,
        characteristicText: 'Diameter 5 - 10 cm.',
      },
      {
        characteristicId: 413,
        characteristicText: 'Segment length 30 - 40 cm.',
      },
    ],
    items: [
      {
        itemId: 41,
        itemImage: RG1618,
        itemName: 'Rattan Getah 1',
      },
      {
        itemId: 42,
        itemImage: RGM,
        itemName: 'Rattan Getah 2',
      },
      {
        itemId: 43,
        itemImage: RGN,
        itemName: 'Rattan Getah 3',
      },
    ],
  },
];

export { products };
