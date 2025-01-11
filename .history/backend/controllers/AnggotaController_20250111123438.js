import Anggota from "../models/anggota.js";

export const getMembers = async(req, res) => {
    try {
        const response = await Anggota.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
};

export const getMemberById = async(req, res) => {
    try {
        const response = await Anggota.findOne({
            where: {
                id_anggota: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
};

export const createMember = async(req, res) => {
    try {
        await Anggota.create(req.body);
        res.status(201).json({ msg: "Member Created" });
    } catch (error) {
        console.log(error.message);
    }
};

export const updateMember = async(req, res) => {
    try {
        await Anggota.update(req.body, {
            where: {
                id_anggota: req.params.id
            }
        });
        res.status(200).json({ msg: "Member Updated" });
    } catch (error) {
        console.log(error.message);
    }
};

export const deleteMember = async(req, res) => {
    try {
        await Anggota.destroy({
            where: {
                id_anggota: req.params.id
            }
        });
        res.status(200).json({ msg: "Member Deleted" });
    } catch (error) {
        console.log(error.message);
    }
};