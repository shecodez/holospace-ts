import { Region, DiskSpaceType } from '@/store/interfaces';

export const decks = [
  { id: '1', name: 'Resume | NJN', ids: '1', hq: Region.US_EAST, createdBy: '1' },
  { id: '2', name: '이거 매워요?', ids: '6', hq: Region.US_EAST, createdBy: '1' },
  { id: '3', name: '見ぬが花', ids: '7', hq: Region.JP_ASIA, createdBy: '1' },
  //, { id: "4", name: "Deck 4", ids: "1", createdBy: "1" },
  // { id: "5", name: "Deck 5", ids: "1", createdBy: "1" },
  // { id: "6", name: "Deck 6", ids: "1", createdBy: "1" },
  // { id: "7", name: "Deck 7", ids: "1", createdBy: "1" },
  // { id: "8", name: "Deck 8", ids: "1", createdBy: "1" },
  // { id: "9", name: "Deck 9", ids: "1", createdBy: "1" },
  // { id: "14", name: "Deck 14", ids: "1", createdBy: "1" },
  // { id: "15", name: "Deck 15", ids: "1", createdBy: "1" },
  // { id: "16", name: "Deck 16", ids: "1", createdBy: "1" },
  // { id: "17", name: "Deck 17", ids: "1", createdBy: "1" },
  // { id: "18", name: "Deck 18", ids: "1", createdBy: "1" },
  // { id: "19", name: "Deck 19", ids: "1", createdBy: "1" }
];

export const diskSpaces = [
  {
    id: '1',
    ownerId: '1',
    isSsh: false,
    name: 'init',
    topic: 'rawr',
    type: DiskSpaceType.TEXT, canDelete: false,
  },
  { id: '2', ownerId: '1', isSsh: false, name: 'Education', type: DiskSpaceType.TEXT, canDelete: true },
  { id: '3', ownerId: '1', isSsh: false, name: 'Experience', type: DiskSpaceType.TEXT, canDelete: true },
  { id: '4', ownerId: '1', isSsh: false, name: 'The Voice', type: DiskSpaceType.VOIP, canDelete: true },
  { id: '5', ownerId: '1', isSsh: false, name: 'Holodeck 18', type: DiskSpaceType.HOLO, canDelete: true },
  { id: '6', ownerId: '2', isSsh: false, name: 'init', type: DiskSpaceType.TEXT, canDelete: false },
  { id: '7', ownerId: '3', isSsh: false, name: 'init', type: DiskSpaceType.TEXT, canDelete: false },
];

export const memberships = [];
export const subscriptions = [];
export const friendships = [];

export const presence = [
  {
    diskId: '4',
    users: [{ id: '4', username: 'WillIAm' }],
  },
  {
    diskId: '5',
    users: [
      { id: '2', username: '龍ハヤブサ' },
      { id: '6', username: '홍길동' },
    ],
  },
];

export const users = [
  {
    id: '0',
    username: 'Guest',
    pin: 1234,
    online: true,
    status: 'SHOW',
    //createdAt: subMonths(today, 1),
  },
  {
    id: '1',
    username: 'Niico',
    pin: 1337,
    online: true,
    status: 'SHOW',
    //createdAt: subDays(today, 11),
  },
  {
    id: '2',
    username: '龍ハヤブサ',
    pin: 6323,
    online: true,
    status: 'BUSY',
    //createdAt: subMonths(today, 8),
  },
  {
    id: '3',
    username: 'Kai',
    pin: 3469,
    online: true,
    status: 'HIDE',
    //createdAt: subDays(today, 24),
  },
  {
    id: '4',
    username: 'WillIAm',
    pin: 2052,
    online: true,
    status: 'AWAY',
    avatarUrl: 'https://randomuser.me/api/portraits/men/45.jpg',
    //createdAt: subDays(today, 5),
  },
  {
    id: '5',
    username: '山田太郎',
    pin: 4284,
    online: false,
    status: 'SHOW',
    //createdAt: subDays(today, 14),
  },
  {
    id: '6',
    username: '홍길동',
    pin: 9282,
    online: true,
    status: 'SHOW',
    //createdAt: subMonths(today, 3),
  },
  {
    id: '7',
    username: 'IronMan',
    pin: 5353,
    online: false,
    status: 'SHOW',
    //createdAt: subDays(today, 9),
  },
];

export const messages = [];

export const events = [
  {
    name: 'Vacation',
    details: 'Going to the beach!',
    start: '2018-12-29',
    end: '2019-01-01',
    color: 'blue',
  },
  {
    name: 'Meeting',
    details: 'Spending time on how we do not have enough time',
    start: '2019-01-07 09:00',
    end: '2019-01-07 09:30',
    color: 'indigo',
  },
  {
    name: 'Large Event',
    details: 'This starts in the middle of an event and spans over multiple events',
    start: '2018-12-31',
    end: '2019-01-04',
    color: 'deep-purple',
  },
  {
    name: '3rd to 7th',
    details: 'Testing',
    start: '2019-01-03',
    end: '2019-01-07',
    color: 'cyan',
  },
  {
    name: 'Big Meeting',
    details: 'A very important meeting about nothing',
    start: '2019-01-07 08:00',
    end: '2019-01-07 11:30',
    color: 'red',
  },
  {
    name: 'Another Meeting',
    details: 'Another important meeting about nothing',
    start: '2019-01-07 10:00',
    end: '2019-01-07 13:30',
    color: 'brown',
  },
  {
    name: '7th to 8th',
    start: '2019-01-07',
    end: '2019-01-08',
    color: 'blue',
  },
  {
    name: 'Lunch',
    details: 'Time to feed',
    start: '2019-01-07 12:00',
    end: '2019-01-07 15:00',
    color: 'deep-orange',
  },
  {
    name: '30th Birthday',
    details: 'Celebrate responsibly',
    start: '2019-01-03',
    color: 'teal',
  },
  {
    name: 'New Year',
    details: 'Eat chocolate until you pass out',
    start: '2019-01-01',
    end: '2019-01-02',
    color: 'green',
  },
  {
    name: 'Conference',
    details: 'The best time of my life',
    start: '2019-01-21',
    end: '2019-01-28',
    color: 'grey darken-1',
  },
  {
    name: 'Hackathon',
    details: 'Code like there is no tommorrow',
    start: '2019-01-30 23:00',
    end: '2019-02-01 08:00',
    color: 'black',
  },
  {
    name: 'event 1',
    start: '2019-01-14 18:00',
    end: '2019-01-14 19:00',
    color: '#4285F4',
  },
  {
    name: 'event 2',
    start: '2019-01-14 18:00',
    end: '2019-01-14 19:00',
    color: '#4285F4',
  },
  {
    name: 'event 5',
    start: '2019-01-14 18:00',
    end: '2019-01-14 19:00',
    color: '#4285F4',
  },
  {
    name: 'event 3',
    start: '2019-01-14 18:30',
    end: '2019-01-14 20:30',
    color: '#4285F4',
  },
  {
    name: 'event 4',
    start: '2019-01-14 19:00',
    end: '2019-01-14 20:00',
    color: '#4285F4',
  },
  {
    name: 'event 6',
    start: '2019-01-14 21:00',
    end: '2019-01-14 23:00',
    color: '#4285F4',
  },
  {
    name: 'event 7',
    start: '2019-01-14 22:00',
    end: '2019-01-14 23:00',
    color: '#4285F4',
  },
];
