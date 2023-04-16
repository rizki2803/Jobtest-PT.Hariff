<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Karyawan extends Model
{
    use HasFactory;
    protected $table = 'karyawan';
}

// public function up()
// {
//     Schema::create('products', function (Blueprint $table) {
//         $table->id();
//         $table->string('nama');
//         $table->integer('alamat');
//         $table->timestamps();
//     });
// }