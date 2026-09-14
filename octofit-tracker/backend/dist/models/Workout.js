import mongoose, { Schema } from 'mongoose';
const workoutSchema = new Schema({
    name: { type: String, required: true },
    type: { type: String, required: true },
    duration: { type: Number, required: true },
    difficulty: { type: String, required: true },
    focus: { type: [String], default: [] },
});
const Workout = mongoose.models.Workout || mongoose.model('Workout', workoutSchema);
export default Workout;
