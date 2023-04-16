import { Link } from '@inertiajs/react';

const isKaryawan = (karyawan) => {
    return karyawan.map((data, i) => {
       return (
        
        <tbody>
            <tr>
                <th>{data.id}</th>
                <th>{data.nama}</th>
                <th>{data.alamat}</th>
                <th>
                    <div>
                    <Link href='/karyawan/edit' method='get' data={{ id: data.id }} as="button" className="btn btn-warning m-2"> 
                        Edit
                    </Link>
                    <Link href='/karyawan/delete' method='post' data={{ id: data.id }} as="button" className="btn btn-error m-2"> 
                        delete
                    </Link>
                    
                    </div>
                    
                </th>
            </tr>
        </tbody>
       )
    })
}



const noKaryawan = () => {
    return (
        <div>Mohon maaf saat ini tidak ada data</div>
    )
}

const KaryawanList = ({ karyawan }) => {
    return !karyawan ? noKaryawan() : isKaryawan(karyawan)
}




export default KaryawanList