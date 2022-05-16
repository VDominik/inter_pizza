<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class objednavkySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('objednavky')->insert([
            'nazov' => "Šunkova",
            'ingrediencie' => "kukurica",
            'adresa' => "Hlavna 456",
            'tel cislo' => "0915216489"
        ]);
        DB::table('objednavky')->insert([
            'nazov' => "Taxikárska",
            'ingrediencie' => "Šunka, syr, kukurica",
            'adresa' => "Nová 12",
            'tel cislo' => "0915216201"
        ]);
        DB::table('objednavky')->insert([
            'nazov' => "Taxikárska",
            'ingrediencie' => "Šunka, syr, kukurica",
            'adresa' => "Nová 12",
            'tel cislo' => "0915216201"
        ]);
        DB::table('objednavky')->insert([
            'nazov' => "Taxikárska",
            'ingrediencie' => "Šunka, syr, kukurica",
            'adresa' => "Nová 12",
            'tel cislo' => "0915216201"
        ]);
        DB::table('objednavky')->insert([
            'nazov' => "Šunkova",
            'ingrediencie' => "kukurica",
            'adresa' => "Hlavna 456",
            'tel cislo' => "0915216489"
        ]);
        DB::table('objednavky')->insert([
            'nazov' => "Šunkova",
            'ingrediencie' => "kukurica",
            'adresa' => "Hlavna 456",
            'tel cislo' => "0915216489"
        ]);
        DB::table('objednavky')->insert([
            'nazov' => "Šunkova",
            'ingrediencie' => "kukurica",
            'adresa' => "Hlavna 456",
            'tel cislo' => "0915216489"
        ]);
    }
}

