<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Model;

class Services extends Model
{

    protected $table = 'services';
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'id', 'title_en', 'title_ar', 'thumbnail', 'content_en', 'content_ar', 'created_at', 'updated_at',
    ];

}
