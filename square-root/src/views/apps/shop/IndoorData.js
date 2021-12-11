import s1 from '../../../assets/images/products/squared/indoor-square.jpg';
import s2 from '../../../assets/images/products/squared/wall-square.jpeg';

const Shopitems = [
  {
    title: 'Green Wall',
    category: 'Indoor',
    price: '$12',
    colors: [
      (theme) => theme.palette.secondary.main,
      (theme) => theme.palette.primary.main,
    ],
    photo: s1,
    id: 1,
    icon: 'cloud-rain',
  },
  {
    title: 'Skyhigh Wall',
    category: 'Indoor',
    price: '$30',
    colors: [
      (theme) => theme.palette.success.main,
      (theme) => theme.palette.secondary.main,
    ],
    photo: s2,
    id: 2,
    star: [1, 2, 3, 4],
  },
];

export default Shopitems;
