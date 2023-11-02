import axios from 'axios'
import authHeader from '../../helper/auth-header'

const axiosInstance = axios.create({
  baseURL: "http://94.74.86.174:8080/api"
})

const CHECKLIST = '/checklist'
const CHECKLIST_ID = (checklistId) => `/checklist/${checklistId}`

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

const checklistService = {
  addNewChecklist,
  getAllChecklist,
  deleteChecklistById
}

export default checklistService