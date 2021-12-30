const router = require('express').Router();
const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    addFriend,
    deleteFriend,
    deleteUser
} = require('../../controllers/user-controller');

// api/users
router
.route('/')
.get(getAllUsers)
.post(createUser);

// api/users/:userId
router
.route('/:userId')
.get(getUserById)
.put(updateUser)
.delete(deleteUser);

// api/users/:userId/friends/:friendId
router
.route('/:userId/friends/:friendId')
.put(addFriend)
.put(deleteFriend);

module.exports = router;