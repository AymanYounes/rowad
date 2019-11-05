<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Model;

class ProductCategory extends Model
{

    protected $table = 'product_category';
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'id', 'name_en', 'name_ar', 'created_at', 'updated_at',
    ];

}
