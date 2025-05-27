type ActionType = {
  type: typeof TOGGLE_COLLAPSED;
};

export const TOGGLE_COLLAPSED = "TOGGLE-COLLAPSED";

export type StateType = {
  collapsed: boolean;
};

export let Reducer = (state: StateType, action: ActionType): StateType => {
  switch (action.type) {
    case TOGGLE_COLLAPSED:
      return { ...state, collapsed: !state.collapsed };

    default:
      throw new Error("Bad action type");
  }
};

