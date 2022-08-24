const router = require('express').Router();

const {addProducts, renderAdminPage , getAllCategories} = require('./controllers/getCategories');
// هان بنعمل اول اشي ريكوست عشان نعرض صفحة الادمن  
router.get('/admin',renderAdminPage);
// هان بنعمل ريكوست من الفيتش بالسكريبت  عشان ننفذ الكويري ونرسل البيانات منها على ملف السكريبت  

router.get('/getData',getAllCategories);

router.post('/add-product',addProducts);


module.exports = router;