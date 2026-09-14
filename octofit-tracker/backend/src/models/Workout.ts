import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IWorkout extends Document {
  name: string;
  type: string;
  duration: number;
  difficulty: string;
  focus: string[];
}

const workoutSchema = new Schema<IWorkout>({
  name: { type: String, required: true },
  type: { type: String, required: true },
  duration: { type: Number, required: true },
  difficulty: { type: String, required: true },
  focus: { type: [String], default: [] },
});

const Workout: Model<IWorkout> = mongoose.models.Workout || mongoose.model<IWorkout>('Workout', workoutSchema);

export default Workout;
