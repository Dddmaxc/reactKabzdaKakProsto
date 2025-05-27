import { reducer, StateType, TOGGLE_COLLAPSED } from "./Redecer";

test("collapsed should be true", () => {
  let state: StateType = {
    collapsed: false,
  };

  const newState = reducer(state, { type: TOGGLE_COLLAPSED });

  expect(newState.collapsed).toBe(true);
});

test("collapsed should be false", () => {
  let state: StateType = {
    collapsed: true,
  };

  const newState = reducer(state, { type: TOGGLE_COLLAPSED });

  expect(newState.collapsed).toBe(false);
});

test("reducer on error", () => {
  let state: StateType = {
    collapsed: true,
  };

  expect(() => {
    reducer(state, { type: "TOGGLE-COLLAPSED" });
  }).toBeTruthy;
});
