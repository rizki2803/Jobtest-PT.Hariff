import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, createInertiaApp } from '@inertiajs/inertia-react';
import Navbar from '@/Components/Homepage/Navbar';
import Footer from '@/Components/Homepage/Footer';
import { Inertia } from '@inertiajs/inertia';



export default function Dashboard(props) {
    const [nama, setNama] = useState('');
    const [alamat, setAlamat] = useState('');
    const [isNotif, setIsNotif] = useState(false)

    const handleSubmit = () => {
        const data = {
            nama, alamat
        }
        Inertia.post('/karyawan', data)
        setIsNotif(true)
        setNama('')
        setAlamat('')
    }
    // console.log(props) 

    return (
        // <AuthenticatedLayout
        //     user={auth.user}
        //     header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        // >
        // <Head title="Dashboard" />

        <div className='min-h-screen bg-slate-50'>
        <div>
            <Navbar />
        </div>
        <div>
        <div className="py-12">
            <div className="max-w-2xl mx-auto sm:px-6 lg:px-8">
            <div className='p-4 text-2xl text-center'>BUAT DATA KARYAWAN</div>
                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div className="p-6 text-white-900 ">
                        {isNotif && <div className="alert alert-info shadow-lg">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current flex-shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                <span>Data Berhasil Dibuat</span>
                            </div>
                        </div>
                        }
                        <label className="label">
                            <span className="label-text-black">NAMA</span>
                        </label>
                        <input type="text" placeholder="Nama" className="input input-bordered input-accent  w-full" onChange={(nama) => setNama(nama.target.value)} value={nama} />
                        <label className="label">
                            <span className="label-text-black ">ALAMAT</span>
                        </label>
                        <input type="text" placeholder="Alamat" className="input input-bordered input-accent w-full" onChange={(alamat) => setAlamat(alamat.target.value)} value={alamat} />
                        <div className="modal-action flex justify-center items-center">
                            <button className="btn btn-primary m-4" onClick={() => handleSubmit()}>Submit</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        </div>
        
    </div>
        
        // </AuthenticatedLayout>
    );
}
