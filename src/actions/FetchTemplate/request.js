import { FETCH_TEMPLATE } from '../../constants/action-types/template-fetch';

export const fetchTemplate = () => (
  {
    type: FETCH_TEMPLATE,
    payload: {
      isLoading: true,
    },
  }
);
