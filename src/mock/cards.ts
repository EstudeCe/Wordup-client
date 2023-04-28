import theme from '../assets/styles/theme';
import headset from '../assets/icons/headset.svg';
import book from '../assets/icons/book.svg';
import mic from '../assets/icons/mic.svg';
import pencil from '../assets/icons/pencil.svg';

interface Cards {
  title: string;
  color: string;
  percent: number;
  description: string;
  icon: string;
  path: string;
}

export const cards: Cards[] = [
  {
    title: 'Listening',
    icon: headset,
    color: theme.colors.blue[400],
    percent: 15,
    description: 'Speak 10 minutes',
    path: '/listening',
  },
  {
    title: 'Dictionary',
    icon: book,
    color: theme.colors.red[300],
    percent: 17,
    description: 'Learn 5 words',
    path: '/dictionary',
  },
  {
    title: 'Gramar',
    icon: pencil,
    color: theme.colors.green[400],
    percent: 9,
    description: 'Learn 5 rules',
    path: '/gramar',
  },
  {
    title: 'Pronunciation',
    icon: mic,
    color: theme.colors.orange[400],
    percent: 90,
    description: 'Read 10 minutes',
    path: '/pronunciation',
  },
];
