var Router = require('router');
var renderController = require('../controllers').renderController;

const router = new Router();

router.get('/news', renderController.getNewsPage);
router.get('/images', renderController.getImagePage);
router.get('/videos', renderController.getVideoPage);
router.get('/documents', renderController.getDocumentsPage);
router.get('/admin', renderController.getAdminPage);
router.get('/login', renderController.getLoginPage); //TO BE ADDED: Middleware to check if superuser
router.get('/profile', renderController.getProfilePage);


module.exports = router