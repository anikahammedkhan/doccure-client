import React, { useState } from 'react';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';


const Appointment = () => {
    const [selected, setSelected] = useState(new Date());

    let footer = <p>Please pick a day.</p>;
    if (selected) {
        footer = <h1>You picked {format(selected, 'PP')}.</h1>;
    }
    return (
        <div className='w-3/4 mx-auto p-5 m-5 grid grid-cols-2 gap-4 items-center justify-center'>
            <div className='bg-sky-300 rounded-xl shadow-lg hover:-translate-y-2 hover:-translate-x-2 hover:shadow-2xl '>
                <DayPicker
                    mode="single"
                    selected={selected}
                    onSelect={setSelected}
                    numberOfMonths={2}
                />
            </div>
            <div className='flex justify-center'>
                <div className='p-5'>
                    <h1 className='font-bold text-3xl'>Your Appointment Information Here</h1>
                    <p className='text-red-400 my-2 text-xl'>{footer}</p>
                    <p className='text-green-400 my-2 text-xl'>Select Appointment Time :</p>
                    <select className="select select-bordered w-full">
                        <option disabled selected>Select Appointment Time</option>
                        <option>9.00 AM</option>
                        <option>9.30 AM</option>
                        <option>10.00 AM</option>
                        <option>10.30 AM</option>
                        <option>11.00 AM</option>
                        <option>11.30 AM</option>
                        <option>12.00 PM</option>
                        <option>12.30 PM</option>
                        <option>1.00 PM</option>
                        <option>1.30 PM</option>
                        <option>2.00 PM</option>
                        <option>2.30 PM</option>
                        <option>3.00 PM</option>
                        <option>3.30 PM</option>
                        <option>4.00 PM</option>
                        <option>4.30 PM</option>
                        <option>5.00 PM</option>
                        <option>5.30 PM</option>
                        <option>6.00 PM</option>
                        <option>6.30 PM</option>
                        <option>7.00 PM</option>
                        <option>7.30 PM</option>
                    </select>
                    <div className="mt-4">
                        <label className="block text-sm">
                            <span className="text-xl font-semibold">Message</span>
                            <textarea className="mt-1 block w-full border border-black rounded-lg text-xl p-2" rows={3} placeholder="Describe Your Problem Here or send any message..." defaultValue={""} />
                        </label>
                    </div>
                    <div className="mt-4">
                        <button className="btn shadow-lg hover:shadow-2xl text-white btn-success">Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Appointment;