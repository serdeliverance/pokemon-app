import { useTheme, Text, Spacer, Image } from '@nextui-org/react'
import Link from 'next/link'

export const Navbar = () => {
  const { theme } = useTheme()

  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'start',
        padding: '0x 20px',
        backgroundColor: theme?.colors.gray400.value,
      }}
    >
      <Link href="/">
        <div style={{ display: 'flex' }}>
          <Image
            src={
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/58.png'
            }
            alt="app icon"
            width={70}
            height={70}
          />
          <Text color="white" h2>
            P
          </Text>
          <Text color="white" h3 style={{ paddingTop: '10px' }}>
            ókemon
          </Text>
        </div>
      </Link>

      <Spacer css={{ flex: 1 }} />

      <Link href="/favorites">
        <Text color="white" style={{ paddingRight: '50px' }} h3>
          Favorites
        </Text>
      </Link>
    </div>
  )
}
