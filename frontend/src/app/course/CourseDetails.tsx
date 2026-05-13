import { useState,useEffect } from "react"

const CourseDetails = (props:any)=>{
    
    // const obj = props.courses.map((el:any,idx:any)=>{
    //     return el.category;
    // })

    // console.log(obj);
    
    const category = props.categoryVal.toLowerCase();

    console.log(category);

    useEffect(()=>{
        const fetchData = async()=>{
            const data = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&key=${import.meta.env.VITE_API_KEY}&q=${category}`);
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