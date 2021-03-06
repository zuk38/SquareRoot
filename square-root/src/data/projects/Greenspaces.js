import s1 from '../../assets/images/products/squared/roof-gardens/rooftop-square.jpg';
import s2 from '../../assets/images/products/squared/indoor-square.jpg';
import s3 from '../../assets/images/products/squared/wall-square.jpeg';
import s4 from '../../assets/images/products/squared/rainbeds-square.jpg';

const Shopitems = [
  {
    title: 'Tekna Roofgarden',
    category: 'Roofgarden',
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
    title: 'Green Wall',
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
  {
    title: 'Skyhigh Wall',
    category: 'Indoor',
    price: '$10',
    colors: [
      (theme) => theme.palette.primary.main,
      (theme) => theme.palette.secondary.main,
    ],
    photo: s3,
    id: 3,
    star: [1, 2, 3],
  },
  {
    title: 'Kitchen Garden',
    category: 'Rainbed',
    price: '$250',
    colors: [
      (theme) => theme.palette.error.main,
      (theme) => theme.palette.warning.main,
    ],
    photo: s4,
    id: 4,
    star: [1, 2, 3, 4, 5],
  },
];

export default Shopitems;
