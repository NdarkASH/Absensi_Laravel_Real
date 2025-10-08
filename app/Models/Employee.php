<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    /** @use HasFactory<\Database\Factories\EmployeeFactory> */
    use HasFactory;

    public const ROLES = [
        'SPPG',
        'AKUNTAN',
        'GIZI',
        'ASLAP',
        'DISTRIBUTOR',
        'CUCI',
        'PERSIAPAN',
        'MASAK'
    ];

    protected $fillable = [
        'id', 'username', 'firstname', 'lastname', 'role'
    ];
}
