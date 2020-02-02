import { saveToLocal } from '../Tools';

const { LOCAL_KEY_STATUS } = process.env;

const updateAndSave = (state: object, payload: string, value: any) => {
  const finalState = { ...state, [payload]: value };
  saveToLocal(finalState, LOCAL_KEY_STATUS || '');
  return finalState;
};

interface ActionType {
  type: string;
  payload: any;
}

export default (state: object, action: ActionType) => {
  const { type, payload } = action;

  switch (type) {
    case 'start':
      return updateAndSave(state, payload, 'loading');
    case 'error': {
      const { type: entity, error, from } = payload;
      console.error(error);
      return updateAndSave(state, entity, from ? { [from]: 'error' } : 'error');
    }
    case 'success':
      return updateAndSave(state, payload, 'success');
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
