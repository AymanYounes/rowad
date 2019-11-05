<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Model;

class Products extends Model
{

    protected $table = 'products';
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'id', 'category_id', 'title_en', 'title_ar', 'thumbnail','image', 'description_en', 'description_ar', 'created_at', 'updated_at',
    ];


    public function category()
    {
        return $this->belongsTo('App\Models\ProductCategory', 'category_id');
    }
}
