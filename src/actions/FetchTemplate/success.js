import { FETCH_TEMPLATE_SUCCESS } from '../../constants/action-types/template-fetch';

const fetchTemplateSuccess = (templateInfo: Object) => ({
  type: FETCH_TEMPLATE_SUCCESS,
  payload: {
    templateInfo: templateInfo.data,
  },
});

export default fetchTemplateSuccess;
