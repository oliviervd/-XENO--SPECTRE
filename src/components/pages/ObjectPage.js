import React, {useEffect, useState} from "react"
import ObjectViewer from "../elements/objectviewers/ObjectViewer";
import {createClient} from "@supabase/supabase-js";
import {useNavigate, useParams} from "react-router-dom";
const supabase = createClient("https://nrjxejxbxniijbmquudy.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5yanhlanhieG5paWpibXF1dWR5Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY3NDMwNTY0NCwiZXhwIjoxOTg5ODgxNjQ0fQ.3u7yTeQwlheX12UbEzoHMgouRHNEwhKmvWLtNgpkdBY")


const ObjectPage = () => {

    const { id } = useParams()
    console.log(id)
    const [details, setDetails] = useState('');

    useEffect(()=>{
        fetchObjectsByID(id)
    }, [])

    const navigate = useNavigate()
    const routeChange = () => {
        navigate("/index/")
    }

    async function fetchObjectsByID(objectNumber) {
        const { data } = await supabase
            .from("dmg_objects_LDES")
            .select("LDES_raw, objectNumber, iiif_image_uris")
            .eq("objectNumber", objectNumber)
        setDetails(data)
    }

    let images = ""
    try {
        images = details[0]["iiif_image_uris"][0]
    } catch(error) {
        console.log(error)
    }

    console.log(images);


    return(
        <div className="container">
            <div className="grid--3_4_3">
                <h1 className="home">object</h1>
                <div></div>
                <h2 onClick={()=>routeChange()}>back to index</h2>
            </div>
            <div>
                <div className="lineH"></div>
                <ObjectViewer description={true} details = {details} image={images} colorStrip={false}/>
            </div>
        </div>
    )
}

export default ObjectPage
