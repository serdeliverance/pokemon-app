import Head from "next/head"
import { FC } from "react"

type LayoutProps = {
    children: React.ReactNode
}

export const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <Head>
                <title>Pokemon App</title>
                <meta name="author" content="sD3v" />
                <meta name="description" content="Information about pokemon xxxx"/>
                <meta name="keywords" content="XXXX, pokemon, pokedex"/>
            </Head>

            {/* Navbar */}

            <main>
                { children }
            </main>
        </>
    )
}