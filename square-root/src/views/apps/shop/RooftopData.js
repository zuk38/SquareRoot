import s1 from '../../../assets/images/products/squared/roof-gardens/rooftop-square.jpg';
import s2 from '../../../assets/images/products/squared/roof-gardens/rooftop-biodiverse.jpg';
import s3 from '../../../assets/images/products/squared/roof-gardens/rooftop-sunbed.jpg';
import s4 from '../../../assets/images/products/squared/roof-gardens/rooftop-edible.jpg';
import s5 from '../../../assets/images/products/s5.jpg';
import s6 from '../../../assets/images/products/s6.jpg';
import s7 from '../../../assets/images/products/s7.jpg';
import s8 from '../../../assets/images/products/s8.jpg';
import s9 from '../../../assets/images/products/s9.jpg';
import s10 from '../../../assets/images/products/s10.jpg';
import s11 from '../../../assets/images/products/s11.jpg';
import s12 from '../../../assets/images/products/s12.jpg';

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
    title: 'Biodiverse Roof',
    category: 'Rooftop',
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
    title: 'Combo Rooftop',
    category: 'Rooftop',
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
    title: 'Edibles',
    category: 'Rooftop',
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
