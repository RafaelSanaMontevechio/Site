module.exports = {
    siteMetadata: {
        title: 'Site React e Gatsby'
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-postcss',
        {
            resolve: 'gatsby-plugin-purgecss',
            options: {
                printRejected: true,
                tailwind: true
            }
        }
    ]
}
