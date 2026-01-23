const mongoose = require("mongoose");

const huntSchema = new mongoose.Schema(
  {
    monsterName: {
      type: String,
      required: true,
    },

mhwid : {
      type: String,
      required: true,
    },

    weaponType: {
      type: String,
      required: true,
    },
    rank: {
      type: Number,
      required: true,
      min: 0,
    },
    outcome: {
      type: Number,
      required: true,
      min: 0,
    },
    minutes: {
      type: Number,
      required: true,
      min: 0,
    },
    notes: {
      type: String,
      min: 0,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    favoritedByUsers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Hunt = mongoose.model("Hunt", huntSchema);

module.exports = Hunt;