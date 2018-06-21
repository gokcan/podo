import { FETCH_TEMPLATE } from '../../constants/action-types/template-fetch';

const fetchTemplate = page => ({
  type: FETCH_TEMPLATE,
  payload: {
    isLoading: true,
    page,
  },
});

export default fetchTemplate;
