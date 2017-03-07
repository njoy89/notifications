export const rewire = (source, property, newSource) => {
    source.__Rewire__(property, newSource);
};

export const resetDependency = (source, property) => {
    source.__ResetDependency__(property);
};
