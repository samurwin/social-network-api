const router = require('express').Router();
const {
    findAllThoughts,
    findThoughtById,
    addThought,
    addReaction,
    updateThought,
    deleteThought,
    deleteReaction
} = require('../../controllers/thought-controller');

// /api/thoughts
router
.route('/')
.get(findAllThoughts)

// /api/thoughts/:userId
router
.route('/:userId')
.post(addThought)

// /api/thoughts/:thoughtId
router
.route('/:thoughtId')
.get(findThoughtById)
.put(updateThought)
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