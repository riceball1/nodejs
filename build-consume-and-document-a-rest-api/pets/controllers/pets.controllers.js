import { getItem, listItems, editItem, addItem, deleteItem } from '../models/pets.models.js'

export const getPet = (req, res) => {
    try {
        const resp = getItem(parseInt(req.params.id))
        res.status(200).json(resp)
    } catch (err) {
        res.status(500).send(err)
    }
}

export const listPets = (req, res) => {
    try {
        const resp = listItems()
        res.status(200).json(resp)
    } catch (err) {
        res.status(500).send(err)
    }
}

export const editPet = (req, res) => {
    try {
        
    } catch (err) {

    }
}

export const addPet = (req, res) => {
    try {

    } catch (err) {

    }
}

export const deletePet = (req, res) => {
    try {

    } catch (err) {

    }
}