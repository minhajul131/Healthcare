import React from 'react';
import { toast } from 'react-toastify';

const DoctorRow = ({doctor, index, refetch}) => {
    const {name, specialization, img, email} = doctor;

    const hendleDelete = email =>{
        fetch(`https://sleepy-chamber-06452.herokuapp.com/doctor/${email}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res=>res.json())
        .then(data => {
            if (data.deletedCount){
                toast.success(`Doctor: ${name} is Deleted`);
                refetch();
            }
        })
    }

    return (
        <tr>
        <th>{index + 1}</th>
        <td>
            <div class="avatar">
                <div class="w-24 rounded-full">
                    <img src={img} alt={name} />
                </div>
            </div>
        </td>
        <td>{name}</td>
        <td>{specialization}</td>
        <td><button onClick={()=>hendleDelete(email)} className='btn btn-xs btn-error'>Delete</button></td>
    </tr>
    );
};

export default DoctorRow;