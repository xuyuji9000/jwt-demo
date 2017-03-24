<?php
// Application Middleware

// Dependency Injection Container
$container = $app->getContainer();

// e.g: $app->add(new \Slim\Csrf\Guard);
$app->add(new \Slim\Middleware\Session([
    'name' => 'dummy_name',
    'autorefresh' => true,
    'lifetime' => '20 min',
]));

// Cross Domain Access
$app->add(function($request, $response, $next){
    $response = $next($request, $response);
    $response = $response
        ->withHeader('Access-Control-Allow-Origin', getenv('CSRF'))
        ->withHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Origin, Authorization');
    return $response;
});

// Json Web Token
$app->add(new \Slim\Middleware\JwtAuthentication([
    'path' => '/api',
    'secret' => getenv('JWT_SECRET'),
    'callback' => function($request, $response, $arguments) use ($container) {
        $container['jwt'] = $arguments['decoded'];
    }
]));
