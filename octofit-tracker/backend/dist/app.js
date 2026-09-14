import express from 'express';
import { apiBaseUrl } from './config/api.js';
import User from './models/User.js';
import Team from './models/Team.js';
import Activity from './models/Activity.js';
import Leaderboard from './models/Leaderboard.js';
import Workout from './models/Workout.js';
const app = express();
app.use(express.json());
app.get('/api/health', (_req, res) => {
    res.json({
        status: 'ok',
        service: 'octofit-backend',
        apiBaseUrl,
    });
});
app.get('/api/users', async (_req, res) => {
    const users = await User.find({}).lean();
    res.json(users);
});
app.get('/api/teams', async (_req, res) => {
    const teams = await Team.find({}).lean();
    res.json(teams);
});
app.get('/api/activities', async (_req, res) => {
    const activities = await Activity.find({}).populate('userId').lean();
    res.json(activities);
});
app.get('/api/leaderboard', async (_req, res) => {
    const leaderboard = await Leaderboard.find({}).sort({ rank: 1 }).lean();
    res.json(leaderboard);
});
app.get('/api/workouts', async (_req, res) => {
    const workouts = await Workout.find({}).lean();
    res.json(workouts);
});
export default app;
