import React from 'react'
import "../../styles/footer.css"
import Name from './name'
import Links from './links'
import TelegramLink from './telegram_link'

const Footer = () => {
    return (
        <footer class="footer">
            <div class="container">
                <div class="footer-row">
                    <Name></Name>
                    <Links></Links>
                    <TelegramLink></TelegramLink>
                </div>
            </div>
        </footer>
    )
}

export default Footer
