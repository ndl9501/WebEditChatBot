const { validationResult } = require('express-validator');
const userModel = require('./../models/userModel');
const jwtHelper = require('./../helper/jwtHelper')
const AuthService = require('./../services/AuthService')
class AuthController {
    // [GET] /admin/login
    async login(req, res) {
        return res.render('admin/login', {
            title: 'Đăng Nhập',
            error : null,
        })
    }
    // [POST] /admin/login
    async postLogin(req, res) {
        AuthService.postLoginService(req, res);
    }
    
    logout(req, res) {
        console.log("logout ....");
        res.cookie("token", "",{
            httpOnly: true,
            maxAge: 1
        });
        console.log("logout oke");
        return res.redirect('/admin/login');
    }
}

module.exports = new AuthController();