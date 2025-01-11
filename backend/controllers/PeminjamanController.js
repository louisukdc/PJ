import Peminjaman from "../models/PeminjamanModels.js";

export const getBorrowings = async(req, res) => {
    try {
        const response = await Peminjaman.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
};

export const getBorrowingById = async(req, res) => {
    try {
        const response = await Peminjaman.findOne({
            where: {
                id_peminjaman: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
};

export const createBorrowing = async(req, res) => {
    try {
        await Peminjaman.create(req.body);
        res.status(201).json({ msg: "Borrowing Created" });
    } catch (error) {
        console.log(error.message);
    }
};

export const updateBorrowing = async(req, res) => {
    try {
        await Peminjaman.update(req.body, {
            where: {
                id_peminjaman: req.params.id
            }
        });
        res.status(200).json({ msg: "Borrowing Updated" });
    } catch (error) {
        console.log(error.message);
    }
};

export const deleteBorrowing = async(req, res) => {
    try {
        await Peminjaman.destroy({
            where: {
                id_peminjaman: req.params.id
            }
        });
        res.status(200).json({ msg: "Borrowing Deleted" });
    } catch (error) {
        console.log(error.message);
    }
};