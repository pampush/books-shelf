//
// Module for converting types from unknown to specified in app
// and creating result books array
//
import { BookRequestPayload, BookType, ImageLinks } from './types';

interface ResponseBookVolumeInfo {
  id: unknown;
  volumeInfo: ResponseBookData;
}

export interface ResponseBooks {
  totalItems: unknown;
  items: Array<ResponseBookVolumeInfo>;
}

interface ResponseImageLinks {
  smallThumbnail?: unknown;
  thumbnail?: unknown;
}

interface ResponseBookData {
  imageLinks?: ResponseImageLinks;
  title?: unknown;
  categories?: Array<unknown>;
  authors?: Array<unknown>;
  description?: unknown;
}

/**
 * This function validate, converting types and restructuring data from response, creating viable array for app
 * @param volumes term of Google Books API, but that is array of data and meta.
 * @returns app-ready array of books
 */
export const createBooksFromAPIResponse = (volumes: ResponseBooks): BookRequestPayload => {
  const APIVolumes = {
    totalItems: parseNumber(volumes.totalItems),
    items: parseArray(volumes.items),
  };

  const newBooksStructure: BookType[] = APIVolumes.items.map((item) => ({
    id: parseString(item.id),
    imageLinks: parseImageLinks(item.volumeInfo.imageLinks),
    title: parseString(item.volumeInfo.title),
    categories: parseStringArray(item.volumeInfo.categories),
    authors: parseStringArray(item.volumeInfo.authors),
    description: parseString(item.volumeInfo.description),
  }));

  return { totalItems: APIVolumes.totalItems, items: newBooksStructure };
};

/**
 *
 * @param field
 * @returns
 */
const parseString = (field: unknown): string => {
  if (!field) return '';
  if (!isString(field)) throw new Error('Missing or incorrect field');
  return field;
};

const isString = (field: unknown): field is string => {
  return typeof field === 'string' || field instanceof String;
};

/**
 *
 * @param field
 */
const parseStringArray = (field: unknown): string[] => {
  if (!field) {
    return [''];
  }
  if (!isStringArray(field)) throw new Error('Missing or incorrect data');
  return field;
};

const isStringArray = (field: unknown): field is string[] => {
  return Array.isArray(field) && isString(field[0]);
};

/**
 *
 * @param field
 * @returns
 */
const parseImageLinks = (field: unknown): ImageLinks => {
  if (!field) return { smallThumbnail: '', thumbnail: '' };

  if (!isImageLinks(field)) throw new Error('Missing or incorrect image links');
  return field;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isImageLinks = (field: any): field is ImageLinks => {
  return isString(field.smallThumbnail) || isString(field.thumbnail);
};

/**
 *
 * @param field
 * @returns
 */
const parseNumber = (field: unknown): number => {
  if (field === undefined) return 0;
  if (!isNumber(field)) throw new Error('Missing or incorrect number of volumes');

  return field;
};

const isNumber = (field: unknown): field is number => {
  return !Number.isNaN(parseInt(field as string));
};

const parseArray = (field: unknown): Array<ResponseBookVolumeInfo> => {
  if (field === undefined) return [];
  if (!isArray(field)) throw new Error('Missing or incorrect books array');
  return field;
};

const isArray = (field: unknown): field is Array<ResponseBookVolumeInfo> => {
  return Array.isArray(field);
};
