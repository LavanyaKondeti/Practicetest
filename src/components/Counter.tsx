// @ts-nocheck

// src/components/DataComponent.tsx
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData, postData } from '../store/actions/counterActions';
import { RootState } from '../store/reducers';
import Card from './Card';
import "./Counter.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DataComponent: React.FC = () => {
    const dispatch = useDispatch();
    const { data, loading, error, postReq } = useSelector((state: RootState) => state.data);

    const handleFetchData = () => {
        dispatch(fetchData());
    };

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

    // if (loading) {
    //     return <p>Loading...</p>;
    // }
    

    const handlePostData = () => {
        const samplePostData = {
            name: "morpheus",
            job: "leader"
        };

        dispatch(postData(samplePostData));
    };
    // console.log("postReq", postReq)
    toast.success('This is a success message!', {
        position: 'top-right',
        autoClose: 5000, // Duration in milliseconds
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    return (
        <React.Fragment>
            {/* <button onClick={handleFetchData} disabled={loading}>
                {loading ? 'Loading...' : 'Fetch Data'}
            </button> 

            <button onClick={handlePostData} disabled={loading}>
                {loading ? 'Posting...' : 'Post Data'}
            </button>*/}

            {error && <p>Error: {error}</p>}
            {postReq ? <ToastContainer /> : ""}
            <div className='root'>
                {data != "" ? data.data.map((item) => (
                    <>
                        <div className="app" key={item}>
                            <Card
                                imageSrc={item.avatar} // Replace with your image URL
                                name={item.first_name + " " + item.last_name}
                                email={item.email}
                            />
                            {/* Add more Card components as needed */}
                        </div>
                    </>
                )) : ""}
                <div
                    className='addIcon'
                    onClick={handlePostData}

                ><img className="imgAddIcon" src={"./Addimg.png"} /></div>
            </div>
            
        </React.Fragment>
    );
};

export default DataComponent;

