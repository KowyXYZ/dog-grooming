import mongoose from "mongoose";
import { Schema, model, models } from "mongoose";

const SchedulingSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Full Name is Required']
    },

    number: {
        type: Number,
        required: [true, 'Phone number is required!']
    },

    id: {
        type: String,
    }
})

const Scheduling = models.Scheduling || model('Scheduling', SchedulingSchema)
export default Scheduling