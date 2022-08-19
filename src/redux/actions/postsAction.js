// import {
//     ADD_VAR_TO_LIST,
//     CLEAR_ADDED_VARS_ACTION,
//     CLEAR_RADIO_VAR_LIST,
//     CLOSE_CAT_POPUP,
//     CLOSE_CREATE_DOC_FROM_TEMPLATE_ERROR,
//     CLOSE_DELETE_CAT_POPUP,
//     CLOSE_DELETE_POPUP,
//     CLOSE_DOC_POPUP, CLOSE_EDIT_CAT_POPUP,
//     CLOSE_EDIT_POPUP,
//     CLOSE_POPUP,
//     CREATE_DOC_FROM_TEMPLATE_ERROR,
//     CREATE_NEW_VAR_RADIO,
//     DELETE_ADDED_VAR, DELETE_ADDED_VAR_IN_EDIT,
//     DELETE_VAR_RADIO,
//     EDIT_VAR_ACTION_SUCCESS,
//     GET_CATEGORIES,
//     GET_SUB_CATEGORIES,
//     GET_TEMPLATE_DATA,
//     GET_VAR_BY_ID,
//     GET_VARIABLES,
//     OPEN_CAT_POPUP_ERROR,
//     OPEN_CAT_POPUP_SUCCESS,
//     OPEN_DELETE_CAT_POPUP,
//     OPEN_DELETE_POPUP,
//     OPEN_DOC_POPUP_ERROR,
//     OPEN_DOC_POPUP_SUCCESS, OPEN_EDIT_CAT_POPUP,
//     SEARCH_VAR,
//     SET_CURRENT_CATEGORY_NAME,
//     SET_FILE,
//     SET_SUBCAT_LIST,
//     SET_TEMPLATE_TO_CREATE,
//     SET_TEMPLATES,
//     SET_TYPE,
//     SET_VAR_CREATE_MESSAGE_FAIL,
//     SET_VAR_CREATE_MESSAGE_SUCCESS,
//     SET_VARS_FOR_EDIT,
//     DELETE_FILE
// } from "../types";
// import axios from "axios";
//
// const {REACT_APP_DOCS_API} = process.env
//
//
//
// export const getCategories = () => {
//     return (dispatch) => {
//         axios.get(`${REACT_APP_DOCS_API}documents/categories/`, {}
//         )
//             .then(({data}) => {
//                 return dispatch({type: GET_CATEGORIES, data: data})
//             })
//             .catch((e) => {
//                 // console.log(e.message)
//
//             })
//     }
// }
//
// export const getSubCategories = () => {
//     return (dispatch) => {
//         axios.get(`${REACT_APP_DOCS_API}documents/subcategories/`, {}
//         )
//             .then(({data}) => {
//                 return dispatch({type: GET_SUB_CATEGORIES, data: data})
//             })
//             .catch((e) => {
//                 console.log(e.message)
//
//             })
//     }
// }
//
// export const getVariables = () => {
//     return (dispatch) => {
//         axios.get(`${REACT_APP_DOCS_API}documents/variables/`, {}
//         )
//             .then(({data}) => {
//                 return dispatch({type: GET_VARIABLES, data: data})
//             })
//             .catch((e) => {
//                 console.log(e.message)
//
//             })
//     }
// }
//
// export const searchVariable = (payload) => {
//     return (dispatch) => {
//         axios.get(`${REACT_APP_DOCS_API}documents/variables/?search=${payload}`, {}
//         )
//             .then(({data}) => {
//                 return dispatch({type: GET_VARIABLES, data: data})
//             })
//             .catch((e) => {
//                 console.log(e.message)
//
//             })
//     }
// }
//
// export const createVariable = (payload) => {
//     return (dispatch) => {
//         axios.post(`${REACT_APP_DOCS_API}documents/variables/`, payload
//         )
//             .then(({data}) => {
//                 dispatch({type: SET_VAR_CREATE_MESSAGE_SUCCESS})
//                 dispatch(getVariables());
//
//             })
//             .catch((e) => {
//                 let error = JSON.parse(e.response.request.response);
//                 let errorMesage = '';
//
//                 if (error.key) {
//                     errorMesage += error.key
//                 }
//                 if (error.name) {
//                     errorMesage += error.name
//                 }
//                 dispatch({type: SET_VAR_CREATE_MESSAGE_FAIL, payload: errorMesage})
//
//             })
//     }
// }
//
// export const setDataType = (payload) => ({
//     type: SET_TYPE, payload
// })
//
// export const increaseRadioList = (payload) => ({
//     type: CREATE_NEW_VAR_RADIO, payload
// })
// export const deleteRadioVarAction = (payload) => ({
//     type: DELETE_VAR_RADIO, payload
// })
// export const closePopupAction = () => ({
//     type: CLOSE_POPUP
// })
//
// export const closeDeletePopupAction = () => ({
//     type: CLOSE_DELETE_POPUP
// })
//
// export const openDeletePopupAction = (payload) => ({
//     type: OPEN_DELETE_POPUP, payload
// })
//
// export const clearRadioVarAction = () => ({
//     type: CLEAR_RADIO_VAR_LIST
// })
//
// export const setVarsForEditAction = (payload) => ({
//     type: SET_VARS_FOR_EDIT, payload
// })
//
// export const deleteAddedVarInEditAction = (payload) => ({
//     type: DELETE_ADDED_VAR_IN_EDIT, payload
// })
//
//
// export const deleteVariableAction = (payload) => {
//     return (dispatch) => {
//         axios.delete(`${REACT_APP_DOCS_API}documents/variables/${payload}`,
//         )
//             .then(({data}) => {
//                 dispatch(getVariables());
//             })
//             .catch((e) => {
//                 console.log(e.message)
//
//             })
//     }
// }
//
// export const deleteTemplateAction = (payload) => {
//     return (dispatch) => {
//         axios.delete(`${REACT_APP_DOCS_API}documents/templates/${payload}`,
//         )
//             .then(({data}) => {
//                 dispatch(getTemplatesAction());
//             })
//             .catch((e) => {
//                 console.log(e.message)
//
//             })
//     }
// }
//
// export const getVarByIdAction = (id) => {
//     return (dispatch) => {
//         axios.get(`${REACT_APP_DOCS_API}documents/variables/${id}`,
//         )
//             .then(({data}) => {
//                 return dispatch({type: GET_VAR_BY_ID, data: data})
//             })
//             .catch((e) => {
//                 console.log(e.message)
//
//             })
//     }
// }
// export const editVarAction = (id, payload) => {
//     return (dispatch) => {
//         axios.put(`${REACT_APP_DOCS_API}documents/variables/${id}/`, payload,
//         )
//             .then(({data}) => {
//                 dispatch({type: EDIT_VAR_ACTION_SUCCESS})
//                 dispatch(getVariables())
//             })
//             .catch((e) => {
//                 let error = JSON.parse(e.response.request.response);
//                 let errorMesage = '';
//
//                 if (error.key) {
//                     errorMesage += error.key
//                 }
//                 if (error.name) {
//                     errorMesage += error.name
//                 }
//                 dispatch({type: SET_VAR_CREATE_MESSAGE_FAIL, payload: errorMesage})
//             })
//     }
// }
//
// export const closeEditPopupAction = () => ({
//     type: CLOSE_EDIT_POPUP
// })
//
//
// export const getTemplatesAction = () => {
//     return (dispatch) => {
//         axios.get(`${REACT_APP_DOCS_API}documents/templates/`,
//         )
//             .then(({data}) => {
//                 dispatch({type: SET_TEMPLATES, data})
//             })
//             .catch((e) => {
//                 console.log(e)
//             })
//     }
// }
//
// export const searchVarAction = (payload) => {
//     return (dispatch) => {
//         axios.get(`${REACT_APP_DOCS_API}documents/variables/?search=${payload}`,
//         )
//             .then(({data}) => {
//                 dispatch({type: SEARCH_VAR, data})
//
//             })
//             .catch((e) => {
//                 console.log(e)
//             })
//     }
// }
//
// export const addVarToListAction = (payload) => ({
//     type: ADD_VAR_TO_LIST, payload
// })
//
// export const deleteAddedVarAction = (payload) => ({
//     type: DELETE_ADDED_VAR, payload
// })
// export const setFileAction = (payload) => ({
//     type: SET_FILE, payload
//
// })
// export const docCreateSuccessAction = () => ({
//     type: OPEN_DOC_POPUP_SUCCESS
//
// })
//
//
//
// export const docCreateErrorAction = () => ({
//     type: OPEN_DOC_POPUP_ERROR
//
// })
// export const closeDocPopupAction = () => ({
//     type: CLOSE_DOC_POPUP
//
// })
// export const clearAddedVarsAction = () => ({
//     type: CLEAR_ADDED_VARS_ACTION
//
// })
//
// export const createCatAction = (payload) => {
//     return (dispatch) => {
//         // http://10.10.200.232:8040/api/v1/documents/categories/
//         axios.post(`${REACT_APP_DOCS_API}documents/categories/`, payload
//         )
//             .then(({data}) => {
//
//                 if (data) {
//                     dispatch({type: OPEN_CAT_POPUP_SUCCESS})
//                 }
//                 dispatch(getCategories())
//             })
//             .catch((e) => {
//                 console.log(e)
//                 dispatch({type: OPEN_CAT_POPUP_ERROR})
//
//             })
//     }
// }
// export const createSubCatAction = (payload) => {
//     return (dispatch) => {
//         // http://10.10.200.232:8040/api/v1/documents/categories/
//         axios.post(`${REACT_APP_DOCS_API}documents/subcategories/`, payload
//         )
//             .then(({data}) => {
//                 if (data) {
//                     dispatch({type: OPEN_CAT_POPUP_SUCCESS})
//                 }
//                 dispatch(getCategories())
//             })
//             .catch((e) => {
//                 console.log(e)
//                 dispatch({type: OPEN_CAT_POPUP_ERROR})
//
//             })
//     }
// }
//
// export const getTemplateItemsAction = (id, name) => {
//     return (dispatch) => {
//
//         axios.get(`${REACT_APP_DOCS_API}documents/templates/?subcategory__id=${id}`,
//         )
//             .then(({data}) => {
//                 return dispatch({type: GET_TEMPLATE_DATA, data})
//
//
//             })
//             .catch((e) => {
//                 console.log(e)
//
//             })
//
//         axios.get(`${REACT_APP_DOCS_API}documents/subcategories/${id}`,)
//             .then(({data}) => {
//                 return dispatch({type: SET_CURRENT_CATEGORY_NAME, data})
//
//
//             })
//             .catch((e) => {
//                 console.log(e)
//
//             })
//     }
// }
//
// export const getSubcatListAction = (id) => {
//     return (dispatch) => {
//         axios.get(`${REACT_APP_DOCS_API}documents/categories/${id}`,)
//             .then(({data}) => {
//                 dispatch({type: SET_SUBCAT_LIST, data})
//             })
//             .catch((e) => {
//                 console.log(e)
//
//             })
//     }
//
// }
//
// export const closeCatPopupAction = () => ({
//     type: CLOSE_CAT_POPUP
//
// })
// export const setTemplateToCreateAction = (payload) => ({
//     type: SET_TEMPLATE_TO_CREATE, payload
//
// })
//
//
// export const openDocTemplatePopup = () => ({
//     type: CREATE_DOC_FROM_TEMPLATE_ERROR
//
// })
//
//
// export const closeDocTemplatePopup = (payload) => ({
//     type: CLOSE_CREATE_DOC_FROM_TEMPLATE_ERROR
//
// })
//
// export const closeDeleteCatPopupAction = () => ({
//     type: CLOSE_DELETE_CAT_POPUP
//
// })
// export const openDeleteCatPopupAction = (id, name) => ({
//     type: OPEN_DELETE_CAT_POPUP, id, name
//
// })
// export const openEditCatPopupAction = (name, id,  global) => ({
//     type: OPEN_EDIT_CAT_POPUP, name, id, global
// })
//
// export const closeEditCatPopupAction = () => ({
//     type: CLOSE_EDIT_CAT_POPUP
//
// })
//
// export const deleteFileAction = () => ({
//     type: DELETE_FILE
//
// })
//
//
//
//
//
// // http://10.10.200.232:8040/api/v1/documents/templates/?search=%D0%B4%D0%BE%D0%B3%D0%BE%D0%B2%D0%BE%D1%80%201
//
// export const filterTemplates = (payload) => {
//     return (dispatch) => {
//         axios.get(`${REACT_APP_DOCS_API}documents/templates/?search=${payload}`,)
//             .then(({data}) => {
//                 dispatch({type: GET_TEMPLATE_DATA, data})
//             })
//             .catch((e) => {
//                 console.log(e)
//
//             })
//     }
//
// }
//
// export const deleteCatAction = (id) => {
//     return (dispatch) => {
//         axios.delete(`${REACT_APP_DOCS_API}documents/categories/${id}/`,)
//             .then(({data}) => {
//                 dispatch(getCategories())
//                 dispatch(getSubCategories())
//             })
//             .catch((e) => {
//                 console.log(e)
//
//             })
//     }
//
// }
// export const deleteSubCatAction = (id) => {
//     return (dispatch) => {
//         axios.delete(`${REACT_APP_DOCS_API}documents/subcategories/${id}/`,)
//             .then(({data}) => {
//                 dispatch(getSubCategories());
//                 dispatch(getCategories());
//             })
//             .catch((e) => {
//                 console.log(e)
//
//             })
//     }
//
// }
//
// // http://10.10.200.232:8040/api/v1/documents/categories/1/
//
// export const editCatAction = (name,id) => {
//     let payload = {
//         "name": name
//     }
//     return (dispatch) => {
//         axios.put(`${REACT_APP_DOCS_API}documents/categories/${id}/`,payload)
//             .then(({data}) => {
//                 dispatch(getSubCategories());
//                 dispatch(getCategories());
//                 dispatch(closeEditCatPopupAction());
//
//             })
//             .catch((e) => {
//                 console.log(e)
//
//             })
//     }
//
// }
//
// export const editSubCatAction = (name,id) => {
//     let payload = {
//         "name": name,
//     }
//
//     return (dispatch) => {
//         axios.patch(`${REACT_APP_DOCS_API}documents/subcategories/${id}/`,payload)
//             .then(({data}) => {
//                 dispatch(getSubCategories());
//                 dispatch(closeEditCatPopupAction());
//
//             })
//             .catch((e) => {
//                 console.log(e)
//
//             })
//     }
//
// }
