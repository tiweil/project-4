import express from "express";
import controller from "../controllers/client_controller";

const router = express.Router();


router.get("/all", controller.getAllClients);
router.post("/add", controller.addClient);
router.get("/single/:tz", controller.getClientByTz);
router.get("/name/:name", controller.getClientByName);
router.patch("/update/:id", controller.updateClient);
router.delete("/del/:id", controller.deleteClient);

export default router;