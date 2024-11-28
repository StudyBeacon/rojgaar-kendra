import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebook,
  faXTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
  return (
    <footer className="bg-darkBlue text-aliceBlue py-8">
      <div className="container mx-auto text-center">
        <p className="text-lg font-semibold mb-2">Follow us on</p>
        <div className="flex justify-center space-x-6">
          <a className="hover:text-blue-500 cursor-pointer">
            <FontAwesomeIcon icon={faFacebook} size="lg" />
          </a>

          <a className="hover:text-blue-300 cursor-pointer">
            <FontAwesomeIcon icon={faXTwitter} size="lg" />
          </a>

          <a className="hover:text-pink-500 cursor-pointer">
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>

          <a className="hover:text-blue-700 cursor-pointer">
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </a>
        </div>

        <p className="mt-4 text-sm">
          © {new Date().getFullYear()} Rojgaar केन्द्र. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
