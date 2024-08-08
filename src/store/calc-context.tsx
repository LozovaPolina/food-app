import {
  createContext,
  Dispatch,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useReducer,
} from "react";

type CalcState = {
  gender: "male" | "women";
  activity: "low" | "small" | "medium" | "high";

  height: number;
  weight: number;
  age: number;
  result: number;
};

type ContextCalcValue = {
  setGender: (gender: CalcState["gender"]) => void;
  setActivity: (activity: CalcState["activity"]) => void;
  setConstitution: (height: number, weight: number, age: number) => void;
} & CalcState;

const CalcContext = createContext<ContextCalcValue | null>(null);

const initialState: CalcState = {
  gender: "male",
  activity: "medium",
  height: 0,
  weight: 0,
  age: 0,
  result: 0,
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
type SetCaloriesResultAction = {
  type: "SET_CALORIES_RESULT";
  result: number;
};
type SetConstitutionAction = {
  type: "SET_CONSTITUTION";
  payload: {
    height: number;
    weight: number;
    age: number;
  };
};
type Action =
  | SetGenderAction
  | SetActivityAction
  | SetCaloriesResultAction
  | SetConstitutionAction;

const activityCoefficient = {
  low: 1.2,
  small: 1.375,
  medium: 1.55,
  high: 1.725,
};

type ThunkAction = (
  dispatch: Dispatch<Action>,
  getState: () => CalcState
) => void;

const calculateCaloriesThunk: ThunkAction = (dispatch, getState) => {
  const state = getState();

  const { activity, age, gender, height, weight } = state;
  if (age <= 0 || height <= 0 || weight <= 0) return;
  let basalMetabolicRate: number;
  let result: number;
  if (gender === "male") {
    basalMetabolicRate = 10 * weight + 6.25 * height - 5 * age + 5;
    // 10 * weight (kg) + 6.25 * height(cm) - 5 * age(y) + 5 for (man)
  } else {
    basalMetabolicRate = 10 * weight + 6.25 * height - 5 * age - 161;
    // 10 * weight(kg) + 6.25 * height(cm) - 5* age(y) - 161 for ​(woman)
  }
  result = Math.abs(
    Math.floor(basalMetabolicRate * activityCoefficient[activity])
  );

  dispatch({ type: "SET_CALORIES_RESULT", result });
};

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
    case "SET_CONSTITUTION":
      return {
        ...state,
        height: +action.payload.height,
        weight: +action.payload.weight,
        age: +action.payload.age,
      };
    case "SET_CALORIES_RESULT":
      return {
        ...state,
        result: action.result,
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

  useEffect(() => {
    calculateCaloriesThunk(dispatch, () => ({
      activity: calcState.activity,
      age: calcState.age,
      gender: calcState.gender,
      height: calcState.height,
      weight: calcState.weight,
      result: 0,
    }));
  }, [
    calcState.gender,
    calcState.activity,
    calcState.height,
    calcState.weight,
    calcState.age,
  ]);

  const setActivity = useCallback((activity: CalcState["activity"]) => {
    dispatch({ type: "SET_ACTIVITY", activity: activity });
  }, []);
  const setGender = useCallback((gender: CalcState["gender"]) => {
    dispatch({ type: "SET_GENDER", gender: gender });
  }, []);
  const setConstitution = useCallback(
    (height: number, weight: number, age: number) => {
      dispatch({
        type: "SET_CONSTITUTION",
        payload: { height, weight, age },
      });
    },
    []
  );
  const contextValue: ContextCalcValue = {
    ...calcState,
    setActivity,
    setGender,
    setConstitution,
  };

  return (
    <CalcContext.Provider value={contextValue}>{children}</CalcContext.Provider>
  );
}
