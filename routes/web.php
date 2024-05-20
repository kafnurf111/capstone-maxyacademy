<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('hackathon-welcome/welcome');
});

// Route::get('/joinclass', function () {
//     return view('joinclass');
// });

// Route::get('/group_hackathon', function () {
//     return view('grouphackthon');
// });

Route::get('/welcome_hackathon', function () {
    return view('hackathon-welcome/menu-hackathon');
});



Route::get('/dashboard_hackathon-1st-day1', function () {
    return view('hackathon-content/dash_hackathon');
})->name('dashboard_hackathon');

Route::get('/dashboard_hackathon-1st-day2', function () {
    return view('hackathon-content/1st_hackathon_day2');
})->name('1st_hackathon_day2');

Route::get('/dashboard_hackathon-1st-day3', function () {
    return view('hackathon-content/1st_hackathon_day3');
})->name('1st_hackathon_day3');



Route::get('/dashboard_hackathon-discussions', function () {
    return view('discussions/discussion1');
})->name('discussion1');
