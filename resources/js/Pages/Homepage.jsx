import React from 'react';
import { Head } from '@inertiajs/react';
import Navbar from '@/Components/Homepage/Navbar';
import KaryawanList from '@/Components/KaryawanList';
import Paginator from '@/Components/Homepage/Paginator';
import Footer from '@/Components/Homepage/Footer';


export default function Homepage(props) {
    return (
        <div className='min-h-screen bg-slate-50'>
            <Head title={props.title} />
            <div>
                <Navbar />
            </div>
            <div>
            <div className="py-12">
            <div className='p-4 text-2xl text-center'>DATA KARYAWAN</div>
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-white-900">
                        <a href="/dashboard" className="btn btn-accent m-2">Create</a>
                            <div className="overflow-x-auto">
                            
                                <table className="table table-zebra w-full">
                                    <thead>
                                        <tr>
                                            <th>id</th>
                                            <th>Name</th>
                                            <th>Alamat</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <KaryawanList karyawan={props.karyawan.data} />
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            </div>
            <div className='flex justify-center items-center'>
                <Paginator meta={props.karyawan.meta} />
            </div>
            
        </div>
    )
}