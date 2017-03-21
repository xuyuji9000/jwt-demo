<?php

// Dependency Injection Container
$container = $app->getContainer();

/**
 * View Template Configuration
 */
// php view
// $container['view'] = new \Slim\Views\PhpRenderer("../templates/");

// twig
$container['view'] = function($c)
{
    $view = new \Slim\Views\Twig('../templates/', [
        'cache' => '../cache'
    ]);

    // Initiate and add Slim specific extension
    $basePath = rtrim(str_ireplace('index.php', '', $c['request']->getUri()->getBasePath()), '/');
    $view->addExtension(new Slim\Views\TwigExtension($c['router'], $basePath));
    return $view;
};


/*
$container['db'] = function($c) {
    return DatabaseFactory::create($c['settings']['database']);
};
 */

// Session configuration
$container['session'] = function($c) {
    return new \SlimSession\Helper;
};

// Log configuration
$container['logger'] = function($c) {
    $logger = new \Monolog\Logger('slim_logger');
    $file_handler = new \Monolog\Handler\StreamHandler('../logs/app.log');
    $logger->pushHandler($file_handler);
    return $logger;
};

// Eloquent Configuration
$capsule = new Illuminate\Database\Capsule\Manager;
$capsule->addConnection($container->get('settings')['db']);
$capsule->setAsGlobal();
$capsule->bootEloquent();
