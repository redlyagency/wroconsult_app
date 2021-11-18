import React from "react"
import { Link } from "gatsby"

export const HelmetData = {
    Title: 'Wroconsult - studia wykonalności - restrukturyzacja - dofinansowanie',
    Description: 'Blisko 20-letnie doświadczenie doradców Wroconsult pozwala na skuteczną pomoc klientom z sektora publicznego i prywatnego.',
    WebsiteLink: 'https://www.wroconsult.pl'
}
export const NavbarData = [
    {
        Title: 'Home',
        Link: '/'
    },
    {
        Title: 'Usługi',
        Link: '/uslugi/'
    },
    {
        Title: 'O nas',
        Link: '/o-nas/'
    },
    {
        Title: 'Nasi klienci',
        Link: '/nasi-klienci/'
    },
    {
        Title: 'Nasze projekty',
        Link: '/nasze-projekty/'
    },
    {
        Title: 'Aktualności',
        Link: '/aktualnosci/'
    }
]
export const NavbarDataButton = {
    Title: 'Kontakt',
    Link: '/kontakt/'
}
export const CookieDataAlert = {
    Content: <p style={{ fontFamily: "Poppins" }}>Używamy plików cookie i podobnych technologii, które umożliwiają działanie usług i funkcjonalności w naszej witrynie oraz pomagają nam zrozumieć interakcje z naszymi usługami. Klikając przycisk Akceptuj, zgadzasz się na stosowanie przez nas tych technologii w celach marketingowych i analitycznych. Zobacz <Link to="/polityka-prywatnosci" className="hoveredBtn" style={{ color: "#F16F7B", textDecoration: "underline" }}>Politykę prywatności</Link></p>,
    AcceptBtn: 'Akceptuj'
}
export const FooterData = {
    Title: <p style={{textAlign: 'center', fontFamily: 'Poppins'}}>&copy; {new Date().getFullYear()} - Wroconsult Sp. z o.o.</p>
}
export const Page404Data = {
    Content: <p><span style={{color: '#BF1E2D'}}>404</span><br/>Strona której szukasz <span style={{color: '#BF1E2D'}}>nie istnieje</span></p>,
    BtnTitle: 'Powrót na stronę główną',
    BtnLink: '/'
}
export const SuccessPageData = {
    Content: <p><span style={{color: '#BF1E2D'}}>Sukces!</span><br/>Wiadomość została<span style={{color: '#BF1E2D'}}> wysłana z powodzeniem</span></p>,
    BtnTitle: 'Powrót na stronę główną',
    BtnLink: '/'
}