import s1 from '../../../assets/images/products/squared/rainbeds/rainbed-native.jpg';
import s2 from '../../../assets/images/products/squared/rainbeds/rainbed-water.jpg';
import s3 from '../../../assets/images/products/squared/rainbeds-square.jpg';

const Shopitems = [
  {
    title: 'Native Plants',
    category: 'Rainbed',
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
    title: 'Water Management',
    category: 'Rainbed',
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
    title: 'Kitchen Garden',
    category: 'Rainbed',
    price: '$10',
    colors: [
      (theme) => theme.palette.primary.main,
      (theme) => theme.palette.secondary.main,
    ],
    photo: s3,
    id: 3,
    star: [1, 2, 3],
  },
];

export default Shopitems;
