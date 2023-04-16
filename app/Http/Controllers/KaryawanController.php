<?php

namespace App\Http\Controllers;

use App\Http\Resources\KaryawanCollection;
use Inertia\Inertia;
use App\Models\Karyawan;
use Illuminate\Http\Request;


class KaryawanController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $karyawan = new KaryawanCollection(Karyawan::paginate(10));
        return Inertia::render('Homepage', [
            'title' => "Jobtest Hariff",
            'karyawan' => $karyawan,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $karyawan = new Karyawan();
        $karyawan->nama = $request->nama;
        $karyawan->alamat = $request->alamat;
        $karyawan->save();
        return redirect('/')->with('message', 'Data Berhasil Dibuat');
    }

    /**
     * Display the specified resource.
     */
    public function show(Karyawan $karyawan)
    {
        return response()->json($karyawan);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Karyawan $karyawan, Request $request)
    {
        return Inertia::render('EditKaryawan', [
            'title' => "Jobtest Hariff",
            'myKaryawan' => $karyawan->find($request->id)
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
       Karyawan::where('id', $request->id)->update([
        'nama' => $request->nama,
        'alamat' =>  $request->alamat,
       ]);
       return redirect('/')->with('message', 'Update data berhasil');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        $karyawan = Karyawan::find($request->id);
        $karyawan->delete();
        return redirect('/');
    }
}
