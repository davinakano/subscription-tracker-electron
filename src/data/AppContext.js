import React, { useContext, createContext, useReducer } from "react";
import expenseValidation from "./Validations";

export const AppContext = createContext();

export function useAppState() {
  // The value passed to our Context
  // is the return value of useReducer
  // which returns [state, dispatch]
  //
  // So this function returns state
  return useContext(AppContext)[0];
}

export function useAppReducer() {
  // The value passed to our Context
  // is the return value of useReducer
  // which returns [state, dispatch]
  //
  // So this function returns dispatch
  return useContext(AppContext)[1];
}

const appStateReducer = (state, action) => {
  switch (action.type) {
    case "ADD_EXPENSE": {
      const { newExpense } = action;
      const errors = expenseValidation(newExpense);

      if (errors.length) {
        return {
          ...state,
          errors,
        };
      }

      return {
        ...state,
        expenses: [...state.expenses, { ...newExpense }],
        summaryAmount: state.summaryAmount + newExpense.amount,
        errors: [],
      };
    }
    case "REMOVE_EXPENSE": {
      const { expenseId, expenseAmount } = action;

      return {
        ...state,
        expenses: state.expenses.filter((expense) => expense.id !== expenseId),
        summaryAmount: state.summaryAmount - expenseAmount,
      };
    }
    default:
      return state;
  }
};

export function AppStateProvider({ children }) {
  const initialState = { expenses: [], summaryAmount: 0 };
  const value = useReducer(appStateReducer, initialState);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
