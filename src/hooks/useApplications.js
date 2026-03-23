import { useState, useEffect } from "react";
import axios from "axios";

function useApplications() {
    const [applications, setApplications] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        axios.get("http://localhost:5000/applications/getApps")
            .then(res => setApplications(res.data))
            .catch(err => setError(err))
            .finally(() => setLoading(false))
    }, [])

    return { applications, loading, error }
}

export default useApplications