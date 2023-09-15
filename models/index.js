const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  name: String,
  description: String,
  status: {
    type: String,
    enum: ['working on', 'done', 'stuck'],
    default: 'working on'
  },
  // other fields...
    widget: { type: mongoose.Schema.Types.ObjectId, ref: 'Widget' },
  // GitHub Integration Fields
  gitCommits: [{ type: mongoose.Schema.Types.ObjectId, ref: 'GitCommit' }],
});

const BoardSchema = new mongoose.Schema({
  name: String,
  templateType: String,
  tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Task' }],
  // other fields...
  workspace: { type: mongoose.Schema.Types.ObjectId, ref: 'Workspace' },
  isProductBacklog: { type: Boolean, default: false },
});

const ListSchema = new mongoose.Schema({
  name: String,
  templateType: String,
  tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Task' }],
  // other fields...
  workspace: { type: mongoose.Schema.Types.ObjectId, ref: 'Workspace' },
  isProductBacklog: { type: Boolean, default: false },
});

const WorkspaceSchema = new mongoose.Schema({
  name: String,
  description: String,
  widgets: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Widget' }],
  roles: [{
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    role: { type: String, enum: ['admin', 'user'], default: 'user' },
  }],
  // other fields...
});

const OrganizationSchema = new mongoose.Schema({
  name: String,
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  workspaces: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Workspace' }],
  // other fields...
});

const UserSchema = new mongoose.Schema({
  email: String,
  password: String,
   role: {
    type: String,
    enum: ['admin', 'user'],
    default: 'user'
  },
  workspaces: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Workspace' }],
  organizations: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Organization' }],
  licenses: { type: Number, default: 0 },
  // other fields...
});

const SprintSchema = new mongoose.Schema({
  name: String,
  startDate: Date,
  endDate: Date,
  // Workspace the sprint is a part of
  workspace: { type: mongoose.Schema.Types.ObjectId, ref: 'Workspace' },
  // Tasks included in the sprint
  tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Task' }],
});

// Export the models
module.exports = {
  Task: mongoose.model('Task', TaskSchema),
  Board: mongoose.model('Widget', BoardSchema),
  List: mongoose.model('Widget', ListSchema),
  Workspace: mongoose.model('Workspace', WorkspaceSchema),
  Organization: mongoose.model('Organization', OrganizationSchema),
  User: mongoose.model('User', UserSchema),
  Sprint: mongoose.model('Sprint', SprintSchema),
};
