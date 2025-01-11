import express from "express";
import {
    getMembers,
    getMemberById,
    createMember,
    updateMember,
    deleteMember
} from "../controllers/AnggotaController.js";

const router = express.Router();

router.get('/anggota', getMembers);
router.get('/anggota/:id', getMemberById);
router.post('/anggota', createMember);
router.patch('/anggota/:id', updateMember);
router.delete('/anggota/:id', deleteMember);

export default router;