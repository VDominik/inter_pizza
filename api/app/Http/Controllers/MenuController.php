<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller as BaseController;
use App\Models\Menu;

class MenuController extends BaseController
{
    public function showMenu (Request $request){
        $menu = Menu::all();

        return response()->json([
            'menu'=>$menu
        ]);
    }
}
