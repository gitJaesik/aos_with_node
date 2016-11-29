var express = require('express');
var router = express.Router();
const models= require('../models');

/* GET users listing. */
router.get('/', function(req, res, next) {
	res.render('login');
});

router.post('/',(req,res)=>{
		
	models.User.findOne({ 
			where: { 
				email: req.body.uid,
				password: req.body.password
				 }
			}).then((user)=>{
				// user 있으면 로그인 
				if(!user) {
					res.redirect('/user');
				}
				console.log('로그인 성공');
				res.redirect('/');
		});
});

module.exports = router;
