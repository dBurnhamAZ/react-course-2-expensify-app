import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should set-up removeExpense action object', () => {
  const action = removeExpense({ id: '123abc' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  });
});


test('should set-up editExpense action object', () => {
  const action = editExpense('456dcb', { note: 'Hello Edit_Expense Value' });
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '456dcb',
    updates: {
        note: 'Hello Edit_Expense Value'
      }
    });
});

test('should set up add expense with provided values', () => {
    const expenseData = {
      description: 'Rent',
      amount: '109500',
      createdAt: 1000,
      note: 'This was last months rent'
    }

  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  })

});

test('should set up add expense with default values', () => {
  // Call addExpense with no data...
  // Assert the value of the return...
  const expenseData = {
    description: '',
    amount: '',
    createdAt: 0,
    note: ''
  }
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  });
});
