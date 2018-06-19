import { apiUrl } from '../config';
import request from '../utils/request';

/**
 * Fetches template data from Jotform API.
 */
export const fetchTemplateData = async () => {
  try {
    // const url = `${apiUrl}${id}?api_key=${apiKey}`;
    const url = 'https://www.jotform.com/form-templates/api/FormList/read';
    const response = await request(url);
    return response;
  } catch (error) {
    throw error;
  }
};

