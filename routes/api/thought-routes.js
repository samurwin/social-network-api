const router = require('express').Router();
const {
    addThought,
    addReaction,
    deleteThought,
    deleteReaction
} = require('../../controllers/thought-controller');

// /api/thoughts
router
.route('/')
.get()
.post(addThought)

// /api/thoughts/:thoughtId
router
.route('/:thoughtId')
.get()
.put()
.delete(deleteThought);

// /api/thoughts/:thoughtId/reactions
router
.route('/:thoughtId/reactions')
.put(addReaction);

// /api/thoughts/:thoughtId/reactions/:reactionId
router
.route('/:thoughtId/reactions/:reactionId')
.delete(deleteReaction);

module.exports = router;