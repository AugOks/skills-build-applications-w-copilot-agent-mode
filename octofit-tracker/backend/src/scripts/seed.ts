import mongoose from 'mongoose';
import User from '../models/User.js';
import Team from '../models/Team.js';
import Activity from '../models/Activity.js';
import Leaderboard from '../models/Leaderboard.js';
import Workout from '../models/Workout.js';

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';

/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
  try {
    await mongoose.connect(connectionString);
    console.log('Connected to octofit_db');

    await User.deleteMany({});
    await Team.deleteMany({});
    await Activity.deleteMany({});
    await Leaderboard.deleteMany({});
    await Workout.deleteMany({});

    const userDocs = await User.insertMany([
      { name: 'Ada Lovelace', email: 'ada@example.com', team: 'Alpha', activityLevel: 'high' },
      { name: 'Grace Hopper', email: 'grace@example.com', team: 'Beta', activityLevel: 'high' },
      { name: 'Linus Torvalds', email: 'linus@example.com', team: 'Alpha', activityLevel: 'moderate' },
    ]);

    const alphaTeam = await Team.create({ name: 'Alpha', description: 'Endurance and strength group', members: 2 });
    const betaTeam = await Team.create({ name: 'Beta', description: 'Recovery and mobility focus', members: 1 });

    await Activity.insertMany([
      { userId: userDocs[0]._id, type: 'running', duration: 42, date: new Date('2026-09-12'), calories: 380 },
      { userId: userDocs[1]._id, type: 'cycling', duration: 35, date: new Date('2026-09-13'), calories: 290 },
      { userId: userDocs[2]._id, type: 'strength', duration: 55, date: new Date('2026-09-14'), calories: 430 },
    ]);

    await Leaderboard.insertMany([
      { userId: userDocs[0]._id, name: 'Ada Lovelace', points: 1280, rank: 1 },
      { userId: userDocs[1]._id, name: 'Grace Hopper', points: 1145, rank: 2 },
      { userId: userDocs[2]._id, name: 'Linus Torvalds', points: 990, rank: 3 },
    ]);

    await Workout.insertMany([
      { name: 'Power Circuit', type: 'strength', duration: 40, difficulty: 'moderate', focus: ['legs', 'core'] },
      { name: 'Trail Sprint', type: 'cardio', duration: 25, difficulty: 'high', focus: ['stamina', 'speed'] },
      { name: 'Mobility Reset', type: 'recovery', duration: 20, difficulty: 'low', focus: ['mobility', 'breath'] },
    ]);

    console.log('Seed the octofit_db database with test data');
    console.log('Database seeding complete');
    await mongoose.disconnect();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
