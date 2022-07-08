import React, { useContext } from 'react'
import Head from 'next/head'
import StoreContext from '../store'

import Link from 'next/link'

import Layout from '../components/layout'
import Button from '../components/button'
import * as Icon from '../components/icons'
import { THEME } from '../constants'

function HomePage() {
  const store = useContext(StoreContext)

  return (
    <Layout>
      <Head>
        <title>Kripto Ekosistem Haritası</title>
      </Head>
      <div className="image" />
      <div className="text">
        <div>
          <h1>
            🇹🇷 Kripto <br />
            Ekosistemi Haritası
          </h1>
          <p>
            Kripto ekosistemi haritamız ile birbirimizi tanımamız, görmemiz,
            ihtiyaçlarımızı karşılamamız ve gerektiğinde birlikte yola çıkmamızı
            sağlayarak bireysel değil, hep beraber çok daha güçlü bir ekosistem
            inşa etmeyi hedefliyoruz. <br />
            <br />
            Aşağıda yer alan formda kendinizi veya bağlı bulunduğunuz projeyi
            tanıtarak yakında yayınlanacak ekosistem haritasında
            bulunabilirsiniz. Sizleri aramızda görmekten mutluluk duyarız 😊 👇
          </p>
        </div>
        <Link href="https://forms.gle/54HW3eMoumRD3vhd9">
          <Button>Formu Doldur</Button>
        </Link>
      </div>
    </Layout>
  )
}

export default HomePage
