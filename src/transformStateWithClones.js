'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  const result = [];
  let currentState = { ...state };

  for (const action of actions) {
    if (action.type === 'clear') {
      currentState = {};
    }

    if (action.type === 'addProperties') {
      currentState = Object.assign({}, currentState, action.extraData);
    }

    if (action.type === 'removeProperties') {
      currentState = Object.assign({}, currentState);

      action.keysToRemove.forEach((key) => {
        delete currentState[key];
      });
    }

    result.push(Object.assign({}, currentState));
  }

  return result;
}

module.exports = transformStateWithClones;
