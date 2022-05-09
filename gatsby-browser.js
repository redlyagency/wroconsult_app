import './src/styles/global.css'

import "@fontsource/poppins/100.css"
import "@fontsource/poppins/200.css"
import "@fontsource/poppins/300.css"
import "@fontsource/poppins/400.css"
import "@fontsource/poppins/500.css"
import "@fontsource/poppins/600.css"
import "@fontsource/poppins/700.css"
import "@fontsource/poppins/800.css"
import "@fontsource/poppins/900.css"

//scroll to top on every swap to new route 
exports.shouldUpdateScroll = ({
    routerProps: { location },
    getSavedScrollPosition,
    }) => {
        const { pathname } = location
        const scrollToTopRoutes = [`/`]
        if (scrollToTopRoutes.indexOf(pathname) !== -1) {
        window.scrollTo(0, 0)
    }

    return false
}