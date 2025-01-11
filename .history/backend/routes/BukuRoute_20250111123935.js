import express from "express";
import {
    getBooks,
    getBookById,
    createBook,
    updateBook,
    deleteBook
} from "../controllers/BukuController.js";

const router = express.Router();

router.get('/buku', getBooks);
router.get('/buku/:id', getBookById);
router.post('/buku', createBook);
router.patch('/buku/:id', updateBook);
router.delete('/buku/:id', deleteBook);

export default router;