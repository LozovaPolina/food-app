import { createContext, ReactNode, useContext, useReducer } from "react";

type CalcState = {
  gender: "male" | "women";
  activity: "low" | "small" | "medium" | "high";
};
type ContextCalcValue = {
  setGender: (gender: CalcState["gender"]) => void;
  setActivity: (activity: CalcState["activity"]) => void;
} & CalcState;

const CalcContext = createContext<ContextCalcValue | null>(null);

const initialState: CalcState = {
  gender: "male",
  activity: "medium",
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
  gender: CalcState["gender"];
};
type SetActivityAction = {
  type: "SET_ACTIVITY";
  activity: CalcState["activity"];
};
type Action = SetGenderAction | SetActivityAction;

function calcReducer(state: CalcState, action: Action): CalcState {
  switch (action.type) {
    case "SET_GENDER":
      return {
        ...state,
        gender: action.gender,
      };
    case "SET_ACTIVITY":
      return {
        ...state,
        activity: action.activity,
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
    activity: calcState.activity,
    setActivity: (activity) =>
      dispatch({ type: "SET_ACTIVITY", activity: activity }),
    setGender: (gender) => dispatch({ type: "SET_GENDER", gender: gender }),
  };

  return (
    <CalcContext.Provider value={contextValue}>{children}</CalcContext.Provider>
  );
}
