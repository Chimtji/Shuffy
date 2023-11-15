export const textToKebabCase = (text: string) => {
  // Replace spaces and underscores with hyphens
  text = text.replace(/ /g, '-').replace(/_/g, '-');

  // Convert to lowercase
  text = text.toLowerCase();

  return text;
};

export const isEqual = (objA: Record<string, unknown>, objB: Record<string, unknown>): boolean => {
  // Check if the objects have the same number of properties
  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  // Check if each property in objA has a matching property in objB with the same value
  for (let key of keysA) {
    if (objA[key] !== objB[key]) {
      return false;
    }
  }

  return true;
};

export const removeDuplicates = (array: Record<string, unknown>[], properties: string[]) => {
  return array.filter(
    (v, i, a) =>
      a.findIndex((v2) => {
        let matches: boolean[] = [];

        properties.forEach((property) => {
          matches.push(v2[property] == v[property]);
        });

        return matches.filter((match) => match).length === properties.length;
      }) === i,
  );
};
