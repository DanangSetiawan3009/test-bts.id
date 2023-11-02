import axios from 'axios'
import authHeader from '../../helper/auth-header'

const axiosInstance = axios.create({
  baseURL: "http://94.74.86.174:8080/api"
})

const CHECKLIST = '/checklist'
const CHECKLIST_ID = (checklistId) => `/checklist/${checklistId}`
const CHECKLIST_ITEM = (checklistId) => `/checklist/${checklistId}/item`
const CHECKLIST_ITEM_WITH_ID = (checklistId, checklistItemId) => `/checklist/${checklistId}/item/${checklistItemId}`

// For Checklist
const addNewChecklist = (payloads) => {
  return axiosInstance.post(CHECKLIST, payloads, {
    headers: authHeader()
  }).then((response) => {
    return response.data
  }).catch((error) => {
    return error
  })
}

const getAllChecklist = () => {
  return axiosInstance.get(CHECKLIST, {
      headers: authHeader()
    })
    .then((response) => {
      return response.data
    }).catch((error) => {
      return error
    })
}

const deleteChecklistById = (checklistId) => {
  return axiosInstance
    .delete(CHECKLIST_ID(checklistId), {
      headers: authHeader()
    })
    .then((response) => {
      return response.data
    })
}

// For Checklist Item
const addChecklistItem = (payloads, checklistId) => {
  return axiosInstance.post(CHECKLIST_ITEM(checklistId), payloads, {
    headers: authHeader()
  }).then((response) => {
    return response.data
  }).catch((error) => {
    return error
  })
}

const getAllChecklistItemById = (checklistId) => {
  return axiosInstance.get(CHECKLIST_ITEM(checklistId), {
    headers: authHeader()
  }).then((response) => {
    return response.data
  }).catch((error) => {
    return error
  })
}

const getChecklistItemById = (checklistId, checklistItemId) => {
  return axiosInstance.get(CHECKLIST_ITEM_WITH_ID(checklistId, checklistItemId), {
    headers: authHeader()
  }).then((response) => {
    return response.data
  }).catch((error) => {
    return error
  })
}

const updateStatusChecklistItem = (checklistId, checklistItemId) => {
  return axiosInstance.put(CHECKLIST_ITEM_WITH_ID(checklistId, checklistItemId), {
    headers: authHeader()
  }).then((response) => {
    return response.data
  }).catch((error) => {
    return error
  })
}

const deleteChecklistItemById = (checklistId, checklistItemId) => {
  return axiosInstance.delete(CHECKLIST_ITEM_WITH_ID(checklistId, checklistItemId), {
    headers: authHeader()
  }).then((response) => {
    return response.data
  }).catch((error) => {
    return error
  })
}

const updateChecklistItemById = (checklistId, checklistItemId, payloads) => {
  return axiosInstance.put(CHECKLIST_ITEM_WITH_ID(checklistId, checklistItemId), payloads, {
    headers: authHeader()
  }).then((response) => {
    return response.data
  }).catch((error) => {
    return error
  })
}

const checklistService = {
  addNewChecklist,
  getAllChecklist,
  deleteChecklistById,
  // For Checklist Item
  addChecklistItem,
  getAllChecklistItemById,
  getChecklistItemById,
  updateStatusChecklistItem,
  deleteChecklistItemById,
  updateChecklistItemById
}

export default checklistService