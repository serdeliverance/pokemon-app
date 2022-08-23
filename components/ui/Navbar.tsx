import { useTheme, Text, Spacer, Image } from "@nextui-org/react"

export const Navbar = () => {
    
    const { theme } = useTheme()
    
    return (
        <div style={{
            display: 'flex',
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'start',
            padding: '0x 20px',
            backgroundColor: theme?.colors.gray400.value
        }}>
            <Image src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/58.png"} alt="app icon" width={70} height={70} />
            <Text color="white" h2>P</Text>
            <Text color="white" h3>ókemon</Text>

            <Spacer css={{ flex: 1}}/>

            <Text color="white">Favoritos</Text>
        </div>
    )
}