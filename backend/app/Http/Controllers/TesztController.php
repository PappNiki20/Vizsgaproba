<?php

namespace App\Http\Controllers;

use App\Models\Teszt;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class TesztController extends Controller
{
    public function tesztek()
    {
        return Teszt::all();
    }
    public function adottTesztek($k_id)
    {
        $tesztek = DB::table('teszts')
            ->select(
                'teszts.*',
                'kategorias.kategorianev'
            )
            ->join('kategorias', 'teszts.kategoriaId', '=', 'kategorias.id')
            ->where('kategoriaId', '=', $k_id)
            ->get();

        return response()->json(['adottcsapatok' => $tesztek]);
    }
}
