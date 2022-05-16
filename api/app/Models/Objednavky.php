<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Objednavky extends Model
{
    protected $table = 'objednavky';

    protected $fillable = ['nazov', 'ingrediencie', 'adresa', 'tel cislo'];
}
