import mongoose, { Schema } from 'mongoose';
const teamSchema = new Schema({
    name: { type: String, required: true, unique: true },
    description: { type: String },
    members: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now },
});
const Team = mongoose.models.Team || mongoose.model('Team', teamSchema);
export default Team;
