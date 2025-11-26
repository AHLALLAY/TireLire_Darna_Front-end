import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  role: {
    type: String,
    enum: ['visiteur', 'particulier', 'entreprise', 'admin'],
    default: 'visiteur'
  },
  phone: {
    type: String,
    trim: true
  },
  avatar: {
    type: String,
    trim: true
  },
  isVerified: {
    type: Boolean,
    default: false
  },
  subscriptionType: {
    type: String,
    enum: ['gratuit', 'pro', 'premium'],
    default: 'gratuit'
  },
  companyName: {
    type: String,
    trim: true
  },
  isKYCVerified: {
    type: Boolean,
    default: false
  },
  twoFactorEnabled: {
    type: Boolean,
    default: false
  },
  twoFactorSecret: {
    type: String,
    trim: true
  },
  twoFactorRecoveryCodes: [{
    type: String,
    trim: true
  }],
  lastLogin: Date,
  isActive: {
    type: Boolean,
    default: true
  },
  companyInfo: {
    siret: {
      type: String,
      trim: true
    },
    address: {
      type: String,
      trim: true
    }
  }
}, {
  timestamps: true
});


export default mongoose.model('User', userSchema);