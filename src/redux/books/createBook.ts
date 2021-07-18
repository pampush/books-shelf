import { BookPayload, BookResponse, BookType } from './types';

export const createBooksFromAPIResponse = (volumes: BookResponse): BookPayload | null => {
  const APIVolumes = {
    totalItems: volumes.totalItems,
    items: volumes.items,
  };

  if (APIVolumes.totalItems === 0) return null;

  const newBooksStructure: BookType[] = APIVolumes.items.map((item) => ({
    id: item.id,
    imageLinks: item.volumeInfo.imageLinks,
    title: item.volumeInfo.title,
    categories: item.volumeInfo.categories,
    authors: item.volumeInfo.authors,
    description: item.volumeInfo.description,
  }));

  return { totalItems: APIVolumes.totalItems, items: newBooksStructure };
};
