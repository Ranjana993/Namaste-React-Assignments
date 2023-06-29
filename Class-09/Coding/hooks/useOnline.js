import { useEffect, useState } from "react"

const useOnline = () => {
    const [isOnline, setonline] = useState(true);

    useEffect(() => {
        const onlineFunc = () => setonline(true);
        const offlineFunc = () => setonline(false);

        window.addEventListener('online', onlineFunc);
        window.addEventListener('offline', offlineFunc)

        return () => {
            window.removeEventListener('online', onlineFunc);
            window.removeEventListener('offline', offlineFunc)
        }

    }, [])
    return isOnline;



}
export default useOnline;