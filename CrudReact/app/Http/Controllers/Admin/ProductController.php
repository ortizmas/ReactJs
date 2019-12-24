<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{

    public function index()
    {
        $products = Product::all();
        return response()->json($products);
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        $product = new Product([
            'title' => $request->title,
            'body' => $request->body,
        ]);

        $product->save();

        return response()->json('Product add successfully.');
    }

    public function show(Product $product)
    {
        //
    }

    public function edit($id)
    {
        $product = Product::find($id);
        return response()->json($product);
    }

    public function update(Request $request, $id)
    {
        $product = Product::find($id);
        $product->title = $request->title;
        $product->body = $request->body;
        $product->save();

        return response()->json('Product update successfully.');
    }

    public function destroy($id)
    {
        $product = Product::find($id);
        $product->delete();

        return response()->json('Product delets successfully.');
    }
}