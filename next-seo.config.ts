import { NextSeoProps } from 'next-seo'

export default {
  title: 'Psicóloga Graziela Gomes',
  description: 'Psicóloga Graziela Gomes',
  canonical: 'https://github.com/Alquipo/boilerplate',
  openGraph: {
    title: 'Graziela Gomes | Psicóloga Graziela Gomes',
    type: 'website',
    url: 'https://github.com/Alquipo/boilerplate',
    locale: 'pt_BR',
    site_name: 'GraziGomes',
    description: 'Psicóloga paulista com atendimento online em São Paulo',
    images: [
      {
        url: './public/images/Logo.png',
        alt: 'Psicóloga paulista com atendimento online em São Paulo',
        height: 1200,
        width: 630
      }
    ]
  },
  twitter: {
    handle: '@psygrazigomes',
    site: '@psygrazigomes',
    cardType: 'summary_large_image'
  }
} as NextSeoProps