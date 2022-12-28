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
    status: 'Ready Stock',
    descriptiom:
      'Rattan sells well in local and international markets which has high commercial value. Mostly used for househol furniture such as tables, chairs, beds amd others',
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
    status: 'Ready Stock',
    descriptiom: 'Good quality rattan ',
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
    status: 'Pre Order',
    descriptiom: 'Good quality rattan ',
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
    status: 'Pre Order',
    descriptiom: 'Good quality rattan ',
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
