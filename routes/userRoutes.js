const express = require('express');

const authController = require('../controllers/authController');
const userController = require('../controllers/userController');

const router = express.Router();

router.route('/signup').post(authController.signup);
router.route('/account/confirm/:token').get(authController.confirmAccount);
router.route('/login').post(authController.login);
router.route('/resend-token').post(authController.resendToken);

router.use(authController.protect);

router
  .route('/')
  .get(authController.restritTo('admin'), userController.getAllUsers);

router.route('/logout').get(authController.logout);

module.exports = router;
