import { FETCH_TEMPLATE_ERROR, FETCH_TEMPLATE, FETCH_TEMPLATE_SUCCESS } from '../constants/action-types/template-fetch';

const initialState = {
	templateInfo: {},
	isLoading: false,
	error: false
};

export const getTemplateSelector = (state: Object) => ({ ...state.template });

const templateReducer = (state: Object = initialState, action: Object) => {
	switch (action.type) {
		case FETCH_TEMPLATE_SUCCESS: {
			return {
				isLoading: false,
				error: false,
				templateInfo: action.payload.templateInfo
			};
		}
		case FETCH_TEMPLATE: {
			return {
				isLoading: true,
				error: false,
				templateInfo: {}
			};
		}
		case FETCH_TEMPLATE_ERROR: {
			return {
				...state,
				isLoading: false,
				error: true
			};
		}
		default: {
			return state;
		}
	}
};

export default templateReducer;
