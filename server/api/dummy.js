'use strict';

const express = require('express');
const router = express.Router();
const oauth2 = require('./../oauth2');

/**
 * GET /api/dummy
 */
router.get('/', oauth2.required, (req, res, next) => {
    res.json({
        data: [
            {id: '1', name: 'dummy-1'},
            {id: '2', name: 'dummy-2'}
        ],
    });
});

/**
 * Errors on routes.
 */
router.use((err, req, res, next) => {
    // Format error and forward to generic error handler for logging and
    // responding to the request
    err.response = {
        message: err.message,
        internalCode: err.code
    };
    next(err);
});

module.exports = router;