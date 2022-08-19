import {
    ADD_VAR_TO_LIST, CHANGE_EDIT_POPUP,
    CLEAR_ADDED_VARS_ACTION,
    CLEAR_RADIO_VAR_LIST,
    CLOSE_CAT_POPUP,
    CLOSE_CREATE_DOC_FROM_TEMPLATE_ERROR,
    CLOSE_DELETE_POPUP,
    CLOSE_DOC_POPUP,
    CLOSE_EDIT_POPUP,
    CLOSE_POPUP,
    CREATE_DOC_FROM_TEMPLATE_ERROR,
    CREATE_DOC_REQUEST,
    CREATE_NEW_VAR_RADIO,
    DELETE_ADDED_VAR,
    DELETE_VAR_RADIO,
    EDIT_VAR_ACTION_ERROR,
    EDIT_VAR_ACTION_SUCCESS,
    GET_CATEGORIES, GET_SUB_CATEGORIES,
    GET_TEMPLATE_DATA,
    GET_VAR_BY_ID,
    GET_VARIABLES,
    OPEN_CAT_POPUP_ERROR,
    OPEN_CAT_POPUP_SUCCESS, OPEN_DELETE_CAT_POPUP,
    OPEN_DELETE_POPUP,
    OPEN_DOC_POPUP_ERROR,
    OPEN_DOC_POPUP_SUCCESS, OPEN_EDIT_CAT_POPUP,
    SEARCH_VAR,
    SET_CURRENT_CATEGORY_NAME,
    SET_FILE,
    SET_SUBCAT_LIST,
    SET_TEMPLATE_TO_CREATE,
    SET_TEMPLATES,
    SET_TYPE,
    SET_VAR_CREATE_MESSAGE_FAIL,
    SET_VAR_CREATE_MESSAGE_SUCCESS,
    SET_VARS_FOR_EDIT,
    CLOSE_DELETE_CAT_POPUP,
    CLOSE_EDIT_CAT_POPUP,
    SET_TEMPLATE_TO_EDIT, DELETE_ADDED_VAR_IN_EDIT, DELETE_FILE
} from "../types";

let initialState = {
        categoryList: [],
        subCategoryList: [],
        variableList: [],
        dataType: '',
        varListRadio: [],
        varCreateMessage: '',
        popupStatus: false,
        popupDeleteStatus: false,
        popupEditStatus: false,
        varEditMessage: '',
        deleteId: null,
        currentVar: [],
        varListToSend: [],
        file: '',
        docPopup: false,
        docPopupMsg: '',
        catPopup: false,
        editPopup: false,
        deletePopup: false,
        catPopupMsg: '',
        curTemplateLIst: [],
        curCategory: '',
        tempToCreate: [],
        docTempPopup: false,
        docTempMsg: '',
        currentSubcatList: [],
        templateList: [],
        catId: null,
        subCatId: null,
        deleteItem: '',
        catEditValue: '',
        templateToEdit: {},
        templateEditId: null


    }
;

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CATEGORIES:
            return {
                ...state,
                categoryList: action.data
            }


        case GET_SUB_CATEGORIES:
            return {
                ...state,
                subCategoryList: action.data
            }

        case GET_VARIABLES:
            return {
                ...state,
                variableList: action.data
            }

        case SET_TYPE:
            return {
                ...state,
                dataType: action.payload,
                // varListRadio: action.payload === 'radio_button' ? [...state.varListRadio, Math.random()] : state.varListRadio
            }

        case CREATE_NEW_VAR_RADIO:
            return {
                ...state,
                varListRadio: [...state.varListRadio, action.payload]
            }

        case DELETE_VAR_RADIO:
            return {
                ...state,
                varListRadio: state.varListRadio.filter((el) => el !== action.payload)
            }

        case SET_VAR_CREATE_MESSAGE_SUCCESS:
            return {
                ...state,
                popupStatus: true,
                varCreateMessage: 'Переменная успешно создана'
            }

        case SET_VAR_CREATE_MESSAGE_FAIL:
            return {
                ...state,
                popupStatus: true,
                varCreateMessage: action.payload
            }

        case CLOSE_POPUP:
            return {
                ...state,
                popupStatus: false,
                varCreateMessage: ''
            }

        case OPEN_DELETE_POPUP:
            return {
                ...state,
                popupDeleteStatus: true,
                deleteId: action.payload
            }

        case CLOSE_DELETE_POPUP:
            return {
                ...state,
                popupDeleteStatus: false,
                deleteId: null
            }

        case CLEAR_RADIO_VAR_LIST:
            return {
                ...state,
                varListRadio: [],
            }
        case GET_VAR_BY_ID:
            return {
                ...state,
                currentVar: action.data,
            }

        case SET_VARS_FOR_EDIT:
            return {
                ...state,
                varListRadio: action.payload,
            }
        case EDIT_VAR_ACTION_SUCCESS:
            return {
                ...state,
                popupEditStatus: true,
                varEditMessage: 'Переменная успешно изменена'
            }

        case EDIT_VAR_ACTION_ERROR:
            return {
                ...state,
                popupEditStatus: true,
                varEditMessage: 'Ошибка!'
            }


        case CLOSE_EDIT_POPUP:
            return {
                ...state,
                popupEditStatus: false,
                varEditMessage: '!'
            }

        case CREATE_DOC_REQUEST:
            return {
                ...state,

            }

        case SEARCH_VAR:
            return {
                ...state,
                variableList: action.data

            }

        case ADD_VAR_TO_LIST:
            return {
                ...state,
                varListToSend: [...state.varListToSend, action.payload]

            }
        case DELETE_ADDED_VAR:

            return {
                ...state,
                varListToSend: state.varListToSend.filter((el) => el.varId !== action.payload)

            }

        case SET_FILE:
            return {
                ...state,
                file: action.payload
            }

        case OPEN_DOC_POPUP_SUCCESS:
            return {
                ...state,
                docPopup: true,
                docPopupMsg: 'Шаблон успешно создан'
            }

        case OPEN_DOC_POPUP_ERROR:
            return {
                ...state,
                docPopup: true,
                docPopupMsg: 'Ошибка создания шаблона'
            }

        case CLOSE_DOC_POPUP:
            return {
                ...state,
                docPopup: false,
                docPopupMsg: ''
            }

        case CLEAR_ADDED_VARS_ACTION:
            return {
                ...state,
                varListToSend: [],
            }

        case OPEN_DELETE_CAT_POPUP:
            return {
                ...state,
                deletePopup: true,
                catId: action.id,
                deleteItem: action.name
            }


        case CLOSE_DELETE_CAT_POPUP:
            return {
                ...state,
                deletePopup: false
            }

        case OPEN_EDIT_CAT_POPUP:

            return {
                ...state,
                editPopup: true,
                catId: action.id,
                deleteItem: action.global,
                catEditValue: action.name
            }


        case CLOSE_EDIT_CAT_POPUP:
            return {
                ...state,
                editPopup: false
            }

        case OPEN_CAT_POPUP_SUCCESS:
            return {
                ...state,
                catPopup: true,
                catPopupMsg: 'Переменная успешно создана'
            }

        case OPEN_CAT_POPUP_ERROR:
            return {
                ...state,
                catPopup: true,
                catPopupMsg: 'Ошибка создания переменной'
            }

        case CLOSE_CAT_POPUP:
            return {
                ...state,
                catPopup: false,
                catPopupMsg: ''
            }

        case GET_TEMPLATE_DATA:
            return {
                ...state,
                curTemplateLIst: action.data,
            }
        case SET_CURRENT_CATEGORY_NAME:
            return {
                ...state,
                curCategory: action.data.name,
            }

        case SET_TEMPLATE_TO_CREATE:
            return {
                ...state,
                tempToCreate: action.payload,
            }

        case CREATE_DOC_FROM_TEMPLATE_ERROR:
            return {
                ...state,
                docTempPopup: true,
                docTempMsg: 'Ошибка создания документа',
            }

        case CLOSE_CREATE_DOC_FROM_TEMPLATE_ERROR:
            return {
                ...state,
                docTempPopup: false,
                docTempMsg: '',
            }
        case SET_SUBCAT_LIST:
            return {
                ...state,
                currentSubcatList: action.data.subcategories,
            }

        case SET_TEMPLATES:
            return {
                ...state,
                templateList: action.data,
            }

        case SET_TEMPLATE_TO_EDIT:
            return {
                ...state,
                templateToEdit: action.data,
                templateEditId: action.data.id,
            }

        case DELETE_ADDED_VAR_IN_EDIT:
            return {
                ...state,
                templateToEdit: {
                    variables: action.payload

                }
            }

        case DELETE_FILE:
            return {
                ...state,
                templateToEdit: {
                    file: ''

                }
            }

        default:
            return state;
    }
}

export default postsReducer;