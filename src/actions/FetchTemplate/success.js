import { FETCH_TEMPLATE_SUCCESS } from '../../constants/action-types/template-fetch';

export const fetchTemplateSuccess = (templateInfo: Object) => (
  {
    type: FETCH_TEMPLATE_SUCCESS,
    payload: { templateInfo },
  }
);
