import { User } from '../types/user'
import { Task } from '../types/task'

export const DUMMY_USERS: User[] = [
  {
    id: 'u1',
    name: 'Jasmine Washington',
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzU-i4mXLt0-6NShEHsXqL9c8Ixpu8MwWRYw&s',
  },
  {
    id: 'u2',
    name: ' Marcus Johnson',
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzd-kKlLQ9KNRNkhSq7PEQq16jLxn-ZojuDiKJH0ZD52PPwrdQnffUQrilP8Z4TRusHUI&usqp=CAU',
  },
  {
    id: 'u3',
    name: 'Emily Thompson',
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrnxiOguJ-xAd0KXtt29pHVgTxFx_59mWppwp8w3rKTGfUUseWoTLo6hDG5UCs70iihG4&usqp=CAU',
  },
  {
    id: 'u4',
    name: 'David Miller',
    avatar: 'https://media.licdn.com/dms/image/D5603AQFT9rqJ-mPl5A/profile-displayphoto-shrink_200_200/0/1685973491359?e=2147483647&v=beta&t=YJgEq58GsZuRHry_taQtePZSefVajMwL5znMpzc9h20',
  },
  {
    id: 'u5',
    name: 'Priya Patel',
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuf0HB6V4DHmm-nXInuzEvi58Nz-gHRizphg&s',
  },
  {
    id: 'u6',
    name: 'Arjun Singh',
    avatar: 'https://i.cbc.ca/1.6435183.1651203321!/fileImage/httpImage/image.jpg_gen/derivatives/square_140/avneet-dhillon.jpg',
  },
];

export const TASKS: Task[] = [
  {
    id: 't1',
    userId: 'u1',
    title: 'Master Angular',
    summary: 'Основатели Solana — экс-сотрудник Qualcomm Анатолий Яковенко, бывший разработчик BREW Грег Фицжеральд и доктор наук в области физики частиц Эрик Уильямс. ',
    dueDate: '2025-12-02'
  },
  {
    id: 't2',
    userId: 'u2',
    title: 'Master Angular',
    summary: 'Основатели Solana — экс-сотрудник Qualcomm Анатолий Яковенко, бывший разработчик BREW Грег Фицжеральд и доктор наук в области физики частиц Эрик Уильямс. ',
    dueDate: '2025-12-02'
  },
  {
    id: 't3',
    userId: 'u3',
    title: 'Master Angular',
    summary: 'Основатели Solana — экс-сотрудник Qualcomm Анатолий Яковенко, бывший разработчик BREW Грег Фицжеральд и доктор наук в области физики частиц Эрик Уильямс. ',
    dueDate: '2025-12-02'
  },
  {
    id: 't1',
    userId: 'u1',
    title: 'Master Angular',
    summary: 'Основатели Solana — экс-сотрудник Qualcomm Анатолий Яковенко, бывший разработчик BREW Грег Фицжеральд и доктор наук в области физики частиц Эрик Уильямс. ',
    dueDate: '2025-12-02'
  },
]
