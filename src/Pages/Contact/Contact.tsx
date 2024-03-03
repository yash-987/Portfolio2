import Footer from '../../Components/Footer/Footer';

function Contact() {
	return <div className="mt-14">{<Footer /> ? null : <Footer />}</div>;
}

export default Contact;
