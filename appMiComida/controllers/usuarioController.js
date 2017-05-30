var usuarioModel = require('../models/usuarioModel.js');

/**
 * usuarioController.js
 *
 * @description :: Server-side logic for managing usuarios.
 */
module.exports = {

    /**
     * usuarioController.list()
     */
    list: function (req, res) {
        usuarioModel.find(function (err, usuarios) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting usuario.',
                    error: err
                });
            }
            return res.json(usuarios);
        });
    },

    /**
     * usuarioController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        usuarioModel.findOne({_id: id}, function (err, usuario) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting usuario.',
                    error: err
                });
            }
            if (!usuario) {
                return res.status(404).json({
                    message: 'No such usuario'
                });
            }
            return res.json(usuario);
        });
    },

    /**
     * usuarioController.create()
     */
    create: function (req, res) {
        var usuario = new usuarioModel({
			nickname : req.body.nickname,
            password : req.body.password,
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            telefono: req.body.telefono,
            email: req.body.email,
            fecha_nacimiento: req.body.fecha_nacimiento,
            sexo: req.body.sexo
    
        });

        usuario.save(function (err, usuario) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating usuario',
                    error: err
                });
            }
            return res.status(201).json(usuario);
        });
    },

    login: function (req, res) {
        var user = req.body.usuario;
        var pass = req.body.password;
        usuarioModel.findOne({ $or:[{nickname: user, password: pass},{email: user, password: pass}]}, function (err, usuario) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting usuario.',
                    error: err
                });
            }
            if (!usuario) {
                return res.status(404).json({
                    message: 'No such usuario'
                });
            }
            return res.json(usuario);
        });
    },


    /**
     * usuarioController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        usuarioModel.findOne({_id: id}, function (err, usuario) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting usuario',
                    error: err
                });
            }
            if (!usuario) {
                return res.status(404).json({
                    message: 'No such usuario'
                });
            }

            usuario.nickname = req.body.nickname ? req.body.nickname : usuario.nickname;
            usuario.password = req.body.password ? req.body.password : usuario.password;
			
            usuario.save(function (err, usuario) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating usuario.',
                        error: err
                    });
                }

                return res.json(usuario);
            });
        });
    },

    // updatesuscriptor: function (req, res) {
    //     var nick = req.params.nickname;
    //     usuarioModel.findOne({nickname: nick}, function (err, usuario) {
    //         if (err) {
    //             return res.status(500).json({
    //                 message: 'Error when getting usuario',
    //                 error: err
    //             });
    //         }
    //         if (!usuario) {
    //             return res.status(404).json({
    //                 message: 'No such usuario'
    //             });
    //         }

    //         usuario.nickname = req.body.nickname ? req.body.nickname : usuario.nickname;
    //         usuario.password = req.body.password ? req.body.password : usuario.password;
            
    //         usuario.save(function (err, usuario) {
    //             if (err) {
    //                 return res.status(500).json({
    //                     message: 'Error when updating usuario.',
    //                     error: err
    //                 });
    //             }

    //             return res.json(usuario);
    //         });
    //     });
    // },

    /**
     * usuarioController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        usuarioModel.findByIdAndRemove(id, function (err, usuario) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the usuario.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
