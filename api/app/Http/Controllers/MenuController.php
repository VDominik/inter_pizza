<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller as BaseController;
use App\Models\Menu;
use App\Models\Objednavky;

class MenuController extends BaseController
{
    public function showMenu (Request $request){
        $menu = Menu::all();

        return response()->json([
            'menu'=>$menu
        ]);
    }
    public function showObjednavky (Request $request){
        $objednavky = Objednavky::all();

        return response()->json([
            'objednavky'=>$objednavky
        ]);
    }
}
