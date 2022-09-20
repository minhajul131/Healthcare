import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import BookingModal from './BookingModal';
import Services from './Services';
import Loading from '../Shared/Loading';

const AvailableAppointments = ({date}) => {
    // const [services, setServices] = useState([]);
    const [treatment,setTreatment] = useState(null);

    const formattedDate = format(date,'PP');
    const {data: services, isLoading, refetch} = useQuery(['available',formattedDate], ()=> fetch(`https://sleepy-chamber-06452.herokuapp.com/available?date=${formattedDate}`)
    .then(res => res.json())
    )
    if(isLoading) {
        return <Loading></Loading>
    }
    // useEffect(() => {
    //     fetch(`https://sleepy-chamber-06452.herokuapp.com/available?date=${formattedDate}`)
    //     // fetch(`https://sleepy-chamber-06452.herokuapp.com/service`)
    //     .then(res => res.json())
    //     .then(data => setServices(data));
    // },[formattedDate])
    return (
        <div>
            <h4 className="text-xl text-secondary font-bold text-center">Available Appointments on: {format(date,'PP')}</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services?.map(service => <Services
                        key={service.id}
                        service={service}
                        setTreatment={setTreatment}
                        refetch={refetch}
                        ></Services>)
                }
            </div>
            {treatment && <BookingModal date={date}
            treatment={treatment}
            setTreatment={setTreatment}></BookingModal>}
        </div>
    );
};

export default AvailableAppointments;