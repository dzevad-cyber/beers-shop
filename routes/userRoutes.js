const express = require('express');

const authController = require('../controllers/authController');
const userController = require('../controllers/userController');

const router = express.Router();

router.route('/signup').post(authController.signup);
router.route('/login').post(authController.login);

router.route('/account/confirm/:token').get(authController.confirmAccount);
router.route('/resend-token').post(authController.resendToken);
router.route('/forgot-password').post(authController.forgotPassword);
router.route('/reset-password/:token').post(authController.resetPassword);

router.use(authController.protect);

//   cache this route
router.route('/me').get(userController.getMe, userController.getUser);
router
  .route('/update/me')
  .patch(
    userController.getMe,
    userController.checkUpdateBody,
    userController.updateUser
  );

router.route('/logout').get(authController.logout);
router.route('/update-password').patch(authController.updatePassword);

router.use(authController.restrictTo('admin'));

router.route('/').get(userController.getAllUsers);
router.route('/:id').get(userController.getUser);
router.route('/update/:id').patch(userController.updateUser);

module.exports = router;
