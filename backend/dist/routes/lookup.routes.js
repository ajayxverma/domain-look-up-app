import express from 'express';
import { getUserList } from '../controller/lookup.controller.js';
const lookUp = express.Router();
lookUp.route('/domain-details').get(getUserList);
export default lookUp;
