// export const replaceMongoIdInArray = (array) => {
//     return array.map((item) => {
//         if (item._id) {
//             return { ...item, _id: item._id.toString() };
//         }
//         return item;
//     });
// }

export const replaceMongoIdInArray = (array) => {
    const mappedArray = array.map(item => {
        return {
            id: item._id.toString(),
            ...item
        }
    }).map(({ _id, ...rest }) => rest);

    return mappedArray;
}