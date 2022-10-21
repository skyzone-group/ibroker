<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateObjectsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('objects', function (Blueprint $table) {
            $table->id();
            $table->integer('user_id');
            $table->integer('user_type');
            $table->integer('object_type_id');// int(11) NOT NULL,
            $table->string('object_deals');// varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
            $table->integer('access_type')->nullable();// int(11) DEFAULT NULL,
            $table->integer('object_time_type')->default(0);// int(11) NOT NULL DEFAULT 0,
            $table->string('rent_type')->default(0);// varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
            $table->integer('room_count')->default(0);// int(11) NOT NULL DEFAULT 0,
            $table->integer('floor')->default(0);// int(11) NOT NULL DEFAULT 0,
            $table->integer('floor_count')->default(0);// int(11) NOT NULL DEFAULT 0,
            $table->integer('total_area')->default(0);// int(11) NOT NULL DEFAULT 0,
            $table->integer('land_area')->default(0);// int(11) NOT NULL DEFAULT 0,
            $table->integer('done_area')->default(0);// int(11) NOT NULL DEFAULT 0,
            $table->integer('living_area')->default(0);// int(11) NOT NULL DEFAULT 0,
            $table->integer('build_year')->default(0);// int(11) DEFAULT 0,
            $table->integer('object_condition')->default(0);// int(11) NOT NULL DEFAULT 0,
            $table->integer('object_material_type')->default(0);// int(11) NOT NULL DEFAULT 0,
            $table->text('comment')->nullable();// text COLLATE utf8mb4_unicode_ci NOT NULL,
            $table->integer('price');// int(11) NOT NULL,
            $table->integer('negotiable')->default(0);// int(11) NOT NULL DEFAULT 0,
            $table->integer('region_id');// int(11) NOT NULL,
            $table->integer('district_id');// int(11) NOT NULL,
            $table->integer('quarter_id');// int(11) NOT NULL,
            $table->text('youtube_url')->nullable();// text COLLATE utf8mb4_unicode_ci DEFAULT '0',
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('objects');
    }
}
