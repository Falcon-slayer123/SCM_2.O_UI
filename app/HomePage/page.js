"use client";
import React from "react";
import { useState, useEffect } from "react";
export default function SamplePage() {
    const apiurl = process.env.API_BASE_URL;

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const res = await fetch(apiurl + '/scm');
    //             const result = await res.text();
    //             console.log("resukt-->" + result);
    //             setData(result);

    //         } catch (error) {
    //             console.error('Error fetching data:', error);
    //         } finally {
    //             setLoading(false);
    //         }
    //     };

    //     fetchData();
    // }, []);

    // if (loading) {
    //     return <p>Loading...</p>;
    // }

    return (
        <div>
            <h1>Data from API</h1>
            {data}
        </div>

    );
}

