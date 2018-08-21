import expenses from '../fixtures/expenses';
import expenseReducer from '../../reducers/expenses';

test('should set up reducer default expense values', () => {
  const state = expenseReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  const state = expenseReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense by id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  };
  const state = expenseReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should add expense', () => {
  const expense = {
    id: '109',
    description: 'Laptop',
    note: 'This is my note',
    createdAt: 20000,
    amount: 29600
  };

  const action = {
    type: 'ADD_EXPENSE',
    expense
  };

  const state = expenseReducer(expense, action);
  expect(state).toEqual([...expense, expense]);
});

test('should edit an expense', () => {
  const amount = 122000;
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[1].id,
    updates: {
      amount
    }
  };
  const state = expenseReducer(expenses, action)
  expect(state[1].amount).toBe(amount);
});

test('should not edit if id not found', () => {
  const amount = 122000;
  const action = {
    type: 'EDIT_EXPENSE',
    id: '-1',
    updates: {
      amount
    }
  };
  const state = expenseReducer(expenses, action)
  expect(state).toEqual(expenses);
});
