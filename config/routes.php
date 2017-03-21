<?php

use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

$app->get('/uploadimage/view', App\Controllers\UploadImageController::class.':view');
$app->post('/uploadimage/upload', App\Controllers\UploadImageController::class.':upload');

$app->post('/jwt/token', App\Controllers\JWTController::class.':token');

// api
$app->post('/api/jwt/test', App\Controllers\JWTController::class.':test');
