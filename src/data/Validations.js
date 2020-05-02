export default function expenseValidation(newExpense) {
  const errors = [];

  if (newExpense.description.trim() === "") {
    errors.push("Description cannot be empty!");
  }

  if (newExpense.amount.trim() === "") {
    errors.push("Amount cannot be empty!");
  }

  return errors;
}
