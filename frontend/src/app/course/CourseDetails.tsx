import { useState,useEffect } from "react"

const CourseDetails = ()=>{

    useEffect(()=>{
        const fetchData = async()=>{
            const data = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&key=${import.meta.env.VITE_API_KEY}&q=disaster`);
            const res = data.json();
            console.log(res);
        }

        fetchData();
    },[]);

    return(
        <>Courses Provided</>
    )
}

export default CourseDetails;