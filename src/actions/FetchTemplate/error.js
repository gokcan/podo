import { FETCH_TEMPLATE_ERROR } from '../../constants/action-types/template-fetch';

export const fetchTemplateError = () => (
  {
    type: FETCH_TEMPLATE_ERROR,
    payload: {
      error: true,
    },
  }
);
