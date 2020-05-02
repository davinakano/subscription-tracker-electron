export default function expenseValidation(newExpense) {
  const errors = [];

  if (newExpense.description.trim() === "") {
    errors.push("Description cannot be empty!");
  }

  if (newExpense.amount === 0) {
    errors.push("Amount cannot be empty!");
  }

  return errors;
}
