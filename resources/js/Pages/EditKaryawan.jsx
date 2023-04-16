import React, { useState } from 'react';
import { Head } from '@inertiajs/react';
import Navbar from '@/Components/Homepage/Navbar';
import Footer from '@/Components/Homepage/Footer';
import { Inertia } from '@inertiajs/inertia';


export default function EditKaryawan(props) {
    const [nama, setNama] = useState('');
    const [alamat, setAlamat] = useState('');


    const handleSubmit = () => {
        const data = {
           id: props.myKaryawan.id, nama, alamat
        }
        Inertia.post('/karyawan/update', data)
        setNama('')
        setAlamat('')
    }

    return (
        <div className='min-h-screen bg-slate-50'>
            <Head title={props.title} />
            <div>
                <Navbar />
            </div>
            <div>
                <div className="py-12">
                    <div className="max-w-2xl mx-auto sm:px-6 lg:px-8">
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">

                            <div className="p-6 text-white-900 ">
                                <div className='p-4 text-2xl text-center'>EDIT DATA KARYAWAN</div>
                                <label className="label">
                                    <span className="label-text-black">NAMA</span>
                                </label>
                                <input type="text" placeholder="Nama" className="input input-bordered input-accent  w-full" onChange={(nama) => setNama(nama.target.value)} defaultValue={props.myKaryawan.nama} />
                                <label className="label">
                                    <span className="label-text-black ">ALAMAT</span>
                                </label>
                                <input type="text" placeholder="Alamat" className="input input-bordered input-accent w-full" onChange={(alamat) => setAlamat(alamat.target.value)} defaultValue={props.myKaryawan.alamat} />
                                <div className="modal-action flex justify-center items-center">
                                    <button className="btn btn-primary m-4" onClick={() => handleSubmit()}>UPDATE</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div>

            </div>
           
    
        </div>
    )
        
}