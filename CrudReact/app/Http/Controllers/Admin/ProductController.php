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
        //return response()->json($products);
        return response()->json([
            'products' => $products,
        ]);
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        // validate
        $this->validate($request, [
            'title' => 'required|max:255',
        ]);

        $product = new Product([
            'title' => $request->title,
            'body' => $request->body,
        ]);

        $product->save();

        //return response()->json('Product add successfully.');
        return response()->json($product->find($product->id));
        
        // return task with user object
        //return response()->json($task->with('user')->find($task->id));
    }

    public function show(Product $product)
    {
        //
    }

    public function edit($id)
    {
        $product = Product::findOrFail($id);
        return response()->json([
            'product' => $product,
        ]);
    }

    public function update(Request $request, $id)
    {
        /*$product = Product::find($id);
        $product->title = $request->title;
        $product->body = $request->body;
        $product->save();

        return response()->json('Product update successfully.');*/

        $input = $request->all();
        $product = Product::findOrFail($id);
        $product->update($input);
        return response()->json($product->find($product->id));
    }

    public function destroy($id)
    {
        $product = Product::find($id);
        $product->delete();

        return response()->json('Product delets successfully.');
    }
}