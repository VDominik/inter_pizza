<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class menuSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('menu')->insert([
            'nazov' => "Šunkova",
            'ingrediencie' => "kukurica",
            'cena' => "5",
        ]);

        DB::table('menu')->insert([
            'nazov' => "Kukuricová",
            'ingrediencie' => "šunka, syr, kukurica",
            'cena' => "5.3",
        ]);

        DB::table('menu')->insert([
            'nazov' => "Taxikárska",
            'ingrediencie' => "šunka, syr, cibuľa, saláma",
            'cena' => "6",
        ]);

        DB::table('menu')->insert([
            'nazov' => "Stolárska",
            'ingrediencie' => "syr, rajčiny, kuracie mäso",
            'cena' => "6.5",
        ]);
    }
}
