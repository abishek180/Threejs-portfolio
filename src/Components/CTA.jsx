import { Link } from "react-router-dom"
const CTA = () => {
  return (
    <section className="cta">
        <p className="text-black-500 font-extrabold flex-1 text-3xl max-md:text-center">
            Have a project in Mind?<br className="sm:block hidden"/>
            Let's build something together!
        </p>
        <Link to="/contact" className="btn">Contact</Link>
    </section>
  )
}

export default CTA