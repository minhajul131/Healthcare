import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import DoctorRow from './DoctorRow';

const ManageDoctors = () => {

    const {data: doctors, isLoading, refetch} =useQuery('doctors', ()=> fetch('https://sleepy-chamber-06452.herokuapp.com/doctor', {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res=> res.json()));

    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className="text-2xl">Manage Doctor: {doctors.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                    <tr>
                        <th></th>
                        <th>Avater</th>
                        <th>Name</th>
                        <th>Specialization</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        doctors.map((doctor, index) => <DoctorRow
                        key={doctor._key}
                        doctor={doctor}
                        index={index}
                        refetch={refetch}
                    ></DoctorRow>)
                    }
                    </tbody>
                </table>
                </div>
        </div>
    );
};

export default ManageDoctors;