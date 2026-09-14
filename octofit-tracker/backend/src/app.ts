import express from 'express';
import { apiBaseUrl } from './config/api.js';

const app = express();
app.use(express.json());

const users = [
  { id: 1, name: 'Ada', email: 'ada@example.com', team: 'Alpha' },
  { id: 2, name: 'Linus', email: 'linus@example.com', team: 'Beta' },
];

const teams = [
  { id: 1, name: 'Alpha', members: 2 },
  { id: 2, name: 'Beta', members: 1 },
];

const activities = [
  { id: 1, userId: 1, type: 'run', duration: 30, date: '2026-09-14' },
  { id: 2, userId: 2, type: 'cycling', duration: 45, date: '2026-09-14' },
];

const leaderboard = [
  { rank: 1, name: 'Ada', points: 1200 },
  { rank: 2, name: 'Linus', points: 980 },
];

const workouts = [
  { id: 1, name: 'Strength Builder', difficulty: 'moderate', duration: 40 },
  { id: 2, name: 'HIIT Sprint', difficulty: 'intense', duration: 20 },
];

app.get('/api/health', (_req, res) => {
  res.json({
    status: 'ok',
    service: 'octofit-backend',
    apiBaseUrl,
  });
});

app.get('/api/users', (_req, res) => {
  res.json(users);
});

app.get('/api/teams', (_req, res) => {
  res.json(teams);
});

app.get('/api/activities', (_req, res) => {
  res.json(activities);
});

app.get('/api/leaderboard', (_req, res) => {
  res.json(leaderboard);
});

app.get('/api/workouts', (_req, res) => {
  res.json(workouts);
});

export default app;
