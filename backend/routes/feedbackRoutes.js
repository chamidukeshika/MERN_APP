import express from 'express';
import { addFeedback,getFeedbacks,updateFeedbacks,deleteFeedback} from "../controllers/feedbackController.js";
// import feedback from '../models/feedbackModel.js';


const feedbackroutes = express.Router();

feedbackroutes.post('/addfeedback', addFeedback);
feedbackroutes.get('/viewfeedback', getFeedbacks);
feedbackroutes.put('/updatefeedback/:id', updateFeedbacks);
feedbackroutes.delete('/deletefeedback/:id',deleteFeedback);



export default feedbackroutes;