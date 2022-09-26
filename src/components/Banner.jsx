import { Box, Image } from "@chakra-ui/react"

function Banner(){
 return(
    <>
    <header>
        <Box d="flex" align-items="center" justifyContent="space-between" ml={6} mr={6} >
            <Box>
                <Image boxSize="90px" src="{brandlogo}" />
            </Box>
            <Box></Box>
        </Box>
    </header>
    </>
 )   
}

export default Banner