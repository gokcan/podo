import {
  FETCH_TEMPLATE_ERROR,
  FETCH_TEMPLATE,
  FETCH_TEMPLATE_SUCCESS,
} from '../constants/action-types/template-fetch';

const initialState = {
  templateInfo: [],
  isLoading: false,
  error: false,
  page: 0,
};

export const getTemplateSelector = (state: Object) => ({ ...state.template });

const templateReducer = (state: Object = initialState, action: Object) => {
  switch (action.type) {
    case FETCH_TEMPLATE_SUCCESS: {
      const { templateInfo } = action.payload;
      const templates = templateInfo.filter(template =>
        !state.templateInfo.map(o =>
          o.id).includes(template.id));

      return {
        ...state,
        isLoading: false,
        error: false,
        templateInfo: [...state.templateInfo, ...templates],
      };
    }
    case FETCH_TEMPLATE: {
      return {
        ...state,
        isLoading: true,
        error: false,
        page: action.payload.page,
      };
    }
    case FETCH_TEMPLATE_ERROR: {
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    }
    default: {
      return state;
    }
  }
};

export default templateReducer;
