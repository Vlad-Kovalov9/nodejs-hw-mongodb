import { SORT_ORDER } from '../constants/index.js';

const parseSortOrder = (sortOrder) => {
  const isKnownSortOrder = [SORT_ORDER.ASC, SORT_ORDER.DESC].includes(
    sortOrder,
  );
  if (isKnownSortOrder) return sortOrder;

  return SORT_ORDER.ASC;
};

export const parseSortParams = (query) => {
  const { sortOrder } = query;

  const parsedSortOrder = parseSortOrder(sortOrder);

  return {
    sortOrder: parsedSortOrder,
    sortBy: 'name',
  };
};
