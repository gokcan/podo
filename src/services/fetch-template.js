import { apiUrl, readUrl, rpp} from '../config';
import request from '../utils/request';

/**
 * Fetches template data from Jotform API.
 */
export const fetchTemplateData = async (p) => {
  try {
    const s = p * rpp;
    const url = `${readUrl}?rpp=${rpp}&start=${s}&curr_page=${p}`;
    const response = await request(url);
    return response;
  } catch (error) {
    throw error;
  }
};

