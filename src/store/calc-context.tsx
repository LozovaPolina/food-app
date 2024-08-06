import { createContext, ReactNode, useContext, useReducer } from "react";

type CalcState = {
  gender: "male" | "women";
};
type ContextCalcValue = {
  setGender: (gender: "male" | "women") => void;
} & CalcState;

const CalcContext = createContext<ContextCalcValue | null>(null);

const initialState: CalcState = {
  gender: "male",
};

export function useCalcContext(): ContextCalcValue {
  const ctx = useContext(CalcContext);

  if (ctx === null) {
    throw new Error("CaculatorContext is null - that should not be the case!");
  }
  return ctx;
}

type SetGenderAction = {
  type: "SET_GENDER";
  gender: "male" | "women";
};
type Action = SetGenderAction;
function calcReducer(state: CalcState, action: Action): CalcState {
  switch (action.type) {
    case "SET_GENDER":
      return {
        ...state,
        gender: action.gender,
      };
    default:
      return state;
  }
}

type CalcContextProviderProps = {
  children: ReactNode;
};

export default function CalcContextProvider({
  children,
}: CalcContextProviderProps) {
  const [calcState, dispatch] = useReducer(calcReducer, initialState);
  const contextValue: ContextCalcValue = {
    gender: calcState.gender,
    setGender: (gender) => dispatch({ type: "SET_GENDER", gender: gender }),
  };

  return (
    <CalcContext.Provider value={contextValue}>{children}</CalcContext.Provider>
  );
}
