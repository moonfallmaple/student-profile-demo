
export const STORE_INIDATA = 'STORE_INIDATA';
export const ADD_TAGS = 'ADD_TAGS';
export const REMOVE_TAGS = 'REMOVE_TAGS';


/* update state after fetch */

export function StoreIniData (data) {
  return {
    type: STORE_INIDATA,
    data,
  }
}

export function addTags ({inputValue, id}) {
  return {
    type: ADD_TAGS,
    inputValue,
    id
  }
}

export function removeTags(removedTag,id) {
  return {
    type: REMOVE_TAGS,
    removedTag,
    id
  }
}
