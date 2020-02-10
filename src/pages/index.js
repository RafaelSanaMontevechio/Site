import React from 'react';
import Helmet from 'react-helmet';

import './styles.css'

import BtnWhatsapp from '../components/BtnWhatsapp';
import Logo from '../components/Logo';
import Hero from '../components/Hero';
import Selo from '../components/Selo';
import Projects from '../components/Projects';
import Footer from '../components/Footer'

import { graphql, useStaticQuery } from 'gatsby';

const Header = ({ children }) => {
    return (
        <div className='p-4 bg-indigo-400 sm:flex justify-between items-center'>
            {children}
        </div>
    )
}

const Index = () => {
    const { site } = useStaticQuery(graphql`
            query MyQuery {
                site {
                    siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <div>
            <Helmet>
                <title>{site.siteMetadata.title}</title>
            </Helmet>
            <Header>
                <Logo />
                <div>
                    <BtnWhatsapp />
                </div>
            </Header>

            <Hero />

            <Selo />

            <Projects />

            <Footer>
                <BtnWhatsapp />
            </Footer>
        </div>
    )
}

export default Index