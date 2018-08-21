import moment from 'moment';

export default [{
  id: 1,
  description: 'Gum',
  note: '',
  amount: 194,
  createdAt: 0
}, {
  id: 2,
  description: 'Rent',
  note: 'Mortguage',
  amount: 259,
  createdAt: moment(0).subtract(4, 'day').valueOf()
}, {
  id: 3,
  description: 'Credit Cards',
  note: 'More Bills',
  amount: 1050,
  createdAt: moment(0).add(4, 'day').valueOf()
}];
