const { User, Thought } = require('../models');

const thoughtController = {
    // add a thought
    addThought({ params, body }, res) {
        Thought.create(body)
        .then(({ _id }) => {
            return User.findOneAndUpdate(
                { _id: params.userId },
                { $push: { thoughts: _id } },
                { new: true }
            );
        })
        .then(dbUserData => {
            if (!dbUserData) {
                return res.status(404).json({ message: 'No user found' });
            }
            res.json(dbUserData);
        })
        .catch(err => res.json(err));
    },
    // add a reaction to a thought
    addReaction({ params, body }, res) {
        Thought.findOneAndUpdate(
            { _id: params.thoughtId },
            { $push: { reactions: body } },
            { new: true, runValidators: true }
        )
        .then(dbUserData => {
            if (!dbUserData) {
                return res.status(404).json({ message: 'No user found' });
            }
            res.json(dbUserData);
        })
        .catch(err => res.status(500).json(err));
    },
    // delete a thought
    deleteThought({ params }, res) {
        Thought.findOneAndDelete({ _id: params.thoughtId })
        .then(deletedThought => {
            if (!deletedThought) {
                res.status(404).json({ message: 'No thought found.' });
                return;
            }
            User.findOneAndUpdate(
                { _id: params.userId },
                { $pull: { thoughts: params.thoughtId } },
                { new: true }
            );
        })
        .then(dbUserData => {
            if (!dbUserData) {
                return res.status(404).json({ message: 'No user found' });
            }
            res.json(dbUserData);
        })
        .catch(err => res.status(500).json(err));
    },
    // delete a reaction from a thought
    deleteReaction({ params}, res) {
        Thought.findOneAndUpdate(
            { _id: params.thoughtId },
            { $pull: { reactions: { reactionId: params.reactionId } } },
            { new: true }
        )
        .then(dbThoughtData => res.json(dbThoughtData))
        .catch(err => res.status(500).json(err));
    }
}

module.exports = thoughtController;