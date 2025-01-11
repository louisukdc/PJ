import express from "express";
import {
    getBorrowings,
    getBorrowingById,
    createBorrowing,
    updateBorrowing,
    deleteBorrowing
} from "../controllers/PeminjamanController.js";

const router = express.Router();

router.get('/peminjaman', getBorrowings);
router.get('/peminjaman/:id', getBorrowingById);
router.post('/peminjaman', createBorrowing);
router.patch('/peminjaman/:id', updateBorrowing);
router.delete('/peminjaman/:id', deleteBorrowing);

export default router;