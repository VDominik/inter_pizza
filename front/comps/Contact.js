const Contact = () => {
    return(
    <div className="contact">
        <div className="about">
            <h1>Kontakt</h1>
        </div>

        <div className="popis">
            <p>Nájdete nás na adrese:</p>
            <p>Trieda Andreja Hlinku 1, 949 74 Nitra-Chrenová</p>
            <h4>Telefón:</h4>
            <p>0908155266</p>
            <h4>Email:</h4>
            <p>interactivepizza@gmail.com</p>
            <div className="socials">
                <h5>Sledujte nás aj na:</h5>
                <p>FB</p>
                <p>IG</p>
                <p>TW</p>
            </div>
        </div>

        <div className="mapa">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2653.7125542727085!2d18.089252315200426!3d48.30837954722893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476b3ee43b2f6763%3A0x75a567f979f5bed3!2sUniverzita%20Kon%C5%A1tant%C3%ADna%20Filozofa!5e0!3m2!1ssk!2ssk!4v1650308591459!5m2!1ssk!2ssk"
                width="400" height="300" style={{border:"0"}} allowFullScreen="" loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
    </div>

    )
}
export default Contact;