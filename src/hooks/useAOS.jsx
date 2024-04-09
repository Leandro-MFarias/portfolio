import { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css'

function useAos () {
    useEffect(() => {
        Aos.init({ duration: '1500',easing: 'ease', delay: '260'})

        return () => {
            Aos.refreshHard()
        }
    }, [])
}

export default useAos