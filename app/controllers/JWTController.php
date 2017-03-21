<?php
namespace App\Controllers;

use \Firebase\JWT\JWT;
use DateTime;

class JWTController extends HomeController
{
    public function token($req, $res, $args)
    {
        $now = new DateTime();
        $future = new DateTime("now +2 hours");

        $payload = array(
            "iat" => $now->getTimeStamp(),
            "exp" => $future->getTimeStamp(),
            "username" => "Karl Xu"
        );
        $secret = getenv('JWT_SECRET');
        $token= JWT::encode($payload, $secret, "HS256");

        $data['status'] = 'ok';
        $data['token'] = $token;

        return $res->withStatus(201)
            ->withHeader("Content-Type", "application/json")
            ->write(json_encode($data, JSON_UNESCAPED_SLASHES|JSON_PRETTY_PRINT));
    }

    public function test($req, $res, $args)
    {
        var_dump('hello world.');
    }
}
