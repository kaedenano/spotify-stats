import { Container, Flex} from '@chakra-ui/react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

export const view = () => {
    return (
        <>
        <Navbar />
            <Flex justify='center' align='center'>
                404 not found
            </Flex>

        <Footer />
        </>
    )
}

export default view;