import axios from "axios";
import { useEffect, useState } from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import { Audio, Oval } from 'react-loader-spinner'


const Phones = () => {
    const [phones, setPhones] = useState([])

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        // .then(res => res.json())
        // .then(data => console.log(data))
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data => {
                const phoneData = data.data.data;
                const phoneWithFakeData = phoneData.map(phone => {
                    const obj = {
                        name: phone.phone_name,
                        price: parseInt(phone.slug.split('-')[1])
                    }
                    return obj
                })
                console.log(phoneWithFakeData)
                setPhones(phoneWithFakeData)
                setLoading(false)
            })
    }, [])
    return (
        <div>
            {
                loading && <div className="">
                    <Audio
                        height="80"
                        width="80"
                        radius="9"
                        color='green'
                        ariaLabel='three-dots-loading'
                        wrapperStyle
                        wrapperClass
                    />
                    <Oval
                        height={80}
                        width={80}
                        color="#4fa94d"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                        ariaLabel='oval-loading'
                        secondaryColor="#4fa94d"
                        strokeWidth={2}
                        strokeWidthSecondary={2}

                    />
                </div>
            }

            <h2 className="text-4xl">Phones: {phones.length}</h2>
            <BarChart width={660} height={400} data={phones}>
                <Bar dataKey="price" fill="#8884d8" />
                <XAxis dataKey="name"></XAxis>
                <Tooltip></Tooltip>
                {/*Tooltip holo mouse drle price dekabe  */}
            </BarChart>
        </div>
    );
};

export default Phones;