
//utils function _id replece id how mongodbd
export const replaceMongoIdInArray = (array) => {
    const mappedArray = array.map(item => {
        return {
            id: item._id.toString(),
            ...item
        }
    }).map(({ _id, ...rest }) => rest);

    return mappedArray;
}