import express from "express";
import {
    getReturns,
    getReturnById,
    createReturn,
    updateReturn,
    deleteReturn
} from "../controllers/PengembalianController.js";

const router = express.Router();

router.get('/pengembalian', getReturns);
router.get('/pengembalian/:id', getReturnById);
router.post('/pengembalian', createReturn);
router.patch('/pengembalian/:id', updateReturn);
router.delete('/pengembalian/:id', deleteReturn);

export default router;