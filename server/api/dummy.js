'use strict';

const express = require('express');
const oauth2 = require('./../oauth2');
const router = express.Router();

/**
 * GET /api/dummy
 *
 * Retrieve a page of books (up to ten at a time).
 */
router.get('/dummy', oauth2.required, (req, res, next) => {
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