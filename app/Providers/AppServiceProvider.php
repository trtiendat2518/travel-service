<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Validator;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->singleton(
            \App\Repositories\Order\OrderInterface::class,
            \App\Repositories\Order\OrderRepository::class,
        );
        $this->app->singleton(
            \App\Repositories\Car\CarInterface::class,
            \App\Repositories\Car\CarRepository::class,
        );
        $this->app->singleton(
            \App\Repositories\Service\ServiceInterface::class,
            \App\Repositories\Service\ServiceRepository::class,
        );
        $this->app->singleton(
            \App\Repositories\Post\PostInterface::class,
            \App\Repositories\Post\PostRepository::class,
        );
        $this->app->singleton(
            \App\Repositories\User\UserInterface::class,
            \App\Repositories\User\UserRepository::class,
        );
        $this->app->singleton(
            \App\Repositories\Contact\ContactInterface::class,
            \App\Repositories\Contact\ContactRepository::class,
        );
        $this->app->singleton(
            \App\Repositories\Review\ReviewInterface::class,
            \App\Repositories\Review\ReviewRepository::class,
        );
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Validator::extend('alpha_spaces', function ($attribute, $value) {
            return preg_match('/^[\pL\s]+$/u', $value);
        });
        Validator::extend('notspecial_spaces', function ($attribute, $value) {
            return preg_match('/^[0-9a-zA-Z\pL\s]+$/u', $value);
        });
    }
}
