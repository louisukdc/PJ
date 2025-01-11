import Buku from "../models/BukuModels.js";

export const getBooks = async(req, res) => {
    try {
        const response = await Buku.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
};

export const getBookById = async(req, res) => {
    try {
        const response = await Buku.findOne({
            where: {
                id_buku: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
};

export const createBook = async(req, res) => {
    try {
        await Buku.create(req.body);
        res.status(201).json({ msg: "Book Created" });
    } catch (error) {
        console.log(error.message);
    }
};

export const updateBook = async(req, res) => {
    try {
        await Buku.update(req.body, {
            where: {
                id_buku: req.params.id
            }
        });
        res.status(200).json({ msg: "Book Updated" });
    } catch (error) {
        console.log(error.message);
    }
};

export const deleteBook = async(req, res) => {
    try {
        await Buku.destroy({
            where: {
                id_buku: req.params.id
            }
        });
        res.status(200).json({ msg: "Book Deleted" });
    } catch (error) {
        console.log(error.message);
    }
};