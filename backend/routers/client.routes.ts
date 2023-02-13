import express from "express";
import controller from "../controllers/client_controller";

const router = express.Router();


router.get("/all", controller.getAllClients);
router.post("/add", controller.addClient);
router.get("/single/:id", controller.getClientById_num);
router.get("/name/:name", controller.getClientByName);
router.patch("/update/:_id", controller.updateClient);
router.delete("/del/:_id", controller.deleteClient);

export default router;