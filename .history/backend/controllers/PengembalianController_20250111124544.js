import Pengembalian from "../models/Pengembalian.js";

export const getReturns = async(req, res) => {
    try {
        const response = await Pengembalian.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
};

export const getReturnById = async(req, res) => {
    try {
        const response = await Pengembalian.findOne({
            where: {
                id_pengembalian: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
};

export const createReturn = async(req, res) => {
    try {
        await Pengembalian.create(req.body);
        res.status(201).json({ msg: "Return Created" });
    } catch (error) {
        console.log(error.message);
    }
};

export const updateReturn = async(req, res) => {
    try {
        await Pengembalian.update(req.body, {
            where: {
                id_pengembalian: req.params.id
            }
        });
        res.status(200).json({ msg: "Return Updated" });
    } catch (error) {
        console.log(error.message);
    }
};

export const deleteReturn = async(req, res) => {
    try {
        await Pengembalian.destroy({
            where: {
                id_pengembalian: req.params.id
            }
        });
        res.status(200).json({ msg: "Return Deleted" });
    } catch (error) {
        console.log(error.message);
    }
};