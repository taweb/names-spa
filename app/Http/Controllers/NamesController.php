<?php

namespace App\Http\Controllers;
use App\Name;

use Illuminate\Http\Request;

class NamesController extends Controller
{
    public function index () {
        return Name::all();
    }

    public function store (Request $request) {
        $data = $request->all();
        return Name::create($data);
    }

    public function show (Name $name) {
        return $name;
    }

    public function destroy (Name $name) {
        $name->delete();
        return response(null, 204);
    }
}
