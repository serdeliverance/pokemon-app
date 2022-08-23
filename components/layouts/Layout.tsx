import Head from "next/head"
import { FC } from "react"

interface LayoutProps {
    children: React.ReactNode,
    title?: string
}

export const Layout: FC<LayoutProps> = ({ children, title }) => {
    return (
        <>
            <Head>
                <title>{ title ?? 'Pokemon App'}</title>
                <meta name="author" content="sD3v" />
                <meta name="description" content={ `Information about pokemon ${title}` }/>
                <meta name="keywords" content="XXXX, pokemon, pokedex"/>
            </Head>

            {/* Navbar */}

            <main>
                { children }
            </main>
        </>
    )
}